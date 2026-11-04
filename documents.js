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

/* Paragraph-length, verbatim public-domain documents (Units 4–9) — these replace the short excerpts above.
   Each excerpt was cut by start/end anchors from the full source text; "…" marks omitted text, " / " and " // " mark
   line and stanza breaks in poems. Only obvious OCR/typesetting slips were corrected. */
window.DOC_BANK.unit4 = {
  "label": "Unit 4 — Transoceanic Interconnections (c. 1450–1750)",
  "documents": [
    {
      "source": "Christopher Columbus, Journal of the First Voyage, entry for October 11–12, 1492 (abstract by Bartolomé de las Casas), as quoted in Edward Everett Hale, The Life of Christopher Columbus from His Own Letters and Journals (1891).",
      "url": "https://www.gutenberg.org/ebooks/1492",
      "topic": "First contact in the Americas",
      "content": "So that they may feel great friendship for us, and because I knew that they were a people who would be better delivered and converted to our Holy Faith by love than by force, I gave to some of them red caps and glass bells which they put round their necks, and many other things of little value, in which they took much pleasure, and they remained so friendly to us that it was wonderful. Afterwards they came swimming to the ship’s boats where we were. And they brought us parrots and cotton-thread in skeins, and javelins and many other things. And they bartered them with us for other things, which we gave them, such as little glass beads and little bells. In short, they took everything, and gave of what they had with good will. But it seemed to me that they were a people very destitute of everything. … They do not bear arms nor do they know them, for I showed them swords and they took them by the edge, and they cut themselves through ignorance. They have no iron at all; … They would be good servants, and of good disposition, for I see that they repeat very quickly everything which is said to them. And I believe that they could easily be made Christians, for it seems to me that they have no belief. I, if it please our Lord, will take six of them to your Highnesses at the time of my departure, so that they may learn to talk."
    },
    {
      "source": "A Journal of the First Voyage of Vasco da Gama, 1497–1499 (anonymous crew member’s account), on arrival at Calicut, May 1498, trans. and ed. E. G. Ravenstein (London: Hakluyt Society, 1898).",
      "url": "https://www.gutenberg.org/ebooks/46440",
      "topic": "Portuguese entry into Indian Ocean trade",
      "content": "Those with whom he went took him to two Moors from Tunis, who could speak Castilian and Genoese. The first greeting that he received was in these words: “May the Devil take thee! What brought you hither?” They asked what he sought so far away from home, and he told them that we came in search of Christians and of spices. They said: “Why does not the King of Castile, the King of France, or the Signoria of Venice send hither?” He said that the King of Portugal would not consent to their doing so, and they said he did the right thing. After this conversation they took him to their lodgings and gave him wheaten bread and honey. When he had eaten he returned to the ships, accompanied by one of the Moors, who was, no sooner on board, than he said these words: “A lucky venture, a lucky venture! Plenty of rubies, plenty of emeralds! You owe great thanks to God, for having brought you to a country holding such riches!” … On Tuesday [May 29] the captain got ready the following things to be sent to the king, viz., twelve pieces of lambel, four scarlet hoods, six hats, four strings of coral, a case containing six wash-hand basins, a case of sugar, two casks of oil, and two of honey. … They came, and when they saw the present they laughed at it, saying that it was not a thing to offer to a king, that the poorest merchant from Mecca, or any other part of India, gave more, and that if he wanted to make a present it should be in gold, as the king would not accept such things."
    },
    {
      "source": "Bernal Díaz del Castillo, The Memoirs of the Conquistador Bernal Díaz del Castillo, Written by Himself (written c. 1568), on first seeing Tenochtitlan in 1519, trans. John Ingram Lockhart (London, 1844), Vol. 1.",
      "url": "https://www.gutenberg.org/ebooks/32474",
      "topic": "Encounter & conquest in the Americas",
      "content": "We for the first time beheld the numbers of towns and villages built in the lake, and the still greater number of large townships on the mainland, with the level causeway which ran in a straight line into Mexico. Our astonishment was indeed raised to the highest pitch, and we could not help remarking to each other, that all these buildings resembled the fairy castles we read of in Amadis de Gaul; so high, majestic, and splendid did the temples, towers, and houses of the town, all built of massive stone and lime, rise up out of the midst of the lake. Indeed, many of our men believed what they saw was a mere dream. … After we had seen all this, we paid a visit to the gardens adjoining these palaces, which were really astonishing, and I could not gratify my desire too much by walking about in them and contemplating the numbers of trees which spread around the most delicious odours; the rose bushes, the different flower beds, and the fruit trees which stood along the paths. There was likewise a basin of sweet water, which was connected with the lake by means of a small canal. It was constructed of stone of various colours, and decorated with numerous figures, and was wide enough to hold their largest canoes. In this basin various kinds of water-fowls were swimming up and down, and everything was so charming and beautiful that we could find no words to express our astonishment."
    },
    {
      "source": "Bartolomé de las Casas, A Brief Account of the Destruction of the Indies (Brevísima relación, Seville, 1552), English translation published London, 1689, as “Popery Truly Display’d in Its Bloody Colours.”",
      "url": "https://www.gutenberg.org/ebooks/20321",
      "topic": "Spanish violence & Indigenous population collapse",
      "content": "The Spaniards first assaulted the innocent Sheep, so qualified by the Almighty, as is premention'd, like most cruel Tygers, Wolves and Lions hunger-starv'd, studying nothing, for the space of Forty Years, after their first landing, but the Massacre of these Wretches, whom they have so inhumanely and barbarously butcher'd and harass'd with several kinds of Torments, never before known, or heard (of which you shall have some account in the following Discourse) that of Three Millions of Persons, which lived in Hispaniola itself, there is at present but the inconsiderable remnant of scarce Three Hundred. Nay the Isle of Cuba, which extends as far, as Valledolid in Spain is distant from Rome, lies now uncultivated, like a Desert, and intomb'd in its own Ruins. You may also find the Isles of St. John, and Jamaica, both large and fruitful places, unpeopled and desolate."
    },
    {
      "source": "Treaty of Tordesillas between Castile (Spain) and Portugal, June 7, 1494, trans. in E. H. Blair and J. A. Robertson, eds., The Philippine Islands, 1493–1898, Vol. I (Cleveland, 1903).",
      "url": "https://www.gutenberg.org/ebooks/13255",
      "topic": "Dividing the world: rival maritime empires",
      "content": "That, whereas a certain controversy exists between the said lords, their constituents, as to what lands, of all those discovered in the Ocean Sea up to the present day, the date of this treaty, pertain to each one of the said parts respectively; … covenanted and agreed that a boundary or straight line be determined and drawn north and south, from pole to pole, on the said Ocean Sea—from the Arctic to the Antarctic pole. This boundary, or line shall be drawn straight, as aforesaid, at a distance of three hundred and seventy leagues west of the Cabo Verde islands, … And all lands, both islands and mainlands, found and discovered already, or to be found and discovered hereafter by the said King of Portugal and by his vessels on this side of the said line and bound determined as above, toward the east, in either north or south latitude, on the eastern side of the said bound, provided the said bound is not crossed, shall belong to, and remain in the possession of, and pertain forever to the said King of Portugal and his successors. And all other lands—both islands and mainlands, found or to be found hereafter, discovered or to be discovered hereafter, which have been discovered or shall be discovered by the said King and Queen of Castilla, Aragon, etc., and by their vessels, on the western side of the said bound, determined as above, after having passed the said bound toward the west, in either its north or south latitude, shall belong to, and remain in the possession of, and pertain forever to the said King and Queen of Castilla, Leon, etc., and to their successors."
    },
    {
      "source": "Paul Le Jeune, S.J., Relation of What Occurred in New France in the Year 1634, on the Montagnais (Innu) and the fur trade, in R. G. Thwaites, ed., The Jesuit Relations and Allied Documents, Vol. VI (Cleveland, 1897).",
      "url": "https://www.gutenberg.org/ebooks/51262",
      "topic": "The fur trade & Indigenous perspectives in North America",
      "content": "The Castor or Beaver is taken in several ways. The Savages say that it is the animal well-beloved by the French, English and Basques,—in a word, by the Europeans. I heard my host say one day, jokingly, Missi picoutau amiscou, \"The Beaver does everything perfectly well, it makes kettles, hatchets, swords, knives, bread; and, in short, it makes everything.\" He was making sport of us Europeans, who have such a fondness for the skin of this animal and who fight to see who will give the most to these Barbarians, to get it; they carry this to such an extent that my host said to me one day, showing me a very beautiful knife, \"The English have no sense; they give us twenty knives like this for one Beaver skin.\" … The Savages have always been gluttons, but since the coming of the Europeans they have become such drunkards, that,—although they see clearly that these new drinks, the wine and brandy, which are brought to them, are depopulating their country, of which they themselves complain,—they cannot abstain from drinking, taking pride in getting drunk and in making others drunk. It is true that they die in great numbers; but I am astonished that they can resist it as long as they do. For, give two Savages two or three bottles of brandy, they will sit down and, without eating, will drink, one after the other, until they have emptied them."
    },
    {
      "source": "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African, Written by Himself (London, 1789), Chapter II, on the Middle Passage.",
      "url": "https://www.gutenberg.org/ebooks/15399",
      "topic": "The Atlantic slave trade",
      "content": "The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. This produced copious perspirations, so that the air soon became unfit for respiration, from a variety of loathsome smells, and brought on a sickness among the slaves, of which many died, thus falling victims to the improvident avarice, as I may call it, of their purchasers. This wretched situation was again aggravated by the galling of the chains, now become insupportable; and the filth of the necessary tubs, into which the children often fell, and were almost suffocated. The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable. Happily perhaps for myself I was soon reduced so low here that it was thought necessary to keep me almost always on deck; and from my extreme youth I was not put in fetters. In this situation I expected every hour to share the fate of my companions, some of whom were almost daily brought upon deck at the point of death, which I began to hope would soon put an end to my miseries. Often did I think many of the inhabitants of the deep much more happy than myself. I envied them the freedom they enjoyed, and as often wished I could change my condition for theirs. Every circumstance I met with served only to render my state more painful, and heighten my apprehensions, and my opinion of the cruelty of the whites."
    },
    {
      "source": "Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations (London, 1776), Book IV, Chapter 7, “Of Colonies.”",
      "url": "https://www.gutenberg.org/ebooks/3300",
      "topic": "Global consequences of the Columbian Exchange & maritime trade",
      "content": "The discovery of America, and that of a passage to the East Indies by the Cape of Good Hope, are the two greatest and most important events recorded in the history of mankind. Their consequences have already been great; but, in the short period of between two and three centuries which has elapsed since these discoveries were made, it is impossible that the whole extent of their consequences can have been seen. What benefits or what misfortunes to mankind may hereafter result from those great events, no human wisdom can foresee. By uniting in some measure the most distant parts of the world, by enabling them to relieve one another's wants, to increase one another's enjoyments, and to encourage one another's industry, their general tendency would seem to be beneficial. To the natives, however, both of the East and West Indies, all the commercial benefits which can have resulted from those events have been sunk and lost in the dreadful misfortunes which they have occasioned. These misfortunes, however, seem to have arisen rather from accident than from any thing in the nature of those events themselves. At the particular time when these discoveries were made, the superiority of force happened to be so great on the side of the Europeans, that they were enabled to commit with impunity every sort of injustice in those remote countries."
    }
  ]
};

window.DOC_BANK.unit5 = {
  "label": "Unit 5 — Revolutions (c. 1750–1900)",
  "documents": [
    {
      "source": "The unanimous Declaration of the thirteen united States of America, adopted by the Continental Congress, July 4, 1776 (National Archives transcription).",
      "url": "https://www.archives.gov/founding-docs/declaration-transcript",
      "topic": "Enlightenment ideas & the American Revolution",
      "content": "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, — That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn that mankind are more disposed to suffer, while evils are sufferable than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security."
    },
    {
      "source": "Declaration of the Rights of Man and of Citizens, National Assembly of France, August 1789, as translated in Thomas Paine, Rights of Man, Part I (London, 1791).",
      "url": "https://www.gutenberg.org/ebooks/3742",
      "topic": "Natural rights & the French Revolution",
      "content": "For these reasons the National Assembly doth recognize and declare, in the presence of the Supreme Being, and with the hope of his blessing and favour, the following sacred rights of men and of citizens: One: Men are born, and always continue, free and equal in respect of their Rights. Civil distinctions, therefore, can be founded only on Public Utility. Two: The end of all Political associations is the Preservation of the Natural and Imprescriptible Rights of Man; and these rights are Liberty, Property, Security, and Resistance of Oppression. … Three: The Nation is essentially the source of all Sovereignty; nor can any individual, or any body of Men, be entitled to any authority which is not expressly derived from it. … Six: the Law is an expression of the Will of the Community. All Citizens have a right to concur, either personally or by their Representatives, in its formation. It Should be the same to all, whether it protects or punishes; and all being equal in its sight, are equally eligible to all Honours, Places, and employments, according to their different abilities, without any other distinction than that created by their Virtues and talents."
    },
    {
      "source": "John Locke, Two Treatises of Government (London, 1690), Second Treatise, Chapter XIX, “Of the Dissolution of Government,” §222.",
      "url": "https://www.gutenberg.org/ebooks/7370",
      "topic": "Enlightenment political thought: the right of revolution",
      "content": "The reason why men enter into society, is the preservation of their property; and the end why they chuse and authorize a legislative, is, that there may be laws made, and rules set, as guards and fences to the properties of all the members of the society, to limit the power, and moderate the dominion, of every part and member of the society: for since it can never be supposed to be the will of the society, that the legislative should have a power to destroy that which every one designs to secure, by entering into society, and for which the people submitted themselves to legislators of their own making; whenever the legislators endeavour to take away, and destroy the property of the people, or to reduce them to slavery under arbitrary power, they put themselves into a state of war with the people, who are thereupon absolved from any farther obedience, and are left to the common refuge, which God hath provided for all men, against force and violence. Whensoever therefore the legislative shall transgress this fundamental rule of society; and either by ambition, fear, folly or corruption, endeavour to grasp themselves, or put into the hands of any other, an absolute power over the lives, liberties, and estates of the people; by this breach of trust they forfeit the power the people had put into their hands for quite contrary ends, and it devolves to the people, who have a right to resume their original liberty, and, by the establishment of a new legislative, (such as they shall think fit) provide for their own safety and security, which is the end for which they are in society."
    },
    {
      "source": "Jean-Jacques Rousseau, The Social Contract (1762), Book I, Chapters 1 and 6, trans. G. D. H. Cole (London: J. M. Dent, Everyman’s Library; translation first published 1913).",
      "url": "https://www.gutenberg.org/ebooks/46333",
      "topic": "Enlightenment political thought: popular sovereignty",
      "content": "Man is born free; and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they. How did this change come about? I do not know. What can make it legitimate? That question I think I can answer. If I took into account only force, and the effects derived from it, I should say: \"As long as a people is compelled to obey, and obeys, it does well; as soon as it can shake off the yoke, and shakes it off, it does still better; for, regaining its liberty by the same right as took it away, either it is justified in resuming it, or there was no justification for those who took it away.\" But the social order is a sacred right which is the basis of all other rights. Nevertheless, this right does not come from nature, and must therefore be founded on conventions. Before coming to that, I have to prove what I have just asserted. … \"The problem is to find a form of association which will defend and protect with the whole common force the person and goods of each associate, and in which each, while uniting himself with all, may still obey himself alone, and remain as free as before.\" … \"Each of us puts his person and all his power in common under the supreme direction of the general will, and, in our corporate capacity, we receive each member as an indivisible part of the whole.\""
    },
    {
      "source": "Thomas Paine, Common Sense (Philadelphia, 1776).",
      "url": "https://www.gutenberg.org/ebooks/147",
      "topic": "Arguments for colonial independence",
      "content": "Small islands not capable of protecting themselves, are the proper objects for kingdoms to take under their care; but there is something very absurd, in supposing a continent to be perpetually governed by an island. In no instance hath nature made the satellite larger than its primary planet, and as England and America, with respect to each other, reverses the common order of nature, it is evident they belong to different systems: England to Europe, America to itself. I am not induced by motives of pride, party, or resentment to espouse the doctrine of separation and independance; I am clearly, positively, and conscientiously persuaded that it is the true interest of this continent to be so; that every thing short of that is mere patchwork, that it can afford no lasting felicity,—that it is leaving the sword to our children, and shrinking back at a time, when, a little more, a little farther, would have rendered this continent the glory of the earth. … O ye that love mankind! Ye that dare oppose, not only the tyranny, but the tyrant, stand forth! Every spot of the old world is overrun with oppression. Freedom hath been hunted round the globe. Asia, and Africa, have long expelled her—Europe regards her like a stranger, and England hath given her warning to depart. O! receive the fugitive, and prepare in time an asylum for mankind."
    },
    {
      "source": "Simón Bolívar, “Letter from Jamaica” (Kingston, September 6, 1815), as translated and quoted in Guillermo A. Sherwell, Simón Bolívar (The Liberator): Patriot, Warrior, Statesman, Father of Five Nations (Washington, D.C., 1921).",
      "url": "https://www.gutenberg.org/ebooks/8928",
      "topic": "Latin American independence & creole identity",
      "content": "I consider the actual state of America as when, after the collapse of the Roman Empire, each member constituted a political system in conformity with its interests and position, but with this great difference: that these scattered members reestablished the old nationalities with the alterations required by circumstances or events. But we, who scarcely keep a vestige of things of the past, and who, on the other hand, are not Indians nor Europeans, but a mixture of the legitimate owners of the country and the usurping Spaniards; in short, we, being Americans by birth and with rights equal to those of Europe, have to dispute these rights with the men of the country, and to maintain ourselves against the possession of the invaders. Thus, we find ourselves in the most extraordinary and complicated predicament. … Americans, under the Spanish system now in vigor, have in society no other place than that of serfs fit for work, and, at the most, that of simple consumers; and even this is limited by absurd restrictions, such as prohibition of the cultivation of European products; the monopoly of certain goods in the hands of the king; the prevention of the establishment in America of factories not possessed by Spain; the exclusive privileges of trade, even regarding the necessities of life; the obstacles placed in the way of the American provinces so that they may not deal with each other, nor have understandings, nor trade. In short, do you want to know what was our lot? The fields, in which to cultivate indigo, cochineal, coffee, sugar cane, cocoa, cotton; the solitary plains, to breed cattle; the deserts, to hunt the wild beasts; the bosom of the earth, to extract gold, with which that avaricious country was never satisfied."
    },
    {
      "source": "Mary Wollstonecraft, A Vindication of the Rights of Woman (London, 1792), dedication to Charles-Maurice de Talleyrand-Périgord, former Bishop of Autun, on the French constitution of 1791.",
      "url": "https://www.gutenberg.org/ebooks/3420",
      "topic": "Revolution & the rights of women",
      "content": "Consider, I address you as a legislator, whether, when men contend for their freedom, and to be allowed to judge for themselves, respecting their own happiness, it be not inconsistent and unjust to subjugate women, even though you firmly believe that you are acting in the manner best calculated to promote their happiness? Who made man the exclusive judge, if woman partake with him the gift of reason? In this style, argue tyrants of every denomination from the weak king to the weak father of a family; they are all eager to crush reason; yet always assert that they usurp its throne only to be useful. Do you not act a similar part, when you FORCE all women, by denying them civil and political rights, to remain immured in their families groping in the dark? For surely, sir, you will not assert, that a duty can be binding which is not founded on reason? If, indeed, this be their destination, arguments may be drawn from reason; and thus augustly supported, the more understanding women acquire, the more they will be attached to their duty, comprehending it, for unless they comprehend it, unless their morals be fixed on the same immutable principles as those of man, no authority can make them discharge it in a virtuous manner. They may be convenient slaves, but slavery will have its constant effect, degrading the master and the abject dependent."
    },
    {
      "source": "Declaration of Sentiments, Woman’s Rights Convention, Seneca Falls, New York, July 19–20, 1848, in E. C. Stanton, S. B. Anthony, and M. J. Gage, eds., History of Woman Suffrage, Vol. I (New York, 1881).",
      "url": "https://www.gutenberg.org/ebooks/28020",
      "topic": "Reform movements & the expansion of rights",
      "content": "The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her. To prove this, let facts be submitted to a candid world. He has never permitted her to exercise her inalienable right to the elective franchise. He has compelled her to submit to laws, in the formation of which she had no voice. He has withheld from her rights which are given to the most ignorant and degraded men—both natives and foreigners. Having deprived her of this first right of a citizen, the elective franchise, thereby leaving her without representation in the halls of legislation, he has oppressed her on all sides. He has made her, if married, in the eye of the law, civilly dead. He has taken from her all right in property, even to the wages she earns. He has made her, morally, an irresponsible being, as she can commit many crimes with impunity, provided they be done in the presence of her husband. In the covenant of marriage, she is compelled to promise obedience to her husband, he becoming, to all intents and purposes, her master—the law giving him power to deprive her of her liberty, and to administer chastisement."
    }
  ]
};

window.DOC_BANK.unit6 = {
  "label": "Unit 6 — Consequences of Industrialization (c. 1750–1900)",
  "documents": [
    {
      "source": "Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations (London, 1776), Book I, Chapter 1, “Of the Division of Labour.”",
      "url": "https://www.gutenberg.org/ebooks/3300",
      "topic": "Foundations of industrial production",
      "content": "But in the way in which this business is now carried on, not only the whole work is a peculiar trade, but it is divided into a number of branches, of which the greater part are likewise peculiar trades. One man draws out the wire; another straights it; a third cuts it; a fourth points it; a fifth grinds it at the top for receiving the head; to make the head requires two or three distinct operations; to put it on is a peculiar business; to whiten the pins is another; it is even a trade by itself to put them into the paper; and the important business of making a pin is, in this manner, divided into about eighteen distinct operations, which, in some manufactories, are all performed by distinct hands, though in others the same man will sometimes perform two or three of them. … I have seen a small manufactory of this kind, where ten men only were employed, and where some of them consequently performed two or three distinct operations. But though they were very poor, and therefore but indifferently accommodated with the necessary machinery, they could, when they exerted themselves, make among them about twelve pounds of pins in a day. There are in a pound upwards of four thousand pins of a middling size. Those ten persons, therefore, could make among them upwards of forty-eight thousand pins in a day. Each person, therefore, making a tenth part of forty-eight thousand pins, might be considered as making four thousand eight hundred pins in a day. But if they had all wrought separately and independently, and without any of them having been educated to this peculiar business, they certainly could not each of them have made twenty, perhaps not one pin in a day."
    },
    {
      "source": "Friedrich Engels, The Condition of the Working-Class in England in 1844 (German ed. 1845), trans. Florence Kelley Wischnewetzky (London, 1892), “The Great Towns.”",
      "url": "https://www.gutenberg.org/ebooks/17306",
      "topic": "Social effects of industrialization: urban workers",
      "content": "Every great city has one or more slums, where the working-class is crowded together. True, poverty often dwells in hidden alleys close to the palaces of the rich; but, in general, a separate territory has been assigned to it, where, removed from the sight of the happier classes, it may struggle along as it can. These slums are pretty equally arranged in all the great towns of England, the worst houses in the worst quarters of the towns; usually one or two-storied cottages in long rows, perhaps with cellars used as dwellings, almost always irregularly built. These houses of three or four rooms and a kitchen form, throughout England, some parts of London excepted, the general dwellings of the working-class. The streets are generally unpaved, rough, dirty, filled with vegetable and animal refuse, without sewers or gutters, but supplied with foul, stagnant pools instead. Moreover, ventilation is impeded by the bad, confused method of building of the whole quarter, and since many human beings here live crowded into a small space, the atmosphere that prevails in these working-men's quarters may readily be imagined. Further, the streets serve as drying grounds in fine weather; lines are stretched across from house to house, and hung with wet clothing."
    },
    {
      "source": "Karl Marx and Friedrich Engels, Manifesto of the Communist Party (1848), Section I, “Bourgeois and Proletarians,” English edition of 1888 (trans. Samuel Moore, ed. Engels).",
      "url": "https://www.gutenberg.org/ebooks/61",
      "topic": "Industrial capitalism, global markets & critiques",
      "content": "The need of a constantly expanding market for its products chases the bourgeoisie over the whole surface of the globe. It must nestle everywhere, settle everywhere, establish connexions everywhere. … The bourgeoisie has through its exploitation of the world-market given a cosmopolitan character to production and consumption in every country. To the great chagrin of Reactionists, it has drawn from under the feet of industry the national ground on which it stood. All old-established national industries have been destroyed or are daily being destroyed. They are dislodged by new industries, whose introduction becomes a life and death question for all civilised nations, by industries that no longer work up indigenous raw material, but raw material drawn from the remotest zones; industries whose products are consumed, not only at home, but in every quarter of the globe. … The bourgeoisie, by the rapid improvement of all instruments of production, by the immensely facilitated means of communication, draws all, even the most barbarian, nations into civilisation. The cheap prices of its commodities are the heavy artillery with which it batters down all Chinese walls, with which it forces the barbarians' intensely obstinate hatred of foreigners to capitulate. It compels all nations, on pain of extinction, to adopt the bourgeois mode of production; it compels them to introduce what it calls civilisation into their midst, i.e., to become bourgeois themselves. In one word, it creates a world after its own image."
    },
    {
      "source": "Rudyard Kipling, “The White Man’s Burden” (first published February 1899, addressed to the United States after its annexation of the Philippines), from The Five Nations (London, 1903).",
      "url": "https://www.gutenberg.org/ebooks/60260",
      "topic": "Ideology of imperialism",
      "content": "Take up the White Man’s burden— / Send forth the best ye breed— / Go bind your sons to exile / To serve your captives’ need; / To wait in heavy harness, / On fluttered folk and wild— / Your new-caught, sullen peoples, / Half-devil and half-child. // Take up the White Man’s burden— / In patience to abide, / To veil the threat of terror / And check the show of pride; / By open speech and simple, / An hundred times made plain, / To seek another’s profit, / And work another’s gain. // Take up the White Man’s burden— / The savage wars of peace— / Fill full the mouth of Famine / And bid the sickness cease; / And when your goal is nearest / The end for others sought, / Watch Sloth and heathen Folly / Bring all your hope to nought. // Take up the White Man’s burden— / No tawdry rule of kings, / But toil of serf and sweeper— / The tale of common things. / The ports ye shall not enter, / The roads ye shall not tread, / Go make them with your living, / And mark them with your dead. // Take up the White Man’s burden— / And reap his old reward: / The blame of those ye better, / The hate of those ye guard— / The cry of hosts ye humour / (Ah, slowly!) toward the light:— / ‘Why brought ye us from bondage, / Our loved Egyptian night?’ // Take up the White Man’s burden— / Ye dare not stoop to less— / Nor call too loud on Freedom / To cloak your weariness; / By all ye cry or whisper, / By all ye leave or do, / The silent, sullen peoples / Shall weigh your Gods and you. // Take up the White Man’s burden— / Have done with childish days— / The lightly proffered laurel, / The easy, ungrudged praise. / Comes now, to search your manhood / Through all the thankless years, / Cold, edged with dear-bought wisdom, / The judgment of your peers!"
    },
    {
      "source": "Grover Cleveland, Special Message to Congress on Hawaii, December 18, 1893, on the overthrow of Queen Liliʻuokalani.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/december-18-1893-message-regarding-hawaiian-annexation",
      "topic": "U.S. expansion in the Pacific & Indigenous sovereignty",
      "content": "In this state of things, if the Queen could have dealt with the insurgents alone, her course would have been plain and the result unmistakable. But the United States had allied itself with her enemies, had recognized them as the true Government of Hawaii, and had put her and her adherents in the position of opposition against lawful authority. She knew that she could not withstand the power of the United States, but she believed that she might safely trust to its justice. Accordingly, some hours after the recognition of the Provisional Government by the United States minister, the palace, the barracks, and the police station, with all the military resources of the country, were delivered up by the Queen upon the representation made to her that her cause would thereafter be reviewed at Washington, and while protesting that she surrendered to the superior force of the United States, whose minister had caused United States troops to be landed at Honolulu and declared that he would support the Provisional Government, and that she yielded her authority to prevent collision of armed forces and loss of life, and only until such time as the United States, upon the facts being presented to it, should undo the action of its representative and reinstate her in the authority she claimed as the constitutional sovereign of the Hawaiian Islands."
    },
    {
      "source": "Grover Cleveland, Message to Congress Regarding Chinese Immigrant Workers, March 1, 1886, on the Rock Springs massacre (Wyoming Territory, September 1885).",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/march-1-1886-message-regarding-chinese-immigrant-workers",
      "topic": "Migration & anti-immigrant violence",
      "content": "At the time I wrote this the shocking occurrences at Rock Springs, in Wyoming Territory, were fresh in the minds of all, and had been recently presented anew to the attention of this Government by the Chinese minister in a note which, while not unnaturally exhibiting some misconception of our Federal system of administration in the Territories while they as yet are not in the exercise of the full measure of that sovereign self-government pertaining to the States of the Union, presents in truthful terms the main features of the cruel outrage there perpetrated upon inoffensive subjects of China. … The facts, which so far are not controverted or affected by any exculpatory or mitigating testimony, show the murder of a number of Chinese subjects in September last at Rock Springs, the wounding of many others, and the spoliation of the property of all when the unhappy survivors had been driven from their habitations."
    },
    {
      "source": "Theodore Roosevelt, Fourth Annual Message to Congress, December 6, 1904 (the “Roosevelt Corollary” to the Monroe Doctrine).",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/december-6-1904-fourth-annual-message",
      "topic": "Economic imperialism & U.S. intervention in Latin America",
      "content": "It is not true that the United States feels any land hunger or entertains any projects as regards the other nations of the Western Hemisphere save such as are for their welfare. All that this country desires is to see the neighboring countries stable, orderly, and prosperous. Any country whose people conduct themselves well can count upon our hearty friendship. If a nation shows that it knows how to act with reasonable efficiency and decency in social and political matters, if it keeps order and pays its obligations, it need fear no interference from the United States. Chronic wrongdoing, or an impotence which results in a general loosening of the ties of civilized society, may in America, as elsewhere, ultimately require intervention by some civilized nation, and in the Western Hemisphere the adherence of the United States to the Monroe Doctrine may force the United States, however reluctantly, in flagrant cases of such wrongdoing or impotence, to the exercise of an international police power. If every country washed by the Caribbean Sea would show the progress in stable and just civilization which with the aid of the Platt amendment Cuba has shown since our troops left the island, and which so many of the republics in both Americas are constantly and brilliantly showing, all question of interference by this Nation with their affairs would be at an end."
    },
    {
      "source": "M. K. Gandhi, Indian Home Rule (Hind Swaraj), Chapter VII, “Why Was India Lost?” (written 1908; English ed., Madras: Ganesh & Co., 1922).",
      "url": "https://www.gutenberg.org/ebooks/40461",
      "topic": "Indian responses to British imperialism",
      "content": "The English have not taken India; we have given it to them. They are not in India because of their strength, but because we keep them. Let us now see whether these propositions can be sustained. They came to our country originally for purposes of trade. Recall the Company Bahadur. Who made it Bahadur? They had not the slightest intention at the time of establishing a kingdom. Who assisted the Company's officers? Who was tempted at the sight of their silver? Who bought their goods? History testifies that we did all this. In order to become rich all at once, we welcomed the Company's officers with open arms. We assisted them. If I am in the habit of drinking Bhang and a seller thereof sells it to me, am I to blame him or myself? By blaming the seller shall I be able to avoid the habit? And, if a particular retailer is driven away, will not another take his place? A true servant of India will have to go to the root of the matter. If an excess of food has caused me indigestion, I will certainly not avoid it by blaming water. He is a true physician who probes the cause of disease and, if you pose as a physician for the disease of India, you will have to find out its true cause."
    }
  ]
};

window.DOC_BANK.unit7 = {
  "label": "Unit 7 — Global Conflict (c. 1900–present)",
  "documents": [
    {
      "source": "Wilfred Owen, “Dulce et Decorum Est” (written 1917–18), from Poems by Wilfred Owen, ed. Siegfried Sassoon (London, 1920).",
      "url": "https://www.gutenberg.org/ebooks/1034",
      "topic": "The experience of total war",
      "content": "Bent double, like old beggars under sacks, / Knock-kneed, coughing like hags, we cursed through sludge, / Till on the haunting flares we turned our backs, / And towards our distant rest began to trudge. / Men marched asleep. Many had lost their boots, / But limped on, blood-shod. All went lame, all blind; / Drunk with fatigue; deaf even to the hoots / Of gas-shells dropping softly behind. // Gas! GAS! Quick, boys!—An ecstasy of fumbling / Fitting the clumsy helmets just in time, / But someone still was yelling out and stumbling / And flound'ring like a man in fire or lime.— / Dim through the misty panes and thick green light, / As under a green sea, I saw him drowning. // In all my dreams before my helpless sight / He plunges at me, guttering, choking, drowning. // If in some smothering dreams, you too could pace / Behind the wagon that we flung him in, / And watch the white eyes writhing in his face, / His hanging face, like a devil's sick of sin, / If you could hear, at every jolt, the blood / Come gargling from the froth-corrupted lungs / Bitter as the cud / Of vile, incurable sores on innocent tongues,— / My friend, you would not tell with such high zest / To children ardent for some desperate glory, / The old Lie: Dulce et decorum est / Pro patria mori."
    },
    {
      "source": "Henry Morgenthau, U.S. Ambassador to the Ottoman Empire 1913–1916, Ambassador Morgenthau’s Story (New York, 1918), Chapter XXIV, on the Armenian deportations of 1915.",
      "url": "https://www.gutenberg.org/ebooks/55343",
      "topic": "Genocide during the First World War",
      "content": "The Central Government now announced its intention of gathering the two million or more Armenians living in the several sections of the empire and transporting them to this desolate and inhospitable region. Had they undertaken such a deportation in good faith it would have represented the height of cruelty and injustice. As a matter of fact, the Turks never had the slightest idea of reëstablishing the Armenians in this new country. They knew that the great majority would never reach their destination and that those who did would either die of thirst and starvation, or be murdered by the wild Mohammedan desert tribes. The real purpose of the deportation was robbery and destruction; it really represented a new method of massacre. When the Turkish authorities gave the orders for these deportations, they were merely giving the death warrant to a whole race; they understood this well, and, in their conversations with me, they made no particular attempt to conceal the fact. All through the spring and summer of 1915 the deportations took place. Of the larger cities, Constantinople, Smyrna, and Aleppo were spared; practically all other places where a single Armenian family lived now became the scenes of these unspeakable tragedies. Scarcely a single Armenian, whatever his education or wealth, or whatever the social class to which he belonged, was exempted from the order. In some villages placards were posted ordering the whole Armenian population to present itself in a public place at an appointed time—usually a day or two ahead, and in other places the town crier would go through the streets delivering the order vocally. In still others not the slightest warning was given."
    },
    {
      "source": "V. I. Lenin, Decree on Peace (“Proclamation to the Peoples and Governments of All the Belligerent Nations”), read to the Second All-Russian Congress of Soviets, November 8, 1917, as translated in John Reed, Ten Days That Shook the World (New York, 1919).",
      "url": "https://www.gutenberg.org/ebooks/3076",
      "topic": "The Russian Revolution & the war",
      "content": "The Workers’ and Peasants’ Government, created by the revolution of November 6th and 7th and based on the Soviets of Workers’, Soldiers’ and Peasants’ Deputies, proposes to all the belligerent peoples and to their Governments to begin immediately negotiations for a just and democratic peace. The Government means by a just and democratic peace, which is desired by the immense majority of the workers and the labouring classes, exhausted and depleted by the war—that peace which the Russian workers and peasants, after having struck down the Tsarist monarchy, have not ceased to demand categorically—immediate peace without annexations (that is to say, without conquest of foreign territory, without forcible annexation of other nationalities), and without indemnities. … By annexation or conquest of foreign territory, the Government means—conformably to the conception of democratic rights in general, and the rights of the working-class in particular—all union to a great and strong State of a small or weak nationality, without the voluntary, clear and precise expression of its consent and desire; whatever be the moment when such an annexation by force was accomplished, whatever be the degree civilisation of the nation annexed by force or maintained outside the frontiers of another State, no matter if that nation be in Europe or in the far countries across the sea."
    },
    {
      "source": "Woodrow Wilson, Address to a Joint Session of Congress (the “Fourteen Points”), January 8, 1918.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/january-8-1918-wilsons-fourteen-points",
      "topic": "War aims, self-determination & the postwar order",
      "content": "What we demand in this war, therefore, is nothing peculiar to ourselves. It is that the world be made fit and safe to live in; and particularly that it be made safe for every peace-loving nation which, like our own, wishes to live its own life, determine its own institutions, be assured of justice and fair dealing by the other peoples of the world as against force and selfish aggression. All the peoples of the world are in effect partners in this interest, and for our own part we see very clearly that unless justice be done to others it will not be done to us. The program of the world's peace, therefore, is our program; and that program, the only possible program, as we see it, is this: I. Open covenants of peace, openly arrived at, after which there shall be no private international understandings of any kind, but diplomacy shall proceed always frankly and in the public view. … III. The removal, so far as possible, of all economic barriers and the establishment of an equality of trade conditions among all the nations consenting to the peace and associating themselves for its maintenance. … V. A free, open-minded, and absolutely impartial adjustment of all colonial claims, based upon a strict observance of the principle that in determining all such questions of sovereignty the interests of the populations concerned must have equal weight with the equitable claims of the government whose title is to be determined. … XIV. A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike."
    },
    {
      "source": "John Maynard Keynes, British Treasury delegate to the Paris Peace Conference, The Economic Consequences of the Peace (London, 1919), Chapter VI, “Europe after the Treaty.”",
      "url": "https://www.gutenberg.org/ebooks/15776",
      "topic": "Versailles & interwar instability",
      "content": "This chapter must be one of pessimism. The Treaty includes no provisions for the economic rehabilitation of Europe,—nothing to make the defeated Central Empires into good neighbors, nothing to stabilize the new States of Europe, nothing to reclaim Russia; nor does it promote in any way a compact of economic solidarity amongst the Allies themselves; no arrangement was reached at Paris for restoring the disordered finances of France and Italy, or to adjust the systems of the Old World and the New. The Council of Four paid no attention to these issues, being preoccupied with others,—Clemenceau to crush the economic life of his enemy, Lloyd George to do a deal and bring home something which would pass muster for a week, the President to do nothing that was not just and right. It is an extraordinary fact that the fundamental economic problems of a Europe starving and disintegrating before their eyes, was the one question in which it was impossible to arouse the interest of the Four. Reparation was their main excursion into the economic field, and they settled it as a problem of theology, of politics, of electoral chicane, from every point of view except that of the economic future of the States whose destiny they were handling."
    },
    {
      "source": "Sun Yat-sen, The International Development of China (New York: G. P. Putnam’s Sons, 1922), Preface.",
      "url": "https://www.gutenberg.org/ebooks/45188",
      "topic": "China, imperialism & the interwar world",
      "content": "As soon as Armistice was declared in the recent World War, I began to take up the study of the International Development of China, and to form programs accordingly. I was prompted to do so by the desire to contribute my humble part in the realization of world peace. China, a country possessing a territory of 4,289,000 square miles, a population of 400,000,000 people, and the richest mineral and agricultural resources in the world, is now a prey of militaristic and capitalistic powers—a greater bone of contention than the Balkan Peninsula. Unless the Chinese question can be settled peacefully, another world war greater and more terrible than the one just past will be inevitable. In order to solve the Chinese question, I suggest that the vast resources of China be developed internationally under a socialistic scheme, for the good of the world in general and the Chinese people in particular. It is my hope that as a result of this, the present spheres of influence can be abolished; the international commercial war can be done away with; the internecine capitalistic competition can be got rid of, and last, but not least, the class struggle between capital and labor can be avoided. Thus the root of war will be forever exterminated so far as China is concerned."
    },
    {
      "source": "Franklin D. Roosevelt, Address to Congress Requesting a Declaration of War with Japan, December 8, 1941.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/december-8-1941-address-congress-requesting-declaration-war",
      "topic": "Japanese expansion & the Pacific War",
      "content": "Yesterday, December 7, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan. The United States was at peace with that Nation and, at the solicitation of Japan, was still in conversation with its Government and its Emperor looking toward the maintenance of peace in the Pacific. … It will be recorded that the distance of Hawaii from Japan makes it obvious that the attack was deliberately planned many days or even weeks ago. During the intervening time the Japanese Government has deliberately sought to deceive the United States by false statements and expressions of hope for continued peace. The attack yesterday on the Hawaiian Islands has caused severe damage to American naval and military forces. I regret to tell you that very many American lives have been lost. In addition American ships have been reported torpedoed on the high seas between San Francisco and Honolulu. … Yesterday the Japanese Government also launched an attack against Malaya. Last night Japanese forces attacked Hong Kong. Last night Japanese forces attacked Guam. Last night Japanese forces attacked the Philippine Islands. Last night the Japanese attacked Wake Island. And this morning the Japanese attacked Midway Island. Japan has, therefore, undertaken a surprise offensive extending throughout the Pacific area."
    },
    {
      "source": "Harry S. Truman, Statement by the President Announcing the Use of the A-Bomb at Hiroshima, August 6, 1945.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/august-6-1945-statement-president-announcing-use-bomb",
      "topic": "New military technology & the end of WWII",
      "content": "Sixteen hours ago an American airplane dropped one bomb on Hiroshima, an important Japanese Army base. That bomb had more power than 20,000 tons of T.N.T. It had more than two thousand times the blast power of the British \"Grand Slam\" which is the largest bomb ever yet used in the history of warfare. The Japanese began the war from the air at Pearl Harbor. They have been repaid many fold. And the end is not yet. With this bomb we have now added a new and revolutionary increase in destruction to supplement the growing power of our armed forces. In their present form these bombs are now in production and even more powerful forms are in development. It is an atomic bomb. It is a harnessing of the basic power of the universe. The force from which the sun draws its power has been loosed against those who brought war to the Far East. … It was to spare the Japanese people from utter destruction that the ultimatum of July 26 was issued at Potsdam. Their leaders promptly rejected that ultimatum. If they do not now accept our terms they may expect a rain of ruin from the air, the like of which has never been seen on this earth."
    }
  ]
};

window.DOC_BANK.unit8 = {
  "label": "Unit 8 — Cold War & Decolonization (c. 1900–present)",
  "documents": [
    {
      "source": "Ho Chi Minh, Declaration of Independence of the Democratic Republic of Viet-Nam, Hanoi, September 2, 1945 (English translation as excerpted in OpenStax, World History, Volume 2, CC BY 4.0).",
      "url": "https://github.com/openstax/osbooks-world-history/blob/main/modules/m00035/index.cnxml",
      "topic": "Decolonization & nationalism in Southeast Asia",
      "content": "In the autumn of 1940, when the Japanese fascists violated Indochina’s territory to establish new bases in their fight against the Allies, the French imperialists went down on their bended knees and handed over our country to them. Thus, from that date, our people were subjected to the double yoke of the French and the Japanese. Their sufferings and miseries increased. The result was that, from the end of last year to the beginning of this year, from Quảng Trị Province to northern Vietnam, more than two million of our fellow citizens died from starvation. … On March 9 [1945], the French troops were disarmed by the Japanese. The French colonialists either fled or surrendered, showing that not only were they incapable of “protecting” us, but that, in the span of five years, they had twice sold our country to the Japanese. … For these reasons, we, the members of the Provisional Government, representing the whole Vietnamese people, declare that from now on we break off all relations of a colonial character with France; we repeal all the international obligation that France has so far subscribed to on behalf of Viet-Nam, and we abolish all the special rights the French have unlawfully acquired in our Fatherland. The whole Vietnamese people, animated by a common purpose, are determined to fight to the bitter end against any attempt by the French colonialists to reconquer the country."
    },
    {
      "source": "Harry S. Truman, Address before a Joint Session of Congress (the “Truman Doctrine”), March 12, 1947.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/march-12-1947-truman-doctrine",
      "topic": "Containment & the start of the Cold War",
      "content": "At the present moment in world history nearly every nation must choose between alternative ways of life. The choice is too often not a free one. One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms. I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures. I believe that we must assist free peoples to work out their own destinies in their own way. I believe that our help should be primarily through economic and financial aid which is essential to economic stability and orderly political processes. The world is not static, and the status quo is not sacred. But we cannot allow changes in the status quo in violation of the Charter of the United Nations by such methods as coercion, or by such subterfuges as political infiltration. In helping free and independent nations to maintain their freedom, the United States will be giving effect to the principles of the Charter of the United Nations."
    },
    {
      "source": "Jawaharlal Nehru, “A Tryst with Destiny,” speech to the Constituent Assembly of India on the eve of independence, New Delhi, August 14–15, 1947 (text from the GUM corpus, Georgetown University).",
      "url": "https://github.com/amir-zeldes/gum/blob/master/rst/gdtb/pdtb/raw/00/GUM_speech_destiny",
      "topic": "Independence & partition in South Asia",
      "content": "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom. A moment comes, which comes but rarely in history, when we step out from the old to the new, when an age ends, and when the soul of a nation, long suppressed, finds utterance. It is fitting that at this solemn moment, we take the pledge of dedication to the service of India and her people and to the still larger cause of humanity. At the dawn of history, India started on her unending quest, and trackless centuries are filled with her striving and grandeur of her success and failures. Through good and ill fortune alike, she has never lost sight of that quest, forgotten the ideals which gave her strength. We end today a period of misfortunes and India discovers herself again."
    },
    {
      "source": "Universal Declaration of Human Rights, adopted by the United Nations General Assembly, Paris, December 10, 1948, Preamble and Articles 1–2.",
      "url": "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
      "topic": "Human rights & the postwar international order",
      "content": "Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world, Whereas disregard and contempt for human rights have resulted in barbarous acts which have outraged the conscience of mankind, and the advent of a world in which human beings shall enjoy freedom of speech and belief and freedom from fear and want has been proclaimed as the highest aspiration of the common people, … Article 1 All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood. Article 2 Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty."
    },
    {
      "source": "Kwame Nkrumah, President of Ghana, Address to the United Nations General Assembly, 15th Session, General Debate, September 23, 1960 (UN General Assembly Official Records; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2015%20-%201960/GHA_15_1960.txt",
      "topic": "African independence movements",
      "content": "The great tide of history flows, and as it flows it carries to the shores of reality the stubborn facts of life and men's relations one with another. One cardinal fact of our time is the momentous impact of Africa's awakening upon the modern world. The flowing tide of African nationalism sweeps everything before it and constitutes a challenge to the colonial Powers to make just restitution for the years of injustice and crime committed against our continent. But Africa does not seek vengeance. It is against her very nature to harbour malice. Over 200 millions of our people cry out with one voice of tremendous power — and what do we say? We do not ask for death for our oppressors; we do not pronounce wishes of ill-fate for our slave-masters; we make an assertion of a just and positive demand; our voice booms across the oceans and mountains, over the hills and valleys, in the desert places and through the vast expanse of mankind's habitation, and it calls out for the freedom of Africa; Africa wants her freedom; Africa must be free. … For years and years, Africa has been the foot-stool of colonialism and Imperialism, exploitation and degradation. From the North to the South, from the East to the West, her sons languished in the chains of slavery and humiliation, and Africa's exploiters and self-appointed controllers of her destiny strode across our land with incredible inhumanity — without mercy, without shame, and without honour. But those days are gone, and gone forever, and now I, an African, stand before the General Assembly of the United Nations and speak with the voice of peace and freedom, proclaiming to the world the dawn of a new era."
    },
    {
      "source": "Nikita Khrushchev, Chairman of the Council of Ministers of the USSR, Address to the United Nations General Assembly, 15th Session, General Debate, September 23, 1960 (UN General Assembly Official Records; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2015%20-%201960/RUS_15_1960.txt",
      "topic": "The Soviet Union, the Cold War & decolonization",
      "content": "Our time is characterized by the emancipation and national rebirth of peoples who for centuries were kept apart by the colonialists from the mainstream of human development, a process which is taking place before all our eyes. In a mere fifteen years, about 1,500 million people, or half the population of the earth, have cast off the shackles of colonialist oppression. Dozens of new national States have arisen from the ruins of the old colonial empires. … Would the picture be the same in the colonies? There neither is nor could be anything of the kind there. In the colonies arbitrary rule by foreigners prevails. The peoples of the colonial countries are not only deprived of the right to independence and self-government; in addition, their national and human feelings and their self-respect are scorned and outraged at every turn. Through ruthless exploitation and robbery, the foreign monopolists wring everything of value from the colonies, plundering their wealth like barbarians. … It should be clear to everyone that there is no means and no force which can halt this struggle of the peoples for their liberation, for it is a great historic process, one of ever-growing and invincible power. It may be possible to prolong the dominion of one State over another for a year or two, but just as in the past the bourgeois order of things came to replace feudalism and as, now, socialism is replacing capitalism, so colonial slavery is giving place to freedom. Such are the rules of human development, and only adventurers can believe that mountains of corpses and millions of victims will delay the advent of a radiant future."
    },
    {
      "source": "Sukarno, President of Indonesia, “To Build the World Anew,” Address to the United Nations General Assembly, 15th Session, General Debate, September 30, 1960 (UN General Assembly Official Records; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2015%20-%201960/IDN_15_1960.txt",
      "topic": "Non-alignment & Afro-Asian nationalism",
      "content": "Imperialism is not yet dead. People sometimes say that imperialism and colonialism are dead. No, imperialism is not yet dead. It is dying, yes. The tide of history is washing over its battlements, and undermining its foundations. Yes, the victory of independence and nationalism is certain. Still — and mark my words well — the dying imperialism is dangerous, as dangerous as the wounded tiger in a tropical jungle. I tell you this — and I am conscious of speaking now for my Asian and African brothers — the struggle for independence is always justified and always just. Those who resist that irresistible onward march of national independence and self-determination are blind; those who seek to reverse what is irreversible are dangers to themselves and to the world. … Our nationalism in Asia and Africa is not the same as that of the Western State system. In the West, nationalism developed as an aggressive force, seeking national economic expansion and advantage. It was the grandparent of imperialism, whose father was capitalism. In Asia and Africa, and I believe in Latin America also, nationalism is a liberating movement, a movement of protest against imperialism and colonialism, and a response to the oppression of chauvinist nationalism springing from Europe. Asia and African nationalism, and that of Latin America, cannot be considered without reference to its social content."
    },
    {
      "source": "John F. Kennedy, Inaugural Address, Washington, D.C., January 20, 1961.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/january-20-1961-inaugural-address",
      "topic": "Cold War rivalry & the developing world",
      "content": "Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and the success of liberty. This much we pledge—and more. To those old allies whose cultural and spiritual origins we share, we pledge the loyalty of faithful friends. United, there is little we cannot do in a host of cooperative ventures. Divided, there is little we can do—for we dare not meet a powerful challenge at odds and split asunder. To those new states whom we welcome to the ranks of the free, we pledge our word that one form of colonial control shall not have passed away merely to be replaced by a far more iron tyranny. We shall not always expect to find them supporting our view. But we shall always hope to find them strongly supporting their own freedom—and to remember that, in the past, those who foolishly sought power by riding the back of the tiger ended up inside. To those peoples in the huts and villages of half the globe struggling to break the bonds of mass misery, we pledge our best efforts to help them help themselves, for whatever period is required—not because the communists may be doing it, not because we seek their votes, but because it is right. If a free society cannot help the many who are poor, it cannot save the few who are rich."
    }
  ]
};

window.DOC_BANK.unit9 = {
  "label": "Unit 9 — Globalization (c. 1900–present)",
  "documents": [
    {
      "source": "Ronald Reagan, Remarks at the Brandenburg Gate, West Berlin, June 12, 1987.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/june-12-1987-address-brandenburg-gate-berlin-wall",
      "topic": "The end of the Cold War",
      "content": "In the 1950s, Khrushchev predicted: \"We will bury you.\" But in the West today, we see a free world that has achieved a level of prosperity and well-being unprecedented in all human history. In the Communist world, we see failure, technological backwardness, declining standards of health, even want of the most basic kind—too little food. Even today, the Soviet Union still cannot feed itself. After these four decades, then, there stands before the entire world one great and inescapable conclusion: Freedom leads to prosperity. Freedom replaces the ancient hatreds among the nations with comity and peace. Freedom is the victor. … And now the Soviets themselves may, in a limited way, be coming to understand the importance of freedom. We hear much from Moscow about a new policy of reform and openness. Some political prisoners have been released. Certain foreign news broadcasts are no longer being jammed. Some economic enterprises have been permitted to operate with greater freedom from state control. Are these the beginnings of profound changes in the Soviet state? Or are they token gestures, intended to raise false hopes in the West, or to strengthen the Soviet system without changing it? We welcome change and openness; for we believe that freedom and security go together, that the advance of human liberty can only strengthen the cause of world peace. … General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization: Come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!"
    },
    {
      "source": "Eduard Shevardnadze, Foreign Minister of the USSR, Address to the United Nations General Assembly, 43rd Session, General Debate, September 1988 (UN General Assembly Official Records; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2043%20-%201988/RUS_43_1988.txt",
      "topic": "Perestroika, “new thinking” & global interdependence",
      "content": "I shall permit myself to include among the year's landmark events the Party Conference in my own country. Its main conclusion was that perestroika is irreversible. It is irreversible in both our domestic and our foreign policy. Radical change in our own house - and here I am quoting Mikhail Gorbachev - has engendered new approaches by us to international affairs too. … Faced with the threat of environmental catastrophe, the dividing lines of the bipolar ideological world are receding. The biosphere recognizes no division into blocs, alliances or systems. All share the same climatic system and no one is in a position to build his own isolated and independent line of environmental defence. … Freedom of choice defies confinement within ideological borders or geographical zones. It cannot be stopped by \"crusades\"; it can only be recognized. It is absolute, and equally resolute is our respect for it, regardless of the orientation of any particular country."
    },
    {
      "source": "Statement of the Republic of Maldives to the United Nations General Assembly, 45th Session, General Debate, September 1990 (UN General Assembly Official Records; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2045%20-%201990/MDV_45_1990.txt",
      "topic": "Climate change & small island states",
      "content": "I refer to the predicted global warming and sea-level rise, which may endanger the very survival of my island nation. … There is, however, a limit to what the small low-lying States can do. We need international help. In this multipolar world, where interdependency has become a key element, we believe that it is not just the responsibility of the nations threatened by sea-level rise to take preventive measures. We remain convinced that it is also the duty of those States whose race for development over many years had contributed to global warming, ozone depletion, acid rain and tropical deforestation to reverse the existing situation. We cannot accept that economic development has to be achieved at the expense of our environment. The Maldives calls upon the industrialized nations to take urgent measures to reduce the emission of greenhouse gases into the atmosphere and to adopt environmentally compatible technology. We urge them to assist the developing countries to implement similar measures. It is our earnest hope that the world community will heed our voice - that of low-lying States - and save us from the ignominy of becoming environmental refugees."
    },
    {
      "source": "William J. Clinton, Remarks on the Signing of the North American Free Trade Agreement (NAFTA), Washington, D.C., December 8, 1993.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/december-8-1993-remarks-signing-nafta",
      "topic": "Free trade & economic globalization",
      "content": "Make no mistake, the global economy with all of its promise and perils is now the central fact of life for hard-working Americans. It has enriched the lives of millions of Americans. But for too many those same winds of change have worn away at the basis of their security. For two decades, most people have worked harder for less. Seemingly secure jobs have been lost. And while America once again is the most productive nation on Earth, this productivity itself holds the seeds of further insecurity. After all, productivity means the same people can produce more or, very often, that fewer people can produce more. This is the world we face. We cannot stop global change. We cannot repeal the international economic competition that is everywhere. We can only harness the energy to our benefit. Now we must recognize that the only way for a wealthy nation to grow richer is to export, to simply find new customers for the products and services it makes. That, my fellow Americans, is the decision the Congress made when they voted to ratify NAFTA."
    },
    {
      "source": "Nelson Mandela, President of South Africa, Address to the United Nations General Assembly, 49th Session, 14th meeting, October 3, 1994 (UN doc. A/49/PV.14; UN General Debate Corpus).",
      "url": "https://github.com/MafiAtUN/osaa-unga-analysis/blob/main/artifacts/Session%2080%20-%202025/Session%2049%20-%201994/ZAF_49_1994.txt",
      "topic": "The end of apartheid & global human rights",
      "content": "It surely must be one of the great ironies of our age that this Assembly is being addressed, for the first time in its 49 years’ history, by a South African Head of State drawn from among the African majority of what is an African country. Future generations will find it strange in the extreme that it was only so late in the twentieth century that it was possible for our delegation to take its seat in the Assembly, recognized both by our people and by the nations of the world as the legitimate representative of the people of our country. It is indeed most welcome that the Organization will mark its fiftieth anniversary next year with the apartheid system vanquished and consigned to the past. That historic change has come about not least because of the great efforts in which the United Nations engaged to ensure the suppression of the apartheid crime against humanity. Even as it was still in the process of establishing its institutions, the United Nations was confronted by the challenge of the accession to power of the party of apartheid domination in our country. Everything that that system stood for represented the very opposite of all the noble purposes for which the Organization was established. Because apartheid reduced and undermined the credibility of the United Nations as an effective international instrument to end racism and secure the fundamental human rights of all peoples, the establishment and consolidation of apartheid constituted a brazen challenge to the very existence of the Organization."
    },
    {
      "source": "United Nations Millennium Declaration, Paragraphs 5, 11–12 (text of UN doc. A/RES/54/282; adopted by the General Assembly as resolution 55/2, September 8, 2000).",
      "url": "https://github.com/yuiseki/undocs/blob/main/en/pdfs/A/RES/54/282/resolution.txt",
      "topic": "Globalization, inequality & development",
      "content": "We believe that the central challenge we face today is to ensure that globalization becomes a positive force for all the world’s people. For while globalization offers great opportunities, at present its benefits are very unevenly shared, while its costs are unevenly distributed. We recognize that developing countries and countries with economies in transition face special difficulties in responding to this central challenge. Thus, only through broad and sustained efforts to create a shared future, based upon our common humanity in all its diversity, can globalization be made fully inclusive and equitable. These efforts must include policies and measures, at the global level, which correspond to the needs of developing countries and economies in transition and are formulated and implemented with their effective participation. … We will spare no effort to free our fellow men, women and children from the abject and dehumanizing conditions of extreme poverty, to which more than a billion of them are currently subjected. We are committed to making the right to development a reality for everyone and to freeing the entire human race from want. We resolve therefore to create an environment – at the national and global levels alike – which is conducive to development and to the elimination of poverty."
    },
    {
      "source": "George W. Bush, Remarks Proposing a Global Fund to Fight HIV/AIDS, Malaria and Tuberculosis, with Nigerian President Olusegun Obasanjo and UN Secretary-General Kofi Annan, Washington, D.C., May 11, 2001.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/may-11-2001-proposal-global-fund-fight-hivaids-malaria-and",
      "topic": "Global health & international cooperation",
      "content": "The devastation across the globe left by AIDS, malaria, tuberculosis, the sheer number of those infected and dying is almost beyond comprehension. Suffering on the African continent has been especially great. AIDS alone has left at least 11 million orphans in sub-Sahara Africa. In several African countries, as many as half of today's 15-year-olds could die of AIDS. In a part of the world where so many have suffered from war and want and famine, these latest tribulations are the cruelest of fates. … For our part, I am today committing the United States of America to support a new worldwide fund with a founding contribution of $200 million. This is in addition to the billions we spend on research and to the $760 million we're spending this year to help the international effort to fight AIDS. This $200 million will go exclusively to a global fund, with more to follow as we learn where our support can be most effective."
    },
    {
      "source": "George W. Bush, Speech on the Financial Markets and the World Economy, Federal Hall, New York, November 13, 2008, before the G-20 summit in Washington.",
      "url": "https://millercenter.org/the-presidency/presidential-speeches/november-13-2008-speech-financial-markets-and-world-economy",
      "topic": "The 2008 global financial crisis",
      "content": "Fourth, we must strengthen cooperation among the world's financial authorities. For example, leading nations should better coordinate national laws and regulations. We should also reform international financial institutions such as the IMF and the World Bank, which are based largely on the economic order of 1944. To better reflect the realities of today's global economy, both the IMF and World Bank should modernize their governance structures. … Just as important as maintaining free markets within countries is maintaining the free movement of goods and services between countries. When nations open their markets to trade and investment, their businesses and farmers and workers find new buyers for their products. Consumers benefit from more choices and better prices. Entrepreneurs can get their ideas off the ground with funding from anywhere in the world. Thanks in large part to open markets, the volume of global trade today is nearly 30 times greater than it was six decades ago — and some of the most dramatic gains have come in the developing world."
    }
  ]
};
