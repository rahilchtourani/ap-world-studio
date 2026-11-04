// Serverless function (runs on Vercel) that turns a prompt into material.
// Your Gemini API key lives ONLY here, as an environment variable — never in the browser.
//
// Reliability under class-sized load (30–40 students clicking at once):
//  * It tries your MAIN model first, then lighter fallbacks, but makes at most
//    MAX_ATTEMPTS upstream calls per click (default 4) so a 429 storm doesn't
//    burn the shared quota even faster.
//  * On a 429 it reads Gemini's RetryInfo.retryDelay and puts that model on
//    cooldown instead of hammering it again right away.
//  * The whole request has a time budget (default 50s) that keeps it under
//    Vercel's 60s maxDuration, so the browser always gets a clean JSON answer.
//  * When it finally gives up it returns 429/503 with `retryAfter` (seconds)
//    so the page can wait and retry on its own.
//  * A bad/unknown model id is skipped harmlessly rather than surfaced as an error.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const envInt = (name, dflt) => {
  const n = parseInt(process.env[name], 10);
  return Number.isFinite(n) && n > 0 ? n : dflt;
};

// The page sends at most ~14k chars of source text + ~4k of instructions, or a
// real-documents DBQ (~11k of documents). 40k leaves room for a long "focus"
// note while still rejecting giant payloads aimed at the shared key.
const MAX_PROMPT_CHARS = envInt('MAX_PROMPT_CHARS', 40000);
const MAX_ATTEMPTS = envInt('GEMINI_MAX_ATTEMPTS', 4);
const BUDGET_MS = envInt('GEMINI_BUDGET_MS', 50000);
const MIN_CALL_MS = 8000;        // don't start a new upstream call with less time than this left
const DEFAULT_COOLDOWN_MS = 2000; // cooldown after a 5xx/overload, or a 429 without retryDelay
const DAILY_RECHECK_MS = 5 * 60 * 1000; // after a per-day quota 429, re-probe that model this often

// model → timestamp it may be tried again. Module-level, so concurrent requests
// served by the same warm instance share what Google told us and don't re-hit
// a model that is out of quota.
const coolUntil = new Map();
const cool = (m, ms) => { const t = Date.now() + ms; if ((coolUntil.get(m) || 0) < t) coolUntil.set(m, t); };

function hostOf(v) {
  try { return new URL(v).host.toLowerCase(); } catch (_) { return null; }
}

// Reject cross-site callers. Browsers always send Origin on a cross-origin POST;
// a missing header (curl, server-to-server) is allowed through so nothing breaks.
function originAllowed(req) {
  const h = req.headers || {};
  const own = String(h['x-forwarded-host'] || h.host || '').split(',')[0].trim().toLowerCase();
  const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => hostOf(s.trim()) || s.trim().toLowerCase()).filter(Boolean);
  const allowed = new Set([own, ...extra].filter(Boolean));
  for (const name of ['origin', 'referer']) {
    const v = h[name];
    if (!v || v === 'null') continue;
    const host = hostOf(v);
    return !!host && allowed.has(host);
  }
  return true;
}

// "12s" / "1.5s" / {seconds, nanos} → milliseconds
function parseDuration(d) {
  if (!d) return null;
  if (typeof d === 'string') { const n = parseFloat(d); return Number.isFinite(n) ? Math.round(n * 1000) : null; }
  if (typeof d === 'object') { const s = Number(d.seconds || 0) + Number(d.nanos || 0) / 1e9; return s > 0 ? Math.round(s * 1000) : null; }
  return null;
}

function rateLimitInfo(data) {
  const details = (data && data.error && Array.isArray(data.error.details)) ? data.error.details : [];
  let retryMs = null, daily = false;
  for (const d of details) {
    const t = String((d && d['@type']) || '');
    if (/RetryInfo$/.test(t)) retryMs = parseDuration(d.retryDelay);
    if (/QuotaFailure$/.test(t) && Array.isArray(d.violations)) {
      if (d.violations.some((v) => /PerDay/i.test(String((v && (v.quotaId || v.quotaMetric)) || '')))) daily = true;
    }
  }
  return { retryMs, daily };
}

module.exports = async (req, res) => {
  const started = Date.now();
  const deadline = started + BUDGET_MS;
  const left = () => deadline - Date.now();

  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }
  if (!originAllowed(req)) { res.status(403).json({ error: 'Forbidden' }); return; }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Add it in Vercel → Settings → Environment Variables, then redeploy.' });
    return;
  }

  // Primary model (best quality), then lighter/faster fallbacks used only when
  // the primary is busy. Override either via env vars if Google renames them.
  const primary = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  // Fallbacks used only when the primary is overloaded: a full-quality Flash
  // model first, then a lite model as an absolute last resort.
  const fallbacks = (process.env.GEMINI_FALLBACK_MODELS || 'gemini-3.5-flash,gemini-3.5-flash-lite')
    .split(',').map(s => s.trim()).filter(Boolean);
  const models = [primary, ...fallbacks.filter(m => m !== primary)];
  const base = (process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com').replace(/\/+$/, '');

  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = {}; } }
    const prompt = body && body.prompt;
    const tier = (body && body.tier) || 'default';
    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) { res.status(400).json({ error: 'Missing prompt' }); return; }
    if (prompt.length > MAX_PROMPT_CHARS) {
      res.status(413).json({ error: 'That source is too long (' + prompt.length + ' characters; the limit is ' + MAX_PROMPT_CHARS + '). Shorten it and try again.' });
      return;
    }

    const payload = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: tier === 'complex' ? 0.6 : 0.7,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json'
      }
    });
    const urlFor = (m) => base + '/v1beta/models/' + encodeURIComponent(m) + ':generateContent';

    const dead = new Set();        // bad/unknown model id, or daily quota gone — skip for this request
    let attempts = 0;
    let saw429 = false;
    let lastMsg = '';
    let hintMs = 0;                // best guess at when trying again could work

    const fail = () => {
      const now = Date.now();
      const waits = models.filter(m => !dead.has(m)).map(m => (coolUntil.get(m) || now) - now);
      let ms = waits.length ? Math.min(...waits) : hintMs;
      if (!ms || ms < 0) ms = hintMs || 5000;
      const retryAfter = Math.min(3600, Math.max(2, Math.ceil(ms / 1000)));
      res.setHeader('Retry-After', String(retryAfter));
      res.status(saw429 ? 429 : 503).json({
        error: saw429
          ? 'Lots of people are generating right now and the AI quota is temporarily used up. Please try again in ' + retryAfter + 's.'
          : 'The AI is busy right now (high demand from Google). This is temporary — please try again in a few seconds.',
        retryAfter,
        detail: lastMsg || undefined
      });
    };

    while (attempts < MAX_ATTEMPTS) {
      const live = models.filter(m => !dead.has(m));
      if (!live.length) break;

      // First live model that isn't cooling down; otherwise wait for the soonest one.
      const now = Date.now();
      let m = live.find(x => (coolUntil.get(x) || 0) <= now);
      if (!m) {
        m = live.reduce((a, b) => (coolUntil.get(a) || 0) <= (coolUntil.get(b) || 0) ? a : b);
        const wait = (coolUntil.get(m) || 0) - now;
        if (wait > left() - MIN_CALL_MS) break; // not enough budget left to wait it out
        await sleep(wait);
      }
      if (left() < MIN_CALL_MS) break;

      attempts++;
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), Math.max(1000, left() - 1500));
      let g, data;
      try {
        g = await fetch(urlFor(m), {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
          body: payload,
          signal: ctrl.signal
        });
        data = await g.json().catch(() => null);
      } catch (netErr) {
        clearTimeout(timer);
        if (ctrl.signal.aborted) { lastMsg = 'Generation took too long.'; hintMs = Math.max(hintMs, 5000); break; }
        lastMsg = 'Network error: ' + String((netErr && netErr.message) || netErr);
        cool(m, DEFAULT_COOLDOWN_MS);
        continue;
      }
      clearTimeout(timer);

      if (g.ok) {
        const cand = (data && data.candidates && data.candidates[0]) || null;
        const parts = (cand && cand.content && cand.content.parts) || [];
        const text = parts.map(p => (p && p.text) || '').join('');
        if (text) { res.status(200).json({ text }); return; }
        // Empty body (safety block / bad finish) — try the next model.
        lastMsg = 'No content returned.';
        cool(m, DEFAULT_COOLDOWN_MS);
        continue;
      }

      const status = g.status;
      const msg = (data && data.error && data.error.message) || ('Gemini API error ' + status);
      lastMsg = msg;

      // Key problems are real failures — no point trying other models.
      if (/api[_ ]?key not valid|api key expired|invalid api key|permission denied|unregistered caller/i.test(msg) || status === 401 || status === 403) {
        res.status(status === 400 ? 401 : status).json({ error: msg });
        return;
      }

      if (status === 429) {
        saw429 = true;
        const { retryMs, daily } = rateLimitInfo(data);
        if (daily) {
          dead.add(m);                       // today's quota for this model is gone
          cool(m, DAILY_RECHECK_MS);
          hintMs = Math.max(hintMs, 3600 * 1000);
        } else {
          const cd = retryMs != null ? retryMs : DEFAULT_COOLDOWN_MS * 2;
          cool(m, cd);
          hintMs = Math.max(hintMs, cd);
        }
        continue;
      }

      // Unknown/invalid model id — retire this model, keep going with the others.
      if (status === 404 || status === 400 || /not found|not supported|does not exist|unknown model|no longer available|invalid model/i.test(msg)) {
        dead.add(m);
        continue;
      }

      // Transient overload/5xx — cool this model briefly; a lighter one may be free.
      const transient = status === 500 || status === 502 || status === 503 || status === 504
        || /overloaded|high demand|unavailable|temporarily|try again|exhausted/i.test(msg);
      if (transient) {
        cool(m, DEFAULT_COOLDOWN_MS);
        hintMs = Math.max(hintMs, DEFAULT_COOLDOWN_MS);
        continue;
      }

      // Anything else is a real failure — stop now.
      res.status(status).json({ error: msg });
      return;
    }

    // Every model is retired for a non-quota reason (e.g. all ids wrong).
    if (!saw429 && models.every(m => dead.has(m))) {
      res.status(502).json({ error: lastMsg || 'No usable Gemini model. Check GEMINI_MODEL in Vercel settings.' });
      return;
    }
    fail();
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
