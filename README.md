# Sourcebook Studio — deployment guide

A website that turns AP World History readings (or a named AMSCO section) into
classroom materials: flashcards, worksheets, quizzes, vocabulary, study guides,
and skills sheets (Sourcing/HIPP, causation, comparison, and more). It runs on
**your own Google Gemini API key**, which stays secret on the server.

## What's in this folder

```
ap-world-studio/
├─ index.html        ← the whole website (the interface)
├─ api/
│  └─ generate.js    ← the tiny server function that holds your key & calls Gemini
└─ README.md         ← this file
```

You don't need to edit any of these files to deploy. The only thing you provide
is your Gemini API key, added as a secret setting in Vercel (never in the code).

---

## Deploy it for free (about 10 minutes, all in your browser)

This uses **GitHub** (to hold the files) + **Vercel** (to host the site and run
the key safely). Both are free and you sign in with the same email/Google if you like.

### Step 1 — Put the files on GitHub

1. Go to **github.com** and sign in (create a free account if needed).
2. Click the **+** in the top-right → **New repository**.
3. Name it anything (e.g. `ap-world-studio`), keep it **Private**, click **Create repository**.
4. On the next page click **uploading an existing file**.
5. Open this `ap-world-studio` folder on your computer and **drag `index.html` and
   the `api` folder into the upload box** (drag the whole `api` folder so
   `api/generate.js` comes along).
6. Click **Commit changes**.

### Step 2 — Deploy on Vercel

1. Go to **vercel.com** and click **Sign Up** → **Continue with GitHub** (easiest).
2. Click **Add New… → Project**.
3. Find your `ap-world-studio` repo in the list and click **Import**.
4. **Before** clicking Deploy, open **Environment Variables** and add:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** paste your Gemini key (the one starting with `AQ…`)
   - Click **Add**.
5. Click **Deploy** and wait about a minute.
6. Vercel gives you a link like `https://ap-world-studio.vercel.app` — that's your site. 🎉

That's it. Open the link, paste a reading (or name an AMSCO section), pick what to
make, and click **Generate**.

---

## Everyday notes

- **Your key is safe.** It lives only in Vercel's Environment Variables, never in the
  page or the browser. If you ever think it leaked, delete it in Google AI Studio,
  create a new one, and update the `GEMINI_API_KEY` value in Vercel → Settings →
  Environment Variables (then redeploy).
- **Free-tier limits.** Google's free tier limits how often you can generate (roughly
  a few requests per minute). If you see a "hit the free-tier limit" message, wait a
  minute and try again. Fine for one teacher; for heavy/shared use you'd add billing.
- **Changing the model.** The function uses `gemini-3.6-flash`. To use a different
  Gemini model, add another Environment Variable in Vercel named `GEMINI_MODEL` with
  the model name as its value, then redeploy. No code change needed.
- **Updating the site later.** Edit `index.html` (or `api/generate.js`) on your
  computer, upload the changed file to your GitHub repo again (Add file → Upload
  files), and Vercel automatically redeploys within a minute.
- **Keeping it private.** By default the site is public at its link but not listed
  anywhere — only people you send the link to can find it. You can add password
  protection in Vercel's project settings (a paid feature) if you want.

## Prefer the command line? (optional, needs Node.js)

If you're comfortable in a terminal, you can skip GitHub:

```bash
npm install -g vercel      # one-time
cd ap-world-studio
vercel                     # follow the prompts to create the project
vercel env add GEMINI_API_KEY    # paste your key when asked
vercel --prod              # deploy the live version
```

`vercel dev` also runs the whole thing (site + function) locally at
`http://localhost:3000` for testing before you deploy.
