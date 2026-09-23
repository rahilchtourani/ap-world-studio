const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { res.status(500).json({ error: 'Server is missing GEMINI_API_KEY.' }); return; }
  const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = {}; } }
    const prompt = body && body.prompt;
    const tier = (body && body.tier) || 'default';
    if (!prompt || typeof prompt !== 'string') { res.status(400).json({ error: 'Missing prompt' }); return; }

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/'
      + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(apiKey);
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: tier === 'complex' ? 0.6 : 0.7, maxOutputTokens: 8192, responseMimeType: 'application/json' }
    };

    const MAX_ATTEMPTS = 5;
    const BACKOFF_MS = [0, 700, 1600, 3200, 6000];
    let lastError = { status: 503, msg: 'The model is busy. Please try again shortly.' };

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      if (BACKOFF_MS[attempt - 1]) await sleep(BACKOFF_MS[attempt - 1]);
      let g, data;
      try {
        g = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
        data = await g.json().catch(() => null);
      } catch (netErr) { lastError = { status: 502, msg: 'Network error: ' + String((netErr && netErr.message) || netErr) }; continue; }

      if (g.ok) {
        const cand = (data && data.candidates && data.candidates[0]) || null;
        const parts = (cand && cand.content && cand.content.parts) || [];
        const text = parts.map(p => (p && p.text) || '').join('');
        if (text) { res.status(200).json({ text }); return; }
        const reason = (cand && cand.finishReason) || (data && data.promptFeedback && data.promptFeedback.blockReason) || 'empty response';
        res.status(502).json({ error: 'No content returned (' + reason + '). Try rephrasing or reducing the count.' }); return;
      }
      const status = g.status;
      const msg = (data && data.error && data.error.message) || ('Gemini API error ' + status);
      const transient = status === 429 || status === 500 || status === 502 || status === 503 || status === 504
        || /overloaded|high demand|unavailable|temporarily|try again|exhausted/i.test(msg);
      if (transient) { lastError = { status, msg }; continue; }
      res.status(status).json({ error: msg }); return;
    }
    res.status(503).json({ error: 'The AI model is busy right now (high demand from Google). This is temporary — please try again in a few seconds.' });
  } catch (e) { res.status(500).json({ error: String((e && e.message) || e) }); }
};
