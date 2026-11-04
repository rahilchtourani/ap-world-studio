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

**Done:** All nine units have 8 paragraph documents each (about 140–300 words), in the override blocks at the bottom of `documents.js`. Units 1–3 came first. Units 4–9 were added in November 2026.
**Left:** Nothing required. The short-excerpt blocks at the top of `documents.js` are now fully overridden and could be deleted.

### How Units 4–9 were sourced (cloud session, Nov 2026)
That session's network allowed only GitHub, so texts came from GitHub-hosted copies of the same public-domain editions:
- **Project Gutenberg texts** came via the GITenberg mirrors (`github.com/GITenberg/<Title>_<ID>`). Citation URLs still point to `gutenberg.org/ebooks/<ID>`.
- **U.S. presidential speeches** came from the Miller Center corpus (`github.com/changwu/presidential-speeches`). Citation URLs point to millercenter.org.
- **UN General Assembly speeches** (Nkrumah, Khrushchev and Sukarno in 1960; Shevardnadze 1988; Maldives 1990; Mandela 1994) came from the UN General Debate Corpus (`github.com/MafiAtUN/osaa-unga-analysis`). Citation URLs point to those exact files.
- **Other texts:** the UDHR came from NLTK's `udhr` corpus, Nehru from the GUM corpus, Ho Chi Minh from OpenStax *World History* vol. 2 (CC BY), and the Millennium Declaration from `yuiseki/undocs`.
Each excerpt was cut by exact start/end anchors, with "…" joining the cut pieces. Poems use " / " for line breaks and " // " for stanza breaks. These OCR or typesetting slips were corrected:
- Bolívar: "coll"→"collapse", "mono"→"monopoly"
- Keynes: "polities"→"politics"
- NAFTA speech: "file basis"→"the basis"
- Kennedy: "own' freedom"→"own freedom"
- Sukarno and Shevardnadze: dash spacing
- Nkrumah: "self- appointed"→"self-appointed"

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

(Some of the leads above for Units 4–9 were used. Others weren't reachable and were replaced: Burke, Mazzini, Lin Zexu, Carnegie, the Versailles and Atlantic Charter texts, Kennan, Res. 1514, Rio, Kyoto and Brundtland. Brundtland is copyrighted anyway.)

Rahil's own recent web uploads added short excerpts: Ibn Battuta on Cairo, Hormuz and Delhi, Ain-i-Akbari "Royalty is a light emanating from God," Las Casas, and Tordesillas. Consider lengthening these into paragraph versions where they fit.

## Later
- Custom domain `rahiltourani.com`: Rahil buys it in Vercel → Settings → Domains (deferred).
