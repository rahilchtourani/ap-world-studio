// Local load test for api/generate.js — no real Gemini key or quota used.
//
//   node scripts/loadtest.js            (all scenarios)
//   node scripts/loadtest.js storm      (one scenario)
//
// Starts a stub "Gemini" on localhost (via GEMINI_BASE_URL), fires N concurrent
// requests at the function handler, and reports per-request upstream calls,
// latency and the status/retryAfter each client got back.

const http = require('http');
const path = require('path');
const { AsyncLocalStorage } = require('async_hooks');

const N = parseInt(process.env.N || '40', 10);
const als = new AsyncLocalStorage();

// ---- stub Gemini --------------------------------------------------------
// Per-model fixed-window quota (rpm requests per minute, window starts at the
// test start). Over quota → 429 with RetryInfo.retryDelay = time to next window.
function makeStub(cfg) {
  const t0 = Date.now();
  const used = {};
  const stats = { calls: 0, ok: 0, r429: 0, r503: 0, byModel: {} };
  const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', async () => {
      stats.calls++;
      const model = decodeURIComponent((req.url.match(/models\/([^:]+):/) || [])[1] || '?');
      stats.byModel[model] = (stats.byModel[model] || 0) + 1;
      const key = req.headers['x-goog-api-key'];
      if (key !== 'test-key') { res.writeHead(400, { 'content-type': 'application/json' }); res.end(JSON.stringify({ error: { message: 'API key not valid.' } })); return; }
      if (cfg.unknown && cfg.unknown.includes(model)) {
        res.writeHead(404, { 'content-type': 'application/json' }); res.end(JSON.stringify({ error: { message: 'models/' + model + ' is not found' } })); return;
      }
      if (cfg.overloaded && Math.random() < cfg.overloaded) {
        stats.r503++;
        res.writeHead(503, { 'content-type': 'application/json' }); res.end(JSON.stringify({ error: { message: 'The model is overloaded. Please try again later.' } })); return;
      }
      const win = Math.floor((Date.now() - t0) / 60000);
      const k = model + '@' + win;
      used[k] = (used[k] || 0) + 1;
      if (used[k] > cfg.rpm) {
        stats.r429++;
        const toNext = Math.max(1, Math.ceil((t0 + (win + 1) * 60000 - Date.now()) / 1000));
        res.writeHead(429, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ error: { code: 429, status: 'RESOURCE_EXHAUSTED', message: 'You exceeded your current quota.', details: [
          { '@type': 'type.googleapis.com/google.rpc.QuotaFailure', violations: [{ quotaId: cfg.daily ? 'GenerateRequestsPerDayPerProjectPerModel-FreeTier' : 'GenerateRequestsPerMinutePerProjectPerModel-FreeTier' }] },
          { '@type': 'type.googleapis.com/google.rpc.RetryInfo', retryDelay: toNext + 's' }
        ] } }));
        return;
      }
      const [lo, hi] = cfg.latency;
      await new Promise((r) => setTimeout(r, lo + Math.random() * (hi - lo)));
      if (res.destroyed || res.writableEnded) return;
      stats.ok++;
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ candidates: [{ content: { parts: [{ text: '{"cards":[]}' }] } }] }));
    });
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ server, stats, port: server.address().port })));
}

// ---- mock Vercel req/res -----------------------------------------------
function invoke(handler, { prompt = 'Make flashcards about the Mongols.', headers = {} } = {}) {
  return new Promise((resolve) => {
    const out = { status: 200, headers: {}, body: null };
    const res = {
      setHeader(k, v) { out.headers[k.toLowerCase()] = v; },
      status(s) { out.status = s; return res; },
      json(b) { out.body = b; resolve(out); return res; }
    };
    const req = { method: 'POST', headers: { host: 'class.example.app', ...headers }, body: { prompt, tier: 'default' } };
    handler(req, res);
  });
}

const SCENARIOS = {
  // Quota of 5 RPM per model (×3 models), success takes 10–30s.
  storm: { rpm: 5, latency: [10000, 30000], secondWave: true },
  // Same, but the primary model id is wrong (dead-model path).
  deadPrimary: { rpm: 5, latency: [10000, 30000], unknown: ['gemini-3.6-flash'] },
  // Daily quota exhausted on every model: should fail fast with a long retryAfter.
  daily: { rpm: 0, latency: [1000, 1000], daily: true },
  // Upstream hangs for 80s: function must still answer inside the 50s budget.
  hang: { rpm: 100, latency: [80000, 80000] },
  // Google returns 503 "overloaded" half the time; plenty of quota.
  overloaded: { rpm: 100, latency: [5000, 15000], overloaded: 0.5 },
};

async function run(name) {
  const cfg = SCENARIOS[name];
  const { server, stats, port } = await makeStub(cfg);
  process.env.GEMINI_BASE_URL = 'http://127.0.0.1:' + port;
  process.env.GEMINI_API_KEY = 'test-key';
  delete require.cache[require.resolve('../api/generate.js')];
  const handler = require(path.join(__dirname, '../api/generate.js'));

  // Count upstream calls per client request.
  const realFetch = global.fetch;
  global.fetch = (...a) => { const s = als.getStore(); if (s) s.calls++; return realFetch(...a); };

  const fire = () => Promise.all(Array.from({ length: N }, () => {
    const ctx = { calls: 0 };
    return als.run(ctx, async () => {
      const s = Date.now();
      const r = await invoke(handler);
      return { status: r.status, retryAfter: r.body && r.body.retryAfter, ms: Date.now() - s, calls: ctx.calls };
    });
  }));
  const report = (label, results, t0, before) => {
    const by = {};
    results.forEach((r) => (by[r.status] = (by[r.status] || 0) + 1));
    const calls = results.map((r) => r.calls), ms = results.map((r) => r.ms);
    const fails = results.filter((r) => r.status !== 200);
    const ras = fails.map((r) => r.retryAfter);
    console.log(`\n== ${label}`);
    console.log(`  statuses:            ${JSON.stringify(by)}`);
    console.log(`  upstream calls/req:  max ${Math.max(...calls)}, avg ${(calls.reduce((a, b) => a + b, 0) / N).toFixed(2)}  (stub saw ${stats.calls - before.calls}: ${stats.ok - before.ok} ok, ${stats.r429 - before.r429} × 429, ${stats.r503 - before.r503} × 503)`);
    console.log(`  latency:             min ${(Math.min(...ms) / 1000).toFixed(1)}s, max ${(Math.max(...ms) / 1000).toFixed(1)}s  (wall ${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    if (fails.length) console.log(`  failures w/ retryAfter: ${ras.filter((x) => x > 0).length}/${fails.length}  (range ${Math.min(...ras)}–${Math.max(...ras)}s)`);
  };

  let t0 = Date.now(), before = { ...stats };
  const results = await fire();
  report(`${name} (${N} concurrent, ${JSON.stringify(cfg)})`, results, t0, before);
  if (cfg.secondWave) {
    // Same warm instance, another burst right after: shared cooldowns should
    // stop it from re-hitting models Google already said are out of quota.
    t0 = Date.now(); before = { ...stats };
    report(`${name} — second burst of ${N} on the same warm instance`, await fire(), t0, before);
  }
  global.fetch = realFetch;
  server.close(); server.closeAllConnections && server.closeAllConnections();
  return { name, results, stats };
}

async function guards() {
  process.env.GEMINI_API_KEY = 'test-key';
  process.env.GEMINI_BASE_URL = 'http://127.0.0.1:9'; // never reached
  delete require.cache[require.resolve('../api/generate.js')];
  const h = require(path.join(__dirname, '../api/generate.js'));
  const cases = [
    ['missing prompt', { prompt: '' }],
    ['oversized prompt (60k chars)', { prompt: 'x'.repeat(60000) }],
    ['foreign Origin', { headers: { origin: 'https://evil.example.com' } }],
    ['foreign Referer', { headers: { referer: 'https://evil.example.com/page' } }],
  ];
  console.log('\n== guards');
  for (const [label, opts] of cases) { const r = await invoke(h, opts); console.log(`  ${label.padEnd(30)} → ${r.status} ${JSON.stringify(r.body).slice(0, 90)}`); }
}

(async () => {
  const only = process.argv[2];
  await guards();
  for (const name of Object.keys(SCENARIOS)) if (!only || only === name) await run(name);
})();
