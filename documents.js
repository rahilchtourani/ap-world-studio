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
    documents: [
      { source: 'Magna Carta (1215), clauses 39–40, trans. Ernest F. Henderson, Select Historical Documents of the Middle Ages (London, 1892) — public domain.',
        url: 'https://en.wikisource.org/wiki/Magna_Carta',
        topic: 'Limits on royal power in Europe',
        content: 'No freeman shall be taken or imprisoned or disseised or outlawed or exiled or in any wise destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land. To no one will we sell, to no one will we refuse or delay, right or justice.' }
    ]
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
        content: 'Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good. The aim of all political association is the preservation of the natural and imprescriptible rights of man.' },
      { source: 'The unanimous Declaration of the thirteen united States of America (Declaration of Independence), July 4, 1776.',
        url: 'https://en.wikisource.org/wiki/United_States_Declaration_of_Independence',
        topic: 'Atlantic revolutions & natural rights',
        content: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.' }
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
    documents: [
      { source: 'Woodrow Wilson, “Fourteen Points,” address to a joint session of Congress, January 8, 1918.',
        url: 'https://en.wikisource.org/wiki/Fourteen_Points',
        topic: 'WWI aims & the postwar order',
        content: 'Open covenants of peace, openly arrived at, after which there shall be no private international understandings of any kind but diplomacy shall proceed always frankly and in the public view.' },
      { source: 'Arthur Balfour, Foreign Secretary, letter to Lord Rothschild (the Balfour Declaration), November 2, 1917.',
        url: 'https://en.wikisource.org/wiki/Balfour_Declaration',
        topic: 'WWI-era diplomacy & its legacies',
        content: 'His Majesty’s Government view with favour the establishment in Palestine of a national home for the Jewish people, and will use their best endeavours to facilitate the achievement of this object, it being clearly understood that nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine.' },
      { source: 'The Atlantic Charter, joint declaration of Franklin D. Roosevelt and Winston Churchill, August 14, 1941.',
        url: 'https://en.wikisource.org/wiki/Atlantic_Charter',
        topic: 'WWII aims & self-determination',
        content: 'Third, they respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self government restored to those who have been forcibly deprived of them.' }
    ]
  },
  unit8: {
    label: 'Unit 8 — Cold War & Decolonization (c. 1900–present)',
    documents: [
      { source: 'Universal Declaration of Human Rights, Article 1, adopted by the United Nations General Assembly, 1948.',
        url: 'https://en.wikisource.org/wiki/Universal_Declaration_of_Human_Rights',
        topic: 'Human rights & decolonization',
        content: 'All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.' },
      { source: 'Harry S. Truman, Address before a Joint Session of Congress (the Truman Doctrine), March 12, 1947.',
        url: 'https://en.wikisource.org/wiki/Truman_Doctrine',
        topic: 'Early Cold War containment',
        content: 'I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.' },
      { source: 'Ho Chi Minh, Declaration of Independence of the Democratic Republic of Vietnam, September 2, 1945.',
        url: 'https://en.wikisource.org/wiki/Declaration_of_Independence_of_the_Democratic_Republic_of_Vietnam',
        topic: 'Decolonization & self-determination',
        content: 'All the peoples on the Earth are equal from birth, all the peoples have a right to live, to be happy and to be free.' }
    ]
  },
  unit9: {
    label: 'Unit 9 — Globalization (c. 1900–present)',
    documents: [
      { source: 'Rio Declaration on Environment and Development, Principle 4, UN Conference on Environment and Development, 1992.',
        url: 'https://en.wikisource.org/wiki/Rio_Declaration_on_Environment_and_Development',
        topic: 'Globalization & the environment',
        content: 'Environmental protection shall constitute an integral part of the development process and cannot be considered in isolation from it.' }
    ]
  }
};
