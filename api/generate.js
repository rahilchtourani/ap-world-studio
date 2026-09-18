// Serverless function (runs on Vercel) that turns a prompt into material.
// Your Gemini API key lives ONLY here, as an environment variable.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is missing GEMINI_API_KEY. Add it in Vercel → Settings → Environment Variables, then redeploy.' });
    return;
  }
  const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = {}; } }
    const prompt = body && body.prompt;
    const tier = (body && body.tier) || 'default';
    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Missing prompt' });
      return;
    }
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/'
      + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(apiKey);
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: tier === 'complex' ? 0.6 : 0.7,
          maxOutputTokens: 8192,
          responseMimeType: 'application/json'
        }
      })
    });
    const data = await geminiRes.json().catch(() => null);
    if (!geminiRes.ok) {
      const msg = (data && data.error && data.error.message) || ('Gemini API error ' + geminiRes.status);
      res.status(geminiRes.status).json({ error: msg });
      return;
    }
    const candidate = (data && data.candidates && data.candidates[0]) || null;
    const parts = (candidate && candidate.content && candidate.content.parts) || [];
    const text = parts.map(p => (p && p.text) || '').join('');
    if (!text) {
      const reason = (candidate && candidate.finishReason)
        || (data && data.promptFeedback && data.promptFeedback.blockReason)
        || 'empty response';
      res.status(502).json({ error: 'No content returned (' + reason + '). Try rephrasing the source or reducing the count.' });
      return;
    }
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
