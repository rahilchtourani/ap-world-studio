/* ============================================================================
   Sourcebook Studio — Real Document Bank
   Verbatim public-domain primary-source excerpts for AP World History: Modern,
   with citations and source links. Used by the DBQ builder's "real documents"
   mode. Grow this toward ~7 documents per unit.

   Each document: { source, url, content, topic? }
     source  — full citation (author, work, date, translator/edition)
     url     — link to the source page so anyone can verify/expand the excerpt
     content — the VERBATIM excerpt (do not paraphrase)
     topic   — optional short tag (which sub-theme it supports)
   Only units with at least one document appear in the tool's picker.
   ============================================================================ */
window.DOC_BANK = {
  unit1: {
    label: 'Unit 1 — The Global Tapestry (c. 1200–1450)',
    documents: []
  },
  unit2: {
    label: 'Unit 2 — Networks of Exchange (c. 1200–1450)',
    documents: [
      { source: 'Marco Polo, "On the Tartars," The Travels of Marco Polo (late 13th century).',
        url: 'https://sourcebooks.fordham.edu/source/mpolo44-46.asp',
        topic: 'Mongol society & military',
        content: 'The women attend to their trading concerns, buy and sell, and provide everything necessary for their husbands and their families; the time of the men is devoted entirely to hunting, hawking, and matters that relate to the military life.' },
      { source: 'Marco Polo on Kinsay (Hangzhou), The Book of Ser Marco Polo, trans. Henry Yule, 3rd ed. rev. Henri Cordier (London, 1903).',
        url: 'https://sourcebooks.fordham.edu/source/polo-kinsay.asp',
        topic: 'Commerce in Yuan China',
        content: 'All the ten market places are encompassed by lofty houses, and below these are shops where all sorts of crafts are carried on, and all sorts of wares are on sale, including spices and jewels and pearls.' },
      { source: 'Ibn Battuta, Travels in Asia and Africa 1325-1354 (on the East African port of Kilwa), trans. H. A. R. Gibb (1929).',
        url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp',
        topic: 'Indian Ocean / East Africa',
        content: 'Kulwa is a very fine and substantially built town, and all its buildings are of wood. Its inhabitants are constantly engaged in military expeditions, for their country is contiguous to the heathen Zanj.' },
      { source: 'Giovanni Boccaccio, The Decameron (c. 1350), trans. J. M. Rigg (London, 1921).',
        url: 'https://sourcebooks.fordham.edu/source/boccacio2.asp',
        topic: 'Spread of the Black Death',
        content: 'It had had its origin some years before in the East, whence, after destroying an innumerable multitude of living beings, it had propagated itself without respite from place to place, and so calamitously, had spread into the West.' }
    ]
  },
  unit3: {
    label: 'Unit 3 — Land-Based Empires (c. 1450–1750)',
    documents: [
      { source: 'Ogier Ghiselin de Busbecq, Turkish Letters (c. 1555), in Forster & Daniel, eds., The Life and Letters of Ogier Ghiselin de Busbecq, Vol. I (London, 1881).',
        url: 'https://sourcebooks.fordham.edu/mod/1555busbecq.asp',
        topic: 'Ottoman meritocratic administration',
        content: 'It is by merit that men rise in the service, a system which ensures that posts should only be assigned to the competent.' }
    ]
  },
  unit4: {
    label: 'Unit 4 — Transoceanic Interconnections (c. 1450–1750)',
    documents: [
      { source: 'Christopher Columbus, Journal of the First Voyage (1492), in J. E. Olson & E. G. Bourne, eds., The Northmen, Columbus, and Cabot, 985–1503 (New York: Scribner’s, 1906).',
        url: 'https://sourcebooks.fordham.edu/source/columbus1.asp',
        topic: 'First contact in the Americas',
        content: 'As I saw that they were very friendly to us, and perceived that they could be much more easily converted to our holy faith by gentle means than by force, I presented them with some red caps, and strings of beads to wear upon the neck.' }
    ]
  },
  unit5: {
    label: 'Unit 5 — Revolutions (c. 1750–1900)',
    documents: [
      { source: 'Declaration of the Rights of Man and of the Citizen, National Assembly of France, August 26, 1789 (Avalon Project, Yale Law School).',
        url: 'https://avalon.law.yale.edu/18th_century/rightsof.asp',
        topic: 'Enlightenment ideals & revolution',
        content: 'Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good. The aim of all political association is the preservation of the natural and imprescriptible rights of man.' }
    ]
  },
  unit6: {
    label: 'Unit 6 — Consequences of Industrialization (c. 1750–1900)',
    documents: [
      { source: 'Rudyard Kipling, “The White Man’s Burden,” 1899.',
        url: 'https://sourcebooks.fordham.edu/mod/kipling.asp',
        topic: 'Ideology of imperialism',
        content: 'Take up the White Man’s burden— / Send forth the best ye breed— / Go bind your sons to exile / To serve your captives’ need;' },
      { source: 'Karl Marx & Friedrich Engels, Manifesto of the Communist Party (1848), Chapter 1.',
        url: 'https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm',
        topic: 'Class conflict & reactions to industrialization',
        content: 'The history of all hitherto existing society is the history of class struggles. Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another.' }
    ]
  },
  unit7: {
    label: 'Unit 7 — Global Conflict (c. 1900–present)',
    documents: []
  },
  unit8: {
    label: 'Unit 8 — Cold War & Decolonization (c. 1900–present)',
    documents: []
  },
  unit9: {
    label: 'Unit 9 — Globalization (c. 1900–present)',
    documents: []
  }
};
