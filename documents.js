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
        content: 'Law is nothing else than an ordinance of reason for the common good, made by him who has care of the community, and promulgated.' },
      { source: 'Galbert of Bruges, “The Ceremony of Homage and Fealty” (1127), in F. A. Ogg, A Source Book of Medieval History (New York, 1907).',
        url: 'https://sourcebooks.fordham.edu/source/1127galbert.asp',
        topic: 'Feudalism in Europe',
        content: 'The count asked the vassal if he was willing to become completely his man, and he answered, “I am willing”; and with clasped hands, placed between the hands of the count, they were bound together by a kiss.' },
      { source: 'Ibn Battuta, Travels in Asia and Africa 1325–1354 (on Sultan Muhammad bin Tughluq of Delhi), trans. H. A. R. Gibb (1929).',
        url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp',
        topic: 'The Delhi Sultanate (South Asia)',
        content: 'The Sultan was far too free in shedding blood. He used to punish small faults and great, without respect of persons, whether men of learning or piety or noble descent.' },
      { source: 'Ibn Battuta, Travels in Asia and Africa 1325–1354 (on Cairo), trans. H. A. R. Gibb (1929).',
        url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp',
        topic: 'Dar al-Islam: a great Islamic metropolis',
        content: 'Cairo, mother of cities and seat of Pharaoh the tyrant, mistress of broad regions and fruitful lands, boundless in multitude of buildings, peerless in beauty and splendour.' }
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
        content: 'It had had its origin some years before in the East, whence, after destroying an innumerable multitude of living beings, it had propagated itself without respite from place to place, and so calamitously, had spread into the West.' },
      { source: 'Ibn Battuta, Travels in Asia and Africa 1325–1354 (on the port of Hormuz), trans. H. A. R. Gibb (1929).',
        url: 'https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp',
        topic: 'Indian Ocean trade entrepôts',
        content: 'New Hormuz is a large and fine city, with busy markets, as it is the port from which the wares from India and Sind are despatched to the Iraqs, Fars, and Khurasan.' }
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
        content: 'During the time men live without a common power to keep them all in awe, they are in that condition which is called war; and such a war as is of every man against every man… and the life of man, solitary, poor, nasty, brutish, and short.' },
      { source: 'English Bill of Rights, 1689.',
        url: 'https://en.wikisource.org/wiki/Bill_of_Rights_1689',
        topic: 'Constitutional limits on monarchy in Europe',
        content: 'That the pretended power of suspending of laws, or the execution of laws, by regal authority, without consent of Parliament, is illegal.' },
      { source: 'Jacques-Bénigne Bossuet, Politics Drawn from the Very Words of Holy Scripture (1709), on the divine right of kings.',
        url: 'https://en.wikipedia.org/wiki/Jacques-B%C3%A9nigne_Bossuet',
        topic: 'Divine-right absolutism',
        content: 'The royal power is absolute… The prince need render account of his conduct to no one but God. Kings are gods, and share in a manner the divine independence.' },
      { source: 'Abu’l-Fazl Allami, The Ain-i-Akbari, Vol. I (“The Nature of Royalty”), trans. H. Blochmann (Calcutta, 1873).',
        url: 'https://archive.org/details/in.ernet.dli.2015.527127',
        topic: 'Mughal kingship & legitimacy',
        content: 'Royalty is a light emanating from God, and a ray from the sun, the illuminator of the universe.' },
      { source: 'The Sacred Edict of the Kangxi Emperor (1670), Maxim 1 (Qing dynasty).',
        url: 'https://archive.org/details/sacrededictconta00kangrich',
        topic: 'Qing governance & Confucian orthodoxy',
        content: 'Esteem most highly filial piety and brotherly submission, in order to give due importance to the social relations.' }
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
        content: 'The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind.' },
      { source: 'Bernal Díaz del Castillo, The True History of the Conquest of New Spain (c. 1568), trans. A. P. Maudslay (1908–16), on first seeing Tenochtitlan.',
        url: 'https://en.wikisource.org/wiki/The_Memoirs_of_the_Conquistador_Bernal_Diaz_del_Castillo',
        topic: 'Encounter & conquest in the Americas',
        content: 'We were amazed and said that it was like the enchantments they tell of in the legend of Amadis, on account of the great towers and cues and buildings rising from the water, and all built of masonry.' },
      { source: 'The Requerimiento (1513), read by Spanish conquistadors to Indigenous peoples, in A. Helps, The Spanish Conquest in America (1900).',
        url: 'https://en.wikipedia.org/wiki/Requerimiento',
        topic: 'Justifications for conquest',
        content: 'I certify to you that, with the help of God, we shall powerfully enter into your country, and shall make war against you, and shall take you and your wives and your children, and shall make slaves of them.' },
      { source: 'Bartolomé de las Casas, A Brief Account of the Destruction of the Indies (1552), trans. John Phillips (1656).',
        url: 'https://www.gutenberg.org/ebooks/20321',
        topic: 'Spanish cruelty toward Indigenous peoples',
        content: 'They laid wagers among themselves, who should with a sword at one blow cut, or divide a man in two; or which of them should decollate or behead a man, with the greatest dexterity.' },
      { source: 'Treaty of Tordesillas (1494), between Spain and Portugal, trans. in Blair & Robertson, The Philippine Islands, 1493–1898, Vol. I (1903).',
        url: 'https://en.wikisource.org/wiki/The_Philippine_Islands,_1493-1898/Volume_1/Treaty_of_Tordesillas',
        topic: 'Dividing the world: rival maritime empires',
        content: 'A boundary or straight line be determined and drawn north and south, from pole to pole… at a distance of three hundred and seventy leagues west of the Cabo Verde islands.' }
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

/* Paragraph-length, verbatim public-domain documents (Units 1–3) — these replace the short excerpts above. */
window.DOC_BANK.unit1 = {
  "label": "Unit 1 — The Global Tapestry (c. 1200–1450)",
  "documents": [
    {
      "source": "Marco Polo, The Travels of Marco Polo (c. 1298), Book 2, on paper money in Yuan China, trans. Henry Yule, rev. Henri Cordier (London, 1903).",
      "url": "https://www.gutenberg.org/ebooks/10636",
      "topic": "State power & the economy in East Asia",
      "content": "He makes them take of the bark of a certain tree, in fact of the Mulberry Tree, the leaves of which are the food of the silkworms…. What they take is a certain fine white bast or skin which lies between the wood of the tree and the thick outer bark, and this they make into something resembling sheets of paper, but black…. All these pieces of paper are issued with as much solemnity and authority as if they were of pure gold or silver; and on every piece a variety of officials, whose duty it is, have to write their names, and to put their seals…. Any one forging it would be punished with death. And the Kaan causes every year to be made such a vast quantity of this money, which costs him nothing, that it must equal in amount all the treasure in the world. With these pieces of paper, made as I have described, he causes all payments on his own account to be made; and he makes them to pass current universally over all his kingdoms and provinces and territories, and whithersoever his power and sovereignty extends. And nobody, however important he may think himself, dares to refuse them on pain of death."
    },
    {
      "source": "Marco Polo, The Travels of Marco Polo (c. 1298), Book 2, on Kinsay (Hangzhou, former capital of the Song dynasty), trans. Henry Yule, rev. Henri Cordier (London, 1903).",
      "url": "https://www.gutenberg.org/ebooks/12410",
      "topic": "Cities & commerce in Song/Yuan China",
      "content": "In this part are the ten principal markets, though besides these there are a vast number of others in the different parts of the town. The former are all squares of half a mile to the side, and along their front passes the main street, which is 40 paces in width, and runs straight from end to end of the city, crossing many bridges of easy and commodious approach…. So also parallel to this great street, but at the back of the market places, there runs a very large canal, on the bank of which towards the squares are built great houses of stone, in which the merchants from India and other foreign parts store their wares, to be handy for the markets. In each of the squares is held a market three days in the week, frequented by 40,000 or 50,000 persons, who bring thither for sale every possible necessary of life, so that there is always an ample supply of every kind of meat and game…."
    },
    {
      "source": "Ibn Battuta, describing Sultan Muhammad ibn Tughluq of Delhi, in Travels in Asia and Africa, 1325–1354, trans. H. A. R. Gibb (London, 1929).",
      "url": "https://archive.org/details/travelsinasiaafr0000ibnb",
      "topic": "The Delhi Sultanate & Islamic rule in South Asia",
      "content": "This king is of all men the fondest of making gifts and of shedding blood. His gate is never without some poor man enriched or some living man executed, and stories are current amongst the people of his generosity and courage and of his cruelty and violence towards criminals. For all that, he is of all men the most humble and the readiest to show equity and justice. The ceremonies of religion are strictly complied with at his court, and he is severe in the matter of attendance at prayer and in punishing those who neglect it…. We shall relate some stories of this that are marvellous beyond anything ever heard before, and I call God and His Angels and His Prophets to witness that all that I tell of his extraordinary generosity is absolute truth."
    },
    {
      "source": "Ibn Battuta, on the Mali Empire (visited 1352–1353), in Travels in Asia and Africa, 1325–1354, trans. H. A. R. Gibb (London, 1929).",
      "url": "https://archive.org/details/travelsinasiaafr0000ibnb",
      "topic": "State-building & Islam in West Africa",
      "content": "The negroes possess some admirable qualities. They are seldom unjust, and have a greater abhorrence of injustice than any other people. Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country. Neither traveller nor inhabitant in it has anything to fear from robbers or men of violence. They do not confiscate the property of any white man who dies in their country, even if it be uncounted wealth. On the contrary, they give it into the charge of some trustworthy person among the whites, until the rightful heir takes possession of it. They are careful to observe the hours of prayer, and assiduous in attending them in congregations, and in bringing up their children to them. On Fridays, if a man does not go early to the mosque, he cannot find a corner to pray in, on account of the crowd."
    },
    {
      "source": "Hernán Cortés, Second Letter to Emperor Charles V (1520), describing the Mesoamerican city-state of Tlaxcala, in Letters of Cortés, trans. Francis A. MacNutt (New York, 1908).",
      "url": "https://archive.org/details/lettersofcorts01cortuoft",
      "topic": "States & economies in Mesoamerica",
      "content": "I came to the city, which is about six leagues distant from the dwelling place and camp I had occupied, and is so large and admirable that, although much of what I might say I shall omit, the little which I shall say is almost incredible; for it is much larger than Granada, and very much stronger, having very good buildings, and it contains a great many more people than Granada did when it was taken, and is much better supplied with provisions…. There is a market in this city, in which every day, above thirty thousand souls sell and buy, without counting many other small markets in different parts of the city. Everything is to be found in this market in which they trade, and could need, not only provisions, but also clothing and shoes. There are jewellery shops, for gold, and silver, and stones, and other valuables of feather-work, as well arranged as can be found in any of the squares or market-places of the world…. Finally there prevail good order and politeness, for they are a people full of intelligence and understanding…. As far as I have been able to judge about the form of government, it is almost like that of Venice, or Genoa, or Pisa, because there is no one supreme ruler."
    },
    {
      "source": "Pedro de Cieza de León, The Second Part of the Chronicle of Peru (c. 1550), on the royal roads of the Inca, trans. Clements R. Markham (London, 1883).",
      "url": "https://archive.org/details/secondpartchron00markgoog",
      "topic": "States in the Americas: the Inca",
      "content": "For it seems to me that if the Emperor should desire to give orders for another royal road to be made, like that which goes from Quito to Cuzco, or the other from Cuzco to go to Chile, with all his power I believe that he could not get it done; nor could any force of men achieve such results unless there was also the perfect order by means of which the commands of the Incas were carried into execution. For if the road to be made was fifty leagues long, or one hundred or two hundred, and though the ground was of the most rugged character, it would be done with diligent care. But their roads were much longer, some of them extending for over one thousand one hundred leagues along such dizzy and frightful abysses that, looking down, the sight failed one. In some places, to secure the regular width, it was necessary to hew a path out of the living rock; all which was done with fire and their picks…. In the inhabited parts, near the towns, there were great palaces and lodgings for the soldiers. In the snowy wildernesses and plains, shelter-houses were built, where travellers could take refuge from the cold and rain."
    },
    {
      "source": "Magna Carta, granted by King John of England at Runnymede, June 15, 1215 (clauses 1, 12, 39–40), Avalon Project, Yale Law School.",
      "url": "https://avalon.law.yale.edu/medieval/magframe.asp",
      "topic": "Limits on royal power in Europe",
      "content": "1. In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate…. We have also granted to all freemen of our kingdom, for us and our heirs forever, all the underwritten liberties, to be had and held by them and their heirs, of us and our heirs forever…. 12. No scutage nor aid shall be imposed on our kingdom, unless by common counsel of our kingdom, except for ransoming our person, for making our eldest son a knight, and for once marrying our eldest daughter; and for these there shall not be levied more than a reasonable aid…. 39. No freemen shall be taken or imprisoned or disseised or exiled or in any way destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land. 40. To no one will we sell, to no one will we refuse or delay, right or justice."
    },
    {
      "source": "Thomas Aquinas, Summa Theologica (c. 1270), Part I-II, Question 90, Articles 1 and 4, trans. Fathers of the English Dominican Province (1920).",
      "url": "https://www.newadvent.org/summa/2090.htm",
      "topic": "Christianity, reason & law in Europe",
      "content": "Law is a rule and measure of acts, whereby man is induced to act or is restrained from acting: for “lex” [law] is derived from “ligare” [to bind], because it binds one to act. Now the rule and measure of human acts is the reason, which is the first principle of human acts…; since it belongs to the reason to direct to the end, which is the first principle in all matters of action, according to the Philosopher. Now that which is the principle in any genus, is the rule and measure of that genus: for instance, unity in the genus of numbers, and the first movement in the genus of movements. Consequently it follows that law is something pertaining to reason…. Thus from the four preceding articles, the definition of law may be gathered; and it is nothing else than an ordinance of reason for the common good, made by him who has care of the community, and promulgated."
    }
  ]
};
window.DOC_BANK.unit2 = {
  "label": "Unit 2 — Networks of Exchange (c. 1200–1450)",
  "documents": [
    {
      "source": "Francesco Balducci Pegolotti, Florentine merchant, La Pratica della Mercatura (“The Practice of Commerce,” c. 1340), in Henry Yule, ed., Cathay and the Way Thither, Vol. III (London, 1914).",
      "url": "https://archive.org/details/cathaywaythither0003colo",
      "topic": "The Silk Roads under Mongol rule",
      "content": "In the first place, you must let your beard grow long and not shave. And at Tana you should furnish yourself with a dragoman. And you must not try to save money in the matter of dragomen by taking a bad one instead of a good one. For the additional wages of the good one will not cost you so much as you will save by having him. And besides the dragoman it will be well to take at least two good men servants, who are acquainted with the Cumanian tongue…. The road you travel from Tana to Cathay is perfectly safe, whether by day or by night, according to what the merchants say who have used it. Only if the merchant, in going or coming, should die upon the road, everything belonging to him will become the perquisite of the lord of the country in which he dies, and the officers of the lord will take possession of all. And in like manner if he die in Cathay. But if his brother be with him, or an intimate friend and comrade calling himself his brother, then to such an one they will surrender the property of the deceased, and so it will be rescued."
    },
    {
      "source": "Marco Polo, The Travels of Marco Polo (c. 1298), Book 2, on the Mongol post-station system, trans. Henry Yule, rev. Henri Cordier (London, 1903).",
      "url": "https://www.gutenberg.org/ebooks/10636",
      "topic": "Mongol communication networks (the yam)",
      "content": "Now you must know that from this city of Cambaluc proceed many roads and highways leading to a variety of provinces, one to one province, another to another; and each road receives the name of the province to which it leads; and it is a very sensible plan. And the messengers of the Emperor in travelling from Cambaluc, be the road whichsoever they will, find at every twenty-five miles of the journey a station which they call Yamb, or, as we should say, the “Horse-Post-House.” And at each of those stations used by the messengers, there is a large and handsome building for them to put up at, in which they find all the rooms furnished with fine beds and all other necessary articles in rich silk, and where they are provided with everything they can want…. At some of these stations, moreover, there shall be posted some four hundred horses standing ready for the use of the messengers…. Even when the messengers have to pass through a roadless tract where neither house nor hostel exists, still there the station-houses have been established just the same…. so that the Emperor’s messengers, come they from what region they may, find everything ready for them."
    },
    {
      "source": "William of Rubruck, Franciscan envoy of King Louis IX, recording an audience with Möngke Khan at Karakorum (1254), in The Journey of William of Rubruck to the Eastern Parts of the World, 1253–55, trans. W. W. Rockhill (London, 1900).",
      "url": "https://archive.org/details/journeyofwillia00ruys",
      "topic": "Mongol rule & religious diversity",
      "content": "After that he began confiding to me his creed: “We Moal,” he said, “believe that there is only one God, by whom we live and by whom we die, and for whom we have an upright heart.” Then I said: “May it be so, for without His grace this cannot be.” He asked what I had said; the interpreter told him. Then he added: “But as God gives us the different fingers of the hand, so he gives to men divers ways. God gives you the Scriptures, and you Christians keep them not. You do not find (in them, for example) that one should find fault with another, do you?” “No, my lord,” I said; “but I told you from the first that I did not want to wrangle with anyone.”… “God gave you therefore the Scriptures, and you do not keep them; He gave us diviners, we do what they tell us, and we live in peace.”"
    },
    {
      "source": "Marco Polo, The Travels of Marco Polo (c. 1298), Book 1, on the customs of the Tartars (Mongols), trans. Henry Yule, rev. Henri Cordier (London, 1903).",
      "url": "https://www.gutenberg.org/ebooks/10636",
      "topic": "Mongol society & gender roles",
      "content": "Their houses are circular, and are made of wands covered with felts. These are carried along with them whithersoever they go; for the wands are so strongly bound together, and likewise so well combined, that the frame can be made very light. Whenever they erect these huts the door is always to the south. They also have waggons covered with black felt so efficaciously that no rain can get in. These are drawn by oxen and camels, and the women and children travel in them. The women do the buying and selling, and whatever is necessary to provide for the husband and household; for the men all lead the life of gentlemen, troubling themselves about nothing but hunting and hawking, and looking after their goshawks and falcons, unless it be the practice of warlike exercises."
    },
    {
      "source": "Ibn Battuta, on the Swahili port of Kilwa (visited c. 1331), in Travels in Asia and Africa, 1325–1354, trans. H. A. R. Gibb (London, 1929).",
      "url": "https://sourcebooks.fordham.edu/source/1354-ibnbattuta.asp",
      "topic": "The Swahili coast & Indian Ocean trade",
      "content": "We stayed one night in this island [Mombasa], and then pursued our journey to Kulwa, which is a large town on the coast. The majority of its inhabitants are Zanj, jet-black in colour, and with tattoo marks on their faces. I was told by a merchant that the town of Sufala lies a fortnight’s journey [south] from Kulwa and that gold dust is brought to Sufala from Yufi in the country of the Limis, which is a month’s journey distant from it. Kulwa is a very fine and substantially built town, and all its buildings are of wood. Its inhabitants are constantly engaged in military expeditions, for their country is contiguous to the heathen Zanj. The sultan at the time of my visit was Abu’l-Muzaffar Hasan, who was noted for his gifts and generosity. He used to devote the fifth part of the booty made on his expeditions to pious and charitable purposes, as is prescribed in the Koran, and I have seen him give the clothes off his back to a mendicant who asked him for them."
    },
    {
      "source": "Ibn Battuta, on crossing the Sahara to the salt mines of Taghaza (1352), in Travels in Asia and Africa, 1325–1354, trans. H. A. R. Gibb (London, 1929).",
      "url": "https://archive.org/details/travelsinasiaafr0000ibnb",
      "topic": "Trans-Saharan trade: salt & gold",
      "content": "At Sijilmasa I bought camels and a four months’ supply of forage for them. Thereupon I set out… with a caravan including, amongst others, a number of the merchants of Sijilmasa. After twenty-five days we reached Taghaza, an unattractive village, with the curious feature that its houses and mosques are built of blocks of salt, roofed with camel skins. There are no trees there, nothing but sand. In the sand is a salt mine; they dig for the salt, and find it in thick slabs…. A camel will carry two of these slabs. No one lives at Taghaza except the slaves of the Massufa tribe, who dig for the salt; they subsist on dates imported from Dar‘a and Sijilmasa, camels’ flesh, and millet imported from the Negrolands. The negroes come up from their country and take away the salt from there. At Iwalatan a load of salt brings eight to ten mithqals; in the town of Malli it sells for twenty to thirty, and sometimes as much as forty. The negroes use salt as a medium of exchange, just as gold and silver is used [elsewhere]; they cut it up into pieces and buy and sell with it. The business done at Taghaza, for all its meanness, amounts to an enormous figure in terms of hundredweights of gold-dust."
    },
    {
      "source": "Ibn Battuta, on crossing the Hindu Kush into India (c. 1333), in Travels in Asia and Africa, 1325–1354, trans. H. A. R. Gibb (London, 1929).",
      "url": "https://archive.org/details/travelsinasiaafr0000ibnb",
      "topic": "Central Asian routes & the trade in enslaved people",
      "content": "We stayed outside this village about forty days to pasture our camels and horses, for there is excellent pasturage there and perfect security, owing to the strict measures of the amir, who enforces the Turkish laws regarding horse-stealing…. After we had been staying there ten days we missed three of our horses, but they were restored to us by the Tatars a fortnight later, through fear of the application of these laws to themselves. Another reason for our halt was fear of the snow, for on the road there is a mountain called Hindukush, which means “Slayer of Indians,” because the slave boys and girls who are brought from India die there in large numbers as a result of the extreme cold and the quantity of snow. The passage extends for a whole day’s march. We stayed until the warm weather had definitely set in, and crossed this mountain by a continuous march from before dawn to sunset. We kept spreading felt cloths in front of the camels for them to tread on so that they should not sink in the snow."
    },
    {
      "source": "Giovanni Boccaccio, The Decameron (c. 1353), Introduction to the First Day, on the Black Death in Florence (1348), trans. John Payne (London, 1886).",
      "url": "https://www.gutenberg.org/ebooks/23700",
      "topic": "Environmental consequences of connectivity: the Black Death",
      "content": "I say, then, that the years of the fruitful Incarnation of the Son of God had attained to the number of one thousand three hundred and forty-eight, when into the notable city of Florence, fair over every other of Italy, there came the death-dealing pestilence, which, through the operation of the heavenly bodies or of our own iniquitous dealings, being sent down upon mankind for our correction by the just wrath of God, had some years before appeared in the parts of the East and after having bereft these latter of an innumerable number of inhabitants, extending without cease from one place to another, had now unhappily spread towards the West. And thereagainst no wisdom availing nor human foresight (whereby the city was purged of many impurities by officers deputed to that end and it was forbidden unto any sick person to enter therein and many were the counsels given for the preservation of health)…. In men and women alike there appeared, at the beginning of the malady, certain swellings, either on the groin or under the armpits, whereof some waxed of the bigness of a common apple, others like unto an egg…. and like as the plague-boils had been first (and yet were) a very certain token of coming death, even so were these for every one to whom they came."
    }
  ]
};
window.DOC_BANK.unit3 = {
  "label": "Unit 3 — Land-Based Empires (c. 1450–1750)",
  "documents": [
    {
      "source": "Ogier Ghiselin de Busbecq, Habsburg ambassador to the court of Suleiman the Magnificent, Turkish Letters (1555–1562), trans. C. T. Forster and F. H. B. Daniel, The Life and Letters of Ogier Ghiselin de Busbecq, Vol. I (London, 1881).",
      "url": "https://www.gutenberg.org/ebooks/53629",
      "topic": "Ottoman administration & the devshirme",
      "content": "The Sultan’s hall was crowded with people, among whom were several officers of high rank. Besides these there were all the troopers of the Imperial guard, Spahis, Ghourebas, Ouloufedgis, and a large force of Janissaries; but there was not in all that great assembly a single man who owed his position to aught save his valour and his merit. No distinction is attached to birth among the Turks; the deference to be paid to a man is measured by the position he holds in the public service…. In making his appointments the Sultan pays no regard to any pretensions on the score of wealth or rank, nor does he take into consideration recommendations or popularity; he considers each case on its own merits, and examines carefully into the character, ability, and disposition of the man whose promotion is in question. It is by merit that men rise in the service, a system which ensures that posts should only be assigned to the competent…. Those who receive the highest offices from the Sultan are for the most part the sons of shepherds or herdsmen, and so far from being ashamed of their parentage, they actually glory in it, and consider it a matter of boasting that they owe nothing to the accident of birth."
    },
    {
      "source": "Evliya Çelebi, Ottoman courtier and traveler, Book of Travels (c. 1630s–1680s), on Sultan Mehmed II’s conquest of Constantinople in 1453, in Narrative of Travels in Europe, Asia, and Africa in the Seventeenth Century, Vol. I, trans. Joseph von Hammer (London, 1834).",
      "url": "https://www.gutenberg.org/ebooks/53597",
      "topic": "Legitimizing Ottoman rule through religion & conquest",
      "content": "Mohammed proceeded to the church of Ayá Sófiyah in order to express his thanks by saying a prayer…. Twelve thousand monks who dwelt within and all around it, having closed its doors, threw from the roof, towers, turrets, and belfries, arrows and burning pitch, and naptha on the Moslems. Mohammed having invested the church with the armies of Islám, like a swarm of hornets, for three days and three nights, at length took it on the fifty-third day. He then having slain a few monks, entered the church, bearing the standard of the Prophet of God in his hand, and planting it on the high altar (mihráb), chaunted, for the first time, the Mohammedan ezán (call to prayers)…. Sultán Mohammed Khán, Father of Victory (i.e. the Conqueror), a Sultán son of a Sultán of the Islamitic sovereigns of the House of ’Osmán, entered Islámból victoriously on Wednesday the 20th day of Jumázíu-l-ákhir, in the year of the Prophet’s flight 867 [1st July, A.D. 1453], as was expressed by the prophetic and descriptive letters of the text beldetun tayyibetun (a good city)…."
    },
    {
      "source": "Jahangir, Mughal emperor (r. 1605–1627), Tuzuk-i-Jahangiri (Memoirs of Jahangir), on his first acts after taking the throne in 1605, trans. Alexander Rogers, ed. Henry Beveridge (London, 1909).",
      "url": "https://archive.org/details/dli.pahar.1850",
      "topic": "Mughal governance & justice",
      "content": "After my accession, the first order that I gave was for the fastening up of the Chain of Justice, so that if those engaged in the administration of justice should delay or practise hypocrisy in the matter of those seeking justice, the oppressed might come to this chain and shake it so that its noise might attract attention. Its fashion was this: I ordered them to make a chain of pure gold, 30 gaz in length and containing 60 bells…. I also gave twelve orders to be observed as rules of conduct in all my dominions— (1) Forbidding the levy of cesses under the names of tamgha and mir bahri (river tolls), and other burdens which the jagirdars of every province and district had imposed for their own profit. (2) On roads where thefts and robberies took place… the jagirdars of the neighbourhood should build sara’is (public rest-houses), mosques, and dig wells, which might stimulate population, and people might settle down in those sara’is…. (3) The bales of merchants should not be opened on the roads without informing them and obtaining their leave. (4) In my dominions if anyone, whether unbeliever or Musalman, should die, his property and effects should be left for his heirs, and no one should interfere with them."
    },
    {
      "source": "François Bernier, French physician at the Mughal court (1656–1668), Travels in the Mogul Empire, A.D. 1656–1668, trans. Archibald Constable (London, 1891).",
      "url": "https://archive.org/details/travelsinmogule00berngoog",
      "topic": "Mughal wealth, taxation & limits of imperial control",
      "content": "I think I have shown that the precious metals must abound in Hindoustan, although the country be destitute of mines; and that the Great Mogol, lord and master of the greater part, must necessarily be in the receipt of an immense revenue, and possess incalculable wealth. But there are many circumstances to be considered, as forming a counterpoise to these riches. First.—Of the vast tracts of country constituting the empire of Hindoustan, many are little more than sand, or barren mountains, badly cultivated, and thinly peopled; and even a considerable portion of the good land remains untilled from want of labourers; many of whom perish in consequence of the bad treatment they experience from the Governors. These poor people, when incapable of discharging the demands of their rapacious lords, are not only often deprived of the means of subsistence, but are bereft of their children, who are carried away as slaves…. Second.—The empire of the Great Mogol comprehends several nations, over which he is not absolute master. Most of them still retain their own peculiar chiefs or sovereigns, who obey the Mogol or pay him tribute only by compulsion."
    },
    {
      "source": "The Sacred Edict of the Kangxi Emperor (1670), Maxim 1, as amplified by his son the Yongzheng Emperor (1724) and read publicly throughout the Qing empire, trans. William Milne (1817; reprinted Shanghai, 1870).",
      "url": "https://archive.org/details/cu31924023157757",
      "topic": "Confucianism & Qing legitimacy",
      "content": "Our sacred father, the benevolent Emperor, reigned sixty-one years; imitated his ancestors; honoured his parents; his filial piety was inexhaustible…. His precise design was, by filial piety, to govern the empire; hence the Sacred Edict commences with filial and fraternal duties. Intrusted with his mighty concerns, and reflecting on past admonitions, we have diffusely explained the sense of his instructions; and now commence by proclaiming the doctrines of filial and fraternal duty to you, soldiers and people. Filial piety is [founded on] the unalterable statutes of heaven, the corresponding operations of earth, and the common obligations of all people…. The son of man that would recompense one in ten thousand of the favours of his parents, should at home exhaust his whole heart; abroad exert his whole strength; watch over his person, practise economy, diligently labour for, and dutifully nourish, them. Let him not gamble, drink, quarrel, or privately hoard up riches for his own family!"
    },
    {
      "source": "Jean Rousset de Missy, Life of Peter the Great (c. 1730), on the tsar’s westernizing reforms, Internet Modern History Sourcebook (Fordham University).",
      "url": "https://sourcebooks.fordham.edu/mod/petergreat.asp",
      "topic": "Westernization & state power in Russia",
      "content": "The tsar labored at the reform of fashions, or, more properly speaking, of dress. Until that time the Russians had always worn long beards, which they cherished and preserved with much care, allowing them to hang down on their bosoms, without even cutting the moustache…. The tsar, in order to reform that custom, ordered that gentlemen, merchants, and other subjects, except priests and peasants, should each pay a tax of one hundred rubles a year if they wished to keep their beards; the commoners had to pay one kopek each. Officials were stationed at the gates of the towns to collect that tax, which the Russians regarded as an enormous sin on the part of the tsar and as a thing which tended to the abolition of their religion. These insinuations, which came from the priests, occasioned the publication of many pamphlets in Moscow, where for that reason alone the tsar was regarded as a tyrant and a pagan; and there were many old Russians who, after having their beards shaved off, saved them preciously, in order to have them placed in their coffins, fearing that they would not be allowed to enter heaven without their beards."
    },
    {
      "source": "James VI of Scotland and I of England, The True Law of Free Monarchies (1598), Internet Modern History Sourcebook (Fordham University).",
      "url": "https://sourcebooks.fordham.edu/mod/james1-trew2.asp",
      "topic": "Divine right & European absolutism",
      "content": "The Kings thereafter in Scotland were before any estates or ranks of men within the same, before any Parliaments were holden or laws made; and by them was the land distributed (which at the first was wholly theirs), states erected and decerned, and forms of government devised and established. And it follows of necessity that the Kings were the authors and makers of the laws and not the laws of the Kings…. For albeit the King made daily statutes and ordinances, enjoining such pains thereto as he thinks meet, without any advice of Parliament or Estates, yet it lies in the power of no Parliament to make any kind of law or statute without his sceptre be to it for giving it the force of a law…. And as ye see it manifest that the King is overlord of the whole land, so is he master over every person that inhabiteth the same, having power over the life and death of every one of them…. For albeit it be true, that I have at length proved, that the King is above the law as both the author and giver of strength thereto, yet a good King will not only delight to rule his subjects by the law, but even will conform himself in his own actions thereunto."
    },
    {
      "source": "English Bill of Rights, passed by Parliament after the Glorious Revolution, 1689, Avalon Project, Yale Law School.",
      "url": "https://avalon.law.yale.edu/17th_century/england.asp",
      "topic": "Constitutional limits on monarchy",
      "content": "That the pretended power of suspending the laws or the execution of laws by regal authority without consent of Parliament is illegal; That the pretended power of dispensing with laws or the execution of laws by regal authority, as it hath been assumed and exercised of late, is illegal;… That levying money for or to the use of the Crown by pretence of prerogative, without grant of Parliament, for longer time, or in other manner than the same is or shall be granted, is illegal; That it is the right of the subjects to petition the king, and all commitments and prosecutions for such petitioning are illegal; That the raising or keeping a standing army within the kingdom in time of peace, unless it be with consent of Parliament, is against law;… That election of members of Parliament ought to be free; That the freedom of speech and debates or proceedings in Parliament ought not to be impeached or questioned in any court or place out of Parliament; That excessive bail ought not to be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted…."
    }
  ]
};
