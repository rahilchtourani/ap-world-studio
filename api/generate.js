const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { res.status(500).json({ error: 'Server is missing GEMINI_API_KEY.' }); return; }

  const primary = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  // full-quality Flash first, lite only as a last resort:
  const fallbacks = (process.env.GEMINI_FALLBACK_MODELS || 'gemini-3.5-flash,gemini-3.5-flash-lite')
    .split(',').map(s => s.trim()).filter(Boolean);
  const models = [primary, ...fallbacks.filter(m => m !== primary)];

  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = {}; } }
    const prompt = body && body.prompt;
    const tier = (body && body.tier) || 'default';
    if (!prompt || typeof prompt !== 'string') { res.status(400).json({ error: 'Missing prompt' }); return; }

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: tier === 'complex' ? 0.6 : 0.7, maxOutputTokens: 8192, responseMimeType: 'application/json' }
    };
    const urlFor = (m) => 'https://generativelanguage.googleapis.com/v1beta/models/'
      + encodeURIComponent(m) + ':generateContent?key=' + encodeURIComponent(apiKey);

    const PASSES = 3;
    const PASS_BACKOFF_MS = [0, 1500, 4000];
    const dead = new Set();
    let lastError = { status: 503, msg: 'busy' };

    for (let pass = 0; pass < PASSES; pass++) {
      if (PASS_BACKOFF_MS[pass]) await sleep(PASS_BACKOFF_MS[pass]);
      for (const m of models) {
        if (dead.has(m)) continue;
        let g, data;
        try {
          g = await fetch(urlFor(m), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
          data = await g.json().catch(() => null);
        } catch (netErr) { lastError = { status: 502, msg: 'Network error' }; continue; }

        if (g.ok) {
          const cand = (data && data.candidates && data.candidates[0]) || null;
          const parts = (cand && cand.content && cand.content.parts) || [];
          const text = parts.map(p => (p && p.text) || '').join('');
          if (text) { res.status(200).json({ text }); return; }
          lastError = { status: 502, msg: 'No content returned.' }; continue;
        }
        const status = g.status;
        const msg = (data && data.error && data.error.message) || ('Gemini API error ' + status);
        if (status === 404 || status === 400 || /not found|not supported|does not exist|unknown model|no longer available|invalid model/i.test(msg)) {
          dead.add(m); lastError = { status, msg }; continue;
        }
        const transient = status === 429 || status === 500 || status === 502 || status === 503 || status === 504
          || /overloaded|high demand|unavailable|temporarily|try again|exhausted/i.test(msg);
        if (transient) { lastError = { status, msg }; continue; }
        res.status(status).json({ error: msg }); return;
      }
    }
    res.status(503).json({ error: 'The AI is busy right now (high demand from Google). This is temporary — please try again in a few seconds.' });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
