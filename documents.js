/* ============================================================================
   Rahil Tourani's AP World Machine — Real Document Bank
   Verbatim public-domain primary-source excerpts for AP World History: Modern,
   with citations and source links. Used by the DBQ builder's "real documents"
   mode. Target ~7 documents per unit.

   Each document: { source, url, content, topic? }
     source  — full citation (author, work, date, translator/edition)
     url     — link to a source/reference page so anyone can verify the excerpt
     content — the VERBATIM excerpt (do not paraphrase)
     topic   — optional short tag (which sub-theme it supports)
   Only units with at least one document appear in the tool's picker.

   Sourcing note: everything here is public domain (pre-1929 works, older
   public-domain translations, US-government texts, or UN/IGO documents that
   permit reproduction). Copyrighted modern translations were deliberately
   avoided. Verify or lengthen any excerpt via its source link.
   ============================================================================ */
window.DOC_BANK = {
  unit1: {
    label: 'Unit 1 — The Global Tapestry (c. 1200–1450)',
    documents: [
      { source: 'Magna Carta (1215), clauses 39–40, trans. Ernest F. Henderson, Select Historical Documents of the Middle Ages (London, 1892).',
        url: 'https://en.wikisource.org/wiki/Magna_Carta',
        topic: 'Limits on royal power in Europe',
        content: 'No freeman shall be taken or imprisoned or disseised or outlawed or exiled or in any wise destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land. To no one will we sell, to no one will we refuse or delay, right or justice.' },
      { source: 'Marco Polo on Kinsay (Hangzhou), The Book of Ser Marco Polo, trans. Henry Yule, 3rd ed. rev. Henri Cordier (London, 1903).',
        url: 'https://sourcebooks.fordham.edu/source/polo-kinsay.asp',
        topic: 'Cities & commerce in East Asia',
        content: 'All the ten market places are encompassed by lofty houses, and below these are shops where all sorts of crafts are carried on, and all sorts of wares are on sale, including spices and jewels and pearls.' },
      { source: 'Thomas Aquinas, Summa Theologica (c. 1274), trans. Fathers of the English Dominican Province (1920).',
        url: 'https://en.wikisource.org/wiki/Summa_Theologiae',
        topic: 'Religion & governance in Europe',
        content: 'Law is nothing else than an ordinance of reason for the common good, made by him who has care of the community, and promulgated.' }
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
      { source: 'Ibn Battuta, Travels in Asia and Africa 1325–1354 (on the East African port of Kilwa), trans. H. A. R. Gibb (1929).',
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
        content: 'It is by merit that men rise in the service, a system which ensures that posts should only be assigned to the competent.' },
      { source: 'Niccolò Machiavelli, The Prince, Ch. 17 (1532), trans. W. K. Marriott (1908).',
        url: 'https://en.wikisource.org/wiki/The_Prince',
        topic: 'Legitimizing & consolidating power',
        content: 'It is much safer to be feared than loved, when, of the two, either must be dispensed with.' },
      { source: 'Thomas Hobbes, Leviathan, Ch. 13 (1651).',
        url: 'https://en.wikisource.org/wiki/Leviathan',
        topic: 'Absolutism & state power',
        content: 'During the time men live without a common power to keep them all in awe, they are in that condition which is called war; and such a war as is of every man against every man… and the life of man, solitary, poor, nasty, brutish, and short.' }
    ]
  },
  unit4: {
    label: 'Unit 4 — Transoceanic Interconnections (c. 1450–1750)',
    documents: [
      { source: 'Christopher Columbus, Journal of the First Voyage (1492), in J. E. Olson & E. G. Bourne, eds., The Northmen, Columbus, and Cabot, 985–1503 (New York: Scribner’s, 1906).',
        url: 'https://sourcebooks.fordham.edu/source/columbus1.asp',
        topic: 'First contact in the Americas',
        content: 'As I saw that they were very friendly to us, and perceived that they could be much more easily converted to our holy faith by gentle means than by force, I presented them with some red caps, and strings of beads to wear upon the neck.' },
      { source: 'Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano (1789), on the Middle Passage.',
        url: 'https://en.wikisource.org/wiki/The_Interesting_Narrative_of_the_Life_of_Olaudah_Equiano',
        topic: 'The Atlantic slave trade',
        content: 'The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable.' },
      { source: 'Adam Smith, The Wealth of Nations, Book IV, Ch. 7 (1776), on the discovery of America.',
        url: 'https://en.wikisource.org/wiki/The_Wealth_of_Nations',
        topic: 'Economic effects of transoceanic trade',
        content: 'The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind.' }
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
        content: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.' },
      { source: 'Jean-Jacques Rousseau, The Social Contract, Book I, Ch. 1 (1762), trans. G. D. H. Cole.',
        url: 'https://en.wikisource.org/wiki/The_Social_Contract_and_Discourses',
        topic: 'Enlightenment political thought',
        content: 'Man is born free, and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they.' },
      { source: 'Olympe de Gouges, Declaration of the Rights of Woman and of the Female Citizen, Article I (1791).',
        url: 'https://en.wikisource.org/wiki/Declaration_of_the_Rights_of_Woman_and_the_Female_Citizen',
        topic: 'Revolution & the rights of women',
        content: 'Woman is born free and remains equal to man in rights. Social distinctions may be based only on the common utility.' },
      { source: 'Thomas Paine, Common Sense (1776).',
        url: 'https://en.wikisource.org/wiki/Common_Sense',
        topic: 'Enlightenment ideas & revolution',
        content: 'Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one.' },
      { source: 'Edmund Burke, Reflections on the Revolution in France (1790).',
        url: 'https://en.wikisource.org/wiki/Reflections_on_the_Revolution_in_France',
        topic: 'Conservative reaction to revolution',
        content: 'The age of chivalry is gone. That of sophisters, economists, and calculators has succeeded; and the glory of Europe is extinguished for ever.' },
      { source: 'Declaration of Sentiments, Seneca Falls Convention, 1848.',
        url: 'https://en.wikisource.org/wiki/Declaration_of_Sentiments',
        topic: 'Reform & the expansion of rights',
        content: 'We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights.' }
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
        content: 'The history of all hitherto existing society is the history of class struggles. Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another.' },
      { source: 'Adam Smith, The Wealth of Nations, Book I, Ch. 2 (1776).',
        url: 'https://en.wikisource.org/wiki/The_Wealth_of_Nations',
        topic: 'Capitalism & industrial-era economic thought',
        content: 'It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest.' },
      { source: 'Cecil Rhodes, “Confession of Faith,” 1877.',
        url: 'https://en.wikisource.org/wiki/Confession_of_Faith_(Rhodes)',
        topic: 'Ideology of imperialism',
        content: 'I contend that we are the finest race in the world and that the more of the world we inhabit the better it is for the human race.' },
      { source: 'Charles Darwin, On the Origin of Species, Ch. 4 (1859).',
        url: 'https://en.wikisource.org/wiki/On_the_Origin_of_Species_(1859)',
        topic: 'Science & Social Darwinism',
        content: 'This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.' },
      { source: 'Jules Ferry, speech before the French Chamber of Deputies on colonial expansion, 1884.',
        url: 'https://sourcebooks.fordham.edu/mod/1884ferry.asp',
        topic: 'Justifications for imperialism',
        content: 'The superior races have a right, because they have a duty. They have the duty to civilize the inferior races.' },
      { source: 'Andrew Carnegie, “The Gospel of Wealth,” 1889.',
        url: 'https://en.wikisource.org/wiki/The_Gospel_of_Wealth',
        topic: 'Industrial capitalism & its defenders',
        content: 'This, then, is held to be the duty of the man of wealth… The man who dies thus rich dies disgraced.' }
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
        content: 'Third, they respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self government restored to those who have been forcibly deprived of them.' },
      { source: 'Treaty of Versailles, Article 231 (the “War Guilt” clause), June 28, 1919.',
        url: 'https://en.wikisource.org/wiki/Treaty_of_Versailles',
        topic: 'WWI settlement & its consequences',
        content: 'The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage to which the Allied and Associated Governments and their nationals have been subjected as a consequence of the war imposed upon them by the aggression of Germany and her allies.' },
      { source: 'Wilfred Owen, “Dulce et Decorum Est” (written 1917; published 1920).',
        url: 'https://en.wikisource.org/wiki/Dulce_et_Decorum_Est',
        topic: 'The experience of total war',
        content: 'My friend, you would not tell with such high zest / To children ardent for some desperate glory, / The old Lie: Dulce et decorum est / Pro patria mori.' },
      { source: 'The Zimmermann Telegram, decoded, January 1917.',
        url: 'https://en.wikisource.org/wiki/Zimmermann_Telegram',
        topic: 'US entry into WWI',
        content: 'We intend to begin on the first of February unrestricted submarine warfare. We shall endeavor in spite of this to keep the United States of America neutral.' },
      { source: 'Franklin D. Roosevelt, Address to Congress (the “Day of Infamy” speech), December 8, 1941.',
        url: 'https://en.wikisource.org/wiki/Day_of_Infamy_speech',
        topic: 'US entry into WWII',
        content: 'Yesterday, December 7, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.' }
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
      { source: 'George C. Marshall, Address at Harvard University (the Marshall Plan speech), June 5, 1947.',
        url: 'https://en.wikisource.org/wiki/Marshall_Plan_speech',
        topic: 'Aid, reconstruction & Cold War strategy',
        content: 'Our policy is directed not against any country or doctrine but against hunger, poverty, desperation and chaos.' },
      { source: 'Ho Chi Minh, Declaration of Independence of the Democratic Republic of Vietnam, September 2, 1945.',
        url: 'https://en.wikisource.org/wiki/Declaration_of_Independence_of_the_Democratic_Republic_of_Vietnam',
        topic: 'Decolonization & self-determination',
        content: 'All the peoples on the Earth are equal from birth, all the peoples have a right to live, to be happy and to be free.' },
      { source: 'Mohandas K. Gandhi, “Quit India” speech, Bombay, August 8, 1942.',
        url: 'https://en.wikisource.org/wiki/Quit_India_speeches',
        topic: 'Nonviolent resistance & Indian independence',
        content: 'I want freedom immediately, this very night, before dawn, if it can be had.' },
      { source: 'Jawaharlal Nehru, “A Tryst with Destiny,” address to the Constituent Assembly of India, August 14, 1947.',
        url: 'https://en.wikisource.org/wiki/Tryst_with_Destiny',
        topic: 'Decolonization: independence of India',
        content: 'Long years ago we made a tryst with destiny… At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.' },
      { source: 'John F. Kennedy, Inaugural Address, January 20, 1961.',
        url: 'https://en.wikisource.org/wiki/John_F._Kennedy%27s_Inaugural_Address',
        topic: 'Cold War ideals & rivalry',
        content: 'And so, my fellow Americans: ask not what your country can do for you—ask what you can do for your country.' }
    ]
  },
  unit9: {
    label: 'Unit 9 — Globalization (c. 1900–present)',
    documents: [
      { source: 'Rio Declaration on Environment and Development, Principle 4, UN Conference on Environment and Development, 1992.',
        url: 'https://en.wikisource.org/wiki/Rio_Declaration_on_Environment_and_Development',
        topic: 'Globalization & the environment',
        content: 'Environmental protection shall constitute an integral part of the development process and cannot be considered in isolation from it.' },
      { source: 'Charter of the United Nations, Preamble, 1945.',
        url: 'https://en.wikisource.org/wiki/Charter_of_the_United_Nations',
        topic: 'International institutions & the global order',
        content: 'We the peoples of the United Nations determined to save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind, and to reaffirm faith in fundamental human rights, in the dignity and worth of the human person…' },
      { source: 'Constitution of the World Health Organization, Preamble (adopted 1946).',
        url: 'https://en.wikisource.org/wiki/Constitution_of_the_World_Health_Organization',
        topic: 'Global health & institutions',
        content: 'Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.' },
      { source: 'Robert Schuman, The Schuman Declaration, 9 May 1950.',
        url: 'https://en.wikisource.org/wiki/The_Schuman_Declaration',
        topic: 'Regional integration & globalization',
        content: 'Europe will not be made all at once, or according to a single plan. It will be built through concrete achievements which first create a de facto solidarity.' },
      { source: 'World Commission on Environment and Development (Brundtland Commission), Our Common Future, 1987.',
        url: 'https://en.wikipedia.org/wiki/Our_Common_Future',
        topic: 'Sustainable development',
        content: 'Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
      { source: 'Ronald Reagan, Remarks at the Brandenburg Gate, West Berlin, June 12, 1987.',
        url: 'https://en.wikisource.org/wiki/Tear_down_this_wall',
        topic: 'End of the Cold War & a connected world',
        content: 'General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization: Come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!' },
      { source: 'United Nations Millennium Declaration, adopted by the UN General Assembly, September 2000.',
        url: 'https://en.wikisource.org/wiki/United_Nations_Millennium_Declaration',
        topic: 'Global development & inequality',
        content: 'We will spare no effort to free our fellow men, women and children from the abject and dehumanizing conditions of extreme poverty, to which more than a billion of them are currently subjected.' }
    ]
  }
};
