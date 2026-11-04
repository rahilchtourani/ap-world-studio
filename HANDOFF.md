# Handoff — Rahil Tourani's AP World Machine

**Live site:** https://touraniapworldmachine.vercel.app (Vercel, auto-deploys from GitHub `rahilchtourani/ap-world-studio`, branch `main`).
**Deploy:** this folder is a git repo connected to GitHub, and `gh` is logged in. Commit and run `git push origin main`, and Vercel redeploys in about a minute. Rahil sometimes uploads files through the GitHub website too, so **always run `git pull --rebase` before pushing**.

## Files
- `index.html` — the whole app (material types, Skills sheets, Exam practice SAQ/LEQ/DBQ, Quizlet export, PDF export). The DBQ "Use real public-domain documents" mode reads `window.DOC_BANK`.
- `api/generate.js` — Vercel function that calls Gemini (`gemini-3.6-flash`, falling back to `gemini-3.5-flash` and then `gemini-3.5-flash-lite`). The key is stored in the Vercel env var `GEMINI_API_KEY`.
- `documents.js` — the document bank. The top part has the older short excerpts. The bottom has `window.DOC_BANK.unitN = {...}` blocks that **override whole units** with paragraph-length documents.
- `vercel.json` — sets `maxDuration` to 60 for the function.

## Current task: paragraph-length DBQ documents
Rahil's requirements: **at least 7 documents per unit, each at least one realistic paragraph (aim for 120–250 words), cut verbatim from public-domain editions.** Each document is `{source, url, topic, content}`. Elide with "…" where needed, and fix only obvious OCR typos.

**Done:** Units 1, 2 and 3 each have 8 paragraph documents, in the override blocks at the bottom of `documents.js`.
**Left:** Units 4–9 still use the short excerpts. Add an override block `window.DOC_BANK.unitN = {label, documents:[…]}` for each one.

### Method that works
- Download full texts with `curl`. Python's SSL certificates are broken on this Mac, so use curl to fetch and Python only to parse. Use concurrency of about 4 and a User-Agent header. Wikisource returns 503 if you hit it with bursts.
- Project Gutenberg: `https://www.gutenberg.org/cache/epub/<ID>/pg<ID>.txt`
- Internet Archive OCR: `https://archive.org/download/<id>/<id>_djvu.txt`. Find the exact text filename at `https://archive.org/metadata/<id>`.
- Wikisource: `https://en.wikisource.org/w/api.php?action=parse&prop=text&format=json&formatversion=2&redirects=1&page=<Title>`
- Avalon Project (Yale) and Fordham `/mod/*.asp` pages fetch fine with curl.
- Avoid un-documents.net (it serves a bot-check page). Get UN texts from un.org or Wikisource instead.
- Do not use copyrighted modern translations or College Board material. Rahil was told this is a hard line.

### Source leads for Units 4–9 (already checked)
- **U4:** Las Casas (Gutenberg 20321; the "Tygers, Wolves" passage), Bernal Díaz (Gutenberg 32474), Equiano (Gutenberg 15399, Middle Passage), Columbus journal (Fordham source/columbus1.asp), Vasco da Gama journal (IA ajournalfirstvo02ravegoog), Thomas Mun, England's Treasure (Wikisource ch. 2), Adam Smith Book IV ch. 7 (Gutenberg 3300), Cortés (IA lettersofcorts01cortuoft), Treaty of Tordesillas.
- **U5:** Declaration of Independence (Avalon declare.asp), Rights of Man (Avalon rightsof.asp), Locke Second Treatise (Gutenberg 7370), Rousseau (Gutenberg 46333), Wollstonecraft (Gutenberg 3420), Paine Common Sense (Gutenberg 147), Bolívar (Fordham mod/1819bolivar.asp), Seneca Falls (Fordham mod/senecafalls.asp), Mazzini Duties of Man (IA in.ernet.dli.2015.190450), Burke (Gutenberg 15679).
- **U6:** Engels, Condition of the Working Class (Gutenberg 17306), Communist Manifesto (Gutenberg 61), Lin Zexu letter (Fordham mod/1839lin2.asp), Qianlong letter (Fordham mod/1793qianlong.asp), Ferry (mod/1884ferry.asp), Kipling (Wikisource The_Five_Nations/The_White_Man's_Burden), Carnegie (mod/1889carnegie.asp), Naoroji (IA povertyunbritish00naoruoft), Chinese Exclusion Act (Avalon), Perry (mod/1854Perry-japan1.asp), Chamberlain (mod/1885chamberlain.asp).
- **U7:** Wilson's Fourteen Points (Avalon wilson14.asp), League Covenant (Avalon leagcov.asp), Versailles Part VIII (Avalon imt/partviii.asp), Keynes, Economic Consequences of the Peace (Gutenberg 15776), Zimmermann Telegram, Owen's "Dulce et Decorum Est", the Balfour Declaration and Atlantic Charter (Avalon), FDR's Day of Infamy speech (Wikisource), Truman's Hiroshima statement (trumanlibrary.gov).
- **U8:** Truman Doctrine (Avalon trudoc.asp), Kennan Long Telegram (nsarchive2.gwu.edu), Kennedy inaugural (Avalon kennedy.asp), Ho Chi Minh (Wikisource Vietnamese_Declaration_of_Independence), Nehru's Tryst with Destiny (Wikisource), UN Resolution 1514, UDHR (un.org).
- **U9:** UN Charter (un.org full text), WHO Constitution, Rio Declaration, Millennium Declaration, Beijing Declaration (all on Wikisource), Schuman Declaration (Wikisource or europa.eu), Kyoto (unfccc.int kpeng.html), Reagan's Berlin Wall speech (Wikisource), Brundtland's Our Common Future.

Rahil's own recent web uploads added short excerpts: Ibn Battuta on Cairo, Hormuz and Delhi, Ain-i-Akbari "Royalty is a light emanating from God," Las Casas, and Tordesillas. Consider lengthening these into paragraph versions where they fit.

## Later
- Custom domain `rahiltourani.com`: Rahil buys it in Vercel → Settings → Domains (deferred).
