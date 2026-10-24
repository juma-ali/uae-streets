/* ============================================================
   UAE Streets — dataset
   ------------------------------------------------------------
   This is the only file you need to edit to add a street.
   Copy an entry, change the values, save, refresh the page.

   Field guide:
     id         kebab-case, unique (used for links & sharing)
     emirate    abu-dhabi | dubai | sharjah | ajman | uaq | ras-al-khaimah | fujairah
     category   person | place | word | tribe | event
     origin     documented  = named for a recorded person/event/landmark
                local       = a local explanation that is told but not recorded
     ar         the Arabic name, exactly as written on signs
     en         the English name as commonly used
     translit   optional pronunciation guide
     meaning    short gloss, { en, ar }
     story      2-3 sentences: who or what the name honours, { en, ar }
     refs       optional sources, [{ label, url }]
   ============================================================ */

window.STREETS = [
  /* ---------------- ABU DHABI ---------------- */
  {
    id: "sheikh-zayed-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ زايد بن سلطان",
    en: "Sheikh Zayed bin Sultan Street",
    translit: "Shāriʿ ash-Shaykh Zāyid bin Sulṭān",
    meaning: { en: "Abu Dhabi's ruler, and the UAE's first President", ar: "حاكم أبوظبي وأول رئيس للدولة" },
    story: {
      en: "Abu Dhabi's central street is named after Sheikh Zayed bin Sultan Al Nahyan (1918–2004), ruler of Abu Dhabi from 1966 and first President of the United Arab Emirates. It runs from the Corniche to the old souqs on the island of Abu Dhabi.",
      ar: "سُمّي هذا الشارع، وهو من شرايين أبوظبي المركزية، باسم الشيخ زايد بن سلطان آل نهيان (1918–2004)، حاكم أبوظبي منذ 1966 وأول رئيس للدولة. ويمرّ من الكورنيش إلى الأسواق القديمة في جزيرة أبوظبي."
    }
  },
  {
    id: "zayed-the-first-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع زايد الأول",
    en: "Zayed the First Street",
    translit: "Shāriʿ Zāyid al-Awwal",
    former: { en: "Electra Street", ar: "شارع الإلكترا" },
    meaning: { en: "The 19th-century ruler called Zayed the Great", ar: "حاكم القرن التاسع عشر الملقّب بزايد الكبير" },
    story: {
      en: "The street is named after Sheikh Zayed bin Khalifa Al Nahyan (1855–1909), known as Zayed the Great, who ruled Abu Dhabi from 1855 to 1909. He was the great-grandfather of Sheikh Zayed bin Sultan Al Nahyan.",
      ar: "سُمّي الشارع باسم الشيخ زايد بن خليفة آل نهيان (1855–1909)، المعروف بـ«زايد الكبير»، الذي حكم أبوظبي بين 1855 و1909، وهو الجدّ الأكبر للشيخ زايد بن سلطان آل نهيان."
    }
  },
  {
    id: "al-najda-street",
    emirate: "abu-dhabi",
    category: "place",
    origin: "account",
    ar: "شارع النجدة",
    en: "Al Najda Street",
    translit: "Shāriʿ an-Najda",
    now: { en: "Sheikha Fatima bint Mubarak Street", ar: "شارع الشيخة فاطمة بنت مبارك" },
    meaning: { en: "Rescue — after the civil defence station", ar: "الإنقاذ — نسبة إلى محطة النجدة" },
    story: {
      en: "The street is officially named Sheikha Fatima bint Mubarak Street, but generations of Abu Dhabi residents know it as Al Najda — from al-najda, 'rescue' — after the main fire and rescue station that stood on it. The passage of ambulances and fire engines made the name a familiar daily landmark, and the street is one of the capital's oldest commercial ones.",
      ar: "يُعرف الشارع رسمياً باسم شارع الشيخة فاطمة بنت مبارك، لكن أجيالاً من سكان أبوظبي تعرفه بـ«النجدة»، نسبة إلى محطة الإطفاء والإنقاذ الرئيسية التي كانت تقع فيه. وقد ارتبط الاسم في أذهان الناس بمرور سيارات الإسعاف والإطفاء، فصار علامة استدلالية يومية، وهو من أقدم شوارع العاصمة التجارية."
    }
  },
  {
    id: "muroor-road",
    emirate: "abu-dhabi",
    category: "word",
    origin: "documented",
    ar: "شارع المرور",
    en: "Muroor Road",
    translit: "Shāriʿ al-Murūr",
    now: { en: "Sultan Bin Zayed The First Street", ar: "شارع سلطان بن زايد الأول" },
    meaning: { en: "Traffic", ar: "المرور" },
    story: {
      en: "Muroor simply means 'traffic', and the road is named for the traffic police headquarters that has long stood on it. Abu Dhabi drivers navigate by destination rather than by geography: the traffic road, the airport road, the defence road.",
      ar: "«المرور» اسم على مسمّاه: فإدارة المرور والترخيص في أبوظبي تقع على هذا الشارع، حتى صار الناس يسمّون الطريق بوجهتهم لا بمعالمه — طريق المرور، وطريق المطار، وطريق الدفاع."
    }
  },
  {
    id: "electra-street",
    emirate: "abu-dhabi",
    category: "place",
    origin: "account",
    ar: "شارع الإلكترا",
    en: "Electra Street",
    translit: "Shāriʿ al-Electra",
    now: { en: "Zayed The First Street", ar: "شارع زايد الأول" },
    meaning: { en: "Named for the Electra electronics shop", ar: "نسبة إلى متجر إلكترا للإلكترونيات" },
    story: {
      en: "The street is named after Electra, an electronics shop that traded along it and became a familiar local landmark and the symbol of the area. Over the decades the street itself became known for its electrical and electronics shops and its telephone dealerships, which sold at modest prices — an association between the name and trade that residents still make.",
      ar: "سُمّي الشارع تيمّناً بمتجر «إلكترا» للإلكترونيات الذي كان يعمل على امتداد هذا الطريق، وصار معلماً محلياً مألوفاً ورمزاً للمنطقة. وعلى مدى العقود اشتهر الشارع بكثرة محال الأجهزة الكهربائية والإلكترونية ووكالات بيع الهواتف بأسعار اقتصادية، فارتبط اسمه بالتجارة والتقنية في ذاكرة السكان."
    }
  },
  {
    id: "corniche-road",
    emirate: "abu-dhabi",
    category: "word",
    origin: "documented",
    ar: "شارع الكورنيش",
    en: "Corniche Road",
    translit: "Shāriʿ al-Kurnīsh",
    meaning: { en: "The waterfront promenade", ar: "الممشى البحري" },
    story: {
      en: "Corniche is not an Arabic word: it reached the Gulf through French and Italian, where it describes a road running along a cliff or shore. Abu Dhabi's Corniche — now a long beachfront park — is the clearest example of a borrowed European word becoming ordinary UAE address vocabulary.",
      ar: "«الكورنيش» كلمة ليست عربية؛ وصلت إلى الخليج عبر الفرنسية والإيطالية، حيث تعني الطريق الممتد على حافة البحر أو الجرف. وكورنيش أبوظبي اليوم منتزه ساحلي طويل، وهو أوضح مثال على كلمة أوروبية صارت جزءاً من عناوين الإمارات."
    },
    refs: [{ label: "Corniche — word origin", url: "https://www.etymonline.com/word/corniche" }]
  },
  {
    id: "khalifa-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع خليفة",
    en: "Khalifa Street",
    translit: "Shāriʿ Khalīfa",
    meaning: { en: "The UAE's second President", ar: "الرئيس الثاني للدولة" },
    story: {
      en: "Named for Sheikh Khalifa bin Zayed Al Nahyan (1948–2022), second President of the UAE and ruler of Abu Dhabi. Before the presidency he held the emirate's oil and public-works portfolios. The street crosses the downtown area.",
      ar: "سُمّي تيمّناً بالشيخ خليفة بن زايد آل نهيان (1948–2022)، الرئيس الثاني للدولة وحاكم أبوظبي. وقبل الرئاسة تولّى قطاعي النفط والأشغال في الإمارة، ويمرّ الشارع في وسط المدينة."
    }
  },

  /* ---------------- DUBAI ---------------- */
  {
    id: "sheikh-zayed-road",
    emirate: "dubai",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ زايد",
    en: "Sheikh Zayed Road",
    translit: "Shāriʿ ash-Shaykh Zāyid",
    meaning: { en: "The founding father, the UAE's first President", ar: "المؤسس وأول رئيس للدولة" },
    story: {
      en: "Dubai's spine and the longest road in the UAE, E11 is named after Sheikh Zayed bin Sultan Al Nahyan, first President of the UAE and ruler of Abu Dhabi. It was built through the desert in the 1970s and now runs through Dubai's skyscraper corridor.",
      ar: "يُعدّ شارع الشيخ زايد (E11) أطول طرق الإمارات وعمود دبي الفقري، وقد سُمّي تيمّناً بالشيخ زايد بن سلطان آل نهيان، أول رئيس للدولة وحاكم أبوظبي. وشُقّ عبر الصحراء في سبعينيات القرن الماضي، ويمرّ اليوم بين أبراج دبي."
    },
    refs: [{ label: "Khaleej Times — when the road had more camels than cars", url: "https://www.khaleejtimes.com/uae/rewind-50-years-when-dubais-sheikh-zayed-road-had-more-camels-than-cars" }]
  },
  {
    
    route: "D 92",
    refs: [
      { label: "D 92 — Wikipedia, Dubai (Road section)", url: "https://en.wikipedia.org/wiki/Dubai#Road" }
    ],id: "al-wasl-road",
    emirate: "dubai",
    category: "word",
    origin: "account",
    ar: "شارع الوصل",
    en: "Al Wasl Road",
    translit: "Shāriʿ al-Waṣl",
    meaning: { en: "Connection, joining", ar: "الوصل: ربط شيء بشيء" },
    story: {
      en: "Wasl is the Arabic word for joining what was separate, and the road is named for the link it made between Jumeirah and the coast on one side and the Creek and Deira on the other.",
      ar: "«الوصل» في العربية ربط ما انفصل، ويحمل الشارع اسمه لأنه ربط جميرا والساحل من جهة بالخور وديرة من جهة أخرى."
    }
  },
  {
    
    route: "D 94",
    refs: [
      { label: "D 94 — Wikipedia, Dubai (Road section)", url: "https://en.wikipedia.org/wiki/Dubai#Road" },
      { label: "Jumeirah Archaeological Site — Wikipedia", url: "https://en.wikipedia.org/wiki/Jumeirah" }
    ],id: "jumeirah-road",
    emirate: "dubai",
    category: "place",
    origin: "documented",
    ar: "شارع جميرا",
    en: "Jumeirah Road",
    translit: "Shāriʿ Jumayrā",
    meaning: { en: "Named after the Jumeirah area", ar: "نسبة إلى منطقة جميرا" },
    story: {
      en: "The street carries the name of the Jumeirah area, where settlement dates back to the 9th to 11th centuries. The Jumeirah Archaeological Site was a major trading station linking Iraq and Oman during the Abbasid Caliphate. For generations the road has marked the life of Dubai's people along the Gulf coast, and it is bound up with the memory of the founding generation.",
      ar: "يحمل الشارع اسم منطقة جميرا، التي يعود الاستيطان فيها إلى القرنين التاسع والحادي عشر الميلاديين. وكان موقع جميرا الأثري محطة تجارية رئيسية تربط بين العراق وعُمان في زمن الخلافة العباسية. وظلّ الشارع على مدى أجيال شاهداً على حياة أهل دبي على ساحل الخليج العربي، ومرتبطاً بذاكرة جيل المؤسسين."
    }
  },
  {
    id: "baniyas-road",
    emirate: "dubai",
    category: "tribe",
    origin: "documented",
    ar: "شارع بني ياس",
    en: "Baniyas Road",
    translit: "Shāriʿ Banī Yās",
    meaning: { en: "The road of the Bani Yas", ar: "طريق قبيلة بني ياس" },
    story: {
      en: "Bani Yas is the tribe from which both the Al Maktoum and Al Nahyan families descend, and whose members settled the coast between Abu Dhabi and Dubai. The road along Deira's Creek side carries the tribe's name — a reminder that the two biggest cities share one tribal root.",
      ar: "بني ياس هي القبيلة التي تنتسب إليها أسرتا آل مكتوم وآل نهيان، والتي استوطنت الساحل بين أبوظبي ودبي. ويحمل الشارع الممتد على جانب خور ديرة اسم القبيلة، تذكيراً بأن أكبر مدينتين تشتركان في جذر قبلي واحد."
    }
  },
  {
    id: "al-maktoum-road",
    emirate: "dubai",
    category: "person",
    origin: "documented",
    ar: "شارع آل مكتوم",
    en: "Al Maktoum Road",
    translit: "Shāriʿ Āl Maktūm",
    meaning: { en: "Dubai's ruling family", ar: "أسرة دبي الحاكمة" },
    story: {
      en: "Named for the Al Maktoum family, rulers of Dubai since 1833. The street is named after the ruling family rather than an individual; the 'Al' in the name marks the house.",
      ar: "سُمّي باسم آل مكتوم، حكّام دبي منذ 1833. سُمّي الشارع باسم الأسرة الحاكمة لا باسم فرد، و«آل» في الاسم تدلّ على البيت."
    }
  },
  {
    id: "al-ittihad-road",
    emirate: "dubai",
    category: "event",
    origin: "documented",
    ar: "شارع الاتحاد",
    en: "Al Ittihad Road",
    translit: "Shāriʿ al-Ittiḥād",
    meaning: { en: "Union", ar: "الاتحاد" },
    story: {
      en: "Ittihad means union, and this road — the main artery between Dubai and Sharjah — is named for the 1971 federation that joined the seven emirates. That is also why you will find an Ittihad street in more than one emirate: the word belongs to all of them.",
      ar: "«الاتحاد» هو اتحاد الإمارات السبع عام 1971، وهذا الشارع — الشريان الرئيسي بين دبي والشارقة — يحمل ذكرى ذلك الاتحاد. ولهذا تجد شارع «الاتحاد» في أكثر من إمارة: الكلمة ملك للجميع."
    }
  },
  {
    id: "second-december-street",
    emirate: "dubai",
    category: "event",
    origin: "documented",
    ar: "شارع الثاني من ديسمبر",
    en: "2nd December Street",
    translit: "Shāriʿ ath-Thānī min Dīsambar",
    meaning: { en: "The second of December", ar: "الثاني من ديسمبر" },
    story: {
      en: "The date is the UAE's National Day: 2 December 1971, when the federation was proclaimed. The street had long been known as Al Dhiyafa — 'hospitality' — Road; the renaming turned an ordinary address into a civic anniversary, and older taxi drivers still use both names.",
      ar: "التاريخ هو العيد الوطني: الثاني من ديسمبر 1971، يوم إعلان الاتحاد. وكان الشارع يُعرف قبلاً بشارع «الضيافة»، فحوّل تغيير الاسم عنواناً عادياً إلى ذكرى وطنية، وما زال سائقو التاكسي الأقدمون يستخدمون الاسمين."
    }
  },
  {
    id: "al-rigga-road",
    emirate: "dubai",
    category: "word",
    origin: "account",
    ar: "شارع الرقة",
    en: "Al Rigga Road",
    translit: "Shāriʿ ar-Riqqa",
    meaning: { en: "Raised ground where water recedes", ar: "أرض مرتفعة ينحسر عنها الماء" },
    story: {
      en: "The street is named after the Al Rigga area. In Arabic, and in the local dialect, al-riqqa describes raised ground — or land that water drains away from, leaving its hard white surface exposed. The area was in the past a place the people of Dubai frequented.",
      ar: "سُمّي الشارع بهذا الاسم نسبة إلى منطقة الرقة. والرقة في العربية وفي اللهجة المحلية تشير إلى الأرض المرتفعة، أو المكان الذي ينحسر عنه الماء فتظهر أرضه البيضاء الصلبة. وكانت المنطقة قديماً مكاناً يرتاده أهالي دبي."
    }
  },
  {
    
    route: "E 66",
    refs: [
      { label: "E 66 — Wikipedia, Dubai (Road section)", url: "https://en.wikipedia.org/wiki/Dubai#Road" },
      { label: "مؤسسة الموروث للدراسات الإماراتية — @almawrooth", url: "https://www.instagram.com/almawrooth/" }
    ],id: "oud-metha-road",
    emirate: "dubai",
    category: "person",
    origin: "documented",
    ar: "شارع عود ميثا",
    en: "Oud Metha Road",
    translit: "Shāriʿ ʿŪd Maythā",
    meaning: { en: "The oud — the trunk of a ghaf tree", ar: "العود: جذع شجرة الغاف" },
    story: {
      en: "Oud Maitha carries the name of Sheikha Maitha bint Obaid Al Falasi, mother of Sheikh Saeed bin Maktoum, ruler of Dubai from 1912 to 1958. She spent the winter in Umm Hurair, and her home stood beside a large ghaf tree — an oud is the trunk of a ghaf that has risen and spread — which took her name. Sheikh Saeed was born in its shade around 1879, in the reign of his grandfather Sheikh Hasher bin Maktoum. The land around her house is still known as Fareej Maitha bint Obaid, and the mooring opposite it on the Creek as Mishra' Maitha.",
      ar: "يحمل عود ميثاء اسم الشيخة ميثاء بنت عبيد الفلاسي، والدة الشيخ سعيد بن مكتوم حاكم دبي (1912–1958). كانت تقضي الشتاء في أم هرير، وكان مسكنها بجانب شجرة غاف كبيرة حملت اسمها، فالعود جذع الغاف إذا ارتفع وتفرّعت أغصانه. وُلد الشيخ سعيد في ظلالها عام 1879 تقريباً، في عهد جدّه الشيخ حشر بن مكتوم. ولا يزال المكان حول مسكنها يُعرف بفريج ميثاء بنت عبيد، ويقابله على الخور «مِشرَع ميثاء» لوقوف القوارب."
    }
  },
  {
    id: "sheikh-mohammed-bin-zayed-road",
    emirate: "dubai",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ محمد بن زايد",
    en: "Sheikh Mohammed bin Zayed Road",
    translit: "Shāriʿ ash-Shaykh Muḥammad bin Zāyid",
    meaning: { en: "President of the UAE since 2022", ar: "رئيس الدولة منذ 2022" },
    story: {
      en: "E311 is named after Sheikh Mohammed bin Zayed Al Nahyan, President of the United Arab Emirates since 2022; before that he was Crown Prince of Abu Dhabi and Supreme Commander of the Armed Forces. The road was previously named Emirates Road.",
      ar: "سُمّي الطريق E311 باسم الشيخ محمد بن زايد آل نهيان، رئيس الدولة منذ 2022، وكان قبل ذلك ولياً لعهد أبوظبي والقائد الأعلى للقوات المسلحة. وكان اسمه السابق «طريق الإمارات»."
    }
  },

  /* ---------------- SHARJAH ---------------- */
  {
    id: "king-faisal-street",
    emirate: "sharjah",
    category: "person",
    origin: "documented",
    ar: "شارع الملك فيصل",
    en: "King Faisal Street",
    translit: "Shāriʿ al-Malik Fayṣal",
    meaning: { en: "King of Saudi Arabia, 1964–1975", ar: "ملك السعودية بين 1964 و1975" },
    story: {
      en: "Sharjah's central street is named for King Faisal bin Abdulaziz of Saudi Arabia, who reigned from 1964 to 1975.",
      ar: "الشارع المركزي في الشارقة يحمل اسم الملك فيصل بن عبدالعزيز آل سعود، ملك المملكة العربية السعودية بين 1964 و1975."
    }
  },
  {
    id: "al-wahda-street",
    emirate: "sharjah",
    category: "word",
    origin: "documented",
    ar: "شارع الوحدة",
    en: "Al Wahda Street",
    translit: "Shāriʿ al-Waḥda",
    meaning: { en: "Unity", ar: "الوحدة" },
    story: {
      en: "Wahda means unity — one of the words the young federation leaned on hardest. Sharjah's Al Wahda Street is one of its busiest, crossing the city from the creek side toward the industrial districts, lined with businesses that arrived as the emirate grew.",
      ar: "«الوحدة» من الكلمات التي استندت إليها الدولة الفتية كثيراً. وشارع الوحدة من أنشط شوارع الشارقة، يقطع المدينة من جهة الخور نحو الأحياء الصناعية، وتصطفّ على جانبيه أعمال نمت مع نمو الإمارة."
    }
  },
  {
    id: "buhairah-corniche",
    emirate: "sharjah",
    category: "place",
    origin: "documented",
    ar: "شارع البحيرة",
    en: "Buhairah Corniche",
    translit: "Shāriʿ al-Buḥayra",
    meaning: { en: "The little lake / lagoon", ar: "البحيرة (تصغير البحر)" },
    story: {
      en: "Buhairah is the diminutive of bahr, 'sea' — so, a little sea: the lagoon around which Sharjah's heart was built. The corniche that rings it is where the city takes its evening walk, and the name shows how Arabic builds places with a single grammatical gesture.",
      ar: "«البحيرة» تصغير «البحر»، أي البحر الصغير: الخور الذي بُني حوله قلب الشارقة. والكورنيش الذي يطوّقها هو ممشى المدينة في المساء، والاسم يبيّن كيف تبني العربية أسماء الأماكن بحركة صرفية واحدة."
    }
  },
  {
    id: "maliha-road",
    emirate: "sharjah",
    category: "place",
    origin: "documented",
    ar: "شارع مليحة",
    en: "Maliha Road",
    translit: "Shāriʿ Malīḥa",
    meaning: { en: "The Mleiha road", ar: "طريق مليحة" },
    story: {
      en: "The road runs east toward Mleiha, the archaeological site where tombs and a fortress record trade with Mesopotamia, Yemen and the Mediterranean thousands of years ago. A modern street name that leads straight into the country's deep past.",
      ar: "يمتدّ الطريق شرقاً نحو مليحة الأثرية، حيث تسجّل المقابر والحصن صلات تجارية مع بلاد الرافدين واليمن وحوض المتوسط قبل آلاف السنين. اسم شارع حديث يقود إلى عمق تاريخ البلاد."
    }
  },

  /* ---------------- AJMAN ---------------- */
  {
    id: "sheikh-rashid-bin-humaid-street",
    emirate: "ajman",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ راشد بن حميد النعيمي",
    en: "Sheikh Rashid bin Humaid Al Nuaimi Street",
    translit: "Shāriʿ ash-Shaykh Rāshid bin Ḥumayd an-Nuʿaymī",
    meaning: { en: "Ruler of Ajman, 1928–1981", ar: "حاكم عجمان بين 1928 و1981" },
    story: {
      en: "Ajman's main street is named after Sheikh Rashid bin Humaid Al Nuaimi, who ruled the emirate from 1928 to 1981. The Al Nuaimi family has ruled Ajman since the 19th century.",
      ar: "أكبر شوارع عجمان يحمل اسم الشيخ راشد بن حميد النعيمي الذي حكم الإمارة بين 1928 و1981. وآل النعيمي يحكمون عجمان منذ القرن التاسع عشر."
    }
  },
  {
    id: "sheikh-ammar-bin-humaid-street",
    emirate: "ajman",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ عمار بن حميد",
    en: "Sheikh Ammar bin Humaid Street",
    translit: "Shāriʿ ash-Shaykh ʿAmmār bin Ḥumayd",
    meaning: { en: "Crown Prince of Ajman", ar: "ولي عهد عجمان" },
    story: {
      en: "The street is named after Sheikh Ammar bin Humaid Al Nuaimi, Crown Prince of Ajman, of the same ruling family as the street above.",
      ar: "سُمّي الشارع باسم الشيخ عمار بن حميد النعيمي، ولي عهد عجمان، من الأسرة الحاكمة نفسها."
    }
  },

  /* ---------------- RAS AL KHAIMAH ---------------- */
  {
    id: "sheikh-mohammed-bin-salem-street",
    emirate: "ras-al-khaimah",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ محمد بن سالم",
    en: "Sheikh Mohammed bin Salem Street",
    translit: "Shāriʿ ash-Shaykh Muḥammad bin Sālim",
    meaning: { en: "Ruler of Ras Al Khaimah in the early 1900s", ar: "حاكم رأس الخيمة مطلع القرن العشرين" },
    story: {
      en: "Ras Al Khaimah's main artery, part of the E11, is named after Sheikh Mohammed bin Salem Al Qasimi, who ruled the emirate in the early 20th century. In 2025 its speed limit was set at 80 km/h.",
      ar: "شريان رأس الخيمة الرئيسي، وهو جزء من الطريق E11، يحمل اسم الشيخ محمد بن سالم القاسمي الذي حكم الإمارة مطلع القرن العشرين. وفي 2025 حُدّدت سرعة الطريق بـ80 كم/س."
    },
    refs: [{ label: "Gulf Today — RAK speed limit reduced", url: "https://www.gulftoday.ae/news/2025/01/13/raks-road-speed-reduced-to-80-kmh-on-sheikh-mohammed-bin-salem-street-e11" }]
  },
  {
    id: "al-rams-road",
    emirate: "ras-al-khaimah",
    category: "place",
    origin: "documented",
    ar: "شارع الرمس",
    en: "Al Rams Road",
    translit: "Shāriʿ ar-Rams",
    meaning: { en: "The Al Rams road", ar: "طريق بلدة الرمس" },
    story: {
      en: "Al Rams is a fishing town north of Ras Al Khaimah city, long known for building wooden boats. The road that carries its name runs up the coast between mangroves and the foothills of the Hajar Mountains — geography as address.",
      ar: "«الرمس» بلدة صيد شمال مدينة رأس الخيمة، مشهورة بصناعة القوارب الخشبية. والطريق الذي يحمل اسمها يمتدّ على الساحل بين أشجار القرم وسفوح جبال الحجر — الجغرافيا تصبح عنواناً."
    }
  },

  /* ---------------- UMM AL QUWAIN ---------------- */
  {
    id: "sheikh-rashid-bin-ahmad-al-mualla-street",
    emirate: "uaq",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ راشد بن أحمد المعلا",
    en: "Sheikh Rashid bin Ahmad Al Mualla Street",
    translit: "Shāriʿ ash-Shaykh Rāshid bin Aḥmad al-Muʿallā",
    meaning: { en: "Ruler of Umm Al Quwain, 1981–2009", ar: "حاكم أم القيوين بين 1981 و2009" },
    story: {
      en: "Umm Al Quwain is the smallest emirate, and its principal street is named for Sheikh Rashid bin Ahmad Al Mualla, who ruled from 1981 to 2009. The Al Mualla family has governed the emirate since the 18th century, and the ruler's palace stands by the creek the town grew around.",
      ar: "أم القيوين أصغر الإمارات، وشارعها الرئيسي يحمل اسم الشيخ راشد بن أحمد المعلا الذي حكم بين 1981 و2009. وآل المعلا يحكمون الإمارة منذ القرن الثامن عشر، وقصر الحاكم يطلّ على الخور الذي نشأت حوله البلدة."
    }
  },

  /* ---------------- FUJAIRAH ---------------- */
  {
    id: "sheikh-hamad-bin-abdullah-street",
    emirate: "fujairah",
    category: "person",
    origin: "documented",
    ar: "شارع الشيخ حمد بن عبدالله الشرقي",
    en: "Sheikh Hamad bin Abdullah Al Sharqi Street",
    translit: "Shāriʿ ash-Shaykh Ḥamad bin ʿAbdullāh ash-Sharqī",
    meaning: { en: "Ruler of Fujairah, 1938–1974", ar: "حاكم الفجيرة بين 1938 و1974" },
    story: {
      en: "Fujairah's main street is named after Sheikh Hamad bin Abdullah Al Sharqi, who ruled from 1938 to 1974. The Al Sharqi family has ruled Fujairah since the 19th century, and the street runs through the town that grew between the mountains and the Gulf of Oman.",
      ar: "الشارع الرئيسي في الفجيرة يحمل اسم الشيخ حمد بن عبدالله الشرقي الذي حكم بين 1938 و1974. وآل الشرقي يحكمون الفجيرة منذ القرن التاسع عشر، ويمرّ الشارع في البلدة التي نمت بين الجبال وخليج عُمان."
    }
  }
,
  {
    id: "al-istiqlal-street",
    emirate: "abu-dhabi",
    category: "event",
    origin: "documented",
    ar: "شارع الاستقلال",
    en: "Al Istiqlal Street",
    translit: "Shāriʿ al-Istiqlāl",
    meaning: { en: "Independence", ar: "الاستقلال" },
    story: {
      en: "Istiqlal is the Arabic word for independence. The UAE's treaty arrangements with Britain ended in December 1971 and the federation was proclaimed on 2 December that year; streets carrying the word mark that moment. This one runs in Bani Yas, on the mainland west of Abu Dhabi city.",
      ar: "«الاستقلال» كلمة تحمل تاريخ الدولة: انتهت الترتيبات المعاهدية مع بريطانيا في ديسمبر 1971، وأُعلن الاتحاد في الثاني من ديسمبر من العام نفسه، فحملت شوارع الاسم ذكرى تلك اللحظة. وهذا الشارع في بني ياس، غرب مدينة أبوظبي."
    },
    refs: [{ label: "United Arab Emirates — Wikipedia", url: "https://en.wikipedia.org/wiki/United_Arab_Emirates" }]
  },
  {
    id: "al-ihtifal-street",
    emirate: "abu-dhabi",
    category: "event",
    origin: "documented",
    ar: "شارع الاحتفال",
    en: "Al Ihtifal Street",
    translit: "Shāriʿ al-Iḥtifāl",
    meaning: { en: "Celebration", ar: "الاحتفال" },
    story: {
      en: "Ihtifal means celebration. The name belongs to the vocabulary of the newer residential districts, where streets carry ideas rather than people or places. This one lies in Al Sarouj, in Al Ain.",
      ar: "«الاحتفال» من مفردات تسمية الأحياء الحديثة، حيث تحمل الشوارع معاني مجرّدة بدل أسماء الأشخاص والأماكن. ويقع هذا الشارع في الساروج بالعين."
    },
    refs: []
  },
  {
    id: "al-ihtifalat-street",
    emirate: "abu-dhabi",
    category: "event",
    origin: "documented",
    ar: "شارع الاحتفالات",
    en: "Al Ihtifalat Street",
    translit: "Shāriʿ al-Iḥtifālāt",
    meaning: { en: "Celebrations", ar: "الاحتفالات" },
    story: {
      en: "Ihtifalat is the plural — celebrations. It sits in Khalifa City, Abu Dhabi, among streets named for concepts rather than individuals.",
      ar: "«الاحتفالات» جمع الاحتفال، ويقع الشارع في مدينة خليفة بأبوظبي، بين شوارع سُمّيت بمعانٍ مجرّدة لا بأسماء أفراد."
    },
    refs: []
  },
  {
    id: "al-mihrajan-street",
    emirate: "abu-dhabi",
    category: "event",
    origin: "documented",
    ar: "شارع المهرجان",
    en: "Al Mihrajan Street",
    translit: "Shāriʿ al-Mihrajān",
    meaning: { en: "Festival", ar: "المهرجان" },
    story: {
      en: "Mihrajan means festival. In Al Jimi, Al Ain, it takes its place among the word-named streets of the newer districts.",
      ar: "«المهرجان» اسم معروف، ويقع الشارع في الجيمي بالعين، بين شوارع الأحياء الحديثة التي سُمّيت بالمعاني."
    },
    refs: []
  },
  {
    id: "expo-road",
    emirate: "dubai",
    category: "event",
    origin: "documented",
    ar: "شارع إكسبو",
    en: "Expo Road",
    translit: "Shāriʿ Eksbū",
    meaning: { en: "Named for Expo 2020 Dubai", ar: "نسبة إلى إكسبو 2020 دبي" },
    story: {
      en: "Named for Expo 2020 Dubai, the world exposition hosted from October 2021 to March 2022. Its site lies south-west of the city near Jebel Ali, and this trunk road serves it.",
      ar: "سُمّي باسم إكسبو 2020 دبي، المعرض العالمي الذي استضافته المدينة بين أكتوبر 2021 ومارس 2022. ويقع موقعه جنوب غرب المدينة قرب جبل علي، ويخدمه هذا الطريق الرئيسي."
    },
    refs: [{ label: "Expo 2020 — Wikipedia", url: "https://en.wikipedia.org/wiki/Expo_2020" }]
  },
  {
    id: "expo-village-boulevard",
    emirate: "dubai",
    category: "event",
    origin: "documented",
    ar: "جادة إكسبو فيليج",
    en: "Expo Village Boulevard",
    translit: "Jādat Eksbū Fīlīj",
    meaning: { en: "The boulevard through Expo Village", ar: "جادة قرية إكسبو" },
    story: {
      en: "The boulevard through Expo Village, the residential quarter built to house people working at Expo 2020 Dubai.",
      ar: "جادة تمرّ في «قرية إكسبو»، الحي السكني الذي بُني لإسكان العاملين في إكسبو 2020 دبي."
    },
    refs: [{ label: "Expo 2020 — Wikipedia", url: "https://en.wikipedia.org/wiki/Expo_2020" }]
  },
  {
    id: "festival-boulevard",
    emirate: "dubai",
    category: "event",
    origin: "documented",
    ar: "جادة المهرجان",
    en: "Festival Boulevard",
    translit: "Jādat al-Mahrajān",
    meaning: { en: "Named for the Dubai Shopping Festival", ar: "نسبة إلى مهرجان دبي للتسوق" },
    story: {
      en: "Named for the Dubai Shopping Festival, the city's annual retail festival, first held in 1996. The boulevard runs through Dubai Festival City.",
      ar: "سُمّيت باسم مهرجان دبي للتسوق، المهرجان السنوي الذي انطلق عام 1996، وتمرّ الجادة في دبي فستيفال سيتي."
    },
    refs: [{ label: "Dubai Shopping Festival — Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai_Shopping_Festival" }]
  },
  {
    id: "adh-dhikrayat-street",
    emirate: "abu-dhabi",
    category: "event",
    origin: "documented",
    ar: "شارع الذكريات",
    en: "Adh Dhikrayat Street",
    translit: "Shāriʿ adh-Dhikrayāt",
    meaning: { en: "Memories", ar: "الذكريات" },
    story: {
      en: "Dhikrayat is the plural of dhikra — a memory, a remembrance. The street lies in Khalifa City, among streets named for ideas rather than people or places.",
      ar: "«الذكريات» جمع «ذِكرى»، أي التذكّر. ويقع الشارع في مدينة خليفة، بين شوارع سُمّيت بالمعاني لا بالأشخاص أو الأماكن."
    },
    refs: []
  },
  {
    id: "amr-bin-al-as-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع عمرو بن العاص",
    en: "'Amr Bin Al 'As Street",
    translit: "Shāriʿ ʿAmr ibn al-ʿĀṣ",
    meaning: { en: "A Companion and commander, founder of Fustat", ar: "صحابي وقائد، ومؤسس الفسطاط" },
    story: {
      en: "‘Amr ibn al-‘As (d. 43 AH / 664 CE) was a Companion of the Prophet and the commander whose forces entered Egypt in 18 AH. He founded Fustat and governed Egypt over long periods. The name is carried by streets in Abu Dhabi, Ajman, Sharjah and Umm Al Quwain.",
      ar: "عمرو بن العاص (ت ٤٣هـ/٦٦٤م) صحابي وقائد، دخلت قواته مصر سنة ١٨هـ، وأسّس مدينة الفسطاط، وولي مصر مرات. ويحمل اسمه شوارع في أبوظبي وعجمان والشارقة وأم القيوين."
    },
    refs: [
      { label: "Wikipedia — Amr ibn al-As", url: "https://ar.wikipedia.org/wiki/عمرو_بن_العاص" }
    ]
  },
  {
    id: "aban-bin-uthman-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع أبان بن عُثمان",
    en: "Aban Bin 'Uthman Street",
    translit: "Shāriʿ Abān bin ʿUthmān",
    meaning: { en: "A jurist and traditionist of Medina, son of the third caliph", ar: "تابعي وفقيه ومحدّث من أهل المدينة، وابن الخليفة عثمان" },
    story: {
      en: "Aban ibn 'Uthman ibn 'Affan (d. 105 AH / 723 CE) was a Tabi'i, a jurist and a traditionist, and governor of Medina for about seven years. He is named among the earliest to write down the Prophet's campaigns (maghazi), though most accounts place 'Urwa ibn al-Zubayr before him.",
      ar: "أبان بن عثمان بن عفان (ت ١٠٥هـ/٧٢٣م) تابعي وفقيه ومحدّث، ولي المدينة المنورة نحو سبع سنين. ويُذكر في أوائل من كتبوا المغازي، وإن كان أكثر الروايات يقدّم عروة بن الزبير عليه."
    },
    refs: [
      { label: "الموسوعة العربية — أبان بن عثمان", url: "https://arab-ency.com.sy/details/1456" }
    ]
  },
  {
    id: "abdulhadi-bin-daen-al-hameli-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع عبدالهادي بن ضاعن الهاملي",
    en: "Abdulhadi Bin Daen Al Hameli Street",
    translit: "Shāriʿ ʿAbd al-Hādī bin Ḍāʿin al-Hāmlī",
    meaning: { en: "A poet of Al Dhafra, known for the taghrooda", ar: "شاعر من الظفرة اشتهر بفنّ التغرودة" },
    story: {
      en: "Abdulhadi bin Daen Al Hameli (c. 1850 — early 20th century) was one of the poets of Al Dhafra known for the taghrooda, the Bedouin sung poem. He spent the hot season at Madhhar Al Sabkha in Liwa, and in winter took his family and camels to Batanat Liwa, to a water source called Bad' Hilees that he owned, about four kilometres east of Al 'Asab. He was a contemporary and friend of the poets Sa'id bin 'Utaij Al Hameli and Salem bin Mahsh Al Hameli.",
      ar: "عبدالهادي بن ضاعن الهاملي (نحو ١٨٥٠م — أوائل القرن العشرين) أحد شعراء الظفرة الذين اشتهروا بفنّ التغرودة. كان يقيم في القيظ في محضر الصبخة في ليوا، وفي الشتاء يذهب بأهله وإبله إلى بطانة ليوا عند مورد ماء يُسمّى «بدع حليس» يملكه، ويقع شرق العصب بنحو أربعة كيلومترات. وكان معاصراً وصديقاً للشاعرين سعيد بن عتيج الهاملي وسالم بن محش الهاملي."
    },
    refs: [
      { label: "شعراء الظفرة — عبد الهادي بن ضاعن الهاملي", url: "http://shuaraaldhafrh.blogspot.com/2012/04/blog-post_15.html" }
    ]
  },
  {
    id: "abdulhadi-bin-shaaban-al-mansouri-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "account",
    ar: "شارع عبدالهادي بن شعبان المنصوري",
    en: "Abdulhadi Bin Shaaban Al Mansouri Street",
    translit: "Shāriʿ ʿAbd al-Hādī bin Shaʿbān al-Manṣūrī",
    meaning: { en: "A Nabati poet of Liwa", ar: "شاعر نبطي من ليوا" },
    story: {
      en: "Abdulhadi bin Shaaban Al Matyou'i Al Mansouri, known as Abdulhadi bin Shaaban Al Shatheeb, was an Emirati Nabati poet, counted among the mukhadramin — the poets who span two eras. He was born in the early nineteenth century in Liwa, in the Al Dhafra region of Abu Dhabi.",
      ar: "عبدالهادي بن شعبان المطيوعي المنصوري، المعروف بعبدالهادي بن شعبان آل شظيب، شاعر إماراتي بارز من شعراء النبط المخضرمين، وُلد في أوائل القرن التاسع عشر في منطقة ليوا بإمارة أبوظبي."
    },
    refs: []
  },
  {
    id: "abdullah-bin-qais-street",
    emirate: "sharjah",
    category: "person",
    origin: "documented",
    ar: "شارع عبدالله بن قيس",
    en: "Abdullah Bin Qais Street",
    translit: "Shāriʿ ʿAbd Allāh bin Qays",
    meaning: { en: "Admiral of the first fleet the Muslims equipped", ar: "أمير أول أسطول بحري جهّزه المسلمون" },
    story: {
      en: "Abdullah ibn Qais al-Kindi, known as Abu Bahriyya, was an admiral in early Islam. At Caliph Uthman's instruction, Mu'awiya appointed him to command the first fleet the Muslims equipped, which sailed against Cyprus in 28 AH. There he met Abdullah ibn Sa'd ibn Abi Sarh, arriving from Egypt, and the island's people agreed a tribute of 7,000 dinars a year. He is said to have raided fifty times by land and sea without a reverse, and was killed by the Byzantines in 53 or 54 AH.",
      ar: "عبد الله بن قيس الكِنديّ، المعروف بأبي بَحريّة، أمير بحر في صدر الإسلام. ولّاه معاوية بن أبي سفيان قيادة أول أسطول جهّزه المسلمون، فغزا قبرص سنة ٢٨هـ، والتقى فيها عبد الله بن سعد بن أبي سرح قادماً من مصر، وصالح أهلها على جزية سبعة آلاف دينار في السنة. ويُذكر أنه غزا خمسين غزوة برّاً وبحراً، وقتله الروم سنة ٥٣هـ."
    },
    refs: [
      { label: "Wikipedia — عبد الله بن قيس الحارثي", url: "https://ar.wikipedia.org/wiki/عبد_الله_بن_قيس_الحارثي" }
    ]
  },
  {
    id: "abdulla-khalifa-al-nuaimi-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "account",
    ar: "شارع عبدالله خليفة النعيمي",
    en: "Abdulla Khalifa Al Nuaimi Street",
    translit: "Shāriʿ ʿAbd Allāh Khalīfa an-Nuʿaymī",
    meaning: { en: "An Emirati engineer, one of the heroes of the Armed Forces", ar: "مهندس إماراتي من أبطال القوات المسلحة" },
    story: {
      en: "Abdullah Khalifa Al Nuaimi was an Emirati engineer and a member of the UAE Armed Forces, remembered as a martyr. The street carries his name.",
      ar: "عبدالله خليفة النعيمي مهندس إماراتي وأحد أبطال القوات المسلحة البواسل، استُشهد في سبيل الوطن. ويحمل الشارع اسمه."
    },
    refs: []
  },
  {
    id: "abdullah-almasoud-al-muhairbi-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع عبدالله المسعود المحيربي",
    en: "Abdullah Almasoud Al Muhairbi Street",
    translit: "Shāriʿ ʿAbd Allāh al-Masʿūd al-Muḥayribī",
    meaning: { en: "A founder of Al Masoud Group and president of Abu Dhabi's Consultative Council", ar: "من مؤسسي مجموعة المسعود ورئيس المجلس الاستشاري الوطني بأبوظبي" },
    story: {
      en: "Abdullah bin Mohammed Al Masoud Al Muhairbi (mid-1940s — February 2019) was an Abu Dhabi businessman from a family of pearl traders. With his brothers he founded Al Masoud Group, the first company registered with the Abu Dhabi Chamber of Commerce — his brother Ahmed was the Chamber's first president. In 1970 the group partnered with John Brown Engineering to install the first gas-turbine generator in Abu Dhabi and the Middle East, and with Weir Westgarth to build the UAE's first desalination plant. He sat on the National Consultative Council from its first term and presided over it from 1994. He received the President's Award in 2011, the Khalifa International Award for Date Palm in the same year for introducing the Majdool variety, and the Abu Dhabi Award in 2014.",
      ar: "عبدالله بن محمد المسعود المحيربي (منتصف الأربعينيات — فبراير ٢٠١٩) رجل أعمال من أبوظبي، من أسرة عملت في تجارة اللؤلؤ. أسّس مع إخوته مجموعة المسعود، وهي أول شركة تُسجَّل في غرفة تجارة وصناعة أبوظبي، وكان أخوه أحمد أول رئيس للغرفة. وفي عام ١٩٧٠ دخلت المجموعة في شراكة لتركيب أول مولد كهربائي للتوربينات الغازية في أبوظبي والشرق الأوسط، ثم لإنشاء أول محطة لتحلية المياه في الدولة. وعضوية المجلس الاستشاري الوطني من فصله التشريعي الأول، ورئاسته له منذ ١٩٩٤. نال جائزة رئيس الدولة التقديرية عام ٢٠١١، وجائزة خليفة الدولية لنخيل التمر في العام نفسه لإدخاله صنف المجدول، وجائزة أبوظبي عام ٢٠١٤."
    },
    refs: [
      { label: "الاتحاد — عبدالله المسعود.. لؤلؤة أبوظبي", url: "https://www.aletihad.ae/news/دنيا/4103967/عبدالله-المسعود---لؤلؤة-أبوظبي" }
    ]
  },
  {
    id: "abdullah-bin-abdullah-al-muhairi-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "account",
    ar: "شارع عبدالله بن عبدالله المهيري",
    en: "Abdullah Bin Abdullah Al Muhairi Street",
    translit: "Shāriʿ ʿAbd Allāh bin ʿAbd Allāh al-Muhayrī",
    meaning: { en: "A tribal figure of Al Bu Muhair, of the Bani Yas", ar: "من الوجوه العشائرية المعروفة في آل بو مهير من بني ياس" },
    story: {
      en: "Abdullah bin Abdullah Al Muhairi was one of the well-known tribal figures of the United Arab Emirates, from Al Bu Muhair — one of the main sections (hafuf) of the historic Bani Yas confederation. He died in April 2026.",
      ar: "عبدالله بن عبدالله المهيري من الرموز والوجوه العشائرية المعروفة في دولة الإمارات، وينتمي إلى قبيلة آل بو مهير، أحد الحفوف الرئيسية لحلف قبائل بني ياس التاريخي. وتوفي في أبريل ٢٠٢٦."
    },
    refs: []
  },
  {
    id: "abdullah-bin-abi-habeebah-street",
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: "شارع عبدالله بن أبي حبيبة",
    en: "Abdullah Bin Abi Habeebah Street",
    translit: "Shāriʿ ʿAbd Allāh bin Abī Ḥabībah",
    meaning: { en: "A young Companion of the Ansar, of the Aws", ar: "صحابي من صغار الصحابة، أنصاريّ أوسيّ" },
    story: {
      en: "Abdullah ibn Abi Habibah — his father was al-Adra' ibn al-Az'ar, of the Banu 'Amr ibn 'Awf of the Aws — was a young Companion. Al-Bukhari and Ibn Hibban name him among the Companions, and Ibn Abi Dawud states that he was present at Hudaybiyya. Al-Baghawi says he lived at Quba, outside Medina.",
      ar: "عبد الله بن أبي حبيبة، وأبوه الأدرع بن الأزعر من بني عمرو بن عوف من الأوس، صحابي من صغار الصحابة. ذكره البخاري وابن حبان في الصحابة، وقال ابن أبي داود: شهد الحديبية. وقال البغوي: كان يسكن قباء."
    },
    refs: [
      { label: "الإصابة — عبد الله بن أبي حبيبة (via Shamela)", url: "https://shamela.ws/new.php/narrator/15145" }
    ]
  },
{
  "id": "abu-bakr-as-siddeeq-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبوبَكر الصِّدِّيق",
  "en": "Abu Bakr As Siddeeq Street",
  "translit": "Shāriʿ Abī Bakr aṣ-Ṣiddīq",
  "meaning": {
    "en": "The first caliph, the Prophet's companion in the migration",
    "ar": "أول الخلفاء الراشدين وصاحب النبي في الهجرة"
  },
  "story": {
    "en": "Abu Bakr al-Siddiq (d. 13 AH / 634 CE) was the first of the Rightly Guided Caliphs and the Companion who accompanied the Prophet on the migration to Medina. He was the first free man to accept Islam.",
    "ar": "أبو بكر الصديق (ت ١٣هـ/٦٣٤م) أول الخلفاء الراشدين، وصاحب النبي في الهجرة إلى المدينة، وأول من أسلم من الرجال الأحرار."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو بكر الصديق",
      "url": "https://ar.wikipedia.org/wiki/أبو_بكر_الصديق"
    }
  ]
},
{
  "id": "omar-bin-al-khattab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمر بن الخطاب",
  "en": "Omar Bin Al Khattab Street",
  "translit": "Shāriʿ ʿUmar bin al-Khaṭṭāb",
  "meaning": {
    "en": "The second caliph",
    "ar": "الخليفة الثاني"
  },
  "story": {
    "en": "Umar ibn al-Khattab (d. 23 AH / 644 CE) was the second caliph. In his ten years the state expanded into Syria, Egypt and Persia, and he established the Hijri calendar.",
    "ar": "عمر بن الخطاب (ت ٢٣هـ/٦٤٤م) الخليفة الثاني، وفي عهده امتدت الدولة إلى الشام ومصر وفارس، وهو أول من وضع التقويم الهجري."
  },
  "refs": [
    {
      "label": "Wikipedia — عمر بن الخطاب",
      "url": "https://ar.wikipedia.org/wiki/عمر_بن_الخطاب"
    }
  ]
},
{
  "id": "othman-bin-affan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عثمان بن عفان",
  "en": "Othman Bin Affan Street",
  "translit": "Shāriʿ ʿUthmān bin ʿAffān",
  "meaning": {
    "en": "The third caliph",
    "ar": "الخليفة الثالث"
  },
  "story": {
    "en": "Uthman ibn Affan (d. 35 AH / 656 CE) was the third caliph. He ordered the Qur'an collected into a single standard codex, and equipped the army known as the Army of Hardship.",
    "ar": "عثمان بن عفان (ت ٣٥هـ/٦٥٦م) الخليفة الثالث، أمر بجمع القرآن في مصحف إمام، وجهّز جيش العسرة."
  },
  "refs": [
    {
      "label": "Wikipedia — عثمان بن عفان",
      "url": "https://ar.wikipedia.org/wiki/عثمان_بن_عفان"
    }
  ]
},
{
  "id": "ali-bin-abi-talib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع علي بن أبي طالب",
  "en": "Ali Bin Abi Talib Street",
  "translit": "Shāriʿ ʿAlī bin Abī Ṭālib",
  "meaning": {
    "en": "The fourth caliph, the Prophet's cousin",
    "ar": "الخليفة الرابع وابن عم النبي"
  },
  "story": {
    "en": "Ali ibn Abi Talib (d. 40 AH / 661 CE) was the fourth of the Rightly Guided Caliphs, the Prophet's cousin, and the husband of his daughter Fatima.",
    "ar": "علي بن أبي طالب (ت ٤٠هـ/٦٦١م) رابع الخلفاء الراشدين، وابن عم النبي، وزوج ابنته فاطمة."
  },
  "refs": [
    {
      "label": "Wikipedia — علي بن أبي طالب",
      "url": "https://ar.wikipedia.org/wiki/علي_بن_أبي_طالب"
    }
  ]
},
{
  "id": "khalid-bin-al-waleed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خالِد بن الوليد",
  "en": "Khalid Bin Al Waleed Street",
  "translit": "Shāriʿ Khālid bin al-Walīd",
  "meaning": {
    "en": "A commander of the early conquests",
    "ar": "قائد من قادة الفتوح الأولى"
  },
  "story": {
    "en": "Khalid ibn al-Walid (d. 21 AH / 642 CE) was a commander known as the Sword of God. He led the armies of the Ridda wars and of the conquest of Syria.",
    "ar": "خالد بن الوليد (ت ٢١هـ/٦٤٢م) قائد عُرف بسيف الله المسلول، قاد جيوش حروب الردة وفتح الشام."
  },
  "refs": [
    {
      "label": "Wikipedia — خالد بن الوليد",
      "url": "https://ar.wikipedia.org/wiki/خالد_بن_الوليد"
    }
  ]
},
{
  "id": "bilal-bin-rabah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع بلال بن رَباح",
  "en": "Bilal Bin Rabah Street",
  "translit": "Shāriʿ Bilāl bin Rabāḥ",
  "meaning": {
    "en": "The Prophet's muezzin",
    "ar": "مؤذن الرسول"
  },
  "story": {
    "en": "Bilal ibn Rabah (d. c. 20 AH) was the Prophet's muezzin and among the first to accept Islam. Abu Bakr bought him and set him free.",
    "ar": "بلال بن رباح (ت نحو ٢٠هـ) مؤذن الرسول، ومن السابقين إلى الإسلام، اشتراه أبو بكر فأعتقه."
  },
  "refs": [
    {
      "label": "Wikipedia — بلال بن رباح",
      "url": "https://ar.wikipedia.org/wiki/بلال_بن_رباح"
    }
  ]
},
{
  "id": "hamza-bin-abdulmuttalib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حمزة بن عبدالمطلب",
  "en": "Hamza Bin Abdulmuttalib Street",
  "translit": "Shāriʿ Ḥamza bin ʿAbd al-Muṭṭalib",
  "meaning": {
    "en": "The Prophet's uncle, killed at Uhud",
    "ar": "عمّ النبي، استُشهد في أُحد"
  },
  "story": {
    "en": "Hamza ibn Abd al-Muttalib (d. 3 AH / 625 CE) was the Prophet's uncle, known as the Lion of God. He was killed at the battle of Uhud and is buried there.",
    "ar": "حمزة بن عبد المطلب (ت ٣هـ/٦٢٥م) عمّ النبي، عُرف بأسد الله، واستُشهد في غزوة أُحد ودُفن فيها."
  },
  "refs": [
    {
      "label": "Wikipedia — حمزة بن عبد المطلب",
      "url": "https://ar.wikipedia.org/wiki/حمزة_بن_عبد_المطلب"
    }
  ]
},
{
  "id": "salman-al-faresi-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سلمان الفارسي",
  "en": "Salman Al Faresi Street",
  "translit": "Shāriʿ Salmān al-Fārisī",
  "meaning": {
    "en": "A Companion of Persian origin",
    "ar": "صحابي فارسي الأصل"
  },
  "story": {
    "en": "Salman al-Farisi (d. c. 33 AH) was a Companion of Persian origin. At the Battle of the Trench he proposed digging the ditch that gave the battle its name.",
    "ar": "سلمان الفارسي (ت نحو ٣٣هـ) صحابي فارسي الأصل، أشار بحفر الخندق في غزوة الأحزاب."
  },
  "refs": [
    {
      "label": "Wikipedia — سلمان الفارسي",
      "url": "https://ar.wikipedia.org/wiki/سلمان_الفارسي"
    }
  ]
},
{
  "id": "al-hasan-bin-ali-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الحسن بن علي",
  "en": "Al Hasan Bin Ali Street",
  "meaning": {
    "en": "5th Rashidun Caliph (r. 661) and second Shia Imam",
    "ar": "خامس وآخر الخُلفاء الرَّاشدين عند أهل السنة (حكم 40هـ / 661م) وثاني الائمة عند الشيعة"
  },
  "story": {
    "en": "Hasan ibn Ali (625–669) was the 5th Rashidun Caliph (r. 661) and second Shia Imam.",
    "ar": "الحسن بن علي — خامس وآخر الخُلفاء الرَّاشدين عند أهل السنة (حكم 40هـ / 661م) وثاني الائمة عند الشيعة."
  },
  "refs": [
    {
      "label": "Wikipedia — الحسن بن علي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AD%D8%B3%D9%86_%D8%A8%D9%86_%D8%B9%D9%84%D9%8A"
    }
  ]
},
{
  "id": "hassan-bin-thabit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حسان بن ثابت",
  "en": "Hassan Bin Thabit Street",
  "meaning": {
    "en": "Arabian poet and companion of Muhammad",
    "ar": "شاعر عربي وصحابي من الأنصار"
  },
  "story": {
    "en": "Hassan ibn Thabit (554–674) was an arabian poet and companion of Muhammad.",
    "ar": "حسان بن ثابت — شاعر عربي وصحابي من الأنصار."
  },
  "refs": [
    {
      "label": "Wikipedia — حسان بن ثابت",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%B3%D8%A7%D9%86_%D8%A8%D9%86_%D8%AB%D8%A7%D8%A8%D8%AA"
    }
  ]
},
{
  "id": "ammar-bin-yasir-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمار بن ياسر",
  "en": "Ammar Bin Yasir Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي من السابقين الأولين، ومن مشاهير الصحابة"
  },
  "story": {
    "en": "Ammar ibn Yasir (570–657) was a companion of the Islamic prophet Muhammad.",
    "ar": "عمار بن ياسر — صحابي من السابقين الأولين، ومن مشاهير الصحابة."
  },
  "refs": [
    {
      "label": "Wikipedia — عمار بن ياسر",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D8%A7%D8%B1_%D8%A8%D9%86_%D9%8A%D8%A7%D8%B3%D8%B1"
    }
  ]
},
{
  "id": "hassan-bin-an-nu-man-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حسان بن النعمان",
  "en": "Hassan Bin An Nu'man Street",
  "meaning": {
    "en": "Umayyad general",
    "ar": "قائد أموي"
  },
  "story": {
    "en": "Hassan ibn al-Nu'man al-Ghassani (d. c. 86 AH / 705 CE) was an Umayyad commander who completed the conquest of Ifriqiya and founded Tunis.",
    "ar": "حسان بن النعمان الغساني (ت نحو ٨٦هـ/٧٠٥م) قائد أموي، أكمل فتح إفريقية وأسّس مدينة تونس."
  },
  "refs": [
    {
      "label": "Wikipedia — حسان بن النعمان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%B3%D8%A7%D9%86_%D8%A8%D9%86_%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "al-layth-bin-sa-d-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الليث بن سعد",
  "en": "Al Layth Bin Sa'd Street",
  "meaning": {
    "en": "Egyptian faqih, author and muhaddith",
    "ar": "فقيه ومحدث وإمام أهل مصر في زمانه، وصاحب أحد المذاهب الإسلامية المندثرة"
  },
  "story": {
    "en": "Al-Layth ibn Sa'd (713–791) was an egyptian faqih, author and muhaddith.",
    "ar": "الليث بن سعد — فقيه ومحدث وإمام أهل مصر في زمانه، وصاحب أحد المذاهب الإسلامية المندثرة."
  },
  "refs": [
    {
      "label": "Wikipedia — الليث بن سعد",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D9%8A%D8%AB_%D8%A8%D9%86_%D8%B3%D8%B9%D8%AF"
    }
  ]
},
{
  "id": "hakeem-bin-hizam-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حكيم بن حزام",
  "en": "Hakeem Bin Hizam Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي جليل، وهو ابن أخي خديجة بنت خويلد أم المؤمنين"
  },
  "story": {
    "en": "Hakim ibn Hizam (599–674) was a companion of the Islamic prophet Muhammad.",
    "ar": "حكيم بن حزام — صحابي جليل، وهو ابن أخي خديجة بنت خويلد أم المؤمنين."
  },
  "refs": [
    {
      "label": "Wikipedia — حكيم بن حزام",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D9%83%D9%8A%D9%85_%D8%A8%D9%86_%D8%AD%D8%B2%D8%A7%D9%85"
    }
  ]
},
{
  "id": "asim-bin-thabit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عاصم بن ثابت",
  "en": "Asim Bin Thabit Street",
  "meaning": {
    "en": "Sahabi (Companion) of Muhammad",
    "ar": "صحابي من الأنصار"
  },
  "story": {
    "en": "Asim ibn Thabit al-Ansari (d. 4 AH / 625 CE) was an Ansari companion killed at the well of Ma'una.",
    "ar": "عاصم بن ثابت بن أبي الأقلح الأنصاري (ت ٤هـ/٦٢٥م) صحابي من الأنصار، استُشهد في بئر معونة."
  },
  "refs": [
    {
      "label": "Wikipedia — عاصم بن ثابت",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A7%D8%B5%D9%85_%D8%A8%D9%86_%D8%AB%D8%A7%D8%A8%D8%AA"
    }
  ]
},
{
  "id": "hammad-bin-zayd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حماد بن زيد",
  "en": "Hammad Bin Zayd Street",
  "meaning": {
    "en": "Islamic scholar and hadith narrator",
    "ar": "شيخ العراق في عصره، حفظ أربعة آلاف حديث وكان ضريرا"
  },
  "story": {
    "en": "Hammad ibn Zayd (716–795) was an islamic scholar and hadith narrator.",
    "ar": "حماد بن زيد — شيخ العراق في عصره، حفظ أربعة آلاف حديث وكان ضريرا."
  },
  "refs": [
    {
      "label": "Wikipedia — حماد بن زيد",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%A7%D8%AF_%D8%A8%D9%86_%D8%B2%D9%8A%D8%AF"
    }
  ]
},
{
  "id": "aqil-bin-al-bakeer-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عاقل بن البكير",
  "en": "Aqil Bin Al Bakeer Street",
  "meaning": {
    "en": "Sahabi (companion) of Muhammad",
    "ar": "صحابي من السابقين الأولين"
  },
  "story": {
    "en": "Aqil ibn al-Bakir was a companion of the Prophet Muhammad.",
    "ar": "عقيل بن البكير صحابي من أصحاب النبي محمد، وأخو إياس بن البكير البدري."
  },
  "refs": [
    {
      "label": "Wikipedia — عاقل بن البكير",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A7%D9%82%D9%84_%D8%A8%D9%86_%D8%A7%D9%84%D8%A8%D9%83%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "jabir-bin-hayan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جابر بن حيان",
  "en": "Jabir Bin Hayan Street",
  "meaning": {
    "en": "8th-century Islamic alchemist and author",
    "ar": "عالم كيمياء موسوعي وهو أبو الكيمياء"
  },
  "story": {
    "en": "Jabir ibn Hayyan (721–815) was the 8th-century Islamic alchemist and author.",
    "ar": "جابر بن حيان — عالم كيمياء موسوعي وهو أبو الكيمياء."
  },
  "refs": [
    {
      "label": "Wikipedia — جابر بن حيان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D8%A7%D8%A8%D8%B1_%D8%A8%D9%86_%D8%AD%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "omar-al-mukhtar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمر المختار",
  "en": "Omar Al Mukhtar Street",
  "meaning": {
    "en": "Leader of the Senussi resistance against the Italian fascist occupation",
    "ar": "قائد المقاومة السنوسية ضد الاحتلال الفاشي الإيطالي"
  },
  "story": {
    "en": "Omar al-Mukhtar (1858–1931) was a leader of the Senussi resistance against the Italian fascist occupation.",
    "ar": "عمر المختار — قائد المقاومة السنوسية ضد الاحتلال الفاشي الإيطالي."
  },
  "refs": [
    {
      "label": "Wikipedia — عمر المختار",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D8%B1_%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A7%D8%B1"
    }
  ]
},
{
  "id": "ibn-rushd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن رشد",
  "en": "Ibn Rushd Street",
  "meaning": {
    "en": "Arab Andalusian Muslim writer and philosopher",
    "ar": "فيلسوف وطبيب وفقيه وقاضي وفلكي وفيزيائي مسلم أندلسي"
  },
  "story": {
    "en": "Averroes (1126–1198) was an arab Andalusian Muslim writer and philosopher.",
    "ar": "ابن رشد — فيلسوف وطبيب وفقيه وقاضي وفلكي وفيزيائي مسلم أندلسي."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن رشد",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%B1%D8%B4%D8%AF"
    }
  ]
},
{
  "id": "maryam-bint-omran-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مريم بنت عمران",
  "en": "Maryam Bint 'Omran Street",
  "meaning": {
    "en": "A virgin and mother of Jesus in Islam",
    "ar": "مريم العذراء أم النبي عيسى حسب المنظور الإسلامي"
  },
  "story": {
    "en": "Mary in Islam was a virgin and mother of Jesus in Islam.",
    "ar": "مريم بنت عمران — مريم العذراء أم النبي عيسى حسب المنظور الإسلامي."
  },
  "refs": [
    {
      "label": "Wikipedia — مريم بنت عمران",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B1%D9%8A%D9%85_%D8%A8%D9%86%D8%AA_%D8%B9%D9%85%D8%B1%D8%A7%D9%86"
    }
  ]
},
{
  "id": "ibn-al-nafis-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن النفيس",
  "en": "Ibn Al Nafis Street",
  "meaning": {
    "en": "Arab polymath and physician",
    "ar": "عالم موسوعي وطبيب عربي مسلم"
  },
  "story": {
    "en": "Ibn al-Nafis (1210–1280) was an arab polymath and physician.",
    "ar": "ابن النفيس — عالم موسوعي وطبيب عربي مسلم."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن النفيس",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%A7%D9%84%D9%86%D9%81%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "ka-b-bin-zuhayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع كعب بن زهير",
  "en": "Ka'b Bin Zuhayr Street",
  "meaning": {
    "en": "Arabian poet",
    "ar": "شاعر مخضرم"
  },
  "story": {
    "en": "Ka'b ibn Zuhayr (d. c. 24 AH / 645 CE) was a poet of the transition period who accepted Islam and recited his ode Banat Su'ad before the Prophet.",
    "ar": "كعب بن زهير بن أبي سلمى (ت نحو ٢٤هـ/٦٤٥م) شاعر مخضرم، أسلم وأنشد قصيدته «بانت سعاد» بين يدي النبي."
  },
  "refs": [
    {
      "label": "Wikipedia — كعب بن زهير",
      "url": "https://ar.wikipedia.org/wiki/%D9%83%D8%B9%D8%A8_%D8%A8%D9%86_%D8%B2%D9%87%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "saeed-bin-zayd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعيد بن زيد",
  "en": "Saeed Bin Zayd Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي وأحد العشرة المبشرين بالجنة"
  },
  "story": {
    "en": "Sa'id ibn Zayd (593–671) was a companion of Muhammad.",
    "ar": "سعيد بن زيد — صحابي وأحد العشرة المبشرين بالجنة."
  },
  "refs": [
    {
      "label": "Wikipedia — سعيد بن زيد",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A8%D9%86_%D8%B2%D9%8A%D8%AF"
    }
  ]
},
{
  "id": "zaynab-bint-jahash-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زينب بنت جحش",
  "en": "Zaynab Bint Jahash Street",
  "meaning": {
    "en": "Cousin and seventh wife of Muhammad",
    "ar": "أم المؤمنين سابع زوجات لمحمد"
  },
  "story": {
    "en": "Zaynab bint Jahsh (592–642) was a cousin and seventh wife of Muhammad.",
    "ar": "زينب بنت جحش — أم المؤمنين سابع زوجات لمحمد."
  },
  "refs": [
    {
      "label": "Wikipedia — زينب بنت جحش",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D9%86%D8%A8_%D8%A8%D9%86%D8%AA_%D8%AC%D8%AD%D8%B4"
    }
  ]
},
{
  "id": "saad-bin-mu-adh-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعد بن معاذ",
  "en": "Saad Bin Mu'adh Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي جليل رضي الله عنه"
  },
  "story": {
    "en": "Sa'd ibn Mua'dh (590–627) was a companion of Muhammad.",
    "ar": "سعد بن معاذ — صحابي جليل رضي الله عنه."
  },
  "refs": [
    {
      "label": "Wikipedia — سعد بن معاذ",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D8%AF_%D8%A8%D9%86_%D9%85%D8%B9%D8%A7%D8%B0"
    }
  ]
},
{
  "id": "mu-adh-bin-jabal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع معاذ بن جبل",
  "en": "Mu'adh Bin Jabal Street",
  "meaning": {
    "en": "7th-century companion (Sahabi) of Muhammad",
    "ar": "صحابي وفقيه وقارئ قرآن كريم"
  },
  "story": {
    "en": "Muadh ibn Jabal (600–638) was the 7th-century companion (Sahabi) of Muhammad.",
    "ar": "معاذ بن جبل — صحابي وفقيه وقارئ قرآن كريم."
  },
  "refs": [
    {
      "label": "Wikipedia — معاذ بن جبل",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B9%D8%A7%D8%B0_%D8%A8%D9%86_%D8%AC%D8%A8%D9%84"
    }
  ]
},
{
  "id": "qays-bin-al-mulawwah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع قيس بن الملوح",
  "en": "Qays Bin Al Mulawwah Street",
  "meaning": {
    "en": "Arab poet and the character of the romantic fiction Layla and Majnun",
    "ar": "شاعر غزل عربي نجدي عاش في القرن الأول من الهجرة في بادية العرب."
  },
  "story": {
    "en": "Qays Ibn al-Mulawwah (644–688) was an arab poet and the character of the romantic fiction Layla and Majnun.",
    "ar": "قيس بن الملوح — شاعر غزل عربي نجدي عاش في القرن الأول من الهجرة في بادية العرب.."
  },
  "refs": [
    {
      "label": "Wikipedia — قيس بن الملوح",
      "url": "https://ar.wikipedia.org/wiki/%D9%82%D9%8A%D8%B3_%D8%A8%D9%86_%D8%A7%D9%84%D9%85%D9%84%D9%88%D8%AD"
    }
  ]
},
{
  "id": "sa-d-bin-ar-rabee-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعد بن الربيع",
  "en": "Sa'd Bin Ar Rabee' Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "شجاع سعد بن ربيع"
  },
  "story": {
    "en": "Sa'd ibn al-Rabi' al-Ansari (d. 3 AH / 625 CE) was one of the chosen leaders of the Ansar, killed at the battle of Uhud.",
    "ar": "سعد بن الربيع الأنصاري (ت ٣هـ/٦٢٥م) من نقباء الأنصار، استُشهد يوم أُحد."
  },
  "refs": [
    {
      "label": "Wikipedia — سعد بن الربيع",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D8%B1%D8%A8%D9%8A%D8%B9"
    }
  ]
},
{
  "id": "wahab-bin-sa-d-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع وهب بن سعد",
  "en": "Wahab Bin Sa'd Street",
  "meaning": {
    "en": "Companion (Sahabi) of Muhammad",
    "ar": "صحابي، شهد غزوات عديدة مع النبي محمد صلى الله عليه وسلم"
  },
  "story": {
    "en": "Wahb ibn Saad was a companion (Sahabi) of Muhammad.",
    "ar": "وهب بن سعد — صحابي، شهد غزوات عديدة مع النبي محمد صلى الله عليه وسلم."
  },
  "refs": [
    {
      "label": "Wikipedia — وهب بن سعد",
      "url": "https://ar.wikipedia.org/wiki/%D9%88%D9%87%D8%A8_%D8%A8%D9%86_%D8%B3%D8%B9%D8%AF"
    }
  ]
},
{
  "id": "abdulla-bin-masood-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد الله بن مسعود",
  "en": "Abdulla Bin Masood Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي وفقيه ومقرئ ومحدث"
  },
  "story": {
    "en": "Abdullah ibn Masud (594–653) was a companion of the Islamic prophet Muhammad.",
    "ar": "عبد الله بن مسعود — صحابي وفقيه ومقرئ ومحدث."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الله بن مسعود",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%84%D9%87_%D8%A8%D9%86_%D9%85%D8%B3%D8%B9%D9%88%D8%AF"
    }
  ]
},
{
  "id": "shuja-bin-wahab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع شجاع بن وهب",
  "en": "Shuja' Bin Wahab Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي، شجاع من أمراء السرايا، شهد المشاهد كلها في الإسلام"
  },
  "story": {
    "en": "Shuja ibn Wahb al-Asadi (d. 633) was a companion of Muhammad.",
    "ar": "شجاع بن وهب — صحابي، شجاع من أمراء السرايا، شهد المشاهد كلها في الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — شجاع بن وهب",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D8%AC%D8%A7%D8%B9_%D8%A8%D9%86_%D9%88%D9%87%D8%A8"
    }
  ]
},
{
  "id": "abdullaziz-bin-baz-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد العزيز بن باز",
  "en": "Abdullaziz Bin Baz Street",
  "meaning": {
    "en": "Saudi Arabian Islamic scholar and mufti",
    "ar": "عالم دين سعودي والمفتي العام للمملكة العربية السعودية سابقًا"
  },
  "story": {
    "en": "Abd al-Aziz Ibn Baz (1912–1999) was a saudi Arabian Islamic scholar and mufti.",
    "ar": "عبد العزيز بن باز — عالم دين سعودي والمفتي العام للمملكة العربية السعودية سابقًا."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن باز",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%A8%D8%A7%D8%B2"
    }
  ]
},
{
  "id": "tariq-bin-ziyad-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع طارق بن زياد",
  "en": "Tariq Bin Ziyad Street",
  "meaning": {
    "en": "8th-century Muslim general",
    "ar": "قائد مسلم عربي قاد الفتح الإسلامي للأندلس"
  },
  "story": {
    "en": "Tariq ibn Ziyad (670–720) was the 8th-century Muslim general.",
    "ar": "طارق بن زياد — قائد مسلم عربي قاد الفتح الإسلامي للأندلس."
  },
  "refs": [
    {
      "label": "Wikipedia — طارق بن زياد",
      "url": "https://ar.wikipedia.org/wiki/%D8%B7%D8%A7%D8%B1%D9%82_%D8%A8%D9%86_%D8%B2%D9%8A%D8%A7%D8%AF"
    }
  ]
},
{
  "id": "abdullah-bin-al-zubair-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد الله بن الزبير",
  "en": "Abdullah Bin Al Zubair Street",
  "meaning": {
    "en": "Historical Arab ruler",
    "ar": "صحابي جليل من صغار الصحابة، ومؤسس الخلافة الزبيرية"
  },
  "story": {
    "en": "Abd Allah ibn al-Zubayr (624–692) was a historical Arab ruler.",
    "ar": "عبد الله بن الزبير — صحابي جليل من صغار الصحابة، ومؤسس الخلافة الزبيرية."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الله بن الزبير",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%84%D9%87_%D8%A8%D9%86_%D8%A7%D9%84%D8%B2%D8%A8%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "zayd-bin-al-khattab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زيد بن الخطاب",
  "en": "Zayd Bin Al Khattab Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي من السابقين الأولين وأخ عمر بن الخطاب"
  },
  "story": {
    "en": "Zayd ibn al-Khattab (d. 632) was a companion of the Prophet Muhammad.",
    "ar": "زيد بن الخطاب — صحابي من السابقين الأولين وأخ عمر بن الخطاب."
  },
  "refs": [
    {
      "label": "Wikipedia — زيد بن الخطاب",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D8%A8"
    }
  ]
},
{
  "id": "zaynab-bint-al-awwam-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زينب بنت العوام",
  "en": "Zaynab Bint Al Awwam Street",
  "meaning": {
    "en": "Companion and poet",
    "ar": "صحابية وشاعرة"
  },
  "story": {
    "en": "Zaynab bint al-Awwam was a woman of Quraysh in early Islam and a sister of al-Zubayr ibn al-Awwam.",
    "ar": "زينب بنت العوام أخت الزبير بن العوام، من نساء قريش في صدر الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — زينب بنت العوام",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D9%86%D8%A8_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D9%85"
    }
  ]
},
{
  "id": "omar-bin-abd-alaziz-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمر بن عبد العزيز",
  "en": "Omar Bin Abd Alaziz Street",
  "meaning": {
    "en": "Umayyad caliph from 717 to 720",
    "ar": "ثامن خُلفاء بني أميَّة"
  },
  "story": {
    "en": "Umar II (681–720) was an umayyad caliph from 717 to 720.",
    "ar": "عمر بن عبد العزيز — ثامن خُلفاء بني أميَّة."
  },
  "refs": [
    {
      "label": "Wikipedia — عمر بن عبد العزيز",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D8%B1_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2"
    }
  ]
},
{
  "id": "iben-wasel-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن واصل",
  "en": "Iben Wasel Street",
  "meaning": {
    "en": "13th century Syrian scholar and diplomat",
    "ar": "مؤرخ وأديب ومفكر وفقيه من أهل حماة"
  },
  "story": {
    "en": "Ibn Wasil (1208–1298) was the 13th century Syrian scholar and diplomat.",
    "ar": "ابن واصل — مؤرخ وأديب ومفكر وفقيه من أهل حماة."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن واصل",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D9%88%D8%A7%D8%B5%D9%84"
    }
  ]
},
{
  "id": "al-ala-a-bin-al-hadhrami-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع العلاء بن الحضرمي",
  "en": "Al Ala'a Bin Al Hadhrami Street",
  "meaning": {
    "en": "7th-century Muslim commander and governor",
    "ar": "صحابي وقائد عسكري مسلم"
  },
  "story": {
    "en": "Al-Ala ibn al-Hadrami (d. 635) was the 7th-century Muslim commander and governor.",
    "ar": "العلاء بن الحضرمي — صحابي وقائد عسكري مسلم."
  },
  "refs": [
    {
      "label": "Wikipedia — العلاء بن الحضرمي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%A1_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%B6%D8%B1%D9%85%D9%8A"
    }
  ]
},
{
  "id": "iben-zaydoun-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن زيدون",
  "en": "Iben Zaydoun Street",
  "meaning": {
    "en": "Poet of al-Andalus",
    "ar": "شاعر أندلسي"
  },
  "story": {
    "en": "Ibn Zaydun (1003–1071) was an Andalusian poet and statesman of Cordoba and Seville, among the best known poets of al-Andalus.",
    "ar": "ابن زيدون (٣٩٤–٤٦٣هـ/١٠٠٣–١٠٧١م) شاعر أندلسي ووزير في قرطبة وإشبيلية، من أشهر شعراء الأندلس."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن زيدون",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%B2%D9%8A%D8%AF%D9%88%D9%86"
    }
  ]
},
{
  "id": "amr-bin-al-jamooh-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمرو بن الجموح",
  "en": "Amr Bin Al Jamooh Street",
  "meaning": {
    "en": "Sahaba of Muhammad",
    "ar": "صحابي، وأحد زعماء المدينة وسيد من سادات بني سَلِمة"
  },
  "story": {
    "en": "Amr ibn al-Jamuh (540–625) was a companion of the Prophet Muhammad from the Ansar of Banu Salama.",
    "ar": "عمرو بن الجموح (ت ٣هـ/٦٢٥م) صحابي من الأنصار من بني سلمة، استُشهد يوم أُحد."
  },
  "refs": [
    {
      "label": "Wikipedia — عمرو بن الجموح",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D8%B1%D9%88_%D8%A8%D9%86_%D8%A7%D9%84%D8%AC%D9%85%D9%88%D8%AD"
    }
  ]
},
{
  "id": "abad-bin-beshr-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عباد بن بشر",
  "en": "Abad Bin Beshr Street",
  "meaning": {
    "en": "Sahaba of Muhammad",
    "ar": "صحابي من الأنصار"
  },
  "story": {
    "en": "Abbad ibn Bishr al-Ansari (d. 11 AH / 632 CE) was a Badri companion of the Ansar, killed at al-Yamama.",
    "ar": "عباد بن بشر الأنصاري (ت ١١هـ/٦٣٢م) صحابي بدري من الأنصار، استُشهد باليمامة."
  },
  "refs": [
    {
      "label": "Wikipedia — عباد بن بشر",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%A7%D8%AF_%D8%A8%D9%86_%D8%A8%D8%B4%D8%B1"
    }
  ]
},
{
  "id": "al-harth-bin-hisham-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الحارث بن هشام",
  "en": "Al Harth Bin Hisham Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي من سادات قريش من أهل مكة"
  },
  "story": {
    "en": "Al-Harith ibn Hisham ibn al-Mughira (d. 639) was a companion of Muhammad.",
    "ar": "الحارث بن هشام — صحابي من سادات قريش من أهل مكة."
  },
  "refs": [
    {
      "label": "Wikipedia — الحارث بن هشام",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB_%D8%A8%D9%86_%D9%87%D8%B4%D8%A7%D9%85"
    }
  ]
},
{
  "id": "abdulmalek-bin-marwan-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد الملك بن مروان",
  "en": "Abdulmalek Bin Marwan Street",
  "meaning": {
    "en": "Umayyad caliph from 685 to 705",
    "ar": "خامس خُلفاء بني أميَّة"
  },
  "story": {
    "en": "Abd al-Malik ibn Marwan (646–705) was an umayyad caliph from 685 to 705.",
    "ar": "عبد الملك بن مروان — خامس خُلفاء بني أميَّة."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الملك بن مروان",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%A8%D9%86_%D9%85%D8%B1%D9%88%D8%A7%D9%86"
    }
  ]
},
{
  "id": "bashar-bin-bard-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع بشار بن برد",
  "en": "Bashar Bin Bard Street",
  "meaning": {
    "en": "Persian poet who wrote in Arabic",
    "ar": "شاعر من العصر العباسي"
  },
  "story": {
    "en": "Bashshar ibn Burd (714–784) was a persian poet who wrote in Arabic.",
    "ar": "بشار بن برد — شاعر من العصر العباسي."
  },
  "refs": [
    {
      "label": "Wikipedia — بشار بن برد",
      "url": "https://ar.wikipedia.org/wiki/%D8%A8%D8%B4%D8%A7%D8%B1_%D8%A8%D9%86_%D8%A8%D8%B1%D8%AF"
    }
  ]
},
{
  "id": "sahl-bin-hunaif-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سهل بن حنيف",
  "en": "Sahl Bin Hunaif Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي من السابقين، شهد بدرا وثبت يوم أحد وشهد المشاهد كلها"
  },
  "story": {
    "en": "Sahl ibn Hunayf (d. 658) was a companion of the Islamic prophet Muhammad.",
    "ar": "سهل بن حنيف — صحابي من السابقين، شهد بدرا وثبت يوم أحد وشهد المشاهد كلها."
  },
  "refs": [
    {
      "label": "Wikipedia — سهل بن حنيف",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%87%D9%84_%D8%A8%D9%86_%D8%AD%D9%86%D9%8A%D9%81"
    }
  ]
},
{
  "id": "salim-al-jamry-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سالم الجمري",
  "en": "Salim Al Jamry Street",
  "meaning": {
    "en": "Emirian poet",
    "ar": "شاعر إماراتي"
  },
  "story": {
    "en": "Salim al-Jamri (1910–1991) was an Emirati poet of the Nabati tradition.",
    "ar": "سالم الجمري (١٩١٠–١٩٩١م) شاعر إماراتي من شعراء النبط."
  },
  "refs": [
    {
      "label": "Wikipedia — سالم الجمري",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%A7%D9%84%D9%85_%D8%A7%D9%84%D8%AC%D9%85%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "sa-eed-bin-al-aas-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعيد بن العاص",
  "en": "Sa'eed Bin Al Aas Street",
  "meaning": {
    "en": "Muslim military leader and governor",
    "ar": "صحابي، ووال مسلم، وقائد عسكري"
  },
  "story": {
    "en": "Sa'id ibn al-'As (623–679) was a muslim military leader and governor.",
    "ar": "سعيد بن العاص — صحابي، ووال مسلم، وقائد عسكري."
  },
  "refs": [
    {
      "label": "Wikipedia — سعيد بن العاص",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D8%B9%D8%A7%D8%B5"
    }
  ]
},
{
  "id": "thakwaan-bin-qbd-qais-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ذكوان بن عبد قيس",
  "en": "Thakwaan Bin Qbd Qais Street",
  "meaning": {
    "en": "One of Muhammad's companions",
    "ar": "صحابي من صحابة النبي محمد"
  },
  "story": {
    "en": "Dhikwan ibn Abd-Qays (d. 625) was an one of Muhammad's companions.",
    "ar": "ذكوان بن عبد قيس — صحابي من صحابة النبي محمد."
  },
  "refs": [
    {
      "label": "Wikipedia — ذكوان بن عبد قيس",
      "url": "https://ar.wikipedia.org/wiki/%D8%B0%D9%83%D9%88%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF_%D9%82%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "tulaib-bin-omair-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع طليب بن عمير",
  "en": "Tulaib Bin Omair Street",
  "meaning": {
    "en": "Cousin of Muhammad",
    "ar": "صحابي وابن عمة النبي محمد"
  },
  "story": {
    "en": "Tulayb ibn Umayr was a cousin of Muhammad.",
    "ar": "طليب بن عمير — صحابي وابن عمة النبي محمد."
  },
  "refs": [
    {
      "label": "Wikipedia — طليب بن عمير",
      "url": "https://ar.wikipedia.org/wiki/%D8%B7%D9%84%D9%8A%D8%A8_%D8%A8%D9%86_%D8%B9%D9%85%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "ibn-sina-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع إبن سِينا",
  "en": "Ibn Sina Street",
  "translit": "Shāriʿ Ibn Sīnā",
  "meaning": {
    "en": "A polymath, author of the Canon of Medicine",
    "ar": "عالم موسوعي وصاحب «القانون في الطب»"
  },
  "story": {
    "en": "Ibn Sina (980–1037), known in the West as Avicenna, was a Persian polymath whose Canon of Medicine remained a standard text in Europe and the Islamic world for centuries.",
    "ar": "ابن سينا (980–1037م) عالم موسوعي، عُرف في الغرب باسم أفيسينا، وبقي كتابه «القانون في الطب» مرجعاً في أوروبا والعالم الإسلامي قروناً."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن سينا",
      "url": "https://ar.wikipedia.org/wiki/ابن_سينا"
    }
  ]
},
{
  "id": "ibn-battoutah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن بطوطه",
  "en": "Ibn Battoutah Street",
  "meaning": {
    "en": "A traveller and judge from Tangier",
    "ar": "رحّالة وقاضٍ من طنجة"
  },
  "story": {
    "en": "Ibn Battuta (703–770 AH / 1304–1368) was a traveller and judge from Tangier whose journeys across Africa, Asia and Europe were recorded in the Rihla.",
    "ar": "ابن بطوطة (٧٠٣–٧٧٠هـ/١٣٠٤–١٣٦٨م) رحّالة وقاضٍ من طنجة، دوّن رحلاته في آسيا وإفريقيا وأوروبا في كتاب «الرحلة»."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن بطوطه",
      "url": "https://en.wikipedia.org/wiki/Ibn_Battuta"
    }
  ]
},
{
  "id": "mus-ab-bin-omair-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مصعب بن عمير",
  "en": "Mus'ab Bin 'Omair Street",
  "meaning": {
    "en": "A Companion who taught Islam in Yathrib",
    "ar": "صحابي بعثه النبي إلى يثرب ليعلّم الإسلام"
  },
  "story": {
    "en": "Mus'ab ibn Umayr was a Qurayshi Companion who accepted Islam in Mecca and was sent by the Prophet to Yathrib before the migration to teach its people. He was killed at the battle of Uhud.",
    "ar": "مصعب بن عمير صحابي من قريش، أسلم في مكة، وبعثه النبي إلى يثرب قبل الهجرة ليعلّم أهلها الإسلام، وقُتل في غزوة أُحد."
  },
  "refs": [
    {
      "label": "Wikipedia — مصعب بن عمير",
      "url": "https://en.wikipedia.org/wiki/Mus%27ab_ibn_Umayr"
    }
  ]
},
{
  "id": "abu-ubaidah-bin-al-jarrah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابو عبيده بن الجراح",
  "en": "Abu 'Ubaidah Bin Al Jarrah Street",
  "meaning": {
    "en": "A Companion and commander in Syria",
    "ar": "صحابي وقائد في الشام"
  },
  "story": {
    "en": "Abu Ubaydah ibn al-Jarrah, whose name was Amir ibn Abdullah, was a Companion and one of the commanders of the armies in Syria.",
    "ar": "أبو عبيدة بن الجراح، واسمه عامر بن عبد الله، صحابي وقائد من قادة الجيوش في بلاد الشام."
  },
  "refs": [
    {
      "label": "Wikipedia — ابو عبيده بن الجراح",
      "url": "https://en.wikipedia.org/wiki/Abu_Ubayda_ibn_al-Jarrah"
    }
  ]
},
{
  "id": "sa-ad-bin-abi-waqas-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعد بن ابي وقاص",
  "en": "Sa'ad Bin Abi Waqas Street",
  "meaning": {
    "en": "A Companion and commander, governor of Kufa",
    "ar": "صحابي وقائد ووالي الكوفة"
  },
  "story": {
    "en": "Sa'd ibn Abi Waqqas was a Companion from the Banu Zuhrah who took part in the early conquests and served as governor of Kufa.",
    "ar": "سعد بن أبي وقاص صحابي من بني زهرة، شارك في الفتوحات الأولى، وولي الكوفة."
  },
  "refs": [
    {
      "label": "Wikipedia — سعد بن ابي وقاص",
      "url": "https://en.wikipedia.org/wiki/Sa%27d_ibn_Abi_Waqqas"
    }
  ]
},
{
  "id": "ubadah-bin-al-samit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عباده بن الصامت",
  "en": "Ubadah Bin Al Samit Street",
  "meaning": {
    "en": "An Ansari Companion",
    "ar": "صحابي أنصاري"
  },
  "story": {
    "en": "Ubadah ibn al-Samit was an Ansari Companion who took part in the pledges of al-Aqaba and transmitted hadith. He died around 34 AH / 654 CE.",
    "ar": "عبادة بن الصامت صحابي أنصاري، شهد بيعة العقبة، وروى الحديث، وتوفي نحو ٣٤هـ/٦٥٤م."
  },
  "refs": [
    {
      "label": "Wikipedia — عباده بن الصامت",
      "url": "https://en.wikipedia.org/wiki/Ubadah_ibn_al-Samit"
    }
  ]
},
{
  "id": "ibn-al-roumi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن الرومي",
  "en": "Ibn Al Roumi Street",
  "meaning": {
    "en": "An Abbasid poet",
    "ar": "شاعر عباسي"
  },
  "story": {
    "en": "Ibn al-Rumi, Ali ibn al-Abbas ibn Jurayj (221–283 AH / 836–896 CE), was an Abbasid poet known for descriptive and satirical verse.",
    "ar": "ابن الرومي، علي بن العباس بن جريج (٢٢١–٢٨٣هـ/٨٣٦–٨٩٦م)، شاعر عباسي عُرف بشعره الوصفي والهجائي."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن الرومي",
      "url": "https://en.wikipedia.org/wiki/Ibn_al-Rumi"
    }
  ]
},
{
  "id": "ahmad-bin-hanbal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع احمد بن حنبل",
  "en": "Ahmad Bin Hanbal Street",
  "meaning": {
    "en": "A hadith scholar, founder of the Hanbali school",
    "ar": "محدّث وفقيه، مؤسس المذهب الحنبلي"
  },
  "story": {
    "en": "Ahmad ibn Hanbal (164–241 AH / 780–855 CE) was a hadith scholar and jurist, founder of the Hanbali school and compiler of the Musnad.",
    "ar": "أحمد بن حنبل (١٦٤–٢٤١هـ/٧٨٠–٨٥٥م) محدّث وفقيه، مؤسس المذهب الحنبلي، وصاحب «المسند»."
  },
  "refs": [
    {
      "label": "Wikipedia — احمد بن حنبل",
      "url": "https://en.wikipedia.org/wiki/Ahmad_ibn_Hanbal"
    }
  ]
},
{
  "id": "al-zubair-bin-al-awam-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الزبير بن العوام",
  "en": "Al Zubair Bin Al 'Awam Street",
  "meaning": {
    "en": "A Companion, son of the Prophet's aunt",
    "ar": "صحابي وابن عمة النبي"
  },
  "story": {
    "en": "Al-Zubayr ibn al-Awwam (28 BH – 36 AH / 594–656 CE) was a Qurayshi Companion, the son of the Prophet's aunt, who took part in the early campaigns.",
    "ar": "الزبير بن العوام (٢٨ ق.هـ–٣٦هـ/٥٩٤–٦٥٦م) صحابي من قريش، وابن عمة النبي، شهد الغزوات والوقائع في صدر الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — الزبير بن العوام",
      "url": "https://en.wikipedia.org/wiki/Zubayr_ibn_al-Awwam"
    }
  ]
},
{
  "id": "zayd-bin-harithah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زيد بن حارثه",
  "en": "Zayd Bin Harithah Street",
  "meaning": {
    "en": "A Companion, killed at Mu'tah",
    "ar": "صحابي قُتل في مؤتة"
  },
  "story": {
    "en": "Zayd ibn Haritha (d. 8 AH / 629 CE) was a Companion close to the Prophet and a commander, killed at the battle of Mu'tah.",
    "ar": "زيد بن حارثة (ت ٨هـ/٦٢٩م) صحابي من المقرّبين إلى النبي وقائد، قُتل في غزوة مؤتة."
  },
  "refs": [
    {
      "label": "Wikipedia — زيد بن حارثه",
      "url": "https://en.wikipedia.org/wiki/Zayd_ibn_Haritha_al-Kalbi"
    }
  ]
},
{
  "id": "abdulrahman-bin-awf-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبدالرحمن بن عوف",
  "en": "Abdulrahman Bin 'Awf Street",
  "meaning": {
    "en": "A Companion and merchant",
    "ar": "صحابي وتاجر من قريش"
  },
  "story": {
    "en": "Abd al-Rahman ibn Awf (d. 32 AH / 652 CE) was a Qurayshi Companion and merchant, among the early Muslims, and a member of the council that chose Uthman ibn Affan.",
    "ar": "عبد الرحمن بن عوف (ت ٣٢هـ/٦٥٢م) صحابي وتاجر من قريش، من أوائل المسلمين، وعضو الشورى التي اختارت عثمان بن عفان."
  },
  "refs": [
    {
      "label": "Wikipedia — عبدالرحمن بن عوف",
      "url": "https://en.wikipedia.org/wiki/Abd_al-Rahman_ibn_Awf"
    }
  ]
},
{
  "id": "abdullah-bin-rawahah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبدالله بن رواحه",
  "en": "Abdullah Bin Rawahah Street",
  "meaning": {
    "en": "An Ansari Companion and poet",
    "ar": "صحابي أنصاري وشاعر"
  },
  "story": {
    "en": "Abdullah ibn Rawahah (d. 8 AH / 629 CE) was an Ansari Companion and poet, one of the commanders at Mu'tah, where he was killed.",
    "ar": "عبد الله بن رواحة (ت ٨هـ/٦٢٩م) صحابي أنصاري وشاعر، من قادة مؤتة، وقُتل فيها."
  },
  "refs": [
    {
      "label": "Wikipedia — عبدالله بن رواحه",
      "url": "https://en.wikipedia.org/wiki/Abd_Allah_ibn_Rawahah"
    }
  ]
},
{
  "id": "uqbah-bin-nafi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عقبه بن نافع",
  "en": "Uqbah Bin Nafi' Street",
  "meaning": {
    "en": "A commander in North Africa, founder of Kairouan",
    "ar": "قائد في شمال إفريقيا ومؤسس القيروان"
  },
  "story": {
    "en": "Uqbah ibn Nafi (d. 63 AH / 683 CE) was a commander whose campaigns extended across North Africa, and he founded Kairouan.",
    "ar": "عقبة بن نافع (ت ٦٣هـ/٦٨٣م) قائد ارتبطت سيرته بالتوسع في شمال إفريقيا، وأسّس القيروان."
  },
  "refs": [
    {
      "label": "Wikipedia — عقبه بن نافع",
      "url": "https://en.wikipedia.org/wiki/Uqba_ibn_Nafi"
    }
  ]
},
{
  "id": "iben-al-qaiem-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن القيم",
  "en": "Iben Al Qaiem Street",
  "meaning": {
    "en": "A Hanbali scholar and jurist",
    "ar": "عالم وفقيه حنبلي"
  },
  "story": {
    "en": "Ibn Qayyim al-Jawziyya, Muhammad ibn Abi Bakr (691–751 AH / 1292–1350 CE), was a Hanbali jurist who wrote on jurisprudence, Quranic exegesis and ethics.",
    "ar": "ابن قيم الجوزية، محمد بن أبي بكر (٦٩١–٧٥١هـ/١٢٩٢–١٣٥٠م)، فقيه حنبلي كتب في الفقه والتفسير والسلوك."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن القيم",
      "url": "https://en.wikipedia.org/wiki/Ibn_Qayyim_al-Jawziyya"
    }
  ]
},
{
  "id": "ahmad-bin-majid-road",
  "emirate": "ras-al-khaimah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع احمد بن ماجد",
  "en": "Ahmad Bin Majid Road",
  "meaning": {
    "en": "A navigator from Julfar",
    "ar": "ملّاح من جلفار"
  },
  "story": {
    "en": "Ahmad ibn Majid (c. 836–906 AH / 1432–1500 CE) was a navigator and geographer from Julfar, known for works on navigation in the Indian Ocean.",
    "ar": "أحمد بن ماجد (نحو ٨٣٦–٩٠٦هـ/١٤٣٢–١٥٠٠م) ملّاح وجغرافي من جلفار، اشتهر بمؤلفاته في الملاحة في المحيط الهندي."
  },
  "refs": [
    {
      "label": "Wikipedia — احمد بن ماجد",
      "url": "https://en.wikipedia.org/wiki/Ahmad_ibn_Majid"
    }
  ]
},
{
  "id": "osama-bin-zaid-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع اسامه بن زيد",
  "en": "Osama Bin Zaid Street",
  "meaning": {
    "en": "A Companion, son of Zayd ibn Haritha",
    "ar": "صحابي وابن زيد بن حارثة"
  },
  "story": {
    "en": "Usama ibn Zayd (d. c. 54 AH / 674 CE) was a Companion and the son of Zayd ibn Haritha; the Prophet appointed him to lead an army near the end of his life.",
    "ar": "أسامة بن زيد (ت نحو ٥٤هـ/٦٧٤م) صحابي وابن زيد بن حارثة، أمّره النبي على جيش في آخر حياته."
  },
  "refs": [
    {
      "label": "Wikipedia — اسامه بن زيد",
      "url": "https://islam.museum/en/person/usama-ibn-zayd/"
    }
  ]
},
{
  "id": "al-khaleel-bin-ahmed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الخليل بن احمد",
  "en": "Al Khaleel Bin Ahmed Street",
  "meaning": {
    "en": "A linguist, founder of Arabic prosody",
    "ar": "لغوي واضع علم العَروض"
  },
  "story": {
    "en": "Al-Khalil ibn Ahmad (c. 100–175 AH / 718–791 CE), from the Azd of Oman, was a linguist who set out Arabic prosody and is credited with the lexicon Kitab al-Ayn.",
    "ar": "الخليل بن أحمد (نحو ١٠٠–١٧٥هـ/٧١٨–٧٩١م) من أزد عُمان، لغوي وضع علم العَروض، ويُنسب إليه معجم «العين»."
  },
  "refs": [
    {
      "label": "Wikipedia — الخليل بن احمد",
      "url": "https://www.arab-ency.com.sy/details/5843"
    }
  ]
},
{
  "id": "al-ezz-bin-abdullsalam-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع العز بن عبد السلام",
  "en": "Al Ezz Bin Abdullsalam Street",
  "meaning": {
    "en": "A Shafi'i jurist and theologian",
    "ar": "فقيه شافعي وأصولي"
  },
  "story": {
    "en": "Izz al-Din ibn Abd al-Salam (577–660 AH / 1181–1262 CE) was a Shafi'i jurist and theologian who wrote on jurisprudence and the purposes of the law.",
    "ar": "العز بن عبد السلام (٥٧٧–٦٦٠هـ/١١٨١–١٢٦٢م) فقيه شافعي وأصولي، له مؤلفات في الفقه ومقاصد الشريعة."
  },
  "refs": [
    {
      "label": "Wikipedia — العز بن عبد السلام",
      "url": "https://en.wikipedia.org/wiki/Izz_al-Din_ibn_%27Abd_al-Salam"
    }
  ]
},
{
  "id": "al-muhallab-bin-abi-sufrah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع المهلب بن أبي صفرة",
  "en": "Al Muhallab Bin Abi Sufrah Street",
  "meaning": {
    "en": "A commander in Persia and Khurasan",
    "ar": "قائد في فارس وخراسان"
  },
  "story": {
    "en": "Al-Muhallab ibn Abi Sufra (c. 42–82 AH / 632–702 CE) was a commander who campaigned in Persia, Sistan and Khurasan, and held command there.",
    "ar": "المهلب بن أبي صفرة (نحو ٤٢–٨٢هـ/٦٣٢–٧٠٢م) قائد حملات في فارس وسجستان وخراسان، وتولّى قيادة فيها."
  },
  "refs": [
    {
      "label": "Wikipedia — المهلب بن أبي صفرة",
      "url": "https://en.wikipedia.org/wiki/Al-Muhallab_ibn_Abi_Sufra"
    }
  ]
},
{
  "id": "anas-bin-al-nadheer-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أنس بن النضر",
  "en": "Anas Bin Al Nadheer Street",
  "meaning": {
    "en": "An Ansari Companion killed at Uhud",
    "ar": "صحابي أنصاري قُتل في أُحد"
  },
  "story": {
    "en": "Anas ibn al-Nadr was an Ansari Companion of the Banu Khazraj, killed at the battle of Uhud.",
    "ar": "أنس بن النضر صحابي أنصاري من بني الخزرج، قُتل في غزوة أُحد."
  },
  "refs": [
    {
      "label": "Wikipedia — أنس بن النضر",
      "url": "https://islam.museum/en/person/anas-ibn-al-nadr/"
    }
  ]
},
{
  "id": "anas-bin-malik-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أنس بن مالك",
  "en": "Anas Bin Malik Street",
  "meaning": {
    "en": "A Companion who served the Prophet",
    "ar": "صحابي خدم النبي وروى عنه"
  },
  "story": {
    "en": "Anas ibn Malik (c. 10–93 AH / 612–712 CE) was an Ansari Companion who served the Prophet, transmitted many hadith, and later lived in Basra.",
    "ar": "أنس بن مالك (نحو ١٠–٩٣هـ/٦١٢–٧١٢م) صحابي أنصاري خدم النبي وروى عنه كثيراً، وأقام في البصرة."
  },
  "refs": [
    {
      "label": "Wikipedia — أنس بن مالك",
      "url": "https://en.wikipedia.org/wiki/Anas_ibn_Malik"
    }
  ]
},
{
  "id": "aws-bin-al-samit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أوس بن الصامت",
  "en": "Aws Bin Al Samit Street",
  "meaning": {
    "en": "An Ansari Companion",
    "ar": "صحابي أنصاري"
  },
  "story": {
    "en": "Aws ibn al-Samit was an Ansari Companion, husband of Khawla bint Tha'laba, and his name is connected with accounts of the revelation of Surat al-Mujadila.",
    "ar": "أوس بن الصامت صحابي أنصاري، زوج خولة بنت ثعلبة، ويرتبط اسمه بروايات نزول سورة المجادلة."
  },
  "refs": []
},
{
  "id": "thabit-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابت بن قيس",
  "en": "Thabit Bin Qays Street",
  "meaning": {
    "en": "An Ansari Companion, the Prophet's orator",
    "ar": "صحابي أنصاري خطيب"
  },
  "story": {
    "en": "Thabit ibn Qays was an Ansari Companion known for his oratory; biographical works describe him as the Prophet's orator.",
    "ar": "ثابت بن قيس صحابي من الأنصار عُرف بخطابته، وتذكر كتب السيرة أنه كان خطيب النبي."
  },
  "refs": []
},
{
  "id": "amer-bin-rabi-ah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عامر بن ربيعة",
  "en": "Amer Bin Rabi'ah Street",
  "meaning": {
    "en": "An early Companion",
    "ar": "صحابي من السابقين"
  },
  "story": {
    "en": "Amir ibn Rabi'ah was among the early Muslims; he emigrated to Abyssinia and later to Medina, and biographical works record his hadith transmissions.",
    "ar": "عامر بن ربيعة من السابقين إلى الإسلام، هاجر إلى الحبشة ثم إلى المدينة، وتذكر كتب التراجم روايته للحديث."
  },
  "refs": []
},
{
  "id": "amer-bin-fuhairah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عامر بن فهيرة",
  "en": "Amer Bin Fuhairah Street",
  "meaning": {
    "en": "A Companion, killed at Bi'r Ma'una",
    "ar": "صحابي قُتل في بئر معونة"
  },
  "story": {
    "en": "Amir ibn Fuhayrah was a Companion and a freedman of Abu Bakr who took part in the migration and was killed at Bi'r Ma'una in 3 AH / 625 CE.",
    "ar": "عامر بن فهيرة صحابي ومولى أبي بكر، شارك في الهجرة، وقُتل في بئر معونة سنة ٣هـ/٦٢٥م."
  },
  "refs": []
},
{
  "id": "umayr-bin-abi-waqqas-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عمير بن أبي وقاص",
  "en": "Umayr Bin Abi Waqqas Street",
  "meaning": {
    "en": "A Companion, killed at Badr",
    "ar": "صحابي قُتل في بدر"
  },
  "story": {
    "en": "Umayr ibn Abi Waqqas was a Companion from the Banu Zuhrah and a brother of Sa'd ibn Abi Waqqas; accounts report his death at the battle of Badr.",
    "ar": "عمير بن أبي وقاص صحابي من بني زهرة وأخو سعد بن أبي وقاص، وتذكر الروايات مقتله في غزوة بدر."
  },
  "refs": []
},
{
  "id": "al-hubab-bin-al-mundhir-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحباب بن المنذر",
  "en": "Al Hubab Bin Al Mundhir Street",
  "meaning": {
    "en": "An Ansari Companion at Badr",
    "ar": "صحابي أنصاري شهد بدراً"
  },
  "story": {
    "en": "Al-Hubab ibn al-Mundhir was an Ansari Companion; accounts of the Prophet's campaigns record his presence at Badr and his advice on where the army should camp.",
    "ar": "الحباب بن المنذر صحابي أنصاري، تذكر روايات السيرة مشاركته في بدر ومشورته في موضع نزول الجيش."
  },
  "refs": []
},
{
  "id": "al-sa-ab-bin-jothama-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الصعب بن جثامة",
  "en": "Al Sa'ab Bin Jothama Street",
  "meaning": {
    "en": "A Companion named in hadith",
    "ar": "صحابي ورد ذكره في الحديث"
  },
  "story": {
    "en": "Al-Sa'b ibn Jathama was a Companion named in hadith literature.",
    "ar": "الصعب بن جثامة صحابي ورد اسمه في روايات الحديث."
  },
  "refs": []
},
{
  "id": "al-munthir-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع المنذر بن عمرو",
  "en": "Al Munthir Bin 'Amr Street",
  "meaning": {
    "en": "An Ansari Companion, leader at Bi'r Ma'una",
    "ar": "صحابي أنصاري من قادة بئر معونة"
  },
  "story": {
    "en": "Al-Mundhir ibn Amr was an Ansari Companion described in biographical works as one of the leaders of the expedition to Bi'r Ma'una in 4 AH / 625 CE.",
    "ar": "المنذر بن عمرو صحابي أنصاري، تذكر كتب السيرة أنه من قادة بعثة بئر معونة سنة ٤هـ/٦٢٥م."
  },
  "refs": []
},
{
  "id": "al-nu-man-bin-muqren-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع النعمان بن مقرن",
  "en": "Al Nu'man Bin Muqren Street",
  "meaning": {
    "en": "A Companion and commander, killed at Nahavand",
    "ar": "صحابي وقائد قُتل في نهاوند"
  },
  "story": {
    "en": "Al-Nu'man ibn Muqrin was a Companion and commander associated with the campaigns in Persia; he was killed at the battle of Nahavand in 21 AH / 642 CE.",
    "ar": "النعمان بن مقرن صحابي وقائد ارتبط اسمه بفتوح فارس، وقُتل في معركة نهاوند سنة ٢١هـ/٦٤٢م."
  },
  "refs": []
},
{
  "id": "bacheer-bin-sa-d-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بشير بن سعد",
  "en": "Bacheer Bin Sa'd Street",
  "meaning": {
    "en": "An Ansari Companion",
    "ar": "صحابي أنصاري"
  },
  "story": {
    "en": "Bashir ibn Sa'd was an Ansari Companion of the Banu Khazraj, mentioned in accounts of the early Muslim community.",
    "ar": "بشير بن سعد صحابي أنصاري من بني الخزرج، ورد ذكره في أخبار صدر الإسلام."
  },
  "refs": []
},
{
  "id": "soraqah-bin-amr-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سراقة بن عمرو",
  "en": "Soraqah Bin Amr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “سراقة بن عمرو” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «سراقة بن عمرو» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "nawfal-bin-abdullah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع نوفل بن عبدالله",
  "en": "Nawfal Bin Abdullah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “نوفل بن عبدالله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «نوفل بن عبدالله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-harith-bin-anas-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحارث بن أنس",
  "en": "Al Harith Bin Anas Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحارث بن أنس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحارث بن أنس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-taher-bin-abi-hala-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الطاهر بن أبي هالة",
  "en": "Al Taher Bin Abi Hala Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الطاهر بن أبي هالة” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الطاهر بن أبي هالة» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-tufail-bin-al-hareth-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الطفيل بن الحارث",
  "en": "Al Tufail Bin Al Hareth Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الطفيل بن الحارث” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الطفيل بن الحارث» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-nu-man-bin-ouf-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع النعمان بن عوف",
  "en": "Al Nu'man Bin Ouf Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “النعمان بن عوف” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «النعمان بن عوف» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "an-nu-man-bin-malik-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع النعمان بن مالك",
  "en": "An Nu'man Bin Malik Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “النعمان بن مالك” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «النعمان بن مالك» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bilal-bin-abi-bakra-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بلال بن أبي بكرة",
  "en": "Bilal Bin Abi Bakra Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بلال بن أبي بكرة” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بلال بن أبي بكرة» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "tameem-bin-ya-ar-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع تميم بن يعار",
  "en": "Tameem Bin Ya'ar Street",
  "meaning": {
    "en": "An Ansari Companion who fought at Badr and Uhud",
    "ar": "صحابي أنصاري شهد بدراً وأُحداً"
  },
  "story": {
    "en": "Tamim ibn Ya'ar was an Ansari Companion of the Khazraj who fought at Badr and Uhud.",
    "ar": "تميم بن يعار بن قيس بن عدي الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد صلى الل."
  },
  "refs": [
    {
      "label": "Wikipedia — تميم بن يعار",
      "url": "https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D9%8A%D9%85_%D8%A8%D9%86_%D9%8A%D8%B9%D8%A7%D8%B1"
    }
  ]
},
{
  "id": "thabit-bin-khalid-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ثابت بن خالد",
  "en": "Thabit Bin Khalid Street",
  "meaning": {
    "en": "An Ansari Companion who fought at Badr and Uhud",
    "ar": "صحابي أنصاري شهد بدراً وأُحداً"
  },
  "story": {
    "en": "Thabit ibn Khalid was an Ansari Companion of the Khazraj who fought at Badr and Uhud; the sources differ on whether he was killed at Bi'r Ma'una or at Yamama.",
    "ar": "ثابت بن خالد بن النعمان (المتوفي سنة 4 هـ) صحابي من الأنصار من بني غنم بن مالك بن النجار من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — ثابت بن خالد",
      "url": "https://ar.wikipedia.org/wiki/%D8%AB%D8%A7%D8%A8%D8%AA_%D8%A8%D9%86_%D8%AE%D8%A7%D9%84%D8%AF"
    }
  ]
},
{
  "id": "hatib-bin-abi-balta-ah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حاطب بن أبي بلتعة",
  "en": "Hatib Bin Abi Balta'ah Street",
  "meaning": {
    "en": "A Companion, the Prophet's envoy to Egypt",
    "ar": "صحابي ورسول النبي إلى المقوقس"
  },
  "story": {
    "en": "Hatib ibn Abi Balta'a was a Companion who fought at Badr and served as the Prophet's envoy to the Muqawqis of Egypt.",
    "ar": "حاطب بن أبي بلتعة اللخمي صحابي بدري، أسلم وهاجر إلى المدينة المنورة، وشارك مع النبي محمد في غزواته كلها، وكان رسوله إلى المقوقس عظيم مصر."
  },
  "refs": [
    {
      "label": "Wikipedia — حاطب بن أبي بلتعة",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%A7%D8%B7%D8%A8_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%A8%D9%84%D8%AA%D8%B9%D8%A9"
    }
  ]
},
{
  "id": "hudhayfah-bin-al-yaman-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حُذَيفة بن اليَمان",
  "en": "Hudhayfah Bin Al Yaman Street",
  "meaning": {
    "en": "A Companion who settled in Medina",
    "ar": "صحابي عاش في المدينة المنورة"
  },
  "story": {
    "en": "Hudhayfa ibn al-Yaman was a Companion born in Mecca who settled in Medina and died at al-Mada'in in 36 AH.",
    "ar": "حُذَيْفَةُ بْنُ الْيَمَانِ العبسي الغطفاني القيسي، صحابي ولد في مكة وعاش في المدينة المنورة ومات سنة 36 هجرية في المدائن."
  },
  "refs": [
    {
      "label": "Wikipedia — حذيفة بن اليمان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%B0%D9%8A%D9%81%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D9%8A%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "raf-a-bin-al-mua-ala-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع رافع بن المعلى",
  "en": "Raf'a Bin Al Mua'ala Street",
  "meaning": {
    "en": "An Ansari Companion killed at Badr",
    "ar": "صحابي أنصاري استُشهد في بدر"
  },
  "story": {
    "en": "Rafi' ibn al-Mu'alla was an Ansari Companion of the Khazraj who was killed at Badr.",
    "ar": "الصحابي رافع بن المعلى ، من الأنصار من بني حبيب بن عبد حارثة من الخزرج، شهد غزوة بدر ، واستشهد فيها."
  },
  "refs": [
    {
      "label": "Wikipedia — رافع بن المعلى",
      "url": "https://ar.wikipedia.org/wiki/%D8%B1%D8%A7%D9%81%D8%B9_%D8%A8%D9%86_%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%89"
    }
  ]
},
{
  "id": "ziyad-bin-labeed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زياد بن لبيد",
  "en": "Ziyad Bin Labeed Street",
  "meaning": {
    "en": "An Ansari Companion, appointed over Hadramawt",
    "ar": "صحابي أنصاري استعمله النبي على حضرموت"
  },
  "story": {
    "en": "Ziyad ibn Labid was an Ansari Companion who took the second pledge of Aqaba, fought at Badr and Uhud, and was appointed by the Prophet over Hadramawt.",
    "ar": "زِيَاد بن لَبِيد صحابي من الأنصار، شهد بيعة العقبة الثانية، وشهد بدرًا وأحدًا والخندق وباقي المشاهد، استعمله النبي على حضرموت، وشارك في حروب الردة، وتوفي في أول خلافة معاوية سنة إحدى وأربعين."
  },
  "refs": [
    {
      "label": "Wikipedia — زياد بن لبيد",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D8%A7%D8%AF_%D8%A8%D9%86_%D9%84%D8%A8%D9%8A%D8%AF"
    }
  ]
},
{
  "id": "zayd-bin-wade-ah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زيد بن وديعة",
  "en": "Zayd Bin Wade'ah Street",
  "meaning": {
    "en": "An Ansari Companion who fought at Badr and Uhud",
    "ar": "صحابي أنصاري شهد بدراً وأُحداً"
  },
  "story": {
    "en": "Zayd ibn Wadi'a ibn Amr al-Khazraji was an Ansari Companion of the Khazraj who fought alongside the Prophet at Badr and Uhud.",
    "ar": "زيد بن وديعة بن عمرو بن قيس الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد غزوة بدر وغزوة أحد."
  },
  "refs": [
    {
      "label": "Wikipedia — زيد بن وديعة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D8%AF_%D8%A8%D9%86_%D9%88%D8%AF%D9%8A%D8%B9%D8%A9"
    }
  ]
},
{
  "id": "salim-bin-umayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سالِم بن عُمَير",
  "en": "Salim Bin 'Umayr Street",
  "meaning": {
    "en": "A Companion of the Aws who fought at Badr",
    "ar": "صحابي من الأوس شهد بدراً"
  },
  "story": {
    "en": "Salim ibn Umayr was a Companion of the Aws who took the pledge of Aqaba and fought at Badr.",
    "ar": "سالم بن عمير صحابي من بني ثعلبة بن عمرو بن عوف من الأوس، قيل اسمه سالم بن عمرو."
  },
  "refs": [
    {
      "label": "Wikipedia — سالم بن عمير",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%A7%D9%84%D9%85_%D8%A8%D9%86_%D8%B9%D9%85%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "suraqah-bin-malik-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سُراقة بن مالِك",
  "en": "Suraqah Bin Malik Street",
  "meaning": {
    "en": "A chief of Banu Mudlij",
    "ar": "سيد بني مدلج"
  },
  "story": {
    "en": "Suraqa ibn Malik was a chief of Banu Mudlij who tracked the Prophet during the migration and later embraced Islam; he died in 24 AH.",
    "ar": "سراقة بن مالك المدلجي الكناني ، (24 هـ - 645 م) سيد بني مدلج وأحد أشراف قبيلة كنانة وصحابي جليل، قائف يقتص الأثر."
  },
  "refs": [
    {
      "label": "Wikipedia — سراقة بن مالك المدلجي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B1%D8%A7%D9%82%D8%A9_%D8%A8%D9%86_%D9%85%D8%A7%D9%84%D9%83_%D8%A7%D9%84%D9%85%D8%AF%D9%84%D8%AC%D9%8A"
    }
  ]
},
{
  "id": "sa-d-bin-ubadah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سَعد بن عُبادَه",
  "en": "Sa'd Bin 'Ubadah Street",
  "meaning": {
    "en": "The leader of the Khazraj",
    "ar": "زعيم الخزرج"
  },
  "story": {
    "en": "Sa'd ibn Ubada was the leader of the Khazraj and one of the chiefs at Aqaba.",
    "ar": "سَعْدُ بْنُ عُبَادَةَ اَلسَّاعِدِيُّ اَلْخَزْرَجِيُّ اَلْأَنْصَارِيُّ، أَبُو ثَابِتٍ."
  },
  "refs": [
    {
      "label": "Wikipedia — سعد بن عبادة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D8%AF_%D8%A8%D9%86_%D8%B9%D8%A8%D8%A7%D8%AF%D8%A9"
    }
  ]
},
{
  "id": "salma-bint-umays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سَلمَى بنت عُمَيس",
  "en": "Salma Bint 'Umays Street",
  "meaning": {
    "en": "A Companion, wife of Hamza",
    "ar": "صحابية زوجة حمزة بن عبد المطلب"
  },
  "story": {
    "en": "Salma bint Umays was a Companion and the wife of Hamza ibn Abd al-Muttalib.",
    "ar": "سَلْمَى بِنْتُ عُمَيْسٍ الخَثْعَمِيَّة صحابية، أسلمت قديمًا مع أختها أسماءَ بنتِ عُمَيْس."
  },
  "refs": [
    {
      "label": "Wikipedia — سلمى بنت عميس",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%85%D9%89_%D8%A8%D9%86%D8%AA_%D8%B9%D9%85%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "sleem-bin-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سليم بن الحارث",
  "en": "Sleem Bin Al Harith Street",
  "meaning": {
    "en": "An Ansari Companion who fought at Badr and Uhud",
    "ar": "صحابي أنصاري شهد بدراً وأُحداً"
  },
  "story": {
    "en": "Sulaym ibn al-Harith al-Khazraji was an Ansari Companion of the Khazraj who fought with the Prophet at Badr and Uhud, and was killed at Uhud.",
    "ar": "سليم بن الحارث بن ثعلبة بن كعب بن عبد الأشهل الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد غزوة بدر وغزوة أحد وقُتِل فيها شهيداً."
  },
  "refs": [
    {
      "label": "Wikipedia — سليم بن الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%8A%D9%85_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "sahl-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سَهل بن قيس",
  "en": "Sahl Bin Qays Street",
  "meaning": {
    "en": "An Ansari Companion killed at Uhud",
    "ar": "صحابي أنصاري استُشهد في أُحد"
  },
  "story": {
    "en": "Sahl ibn Qays was an Ansari Companion of the Khazraj who fought at Badr and was killed at Uhud.",
    "ar": "سهل بن قيس بن أبي كعب الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد صلى الله عليه وسلم غزوة بدر."
  },
  "refs": [
    {
      "label": "Wikipedia — سهل بن قيس",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%87%D9%84_%D8%A8%D9%86_%D9%82%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "suhayb-bin-sinan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع صُهَيب بن سِنان",
  "en": "Suhayb Bin Sinan Street",
  "meaning": {
    "en": "Among the earliest Muslims, known as al-Rumi",
    "ar": "من السابقين إلى الإسلام، يُعرف بالرومي"
  },
  "story": {
    "en": "Suhayb ibn Sinan, known as al-Rumi, was among the earliest Muslims and left his wealth behind to migrate.",
    "ar": "أَبُو يَحيَى صُهَيبُ بنُ سِنَان بنُ مَالِكِ بنُ عَبدِ عَمرو النَّمِريُّ الرُّومِيّ صحابي ومولى لبني تيم بن مُرّة."
  },
  "refs": [
    {
      "label": "Wikipedia — صهيب بن سنان",
      "url": "https://ar.wikipedia.org/wiki/%D8%B5%D9%87%D9%8A%D8%A8_%D8%A8%D9%86_%D8%B3%D9%86%D8%A7%D9%86"
    }
  ]
},
{
  "id": "talhah-bin-ubaydallah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع طلحة بن عبيد الله",
  "en": "Talhah Bin 'Ubaydallah Street",
  "meaning": {
    "en": "One of the ten promised Paradise",
    "ar": "أحد العشرة المبشرين بالجنة"
  },
  "story": {
    "en": "Talha ibn Ubayd Allah (28 BH – 36 AH / 594–656 CE) was one of the ten promised Paradise and was killed at the Battle of the Camel.",
    "ar": "طَلْحَةُ بْنُ عُبَيْدِ اللَّٰه التَّيمي القُرَشي (28 ق.هـ - 36 هـ / 594 - 656م)، أحد العشرة المبشرين بالجنة، ومن السابقين الأولين إلى الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — طلحة بن عبيد الله",
      "url": "https://ar.wikipedia.org/wiki/%D8%B7%D9%84%D8%AD%D8%A9_%D8%A8%D9%86_%D8%B9%D8%A8%D9%8A%D8%AF_%D8%A7%D9%84%D9%84%D9%87"
    }
  ]
},
{
  "id": "dhabia-bint-al-barra-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ظبية بنت البراء",
  "en": "Dhabia Bint Al Barra Street",
  "meaning": {
    "en": "A woman Companion, wife of Abu Qatada",
    "ar": "صحابية زوجة أبي قتادة"
  },
  "story": {
    "en": "Zabya bint al-Bara was a woman Companion, the wife of Abu Qatada, and was known as Umm Bishr.",
    "ar": "ظبية بنت البراء بن معرور امرأة أبي قتادة الأنصاري، من صحابيات رسول الله."
  },
  "refs": [
    {
      "label": "Wikipedia — ظبية بنت البراء",
      "url": "https://ar.wikipedia.org/wiki/%D8%B8%D8%A8%D9%8A%D8%A9_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%A1"
    }
  ]
},
{
  "id": "asem-bin-qaiss-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عاصم بن قيس",
  "en": "Asem Bin Qaiss Street",
  "meaning": {
    "en": "An Ansari Companion of the Aws",
    "ar": "صحابي أنصاري من الأوس"
  },
  "story": {
    "en": "Asim ibn Qays ibn Thabit al-Awsi was an Ansari Companion of the Aws who fought with the Prophet at Badr and Uhud.",
    "ar": "عاصم بن قيس بن ثابت بن النعمان بن أمية الأوسي الأنصاري صحابي جليل من قبيلة الأوس من الأنصار شهد مع النبي محمد غزوة بدر وغزوة أحد."
  },
  "refs": [
    {
      "label": "Wikipedia — عاصم بن قيس",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A7%D8%B5%D9%85_%D8%A8%D9%86_%D9%82%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "ubadah-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبادة بن قيس",
  "en": "Ubadah Bin Qays Street",
  "meaning": {
    "en": "A Companion killed at Mu'tah",
    "ar": "صحابي استُشهد في مؤتة"
  },
  "story": {
    "en": "Ubada ibn Qays was a Companion who fought at Badr, Uhud, the Trench and Khaybar, and was killed at Mu'tah in 8 AH.",
    "ar": "عُبادة بن قيس (المتوفي سنة 8 هـ) صحابي من بني كعب بن الخزرج بن الحارث بن الخزرج، شهد غزوات بدر وأحد والخندق وخيبر، وصلح الحديبية، وقُتل في غزوة مؤتة."
  },
  "refs": [
    {
      "label": "Wikipedia — عبادة بن قيس",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%A7%D8%AF%D8%A9_%D8%A8%D9%86_%D9%82%D9%8A%D8%B3"
    }
  ]
},
{
  "id": "uthman-bin-talhah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عُثمان بن طَلحة",
  "en": "Uthman Bin Talhah Street",
  "meaning": {
    "en": "The custodian of the Kaaba's key",
    "ar": "حاجب الكعبة"
  },
  "story": {
    "en": "Uthman ibn Talha was the keeper of the Kaaba's key, who emigrated with Khalid ibn al-Walid and later accepted Islam.",
    "ar": "عثمان بن طلحة بن أبي طلحة عبد الله بن عبد العزى بن عبد الدار العبدري الحجبي ، حاجب البيت الحرام وأحد المهاجرين هاجر مع خالد بن الوليد."
  },
  "refs": [
    {
      "label": "Wikipedia — عثمان بن طلحة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AB%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B7%D9%84%D8%AD%D8%A9"
    }
  ]
},
{
  "id": "uthman-bin-madh-oun-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عُثمان بن مَظعُون",
  "en": "Uthman Bin Madh'oun Street",
  "meaning": {
    "en": "Among the earliest Muslims",
    "ar": "من السابقين إلى الإسلام"
  },
  "story": {
    "en": "Uthman ibn Maz'un (d. 3 AH) was among the earliest Muslims and the first of the emigrants to die in Medina.",
    "ar": "أَبُو السَّائِبِ عُثْمَانُ بْنُ مَظْعُونٍ الجُمَحِيُّ (المتوفى في شعبان سنة 3 هـ) صحابي بدري من السابقين إلى الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — عثمان بن مظعون",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AB%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D9%85%D8%B8%D8%B9%D9%88%D9%86"
    }
  ]
},
{
  "id": "odai-bin-hatem-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عدي بن حاتم",
  "en": "Odai Bin Hatem Street",
  "meaning": {
    "en": "A chief of the Tayy, son of Hatim al-Ta'i",
    "ar": "سيد من طيء وابن حاتم الطائي"
  },
  "story": {
    "en": "Adi ibn Hatim (52 BH – 68 AH / 572–687 CE) was a chief of the Tayy and the son of Hatim al-Ta'i.",
    "ar": "أَبُو طَرِيفٍ عَدِيُّ بْنُ حَاتِمِ بْنِ عَبْدِ اَللّٰهِ بْنِ سَعْدٍ اَلطَّائِيُّ (52 ق هـ - 68 هـ / 572 -687م) هو ابْنُ حاتِ."
  },
  "refs": [
    {
      "label": "Wikipedia — عدي بن حاتم الطائي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AF%D9%8A_%D8%A8%D9%86_%D8%AD%D8%A7%D8%AA%D9%85_%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%8A"
    }
  ]
},
{
  "id": "ata-a-bin-abi-rabbah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عَطاء بن أبي رَباح",
  "en": "Ata-a Bin Abi Rabbah Street",
  "meaning": {
    "en": "A jurist and hadith scholar of Mecca",
    "ar": "فقيه ومحدث من مكة"
  },
  "story": {
    "en": "Ata ibn Abi Rabah (27–114 AH / 647–732 CE) was a jurist and hadith scholar of Mecca.",
    "ar": "أبو محمد عطاء بن أبي رباح أسلم بن صفوان (27 هـ - رمضان 114 هـ / 647م - 732م) هو فقيه وعالم حديث."
  },
  "refs": [
    {
      "label": "Wikipedia — عطاء بن أبي رباح",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%B7%D8%A7%D8%A1_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%B1%D8%A8%D8%A7%D8%AD"
    }
  ]
},
{
  "id": "okasha-bin-muhssen-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عكاشة بن محصن",
  "en": "Okasha Bin Muhssen Street",
  "meaning": {
    "en": "A Companion killed in the Ridda wars",
    "ar": "صحابي استُشهد في حروب الردة"
  },
  "story": {
    "en": "Ukasha ibn Mihsan (d. 11 AH) was a Companion who fought at Badr and was killed in the Ridda wars at Buzakha.",
    "ar": "عُكَّاشةُ بْنُ مِحصَنٍ (المتوفى سنة 11 هـ) صحابي بدري من السابقين إلى الإسلام، ومن المهاجرين، أستشهد في حروب الردة في معركة بزاخة."
  },
  "refs": [
    {
      "label": "Wikipedia — عكاشة بن محصن",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%83%D8%A7%D8%B4%D8%A9_%D8%A8%D9%86_%D9%85%D8%AD%D8%B5%D9%86"
    }
  ]
},
{
  "id": "qutada-bin-al-nu-man-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع قتادة بن النعمان",
  "en": "Qutada Bin Al Nu'man Street",
  "meaning": {
    "en": "An Ansari Companion",
    "ar": "صحابي أنصاري"
  },
  "story": {
    "en": "Qatada ibn al-Nu'man was an Ansari Companion of the Prophet.",
    "ar": "الصحابي قتادة بن النعمان رضي الله عنه كان من السابقين للإسلام وأحد صحابة النبي."
  },
  "refs": [
    {
      "label": "Wikipedia — قتادة بن النعمان",
      "url": "https://ar.wikipedia.org/wiki/%D9%82%D8%AA%D8%A7%D8%AF%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "kulthoum-bin-husayn-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع كُلثُوم بن حُصَين",
  "en": "Kulthoum Bin Husayn Street",
  "meaning": {
    "en": "A Companion known as Abu Ruhm",
    "ar": "صحابي يُعرف بأبي رهم"
  },
  "story": {
    "en": "Kulthum ibn al-Husayn, known as Abu Ruhm, was a Companion who accepted Islam after the Prophet came to Medina and did not fight at Badr.",
    "ar": "أبو رُهْم كلثوم بن الحُصين بن عتبة بن خلف الغِفاري الكناني مشهور بكنيته، من صحابة النبي محمد، أسلم بعد قدوم النبي إلى المدينة، ولم يشهد غزوة بدر، شهد معركة أحد."
  },
  "refs": [
    {
      "label": "Wikipedia — كلثوم بن حصين الغفاري",
      "url": "https://ar.wikipedia.org/wiki/%D9%83%D9%84%D8%AB%D9%88%D9%85_%D8%A8%D9%86_%D8%AD%D8%B5%D9%8A%D9%86_%D8%A7%D9%84%D8%BA%D9%81%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "malik-bin-mas-oud-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مالك بن مسعود",
  "en": "Malik Bin Mas'oud Street",
  "meaning": {
    "en": "An Ansari Companion who fought at Badr and Uhud",
    "ar": "صحابي أنصاري شهد بدراً وأُحداً"
  },
  "story": {
    "en": "Malik ibn Mas'ud al-Khazraji was an Ansari Companion of the Khazraj who fought with the Prophet at Badr and Uhud.",
    "ar": "مالك بن مسعود بن اليدي بن عامر الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد غزوة بدر وغزوة أحد."
  },
  "refs": [
    {
      "label": "Wikipedia — مالك بن مسعود",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%A7%D9%84%D9%83_%D8%A8%D9%86_%D9%85%D8%B3%D8%B9%D9%88%D8%AF"
    }
  ]
},
{
  "id": "harithah-bin-an-nu-man-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حارِثة بن النُّعمان",
  "en": "Harithah Bin An Nu'man Street",
  "meaning": {
    "en": "An Ansari Companion who witnessed the campaigns",
    "ar": "صحابي أنصاري شهد المشاهد كلها"
  },
  "story": {
    "en": "Haritha ibn al-Nu'man was an Ansari Companion of the Khazraj who witnessed the Prophet's campaigns and died during Mu'awiya's caliphate.",
    "ar": "حارثة بن النعمان صحابي من الأنصار من بني غنم بن مالك بن النجار من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — حارثة بن النعمان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%A7%D8%B1%D8%AB%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "harithah-bin-suraqah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حارِثة بن سُراقة",
  "en": "Harithah Bin Suraqah Street",
  "meaning": {
    "en": "The first of the Ansar killed at Badr",
    "ar": "أول من قُتل من الأنصار في بدر"
  },
  "story": {
    "en": "Haritha ibn Suraqa was the first of the Ansar to be killed at Badr, in 2 AH.",
    "ar": "حارثة بن سراقة (المتوفي سنة 2 هـ) صحابي من بني عدي بن النجار من الخزرج. أسلم حارثة."
  },
  "refs": [
    {
      "label": "Wikipedia — حارثة بن سراقة",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%A7%D8%B1%D8%AB%D8%A9_%D8%A8%D9%86_%D8%B3%D8%B1%D8%A7%D9%82%D8%A9"
    }
  ]
},
{
  "id": "ahmad-shawqi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع احمد شوقي",
  "en": "Ahmad Shawqi Street",
  "meaning": {
    "en": "Egyptian poet",
    "ar": "شاعر وكاتب مسرحي مصري"
  },
  "story": {
    "en": "Ahmed Shawqi (1868–1932) was an Egyptian poet and playwright of Kurdish descent, one of the most famous poets of modern Arabic and titled the Prince of Poets.",
    "ar": "أحمد شوقي علي أحمد شوقي (1285- 1351 هـ / 1868- 1932 م) هو شاعر وكاتب مسرحي مصري من أصول كردية، يُعد من أشهر شعراء العربية في العصر الحديث، ولُقّب بـ «أمير الشعراء»."
  },
  "refs": [
    {
      "label": "Wikipedia — أحمد شوقي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%AD%D9%85%D8%AF_%D8%B4%D9%88%D9%82%D9%8A"
    }
  ]
},
{
  "id": "abu-hudhaifah-bin-atabah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابو حذيفه بن عتبه",
  "en": "Abu Hudhaifah Bin Atabah Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي من السابقين الأولين"
  },
  "story": {
    "en": "Abu Hudhayfah ibn Utbah (581–633) was a companion of Muhammad.",
    "ar": "أبو حذيفة بن عتبة بن ربيعة العبشمي القرشي (42 ق.هـ - 12 هـ/ 580- 633م) صحابي بدر."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو حذيفة بن عتبة",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%AD%D8%B0%D9%8A%D9%81%D8%A9_%D8%A8%D9%86_%D8%B9%D8%AA%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "al-fudayl-bin-iyad-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الفضيل بن عياض",
  "en": "Al Fudayl Bin 'Iyad Street",
  "meaning": {
    "en": "8th-century Islamic scholar",
    "ar": "عالم مسلم"
  },
  "story": {
    "en": "Al-Fudhayl bin 'Iyyadh (725–803) was an 8th-century Islamic scholar.",
    "ar": "الفضيل بن عياض، أحد أعلام أهل السنة في القرن الثاني الهجري."
  },
  "refs": [
    {
      "label": "Wikipedia — الفضيل بن عياض",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84_%D8%A8%D9%86_%D8%B9%D9%8A%D8%A7%D8%B6"
    }
  ]
},
{
  "id": "al-bara-a-bin-azib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع البراء بن عازب",
  "en": "Al Bara-a Bin 'Azib Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي"
  },
  "story": {
    "en": "Al-Bara' ibn Azib (600–690) was a companion of the Prophet Muhammad.",
    "ar": "أبو عمارة البراء بن عازب الأنصاري (المتوفى سنة 72هـ) ص."
  },
  "refs": [
    {
      "label": "Wikipedia — البراء بن عازب",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%A1_%D8%A8%D9%86_%D8%B9%D8%A7%D8%B2%D8%A8"
    }
  ]
},
{
  "id": "al-bara-a-bin-ma-rour-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع البراء بن معرور",
  "en": "Al Bara-a Bin Ma'rour Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "أحد النقباء الاثني عشر من الأنصار، أول من تكلم ليلة العقبة وأول من مات من النقباء"
  },
  "story": {
    "en": "Al-Bara ibn Marur (d. 622) was a companion of the Prophet Muhammad.",
    "ar": "البـراء بن معرور بن صخر بن خنساء بن سنان بن عبيد بن عبيد بن عدي بن غنم بن كعب بن سلمة الأ."
  },
  "refs": [
    {
      "label": "Wikipedia — البراء بن معرور",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%A1_%D8%A8%D9%86_%D9%85%D8%B9%D8%B1%D9%88%D8%B1"
    }
  ]
},
{
  "id": "al-qasim-bin-mohammed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع القاسم بن محمد",
  "en": "Al Qasim Bin Mohammed Street",
  "meaning": {
    "en": "Son of Muhammad and Khadijah bint Khuwaylid",
    "ar": "أول أبناء النبي محمد وبه يُكنى (أبو القاسم)"
  },
  "story": {
    "en": "Qasim ibn Muhammad (d. 601) was a son of Muhammad and Khadijah bint Khuwaylid.",
    "ar": "القاسِم بن مُحمَّد بن عبد الله، ابن الرسول محمد من زوجته خديجة بنت خويلد."
  },
  "refs": [
    {
      "label": "Wikipedia — القاسم بن محمد",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85_%D8%A8%D9%86_%D9%85%D8%AD%D9%85%D8%AF"
    }
  ]
},
{
  "id": "al-mugheerah-bin-shu-bah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع المغيره بن شعبه",
  "en": "Al Mugheerah Bin Shu'bah Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Mughira ibn Shu'ba (600–671) was a companion of the Prophet Muhammad.",
    "ar": "أبو عبد الله المغيرة بن شعبة بن أبي عامر بن مسعود الثقفي (600م/23 ق ه- 670م/50 هـ) من كبا."
  },
  "refs": [
    {
      "label": "Wikipedia — المغيرة بن شعبة",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%BA%D9%8A%D8%B1%D8%A9_%D8%A8%D9%86_%D8%B4%D8%B9%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "ar-rabee-bin-khuthaym-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الربيع بن خثيم",
  "en": "Ar Rabee' Bin Khuthaym Street",
  "meaning": {
    "en": "Tabi'i ascetic of Kufa",
    "ar": "عالم"
  },
  "story": {
    "en": "Al-Rabi ibn Khuthaym (d. 680) was a tabi'i ascetic of Kufa.",
    "ar": "أبو يزيد الربيع بن خثيم بن عائذ بن عبد الله الثوري التميمي الكوفي (10 ق هـ -."
  },
  "refs": [
    {
      "label": "Wikipedia — الربيع بن خثيم",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B1%D8%A8%D9%8A%D8%B9_%D8%A8%D9%86_%D8%AE%D8%AB%D9%8A%D9%85"
    }
  ]
},
{
  "id": "an-nu-man-bin-basheer-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع النعمان بن بشير",
  "en": "An Nu'man Bin Basheer Street",
  "meaning": {
    "en": "Companion (Sahabi) of Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Nu'man ibn Bashir al-Ansari (622–684) was a companion of the Prophet Muhammad.",
    "ar": "النعمان بن بشير بن سعد بن ثعلبة بن جلاس بن زيد الأنصاري الخزرجي."
  },
  "refs": [
    {
      "label": "Wikipedia — النعمان بن بشير",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%A8%D8%B4%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "ash-shayma-a-bint-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الشيماء بنت الحارث",
  "en": "Ash Shayma-a Bint Al Harith Street",
  "meaning": {
    "en": "Daughter of Halimah bint Abi Dhuayb",
    "ar": "أخت لمحمد من الرضاعة"
  },
  "story": {
    "en": "Shayma bint al-Harith was a daughter of Halimah bint Abi Dhuayb.",
    "ar": "الشيماء بنت الحارث هي حذافة بنت الحارث بن عبد العزى بن رفاعة السعدية وقيل جذامة."
  },
  "refs": [
    {
      "label": "Wikipedia — الشيماء بنت الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B4%D9%8A%D9%85%D8%A7%D8%A1_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "buraydah-bin-al-haseeb-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع بريده بن الحصيب",
  "en": "Buraydah bin Al Haseeb Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي شهد بيعة الرضوان"
  },
  "story": {
    "en": "Buraydah ibn al-Khasib al-Aslami, known by the kunya Abu Abd Allah, was a companion of the Prophet Muhammad.",
    "ar": "بريدة بن الحُصَيب بن عبد الله بن الحارث الأسلمي، يكنى أبا عبد الله، وقيل أبا سهل، وهو صحابي من أصحاب النبي محمد."
  },
  "refs": [
    {
      "label": "Wikipedia — بريدة بن الحصيب",
      "url": "https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D9%8A%D8%AF%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%B5%D9%8A%D8%A8"
    }
  ]
},
{
  "id": "fatima-bint-al-khattab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع فاطمه بنت الخطاب",
  "en": "Fatima Bint Al Khattab Street",
  "meaning": {
    "en": "Sister of Umar",
    "ar": "صحابية جليلة من السابقين الأولين"
  },
  "story": {
    "en": "Fatimah bint al-Khattab was a sister of Umar.",
    "ar": "فاطمة بنت الخطاب، وقيل: رملة بنت الخطاب، وقيل: أم جميل بنت."
  },
  "refs": [
    {
      "label": "Wikipedia — فاطمة بنت الخطاب",
      "url": "https://ar.wikipedia.org/wiki/%D9%81%D8%A7%D8%B7%D9%85%D8%A9_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D8%A8"
    }
  ]
},
{
  "id": "habeebah-bint-kharijah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حبيبه بنت خارجه",
  "en": "Habeebah Bint Kharijah Street",
  "meaning": {
    "en": "Wife of Abu Bakr",
    "ar": "شخصية تاريخية"
  },
  "story": {
    "en": "Habiba bint Kharija was a wife of Abu Bakr.",
    "ar": "حبيبة بنت خارجة الخزرجية الأنصارية وقيل ان اسمها مليكة."
  },
  "refs": [
    {
      "label": "Wikipedia — حبيبة بنت خارجة",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%A8%D9%8A%D8%A8%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AE%D8%A7%D8%B1%D8%AC%D8%A9"
    }
  ]
},
{
  "id": "fatima-az-zahra-a-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع فاطمه الزهراء",
  "en": "Fatima Az Zahra-a Street",
  "meaning": {
    "en": "Daughter of Muhammad",
    "ar": "بنت النبي محمد وزوجة علي بن أبي طالب وأم الحسن والحسين"
  },
  "story": {
    "en": "Fatima al-Zahra was a daughter of the Prophet Muhammad and of Khadija, and the mother of al-Hasan and al-Husayn.",
    "ar": "فَاطِمَةُ الزَّهْرَاءُ بنت الرسول محمد من أول زوجاته أم المؤمنين خديجة بنت خويلد، وأم السبطين الحسن والحسين."
  },
  "refs": [
    {
      "label": "Wikipedia — فاطمة الزهراء",
      "url": "https://ar.wikipedia.org/wiki/%D9%81%D8%A7%D8%B7%D9%85%D8%A9_%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A7%D8%A1"
    }
  ]
},
{
  "id": "halah-bint-khuwaylid-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع هاله بنت خويلد",
  "en": "Halah Bint Khuwaylid Street",
  "meaning": {
    "en": "Sister-in-law of Muhammad",
    "ar": "صحابية"
  },
  "story": {
    "en": "Halah bint Khuwailid was a sister-in-law of the Prophet Muhammad.",
    "ar": "هَالَةُ بنت خُوَيْلِد بن أسَد بن عبد العُزى الأسدية القُرِشية."
  },
  "refs": [
    {
      "label": "Wikipedia — هالة بنت خويلد",
      "url": "https://ar.wikipedia.org/wiki/%D9%87%D8%A7%D9%84%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AE%D9%88%D9%8A%D9%84%D8%AF"
    }
  ]
},
{
  "id": "hammad-bin-salamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حماد بن سلمه",
  "en": "Hammad Bin Salamah Street",
  "meaning": {
    "en": "Arab grammarian",
    "ar": "نحوي وأحد المحدثين من رواة الحديث"
  },
  "story": {
    "en": "Hammad ibn Salama (d. 784) was an Arab grammarian.",
    "ar": "أَبُو سَلَمَةَ حَمَّادُ بْنُ سَلَمَةَ بْنِ دِينَارٍ اَلْبَصْرِيُّ."
  },
  "refs": [
    {
      "label": "Wikipedia — حماد بن سلمة",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%A7%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D9%85%D8%A9"
    }
  ]
},
{
  "id": "hashim-bin-atabah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع هاشم بن عتبه",
  "en": "Hashim Bin 'Atabah Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي خطيب من الفرسان، شهد القادسية وكان مع علي بن أبي طالب في حروبه"
  },
  "story": {
    "en": "Hashim ibn Utba (601–657) was a companion of the Prophet Muhammad.",
    "ar": "أَبُو سَعِيدْ هَاشِم بْنُ عُتْبَة بْنِ أَبِي وَقَّاص."
  },
  "refs": [
    {
      "label": "Wikipedia — هاشم بن عتبة",
      "url": "https://ar.wikipedia.org/wiki/%D9%87%D8%A7%D8%B4%D9%85_%D8%A8%D9%86_%D8%B9%D8%AA%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "ibn-khaldoun-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن خلدون",
  "en": "Ibn Khaldoun Street",
  "meaning": {
    "en": "Historiographer and historian",
    "ar": "عالِمٌ و مؤسس علم الاجتماع"
  },
  "story": {
    "en": "Ibn Khaldun (1332–1406) was a historiographer and historian.",
    "ar": "ابنُ خَلدون (732 - 808 هـ / 1332 - 1406 م) هو أَبُو زَيْدٍ وَلِيُّ الدِّيْنِ ع."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن خلدون",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%AE%D9%84%D8%AF%D9%88%D9%86"
    }
  ]
},
{
  "id": "jubayr-bin-mut-im-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جبير بن مطعم",
  "en": "Jubayr Bin Mut'im Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي من صحابة رسول الله"
  },
  "story": {
    "en": "Jubayr ibn Mut'im (d. 670) was a companion of the Prophet Muhammad.",
    "ar": "جبير بن مطعم بن عدي بن نوفل بن عبد مناف بن قصي القرشي."
  },
  "refs": [
    {
      "label": "Wikipedia — جبير بن مطعم",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D8%A8%D9%8A%D8%B1_%D8%A8%D9%86_%D9%85%D8%B7%D8%B9%D9%85"
    }
  ]
},
{
  "id": "jameelah-bint-thabit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جميله بنت ثابت",
  "en": "Jameelah Bint Thabit Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "كانت زوجة ثانى الخلفاء الراشدين عمر بن الخطاب"
  },
  "story": {
    "en": "Jamila bint Thabit was a companion of the Prophet Muhammad.",
    "ar": "جميلة بنت ثابت بن أبي الأقلح الأنصارية كان اسمها عاصية فسماها رسول الله جميل."
  },
  "refs": [
    {
      "label": "Wikipedia — جميلة بنت ثابت",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D9%85%D9%8A%D9%84%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AB%D8%A7%D8%A8%D8%AA"
    }
  ]
},
{
  "id": "juwayriyah-bint-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جويريه بنت الحارث",
  "en": "Juwayriyah Bint Al Harith Street",
  "meaning": {
    "en": "Eighth wife of the Prophet Muhammad",
    "ar": "أم المؤمنين، ثامن زوجات النبي محمد (15ق.هـ–56هـ / 608–676م)"
  },
  "story": {
    "en": "Juwayriyya bint al-Harith (608–676) was a wife of the Prophet Muhammad.",
    "ar": "أم المؤمنين جُوَيْرِيَة بنت الحارث ثامن زوجات الرسول محمد صلى الله عليه وسلم.."
  },
  "refs": [
    {
      "label": "Wikipedia — جويرية بنت الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D9%88%D9%8A%D8%B1%D9%8A%D8%A9_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "khadeejah-bint-khuwaylid-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خديجه بنت خويلد",
  "en": "Khadeejah Bint Khuwaylid Street",
  "meaning": {
    "en": "First wife of Prophet Muḥammad ﷺ, First believer in Islam and Prophet Muhammad’s wife",
    "ar": "الزوجة الأولى للنبي محمد، و أول من أسلم من النساء، و أحب زوجات النبي محمد إليه، و أم جميع أولاده عدا إبراهيم (68–3ق.هـ / 556–619م)"
  },
  "story": {
    "en": "Khadija bint Khuwaylid (557–619) was the first wife of the Prophet Muhammad and the first believer in Islam.",
    "ar": "خَدِيجَةُ بِنتُ خُوَيلِد بن أسد القُرَشِيّة (68 ق.هـ - 3 ق.هـ / 556م - 619م)؛ أم المؤمنين وأولى زوجات الرسول محمد وأم كل أولاده ما عدا ولده."
  },
  "refs": [
    {
      "label": "Wikipedia — خديجة بنت خويلد",
      "url": "https://ar.wikipedia.org/wiki/%D8%AE%D8%AF%D9%8A%D8%AC%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AE%D9%88%D9%8A%D9%84%D8%AF"
    }
  ]
},
{
  "id": "khawlah-bint-tha-labah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خوله بنت ثعلبه",
  "en": "Khawlah Bint Tha'labah Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "الصحابية التي سمع الله شكواها من فوق سبع سموات"
  },
  "story": {
    "en": "Khawla bint Tha'labah was a companion of the Prophet Muhammad.",
    "ar": "خولة بنت ثعلبة ، هي المرأة التي نزلت فيها الآيات الأولى من سورة المجادلة."
  },
  "refs": [
    {
      "label": "Wikipedia — خولة بنت ثعلبة",
      "url": "https://ar.wikipedia.org/wiki/%D8%AE%D9%88%D9%84%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AB%D8%B9%D9%84%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "malik-bin-sinan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مالك بن سنان",
  "en": "Malik Bin Sinan Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي انصاري"
  },
  "story": {
    "en": "Malik Ibn Sinan (d. 625) was a companion of the Prophet Muhammad.",
    "ar": "مالك بن سنان صحابي من الأنصار من بني خدرة من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — مالك بن سنان",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%A7%D9%84%D9%83_%D8%A8%D9%86_%D8%B3%D9%86%D8%A7%D9%86"
    }
  ]
},
{
  "id": "maymounah-bint-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ميمونه بنت الحارث",
  "en": "Maymounah Bint Al Harith Street",
  "meaning": {
    "en": "Eleventh wife of the Prophet Muhammad",
    "ar": "أم المؤمنين، حادي عشر زوجات لمحمد (29ق.هـ–51هـ / 594–673م)"
  },
  "story": {
    "en": "Maymunah bint al-Harith (592–672) was a wife of the Prophet Muhammad.",
    "ar": "أم المؤمنين مَيْمُونَةُ بِنْتُ الحَارِثِ بن حَزْن، آخرُ زوجات النبي محمد صلى الله عليه وسلم."
  },
  "refs": [
    {
      "label": "Wikipedia — ميمونة بنت الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D9%8A%D9%85%D9%88%D9%86%D8%A9_%D8%A8%D9%86%D8%AA_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "mousa-bin-nusayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع موسي بن نصير",
  "en": "Mousa Bin Nusayr Street",
  "meaning": {
    "en": "Arab military commander provincial governor",
    "ar": "قائد عسكري مسلم وأحد ولاة الدولة الأموية (640-716)"
  },
  "story": {
    "en": "Musa ibn Nusayr (640–716) was an Arab military commander who played a leading role in the spread of Islam and the expansion of the Umayyad state.",
    "ar": "أبو عبد الرحمن موسى بن نصير (19 هـ/640 م - 97 هـ/716 م) قائد عسكري عربي لعب دورًا بارزًا في انتشار الإسلام وتوسيع رقعة الدولة الأموية."
  },
  "refs": [
    {
      "label": "Wikipedia — موسى بن نصير",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D9%88%D8%B3%D9%89_%D8%A8%D9%86_%D9%86%D8%B5%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "mohammed-bin-seereen-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع محمد بن سيرين",
  "en": "Mohammed Bin Seereen Street",
  "meaning": {
    "en": "8th-century Muslim scholar and dreams interpreter",
    "ar": "عالم مسلم تابعي مفسر"
  },
  "story": {
    "en": "Ibn Sirin (653–729) was an 8th-century Muslim scholar and dreams interpreter.",
    "ar": "اِبْنُ سِيرِينَ، أَبُو بَكْرٍ، مُحَمَّدُ بْنُ سِيرِينَ اَلْبِصْرِيُّ، (32 - 110 هـ)."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن سيرين",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B3%D9%8A%D8%B1%D9%8A%D9%86"
    }
  ]
},
{
  "id": "nu-aym-bin-mas-oud-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع نعيم بن مسعود",
  "en": "Nu'aym Bin Mas'oud Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي من بني أشجع من قبيلة غطفان كان له دور مهم في مناصرة النبي محمد و خداع الأحزاب في غزوة الخندق"
  },
  "story": {
    "en": "Nuaym ibn Masud (600–650) was a companion of the Prophet Muhammad.",
    "ar": "أبو سلمة نعيم بن مسعود بن عامر الأشجعي الغطفاني صحاب."
  },
  "refs": [
    {
      "label": "Wikipedia — نعيم بن مسعود",
      "url": "https://ar.wikipedia.org/wiki/%D9%86%D8%B9%D9%8A%D9%85_%D8%A8%D9%86_%D9%85%D8%B3%D8%B9%D9%88%D8%AF"
    }
  ]
},
{
  "id": "nusaybah-bint-ka-ab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع نسيبه بنت كعب",
  "en": "Nusaybah Bint Ka'ab Street",
  "meaning": {
    "en": "Early woman to convert to Islam",
    "ar": "صحابية"
  },
  "story": {
    "en": "Nusaybah bint Ka'ab (d. 634) was among the early women to accept Islam.",
    "ar": "أم عُمارةَ نَسِيبَةُ بنتُ كَعْب المازنية الأنصارية (توفيت نحو سنة 13 هـ / 634 م) هي صحاب."
  },
  "refs": [
    {
      "label": "Wikipedia — نسيبة بنت كعب",
      "url": "https://ar.wikipedia.org/wiki/%D9%86%D8%B3%D9%8A%D8%A8%D8%A9_%D8%A8%D9%86%D8%AA_%D9%83%D8%B9%D8%A8"
    }
  ]
},
{
  "id": "mubashar-bin-abd-al-mundhir-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مبشر بن عبد المنذر",
  "en": "Mubashar Bin Abd Al Mundhir Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Mubashir ibn Abdul Munzer (d. 624) was a companion of the Prophet Muhammad.",
    "ar": "مُبَشِّرُ بن عبد المنذر صحابي من الأنصار من بني أمية بن زيد من الأوس."
  },
  "refs": [
    {
      "label": "Wikipedia — مبشر بن عبد المنذر",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%A8%D8%B4%D8%B1_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%85%D9%86%D8%B0%D8%B1"
    }
  ]
},
{
  "id": "sa-d-bin-kaythamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعد بن خيثمه",
  "en": "Sa'd Bin Kaythamah Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي، كان أحد النقباء الاثني عشر بالعقبة واستشهد يوم بدر"
  },
  "story": {
    "en": "Sa'd ibn Khaythama (d. 624) was a companion of the Prophet Muhammad.",
    "ar": "سعد بن خيثمة صحابي من الأنصار من بني غنم بن السلم من الأوس."
  },
  "refs": [
    {
      "label": "Wikipedia — سعد بن خيثمة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D8%AF_%D8%A8%D9%86_%D8%AE%D9%8A%D8%AB%D9%85%D8%A9"
    }
  ]
},
{
  "id": "sahlah-bint-suhail-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سهله بنت سهيل",
  "en": "Sahlah Bint Suhail Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي"
  },
  "story": {
    "en": "Sahla bint Suhayl was a companion of the Prophet Muhammad.",
    "ar": "سَهْلَةُ بنتُ سُهَيل بن عمرو العامرية الق."
  },
  "refs": [
    {
      "label": "Wikipedia — سهلة بنت سهيل",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%87%D9%84%D8%A9_%D8%A8%D9%86%D8%AA_%D8%B3%D9%87%D9%8A%D9%84"
    }
  ]
},
{
  "id": "sahl-bin-sa-d-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سهل بن سعد",
  "en": "Sahl Bin Sa'd Street",
  "meaning": {
    "en": "Companion of the Islamic prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Sahl ibn Sa'd (550–710) was a companion of the Prophet Muhammad.",
    "ar": "أبو العباس سهل بن سعد بن مالك الساعدي الأنصاري (نحو 8 ق هـ - 91 هـ / 613م - 710م):."
  },
  "refs": [
    {
      "label": "Wikipedia — سهل بن سعد",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%87%D9%84_%D8%A8%D9%86_%D8%B3%D8%B9%D8%AF"
    }
  ]
},
{
  "id": "samurah-bin-jundub-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سمره بن جندب",
  "en": "Samurah Bin Jundub Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي"
  },
  "story": {
    "en": "Samra ibn Jundab (d. 679) was a companion of the Prophet Muhammad.",
    "ar": "سمرة بن جندب (المتوفي سنة 58 هـ) صحابي من صغار الصحا."
  },
  "refs": [
    {
      "label": "Wikipedia — سمرة بن جندب",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%85%D8%B1%D8%A9_%D8%A8%D9%86_%D8%AC%D9%86%D8%AF%D8%A8"
    }
  ]
},
{
  "id": "shu-bat-bin-al-hajjaj-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع شعبه بن الحجاج",
  "en": "Shu'bat Bin Al Hajjaj Street",
  "meaning": {
    "en": "King of Hadith",
    "ar": "من أئمة رجال الحديث، حفظا ودراية وتثبتا، أول من فتش بالعراق عن أمر المحدّثين"
  },
  "story": {
    "en": "Shu'ba Ibn al-Ḥajjāj (702–777) was a scholar of hadith.",
    "ar": "أَبُو بِسْطَام شعبةُ بْنُ الحَجَّاج بن الورد العتكي الأزدي البصري (."
  },
  "refs": [
    {
      "label": "Wikipedia — شعبة بن الحجاج",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D8%B9%D8%A8%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%AC%D8%A7%D8%AC"
    }
  ]
},
{
  "id": "tameem-ad-dari-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع تميم الداري",
  "en": "Tameem Ad Dari Street",
  "meaning": {
    "en": "Islamic Sahaba",
    "ar": "صحابي صاحب حديث الجساسة"
  },
  "story": {
    "en": "Tamim al-Dari (d. 660) was a companion of the Prophet Muhammad.",
    "ar": "تَمِيمُ بْنُ أَوْسٍ الدَّارِيُّ اللَّخْمِيُّ."
  },
  "refs": [
    {
      "label": "Wikipedia — تميم الداري",
      "url": "https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D9%8A%D9%85_%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "sleet-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سليط بن عمرو",
  "en": "Sleet Bin 'Amr Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي من السابقين الأولين"
  },
  "story": {
    "en": "Sulayt ibn Amr was a companion of the Prophet Muhammad.",
    "ar": "سليط بن عمرو العامري صحابي من السابقي."
  },
  "refs": [
    {
      "label": "Wikipedia — سليط بن عمرو",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%8A%D8%B7_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88"
    }
  ]
},
{
  "id": "yazeed-bin-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع يزيد بن الحارث",
  "en": "Yazeed Bin Al Harith Street",
  "meaning": {
    "en": "Companion of the prophet",
    "ar": "صحابي"
  },
  "story": {
    "en": "Yazid ibn al-Harith, known through his mother as Yazid ibn Fus-hum (d. 2 AH), was a Khazraj companion who fought at Badr and was killed there.",
    "ar": "يزيد بن الحارث المعروف بأمه يزيد بن فسحم (المتوفى سنة 2 هـ) صحابي من بني كعب من الخزرج، شهد مع النبي محمد غزوة بدر وقُتل فيها."
  },
  "refs": [
    {
      "label": "Wikipedia — يزيد بن الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D9%8A%D8%B2%D9%8A%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "urwah-bin-az-zubayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عروه بن الزبير",
  "en": "Urwah Bin Az Zubayr Street",
  "meaning": {
    "en": "Muslim jurist and scholar",
    "ar": "تابعي ومحدث ومؤرخ مسلم، وأحد فقهاء المدينة السبعة"
  },
  "story": {
    "en": "Urwah ibn al-Zubayr (644–713) was a Muslim jurist, hadith scholar and historian, and one of the seven jurists of Medina.",
    "ar": "أبو عبد الله عُروة بن الزُبير بن العوام الأسدي (23 هـ/644 م - 94 هـ/713 م) تابعي ومحدث ومؤرخ مسلم، وأحد فقهاء المدينة السبعة."
  },
  "refs": [
    {
      "label": "Wikipedia — عروة بن الزبير",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%B1%D9%88%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D8%B2%D8%A8%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "ubay-bin-ka-b-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابي بن كعب",
  "en": "Ubay Bin Ka'b Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Ubay ibn Ka'b (d. 30 AH / 650 CE) was a companion, Quran reciter, jurist and scribe of the revelation, from the Ansar of Banu al-Najjar.",
    "ar": "أُبَيّ بن كعب (ت 30هـ/ 650م) صحابي وقارئ وفقيه وكاتب للوحي وراوي للحديث النبوي من الأنصار من بني النجار من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — أبي بن كعب",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%8A_%D8%A8%D9%86_%D9%83%D8%B9%D8%A8"
    }
  ]
},
{
  "id": "um-kulthoum-bint-uqbah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ام كلثوم بنت عقبه",
  "en": "Um Kulthoum Bint 'Uqbah Street",
  "meaning": {
    "en": "Companion (Sahabiyyah) of Muhammad",
    "ar": "صحابية جليلة و أول ممتحنة في الإسلام نزلت فيها آية الإمتحان"
  },
  "story": {
    "en": "Umm Kulthum bint Uqba (d. 653) was a woman companion of the Prophet Muhammad.",
    "ar": "أُم كُلْثُوم بنتُ عُقْبَة بن أبي مُعَيط بن أبي عَمْرو بن أُمَيَّة بن عبد شمس القُرَشية الأموي."
  },
  "refs": [
    {
      "label": "Wikipedia — أم كلثوم بنت عقبة",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D9%85_%D9%83%D9%84%D8%AB%D9%88%D9%85_%D8%A8%D9%86%D8%AA_%D8%B9%D9%82%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "usayd-bin-hudayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع اسيد بن حضير",
  "en": "Usayd Bin Hudayr Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي كان زعيما للأوس في المدينة قبل إسلامه"
  },
  "story": {
    "en": "Usaid Bin Hudair (d. 641) was a companion of Muhammad.",
    "ar": "أُسَيْد بن حُضَيْر الأوسي صحابي، وكان زعيما للأوس في المدينة قبل إسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — أسيد بن حضير",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%B3%D9%8A%D8%AF_%D8%A8%D9%86_%D8%AD%D8%B6%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "abdul-rahman-bin-awf-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد الرحمن بن عوف",
  "en": "Abdul Rahman Bin Awf Street",
  "meaning": {
    "en": "One of the Ten Blessed Companion",
    "ar": "صحابي جليل من عظماء الصحابة وأحد الصحابة العشرة المبشرين بالجنة، ومن السابقين الأولين إلى الإسلام"
  },
  "story": {
    "en": "Abdur Rahman bin Awf (571–652) was one of the ten companions promised Paradise.",
    "ar": "عبد الرّحمن بن عوف الزهري القرشي (43 ق.هـ - 32 هـ / 580 - 656م)."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الرحمن بن عوف",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86_%D8%A8%D9%86_%D8%B9%D9%88%D9%81"
    }
  ]
},
{
  "id": "sawdah-bint-zam-ah-street",
  "emirate": "dubai",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سوده بنت زمعه",
  "en": "Sawdah Bint Zam'ah Street",
  "meaning": {
    "en": "Second wife of the Islamic prophet Muhammad",
    "ar": "الزوجة الثانية لمحمد، ومن أمهات المؤمنين، ومن السابقين الأولين في الإسلام (32/33ق.هـ – 54هـ / 589 – 674م)"
  },
  "story": {
    "en": "Sawda bint Zamʿa (589–674) was a wife of the Prophet Muhammad.",
    "ar": "سودة بنت زمعة بن قيس العامرية القرشية، هي ثاني زوجات الرسول محمد، ومن أمهات المؤمنين."
  },
  "refs": [
    {
      "label": "Wikipedia — سودة بنت زمعة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%88%D8%AF%D8%A9_%D8%A8%D9%86%D8%AA_%D8%B2%D9%85%D8%B9%D8%A9"
    }
  ]
},
{
  "id": "adi-bin-hatem-al-tai-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عدي بن حاتم الطائي",
  "en": "Adi Bin Hatem Al Tai Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي و ابن حاتم الطائي النجدي والمعروف بأكرم العرب ،"
  },
  "story": {
    "en": "Adi ibn Hatim (572–687) was a companion of the Prophet Muhammad.",
    "ar": "أَبُو طَرِيفٍ عَدِيُّ بْنُ حَاتِمِ بْنِ عَبْدِ اَ."
  },
  "refs": [
    {
      "label": "Wikipedia — عدي بن حاتم الطائي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AF%D9%8A_%D8%A8%D9%86_%D8%AD%D8%A7%D8%AA%D9%85_%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%8A"
    }
  ]
},
{
  "id": "zayd-bin-thabit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زيد بن ثابت",
  "en": "Zayd Bin Thabit Street",
  "meaning": {
    "en": "Arabic scribe and Qur'anic collator",
    "ar": "صحابي (نحو 12ق.هـ – 45هـ / 611 – 665م)"
  },
  "story": {
    "en": "Zayd ibn Thabit (611–665) was an Arabic scribe and Qur'anic collator.",
    "ar": "زيد بن ثابت بن الضحّاك الأنصاري صحابي وكاتب الوحي، شيخ المقرئين، مفتي المدينة."
  },
  "refs": [
    {
      "label": "Wikipedia — زيد بن ثابت",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D8%AF_%D8%A8%D9%86_%D8%AB%D8%A7%D8%A8%D8%AA"
    }
  ]
},
{
  "id": "zaynab-bint-khuzaymah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زينب بنت خزيمه",
  "en": "Zaynab Bint Khuzaymah Street",
  "meaning": {
    "en": "Fifth wife of the Prophet Muhammad",
    "ar": "أم المؤمنين، خامس زوجات لمحمد (28ق.هـ–4هـ / 596–625م)"
  },
  "story": {
    "en": "Zaynab bint Khuzayma (595–625) was a wife of the Prophet Muhammad.",
    "ar": "أم المؤمنين زينب بنت خزيمة إحدى زوجات النبي محمد، كانت تُكنّى بأم المساكين."
  },
  "refs": [
    {
      "label": "Wikipedia — زينب بنت خزيمة",
      "url": "https://ar.wikipedia.org/wiki/%D8%B2%D9%8A%D9%86%D8%A8_%D8%A8%D9%86%D8%AA_%D8%AE%D8%B2%D9%8A%D9%85%D8%A9"
    }
  ]
},
{
  "id": "abdulqadir-al-jaza-eri-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبد القادر الجزائري",
  "en": "Abdulqadir Al Jaza'eri Street",
  "meaning": {
    "en": "Algerian religious and military leader",
    "ar": "مؤسس الدولة الجزائرية الحديثة وقائد عسكري، وشاعر ومفكر متصوف تفرغ للعلم والكتابة في دمشق حتى وفاته."
  },
  "story": {
    "en": "Abdelkader El Djezairi (1808–1883) was an Algerian religious and military leader.",
    "ar": "عبد القادر الجزائري (1223-1300هـ / 1808-1883م)، واسمه عبد القادر بن محيي الدين الحسني."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد القادر الجزائري",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D8%B1_%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "al-miqdad-bin-amr-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع المقداد بن عمرو",
  "en": "Al Miqdad Bin Amr Street",
  "meaning": {
    "en": "Companion (Sahaba) of Muhammad",
    "ar": "صحابي بدري"
  },
  "story": {
    "en": "Miqdad ibn Aswad (590–652) was a companion of the Prophet Muhammad.",
    "ar": "المقداد بن عمرو المعروف أيضًا بـ المقداد بن الأسود (المتوفى 33 هـ) صحابي بدري."
  },
  "refs": [
    {
      "label": "Wikipedia — المقداد بن عمرو",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D9%82%D8%AF%D8%A7%D8%AF_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88"
    }
  ]
},
{
  "id": "hamza-bin-abdulmotalib-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حمزه بن عبد المطلب",
  "en": "Hamza Bin Abdulmotalib Street",
  "meaning": {
    "en": "Companion and uncle of the Prophet Muhammad",
    "ar": "صحابي ، عم النبي محمد"
  },
  "story": {
    "en": "Hamza ibn ‘Abd al-Muttalib (568–625) was a companion of the Prophet and his uncle.",
    "ar": "أَبُو عُمَارَةَ حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ الهَاشِمِي القُرَشِيُّ، صحابي من صحابة الرسول محمد."
  },
  "refs": [
    {
      "label": "Wikipedia — حمزة بن عبد المطلب",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%B2%D8%A9_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8"
    }
  ]
},
{
  "id": "hisham-bin-al-a-as-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع هشام بن العاص",
  "en": "Hisham Bin Al A'as Street",
  "meaning": {
    "en": "Son of al-As ibn Wa'il",
    "ar": "صحابي جليل من السابقين الأولين في الإسلام استشهد في معركة اليرموك"
  },
  "story": {
    "en": "Hisham ibn al-As (d. 635) was a son of al-As ibn Wa'il.",
    "ar": "هشام بن العاص بن وائل السهمي صحابي، أبوه العاص بن وائل السهمي وأخو الصح."
  },
  "refs": [
    {
      "label": "Wikipedia — هشام بن العاص",
      "url": "https://ar.wikipedia.org/wiki/%D9%87%D8%B4%D8%A7%D9%85_%D8%A8%D9%86_%D8%A7%D9%84%D8%B9%D8%A7%D8%B5"
    }
  ]
},
{
  "id": "haram-bin-melhan-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حرام بن ملحان",
  "en": "Haram Bin Melhan Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Haram bin Milhan (d. 625) was a companion of the Prophet Muhammad.",
    "ar": "حرام بن ملحان (المتوفي سنة 4 هـ) صحابي من بني عدي بن النجار من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — حرام بن ملحان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%B1%D8%A7%D9%85_%D8%A8%D9%86_%D9%85%D9%84%D8%AD%D8%A7%D9%86"
    }
  ]
},
{
  "id": "iben-taymeia-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن تيميه",
  "en": "Iben Taymeia Street",
  "meaning": {
    "en": "Islamic scholar, jurist and philosopher",
    "ar": "عالم موسوعي (661 – 728هـ / 1263 – 1328م)"
  },
  "story": {
    "en": "Ibn Taymiyyah (1263–1328) was an Islamic scholar, jurist and philosopher.",
    "ar": "ابنُ تَيمِيَّة (661- 728 هـ / 1263- 1328 م) هو أَبُو العَبَّاسِ تَقِيُّ الدِّينِ أَحْمَدُ بْنُ."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن تيمية",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%AA%D9%8A%D9%85%D9%8A%D8%A9"
    }
  ]
},
{
  "id": "lubeid-bin-rabeeah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع لبيد بن ربيعه",
  "en": "Lubeid Bin Rabeeah Street",
  "meaning": {
    "en": "Sahabah and poet",
    "ar": "صحابي"
  },
  "story": {
    "en": "Labīd (560–661) was a companion of the Prophet and poet.",
    "ar": "أبُوْ عَقِيْلٍ، لَبِيْدُ بْنُ رَبِيْعَةَ بْنِ مَال."
  },
  "refs": [
    {
      "label": "Wikipedia — لبيد بن ربيعة",
      "url": "https://ar.wikipedia.org/wiki/%D9%84%D8%A8%D9%8A%D8%AF_%D8%A8%D9%86_%D8%B1%D8%A8%D9%8A%D8%B9%D8%A9"
    }
  ]
},
{
  "id": "malek-bin-nuwaira-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مالك بن نويره",
  "en": "Malek Bin Nuwaira Street",
  "meaning": {
    "en": "Arab tribal leader",
    "ar": "أحد سادة بني يربوع من فرسان العرب وشعرائها مختلف في صحبته وردته"
  },
  "story": {
    "en": "Malik ibn Nuwayra (d. 634) was an Arab tribal leader.",
    "ar": "أبو حنظلة مالك بن نويرة اليربوعي التميمي، صحابي."
  },
  "refs": [
    {
      "label": "Wikipedia — مالك بن نويرة",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%A7%D9%84%D9%83_%D8%A8%D9%86_%D9%86%D9%88%D9%8A%D8%B1%D8%A9"
    }
  ]
},
{
  "id": "khubaib-bin-oday-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خبيب بن عدي",
  "en": "Khubaib Bin Oday Street",
  "meaning": {
    "en": "Sahabi (companion) of the Islamic prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Khubayb ibn Adiy (d. 625) was a companion of the Prophet Muhammad.",
    "ar": "خُبيب بن عَدِي (المتوفي سنة 4 هـ) صحابي من بني جحجبا بن كلفة من الأوس."
  },
  "refs": [
    {
      "label": "Wikipedia — خبيب بن عدي",
      "url": "https://ar.wikipedia.org/wiki/%D8%AE%D8%A8%D9%8A%D8%A8_%D8%A8%D9%86_%D8%B9%D8%AF%D9%8A"
    }
  ]
},
{
  "id": "obaida-bin-al-harth-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبيده بن الحارث",
  "en": "Obaida Bin Al Harth Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي بدري، قُتل في مُبارزة في غزوة بدر"
  },
  "story": {
    "en": "Ubaydah ibn al-Harith ibn al-Muttalib was a Badri companion, among the earliest to accept Islam, killed at the battle of Badr.",
    "ar": "عبيدة بن الحارث بن المطلب صحابي بدري، من السابقين الأولين إلى الإسلام، قُتل يوم بدر."
  },
  "refs": [
    {
      "label": "Wikipedia — عبيدة بن الحارث",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D9%8A%D8%AF%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB"
    }
  ]
},
{
  "id": "mohammed-bin-maslamah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع محمد بن مسلمه",
  "en": "Mohammed Bin Maslamah Street",
  "meaning": {
    "en": "Sahabah",
    "ar": "صحابي أنصاري، ولاه النبي محمد المدينة"
  },
  "story": {
    "en": "Muhammad ibn Maslamah (589–666) was a companion of the Prophet Muhammad.",
    "ar": "محمد بن مسلمة (المتوفي سنة 46 هـ) صحابي من بني حارثة بن الح."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن مسلمة",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D9%85%D8%B3%D9%84%D9%85%D8%A9"
    }
  ]
},
{
  "id": "omair-bin-al-humam-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمير بن الحمام",
  "en": "Omair Bin Al Humam Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Umayr ibn al-Hammam (d. 624) was a companion of the Prophet Muhammad.",
    "ar": "عُمَير بن الحُمام صحابي من الأنصار من بني حرام بن كعب من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — عمير بن الحمام",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D9%8A%D8%B1_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85"
    }
  ]
},
{
  "id": "mousa-bin-auqba-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع موسي بن عقبه",
  "en": "Mousa Bin Auqba Street",
  "meaning": {
    "en": "Medinan historian, Jurist and traditionalist",
    "ar": "تابعي من علماء السير والمغازي"
  },
  "story": {
    "en": "Mūsá ibn ʻUqbah (674–758) was a Medinan historian, Jurist and traditionalist.",
    "ar": "أبو محمد موسى بن عقبة بن أبي عياش القرشي مولاهم، ولد بالمدينة وبها توفي سنة 141 هـ."
  },
  "refs": [
    {
      "label": "Wikipedia — موسى بن عقبة",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D9%88%D8%B3%D9%89_%D8%A8%D9%86_%D8%B9%D9%82%D8%A8%D8%A9"
    }
  ]
},
{
  "id": "omair-bin-al-habab-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عمير بن الحباب",
  "en": "Omair bin Al Habab Street",
  "meaning": {
    "en": "Umayyad general and Qaysi tribes leader",
    "ar": "شاعر وفارس"
  },
  "story": {
    "en": "Umayr ibn Hubab al-Sulami (d. 689) was an Umayyad general and Qaysi tribal leader.",
    "ar": "عمير بن الحباب بن جعدة بن إياس بن حذافة بن محارب بن هلال بن فالج بن ذكوان بن ثعلبة بن بهثة بن سليم بن منصو."
  },
  "refs": [
    {
      "label": "Wikipedia — عمير بن الحباب",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%85%D9%8A%D8%B1_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%A8%D8%A7%D8%A8"
    }
  ]
},
{
  "id": "said-ibn-al-musayyib-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سعيد بن المسيب",
  "en": "Said Ibn Al Musayyib Street",
  "meaning": {
    "en": "Medina-based Muslim scholar",
    "ar": "تابعي مدني، وأحد رواة الحديث النبوي، وأحد فقهاء المدينة السبعة من التابعين"
  },
  "story": {
    "en": "Said ibn al-Musayyib (634–712) was a Medina-based Muslim scholar.",
    "ar": "أبو محمد سعيد بن الْمُسَيِّبِ بن حزن بن أبي وهب المخزومي القرشي (15 هـ - 94 هـ) تابع."
  },
  "refs": [
    {
      "label": "Wikipedia — سعيد بن المسيب",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A8%D9%86_%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%A8"
    }
  ]
},
{
  "id": "shamas-bin-othman-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع شماس بن عثمان",
  "en": "Shamas Bin Othman Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Shams ibn Uthman (591–625) was a companion of the Prophet Muhammad.",
    "ar": "شَمَّاس بن عثمان صحابي من السابقين إلى الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — شماس بن عثمان",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D9%85%D8%A7%D8%B3_%D8%A8%D9%86_%D8%B9%D8%AB%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "hafsa-bint-omar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حفصة بنت عمر",
  "en": "Hafsa Bint Omar Street",
  "translit": "Shāriʿ Ḥafṣa bint ʿUmar",
  "meaning": {
    "en": "A wife of the Prophet and daughter of Umar ibn al-Khattab",
    "ar": "من أمهات المؤمنين، وابنة الخليفة عمر بن الخطاب"
  },
  "story": {
    "en": "Hafsa bint Umar ibn al-Khattab (18 BH – 41 AH / 605–661 CE; some sources give 45 AH) was the fourth wife of the Prophet Muhammad, a Mother of the Believers, and the daughter of the second caliph, Umar ibn al-Khattab.",
    "ar": "حَفْصَة بنت عُمر بن الخطاب العَدَويَّة القُرَشيَّة (١٨ ق.هـ–٤١هـ / ٦٠٥–٦٦١م، وقيل ٤٥هـ) رابع زوجات النبي محمد، ومن أمهات المؤمنين، وابنة الخليفة الثاني عمر بن الخطاب."
  },
  "refs": [
    {
      "label": "Wikipedia — حفصة بنت عمر",
      "url": "https://ar.wikipedia.org/wiki/حفصة_بنت_عمر"
    }
  ]
},
{
  "id": "yahya-bin-mua-een-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع يحيي بن معين",
  "en": "Yahya Bin Mua'een Street",
  "meaning": {
    "en": "Iraqi Muslim scholar",
    "ar": "الإمام الحافظ ،إمام الجرح والتعديل، شيخ المحدثين"
  },
  "story": {
    "en": "Yahya ibn Ma'in (775–884) was an Iraqi Muslim scholar.",
    "ar": "أَبُو زَكَرِيَّا، يَحْيَى بْنُ ‌مَعِينٍ الغَطَفَانِيُّ المُرِّيُّ بالو."
  },
  "refs": [
    {
      "label": "Wikipedia — يحيى بن معين",
      "url": "https://ar.wikipedia.org/wiki/%D9%8A%D8%AD%D9%8A%D9%89_%D8%A8%D9%86_%D9%85%D8%B9%D9%8A%D9%86"
    }
  ]
},
{
  "id": "mas-oud-bin-rabee-ah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مَسعُود بن رَبِيعَة",
  "en": "Mas'oud Bin Rabee'ah Street",
  "meaning": {
    "en": "A Badri Companion of the Qura'a",
    "ar": "صحابي بدري من السابقين"
  },
  "story": {
    "en": "Mas'ud ibn Rabi'a al-Qari was a Companion who fought at Badr and died in 30 AH.",
    "ar": "أبو عُمير مسعود بن ربيعة القاري. أو القاريّ."
  },
  "refs": [
    {
      "label": "Wikipedia — مسعود بن ربيعة",
      "url": "https://ar.wikipedia.org/wiki/مسعود_بن_ربيعة"
    }
  ]
},
{
  "id": "wadee-ah-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع وَديعَة بن عَمرو",
  "en": "Wadee'ah Bin 'Amr Street",
  "meaning": {
    "en": "A Companion from Juhayna, ally of the Khazraj",
    "ar": "صحابي من جهينة حليف للخزرج"
  },
  "story": {
    "en": "Wadi'a ibn Amr was a Companion of Juhayna, an ally of the Khazraj, who fought at Badr and Uhud.",
    "ar": "وديعة بن عمرو الجهني صحابي من جهينة، كان حليفًا لبني سواد بن مالك بن غنم بن مالك بن النجار من الخزرج، شهد غزوتي بدر وأحد."
  },
  "refs": [
    {
      "label": "Wikipedia — وديعة بن عمرو",
      "url": "https://ar.wikipedia.org/wiki/وديعة_بن_عمرو"
    }
  ]
},
{
  "id": "yazeed-bin-al-munthir-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع يَزِيد بن المُنذِر",
  "en": "Yazeed Bin Al Munthir Street",
  "meaning": {
    "en": "An Ansari Companion at the second Aqaba",
    "ar": "صحابي أنصاري شهد العقبة الثانية"
  },
  "story": {
    "en": "Yazid ibn al-Mundhir was an Ansari Companion of the Khazraj who took the second pledge of Aqaba and fought at Badr.",
    "ar": "يزيد بن المنذر صحابي من الأنصار من بني عبيد بن عدي من الخزرج، شهد بيعة العقبة الثانية، وآخى النبي محمد بينه وبين عامر بن ربيعة، وشهد غزوتي بدر وأحد."
  },
  "refs": [
    {
      "label": "Wikipedia — يزيد بن المنذر",
      "url": "https://ar.wikipedia.org/wiki/يزيد_بن_المنذر"
    }
  ]
},
{
  "id": "ibrahim-bin-tahman-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع إبراهيم بن طهمان",
  "en": "Ibrahim Bin Tahman Street",
  "meaning": {
    "en": "A hadith scholar from Herat",
    "ar": "محدث من هراة"
  },
  "story": {
    "en": "Ibrahim ibn Tahman (d. 784) was a scholar of hadith from Herat who settled in Mecca.",
    "ar": "إبراهيم بن طهمان ( ؟ ـ 784م). أبو سعيد إبراهيم بن طهمان بن شعبة الهروي، إمام وعالم حديث من خراسان."
  },
  "refs": [
    {
      "label": "Wikipedia — إبراهيم بن طهمان",
      "url": "https://ar.wikipedia.org/wiki/إبراهيم_بن_طهمان"
    }
  ]
},
{
  "id": "is-haq-bin-talhah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع إسحاق بن طَلحة",
  "en": "Is-haq Bin Talhah Street",
  "meaning": {
    "en": "A Tabi'i of Quraysh, son of Talha",
    "ar": "تابعي من قريش وابن طلحة"
  },
  "story": {
    "en": "Ishaq ibn Talha ibn Ubayd Allah (d. 56 AH) was a Tabi'i and hadith transmitter of Quraysh.",
    "ar": "إسحاق بن طلحة بن عبيد الله (توفي عام 56 هـ) تابعي وأحد رواة الحديث النبوي، عينه الخليفة معاوية بن أبي سفيان في سنة 56 هـ."
  },
  "refs": [
    {
      "label": "Wikipedia — إسحاق بن طلحة بن عبيد الله",
      "url": "https://ar.wikipedia.org/wiki/إسحاق_بن_طلحة_بن_عبيد_الله"
    }
  ]
},
{
  "id": "asma-bint-salamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أسماء بنت سَلامة",
  "en": "Asma Bint Salamah Street",
  "meaning": {
    "en": "A woman Companion who migrated to Abyssinia",
    "ar": "صحابية هاجرت إلى الحبشة"
  },
  "story": {
    "en": "Asma bint Salama al-Tamimiyya was among the early women to accept Islam and migrated with her husband to Abyssinia.",
    "ar": "أسماء بنت سلامة التميمية تكنى أم الجلاس من الصحابيات السابقات في الإسلام أسلمت هي وزوجها: عياش بن أبي ربيعة بمكة قديما، وهاجرت معه إلى الحبشة، وولدت."
  },
  "refs": [
    {
      "label": "Wikipedia — أسماء بنت سلامة",
      "url": "https://ar.wikipedia.org/wiki/أسماء_بنت_سلامة"
    }
  ]
},
{
  "id": "asma-bint-umays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أسماء بنت عُمَيس",
  "en": "Asma Bint 'Umays Street",
  "meaning": {
    "en": "A woman Companion, wife of Ja'far and then Abu Bakr",
    "ar": "صحابية زوجة جعفر ثم أبي بكر"
  },
  "story": {
    "en": "Asma bint Umays al-Khath'amiyya (d. 38 AH or later) was a woman Companion and the wife of Ja'far ibn Abi Talib and later of Abu Bakr.",
    "ar": "أَسْماءُ بنتُ عُمَيْس الخَثْعَمِيَّة (ت 38 هـ أو بعد 60 هـ) صحابية أسلمت قديمًا مع أختها سَلمى بنت عُمَيس قبل دخول النبي محمد دار الأرقم."
  },
  "refs": [
    {
      "label": "Wikipedia — أسماء بنت عميس",
      "url": "https://ar.wikipedia.org/wiki/أسماء_بنت_عميس"
    }
  ]
},
{
  "id": "asma-bint-yazeed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أسماء بنت يزيد",
  "en": "Asma Bint Yazeed Street",
  "meaning": {
    "en": "An Ansari woman Companion",
    "ar": "صحابية أنصارية"
  },
  "story": {
    "en": "Asma bint Yazid al-Ansariyya accepted Islam in the first year after the Hijra and was known for her knowledge of religion.",
    "ar": "أسماء بنت يزيد الأنصارية هي صحابية وهي أم عامر وأم سلمة الأنصارية الأشهلية."
  },
  "refs": [
    {
      "label": "Wikipedia — أسماء بنت يزيد",
      "url": "https://ar.wikipedia.org/wiki/أسماء_بنت_يزيد"
    }
  ]
},
{
  "id": "al-ahnaf-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الأحنَف بن قيس",
  "en": "Al Ahnaf Bin Qays Street",
  "meaning": {
    "en": "Leader of Tamim in Basra",
    "ar": "سيد تميم البصرة"
  },
  "story": {
    "en": "Al-Ahnaf ibn Qays (602–691) was the leader of Tamim in Basra, known for his judgement.",
    "ar": "الأحنف بن قيس بن معاوية بن الحصين التميمي البصري (نحو 20 ق هـ - 72 هـ / 602 - 691م)، سيد تميم البصرة كلها."
  },
  "refs": [
    {
      "label": "Wikipedia — الأحنف بن قيس",
      "url": "https://ar.wikipedia.org/wiki/الأحنف_بن_قيس"
    }
  ]
},
{
  "id": "al-arqam-bin-abi-al-arqam-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الأرقم بن أبي الأرقم",
  "en": "Al Arqam Bin Abi Al Arqam Street",
  "meaning": {
    "en": "A Companion whose house sheltered the early Muslims",
    "ar": "صحابي كان بيته مركز الدعوة"
  },
  "story": {
    "en": "Al-Arqam ibn Abi al-Arqam was among the earliest Muslims; his house in Mecca served as the first meeting place of the community.",
    "ar": "أبو عبد الله الأرقم بن أبي الأرقم عبد مناف بن أسد المخزومي صحابي من السابقين الأولين في الدخول إلى الإسلام. اتخذ النبي محمد من دار الأرقم مقراً للدعوة بداية الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — الأرقم بن أبي الأرقم",
      "url": "https://ar.wikipedia.org/wiki/الأرقم_بن_أبي_الأرقم"
    }
  ]
},
{
  "id": "al-aswad-bin-hilal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الأسوَد بن هِلال",
  "en": "Al Aswad Bin Hilal Street",
  "meaning": {
    "en": "A senior Kufan Tabi'i",
    "ar": "تابعي كوفي من الثقات"
  },
  "story": {
    "en": "Al-Aswad ibn Hilal al-Muharibi was a Kufan transmitter of hadith among the senior Tabi'un.",
    "ar": "الأسود بن هلال المحاربي، أبو سلام الكوفي، راوي حديث من كبار التابعين، أدرك عصر النبي محمد، كان من الثقات المتقنين في روا."
  },
  "refs": [
    {
      "label": "Wikipedia — الأسود بن هلال",
      "url": "https://ar.wikipedia.org/wiki/الأسود_بن_هلال"
    }
  ]
},
{
  "id": "al-baraa-bin-malik-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع البراء بن مالك",
  "en": "Al Baraa Bin Malik Street",
  "meaning": {
    "en": "An Ansari Companion, killed at Tustar",
    "ar": "صحابي أنصاري استُشهد بتستر"
  },
  "story": {
    "en": "Al-Bara' ibn Malik al-Ansari (d. 20 AH / 641 CE) was a Companion who fought at Badr and elsewhere and was killed at Tustar.",
    "ar": "البراء بن مالك الأنصاري (المتوفى سنة 20 هـ الموافق 641 م) هو صحابي، شهد عدد من غزوات النبي محمد صلى الله عليه وسلم وفتوح العراق وفارس، واستشهد في فتح تستر، وهو."
  },
  "refs": [
    {
      "label": "Wikipedia — البراء بن مالك",
      "url": "https://ar.wikipedia.org/wiki/البراء_بن_مالك"
    }
  ]
},
{
  "id": "al-harith-bin-abi-dirar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الحارِث بن أبي ضِرار",
  "en": "Al Harith Bin Abi Dirar Street",
  "meaning": {
    "en": "Chief of Banu al-Mustaliq, father of Juwayriyya",
    "ar": "سيد بني المصطلق وأبو جويرية"
  },
  "story": {
    "en": "Al-Harith ibn Abi Dirar was a Companion and the father of Juwayriyya bint al-Harith, a wife of the Prophet.",
    "ar": "الحارث بن أبي ضرار، صحابي وأبو جويرية بنت الحارث، زوجة النبي وأم المؤمنين."
  },
  "refs": [
    {
      "label": "Wikipedia — الحارث بن أبي ضرار",
      "url": "https://ar.wikipedia.org/wiki/الحارث_بن_أبي_ضرار"
    }
  ]
},
{
  "id": "iben-al-quff-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن القف",
  "en": "Iben Al Quff Street",
  "meaning": {
    "en": "A physician and surgeon from Karak",
    "ar": "طبيب وجراح من الكرك"
  },
  "story": {
    "en": "Ibn al-Quff al-Karaki (630–685 AH / 1232–1286 CE) was a physician and scholar who grew up in Karak and wrote medical works.",
    "ar": "أبو الفرج أمين الدولة بن يعقوب المعروف بابن القف الكركي (630–685 هـ / 1232–1286 م) كان طبيبًا وعالمًا، نشأ في مدينة الكرك وكتب مصنفات طبية."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن القف الكركي",
      "url": "https://ar.wikipedia.org/wiki/ابن_القف_الكركي"
    }
  ]
},
{
  "id": "iben-al-tufail-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن الطفيل",
  "en": "Iben Al Tufail Street",
  "meaning": {
    "en": "An Andalusian philosopher and physician",
    "ar": "فيلسوف وطبيب أندلسي"
  },
  "story": {
    "en": "Ibn Tufayl (c. 1105–1185) was an Andalusian philosopher and physician, author of Hayy ibn Yaqzan.",
    "ar": "أَبُو بَكْرْ مُحَمَّدْ بْنْ عَبْدِ اَلْمَلِكْ بْنْ مُحَمَّدْ بْنْ مُحَمَّدْ بْنْ طُفَيْلِ اَلْقَيْسِي اَلْأَنْدَلُسِيَّ المعرو."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن طفيل",
      "url": "https://ar.wikipedia.org/wiki/ابن_طفيل"
    }
  ]
},
{
  "id": "ibn-al-muqaffa-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن المقفع",
  "en": "Ibn Al Muqaffa' Street",
  "meaning": {
    "en": "A Persian-Arab author and translator",
    "ar": "أديب ومترجم فارسي"
  },
  "story": {
    "en": "Abdullah ibn al-Muqaffa' (724–759) was an author and translator who rendered Kalila wa Dimna into Arabic.",
    "ar": "أبو مُحمّد عبد الله بن المقفع (106 - 142 هـ)(724 م ـ 759 م) (بالفارسية: ابن مقفع - أبو مٰحَمَّد عبد الله واسمه روزبه بن داذويه قبل إسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الله بن المقفع",
      "url": "https://ar.wikipedia.org/wiki/عبد_الله_بن_المقفع"
    }
  ]
},
{
  "id": "iben-katheer-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ابن كثير",
  "en": "Iben Katheer Street",
  "meaning": {
    "en": "A historian, traditionist and Qur'an commentator",
    "ar": "مؤرخ ومحدث ومفسر"
  },
  "story": {
    "en": "Ibn Kathir (701–774 AH / 1301–1373 CE) was a historian and hadith scholar, author of a well-known Qur'an commentary.",
    "ar": "ابن كثير الدمشقي (701- 774 هـ / 1301- 1373 م) هو عِمادُ الدِّينِ أبُو الفِداءِ إسْماعِيلُ بنُ عُمَرَ بنِ كَثِيرِ بنِ ضَوِّ بنِ دِرْعٍ القُرَشِيُّ الحَ."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن كثير الدمشقي",
      "url": "https://ar.wikipedia.org/wiki/ابن_كثير_الدمشقي"
    }
  ]
},
{
  "id": "arwa-bint-abd-al-muttalib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أروَى بنت عبدالمطلب",
  "en": "Arwa Bint Abd Al Muttalib Street",
  "meaning": {
    "en": "A paternal aunt of the Prophet and a poet",
    "ar": "عمة النبي وشاعرة"
  },
  "story": {
    "en": "Arwa bint Abd al-Muttalib (d. 15 AH) was a paternal aunt of the Prophet and one of the poets of Quraysh.",
    "ar": "أَرْوَىٰ بِنْتُ عَبْدِ المُطَّلِبِ القُرَشِيَّةُ (تـ 15 هـ) عمة النبي محمد صلى الله عليه وسلم وعلي بن أبي طالب، وهي من الشواعر."
  },
  "refs": [
    {
      "label": "Wikipedia — أروى بنت عبد المطلب",
      "url": "https://ar.wikipedia.org/wiki/أروى_بنت_عبد_المطلب"
    }
  ]
},
{
  "id": "abi-obaid-bin-masoud-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبي عبيد بن مسعود",
  "en": "Abi Obaid Bin Masoud Street",
  "meaning": {
    "en": "A Companion and commander in Iraq",
    "ar": "صحابي وقائد في العراق"
  },
  "story": {
    "en": "Abu Ubayd ibn Mas'ud al-Thaqafi (d. 13 AH) was a Companion and commander killed at the Battle of the Bridge in Iraq.",
    "ar": "أبو عبيد بن مسعود الثقفي، (ت 13 هـ)، صحابي، أسلم في عهد النبي محمد، وهو والد المختار بن أبي عبيد وصفية بنت أبي عبيد، قُتِل في موقعة الجسر عام 13 هـ."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو عبيد الثقفي",
      "url": "https://ar.wikipedia.org/wiki/أبو_عبيد_الثقفي"
    }
  ]
},
{
  "id": "as-sa-ib-bin-uthman-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع السَّائِب بن عُثمان",
  "en": "As Sa-ib Bin 'Uthman Street",
  "meaning": {
    "en": "Companion of the Prophet Muhammad",
    "ar": "صحابي من السابقين الأولين"
  },
  "story": {
    "en": "Al-Sāʾib bin ʿUthmān bin Maẓʿūn (603–632) was a companion of the Prophet Muhammad.",
    "ar": "السائب بن عثمان بن مظعون الجمحي (المتوفي سنة 12 هـ) صحابي بدري من السابقين إلى الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia — السائب بن عثمان بن مظعون",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B3%D8%A7%D8%A6%D8%A8_%D8%A8%D9%86_%D8%B9%D8%AB%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D9%85%D8%B8%D8%B9%D9%88%D9%86"
    }
  ]
},
{
  "id": "um-sulaym-bint-milhan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أم سُلَيم بنت مِلحان",
  "en": "Um Sulaym Bint Milhan Street",
  "meaning": {
    "en": "One of the earliest women converts to Islam in Yathrib",
    "ar": "الرميصاء"
  },
  "story": {
    "en": "Rumaysa bint Milhan (600–650) was an one of the earliest women converts to Islam in Yathrib.",
    "ar": "أم سليم بنت ملحان الخزرجية صحابية كانت من السابقات إلى الإسلام في المدينة المنورة من الأنصار."
  },
  "refs": [
    {
      "label": "Wikipedia — أم سليم بنت ملحان",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D9%85_%D8%B3%D9%84%D9%8A%D9%85_%D8%A8%D9%86%D8%AA_%D9%85%D9%84%D8%AD%D8%A7%D9%86"
    }
  ]
},
{
  "id": "ad-dahhak-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الضَّحَّاك بن قيس",
  "en": "Ad Dahhak Bin Qays Street",
  "meaning": {
    "en": "Umayyad general and governor of Damascus",
    "ar": "صحابي من صغار الصحابة وله أحاديث نبوية"
  },
  "story": {
    "en": "Al-Dahhak ibn Qays al-Fihri (625–684) was an Umayyad general and governor of Damascus.",
    "ar": "أبو عبد الرحمن الضحاك بن قيس الفهري القرشي الكناني (4 هـ - 64 هـ / 625م - 684م) صحابي من صغار الصحابة وله أحادي."
  },
  "refs": [
    {
      "label": "Wikipedia — الضحاك بن قيس الفهري",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B6%D8%AD%D8%A7%D9%83_%D8%A8%D9%86_%D9%82%D9%8A%D8%B3_%D8%A7%D9%84%D9%81%D9%87%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "al-habab-bin-munther-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحباب بن منذر",
  "en": "Al Habab Bin Munther Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحباب بن منذر” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحباب بن منذر» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-hur-bin-abdullarahman-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحر بن عبدالرحمن",
  "en": "Al Hur Bin Abdullarahman Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحر بن عبدالرحمن” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحر بن عبدالرحمن» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-hur-bin-malek-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحر بن مالك",
  "en": "Al Hur Bin Malek Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحر بن مالك” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحر بن مالك» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-hussain-bin-al-hareth-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحسين بن الحارث",
  "en": "Al Hussain Bin Al Hareth Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحسين بن الحارث” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحسين بن الحارث» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-husayn-bin-as-sa-ib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحسين بن السَّائِب",
  "en": "Al Husayn Bin As Sa-ib Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحسين بن السَّائِب” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحسين بن السَّائِب» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-husayn-bin-sabrah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحُصَين بن سبرة",
  "en": "Al Husayn Bin Sabrah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحصين بن سبره” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحصين بن سبره» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-hakam-bin-al-nahas-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحكم بن النحاس",
  "en": "Al Hakam Bin Al Nahas Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الحكم بن النحاس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الحكم بن النحاس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-khalil-ahmed-bin-mohammed-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الخليل أحمد بن محمد",
  "en": "Al Khalil Ahmed Bin Mohammed Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الخليل احمد بن محمد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الخليل احمد بن محمد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "alrada-bin-beyat-al-muhairi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الرضه بن بيات المهيري",
  "en": "Alrada Bin Beyat Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Alrada Bin Beyat Al Muhairi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الرضه بن بيات المهيري، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-sah-bin-fulan-al-mazni-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع السه بن فولان المزني",
  "en": "Al Sah Bin Fulan Al Mazni Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “السه بن فولان المزني” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «السه بن فولان المزني» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-shifa-bint-abdullah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشفاء بنت عبدالله",
  "en": "Al Shifa Bint Abdullah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الشفاء بنت عبدالله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الشفاء بنت عبدالله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "sultan-bin-hwaidn-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد سلطان بن هويدن",
  "en": "Sultan Bin Hwaidn Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الشهيد سلطان بن هويدن” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الشهيد سلطان بن هويدن» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "alsaghir-bin-khadem-al-khaili-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الصغيّر بن خادم الخييلي",
  "en": "Alsaghir Bin Khadem Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Alsaghir Bin Khadem Al Khaili, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الصغيّر بن خادم الخييلي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alayena-bin-aseyan-al-ameri-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع العيينه بن عصيان العامري",
  "en": "Alayena Bin Aseyan Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Alayena Bin Aseyan Al Ameri, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم العيينه بن عصيان العامري، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-fakeh-bin-basheer-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفاكه بن بشير",
  "en": "Al Fakeh Bin Basheer Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الفاكه بن بشير” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الفاكه بن بشير» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-fadel-bin-abbas-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفضل بن عباس",
  "en": "Al Fadel Bin Abbas Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الفضل بن عباس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الفضل بن عباس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-fadhel-bin-ali-abbas-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفضل بن علي عباس",
  "en": "Al Fadhel Bin Ali Abbas Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الفضل بن علي عباس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الفضل بن علي عباس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-fadl-bin-maymoun-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفَضل بن مَيمُون",
  "en": "Al Fadl Bin Maymoun Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الفضل بن ميمون” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الفضل بن ميمون» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "alfindi-bin-ghanem-al-mazrouei-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفندي بن غانم المزروعي",
  "en": "Alfindi Bin Ghanem Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Alfindi Bin Ghanem Al Mazrouei, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الفندي بن غانم المزروعي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alkindi-bin-musabah-al-marar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الكندي بن مصبح المرر",
  "en": "Alkindi Bin Musabah Al Marar Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Alkindi Bin Musabah Al Marar, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الكندي بن مصبح المرر، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-layth-bin-sa-ed-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الليث بن سعيد",
  "en": "Al Layth Bin Sa'ed Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الليث بن سعيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الليث بن سعيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-majody-bin-dhahir-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الماجدي بن ظاهر",
  "en": "Al Majody Bin Dhahir Street",
  "translit": "Shāriʿ al-Mājidī ibn Ẓāhir",
  "meaning": {
    "en": "A Nabati poet from Ras al-Khaimah",
    "ar": "شاعر نبطي من رأس الخيمة"
  },
  "story": {
    "en": "Al-Majidi ibn Zahir (1781–1871) was an Emirati Nabati poet from Ras al-Khaimah who worked as a pearl trader and diver.",
    "ar": "الماجدي ابن ظاهر (١٧٨١–١٨٧١م) شاعر نبطي إماراتي من رأس الخيمة، عمل في تجارة اللؤلؤ والغوص عليه."
  },
  "refs": [
    {
      "label": "Wikipedia — الماجدي ابن ظاهر",
      "url": "https://ar.wikipedia.org/wiki/الماجدي_ابن_ظاهر"
    }
  ]
},
{
  "id": "al-waleed-bin-abdulmalik-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الوَلِيد بن عبدالمَلك",
  "en": "Al Waleed Bin Abdulmalik Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الوليد بن عبدالملك” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الوليد بن عبدالملك» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "um-kulthoum-bint-al-abbas-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أم كُلثُوم بنت العَبَّاس",
  "en": "Um Kulthoum Bint Al 'Abbas Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “أم كُلثُوم بنت العَبَّاس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «أم كُلثُوم بنت العَبَّاس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "um-waraqah-bint-abdullah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أم وَرَقة بنت عبدالله",
  "en": "Um Waraqah Bint Abdullah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ام ورقه بنت عبدالله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ام ورقه بنت عبدالله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "aws-bin-obadah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أوس بن عبادة",
  "en": "Aws Bin Obadah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “اوس بن عباده” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «اوس بن عباده» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "iyas-bin-tha-labah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع إياس بن ثَعلَبة",
  "en": "Iyas Bin Tha'labah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “اياس بن ثعلبه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «اياس بن ثعلبه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bakhit-bin-khalfan-al-khaili-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بخيت بن خلفان الخييلي",
  "en": "Bakhit Bin Khalfan Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Bakhit Bin Khalfan Al Khaili, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بخيت بن خلفان الخييلي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "bakheet-bin-mohsin-al-mazrouei-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بخيت بن محسن المزروعي",
  "en": "Bakheet Bin Mohsin Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Bakheet Bin Mohsin Al Mazrouei, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بخيت بن محسن المزروعي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "bakhit-bin-maizer-al-rumaithi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بخيت بن ميزر الرميثي",
  "en": "Bakhit Bin Maizer Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Bakhit Bin Maizer Al Rumaithi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بخيت بن ميزر الرميثي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "basheer-bin-al-khasasya-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بشير بن الخصاصية",
  "en": "Basheer Bin Al Khasasya Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشير بن الخصاصية” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشير بن الخصاصية» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "basheer-bin-ma-bad-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بَشِير بن مَعبَد",
  "en": "Basheer Bin Ma'bad Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشير بن معبد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشير بن معبد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bat-ha-bin-hilal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بَطحَا بن هِلال",
  "en": "Bat-ha Bin Hilal Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بطحا بن هلال” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بطحا بن هلال» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "butti-bin-almughni-al-qubaisi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن المغنى القبيسي",
  "en": "Butti Bin Almughni Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Butti Bin Almughni Al Qubaisi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن المغنى القبيسي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "bikr-bin-umayah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بكر بن أمَيَّة",
  "en": "Bikr Bin Umayah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بكر بن اميه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بكر بن اميه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "beyat-bin-mohammed-al-hameli-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بيات بن محمد الهاملي",
  "en": "Beyat Bin Mohammed Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Beyat Bin Mohammed Al Hameli, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بيات بن محمد الهاملي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "tamam-bin-nasser-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع تمام بن ناصر",
  "en": "Tamam Bin Nasser Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “تمام بن ناصر” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «تمام بن ناصر» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "tameem-bin-usayd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع تَمِيم بن أسَيد",
  "en": "Tameem Bin Usayd Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “تميم بن اسيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «تميم بن اسيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "tameem-bin-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع تَمِيم بن الحارِث",
  "en": "Tameem Bin Al Harith Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “تَمِيم بن الحارِث” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «تَمِيم بن الحارِث» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-zayd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن زَيد",
  "en": "Thabit Bin Zayd Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن زيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن زيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-obied-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابت بن عبيد",
  "en": "Thabit Bin Obied Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن عبيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن عبيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabet-bin-wae-alah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابت بن وائلة",
  "en": "Thabet Bin Wae'alah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن وائله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن وائله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-waqsh-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن وَقش",
  "en": "Thabit Bin Waqsh Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن وقش” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن وقش» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-yazeed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن يَزِيد",
  "en": "Thabit Bin Yazeed Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن يزيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن يزيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thani-bin-abdullah-al-rumaithi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثاني بن عبدالله الرميثي",
  "en": "Thani Bin Abdullah Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Thani Bin Abdullah Al Rumaithi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ثاني بن عبدالله الرميثي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "thawban-bin-bujdud-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثَوبان بن بُجدُد",
  "en": "Thawban Bin Bujdud Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثوبان بن بجدد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثوبان بن بجدد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jabalah-bin-tha-labah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جَبَلة بن ثَعلَبة",
  "en": "Jabalah Bin Tha'labah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جبله بن ثعلبه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جبله بن ثعلبه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jabalah-bin-sharaheel-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جَبَلة بن شَراحِيل",
  "en": "Jabalah Bin Sharaheel Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جبله بن شراحيل” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جبله بن شراحيل» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jazayir-bin-ifaysan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جَزايِر بن عِفَيصان",
  "en": "Jazayir Bin 'Ifaysan Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جزاير بن عفيصان” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جزاير بن عفيصان» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jaz-at-bin-ta-bah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جَزعة بن تاعبة",
  "en": "Jaz'at Bin Ta'bah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جزعه بن تاعبه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جزعه بن تاعبه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "juma-bin-bakhit-al-darmaki-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن بخيت الدرمكي",
  "en": "Juma Bin Bakhit Al Darmaki Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Bakhit Al Darmaki, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن بخيت الدرمكي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "jumaa-bin-hathboor-al-rumaithi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعه بن حثبور الرميثي",
  "en": "Jumaa Bin Hathboor Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Jumaa Bin Hathboor Al Rumaithi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعه بن حثبور الرميثي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "harithah-bin-sahl-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حارِثة بن سَهل",
  "en": "Harithah Bin Sahl Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حارثه بن سهل” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حارثه بن سهل» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "harithah-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حارِثة بن عَمرو",
  "en": "Harithah Bin 'Amr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حارثه بن عمرو” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حارثه بن عمرو» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "harithah-bin-wahb-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حارِثة بن وَهب",
  "en": "Harithah Bin Wahb Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حارثه بن وهب” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حارثه بن وهب» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "hamed-bin-butti-al-qubaisi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حامد بن بطي القبيسي",
  "en": "Hamed Bin Butti Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Butti Al Qubaisi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حامد بن بطي القبيسي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "habbab-bin-qaithy-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حباب بن قيظي",
  "en": "Habbab Bin Qaithy Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حباب بن قيظي” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حباب بن قيظي» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-abi-al-yusr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن أَبِي اليسر",
  "en": "Habeeb Bin Abi Al Yusr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حَبِيب بن أَبِي اليسر” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حَبِيب بن أَبِي اليسر» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-wahb-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن وَهب",
  "en": "Habeeb Bin Wahb Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حبيب بن وهب” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حبيب بن وهب» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "aldahham-bin-zayed-al-mazrouei-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الدحّام بن زايد المزروعي",
  "en": "Aldahham Bin Zayed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Aldahham Bin Zayed Al Mazrouei, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الدحّام بن زايد المزروعي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "aldoda-bin-maktoum-al-sheraifi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الدودة بن مكتوم الشريفي",
  "en": "Aldoda Bin Maktoum Al Sheraifi Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Aldoda Bin Maktoum Al Sheraifi, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الدودة بن مكتوم الشريفي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-rabab-bint-haretha-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الرباب بنت حارثة",
  "en": "Al Rabab Bint Haretha Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “الرباب بنت حارثه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «الرباب بنت حارثه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "altaher-bin-ali-al-marar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الطاهر بن علي المرر",
  "en": "Altaher Bin Ali Al Marar Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Altaher Bin Ali Al Marar, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الطاهر بن علي المرر، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-as-bin-hashim-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع العاص بن هاشِم",
  "en": "Al 'As Bin Hashim Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “العاص بن هاشم” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «العاص بن هاشم» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "umaymah-bint-abd-al-muttalib-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أمَيمة بنت عبدالمطلب",
  "en": "Umaymah Bint Abd Al Muttalib Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “اميمه بنت عبدالمطلب” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «اميمه بنت عبدالمطلب» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "anas-bin-fudalah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أنَس بن فَضالة",
  "en": "Anas Bin Fudalah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “انس بن فضاله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «انس بن فضاله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "anis-bin-qatadah-khaythamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أنيس بن قتادة خيثمة",
  "en": "Anis Bin Qatadah Khaythamah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “انيس بن قتاده خيثمه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «انيس بن قتاده خيثمه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "tameem-bin-salamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع تَمِيم بن سَلَمة",
  "en": "Tameem Bin Salamah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “تميم بن سلمه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «تميم بن سلمه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabet-bin-al-jathe-al-ansari-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابت بن الجذع الأنصاري",
  "en": "Thabet Bin Al Jathe' Al Ansari Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن الجذع الأنصاري” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن الجذع الأنصاري» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن الحارِث",
  "en": "Thabit Bin Al Harith Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابِت بن الحارِث” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابِت بن الحارِث» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-as-samit-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن الصَّامِت",
  "en": "Thabit Bin As Samit Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابِت بن الصَّامِت” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابِت بن الصَّامِت» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-deenar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن دِينار",
  "en": "Thabit Bin Deenar Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن دينار” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن دينار» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "thabit-bin-rifa-ah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثابِت بن رِفاعة",
  "en": "Thabit Bin Rifa'ah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “ثابت بن رفاعه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «ثابت بن رفاعه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jabir-bin-sheeban-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جَابِرُ بن شَيبان",
  "en": "Jabir Bin Sheeban Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جابر بن شيبان” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جابر بن شيبان» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "hatim-bin-adiy-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حاتِم بن عَدِي",
  "en": "Hatim Bin 'Adiy Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حاتم بن عدي” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حاتم بن عدي» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "hajeb-bin-zeid-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حاجب بن زيد",
  "en": "Hajeb Bin Zeid Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حاجب بن زيد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حاجب بن زيد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "hajji-bin-abdullah-al-khoury-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حاجي بن عبدالله الخوري",
  "en": "Hajji Bin Abdullah Al Khoury Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حاجي بن عبدالله الخوري” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حاجي بن عبدالله الخوري» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "hareb-bin-sabt-al-khaili-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حارب بن سبت الخييلي",
  "en": "Hareb Bin Sabt Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of Hareb Bin Sabt Al Khaili, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حارب بن سبت الخييلي، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "habeeb-bin-al-harith-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن الحارِث",
  "en": "Habeeb Bin Al Harith Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حَبِيب بن الحارِث” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حَبِيب بن الحارِث» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-ad-dahhak-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن الضَّحَّاك",
  "en": "Habeeb Bin Ad Dahhak Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حَبِيب بن الضَّحَّاك” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حَبِيب بن الضَّحَّاك» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-hamamah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن حَمامة",
  "en": "Habeeb Bin Hamamah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حبيب بن حمامه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حبيب بن حمامه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-siba-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن سِباع",
  "en": "Habeeb Bin Siba' Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حبيب بن سباع” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حبيب بن سباع» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "habeeb-bin-umayr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حَبِيب بن عُمَير",
  "en": "Habeeb Bin 'Umayr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “حبيب بن عمير” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «حبيب بن عمير» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bad-bin-ahmed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بَدع بن أحمد",
  "en": "Bad' Bin Ahmed Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بدع بن احمد” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بدع بن احمد» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "barakah-bint-tha-alabah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بركة بنت ثعلبة",
  "en": "Barakah Bint Tha'alabah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بركه بنت ثعلبه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بركه بنت ثعلبه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bishr-bin-abdullah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بِشر بن عبدالله",
  "en": "Bishr Bin Abdullah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشر بن عبدالله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشر بن عبدالله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bashr-bin-amr-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بشر بن عمرو",
  "en": "Bashr Bin Amr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشر بن عمرو” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشر بن عمرو» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bishr-bin-qays-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بِشر بن قَيس",
  "en": "Bishr Bin Qays Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشر بن قيس” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشر بن قيس» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "bshr-bin-mu-awyah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بشر بن معاوية",
  "en": "Bshr Bin Mu'awyah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “بشر بن معاويه” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «بشر بن معاويه» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "tamim-bin-bishr-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع تميم بن بشر",
  "en": "Tamim Bin Bishr Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “تميم بن بشر” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «تميم بن بشر» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "jaber-bin-abdullah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جابر بن عبدالله",
  "en": "Jaber Bin Abdullah Street",
  "meaning": {
    "en": "Identity not established",
    "ar": "الهوية غير محددة"
  },
  "story": {
    "en": "No published source was found identifying who “جابر بن عبدالله” — the name this street carries — was.",
    "ar": "لم يُعثر على مصدر منشور يحدد من هو «جابر بن عبدالله» الذي يحمل الشارع اسمه."
  },
  "refs": []
},
{
  "id": "al-hakam-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الحكَم بن عَمرو",
  "en": "Al Hakam Bin 'Amr Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "صحابي"
  },
  "story": {
    "en": "Al-Hakam ibn Amr al-Ghifari (d. 670) was a companion of Muhammad.",
    "ar": "الحكم بن عمرو الغفاري الكناني صحابي جليل، وقائد عسكري كبير من كبار قادة الفتوحات الإ."
  },
  "refs": [
    {
      "label": "Wikipedia — الحكم بن عمرو الغفاري",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AD%D9%83%D9%85_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88_%D8%A7%D9%84%D8%BA%D9%81%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "al-qa-qa-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع القعقاع بن عمرو",
  "en": "Al Qa'qa' Bin 'Amr Street",
  "meaning": {
    "en": "Islamic military commander",
    "ar": "قائد عسكري مسلم"
  },
  "story": {
    "en": "Al-Qa'qa' ibn Amr al-Tamimi was a companion and commander who fought in the conquest of Iraq.",
    "ar": "القعقاع بن عمرو التميمي صحابي وقائد، شهد فتوح العراق في عهد عمر بن الخطاب."
  },
  "refs": [
    {
      "label": "Wikipedia — القعقاع بن عمرو التميمي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%B9%D9%82%D8%A7%D8%B9_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88_%D8%A7%D9%84%D8%AA%D9%85%D9%8A%D9%85%D9%8A"
    }
  ]
},
{
  "id": "iyas-bin-al-bakeer-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع إياس بن البكير",
  "en": "Iyas Bin Al Bakeer Street",
  "meaning": {
    "en": "Iyās ibn Abī al-Bukayr ibn ʿAbd Yā Lail al-Laythī was an early sahabi (companion) of the I",
    "ar": "صحابي من السابقين الأولين"
  },
  "story": {
    "en": "Iyas ibn Abi al-Bukayr was an early companion of the Prophet Muhammad who fought at Badr.",
    "ar": "إياس بن البكير الليثي (المتوفي سنة 34 هـ) صحابي بدري من السابقين إلى الإسلام، شهد غزوات النبي محمد كلها."
  },
  "refs": [
    {
      "label": "Wikipedia — Iyās ibn Abī al-Bukayr",
      "url": "https://en.wikipedia.org/wiki/Iy%C4%81s_ibn_Ab%C4%AB_al-Bukayr"
    }
  ]
},
{
  "id": "bilal-bin-abi-ad-darda-a-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع بِلال بن أبي الدَّرداء",
  "en": "Bilal Bin Abi Ad Darda-a Street",
  "meaning": {
    "en": "judge",
    "ar": "تابعي وأحد رواة الحديث النبوي وقاضي"
  },
  "story": {
    "en": "Bilal ibn Abi al-Darda was a judge of Damascus in the Umayyad period.",
    "ar": "أبو محمد بلال بن أبي الدرداء الأنصاري الد."
  },
  "refs": [
    {
      "label": "Wikipedia — بلال بن أبي الدرداء",
      "url": "https://ar.wikipedia.org/wiki/%D8%A8%D9%84%D8%A7%D9%84_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%A7%D9%84%D8%AF%D8%B1%D8%AF%D8%A7%D8%A1"
    }
  ]
},
{
  "id": "thumamah-bin-uthal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ثُمامة بن أثال",
  "en": "Thumamah Bin Uthal Street",
  "meaning": {
    "en": "ruler of Yamama during Muhammad's era",
    "ar": "صحابي، كان سيد أهل اليمامة"
  },
  "story": {
    "en": "Thumama ibn Uthal was a chief of the Banu Hanifa and a ruler of al-Yamama.",
    "ar": "ثمامة بن أثال (ت: 12هـ/ 633م)، صحابي وأول معتمر في الإسلام وأول مسلمٍ يدخل مكة ملبِّياً."
  },
  "refs": [
    {
      "label": "Wikipedia — ثمامة بن أثال",
      "url": "https://ar.wikipedia.org/wiki/%D8%AB%D9%85%D8%A7%D9%85%D8%A9_%D8%A8%D9%86_%D8%A3%D8%AB%D8%A7%D9%84"
    }
  ]
},
{
  "id": "jareer-bin-abdullah-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جرير بن عبد الله",
  "en": "Jareer Bin Abdullah Street",
  "meaning": {
    "en": "Muhammad's companion",
    "ar": "صحابي وراوي حديث"
  },
  "story": {
    "en": "Jarir ibn Abd Allah al-Bajali (d. 671) was a companion of the Prophet Muhammad and chief of the Bajila.",
    "ar": "أَبُو عَمْرٍو جَرِيرُ بْنُ عَبْدِ اللهِ بْنِ جَابِرٍ الْبَجَلِيُّ."
  },
  "refs": [
    {
      "label": "Wikipedia — جرير بن عبد الله البجلي",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D8%B1%D9%8A%D8%B1_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%84%D9%87_%D8%A7%D9%84%D8%A8%D8%AC%D9%84%D9%8A"
    }
  ]
},
{
  "id": "ja-far-bin-abi-taleb-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جعفر بن أبي طالب",
  "en": "Ja'far Bin Abi Taleb Street",
  "meaning": {
    "en": "Companion (Sahabi) and cousin of Muhammad",
    "ar": "صحابي جليل وقائد مسلم، ومن السابقين الأولين إلى الإسلام رضي الله عنه"
  },
  "story": {
    "en": "Ja'far ibn Abi Talib was a companion, a cousin of the Prophet Muhammad, and the leader of the migration to Abyssinia.",
    "ar": "جَعفَرُ بن أبي طالِبِ بن عَبدِ المُطَّلِبِ الهاشِميُّ القُرَشيُّ المشهور بـجَعْفَر الطيَّار."
  },
  "refs": [
    {
      "label": "Wikipedia — جعفر بن أبي طالب",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D8%B9%D9%81%D8%B1_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%B7%D8%A7%D9%84%D8%A8"
    }
  ]
},
{
  "id": "jumanah-bint-abi-taleb-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جُمانة بنت أبي طالِب",
  "en": "Jumanah Bint Abi Taleb Street",
  "meaning": {
    "en": "Sahaba of Muhammad",
    "ar": "شقيقة علي بن أبي طالب"
  },
  "story": {
    "en": "Jumanah bint Abi Talib was a woman companion and a cousin of the Prophet Muhammad.",
    "ar": "جُمَانَة بنت أبي طالب الهاشمية القرشية، صحابية."
  },
  "refs": [
    {
      "label": "Wikipedia — جمانة بنت أبي طالب",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D9%85%D8%A7%D9%86%D8%A9_%D8%A8%D9%86%D8%AA_%D8%A3%D8%A8%D9%8A_%D8%B7%D8%A7%D9%84%D8%A8"
    }
  ]
},
{
  "id": "at-tufayl-bin-amr-street",
 "emirate": "abu-dhabi",
 "category": "person",
 "origin": "documented",
 "ar": "شارع الطُّفَيل بن عَمرو",
 "en": "At Tufayl Bin 'Amr Street",
 "meaning": {
 "en": "Chief of the Banu Daws tribe",
 "ar": "شاعر وأحد الأشراف من قبيلة زهران، في الجاهلية والإسلام"
 },
 "story": {
 "en": "Tufayl ibn Amr al-Dawsi was the chief of the Banu Daws who invited his people to Islam.",
 "ar": "الطفيل بن عمرو الدوسي الزهراني صحابي من أوائل السابقين إلى الإسلام."
 },
 "refs": [
 {
 "label": "Wikipedia — الطفيل بن عمرو الدوسي",
 "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B7%D9%81%D9%8A%D9%84_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88_%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D9%8A"
 }
 ]
},
{
  "id": "an-nu-ayman-bin-amr-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع النعيمان بن عمرو",
  "en": "An Nu'ayman Bin 'Amr Street",
  "meaning": {
    "en": "Companion of Muhammad",
    "ar": "من الصحابة، مزّاح، شهد معارك بدر وأحد والخندق"
  },
  "story": {
    "en": "Al-Nuayman ibn Amr (d. 652) was a companion of Muhammad.",
    "ar": "النعيمان بن عمرو صحابي من الأنصار من بني غنم بن مالك بن النجار من الخزرج."
  },
  "refs": [
    {
      "label": "Wikipedia — النعيمان بن عمرو الأنصاري",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%86%D8%B9%D9%8A%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D9%85%D8%B1%D9%88_%D8%A7%D9%84%D8%A3%D9%86%D8%B5%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "aminah-bint-wahab-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع آمنه بنت وهب",
  "en": "Aminah Bint Wahab Street",
  "meaning": {
    "en": "Mother of Muhammad",
    "ar": "أم النبي محمد، زوجة عبد الله بن عبد المطلب"
  },
  "story": {
    "en": "Aminah bint Wahb (d. 577 CE) was the mother of the Prophet Muhammad.",
    "ar": "آمنة بنت وهب بن عبد مناف بن زُهرة القرشية هي أمُّ النب."
  },
  "refs": [
    {
      "label": "Wikipedia — آمنة بنت وهب",
      "url": "https://ar.wikipedia.org/wiki/%D8%A2%D9%85%D9%86%D8%A9_%D8%A8%D9%86%D8%AA_%D9%88%D9%87%D8%A8"
    }
  ]
},
{
  "id": "thabet-bin-aqram-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ثابت بن أقرم",
  "en": "Thabet Bin Aqram Street",
  "meaning": {
    "en": "Companions of the prophet",
    "ar": "شخصية تاريخية"
  },
  "story": {
    "en": "Thabit ibn Aqram was a companion of the Prophet Muhammad who fought at Badr.",
    "ar": "ثابت بن أقرم البلوي (المتوفي سنة 11 هـ) صحابي من بلي."
  },
  "refs": [
    {
      "label": "Wikipedia — ثابت بن أقرم",
      "url": "https://ar.wikipedia.org/wiki/%D8%AB%D8%A7%D8%A8%D8%AA_%D8%A8%D9%86_%D8%A3%D9%82%D8%B1%D9%85"
    }
  ]
},
{
  "id": "habeeb-bin-zayd-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حَبِيب بن زَيد",
  "en": "Habeeb Bin Zayd Street",
  "meaning": {
    "en": "companion (Sahabi) of Muhammad",
    "ar": "شخصية تاريخية"
  },
  "story": {
    "en": "Habib ibn Zayd al-Ansari (d. 11 AH) was an Ansari companion sent as an envoy to Musaylimah, who killed him.",
    "ar": "حبيب بن زيد بن عاصم (المتوفى سنة 11 هـ) صحابي من الأنصار من بني مازن بن النجار، أرسله النبي إلى مسيلمة فقتله."
  },
  "refs": [
    {
      "label": "Wikipedia — حبيب بن زيد بن عاصم",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D8%A8%D9%8A%D8%A8_%D8%A8%D9%86_%D8%B2%D9%8A%D8%AF_%D8%A8%D9%86_%D8%B9%D8%A7%D8%B5%D9%85"
    }
  ]
},
{
  "id": "besher-bin-safwan-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع بشر بن صفوان",
  "en": "Besher Bin Safwan Street",
  "meaning": {
    "en": "umayyad Provincial governor in 720s",
    "ar": "والي مصر في عهد الدولة الأموية"
  },
  "story": {
    "en": "Bishr ibn Safwan al-Kalbi was an Umayyad governor of Egypt and Ifriqiya.",
    "ar": "هو بشر بن صفوان ابن تويل بن بشر بن حنظلة بن علقمة بن شرحبيل بن عدس بن أبي جابر بن زهير بن جنا."
  },
  "refs": [
    {
      "label": "Wikipedia — بشر بن صفوان الكلبي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A8%D8%B4%D8%B1_%D8%A8%D9%86_%D8%B5%D9%81%D9%88%D8%A7%D9%86_%D8%A7%D9%84%D9%83%D9%84%D8%A8%D9%8A"
    }
  ]
},
{
  "id": "khabab-bin-al-arat-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خباب بن الأرت",
  "en": "Khabab Bin Al Arat Street",
  "meaning": {
    "en": "An early Companion, tortured for his faith",
    "ar": "صحابي من السابقين، عُذّب في مكة، وشهد بدراً"
  },
  "story": {
    "en": "Khabbab ibn al-Aratt (d. 37 AH / 657 CE) was among the earliest Muslims, tortured in Mecca for his faith, and later fought at Badr. He died in Kufa.",
    "ar": "خبّاب بن الأرت (ت ٣٧هـ/٦٥٧م) من السابقين إلى الإسلام، عُذّب في مكة، وشهد غزوة بدر، وتوفي بالكوفة."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/خباب_بن_الأرت"
    }
  ]
},
{
  "id": "zuhair-bin-abi-salma-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع زهير بن أبي سلمى",
  "en": "Zuhair Bin Abi Salma Street",
  "meaning": {
    "en": "A pre-Islamic poet of the Mu'allaqat",
    "ar": "شاعر جاهلي من أصحاب المعلقات"
  },
  "story": {
    "en": "Zuhayr ibn Abi Sulma (d. c. 609 CE) was a pre-Islamic Arab poet, author of one of the Mu'allaqat odes.",
    "ar": "زهير بن أبي سلمى (ت نحو ٦٠٩م) شاعر جاهلي، وله معلّقة من المعلقات العشر."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/زهير_بن_أبي_سلمى"
    }
  ]
},
{
  "id": "khalid-bin-yazeed-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خالد بن يزيد",
  "en": "Khalid Bin Yazeed Street",
  "meaning": {
    "en": "An Umayyad prince interested in the sciences",
    "ar": "أمير أموي اهتم بالعلوم"
  },
  "story": {
    "en": "Khalid ibn Yazid (d. 85 AH / 704 CE) was an Umayyad prince, a poet, and a patron of the sciences and of alchemy.",
    "ar": "خالد بن يزيد بن معاوية (ت ٨٥هـ/٧٠٤م) أمير أموي وشاعر، عُرف باهتمامه بالعلوم والكيمياء."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/خالد_بن_يزيد_بن_معاوية"
    }
  ]
},
{
  "id": "khirash-bin-umayah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خراش بن أمية",
  "en": "Khirash Bin Umayah Street",
  "meaning": {
    "en": "A Companion from Khuza'ah, envoy at Hudaybiyya",
    "ar": "صحابي من خزاعة، بعثه النبي إلى قريش"
  },
  "story": {
    "en": "Khirash ibn Umayyah al-Khuza'i was a Companion of the Prophet from Khuza'ah, sent as an envoy to Quraysh at Hudaybiyya.",
    "ar": "خراش بن أمية الخزاعي صحابي من خزاعة، بعثه النبي إلى قريش عام الحديبية."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/خراش_بن_أمية"
    }
  ]
},
{
  "id": "salamah-bin-al-akwa-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سلمة بن الأكوع",
  "en": "Salamah Bin Al Akwa' Street",
  "meaning": {
    "en": "A companion known for his archery",
    "ar": "صحابي عُرف بالرماية"
  },
  "story": {
    "en": "Salama ibn al-Akwa' (d. 74 AH / 693 CE) was a companion of the Prophet Muhammad, known for his archery and speed.",
    "ar": "سلمة بن الأكوع (ت ٧٤هـ/٦٩٣م) صحابي من أصحاب النبي محمد، عُرف بالرماية وسرعة العدو."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%85%D8%A9_%D8%A8%D9%86_%D8%A7%D9%84%D8%A3%D9%83%D9%88%D8%B9"
    }
  ]
},
{
  "id": "shaddad-bin-aws-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع شَدَّاد بن أوس",
  "en": "Shaddad Bin Aws Street",
  "meaning": {
    "en": "A companion and narrator of hadith",
    "ar": "صحابي وراوٍ للحديث"
  },
  "story": {
    "en": "Shaddad ibn Aws (d. 58 AH / 678 CE) was a companion of the Prophet Muhammad and a narrator of hadith.",
    "ar": "شداد بن أوس (ت ٥٨هـ/٦٧٨م) صحابي من الأنصار، وروى عن النبي أحاديث في الصحيحين."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D8%AF%D8%A7%D8%AF_%D8%A8%D9%86_%D8%A3%D9%88%D8%B3"
    }
  ]
},
{
  "id": "asim-bin-abi-an-nujoud-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عاصِم بن أبي النَّجُود",
  "en": "Asim Bin Abi An Nujoud Street",
  "meaning": {
    "en": "One of the seven Quran reciters",
    "ar": "أحد القراء السبعة"
  },
  "story": {
    "en": "Asim ibn Abi al-Najud (d. 127 AH / 745 CE) was one of the seven canonical reciters of the Quran.",
    "ar": "عاصم بن أبي النجود (ت ١٢٧هـ/٧٤٥م) أحد القراء السبعة، وإليه تنسب رواية حفص عن عاصم."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A7%D8%B5%D9%85_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%A7%D9%84%D9%86%D8%AC%D9%88%D8%AF"
    }
  ]
},
{
  "id": "etab-bin-osaid-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عتاب بن أسيد",
  "en": "Etab Bin Osaid Street",
  "meaning": {
    "en": "First governor of Mecca under Islam",
    "ar": "أول أمير على مكة في الإسلام"
  },
  "story": {
    "en": "Itab ibn Usayd (d. 13 AH / 634 CE) was appointed by the Prophet as the first governor of Mecca after its conquest.",
    "ar": "عتاب بن أسيد (ت ١٣هـ/٦٣٤م) ولّاه النبي مكة بعد فتحها، فكان أول أمير عليها في الإسلام."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AA%D8%A7%D8%A8_%D8%A8%D9%86_%D8%A3%D8%B3%D9%8A%D8%AF"
    }
  ]
},
{
  "id": "utbah-bin-ghazwan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عُتبَه بن غَزوان",
  "en": "Utbah Bin Ghazwan Street",
  "meaning": {
    "en": "Founder and governor of Basra",
    "ar": "مؤسس البصرة وأميرها"
  },
  "story": {
    "en": "Utba ibn Ghazwan (d. 17 AH / 638 CE) was a companion of the Prophet and the founder and first governor of Basra.",
    "ar": "عتبة بن غزوان (ت ١٧هـ/٦٣٨م) صحابي، اختطّ البصرة وكان أول أمير عليها."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%AA%D8%A8%D8%A9_%D8%A8%D9%86_%D8%BA%D8%B2%D9%88%D8%A7%D9%86"
    }
  ]
},
{
  "id": "orwah-bin-masoud-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عروة بن مسعود",
  "en": "Orwah Bin Masoud Street",
  "meaning": {
    "en": "Chief of Thaqif and companion",
    "ar": "سيد ثقيف وصحابي"
  },
  "story": {
    "en": "Urwa ibn Mas'ud al-Thaqafi (d. 9 AH / 630 CE) was the chief of Thaqif who accepted Islam and was sent to his people.",
    "ar": "عروة بن مسعود الثقفي (ت ٩هـ/٦٣٠م) سيد ثقيف، أسلم وبعثه النبي إلى قومه."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%B1%D9%88%D8%A9_%D8%A8%D9%86_%D9%85%D8%B3%D8%B9%D9%88%D8%AF_%D8%A7%D9%84%D8%AB%D9%82%D9%81%D9%8A"
    }
  ]
},
{
  "id": "amer-bin-wathilah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عامِر بن واثِلة",
  "en": "Amer Bin Wathilah Street",
  "meaning": {
    "en": "The last surviving companion",
    "ar": "آخر الصحابة موتاً"
  },
  "story": {
    "en": "Amir ibn Wathila, known as Abu al-Tufayl (d. c. 110 AH / 718 CE), was the last surviving companion of the Prophet.",
    "ar": "عامر بن واثلة (أبو الطفيل، ت نحو ١١٠هـ/٧١٨م) آخر من رأى النبي من الصحابة."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%A7%D9%84%D8%B7%D9%81%D9%8A%D9%84_%D8%B9%D8%A7%D9%85%D8%B1_%D8%A8%D9%86_%D9%88%D8%A7%D8%AB%D9%84%D8%A9_%D8%A7%D9%84%D9%83%D9%86%D8%A7%D9%86%D9%8A"
    }
  ]
},
{
  "id": "tulaiha-bin-khuwayled-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع طليحة بن خويلد",
  "en": "Tulaiha Bin Khuwayled Street",
  "meaning": {
    "en": "A tribal chief who later accepted Islam",
    "ar": "زعيم قبلي أسلم لاحقاً"
  },
  "story": {
    "en": "Tulayha ibn Khuwaylid al-Asadi (d. 21 AH / 642 CE) was a tribal chief who accepted Islam and fought in the conquest of Iraq.",
    "ar": "طليحة بن خويلد الأسدي (ت ٢١هـ/٦٤٢م) زعيم بني أسد، أسلم بعد حروب الردة وشهد فتوح العراق."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B7%D9%84%D9%8A%D8%AD%D8%A9_%D8%A8%D9%86_%D8%AE%D9%88%D9%8A%D9%84%D8%AF_%D8%A7%D9%84%D8%A3%D8%B3%D8%AF%D9%8A"
    }
  ]
},
{
  "id": "salman-bin-rabee-a-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سلمان بن ربيعة",
  "en": "Salman Bin Rabee'a Street",
  "meaning": {
    "en": "A commander and governor of Armenia",
    "ar": "قائد ووالي أرمينية"
  },
  "story": {
    "en": "Salman ibn Rabi'a al-Bahili (d. 32 AH / 650 CE) was a commander in the early conquests and governor of Armenia.",
    "ar": "سلمان بن ربيعة الباهلي (ت ٣٢هـ/٦٥٠م) قائد في الفتوحات، ووالي أرمينية."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B1%D8%A8%D9%8A%D8%B9%D8%A9_%D8%A7%D9%84%D8%A8%D8%A7%D9%87%D9%84%D9%8A"
    }
  ]
},
{
  "id": "shakhbout-bin-sultan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع شخبوط بن سلطان",
  "en": "Shakhbout Bin Sultan Street",
  "meaning": {
    "en": "Ruler of Abu Dhabi, 1928–1966",
    "ar": "حاكم أبوظبي ١٩٢٨–١٩٦٦"
  },
  "story": {
    "en": "Shakhbout bin Sultan Al Nahyan (1905–1989) was Ruler of Abu Dhabi from 1928 to 1966.",
    "ar": "شخبوط بن سلطان آل نهيان (١٩٠٥–١٩٨٩م) حاكم أبوظبي من ١٩٢٨ إلى ١٩٦٦م."
  },
  "refs": [
    {
      "label": "Wikipedia",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D8%AE%D8%A8%D9%88%D8%B7_%D8%A8%D9%86_%D8%B3%D9%84%D8%B7%D8%A7%D9%86_%D8%A2%D9%84_%D9%86%D9%87%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "abdulla-hadaa-al-sheraifi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله هضعه الشريفي",
  "en": "Abdulla Hadaa Al Sheraifi Street",
  "meaning": {
    "en": "An Emirati figure of the شريفي family",
    "ar": "شخصية إماراتية من أسرة الشريفي"
  },
  "story": {
    "en": "The street carries the name of Abdulla Hadaa Al Sheraifi, an Emirati figure of the شريفي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله هضعه، وهو شخصية إماراتية من أسرة الشريفي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bilhoul-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بالهول السويدي",
  "en": "Abdullah Bilhoul Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bilhoul Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بالهول، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-ali-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن علي الهاملي",
  "en": "Abdullah Bin Ali Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Ali Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن علي، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-dhahir-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن ظاهر المهيري",
  "en": "Abdullah Bin Dhahir Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Dhahir Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن ظاهر، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-ghanem-al-shamsi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن غانم الشامسي",
  "en": "Abdullah Bin Ghanem Al Shamsi Street",
  "meaning": {
    "en": "An Emirati figure of the شامسي family",
    "ar": "شخصية إماراتية من أسرة الشامسي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Ghanem Al Shamsi, an Emirati figure of the شامسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن غانم، وهو شخصية إماراتية من أسرة الشامسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-ghanoum-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن غنوم الهاملي",
  "en": "Abdullah Bin Ghanoum Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Ghanoum Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن غنوم، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-humaid-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن حميد الرميثي",
  "en": "Abdullah Bin Humaid Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Humaid Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن حميد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-jassim-al-meraikhi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن جاسم المريخي",
  "en": "Abdullah Bin Jassim Al Meraikhi Street",
  "meaning": {
    "en": "An Emirati figure of the مريخي family",
    "ar": "شخصية إماراتية من أسرة المريخي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Jassim Al Meraikhi, an Emirati figure of the مريخي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن جاسم، وهو شخصية إماراتية من أسرة المريخي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-kenaish-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن كنيش الهاملي",
  "en": "Abdullah Bin Kenaish Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Kenaish Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن كنيش، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-kulaib-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن كليب الهاملي",
  "en": "Abdullah Bin Kulaib Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Kulaib Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن كليب، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-misfer-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن مسفر السويدي",
  "en": "Abdullah Bin Misfer Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Misfer Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن مسفر، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-shaiban-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن شيبان المهيري",
  "en": "Abdullah Bin Shaiban Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Shaiban Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن شيبان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-slayem-al-falasi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن سليم الفلاسي",
  "en": "Abdullah Bin Slayem Al Falasi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاسي family",
    "ar": "شخصية إماراتية من أسرة الفلاسي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Slayem Al Falasi, an Emirati figure of the فلاسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن سليم، وهو شخصية إماراتية من أسرة الفلاسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-sultan-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن سلطان الرميثي",
  "en": "Abdullah Bin Sultan Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Sultan Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن سلطان، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdulrahman-alneedi-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالرحمن النيدي القبيسي",
  "en": "Abdulrahman Alneedi Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Abdulrahman Alneedi Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالرحمن النيدي، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdulrahman-hasan-al-zaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالرحمن حسن الزعابي",
  "en": "Abdulrahman Hasan Al Zaabi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Abdulrahman Hasan Al Zaabi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالرحمن حسن، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "aber-bin-hayy-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عابر بن حيي الهاملي",
  "en": "Aber Bin Hayy Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Aber Bin Hayy Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عابر بن حيي، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "afra-bint-mohammed-al-falasi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عفرا بنت محمد الفلاسي",
  "en": "Afra Bint Mohammed Al Falasi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاسي family",
    "ar": "شخصية إماراتية من أسرة الفلاسي"
  },
  "story": {
    "en": "The street carries the name of Afra Bint Mohammed Al Falasi, an Emirati figure of the فلاسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عفرا بنت محمد، وهو شخصية إماراتية من أسرة الفلاسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "afra-bint-saif-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عفرا بنت سيف المزروعي",
  "en": "Afra Bint Saif Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Afra Bint Saif Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عفرا بنت سيف، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-abdullah-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن عبدالله الرميثي",
  "en": "Ahmed Bin Abdullah Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Abdullah Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن عبدالله، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-ali-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن علي الرميثي",
  "en": "Ahmed Bin Ali Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Ali Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن علي، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-banduq-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن بندوق القمزي",
  "en": "Ahmed Bin Banduq Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Banduq Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن بندوق، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-drai-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن دري الفلاحي",
  "en": "Ahmed Bin Drai Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Drai Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن دري، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-fadel-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن فاضل المزروعي",
  "en": "Ahmed Bin Fadel Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Fadel Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن فاضل، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-fadhel-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع احمد بن فاضل الهاملي",
  "en": "Ahmed Bin Fadhel Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Fadhel Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم احمد بن فاضل، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-gabran-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن جبران السويدي",
  "en": "Ahmed Bin Gabran Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Gabran Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن جبران، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-ghanoum-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن غنوم الهاملي",
  "en": "Ahmed Bin Ghanoum Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Ghanoum Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن غنوم، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-hader-al-meraikhi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن حاضر المريخي",
  "en": "Ahmed Bin Hader Al Meraikhi Street",
  "meaning": {
    "en": "An Emirati figure of the مريخي family",
    "ar": "شخصية إماراتية من أسرة المريخي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Hader Al Meraikhi, an Emirati figure of the مريخي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن حاضر، وهو شخصية إماراتية من أسرة المريخي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-hilal-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن هلال الظاهري",
  "en": "Ahmed Bin Hilal Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Hilal Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن هلال، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-hudhayba-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن حظيبة الهاملي",
  "en": "Ahmed Bin Hudhayba Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Hudhayba Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن حظيبة، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-juma-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن جمعة السويدي",
  "en": "Ahmed Bin Juma Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Juma Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن جمعة، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-khalaf-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن خلف القبيسي",
  "en": "Ahmed Bin Khalaf Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Khalaf Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن خلف، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-khalifa-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن خليفة السويدي",
  "en": "Ahmed Bin Khalifa Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Khalifa Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن خليفة، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-kulaib-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن كليب الهاملي",
  "en": "Ahmed Bin Kulaib Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Kulaib Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن كليب، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-majid-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن ماجد السويدي",
  "en": "Ahmed Bin Majid Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Majid Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن ماجد، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-masoud-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن مسعود المحيربي",
  "en": "Ahmed Bin Masoud Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Masoud Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن مسعود، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-mohammed-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن محمد السويدي",
  "en": "Ahmed Bin Mohammed Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Mohammed Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن محمد، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-saeed-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن سعيد الرميثي",
  "en": "Ahmed Bin Saeed Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Saeed Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن سعيد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-saif-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن سيف الفلاحي",
  "en": "Ahmed Bin Saif Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Saif Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن سيف، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-salem-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن سالم المحيربي",
  "en": "Ahmed Bin Salem Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Salem Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن سالم، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-sarhan-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن سرحان الرميثي",
  "en": "Ahmed Bin Sarhan Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Sarhan Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن سرحان، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-shamlan-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن شملان الفلاحي",
  "en": "Ahmed Bin Shamlan Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Shamlan Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن شملان، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-yarouf-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن يعروف المنصوري",
  "en": "Ahmed Bin Yarouf Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Yarouf Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن يعروف، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-zaal-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن زعل السويدي",
  "en": "Ahmed Bin Zaal Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bin Zaal Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بن زعل، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bu-luta-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بولوتة الرميثي",
  "en": "Ahmed Bu Luta Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Bu Luta Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد بولوتة، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-khamis-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "طريق أحمد خميس الهاملي",
  "en": "Ahmed Khamis Al Hameli Road",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Khamis Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم طريق أحمد خميس، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alasry-bin-hamouda-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع العصري بن حمودة الظاهري",
  "en": "Alasry Bin Hamouda Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Alasry Bin Hamouda Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم العصري بن حمودة، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alhabaishi-bin-bahlol-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحبيشي بن بهلول المنصوري",
  "en": "Alhabaishi Bin Bahlol Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Alhabaishi Bin Bahlol Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الحبيشي بن بهلول، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alhabeeb-bin-ahmed-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحبيب بن أحمد المحيربي",
  "en": "Alhabeeb Bin Ahmed Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Alhabeeb Bin Ahmed Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الحبيب بن أحمد، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "alhaj-bin-abdullah-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحاج بن عبدالله المحيربي",
  "en": "Alhaj Bin Abdullah Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Alhaj Bin Abdullah Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الحاج بن عبدالله، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-alqusaili-almansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع على القصيلي المنصوري",
  "en": "Ali Alqusaili Almansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ali Alqusaili Almansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم على القصيلي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-abdullah-al-zaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن عبدالله الزعابي",
  "en": "Ali Bin Abdullah Al Zaabi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Abdullah Al Zaabi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن عبدالله، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-afsan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن عفصان المزروعي",
  "en": "Ali Bin Afsan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Afsan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن عفصان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-aziz-al-sheraifi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن عزيز الشريفي",
  "en": "Ali Bin Aziz Al Sheraifi Street",
  "meaning": {
    "en": "An Emirati figure of the شريفي family",
    "ar": "شخصية إماراتية من أسرة الشريفي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Aziz Al Sheraifi, an Emirati figure of the شريفي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن عزيز، وهو شخصية إماراتية من أسرة الشريفي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-dihayr-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن دهْير المزروعي",
  "en": "Ali Bin Dihayr Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Dihayr Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن دهْير، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-ghanem-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن غانم الكتبي",
  "en": "Ali Bin Ghanem Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Ghanem Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن غانم، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-khamis-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن خميس الرميثي",
  "en": "Ali Bin Khamis Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Khamis Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن خميس، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-mubarak-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن مبارك المنصوري",
  "en": "Ali Bin Mubarak Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Mubarak Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن مبارك، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-murshid-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن مرشد الرميثي",
  "en": "Ali Bin Murshid Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Murshid Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن مرشد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-sabt-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن سبت الخييلي",
  "en": "Ali Bin Sabt Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Sabt Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن سبت، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-sandia-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن سندية المنصوري",
  "en": "Ali Bin Sandia Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Sandia Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن سندية، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-shaiban-al-khemairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن شيبان الخميري",
  "en": "Ali Bin Shaiban Al Khemairi Street",
  "meaning": {
    "en": "An Emirati figure of the خميري family",
    "ar": "شخصية إماراتية من أسرة الخميري"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Shaiban Al Khemairi, an Emirati figure of the خميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن شيبان، وهو شخصية إماراتية من أسرة الخميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-thani-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن ثاني الرميثي",
  "en": "Ali Bin Thani Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Thani Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن ثاني، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bu-naas-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بو نعاس الرميثي",
  "en": "Ali Bu Naas Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Ali Bu Naas Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بو نعاس، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bu-uawana-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بوعوانة المنصوري",
  "en": "Ali Bu Uawana Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ali Bu Uawana Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بوعوانة، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-khamis-al-ktebi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي خميس الكتبي",
  "en": "Ali Khamis Al Ktebi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Ali Khamis Al Ktebi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي خميس، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-rashed-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي راشد الظاهري",
  "en": "Ali Rashed Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Ali Rashed Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي راشد، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-saeed-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي سعيد الظاهري",
  "en": "Ali Saeed Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Ali Saeed Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي سعيد، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "almur-bin-dumithan-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع المر بن دميثان القمزي",
  "en": "Almur Bin Dumithan Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Almur Bin Dumithan Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم المر بن دميثان، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "aqeeda-bin-ali-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عقيدة بن علي المهيري",
  "en": "Aqeeda Bin Ali Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Aqeeda Bin Ali Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عقيدة بن علي، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ashwan-bin-abdullah-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عشوان بن عبدالله المزروعي",
  "en": "Ashwan Bin Abdullah Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Ashwan Bin Abdullah Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عشوان بن عبدالله، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "asyan-bin-asyan-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عصيان بن عصيان المنصوري",
  "en": "Asyan Bin Asyan Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Asyan Bin Asyan Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عصيان بن عصيان، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-arian-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن عريان المهيري",
  "en": "Atiq Bin Arian Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Arian Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن عريان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-azran-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن عزران الرميثي",
  "en": "Atiq Bin Azran Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Azran Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن عزران، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-banduq-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن بندوق القمزي",
  "en": "Atiq Bin Banduq Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Banduq Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن بندوق، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-daen-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن ضاعن المهيري",
  "en": "Atiq Bin Daen Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Daen Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن ضاعن، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-kasla-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن كسلا الرميثي",
  "en": "Atiq Bin Kasla Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Kasla Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن كسلا، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-maizer-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن ميزر الرميثي",
  "en": "Atiq Bin Maizer Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Maizer Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن ميزر، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "atiq-bin-majid-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عتيق بن ماجد المهيري",
  "en": "Atiq Bin Majid Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Atiq Bin Majid Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عتيق بن ماجد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "aylan-bin-ali-al-sabousi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عيلان بن علي السبوسي",
  "en": "Aylan Bin Ali Al Sabousi Street",
  "meaning": {
    "en": "An Emirati figure of the سبوسي family",
    "ar": "شخصية إماراتية من أسرة السبوسي"
  },
  "story": {
    "en": "The street carries the name of Aylan Bin Ali Al Sabousi, an Emirati figure of the سبوسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عيلان بن علي، وهو شخصية إماراتية من أسرة السبوسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "azzan-bin-mohammed-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عزان بن محمد المزروعي",
  "en": "Azzan Bin Mohammed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Azzan Bin Mohammed Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عزان بن محمد، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-biltahina-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بالطحينة المهيري",
  "en": "Butti Biltahina Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Butti Biltahina Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بالطحينة، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-bin-beyat-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن بيات القبيسي",
  "en": "Butti Bin Beyat Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Butti Bin Beyat Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن بيات، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-bin-khadim-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن خادم القبيسي",
  "en": "Butti Bin Khadim Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Butti Bin Khadim Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن خادم، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-bin-mohammed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن محمد القبيسي",
  "en": "Butti Bin Mohammed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Butti Bin Mohammed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن محمد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-bin-omair-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن عمير المهيري",
  "en": "Butti Bin Omair Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Butti Bin Omair Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن عمير، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "duhi-bin-abdullah-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ضحي بن عبدالله المزروعي",
  "en": "Duhi Bin Abdullah Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Duhi Bin Abdullah Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ضحي بن عبدالله، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "eid-bin-musabeh-al-amimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عيد بن مصبح العميمي",
  "en": "Eid Bin Musabeh Al Amimi Street",
  "meaning": {
    "en": "An Emirati figure of the عميمي family",
    "ar": "شخصية إماراتية من أسرة العميمي"
  },
  "story": {
    "en": "The street carries the name of Eid Bin Musabeh Al Amimi, an Emirati figure of the عميمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عيد بن مصبح، وهو شخصية إماراتية من أسرة العميمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "faraj-bin-hamouda-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فرج بن حمودة الظاهري",
  "en": "Faraj Bin Hamouda Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Faraj Bin Hamouda Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فرج بن حمودة، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "fares-bin-ghanem-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فارس بن غانم المزروعي",
  "en": "Fares Bin Ghanem Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Fares Bin Ghanem Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فارس بن غانم، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "fatima-bint-ali-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فاطمة بنت علي الرميثي",
  "en": "Fatima Bint Ali Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Fatima Bint Ali Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فاطمة بنت علي، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "fatima-bint-obaid-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فاطمة بنت عبيد الرميثي",
  "en": "Fatima Bint Obaid Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Fatima Bint Obaid Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فاطمة بنت عبيد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ghadeer-bin-saeed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع غدير بن سعيد المنصوري",
  "en": "Ghadeer Bin Saeed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ghadeer Bin Saeed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم غدير بن سعيد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ghaith-bin-mohanna-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع غيث بن مهّنا المهيري",
  "en": "Ghaith Bin Mohanna Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Ghaith Bin Mohanna Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم غيث بن مهّنا، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ghanem-bin-hamila-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع غانم بن هميلة المزروعي",
  "en": "Ghanem Bin Hamila Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Ghanem Bin Hamila Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم غانم بن هميلة، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ghanem-bin-jrayw-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع غانم بن جريو المنصوري",
  "en": "Ghanem Bin Jrayw Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Ghanem Bin Jrayw Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم غانم بن جريو، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "habis-bin-mudhi-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حابس بن مضحي المنصوري",
  "en": "Habis Bin Mudhi Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Habis Bin Mudhi Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حابس بن مضحي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamad-mohamed-thani-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد محمد ثاني الرميثي",
  "en": "Hamad Mohamed thani Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Hamad Mohamed thani Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد محمد ثاني، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamad-suhail-owaida-al-khyeli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد سهيل عويضة الخييلي",
  "en": "Hamad Suhail Owaida Al Khyeli Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Hamad Suhail Owaida Al Khyeli, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد سهيل عويضة، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamda-bint-ali-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمدة بنت علي الرميثي",
  "en": "Hamda Bint Ali Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Hamda Bint Ali Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمدة بنت علي، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-albadi-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد البادي الظاهري",
  "en": "Hamed Albadi Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Hamed Albadi Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد البادي، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bin-dasmal-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بن دسمال السويدي",
  "en": "Hamed Bin Dasmal Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Dasmal Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بن دسمال، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bin-dhahi-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بن ضاحي الكتبي",
  "en": "Hamed Bin Dhahi Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Dhahi Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بن ضاحي، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bin-musabeh-al-mashghouni",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بن مصبح المشغوني",
  "en": "Hamed Bin Musabeh Al Mashghouni Street",
  "meaning": {
    "en": "An Emirati figure of the مشغوني family",
    "ar": "شخصية إماراتية من أسرة المشغوني"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Musabeh Al Mashghouni, an Emirati figure of the مشغوني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بن مصبح، وهو شخصية إماراتية من أسرة المشغوني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bin-saeed-al-hassani",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بن سعيد الحساني",
  "en": "Hamed Bin Saeed Al Hassani Street",
  "meaning": {
    "en": "An Emirati figure of the حساني family",
    "ar": "شخصية إماراتية من أسرة الحساني"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Saeed Al Hassani, an Emirati figure of the حساني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بن سعيد، وهو شخصية إماراتية من أسرة الحساني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bin-suhail-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بن سهيل الخييلي",
  "en": "Hamed Bin Suhail Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Hamed Bin Suhail Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بن سهيل، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamed-bu-qitah-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمد بو قطعة الظاهري",
  "en": "Hamed Bu Qitah Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Hamed Bu Qitah Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمد بو قطعة، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamel-bin-khadim-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هامل بن خادم القبيسي",
  "en": "Hamel Bin Khadim Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Hamel Bin Khadim Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هامل بن خادم، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hammad-bin-salem-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حماد بن سالم الكتبي",
  "en": "Hammad Bin Salem Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Hammad Bin Salem Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حماد بن سالم، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hamouda-bin-ali-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمودة بن علي الظاهري",
  "en": "Hamouda Bin Ali Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Hamouda Bin Ali Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمودة بن علي، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "harib-bin-meghair-al-khyeli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حارب بن مغير الخييلي",
  "en": "Harib Bin Meghair Al Khyeli Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Harib Bin Meghair Al Khyeli, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حارب بن مغير، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hasan-bin-hamila-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حسن بن هميلة المزروعي",
  "en": "Hasan Bin Hamila Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Hasan Bin Hamila Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حسن بن هميلة، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hasan-bin-rahma-al-zaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حسن بن رحمه الزعابي",
  "en": "Hasan Bin Rahma Al Zaabi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Hasan Bin Rahma Al Zaabi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حسن بن رحمه، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hashim-bin-sabah-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هاشم بن صباح الرميثي",
  "en": "Hashim Bin Sabah Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Hashim Bin Sabah Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هاشم بن صباح، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hazza-bin-nasser-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هزاع بن ناصر المنصوري",
  "en": "Hazza' Bin Nasser Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Hazza' Bin Nasser Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هزاع بن ناصر، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hilal-bin-mohammed-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هلال بن محمد الظاهري",
  "en": "Hilal Bin Mohammed Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Hilal Bin Mohammed Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هلال بن محمد، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hilal-bin-saeed-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هلال بن سعيد الفلاحي",
  "en": "Hilal Bin Saeed Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Hilal Bin Saeed Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هلال بن سعيد، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hillal-bin-bathan-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هلال بن بطحان الهاملي",
  "en": "Hillal Bin Bathan Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Hillal Bin Bathan Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هلال بن بطحان، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "humaid-al-sabbari-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حميد الصباري الرميثي",
  "en": "Humaid Al Sabbari Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Humaid Al Sabbari Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حميد الصباري، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "humaid-alhasm-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حميد الحصم الرميثي",
  "en": "Humaid Alhasm Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Humaid Alhasm Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حميد الحصم، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "humaid-bin-abdullah-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حميد بن عبدالله الرميثي",
  "en": "Humaid Bin Abdullah Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Humaid Bin Abdullah Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حميد بن عبدالله، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "humaid-bin-khalfan-al-nuaimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حميد بن خلفان النعيمي",
  "en": "Humaid Bin Khalfan Al Nuaimi Street",
  "meaning": {
    "en": "An Emirati figure of the نعيمي family",
    "ar": "شخصية إماراتية من أسرة النعيمي"
  },
  "story": {
    "en": "The street carries the name of Humaid Bin Khalfan Al Nuaimi, an Emirati figure of the نعيمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حميد بن خلفان، وهو شخصية إماراتية من أسرة النعيمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "humayed-bin-dahanan-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع حمَيّد بن دحنان الفلاحي",
  "en": "Humayed Bin Dahanan Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Humayed Bin Dahanan Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم حمَيّد بن دحنان، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "issa-bin-jaber-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عيسى بن جابر الخييلي",
  "en": "Issa Bin Jaber Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Issa Bin Jaber Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عيسى بن جابر، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "issa-bin-muhair-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عيسى بن مهير المزروعي",
  "en": "Issa Bin Muhair Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Issa Bin Muhair Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عيسى بن مهير، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "issa-bin-qatami-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سليمان بن قطامي المنصوري",
  "en": "Issa Bin Qatami Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Issa Bin Qatami Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سليمان بن قطامي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "jabed-bin-hayy-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جابر بن هياي المنصوري",
  "en": "Jabed Bin Hayy Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Jabed Bin Hayy Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جابر بن هياي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bin-adl-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن عدل الرميثي",
  "en": "Juma Bin Adl Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Adl Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن عدل، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bin-kasla-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن كسلا الرميثي",
  "en": "Juma Bin Kasla Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Kasla Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن كسلا، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bin-mohammed-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن محمد الهاملي",
  "en": "Juma Bin Mohammed Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Mohammed Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن محمد، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bin-shamtt-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن شمط الكتبي",
  "en": "Juma Bin Shamtt Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Shamtt Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن شمط، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bin-sinan-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بن سنان المهيري",
  "en": "Juma Bin Sinan Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Juma Bin Sinan Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بن سنان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "juma-bu-jamhour-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة بو جمهور القبيسي",
  "en": "Juma Bu Jamhour Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Juma Bu Jamhour Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة بو جمهور، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khadim-bin-mohammed-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خادم بن محمد الرميثي",
  "en": "Khadim Bin Mohammed Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Khadim Bin Mohammed Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خادم بن محمد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalaf-bin-mohammed-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خلف بن محمد المهيري",
  "en": "Khalaf Bin Mohammed Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Khalaf Bin Mohammed Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خلف بن محمد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalfan-bin-mohammed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خلفان بن محمد المنصوري",
  "en": "Khalfan Bin Mohammed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Khalfan Bin Mohammed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خلفان بن محمد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalfan-bin-ramadan-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خلفان بن رمضان المنصوري",
  "en": "Khalfan Bin Ramadan Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Khalfan Bin Ramadan Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خلفان بن رمضان، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalfan-bin-saeed-al-hassani",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خلفان بن سعيد الحساني",
  "en": "Khalfan Bin Saeed Al Hassani Street",
  "meaning": {
    "en": "An Emirati figure of the حساني family",
    "ar": "شخصية إماراتية من أسرة الحساني"
  },
  "story": {
    "en": "The street carries the name of Khalfan Bin Saeed Al Hassani, an Emirati figure of the حساني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خلفان بن سعيد، وهو شخصية إماراتية من أسرة الحساني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-ahmed-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة أحمد المحيربي",
  "en": "Khalifa Ahmed Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Ahmed Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة أحمد، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-ahmed-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن أحمد السويدي",
  "en": "Khalifa Bin Ahmed Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Ahmed Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن أحمد، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-hasoom-al-darmaki",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن حاسوم الدرمكي",
  "en": "Khalifa Bin Hasoom Al Darmaki Street",
  "meaning": {
    "en": "An Emirati figure of the درمكي family",
    "ar": "شخصية إماراتية من أسرة الدرمكي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Hasoom Al Darmaki, an Emirati figure of the درمكي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن حاسوم، وهو شخصية إماراتية من أسرة الدرمكي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-hweeden-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن هويدن الكتبي",
  "en": "Khalifa Bin Hweeden Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Hweeden Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن هويدن، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-khamis-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن خميس السويدي",
  "en": "Khalifa Bin Khamis Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Khamis Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن خميس، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-metref-al-jabri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن مترف الجابري",
  "en": "Khalifa Bin Metref Al Jabri Street",
  "meaning": {
    "en": "An Emirati figure of the جابري family",
    "ar": "شخصية إماراتية من أسرة الجابري"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Metref Al Jabri, an Emirati figure of the جابري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن مترف، وهو شخصية إماراتية من أسرة الجابري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-swaidan-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن سويدان المحيربي",
  "en": "Khalifa Bin Swaidan Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Swaidan Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن سويدان، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-yaed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن ياعد القبيسي",
  "en": "Khalifa Bin Yaed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Yaed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن ياعد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-yousef-al-khemairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن يوسف الخميري",
  "en": "Khalifa Bin Yousef Al Khemairi Street",
  "meaning": {
    "en": "An Emirati figure of the خميري family",
    "ar": "شخصية إماراتية من أسرة الخميري"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Yousef Al Khemairi, an Emirati figure of the خميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن يوسف، وهو شخصية إماراتية من أسرة الخميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-yousef-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن يوسف السويدي",
  "en": "Khalifa Bin Yousef Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Yousef Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن يوسف، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khamis-bin-ali-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خميس بن علي المزروعي",
  "en": "Khamis Bin Ali Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Khamis Bin Ali Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خميس بن علي، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khamis-bin-mohammed-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خميس بن محمد المزروعي",
  "en": "Khamis Bin Mohammed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Khamis Bin Mohammed Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خميس بن محمد، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khamis-bin-saeed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خميس بن سعيد القبيسي",
  "en": "Khamis Bin Saeed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Khamis Bin Saeed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خميس بن سعيد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khamis-bin-zaal-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خميس بن زعل الرميثي",
  "en": "Khamis Bin Zaal Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Khamis Bin Zaal Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خميس بن زعل، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "kulaib-bin-abdullah-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع كليب بن عبدالله الهاملي",
  "en": "Kulaib Bin Abdullah Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Kulaib Bin Abdullah Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم كليب بن عبدالله، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "maktoom-alfandi-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مكتوم الفندي المزروعي",
  "en": "Maktoom Alfandi Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Maktoom Alfandi Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مكتوم الفندي، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mana-bin-abdullah-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مانع بن عبد الله المهيري",
  "en": "Mana Bin Abdullah Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mana Bin Abdullah Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مانع بن عبد الله، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mansoor-bin-nasser-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع منصور بن ناصر المنصوري",
  "en": "Mansoor Bin Nasser Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mansoor Bin Nasser Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم منصور بن ناصر، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mansour-bin-ghanem-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع منصور بن غانم المزروعي",
  "en": "Mansour Bin Ghanem Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mansour Bin Ghanem Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم منصور بن غانم، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-hader-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن حاضر المهيري",
  "en": "Matar Bin Hader Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Hader Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن حاضر، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-hatha-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن حاذه الكتبي",
  "en": "Matar Bin Hatha Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Hatha Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن حاذه، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-khadim-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن خادم المهيري",
  "en": "Matar Bin Khadim Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Khadim Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن خادم، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-mohammed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن محمد القبيسي",
  "en": "Matar Bin Mohammed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Mohammed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن محمد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-mohammed-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن محمد الرميثي",
  "en": "Matar Bin Mohammed Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Mohammed Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن محمد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-thani-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن ثاني الرميثي",
  "en": "Matar Bin Thani Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Thani Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن ثاني، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mehidi-bin-saeed-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مهيدي بن سعيد الهاملي",
  "en": "Mehidi Bin Saeed Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Mehidi Bin Saeed Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مهيدي بن سعيد، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mehidi-bin-yaed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مهيدي بن ياعد القبيسي",
  "en": "Mehidi Bin Yaed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Mehidi Bin Yaed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مهيدي بن ياعد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mihanna-bin-butti-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مهنا بن بطي القبيسي",
  "en": "Mihanna Bin Butti Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Mihanna Bin Butti Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مهنا بن بطي، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-bin-hader-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن حاضر المنصوري",
  "en": "Mohamed Bin Hader Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohamed Bin Hader Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن حاضر، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammad-bin-drai-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن دري الفلاحي",
  "en": "Mohammad Bin Drai Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Mohammad Bin Drai Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن دري، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammad-bin-saif-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سيف الفلاحي",
  "en": "Mohammad Bin Saif Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Mohammad Bin Saif Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سيف، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-alhur-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد الحر السويدي",
  "en": "Mohammed Alhur Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Alhur Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد الحر، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-abdulghani-al-khemairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عبدالغني الخميري",
  "en": "Mohammed Bin Abdulghani Al Khemairi Street",
  "meaning": {
    "en": "An Emirati figure of the خميري family",
    "ar": "شخصية إماراتية من أسرة الخميري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Abdulghani Al Khemairi, an Emirati figure of the خميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عبدالغني، وهو شخصية إماراتية من أسرة الخميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-abdullah-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عبدالله القمزي",
  "en": "Mohammed Bin Abdullah Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Abdullah Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عبدالله، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ablan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عبلان المزروعي",
  "en": "Mohammed Bin Ablan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ablan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عبلان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-afsan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عفصان المزروعي",
  "en": "Mohammed Bin Afsan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Afsan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عفصان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-alfendi-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن الفندي المزروعي",
  "en": "Mohammed Bin Alfendi Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Alfendi Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن الفندي، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ali-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن علي الظاهري",
  "en": "Mohammed Bin Ali Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ali Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن علي، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ali-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن علي المهيري",
  "en": "Mohammed Bin Ali Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ali Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن علي، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ali-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن علي الرميثي",
  "en": "Mohammed Bin Ali Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ali Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن علي، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-aziz-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عزيز المنصوري",
  "en": "Mohammed Bin Aziz Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Aziz Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عزيز، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-gabran-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن جبران السويدي",
  "en": "Mohammed Bin Gabran Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Gabran Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن جبران، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ghannam-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن غنّام الهاملي",
  "en": "Mohammed Bin Ghannam Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ghannam Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن غنّام، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ghateel-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن غتيل المحيربي",
  "en": "Mohammed Bin Ghateel Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ghateel Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن غتيل، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-habroush-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن حبروش السويدي",
  "en": "Mohammed Bin Habroush Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Habroush Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن حبروش، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-hayy-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن حيي الهاملي",
  "en": "Mohammed Bin Hayy Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Hayy Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن حيي، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-hofan-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن حوفان المنصوري",
  "en": "Mohammed Bin Hofan Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Hofan Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن حوفان، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-jaber-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن جابر الهاملي",
  "en": "Mohammed Bin Jaber Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Jaber Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن جابر، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-jarwan-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن جروان المنصوري",
  "en": "Mohammed Bin Jarwan Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Jarwan Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن جروان، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-jassim-al-meraikhi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن جاسم المريخي",
  "en": "Mohammed Bin Jassim Al Meraikhi Street",
  "meaning": {
    "en": "An Emirati figure of the مريخي family",
    "ar": "شخصية إماراتية من أسرة المريخي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Jassim Al Meraikhi, an Emirati figure of the مريخي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن جاسم، وهو شخصية إماراتية من أسرة المريخي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-jrayw-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن جريو المنصوري",
  "en": "Mohammed Bin Jrayw Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Jrayw Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن جريو، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-kasib-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن كاسب المهيري",
  "en": "Mohammed Bin Kasib Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Kasib Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن كاسب، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-khadim-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن خادم المنصوري",
  "en": "Mohammed Bin Khadim Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Khadim Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن خادم، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-khamis-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن خميس المزروعي",
  "en": "Mohammed Bin Khamis Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Khamis Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن خميس، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-maktoum-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مكتوم المزروعي",
  "en": "Mohammed Bin Maktoum Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Maktoum Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مكتوم، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-maktoum-al-sheraifi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مكتوم الشريفي",
  "en": "Mohammed Bin Maktoum Al Sheraifi Street",
  "meaning": {
    "en": "An Emirati figure of the شريفي family",
    "ar": "شخصية إماراتية من أسرة الشريفي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Maktoum Al Sheraifi, an Emirati figure of the شريفي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مكتوم، وهو شخصية إماراتية من أسرة الشريفي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-markhan-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مرخان المنصوري",
  "en": "Mohammed Bin Markhan Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Markhan Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مرخان، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-marshoud-al-sabousi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مروشد السبوسي",
  "en": "Mohammed Bin Marshoud Al Sabousi Street",
  "meaning": {
    "en": "An Emirati figure of the سبوسي family",
    "ar": "شخصية إماراتية من أسرة السبوسي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Marshoud Al Sabousi, an Emirati figure of the سبوسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مروشد، وهو شخصية إماراتية من أسرة السبوسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-masoud-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مسعود المحيربي",
  "en": "Mohammed Bin Masoud Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Masoud Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مسعود، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-mubarak-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مبارك الخييلي",
  "en": "Mohammed Bin Mubarak Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Mubarak Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مبارك، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-nasser-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن ناصر المنصوري",
  "en": "Mohammed Bin Nasser Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Nasser Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن ناصر، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-obaid-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن عبيد المهيري",
  "en": "Mohammed Bin Obaid Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Obaid Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن عبيد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-salem-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سالم الظاهري",
  "en": "Mohammed Bin Salem Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Salem Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سالم، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-salhoum-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن صلهوم القبيسي",
  "en": "Mohammed Bin Salhoum Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Salhoum Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن صلهوم، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-salmeen-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سالمين المنصوري",
  "en": "Mohammed Bin Salmeen Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Salmeen Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سالمين، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-sayah-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن صياح المزروعي",
  "en": "Mohammed Bin Sayah Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Sayah Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن صياح، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-shabib-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن شبيب المهيري",
  "en": "Mohammed Bin Shabib Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Shabib Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن شبيب، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-shaiban-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن شيبان المهيري",
  "en": "Mohammed Bin Shaiban Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Shaiban Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن شيبان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-sultan-al-darmaki",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سلطان الدرمكي",
  "en": "Mohammed Bin Sultan Al Darmaki Street",
  "meaning": {
    "en": "An Emirati figure of the درمكي family",
    "ar": "شخصية إماراتية من أسرة الدرمكي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Sultan Al Darmaki, an Emirati figure of the درمكي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سلطان، وهو شخصية إماراتية من أسرة الدرمكي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-thani-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن ثاني الرميثي",
  "en": "Mohammed Bin Thani Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Thani Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن ثاني، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bu-gbay-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بوقبي المنصوري",
  "en": "Mohammed Bu Gbay Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bu Gbay Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بوقبي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-hazza-al-mansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد هزاع المنصوري",
  "en": "Mohammed Hazza Al Mansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Hazza Al Mansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد هزاع، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-khalaf-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد خلف المزروعي",
  "en": "Mohammed Khalaf Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Khalaf Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد خلف، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-nasser-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد ناصر الظاهري",
  "en": "Mohammed Nasser Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Nasser Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد ناصر، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-saif-al-nuaimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد سيف النعيمي",
  "en": "Mohammed Saif Al Nuaimi Street",
  "meaning": {
    "en": "An Emirati figure of the نعيمي family",
    "ar": "شخصية إماراتية من أسرة النعيمي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Saif Al Nuaimi, an Emirati figure of the نعيمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد سيف، وهو شخصية إماراتية من أسرة النعيمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohsin-bin-bakhit-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محسن بن بخيت المزروعي",
  "en": "Mohsin Bin Bakhit Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mohsin Bin Bakhit Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محسن بن بخيت، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "moza-alhadouma-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع موزه الهادومة السويدي",
  "en": "Moza Alhadouma Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Moza Alhadouma Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم موزه الهادومة، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bilyateema-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك باليتيمة المنصوري",
  "en": "Mubarak Bilyateema Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bilyateema Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك باليتيمة، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-dhahi-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك بن ضاحي الكتبي",
  "en": "Mubarak Bin Dhahi Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Dhahi Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك بن ضاحي، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-fadel-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك بن فاضل المزروعي",
  "en": "Mubarak Bin Fadel Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Fadel Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك بن فاضل، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-hader-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك بن حاضر المهيري",
  "en": "Mubarak Bin Hader Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Hader Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك بن حاضر، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-mohammed-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك بن محمد المزروعي",
  "en": "Mubarak Bin Mohammed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Mohammed Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك بن محمد، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-qaran-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "طريق مبارك بن قرآن المنصوري",
  "en": "Mubarak Bin Qaran Al Mansouri Road",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Qaran Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم طريق مبارك بن قرآن، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-saeed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك بن سعيد المنصوري",
  "en": "Mubarak Bin Saeed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Mubarak Bin Saeed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك بن سعيد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "murshid-bin-adaeed-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مرشد بن عضيد الهاملي",
  "en": "Murshid Bin Adaeed Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Murshid Bin Adaeed Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مرشد بن عضيد، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "musallem-bin-sabt-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مسلم بن سبت الخييلي",
  "en": "Musallem Bin Sabt Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Musallem Bin Sabt Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مسلم بن سبت، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "muslim-bin-maktoum-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مسلم بن مكتوم المزروعي",
  "en": "Muslim Bin Maktoum Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Muslim Bin Maktoum Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مسلم بن مكتوم، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nasser-bin-mohammed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ناصر بن محمد المنصوري",
  "en": "Nasser Bin Mohammed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Nasser Bin Mohammed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ناصر بن محمد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nasser-bin-saeed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ناصر بن سعيد المنصوري",
  "en": "Nasser Bin Saeed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Nasser Bin Saeed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ناصر بن سعيد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nasser-bin-sweed-almansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ناصر بن سويد المنصوري",
  "en": "Nasser Bin Sweed Almansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Nasser Bin Sweed Almansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ناصر بن سويد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bilhamoudi-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بالحمودي المحيربي",
  "en": "Obaid Bilhamoudi Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bilhamoudi Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بالحمودي، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-beyat-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن بيات المحيربي",
  "en": "Obaid Bin Beyat Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Beyat Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن بيات، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-kadaas-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن كداس الرميثي",
  "en": "Obaid Bin Kadaas Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Kadaas Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن كداس، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-kenaish-alhameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن كنيش الهاملي",
  "en": "Obaid Bin Kenaish Alhameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Kenaish Alhameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن كنيش، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-khalfan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن خلفان المزروعي",
  "en": "Obaid Bin Khalfan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Khalfan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن خلفان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-muaded-al-kheraibani",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن معضد الخريباني",
  "en": "Obaid Bin Muaded Al Kheraibani Street",
  "meaning": {
    "en": "An Emirati figure of the خريباني family",
    "ar": "شخصية إماراتية من أسرة الخريباني"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Muaded Al Kheraibani, an Emirati figure of the خريباني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن معضد، وهو شخصية إماراتية من أسرة الخريباني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-rashid-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن راشد المنصوري",
  "en": "Obaid Bin Rashid Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Rashid Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن راشد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-rashid-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن راشد المهيري",
  "en": "Obaid Bin Rashid Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Rashid Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن راشد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-saeed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن سعيد المنصوري",
  "en": "Obaid Bin Saeed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Saeed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن سعيد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-thani-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن ثاني الرميثي",
  "en": "Obaid Bin Thani Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Thani Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن ثاني، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "omair-bin-hayy-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عمير بن حيي الهاملي",
  "en": "Omair Bin Hayy Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Omair Bin Hayy Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عمير بن حيي، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "omair-bin-muaded-al-mashghoni",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عمير بن معضد المشغوني",
  "en": "Omair Bin Muaded Al Mashghoni Street",
  "meaning": {
    "en": "An Emirati figure of the مشغوني family",
    "ar": "شخصية إماراتية من أسرة المشغوني"
  },
  "story": {
    "en": "The street carries the name of Omair Bin Muaded Al Mashghoni, an Emirati figure of the مشغوني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عمير بن معضد، وهو شخصية إماراتية من أسرة المشغوني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "omair-bin-yousef-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عمير بن يوسف المهيري",
  "en": "Omair Bin Yousef Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Omair Bin Yousef Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عمير بن يوسف، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "osha-bint-alhasm-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عوشة بنت الحصم الرميثي",
  "en": "Osha Bint Alhasm Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Osha Bint Alhasm Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عوشة بنت الحصم، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "osha-bint-khalifa-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عوشة بنت خليفة السويدي",
  "en": "Osha Bint Khalifa Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Osha Bint Khalifa Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عوشة بنت خليفة، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "qadma-bint-hilal-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع قضمة بنت هلال الظاهري",
  "en": "Qadma Bint Hilal Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Qadma Bint Hilal Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم قضمة بنت هلال، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "qammash-bin-khalfan-al-amimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع قمّاش بن خلفان العميمي",
  "en": "Qammash Bin Khalfan Al Amimi Street",
  "meaning": {
    "en": "An Emirati figure of the عميمي family",
    "ar": "شخصية إماراتية من أسرة العميمي"
  },
  "story": {
    "en": "The street carries the name of Qammash Bin Khalfan Al Amimi, an Emirati figure of the عميمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم قمّاش بن خلفان، وهو شخصية إماراتية من أسرة العميمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashed-bin-hfaid-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن حفيظ المزروعي",
  "en": "Rashed Bin Hfaid Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Rashed Bin Hfaid Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن حفيظ، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashed-bin-mubarak-almansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن مبارك المنصوري",
  "en": "Rashed Bin Mubarak Almansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Rashed Bin Mubarak Almansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن مبارك، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-daafous-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن دعفوس المزروعي",
  "en": "Rashid Bin Daafous Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Daafous Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن دعفوس، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-hamr-ain-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن حمرعين الظاهري",
  "en": "Rashid Bin Hamr Ain Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Hamr Ain Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن حمرعين، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-humaid-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن حميد الهاملي",
  "en": "Rashid Bin Humaid Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Humaid Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن حميد، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-jaber-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن جابر الهاملي",
  "en": "Rashid Bin Jaber Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Jaber Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن جابر، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-jabr-al-halami",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن جبر الحلامي",
  "en": "Rashid Bin Jabr Al Halami Street",
  "meaning": {
    "en": "An Emirati figure of the حلامي family",
    "ar": "شخصية إماراتية من أسرة الحلامي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Jabr Al Halami, an Emirati figure of the حلامي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن جبر، وهو شخصية إماراتية من أسرة الحلامي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-jabr-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن جبر السويدي",
  "en": "Rashid Bin Jabr Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Jabr Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن جبر، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-khadim-al-mansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن خادم المنصوري",
  "en": "Rashid Bin Khadim Al Mansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Khadim Al Mansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن خادم، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-khalfan-al-shamsi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن خلفان الشامسي",
  "en": "Rashid Bin Khalfan Al Shamsi Street",
  "meaning": {
    "en": "An Emirati figure of the شامسي family",
    "ar": "شخصية إماراتية من أسرة الشامسي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Khalfan Al Shamsi, an Emirati figure of the شامسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن خلفان، وهو شخصية إماراتية من أسرة الشامسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-mohammed-al-neyadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن محمد النيادي",
  "en": "Rashid Bin Mohammed Al Neyadi Street",
  "meaning": {
    "en": "An Emirati figure of the نيادي family",
    "ar": "شخصية إماراتية من أسرة النيادي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Mohammed Al Neyadi, an Emirati figure of the نيادي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن محمد، وهو شخصية إماراتية من أسرة النيادي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-salem-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن سالم المنصوري",
  "en": "Rashid Bin Salem Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Salem Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن سالم، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-bin-zunaid-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن زنيد القبيسي",
  "en": "Rashid Bin Zunaid Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Rashid Bin Zunaid Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن زنيد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rubaya-bin-shaheen-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ربيّع بن شاهين المهيري",
  "en": "Rubaya Bin Shaheen Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Rubaya Bin Shaheen Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ربيّع بن شاهين، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saber-bin-ablan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع صابر بن عبلان المزروعي",
  "en": "Saber Bin Ablan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Saber Bin Ablan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم صابر بن عبلان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-ahmed-al-mansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد أحمد المنصوري",
  "en": "Saeed Ahmed Al Mansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saeed Ahmed Al Mansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد أحمد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-alraqraqi-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد الرقراقي المزروعي",
  "en": "Saeed Alraqraqi Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Saeed Alraqraqi Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد الرقراقي، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-abdullah-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن عبدالله القبيسي",
  "en": "Saeed Bin Abdullah Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Abdullah Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن عبدالله، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-ablan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن عبلان المزروعي",
  "en": "Saeed Bin Ablan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Ablan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن عبلان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-ali-al-mohannadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن علي المهندي",
  "en": "Saeed Bin Ali Al Mohannadi Street",
  "meaning": {
    "en": "An Emirati figure of the مهندي family",
    "ar": "شخصية إماراتية من أسرة المهندي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Ali Al Mohannadi, an Emirati figure of the مهندي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن علي، وهو شخصية إماراتية من أسرة المهندي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-aljubaiha-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن الجبيهاء الظاهري",
  "en": "Saeed Bin AlJubaiha Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin AlJubaiha Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن الجبيهاء، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-atiq-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن عتيق الهاملي",
  "en": "Saeed Bin Atiq Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Atiq Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن عتيق، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-atiq-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن عتيق القبيسي",
  "en": "Saeed Bin Atiq Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Atiq Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن عتيق، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-dumithan-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن دميثان القمزي",
  "en": "Saeed Bin Dumithan Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Dumithan Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن دميثان، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-maizer-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن ميزر الرميثي",
  "en": "Saeed Bin Maizer Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Maizer Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن ميزر، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-majid-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن ماجد المنصوري",
  "en": "Saeed Bin Majid Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Majid Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن ماجد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-muaded-al-mashghoni",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن معضد المشغوني",
  "en": "Saeed Bin Muaded Al Mashghoni Street",
  "meaning": {
    "en": "An Emirati figure of the مشغوني family",
    "ar": "شخصية إماراتية من أسرة المشغوني"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Muaded Al Mashghoni, an Emirati figure of the مشغوني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن معضد، وهو شخصية إماراتية من أسرة المشغوني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-muaded-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن معضد المهيري",
  "en": "Saeed Bin Muaded Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Muaded Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن معضد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-saif-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن سيف الفلاحي",
  "en": "Saeed Bin Saif Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Saif Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن سيف، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-sweed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن سويد المنصوري",
  "en": "Saeed Bin Sweed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Sweed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن سويد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-yarouf-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن يعروف المنصوري",
  "en": "Saeed Bin Yarouf Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Yarouf Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن يعروف، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-zayed-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن زايد المزروعي",
  "en": "Saeed Bin Zayed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Zayed Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن زايد، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-ibrahim-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد ابراهيم الظاهري",
  "en": "Saeed Ibrahim Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Saeed Ibrahim Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد ابراهيم، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-rashed-al-neyadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد راشد النيادي",
  "en": "Saeed Rashed Al Neyadi Street",
  "meaning": {
    "en": "An Emirati figure of the نيادي family",
    "ar": "شخصية إماراتية من أسرة النيادي"
  },
  "story": {
    "en": "The street carries the name of Saeed Rashed Al Neyadi, an Emirati figure of the نيادي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد راشد، وهو شخصية إماراتية من أسرة النيادي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-afsan-al-khaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن عفصان الخييلي",
  "en": "Saif Bin Afsan Al Khaili Street",
  "meaning": {
    "en": "An Emirati figure of the خييلي family",
    "ar": "شخصية إماراتية من أسرة الخييلي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Afsan Al Khaili, an Emirati figure of the خييلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن عفصان، وهو شخصية إماراتية من أسرة الخييلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-ali-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن علي القبيسي",
  "en": "Saif Bin Ali Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Ali Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن علي، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-bathan-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن بطحان الهاملي",
  "en": "Saif Bin Bathan Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Bathan Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن بطحان، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-jabr-al-suwaidi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن جبر السويدي",
  "en": "Saif Bin Jabr Al Suwaidi Street",
  "meaning": {
    "en": "An Emirati figure of the سويدي family",
    "ar": "شخصية إماراتية من أسرة السويدي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Jabr Al Suwaidi, an Emirati figure of the سويدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن جبر، وهو شخصية إماراتية من أسرة السويدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-kasib-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن كاسب المهيري",
  "en": "Saif Bin Kasib Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Kasib Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن كاسب، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-khalfan-al-amimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن خلفان العميمي",
  "en": "Saif Bin Khalfan Al Amimi Street",
  "meaning": {
    "en": "An Emirati figure of the عميمي family",
    "ar": "شخصية إماراتية من أسرة العميمي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Khalfan Al Amimi, an Emirati figure of the عميمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن خلفان، وهو شخصية إماراتية من أسرة العميمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-matar-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن مطر القبيسي",
  "en": "Saif Bin Matar Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Matar Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن مطر، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-maya-al-afari",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن ميا العفاري",
  "en": "Saif Bin Maya Al Afari Street",
  "meaning": {
    "en": "An Emirati figure of the عفاري family",
    "ar": "شخصية إماراتية من أسرة العفاري"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Maya Al Afari, an Emirati figure of the عفاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن ميا، وهو شخصية إماراتية من أسرة العفاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-muaded-al-mashghoni",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن معضد المشغوني",
  "en": "Saif Bin Muaded Al Mashghoni Street",
  "meaning": {
    "en": "An Emirati figure of the مشغوني family",
    "ar": "شخصية إماراتية من أسرة المشغوني"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Muaded Al Mashghoni, an Emirati figure of the مشغوني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن معضد، وهو شخصية إماراتية من أسرة المشغوني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-musa-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن موسى الهاملي",
  "en": "Saif Bin Musa Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Musa Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن موسى، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-saeed-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن سعيد المزروعي",
  "en": "Saif Bin Saeed Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Saeed Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن سعيد، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-saluma-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن سلومة المنصوري",
  "en": "Saif Bin Saluma Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Saluma Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن سلومة، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-sari-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن ساري الكتبي",
  "en": "Saif Bin Sari Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Sari Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن ساري، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-shdhaib-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن شظيب المنصوري",
  "en": "Saif Bin Shdhaib Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Shdhaib Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن شظيب، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-bin-yadaif-al-sabousi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف بن يضيف السبوسي",
  "en": "Saif Bin Yadaif Al Sabousi Street",
  "meaning": {
    "en": "An Emirati figure of the سبوسي family",
    "ar": "شخصية إماراتية من أسرة السبوسي"
  },
  "story": {
    "en": "The street carries the name of Saif Bin Yadaif Al Sabousi, an Emirati figure of the سبوسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف بن يضيف، وهو شخصية إماراتية من أسرة السبوسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-mohamed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سيف محمد القبيسي",
  "en": "Saif Mohamed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Saif Mohamed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سيف محمد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saleh-bin-aziz-almansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع صالح بن عزيز المنصوري",
  "en": "Saleh Bin Aziz Almansoori Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Saleh Bin Aziz Almansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم صالح بن عزيز، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bilrtaa-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بالرطاع الهاملي",
  "en": "Salem Bilrtaa Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Salem Bilrtaa Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بالرطاع، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-adima-al-nuaimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن عديمة النعيمي",
  "en": "Salem Bin Adima Al Nuaimi Street",
  "meaning": {
    "en": "An Emirati figure of the نعيمي family",
    "ar": "شخصية إماراتية من أسرة النعيمي"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Adima Al Nuaimi, an Emirati figure of the نعيمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن عديمة، وهو شخصية إماراتية من أسرة النعيمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-ahmed-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن أحمد المحيربي",
  "en": "Salem Bin Ahmed Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Ahmed Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن أحمد، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-fares-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن فارس المزروعي",
  "en": "Salem Bin Fares Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Fares Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن فارس، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-hayay-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن هياي المنصوري",
  "en": "Salem Bin Hayay Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Hayay Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن هياي، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-khamis-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن خميس الظاهري",
  "en": "Salem Bin Khamis Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Khamis Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن خميس، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-maran-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن مران الظاهري",
  "en": "Salem Bin Maran Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Maran Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن مران، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-obaid-almansoori",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن عبيد المنصوري",
  "en": "Salem Bin Obaid Almansoori  Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Obaid Almansoori, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن عبيد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-tannaf-al-shamsi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن طناف الشامسي",
  "en": "Salem Bin Tannaf Al Shamsi Street",
  "meaning": {
    "en": "An Emirati figure of the شامسي family",
    "ar": "شخصية إماراتية من أسرة الشامسي"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Tannaf Al Shamsi, an Emirati figure of the شامسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن طناف، وهو شخصية إماراتية من أسرة الشامسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-rashed-al-qemzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم راشد القمزي",
  "en": "Salem Rashed Al Qemzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Salem Rashed Al Qemzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم راشد، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saqr-bin-hamdan-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع صقر بن حمدان الفلاحي",
  "en": "Saqr Bin Hamdan Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Saqr Bin Hamdan Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم صقر بن حمدان، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "shabib-bin-saeed-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع شبيب بن سعيد المهيري",
  "en": "Shabib Bin Saeed Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Shabib Bin Saeed Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم شبيب بن سعيد، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sheikh-theyab-bin-eissa-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "طريق الشيخ ذياب بن عيسى الفلاحي",
  "en": "Sheikh Theyab Bin Eissa AL Falahi Road",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Sheikh Theyab Bin Eissa AL Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم طريق الشيخ ذياب بن عيسى، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sinan-bin-khadim-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سنان بن خادم المهيري",
  "en": "Sinan Bin Khadim Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Sinan Bin Khadim Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سنان بن خادم، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-bilqaz-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل بالقاز المهيري",
  "en": "Suhail Bilqaz Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Suhail Bilqaz Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل بالقاز، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-bin-hilal-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل بن هلال المزروعي",
  "en": "Suhail Bin Hilal Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Suhail Bin Hilal Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل بن هلال، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-bin-mubarak-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل بن مبارك الكتبي",
  "en": "Suhail Bin Mubarak Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Suhail Bin Mubarak Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل بن مبارك، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-bin-serayee-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل بن سريع المزروعي",
  "en": "Suhail Bin Serayee Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Suhail Bin Serayee Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل بن سريع، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhaila-bint-maizer-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيلة بنت ميزر الرميثي",
  "en": "Suhaila Bint Maizer Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Suhaila Bint Maizer Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيلة بنت ميزر، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-belfarah-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "سلطان بالفاره القبيسي",
  "en": "Sultan Belfarah Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Sultan Belfarah Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بالفاره، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bilyazyah-al-neyadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان باليازيه النيادي",
  "en": "Sultan Bilyazyah Al Neyadi Street",
  "meaning": {
    "en": "An Emirati figure of the نيادي family",
    "ar": "شخصية إماراتية من أسرة النيادي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bilyazyah Al Neyadi, an Emirati figure of the نيادي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان باليازيه، وهو شخصية إماراتية من أسرة النيادي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-ghanem-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن غانم الكتبي",
  "en": "Sultan Bin Ghanem Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Ghanem Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن غانم، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-ghanoum-al-hameli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن غنوم الهاملي",
  "en": "Sultan Bin Ghanoum Al Hameli Street",
  "meaning": {
    "en": "An Emirati figure of the هاملي family",
    "ar": "شخصية إماراتية من أسرة الهاملي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Ghanoum Al Hameli, an Emirati figure of the هاملي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن غنوم، وهو شخصية إماراتية من أسرة الهاملي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-matar-al-halami",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن مطر الحلامي",
  "en": "Sultan Bin Matar Al Halami Street",
  "meaning": {
    "en": "An Emirati figure of the حلامي family",
    "ar": "شخصية إماراتية من أسرة الحلامي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Matar Al Halami, an Emirati figure of the حلامي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن مطر، وهو شخصية إماراتية من أسرة الحلامي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-mohammed-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن محمد القبيسي",
  "en": "Sultan Bin Mohammed Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Mohammed Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن محمد، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-qaran-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن قرآن المنصوري",
  "en": "Sultan Bin Qaran Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Qaran Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن قرآن، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-rashid-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن راشد الظاهري",
  "en": "Sultan Bin Rashid Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Rashid Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن راشد، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-sari-al-ketbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن ساري الكتبي",
  "en": "Sultan Bin Sari Al Ketbi Street",
  "meaning": {
    "en": "An Emirati figure of the كتبي family",
    "ar": "شخصية إماراتية من أسرة الكتبي"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Sari Al Ketbi, an Emirati figure of the كتبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن ساري، وهو شخصية إماراتية من أسرة الكتبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-subai-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن سبيع المنصوري",
  "en": "Sultan Bin Subai Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Subai Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن سبيع، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-suroor-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن سرور الظاهري",
  "en": "Sultan Bin Suroor Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Suroor Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن سرور، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sultan-bin-wiqaish-al-dhaheri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سلطان بن وقيش الظاهري",
  "en": "Sultan Bin Wiqaish Al Dhaheri Street",
  "meaning": {
    "en": "An Emirati figure of the ظاهري family",
    "ar": "شخصية إماراتية من أسرة الظاهري"
  },
  "story": {
    "en": "The street carries the name of Sultan Bin Wiqaish Al Dhaheri, an Emirati figure of the ظاهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سلطان بن وقيش، وهو شخصية إماراتية من أسرة الظاهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "swaidan-bin-rubaya-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سويدان بن ربيع المهيري",
  "en": "Swaidan Bin Rubaya Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Swaidan Bin Rubaya Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سويدان بن ربيع، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "swaidan-bin-zaal-al-muhairbi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سويدان بن زعل المحيربي",
  "en": "Swaidan Bin Zaal Al Muhairbi Street",
  "meaning": {
    "en": "An Emirati figure of the محيربي family",
    "ar": "شخصية إماراتية من أسرة المحيربي"
  },
  "story": {
    "en": "The street carries the name of Swaidan Bin Zaal Al Muhairbi, an Emirati figure of the محيربي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سويدان بن زعل، وهو شخصية إماراتية من أسرة المحيربي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "thani-bin-afsan-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثاني بن عفصان المهيري",
  "en": "Thani Bin Afsan Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Thani Bin Afsan Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ثاني بن عفصان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "thani-bin-matar-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثاني بن مطر الرميثي",
  "en": "Thani Bin Matar Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Thani Bin Matar Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ثاني بن مطر، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "thani-bin-murshid-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ثاني بن مرشد الرميثي",
  "en": "Thani Bin Murshid Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Thani Bin Murshid Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ثاني بن مرشد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "yaed-bin-salem-al-qubaisi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع ياعد بن سالم القبيسي",
  "en": "Yaed Bin Salem Al Qubaisi Street",
  "meaning": {
    "en": "An Emirati figure of the قبيسي family",
    "ar": "شخصية إماراتية من أسرة القبيسي"
  },
  "story": {
    "en": "The street carries the name of Yaed Bin Salem Al Qubaisi, an Emirati figure of the قبيسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم ياعد بن سالم، وهو شخصية إماراتية من أسرة القبيسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "yousef-bin-afsan-al-muhairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع يوسف بن عفصان المهيري",
  "en": "Yousef Bin Afsan Al Muhairi Street",
  "meaning": {
    "en": "An Emirati figure of the مهيري family",
    "ar": "شخصية إماراتية من أسرة المهيري"
  },
  "story": {
    "en": "The street carries the name of Yousef Bin Afsan Al Muhairi, an Emirati figure of the مهيري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم يوسف بن عفصان، وهو شخصية إماراتية من أسرة المهيري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "yousef-bin-nashir-al-qamzi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع يوسف بن ناشر القمزي",
  "en": "Yousef Bin Nashir Al Qamzi Street",
  "meaning": {
    "en": "An Emirati figure of the قمزي family",
    "ar": "شخصية إماراتية من أسرة القمزي"
  },
  "story": {
    "en": "The street carries the name of Yousef Bin Nashir Al Qamzi, an Emirati figure of the قمزي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم يوسف بن ناشر، وهو شخصية إماراتية من أسرة القمزي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zaal-bin-rashid-al-rumaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زعل بن راشد الرميثي",
  "en": "Zaal Bin Rashid Al Rumaithi Street",
  "meaning": {
    "en": "An Emirati figure of the رميثي family",
    "ar": "شخصية إماراتية من أسرة الرميثي"
  },
  "story": {
    "en": "The street carries the name of Zaal Bin Rashid Al Rumaithi, an Emirati figure of the رميثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زعل بن راشد، وهو شخصية إماراتية من أسرة الرميثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zaal-bin-saif-al-falahi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زعل بن سيف الفلاحي",
  "en": "Zaal Bin Saif Al Falahi Street",
  "meaning": {
    "en": "An Emirati figure of the فلاحي family",
    "ar": "شخصية إماراتية من أسرة الفلاحي"
  },
  "story": {
    "en": "The street carries the name of Zaal Bin Saif Al Falahi, an Emirati figure of the فلاحي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زعل بن سيف، وهو شخصية إماراتية من أسرة الفلاحي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zayed-bin-khalfan-al-mazrouei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زايد بن خلفان المزروعي",
  "en": "Zayed Bin Khalfan Al Mazrouei Street",
  "meaning": {
    "en": "An Emirati figure of the مزروعي family",
    "ar": "شخصية إماراتية من أسرة المزروعي"
  },
  "story": {
    "en": "The street carries the name of Zayed Bin Khalfan Al Mazrouei, an Emirati figure of the مزروعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زايد بن خلفان، وهو شخصية إماراتية من أسرة المزروعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zaytoun-bin-mohammed-al-mansouri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زيتون بن محمد المنصوري",
  "en": "Zaytoun Bin Mohammed Al Mansouri Street",
  "meaning": {
    "en": "An Emirati figure of the منصوري family",
    "ar": "شخصية إماراتية من أسرة المنصوري"
  },
  "story": {
    "en": "The street carries the name of Zaytoun Bin Mohammed Al Mansouri, an Emirati figure of the منصوري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زيتون بن محمد، وهو شخصية إماراتية من أسرة المنصوري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sheikh-humaid-bin-rashid-al-nuaimi",
  "emirate": "ajman",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشيخ حميد بن راشد النعيمي",
  "en": "Sheikh Humaid Bin Rashid Al Nuaimi Street",
  "meaning": {
    "en": "An Emirati figure of the نعيمي family",
    "ar": "شخصية إماراتية من أسرة النعيمي"
  },
  "story": {
    "en": "The street carries the name of Sheikh Humaid Bin Rashid Al Nuaimi, an Emirati figure of the نعيمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشيخ حميد بن راشد، وهو شخصية إماراتية من أسرة النعيمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "matar-bin-hamad-al-zeabi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مطر بن حمد الزعابي",
  "en": "Matar Bin Hamad Al Zeabi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Matar Bin Hamad Al Zeabi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مطر بن حمد، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-nasser-al-zaabi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد ناصر الزعابي",
  "en": "Rashid Nasser Al Zaabi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Rashid Nasser Al Zaabi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد ناصر، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saif-khalaf-al-za-abi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد سيف حلف الزعابي",
  "en": "Saif Khalaf Al Za'abi Street",
  "meaning": {
    "en": "An Emirati figure of the زعابي family",
    "ar": "شخصية إماراتية من أسرة الزعابي"
  },
  "story": {
    "en": "The street carries the name of Saif Khalaf Al Za'abi, an Emirati figure of the زعابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد سيف حلف، وهو شخصية إماراتية من أسرة الزعابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-bin-qaran-al-mansouri-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع مبارك بن قرآن المنصوري",
  "en": "Mubarak Bin Qaran Al Mansouri Street",
  "meaning": {
    "en": "A figure close to Sheikh Zayed from the 1960s",
    "ar": "من الشخصيات التي رافقت الشيخ زايد"
  },
  "story": {
    "en": "Mubarak bin Qaran Al Mansouri was an Emirati figure who worked alongside Sheikh Zayed bin Sultan from the early 1960s.",
    "ar": "مبارك بن قران بن راشد آل مانع المنصوري من الشخصيات الإماراتية التي رافقت الشيخ زايد بن سلطان منذ مطلع الستينيات."
  },
  "refs": [
    {
      "label": "Wikipedia — مبارك بن قران المنصوري",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%A8%D8%A7%D8%B1%D9%83_%D8%A8%D9%86_%D9%82%D8%B1%D8%A7%D9%86_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "rashid-bin-tannaf-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع راشد بن طناف",
  "en": "Rashid Bin Tannaf Street",
  "meaning": {
    "en": "A pioneer of Nabati poetry",
    "ar": "من رواد الشعر النبطي"
  },
  "story": {
    "en": "Rashid bin Tannaf al-Nuaimi (1910–2000) was an Emirati poet, one of the pioneers of Nabati poetry in the UAE.",
    "ar": "راشد بن طناف النعيمي (١٩١٠–٢٠٠٠م) شاعر إماراتي، من أبرز رواد الشعر النبطي في الدولة."
  },
  "refs": [
    {
      "label": "Wikipedia — راشد بن طناف",
      "url": "https://ar.wikipedia.org/wiki/%D8%B1%D8%A7%D8%B4%D8%AF_%D8%A8%D9%86_%D8%B7%D9%86%D8%A7%D9%81"
    }
  ]
},
{
  "id": "ali-bin-rahma-al-shamsy-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع علي بن رحمة الشامسي",
  "en": "Ali Bin Rahma Al Shamsy Street",
  "meaning": {
    "en": "An Emirati poet from Sharjah",
    "ar": "شاعر إماراتي من الشارقة"
  },
  "story": {
    "en": "Ali bin Rahma Al Shamsi (1930–2006) was an Emirati poet from Sharjah, among the veterans of Nabati poetry.",
    "ar": "علي بن رحمة بن سالم الشامسي (١٩٣٠–٢٠٠٦م) شاعر إماراتي من الشارقة، من المخضرمين في الشعر النبطي."
  },
  "refs": [
    {
      "label": "Wikipedia — علي بن رحمة الشامسي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D9%84%D9%8A_%D8%A8%D9%86_%D8%B1%D8%AD%D9%85%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D8%B3%D9%8A"
    }
  ]
},
{
  "id": "mohammed-bin-khalifa-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع محمد بن خليفة",
  "en": "Mohammed Bin Khalifa Street",
  "meaning": {
    "en": "An Emirati businessman",
    "ar": "رجل أعمال إماراتي"
  },
  "story": {
    "en": "Mohammed bin Khalifa Al Suwaidi (b. 1945) is an Emirati businessman and chairman of the Bin Yousef group.",
    "ar": "محمد بن خليفة بن يوسف السويدي (وُلد ١٩٤٥م) رجل أعمال إماراتي، ورئيس مجلس إدارة مجموعة بن يوسف."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن خليفة بن يوسف السويدي",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%AE%D9%84%D9%8A%D9%81%D8%A9_%D8%A8%D9%86_%D9%8A%D9%88%D8%B3%D9%81_%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D9%8A"
    }
  ]
},
{
  "id": "latifa-bint-hamdan-street",
  "emirate": "dubai",
  "category": "person",
  "origin": "documented",
  "ar": "شارع لطيفة بنت حمدان",
  "en": "Latifa Bint Hamdan Street",
  "meaning": {
    "en": "A daughter of Sheikh Hamdan bin Zayed",
    "ar": "ابنة الشيخ حمدان بن زايد"
  },
  "story": {
    "en": "Latifa bint Hamdan Al Nahyan (1919–1983) was a daughter of Sheikh Hamdan bin Zayed, Ruler of Abu Dhabi.",
    "ar": "لطيفة بنت حمدان بن زايد آل نهيان (١٩١٩–١٩٨٣م) ابنة الشيخ حمدان بن زايد، حاكم أبوظبي."
  },
  "refs": [
    {
      "label": "Wikipedia — لطيفة بنت حمدان بن زايد آل نهيان",
      "url": "https://ar.wikipedia.org/wiki/%D9%84%D8%B7%D9%8A%D9%81%D8%A9_%D8%A8%D9%86%D8%AA_%D8%AD%D9%85%D8%AF%D8%A7%D9%86_%D8%A8%D9%86_%D8%B2%D8%A7%D9%8A%D8%AF_%D8%A2%D9%84_%D9%86%D9%87%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "khalid-bin-sultan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خالِد بن سلطان",
  "en": "Khalid Bin Sultan Street",
  "meaning": {
    "en": "An Emirati fashion designer",
    "ar": "مصمم أزياء إماراتي"
  },
  "story": {
    "en": "Sheikh Khalid bin Sultan Al Qasimi (1980–2019) was an Emirati fashion designer who founded a fashion house in Sharjah.",
    "ar": "الشيخ خالد بن سلطان القاسمي (١٩٨٠–٢٠١٩م) مصمم أزياء إماراتي، وأسس دار أزياء في الشارقة."
  },
  "refs": [
    {
      "label": "Wikipedia — خالد بن سلطان بن محمد القاسمي",
      "url": "https://ar.wikipedia.org/wiki/%D8%AE%D8%A7%D9%84%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D8%B7%D8%A7%D9%86_%D8%A8%D9%86_%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85%D9%8A"
    }
  ]
},
{
  "id": "maitha-bint-mohammed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ميثاء بنت محمد",
  "en": "Maitha Bint Mohammed Street",
  "meaning": {
    "en": "An Emirati athlete",
    "ar": "رياضية إماراتية"
  },
  "story": {
    "en": "Sheikha Maitha bint Mohammed Al Maktoum (b. 1980) is an Emirati athlete in karate and taekwondo, and the first Emirati woman to compete at the Olympic Games.",
    "ar": "الشيخة ميثاء بنت محمد بن راشد آل مكتوم (وُلدت ١٩٨٠م) رياضية إماراتية في الكاراتيه والتايكوندو، وأول امرأة إماراتية تشارك في الألعاب الأولمبية."
  },
  "refs": [
    {
      "label": "Wikipedia — ميثاء بنت محمد بن راشد آل مكتوم",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D9%8A%D8%AB%D8%A7%D8%A1_%D8%A8%D9%86%D8%AA_%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B1%D8%A7%D8%B4%D8%AF_%D8%A2%D9%84_%D9%85%D9%83%D8%AA%D9%88%D9%85"
    }
  ]
},
{
  "id": "theyab-bin-eissa-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع ذياب بن عيسى",
  "en": "Theyab Bin Eissa Street",
  "meaning": {
    "en": "First ruler of Abu Dhabi",
    "ar": "أول حكام أبوظبي"
  },
  "story": {
    "en": "Dhiyab bin Isa Al Nahyan (r. 1761–1793) was the first ruler of Abu Dhabi and the founder of the Al Bu Falah line.",
    "ar": "ذياب بن عيسى آل نهيان (حكم ١٧٦١–١٧٩٣م) أول حكام أبوظبي، ومؤسس سلالة آل بوفلاح."
  },
  "refs": [
    {
      "label": "Wikipedia — ذياب بن عيسى بن نهيان آل نهيان",
      "url": "https://ar.wikipedia.org/wiki/%D8%B0%D9%8A%D8%A7%D8%A8_%D8%A8%D9%86_%D8%B9%D9%8A%D8%B3%D9%89_%D8%A8%D9%86_%D9%86%D9%87%D9%8A%D8%A7%D9%86_%D8%A2%D9%84_%D9%86%D9%87%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "khalifa-bin-shakhbout-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع خليفة بن شخبوط",
  "en": "Khalifa Bin Shakhbout Street",
  "meaning": {
    "en": "Fifth ruler of Abu Dhabi",
    "ar": "خامس حكام أبوظبي"
  },
  "story": {
    "en": "Khalifa bin Shakhbout Al Nahyan (r. 1833–1845) was the fifth ruler of Abu Dhabi, succeeding his brother Tahnoun.",
    "ar": "خليفة بن شخبوط بن ذياب آل نهيان (حكم ١٨٣٣–١٨٤٥م) خامس حكام أبوظبي، خلف أخاه طحنون."
  },
  "refs": [
    {
      "label": "Wikipedia — خليفة بن شخبوط بن ذياب آل نهيان",
      "url": "https://ar.wikipedia.org/wiki/%D8%AE%D9%84%D9%8A%D9%81%D8%A9_%D8%A8%D9%86_%D8%B4%D8%AE%D8%A8%D9%88%D8%B7_%D8%A8%D9%86_%D8%B0%D9%8A%D8%A7%D8%A8_%D8%A2%D9%84_%D9%86%D9%87%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "araqeeb-ar-rimth-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "documented",
  "ar": "شارع عَراقِيب الرِّمث",
  "en": "'Araqeeb Ar Rimth Street",
  "translit": "Shāriʿ ʿArāqīb ar-Rimth",
  "meaning": {
    "en": "The rimth dunes — dunes where the rimth shrub grows",
    "ar": "كثبان رملية ينبت فيها الرِّمث"
  },
  "story": {
    "en": "Two elements: ʿarāqīb, sand dunes, and al-rimth, a genus of perennial desert shrubs of the family Amaranthaceae that grows across western and central Asia.",
    "ar": "اسم من عنصرين: «عراقيب» أي الكثبان الرملية، و«الرِّمث» جنس نباتي معمر من الفصيلة القطيفية ينتشر في غرب آسيا ووسطها."
  },
  "refs": [
    {
      "label": "Wikipedia — رمث",
      "url": "https://ar.wikipedia.org/wiki/رمث"
    }
  ]
},
{
  "id": "abdulla-ahmed-al-hosani",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله أحمد الحوسني",
  "en": "Abdulla Ahmed Al Hosani Street",
  "meaning": {
    "en": "An Emirati figure of the حوسني family",
    "ar": "شخصية إماراتية من أسرة الحوسني"
  },
  "story": {
    "en": "The street carries the name of Abdulla Ahmed Al Hosani, an Emirati figure of the حوسني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله أحمد، وهو شخصية إماراتية من أسرة الحوسني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdulla-mohammed-al-kaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله محمد الكعبي",
  "en": "Abdulla Mohammed Al Kaabi Street",
  "meaning": {
    "en": "An Emirati figure of the كعبي family",
    "ar": "شخصية إماراتية من أسرة الكعبي"
  },
  "story": {
    "en": "The street carries the name of Abdulla Mohammed Al Kaabi, an Emirati figure of the كعبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله محمد، وهو شخصية إماراتية من أسرة الكعبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-abdulrahim-al-waswasi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "account",
  "ar": "شارع عبدالله بن عبدالرحيم الوسواسي",
  "en": "Abdullah Bin Abdulrahim Al Waswasi Street",
  "meaning": {
    "en": "One of Abu Dhabi's first Quran teachers",
    "ar": "من أوائل معلّمي القرآن في أبوظبي"
  },
  "story": {
    "en": "Abdullah bin Abdulrahim Al Waswasi was among the first teachers in Abu Dhabi, teaching the Quran and its memorisation.",
    "ar": "عبدالله بن عبدالرحيم الوسواسي من أوائل المعلّمين في أبوظبي، ومعلّم القرآن الكريم ومحفّظه."
  },
  "refs": []
},
{
  "id": "abdullah-bin-hilal-al-kuwaiti",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن هلال الكويتي",
  "en": "Abdullah Bin Hilal Al Kuwaiti Street",
  "meaning": {
    "en": "An Emirati figure of the كويتي family",
    "ar": "شخصية إماراتية من أسرة الكويتي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Hilal Al Kuwaiti, an Emirati figure of the كويتي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن هلال، وهو شخصية إماراتية من أسرة الكويتي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullah-bin-yazeed-al-khatmi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالله بن يزيد الخطمي",
  "en": "Abdullah Bin Yazeed Al Khatmi Street",
  "meaning": {
    "en": "An Emirati figure of the خطمي family",
    "ar": "شخصية إماراتية من أسرة الخطمي"
  },
  "story": {
    "en": "The street carries the name of Abdullah Bin Yazeed Al Khatmi, an Emirati figure of the خطمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالله بن يزيد، وهو شخصية إماراتية من أسرة الخطمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdulraheem-bin-taj-al-din-al-hashemi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبدالرحيم بن تاج الدين الهاشمي",
  "en": "Abdulraheem Bin Taj Al Din Al Hashemi Street",
  "meaning": {
    "en": "An Emirati figure of the هاشمي family",
    "ar": "شخصية إماراتية من أسرة الهاشمي"
  },
  "story": {
    "en": "The street carries the name of Abdulraheem Bin Taj Al Din Al Hashemi, an Emirati figure of the هاشمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبدالرحيم بن تاج الدين، وهو شخصية إماراتية من أسرة الهاشمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-al-mahmoud-al-blooshi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد المحمود البلوشي",
  "en": "Ahmed Al Mahmoud Al Blooshi Street",
  "meaning": {
    "en": "An Emirati figure of the بلوشي family",
    "ar": "شخصية إماراتية من أسرة البلوشي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Al Mahmoud Al Blooshi, an Emirati figure of the بلوشي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد المحمود، وهو شخصية إماراتية من أسرة البلوشي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-khalifa-al-blooshi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد خليفة البلوشي",
  "en": "Ahmed Khalifa Al Blooshi Street",
  "meaning": {
    "en": "An Emirati figure of the بلوشي family",
    "ar": "شخصية إماراتية من أسرة البلوشي"
  },
  "story": {
    "en": "The street carries the name of Ahmed Khalifa Al Blooshi, an Emirati figure of the بلوشي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أحمد خليفة، وهو شخصية إماراتية من أسرة البلوشي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-jaroud-bin-al-mu-alla",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الجارُود بن المُعَلَّى",
  "en": "Al Jaroud Bin Al Mu'alla Street",
  "meaning": {
    "en": "An Emirati figure of the معلي family",
    "ar": "شخصية إماراتية من أسرة المعلي"
  },
  "story": {
    "en": "The street carries the name of Al Jaroud Bin Al Mu'alla, an Emirati figure of the معلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الجارُود بن، وهو شخصية إماراتية من أسرة المعلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-shaheed-ahmed-khamis-al-hammadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد أحمد خميس الحمادي",
  "en": "Al Shaheed Ahmed Khamis Al Hammadi Street",
  "meaning": {
    "en": "An Emirati figure of the حمادي family",
    "ar": "شخصية إماراتية من أسرة الحمادي"
  },
  "story": {
    "en": "The street carries the name of Al Shaheed Ahmed Khamis Al Hammadi, an Emirati figure of the حمادي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد أحمد خميس، وهو شخصية إماراتية من أسرة الحمادي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-almqaidi-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي المقيضي العامري",
  "en": "Ali Almqaidi Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Ali Almqaidi Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي المقيضي، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-alateeb-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن العطيب العامري",
  "en": "Ali Bin Alateeb Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Ali Bin Alateeb Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن العطيب، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-khalifa-al-mesmari",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي خليفة المسماري",
  "en": "Ali Khalifa Al Mesmari Street",
  "meaning": {
    "en": "An Emirati figure of the مسماري family",
    "ar": "شخصية إماراتية من أسرة المسماري"
  },
  "story": {
    "en": "The street carries the name of Ali Khalifa Al Mesmari, an Emirati figure of the مسماري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي خليفة، وهو شخصية إماراتية من أسرة المسماري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-nasser-al-khyeli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي ناصر الخيلي",
  "en": "Ali Nasser Al Khyeli Street",
  "meaning": {
    "en": "An Emirati figure of the خيلي family",
    "ar": "شخصية إماراتية من أسرة الخيلي"
  },
  "story": {
    "en": "The street carries the name of Ali Nasser Al Khyeli, an Emirati figure of the خيلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي ناصر، وهو شخصية إماراتية من أسرة الخيلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-saeed-al-saedi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي سعيد الساعدي",
  "en": "Ali Saeed Al Saedi Street",
  "meaning": {
    "en": "An Emirati figure of the ساعدي family",
    "ar": "شخصية إماراتية من أسرة الساعدي"
  },
  "story": {
    "en": "The street carries the name of Ali Saeed Al Saedi, an Emirati figure of the ساعدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي سعيد، وهو شخصية إماراتية من أسرة الساعدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "amer-bin-qanosh-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عامر بن قانوش العامري",
  "en": "Amer Bin Qanosh Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Amer Bin Qanosh Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عامر بن قانوش، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "buti-ayel-al-ahbabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي عائل الاحبابي",
  "en": "Buti Ayel Al Ahbabi Street",
  "meaning": {
    "en": "An Emirati figure of the احبابي family",
    "ar": "شخصية إماراتية من أسرة الاحبابي"
  },
  "story": {
    "en": "The street carries the name of Buti Ayel Al Ahbabi, an Emirati figure of the احبابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي عائل، وهو شخصية إماراتية من أسرة الاحبابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "eid-bin-saeed-al-ghafli",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عيد بن سعيد الغفلي",
  "en": "Eid Bin Saeed Al Ghafli Street",
  "meaning": {
    "en": "An Emirati figure of the غفلي family",
    "ar": "شخصية إماراتية من أسرة الغفلي"
  },
  "story": {
    "en": "The street carries the name of Eid Bin Saeed Al Ghafli, an Emirati figure of the غفلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عيد بن سعيد، وهو شخصية إماراتية من أسرة الغفلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "fahad-bin-muaid-al-ahbabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فهد بن معيض الأحبابي",
  "en": "Fahad Bin Muaid Al Ahbabi Street",
  "meaning": {
    "en": "An Emirati figure of the احبابي family",
    "ar": "شخصية إماراتية من أسرة الاحبابي"
  },
  "story": {
    "en": "The street carries the name of Fahad Bin Muaid Al Ahbabi, an Emirati figure of the احبابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فهد بن معيض، وهو شخصية إماراتية من أسرة الاحبابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "fahad-bin-rashid-al-dosari",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فهد بن راشد الدوسري",
  "en": "Fahad Bin Rashid Al Dosari Street",
  "meaning": {
    "en": "An Emirati figure of the دوسري family",
    "ar": "شخصية إماراتية من أسرة الدوسري"
  },
  "story": {
    "en": "The street carries the name of Fahad Bin Rashid Al Dosari, an Emirati figure of the دوسري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فهد بن راشد، وهو شخصية إماراتية من أسرة الدوسري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "falah-bin-jaber-al-ahbabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع فلاح بن جابر الاحبابي",
  "en": "Falah Bin Jaber Al Ahbabi Street",
  "meaning": {
    "en": "An Emirati figure of the احبابي family",
    "ar": "شخصية إماراتية من أسرة الاحبابي"
  },
  "story": {
    "en": "The street carries the name of Falah Bin Jaber Al Ahbabi, an Emirati figure of the احبابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم فلاح بن جابر، وهو شخصية إماراتية من أسرة الاحبابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "jaber-bin-abdullah-al-ansari",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جابر بن عبدالله الأنصاري",
  "en": "Jaber Bin Abdullah Al Ansari Street",
  "meaning": {
    "en": "An Emirati figure of the انصاري family",
    "ar": "شخصية إماراتية من أسرة الانصاري"
  },
  "story": {
    "en": "The street carries the name of Jaber Bin Abdullah Al Ansari, an Emirati figure of the انصاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جابر بن عبدالله، وهو شخصية إماراتية من أسرة الانصاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "jumaa-mohamed-al-kaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع جمعة محمد الكعبي",
  "en": "Jumaa Mohamed Al Kaabi Street",
  "meaning": {
    "en": "An Emirati figure of the كعبي family",
    "ar": "شخصية إماراتية من أسرة الكعبي"
  },
  "story": {
    "en": "The street carries the name of Jumaa Mohamed Al Kaabi, an Emirati figure of the كعبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم جمعة محمد، وهو شخصية إماراتية من أسرة الكعبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bilqouba-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بالقوبع الحميري",
  "en": "Khalifa Bilqouba Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bilqouba Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بالقوبع، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-bin-khamis-al-dehaili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة بن خميس الدحيلي",
  "en": "Khalifa Bin Khamis Al Dehaili Street",
  "meaning": {
    "en": "An Emirati figure of the دحيلي family",
    "ar": "شخصية إماراتية من أسرة الدحيلي"
  },
  "story": {
    "en": "The street carries the name of Khalifa Bin Khamis Al Dehaili, an Emirati figure of the دحيلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفة بن خميس، وهو شخصية إماراتية من أسرة الدحيلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "kunna-bint-saeed-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع كنه بنت سعيد الحميري",
  "en": "Kunna Bint Saeed Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Kunna Bint Saeed Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم كنه بنت سعيد، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "moahmmed-bin-brook-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن بروك الحميري",
  "en": "Moahmmed Bin Brook Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Moahmmed Bin Brook Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن بروك، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-al-falahi-al-yasi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "طريق محمد الفلاحي الياسي",
  "en": "Mohamed Al Falahi Al Yasi Road",
  "meaning": {
    "en": "An Emirati figure of the ياسي family",
    "ar": "شخصية إماراتية من أسرة الياسي"
  },
  "story": {
    "en": "The street carries the name of Mohamed Al Falahi Al Yasi, an Emirati figure of the ياسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم طريق محمد الفلاحي، وهو شخصية إماراتية من أسرة الياسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-ali-al-bastaki",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد علي البستكي",
  "en": "Mohamed Ali Al Bastaki Street",
  "meaning": {
    "en": "An Emirati figure of the بستكي family",
    "ar": "شخصية إماراتية من أسرة البستكي"
  },
  "story": {
    "en": "The street carries the name of Mohamed Ali Al Bastaki, an Emirati figure of the بستكي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد علي، وهو شخصية إماراتية من أسرة البستكي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-ali-al-hosani",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد علي الحوسني",
  "en": "Mohamed Ali Al Hosani Street",
  "meaning": {
    "en": "An Emirati figure of the حوسني family",
    "ar": "شخصية إماراتية من أسرة الحوسني"
  },
  "story": {
    "en": "The street carries the name of Mohamed Ali Al Hosani, an Emirati figure of the حوسني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد علي، وهو شخصية إماراتية من أسرة الحوسني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-jassem-al-hammadi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد جاسم الحمادي",
  "en": "Mohamed Jassem Al Hammadi Street",
  "meaning": {
    "en": "An Emirati figure of the حمادي family",
    "ar": "شخصية إماراتية من أسرة الحمادي"
  },
  "story": {
    "en": "The street carries the name of Mohamed Jassem Al Hammadi, an Emirati figure of the حمادي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد جاسم، وهو شخصية إماراتية من أسرة الحمادي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-khalfan-al-seyabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد خلفان السيابي",
  "en": "Mohamed Khalfan Al Seyabi Street",
  "meaning": {
    "en": "An Emirati figure of the سيابي family",
    "ar": "شخصية إماراتية من أسرة السيابي"
  },
  "story": {
    "en": "The street carries the name of Mohamed Khalfan Al Seyabi, an Emirati figure of the سيابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد خلفان، وهو شخصية إماراتية من أسرة السيابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohamed-salem-al-junaibi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد سالم الجنيبي",
  "en": "Mohamed Salem Al Junaibi Street",
  "meaning": {
    "en": "An Emirati figure of the جنيبي family",
    "ar": "شخصية إماراتية من أسرة الجنيبي"
  },
  "story": {
    "en": "The street carries the name of Mohamed Salem Al Junaibi, an Emirati figure of the جنيبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد سالم، وهو شخصية إماراتية من أسرة الجنيبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammad-bin-taj-al-din-al-hashemi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن تاج الدين الهاشمي",
  "en": "Mohammad Bin Taj Al Din Al Hashemi Street",
  "meaning": {
    "en": "An Emirati figure of the هاشمي family",
    "ar": "شخصية إماراتية من أسرة الهاشمي"
  },
  "story": {
    "en": "The street carries the name of Mohammad Bin Taj Al Din Al Hashemi, an Emirati figure of the هاشمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن تاج الدين، وهو شخصية إماراتية من أسرة الهاشمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-ahmed-al-shinqiti",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن أحمد الشنقيطي",
  "en": "Mohammed Bin Ahmed Al Shinqiti Street",
  "meaning": {
    "en": "An Emirati figure of the شنقيطي family",
    "ar": "شخصية إماراتية من أسرة الشنقيطي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Ahmed Al Shinqiti, an Emirati figure of the شنقيطي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن أحمد، وهو شخصية إماراتية من أسرة الشنقيطي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-hamed-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن حمد العامري",
  "en": "Mohammed Bin Hamed Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Hamed Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن حمد، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-khalifa-al-kindi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن خليفة الكندي",
  "en": "Mohammed Bin Khalifa Al Kindi Street",
  "meaning": {
    "en": "An Emirati figure of the كندي family",
    "ar": "شخصية إماراتية من أسرة الكندي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Khalifa Al Kindi, an Emirati figure of the كندي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن خليفة، وهو شخصية إماراتية من أسرة الكندي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-murshid-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن مرشد الحميري",
  "en": "Mohammed Bin Murshid Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Murshid Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن مرشد، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-rashid-al-tamimi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن راشد التميمي",
  "en": "Mohammed Bin Rashid Al Tamimi Street",
  "meaning": {
    "en": "An Emirati figure of the تميمي family",
    "ar": "شخصية إماراتية من أسرة التميمي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Rashid Al Tamimi, an Emirati figure of the تميمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن راشد، وهو شخصية إماراتية من أسرة التميمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-sabaa-al-kindi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سباع الكندي",
  "en": "Mohammed Bin Sabaa Al Kindi Street",
  "meaning": {
    "en": "An Emirati figure of the كندي family",
    "ar": "شخصية إماراتية من أسرة الكندي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Sabaa Al Kindi, an Emirati figure of the كندي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سباع، وهو شخصية إماراتية من أسرة الكندي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-khaled-al-hamdi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد خالد الحامدي",
  "en": "Mohammed Khaled Al Hamdi Street",
  "meaning": {
    "en": "An Emirati figure of the حامدي family",
    "ar": "شخصية إماراتية من أسرة الحامدي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Khaled Al Hamdi, an Emirati figure of the حامدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد خالد، وهو شخصية إماراتية من أسرة الحامدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-khamis-al-rayssi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد خميس الريسي",
  "en": "Mohammed Khamis Al Rayssi Street",
  "meaning": {
    "en": "An Emirati figure of the ريسي family",
    "ar": "شخصية إماراتية من أسرة الريسي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Khamis Al Rayssi, an Emirati figure of the ريسي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد خميس، وهو شخصية إماراتية من أسرة الريسي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-alhabnoni-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك الحبنوني العامري",
  "en": "Mubarak Alhabnoni Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Mubarak Alhabnoni Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك الحبنوني، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mubarak-saif-al-kheili",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع مبارك سيف الخيلي",
  "en": "Mubarak Saif Al Kheili Street",
  "meaning": {
    "en": "An Emirati figure of the خيلي family",
    "ar": "شخصية إماراتية من أسرة الخيلي"
  },
  "story": {
    "en": "The street carries the name of Mubarak Saif Al Kheili, an Emirati figure of the خيلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم مبارك سيف، وهو شخصية إماراتية من أسرة الخيلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nafja-bint-obaid-al-teneiji",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع نافجة بنت عبيد الطنيجي",
  "en": "Nafja Bint Obaid Al Teneiji Street",
  "meaning": {
    "en": "An Emirati figure of the طنيجي family",
    "ar": "شخصية إماراتية من أسرة الطنيجي"
  },
  "story": {
    "en": "The street carries the name of Nafja Bint Obaid Al Teneiji, an Emirati figure of the طنيجي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم نافجة بنت عبيد، وهو شخصية إماراتية من أسرة الطنيجي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nassib-bin-ahmed-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع نسيب بن أحمد الحميري",
  "en": "Nassib Bin Ahmed Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Nassib Bin Ahmed Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم نسيب بن أحمد، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bilartee-al-humairi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بالعرطى الحميري",
  "en": "Obaid Bilartee Al Humairi Street",
  "meaning": {
    "en": "An Emirati figure of the حميري family",
    "ar": "شخصية إماراتية من أسرة الحميري"
  },
  "story": {
    "en": "The street carries the name of Obaid Bilartee Al Humairi, an Emirati figure of the حميري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بالعرطى، وهو شخصية إماراتية من أسرة الحميري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-bin-mariman-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد بن مريمان العامري",
  "en": "Obaid Bin Mariman Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Obaid Bin Mariman Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد بن مريمان، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "obaid-mohammed-abdulla-al-kaabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبيد محمد عبدالله الكعبي",
  "en": "Obaid Mohammed Abdulla Al Kaabi Street",
  "meaning": {
    "en": "An Emirati figure of the كعبي family",
    "ar": "شخصية إماراتية من أسرة الكعبي"
  },
  "story": {
    "en": "The street carries the name of Obaid Mohammed Abdulla Al Kaabi, an Emirati figure of the كعبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبيد محمد عبدالله، وهو شخصية إماراتية من أسرة الكعبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "omer-alsalek-al-shinqiti",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عمر السالك الشنقيطي",
  "en": "Omer Alsalek Al Shinqiti Street",
  "meaning": {
    "en": "An Emirati figure of the شنقيطي family",
    "ar": "شخصية إماراتية من أسرة الشنقيطي"
  },
  "story": {
    "en": "The street carries the name of Omer Alsalek Al Shinqiti, an Emirati figure of the شنقيطي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عمر السالك، وهو شخصية إماراتية من أسرة الشنقيطي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "owais-bin-ali-al-derei",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عويص بن علي الدرعي",
  "en": "Owais Bin Ali Al Derei Street",
  "meaning": {
    "en": "An Emirati figure of the درعي family",
    "ar": "شخصية إماراتية من أسرة الدرعي"
  },
  "story": {
    "en": "The street carries the name of Owais Bin Ali Al Derei, an Emirati figure of the درعي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عويص بن علي، وهو شخصية إماراتية من أسرة الدرعي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashed-bin-saeed-al-ghaithi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع راشد بن سعيد الغيثي",
  "en": "Rashed Bin Saeed Al Ghaithi Street",
  "meaning": {
    "en": "An Emirati figure of the غيثي family",
    "ar": "شخصية إماراتية من أسرة الغيثي"
  },
  "story": {
    "en": "The street carries the name of Rashed Bin Saeed Al Ghaithi, an Emirati figure of the غيثي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم راشد بن سعيد، وهو شخصية إماراتية من أسرة الغيثي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saad-mohammed-al-ahbabi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعد محمد الاحبابي",
  "en": "Saad Mohammed Al Ahbabi Street",
  "meaning": {
    "en": "An Emirati figure of the احبابي family",
    "ar": "شخصية إماراتية من أسرة الاحبابي"
  },
  "story": {
    "en": "The street carries the name of Saad Mohammed Al Ahbabi, an Emirati figure of the احبابي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعد محمد، وهو شخصية إماراتية من أسرة الاحبابي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bilkhalis-al-amri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بالخالص العامري",
  "en": "Saeed Bilkhalis Al Amri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bilkhalis Al Amri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بالخالص، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-abdulrahman-al-nasri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن عبدالرحمن الناصري",
  "en": "Saeed Bin Abdulrahman Al Nasri Street",
  "meaning": {
    "en": "An Emirati figure of the ناصري family",
    "ar": "شخصية إماراتية من أسرة الناصري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Abdulrahman Al Nasri, an Emirati figure of the ناصري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن عبدالرحمن، وهو شخصية إماراتية من أسرة الناصري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-darbash-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن دربش العامري",
  "en": "Saeed Bin Darbash Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Darbash Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن دربش، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-bin-wariqah-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد بن وريقة العامري",
  "en": "Saeed Bin Wariqah Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Saeed Bin Wariqah Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد بن وريقة، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "saeed-mohamed-al-hajeri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سعيد محمد الهاجري",
  "en": "Saeed Mohamed Al Hajeri Street",
  "meaning": {
    "en": "An Emirati figure of the هاجري family",
    "ar": "شخصية إماراتية من أسرة الهاجري"
  },
  "story": {
    "en": "The street carries the name of Saeed Mohamed Al Hajeri, an Emirati figure of the هاجري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سعيد محمد، وهو شخصية إماراتية من أسرة الهاجري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bilmur-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بالمر العامري",
  "en": "Salem Bilmur Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Salem Bilmur Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بالمر، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-ham-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن حم العامري",
  "en": "Salem Bin Ham Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Ham Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن حم، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-rakkad-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن ركاض العامري",
  "en": "Salem Bin Rakkad Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Rakkad Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن ركاض، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "salem-bin-thuaylib-al-amri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سالم بن ثعيلب العامري",
  "en": "Salem Bin Thuaylib Al Amri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Salem Bin Thuaylib Al Amri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سالم بن ثعيلب، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-bilaswad-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل بالاسود العامري",
  "en": "Suhail Bilaswad Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Suhail Bilaswad Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل بالاسود، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "suhail-biloutaih-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سهيل باللوتية العامري",
  "en": "Suhail Biloutaih Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Suhail Biloutaih Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سهيل باللوتية، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "sulaiman-abdullah-al-ebri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع سليمان عبدالله العبري",
  "en": "Sulaiman Abdullah Al Ebri Street",
  "meaning": {
    "en": "An Emirati figure of the عبري family",
    "ar": "شخصية إماراتية من أسرة العبري"
  },
  "story": {
    "en": "The street carries the name of Sulaiman Abdullah Al Ebri, an Emirati figure of the عبري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم سليمان عبدالله، وهو شخصية إماراتية من أسرة العبري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "yousif-mohamed-al-wheibi",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع يوسف محمد الوهيبي",
  "en": "Yousif Mohamed Al Wheibi Street",
  "meaning": {
    "en": "An Emirati figure of the وهيبي family",
    "ar": "شخصية إماراتية من أسرة الوهيبي"
  },
  "story": {
    "en": "The street carries the name of Yousif Mohamed Al Wheibi, an Emirati figure of the وهيبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم يوسف محمد، وهو شخصية إماراتية من أسرة الوهيبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zayd-bin-khalid-al-jahni",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زيد بن خالد الجهني",
  "en": "Zayd Bin Khalid Al Jahni Street",
  "meaning": {
    "en": "An Emirati figure of the جهني family",
    "ar": "شخصية إماراتية من أسرة الجهني"
  },
  "story": {
    "en": "The street carries the name of Zayd Bin Khalid Al Jahni, an Emirati figure of the جهني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زيد بن خالد، وهو شخصية إماراتية من أسرة الجهني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "zayed-musallam-al-ameri",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع زايد مسلم العامري",
  "en": "Zayed Musallam Al Ameri Street",
  "meaning": {
    "en": "An Emirati figure of the عامري family",
    "ar": "شخصية إماراتية من أسرة العامري"
  },
  "story": {
    "en": "The street carries the name of Zayed Musallam Al Ameri, an Emirati figure of the عامري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم زايد مسلم، وهو شخصية إماراتية من أسرة العامري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abdullrahmman-al-fihri",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عبد الرحمن الفهري",
  "en": "Abdullrahmman Al Fihri Street",
  "meaning": {
    "en": "An Emirati figure of the فهري family",
    "ar": "شخصية إماراتية من أسرة الفهري"
  },
  "story": {
    "en": "The street carries the name of Abdullrahmman Al Fihri, an Emirati figure of the فهري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عبد الرحمن، وهو شخصية إماراتية من أسرة الفهري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-ahmed-ali-jaramani",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شرارع أبي أحمد الجرماني",
  "en": "Abi Ahmed Ali Jaramani Street",
  "meaning": {
    "en": "An Emirati figure of the جرماني family",
    "ar": "شخصية إماراتية من أسرة الجرماني"
  },
  "story": {
    "en": "The street carries the name of Abi Ahmed Ali Jaramani, an Emirati figure of the جرماني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم شرارع أبي أحمد، وهو شخصية إماراتية من أسرة الجرماني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-al-adarhim-al-zamani",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي الأدارهم الزماني",
  "en": "Abi Al Adarhim Al Zamani Street",
  "meaning": {
    "en": "An Emirati figure of the زماني family",
    "ar": "شخصية إماراتية من أسرة الزماني"
  },
  "story": {
    "en": "The street carries the name of Abi Al Adarhim Al Zamani, an Emirati figure of the زماني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي الأدارهم، وهو شخصية إماراتية من أسرة الزماني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-al-arja-a-al-atki",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي العرجاء العتكي",
  "en": "Abi Al Arja'a Al Atki Street",
  "meaning": {
    "en": "An Emirati figure of the عتكي family",
    "ar": "شخصية إماراتية من أسرة العتكي"
  },
  "story": {
    "en": "The street carries the name of Abi Al Arja'a Al Atki, an Emirati figure of the عتكي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي العرجاء، وهو شخصية إماراتية من أسرة العتكي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-al-fadhel-al-tamimi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي الفضل التميمي",
  "en": "Abi Al Fadhel Al Tamimi Street",
  "meaning": {
    "en": "An Emirati figure of the تميمي family",
    "ar": "شخصية إماراتية من أسرة التميمي"
  },
  "story": {
    "en": "The street carries the name of Abi Al Fadhel Al Tamimi, an Emirati figure of the تميمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي الفضل، وهو شخصية إماراتية من أسرة التميمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-al-hassan-al-shadhli",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي الحسن الشاذلي",
  "en": "Abi Al Hassan Al Shadhli Street",
  "meaning": {
    "en": "An Emirati figure of the شاذلي family",
    "ar": "شخصية إماراتية من أسرة الشاذلي"
  },
  "story": {
    "en": "The street carries the name of Abi Al Hassan Al Shadhli, an Emirati figure of the شاذلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي الحسن، وهو شخصية إماراتية من أسرة الشاذلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-al-sedeeq-al-naji",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي الصديق النجي",
  "en": "Abi Al Sedeeq Al Naji Street",
  "meaning": {
    "en": "An Emirati figure of the نجي family",
    "ar": "شخصية إماراتية من أسرة النجي"
  },
  "story": {
    "en": "The street carries the name of Abi Al Sedeeq Al Naji, an Emirati figure of the نجي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي الصديق، وهو شخصية إماراتية من أسرة النجي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-ayoub-al-ansari",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي أيوب الأنصاري",
  "en": "Abi Ayoub Al Ansari Street",
  "meaning": {
    "en": "An Emirati figure of the انصاري family",
    "ar": "شخصية إماراتية من أسرة الانصاري"
  },
  "story": {
    "en": "The street carries the name of Abi Ayoub Al Ansari, an Emirati figure of the انصاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي أيوب، وهو شخصية إماراتية من أسرة الانصاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-dhar-al-ghifari",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي ذر الغفاري",
  "en": "Abi Dhar Al Ghifari Street",
  "meaning": {
    "en": "An Emirati figure of the غفاري family",
    "ar": "شخصية إماراتية من أسرة الغفاري"
  },
  "story": {
    "en": "The street carries the name of Abi Dhar Al Ghifari, an Emirati figure of the غفاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي ذر، وهو شخصية إماراتية من أسرة الغفاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-dhu-ayb-al-hadhli",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي ذؤيب الهذلي",
  "en": "Abi Dhu'ayb Al Hadhli Street",
  "meaning": {
    "en": "An Emirati figure of the هذلي family",
    "ar": "شخصية إماراتية من أسرة الهذلي"
  },
  "story": {
    "en": "The street carries the name of Abi Dhu'ayb Al Hadhli, an Emirati figure of the هذلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي ذؤيب، وهو شخصية إماراتية من أسرة الهذلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-hamid-al-sharqy",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي حامد الشرقي",
  "en": "Abi Hamid Al Sharqy Street",
  "meaning": {
    "en": "An Emirati figure of the شرقي family",
    "ar": "شخصية إماراتية من أسرة الشرقي"
  },
  "story": {
    "en": "The street carries the name of Abi Hamid Al Sharqy, an Emirati figure of the شرقي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي حامد، وهو شخصية إماراتية من أسرة الشرقي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-murthed-al-ganwi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي مرثد الغنوي",
  "en": "Abi Murthed Al Ganwi Street",
  "meaning": {
    "en": "An Emirati figure of the غنوي family",
    "ar": "شخصية إماراتية من أسرة الغنوي"
  },
  "story": {
    "en": "The street carries the name of Abi Murthed Al Ganwi, an Emirati figure of the غنوي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي مرثد، وهو شخصية إماراتية من أسرة الغنوي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-mussa-al-ashari",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي موسى الأشعري",
  "en": "Abi Mussa Al Ashari Street",
  "meaning": {
    "en": "An Emirati figure of the اشعري family",
    "ar": "شخصية إماراتية من أسرة الاشعري"
  },
  "story": {
    "en": "The street carries the name of Abi Mussa Al Ashari, an Emirati figure of the اشعري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي موسى، وهو شخصية إماراتية من أسرة الاشعري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-omaia-al-ghuzary",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي أمية الغزاري",
  "en": "Abi Omaia Al Ghuzary Street",
  "meaning": {
    "en": "An Emirati figure of the غزاري family",
    "ar": "شخصية إماراتية من أسرة الغزاري"
  },
  "story": {
    "en": "The street carries the name of Abi Omaia Al Ghuzary, an Emirati figure of the غزاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي أمية، وهو شخصية إماراتية من أسرة الغزاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-omar-al-eshbeli",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي عمر الإشبيلي",
  "en": "Abi Omar Al Eshbeli Street",
  "meaning": {
    "en": "An Emirati figure of the اشبيلي family",
    "ar": "شخصية إماراتية من أسرة الاشبيلي"
  },
  "story": {
    "en": "The street carries the name of Abi Omar Al Eshbeli, an Emirati figure of the اشبيلي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي عمر، وهو شخصية إماراتية من أسرة الاشبيلي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-omayah-al-fazary",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي أمية الفزاري",
  "en": "Abi Omayah Al Fazary Street",
  "meaning": {
    "en": "An Emirati figure of the فزاري family",
    "ar": "شخصية إماراتية من أسرة الفزاري"
  },
  "story": {
    "en": "The street carries the name of Abi Omayah Al Fazary, an Emirati figure of the فزاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي أمية، وهو شخصية إماراتية من أسرة الفزاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-oqali-al-balwi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي عقالي البلوي",
  "en": "Abi Oqali Al Balwi Street",
  "meaning": {
    "en": "An Emirati figure of the بلوي family",
    "ar": "شخصية إماراتية من أسرة البلوي"
  },
  "story": {
    "en": "The street carries the name of Abi Oqali Al Balwi, an Emirati figure of the بلوي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي عقالي، وهو شخصية إماراتية من أسرة البلوي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-othman-al-nahdi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي عثمان النهدي",
  "en": "Abi Othman Al Nahdi Street",
  "meaning": {
    "en": "An Emirati figure of the نهدي family",
    "ar": "شخصية إماراتية من أسرة النهدي"
  },
  "story": {
    "en": "The street carries the name of Abi Othman Al Nahdi, an Emirati figure of the نهدي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي عثمان، وهو شخصية إماراتية من أسرة النهدي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-sa-eed-al-khudari",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي سعيد الخضري",
  "en": "Abi Sa'eed Al Khudari Street",
  "meaning": {
    "en": "An Emirati figure of the خضري family",
    "ar": "شخصية إماراتية من أسرة الخضري"
  },
  "story": {
    "en": "The street carries the name of Abi Sa'eed Al Khudari, an Emirati figure of the خضري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي سعيد، وهو شخصية إماراتية من أسرة الخضري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-yousef-al-kofi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي يوسف الكوفي",
  "en": "Abi Yousef Al Kofi Street",
  "meaning": {
    "en": "An Emirati figure of the كوفي family",
    "ar": "شخصية إماراتية من أسرة الكوفي"
  },
  "story": {
    "en": "The street carries the name of Abi Yousef Al Kofi, an Emirati figure of the كوفي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي يوسف، وهو شخصية إماراتية من أسرة الكوفي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "abi-yousef-al-qadhi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أبي يوسف القاضي",
  "en": "Abi Yousef Al Qadhi Street",
  "meaning": {
    "en": "An Emirati figure of the قاضي family",
    "ar": "شخصية إماراتية من أسرة القاضي"
  },
  "story": {
    "en": "The street carries the name of Abi Yousef Al Qadhi, an Emirati figure of the قاضي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم أبي يوسف، وهو شخصية إماراتية من أسرة القاضي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-harth-bin-al-ta-i",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الحارث بن الطائي",
  "en": "Al Harth Bin Al Ta'i Street",
  "meaning": {
    "en": "An Emirati figure of the طائي family",
    "ar": "شخصية إماراتية من أسرة الطائي"
  },
  "story": {
    "en": "The street carries the name of Al Harth Bin Al Ta'i, an Emirati figure of the طائي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الحارث بن، وهو شخصية إماراتية من أسرة الطائي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-shaheed-saif-esa-al-naqbi",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد سيف عيسى النقبي",
  "en": "Al Shaheed Saif Esa Al Naqbi Street",
  "meaning": {
    "en": "An Emirati figure of the نقبي family",
    "ar": "شخصية إماراتية من أسرة النقبي"
  },
  "story": {
    "en": "The street carries the name of Al Shaheed Saif Esa Al Naqbi, an Emirati figure of the نقبي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد سيف عيسى، وهو شخصية إماراتية من أسرة النقبي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bin-saif-al-khatery",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بن سيف الخاطري",
  "en": "Ali bin Saif Al Khatery Street",
  "meaning": {
    "en": "An Emirati figure of the خاطري family",
    "ar": "شخصية إماراتية من أسرة الخاطري"
  },
  "story": {
    "en": "The street carries the name of Ali bin Saif Al Khatery, an Emirati figure of the خاطري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بن سيف، وهو شخصية إماراتية من أسرة الخاطري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hane-bin-al-hani",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع هاني بن الهاني",
  "en": "Hane Bin Al Hani Street",
  "meaning": {
    "en": "An Emirati figure of the هاني family",
    "ar": "شخصية إماراتية من أسرة الهاني"
  },
  "story": {
    "en": "The street carries the name of Hane Bin Al Hani, an Emirati figure of the هاني family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم هاني بن، وهو شخصية إماراتية من أسرة الهاني، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "hasan-mohammad-al-tunaiji",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد حسن محمد الطنيجي",
  "en": "Hasan Mohammad Al Tunaiji Street",
  "meaning": {
    "en": "An Emirati figure of the طنيجي family",
    "ar": "شخصية إماراتية من أسرة الطنيجي"
  },
  "story": {
    "en": "The street carries the name of Hasan Mohammad Al Tunaiji, an Emirati figure of the طنيجي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد حسن محمد، وهو شخصية إماراتية من أسرة الطنيجي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-salamah-al-ansari",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن سلامة الأنصاري",
  "en": "Mohammed Bin Salamah Al Ansari Street",
  "meaning": {
    "en": "An Emirati figure of the انصاري family",
    "ar": "شخصية إماراتية من أسرة الانصاري"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Salamah Al Ansari, an Emirati figure of the انصاري family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن سلامة، وهو شخصية إماراتية من أسرة الانصاري، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "mohammed-bin-tariq-al-maki",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع محمد بن طارق المكي",
  "en": "Mohammed Bin Tariq Al Maki Street",
  "meaning": {
    "en": "An Emirati figure of the مكي family",
    "ar": "شخصية إماراتية من أسرة المكي"
  },
  "story": {
    "en": "The street carries the name of Mohammed Bin Tariq Al Maki, an Emirati figure of the مكي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم محمد بن طارق، وهو شخصية إماراتية من أسرة المكي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "nadlah-bin-obied-al-aslami",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع نضلة بن عبيد الأسلمي",
  "en": "Nadlah Bin Obied Al Aslami Street",
  "meaning": {
    "en": "An Emirati figure of the اسلمي family",
    "ar": "شخصية إماراتية من أسرة الاسلمي"
  },
  "story": {
    "en": "The street carries the name of Nadlah Bin Obied Al Aslami, an Emirati figure of the اسلمي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم نضلة بن عبيد، وهو شخصية إماراتية من أسرة الاسلمي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "rashid-mohammad-al-bloush",
  "emirate": "sharjah",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الشهيد راشد محمد البلوشي",
  "en": "Rashid Mohammad Al Bloush Street",
  "meaning": {
    "en": "An Emirati figure of the بلوشي family",
    "ar": "شخصية إماراتية من أسرة البلوشي"
  },
  "story": {
    "en": "The street carries the name of Rashid Mohammad Al Bloush, an Emirati figure of the بلوشي family. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم الشهيد راشد محمد، وهو شخصية إماراتية من أسرة البلوشي، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "akroum-al-birayda-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "account",
  "ar": "شارع عَكرُوم البرَيدا",
  "en": "'Akroum Al Birayda Street",
  "translit": "Shāriʿ ʿAkrūm al-Buraydā",
  "meaning": {
    "en": "A rugged rise at a small shaded patch",
    "ar": "مرتفع صلب عند موضع ظليل صغير"
  },
  "story": {
    "en": "Two elements: ʿakrūm, a hard knot of rock or a compact, rugged rise in the desert, and al-buraydā, a diminutive of burda — a small cloak, and by extension a shaded, comfortable patch of ground.",
    "ar": "اسم من عنصرين: «عكروم» أي العقدة المحكمة أو المرتفع الصلب الخشن في الصحراء، و«البريدا» تصغير «بردة» — الثوب الصغير، ويُراد به الموضع الظليل المريح من الأرض."
  },
  "refs": []
},
{
  "id": "nahyan-the-first-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع نهيان الأول",
  "en": "Nahyan The First Street",
  "translit": "Shāriʿ Nahyān al-Awwal",
  "meaning": {
    "en": "The ancestor of the Al Nahyan family",
    "ar": "الجد الأعلى لأسرة آل نهيان"
  },
  "story": {
    "en": "Nahyan the First is the ancestor from whom the Al Nahyan family takes its name. The family is a branch of Al Bu Falah of the Bani Yas, and rules Abu Dhabi.",
    "ar": "نهيان الأول هو الجد الذي تحمل اسمه أسرة آل نهيان، وهي فرع من آل بو فلاح من بني ياس، وتحكم أبوظبي."
  },
  "refs": [
    {
      "label": "Wikipedia — آل نهيان",
      "url": "https://ar.wikipedia.org/wiki/آل_نهيان"
    }
  ]
},
{
  "id": "akrash-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "documented",
  "ar": "شارع عكرش",
  "en": "'Akrash Street",
  "translit": "Shāriʿ ʿIkrish",
  "meaning": {
    "en": "A coarse wild grass of damp, saline ground",
    "ar": "نبات عشبي بري خشن في الأرض النَزّ"
  },
  "story": {
    "en": "Al Akrash (Aeluropus) is a genus of coarse wild grasses of the Poaceae family, growing in damp or saline ground and noted for its interlocking, twisted leaves and sharp, thorn-like tips.",
    "ar": "العِكرِش جنس نباتي من الفصيلة النجيلية، ينمو عشبه الخشن في الأرض النَزّ ذات الرطوبة أو الملوحة، ويتميز بأوراقه المتداخلة الملتفة وأطرافه المدببة كالشوك."
  },
  "refs": [
    {
      "label": "Wikipedia — عكرش",
      "url": "https://ar.wikipedia.org/wiki/عكرش"
    }
  ]
},
{
  "id": "al-ashkhar-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "documented",
  "ar": "شارع الأشخر",
  "en": "Al Ashkhar Street",
  "translit": "Shāriʿ al-Ashkhar",
  "meaning": {
    "en": "The ashkhar shrub (Calotropis)",
    "ar": "شجيرة الأشخر (العُشار)"
  },
  "story": {
    "en": "Al Ashkhar — also called al-oshar — is Calotropis, a genus of the dogbane family: an evergreen desert shrub that grows on sandy plains and in wadi beds.",
    "ar": "الأشخر — ويُسمّى أيضاً العُشار — جنس نباتي من الفصيلة الدفلية، شجيرة صحراوية دائمة الخضرة تنمو في السهول الرملية ومجاري الأودية."
  },
  "refs": [
    {
      "label": "Wikipedia — عشار",
      "url": "https://ar.wikipedia.org/wiki/عشار"
    }
  ]
},
{
  "id": "al-faqa-road",
  "emirate": "abu-dhabi",
  "category": "place",
  "origin": "documented",
  "ar": "طريق الفَقع",
  "en": "Al Faqa' Road",
  "translit": "Ṭarīq al-Faqaʿ",
  "meaning": {
    "en": "Al Faqa', a village between Al Ain and Dubai",
    "ar": "الفقع، قرية بين العين ودبي"
  },
  "story": {
    "en": "Al Faqa' is a village on the road between Al Ain and Dubai, on the border of the two emirates, on the E66. The same word is the Gulf name for the desert truffle, which grows underground after rain.",
    "ar": "الفقع قرية على الطريق بين العين ودبي، على حدود الإمارتين، على شارع طحنون بن محمد آل نهيان (إ66). والكلمة نفسها اسم الفُقع، الكمأة الصحراوية التي تنمو تحت الأرض بعد سقوط الأمطار."
  },
  "refs": [
    {
      "label": "Wikipedia — الفقع",
      "url": "https://ar.wikipedia.org/wiki/الفقع"
    }
  ]
},
{
  "id": "eedan-al-ikhaydir-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "account",
  "ar": "شارع عِيدان الإخَيضِر",
  "en": "'Eedan Al Ikhaydir Street",
  "translit": "Shāriʿ ʿĪdān al-Ikhayḍir",
  "meaning": {
    "en": "Branches of the fresh green growth",
    "ar": "أغصان النبت الأخضر الطري"
  },
  "story": {
    "en": "Two words: ʿīdān, branches or twigs, and al-ikhayḍir, the diminutive of al-akhḍar, “the green”. Together they name the fresh branches and twigs of wild shrubs after rain.",
    "ar": "لفظ من كلمتين: «عيدان» أي الأغصان والأعواد، و«الإخيضر» تصغير «الأخضر». ويُراد به أغصان النباتات البرية والشجيرات الخضراء الطرية حديثة النمو."
  },
  "refs": []
},
{
  "id": "al-usus-street",
  "emirate": "abu-dhabi",
  "category": "word",
  "origin": "documented",
  "ar": "شارع الأُسُس",
  "en": "Al Usus Street",
  "translit": "Shāriʿ al-Usus",
  "meaning": {
    "en": "Foundations — the base something is built on",
    "ar": "الأُسُس: القواعد التي يُبنى عليها"
  },
  "story": {
    "en": "Al Usus is the plural of asas: a foundation, a base, the root on which something else is built.",
    "ar": "الأُسُس جمع «أساس»، وهو القاعدة أو الأصل أو الجِذر الذي يُبنى عليه غيره."
  },
  "refs": [
    {
      "label": "Wiktionary — أساس",
      "url": "https://ar.wiktionary.org/wiki/أساس"
    }
  ]
},
{
  "id": "al-abbas-bin-ubadah-bin-nadlah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع العباس بن عبادة بن نضلة",
  "en": "Al Abbas Bin 'Ubadah Bin Nadlah Street",
  "meaning": {
    "en": "A Companion of the Ansar",
    "ar": "صحابي من الأنصار"
  },
  "story": {
    "en": "Al-Abbas ibn Ubada was an Ansari Companion among the first six of the Ansar to accept Islam; he took both pledges of Aqaba, fought at Uhud, and died of his wounds in 3 AH.",
    "ar": "العباس بن عبادة صحابي من الأنصار، أسلم قبل سائر الأنصار، وشهد بيعتي العقبة وأُحداً، ومات من جراحه سنة ٣هـ."
  },
  "refs": [
    {
      "label": "Wikipedia — العباس بن عبادة",
      "url": "https://ar.wikipedia.org/wiki/العباس_بن_عبادة"
    }
  ]
},
{
  "id": "hazza-bin-sultan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع هزاع بن سلطان",
  "en": "Hazza Bin Sultan Street",
  "meaning": {
    "en": "A sheikh of the Al Nahyan family",
    "ar": "أحد شيوخ آل نهيان"
  },
  "story": {
    "en": "Hazza bin Sultan Al Nahyan (1905–1958) was a brother of Sheikh Shakhbout and Sheikh Zayed, and served as the Ruler's Representative in the Eastern Region.",
    "ar": "هزاع بن سلطان آل نهيان (١٩٠٥–١٩٥٨م) شقيق الشيخ شخبوط والشيخ زايد، وكان ممثل الحاكم في المنطقة الشرقية."
  },
  "refs": [
    {
      "label": "Wikipedia — هزاع بن سلطان آل نهيان",
      "url": "https://ar.wikipedia.org/wiki/هزاع_بن_سلطان_آل_نهيان"
    }
  ]
},
{
  "id": "oud-bin-hasoum-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عُود بن حاسُوم",
  "en": "'Oud Bin Hasoum Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of عود بن حاسوم, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عود بن حاسوم، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "oud-bin-khanfour-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عود بن خنفور",
  "en": "'Oud Bin Khanfour Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of عود بن خنفور, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عود بن خنفور، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "oud-bin-saqhan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع عُود بن صَقحان",
  "en": "'Oud Bin Saqhan Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of عود بن صقحان, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم عود بن صقحان، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-abdulla-ahmed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد عبدالله أحمد",
  "en": "Ahmed Abdulla Ahmed Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of احمد عبدالله احمد, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم احمد عبدالله احمد، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bilkindi-al-marar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بالكندي المرر",
  "en": "Ahmed Bilkindi Al Marar Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of احمد بالكندي المرر, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم احمد بالكندي المرر، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ahmed-bin-hamed-al-hamed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع أحمد بن حامد آل حامد",
  "en": "Ahmed Bin Hamed Al Hamed Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of احمد بن حامد ال حامد, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم احمد بن حامد ال حامد، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "ali-bu-melha-al-marar-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع علي بو ملحا المرر",
  "en": "Ali Bu Melha Al Marar Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of علي بو ملحا المرر, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم علي بو ملحا المرر، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "butti-bin-hamed-al-hamed-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع بطي بن حامد آل حامد",
  "en": "Butti Bin Hamed Al Hamed Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of بطي بن حامد ال حامد, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم بطي بن حامد ال حامد، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "khalifa-al-mubarak-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع خليفة المبارك",
  "en": "Khalifa Al Mubarak Street",
  "meaning": {
    "en": "An Emirati figure",
    "ar": "شخصية إماراتية"
  },
  "story": {
    "en": "The street carries the name of خليفه المبارك, an Emirati figure. No published biography of him was found.",
    "ar": "سُمّي الشارع باسم خليفه المبارك، وهو شخصية إماراتية، ولم يُعثر على ترجمة منشورة له."
  },
  "refs": []
},
{
  "id": "al-uola-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع العلى",
  "en": "Al 'Uola Street",
  "meaning": {
    "en": "A name or title carried by the street",
    "ar": "لقب أو اسم يُسمّى به الشارع"
  },
  "story": {
    "en": "The street carries the name “العلى” rather than a documented biography; no published account of it was found.",
    "ar": "يحمل الشارع اسم «العلى» لا ترجمة شخص موثّق، ولم يُعثر على بيان منشور له."
  },
  "refs": []
},
{
  "id": "al-faysal-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "unsourced",
  "ar": "شارع الفَيصَل",
  "en": "Al Faysal Street",
  "meaning": {
    "en": "A name or title carried by the street",
    "ar": "لقب أو اسم يُسمّى به الشارع"
  },
  "story": {
    "en": "The street carries the name “الفيصل” rather than a documented biography; no published account of it was found.",
    "ar": "يحمل الشارع اسم «الفيصل» لا ترجمة شخص موثّق، ولم يُعثر على بيان منشور له."
  },
  "refs": []
},
{
  "id": "abu-hurayrah-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبو هُرَيرة",
  "en": "Abu Hurayrah Street",
  "meaning": {
    "en": "A Companion and the most prolific narrator of hadith",
    "ar": "صحابي وأكثر رواة الحديث"
  },
  "story": {
    "en": "Abu Hurayrah (602–679) was a companion of the Prophet Muhammad and the most prolific narrator of hadith.",
    "ar": "أبو هريرة (٢١ ق.هـ–٥٩هـ / ٦٠٢–٦٧٩م) صحابي، وأكثر رواة الحديث النبوي."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو هريرة",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D9%87%D8%B1%D9%8A%D8%B1%D8%A9"
    }
  ]
},
{
  "id": "abu-ad-darda-a-al-ansari-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبو الدَّرداء الأنصارِي",
  "en": "Abu Ad Darda-a Al Ansari Street",
  "meaning": {
    "en": "A Companion, judge of Damascus",
    "ar": "صحابي وقاضٍ دمشق"
  },
  "story": {
    "en": "Abu al-Darda (d. 32 AH / 652 CE) was an Ansari companion, a Quran reciter and the judge of Damascus.",
    "ar": "أبو الدرداء الأنصاري (ت ٣٢هـ/٦٥٢م) صحابي وفقيه وقاضٍ دمشق."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو الدرداء الأنصاري",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%A7%D9%84%D8%AF%D8%B1%D8%AF%D8%A7%D8%A1_%D8%A7%D9%84%D8%A3%D9%86%D8%B5%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "abu-dhar-al-ghifari-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبو ذَر الغِفارِي",
  "en": "Abu Dhar Al Ghifari Street",
  "meaning": {
    "en": "One of the earliest Companions",
    "ar": "من السابقين إلى الإسلام"
  },
  "story": {
    "en": "Abu Dharr al-Ghifari (d. 31 AH / 652 CE) was among the earliest to accept Islam, known for his asceticism.",
    "ar": "أبو ذر الغفاري (ت ٣١هـ/٦٥٢م) من السابقين إلى الإسلام، عُرف بزهده."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو ذر الغفاري",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%B0%D8%B1_%D8%A7%D9%84%D8%BA%D9%81%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "abu-haneefah-an-nu-man-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع أبو حَنِيفة النُّعمان",
  "en": "Abu Haneefah An Nu'man Street",
  "meaning": {
    "en": "Founder of the Hanafi school",
    "ar": "صاحب المذهب الحنفي"
  },
  "story": {
    "en": "Abu Hanifa al-Nu'man (699–767) was a jurist of Kufa and the founder of the Hanafi school of law.",
    "ar": "أبو حنيفة النعمان (٨٠–١٥٠هـ/٦٩٩–٧٦٧م) فقيه الكوفة وصاحب المذهب الحنفي."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو حنيفة النعمان",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%AD%D9%86%D9%8A%D9%81%D8%A9_%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86"
    }
  ]
},
{
  "id": "al-mutanabbi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع المُتَنَبِّي",
  "en": "Al Mutanabbi Street",
  "meaning": {
    "en": "A poet of the Abbasid era",
    "ar": "شاعر من العصر العباسي"
  },
  "story": {
    "en": "Al-Mutanabbi (915–965) was one of the most celebrated poets of the Arabic language.",
    "ar": "المتنبي (٣٠٣–٣٥٤هـ/٩١٥–٩٦٥م) من أشهر شعراء العربية."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو الطيب المتنبي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%A7%D9%84%D8%B7%D9%8A%D8%A8_%D8%A7%D9%84%D9%85%D8%AA%D9%86%D8%A8%D9%8A"
    }
  ]
},
{
  "id": "al-jahidh-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الجَاحِظ",
  "en": "Al Jahidh Street",
  "meaning": {
    "en": "A prose writer of Basra",
    "ar": "أديب من البصرة"
  },
  "story": {
    "en": "Al-Jahiz (776–868) was a writer of Basra, author of the Book of Animals.",
    "ar": "الجاحظ (ت ٢٥٥هـ/٨٦٨م) أديب البصرة، صاحب كتاب الحيوان."
  },
  "refs": [
    {
      "label": "Wikipedia — الجاحظ",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AC%D8%A7%D8%AD%D8%B8"
    }
  ]
},
{
  "id": "al-farazdaq-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الفَرَزدَق",
  "en": "Al Farazdaq Street",
  "meaning": {
    "en": "An Umayyad poet",
    "ar": "شاعر أموي"
  },
  "story": {
    "en": "Al-Farazdaq (c. 641–728) was a poet of the Umayyad era, of the Banu Tamim.",
    "ar": "الفرزدق (ت نحو ١١٠هـ/٧٢٨م) شاعر أموي من بني تميم."
  },
  "refs": [
    {
      "label": "Wikipedia — الفرزدق",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%81%D8%B1%D8%B2%D8%AF%D9%82"
    }
  ]
},
{
  "id": "jareer-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع جَرير",
  "en": "Jareer Street",
  "meaning": {
    "en": "An Umayyad poet",
    "ar": "شاعر أموي"
  },
  "story": {
    "en": "Jarir (c. 650–728) was an Umayyad-era poet, famous for his exchanges with al-Farazdaq.",
    "ar": "جرير (ت نحو ١١٠هـ/٧٢٨م) شاعر أموي، عُرف بنقائضه مع الفرزدق."
  },
  "refs": [
    {
      "label": "Wikipedia — جرير",
      "url": "https://ar.wikipedia.org/wiki/%D8%AC%D8%B1%D9%8A%D8%B1"
    }
  ]
},
{
  "id": "sibawayh-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع سِيبَوَيه",
  "en": "Sibawayh Street",
  "meaning": {
    "en": "The grammarian of Arabic",
    "ar": "إمام النحاة"
  },
  "story": {
    "en": "Sibawayh (c. 760–796) was a grammarian whose Book is the foundation of Arabic syntax.",
    "ar": "سيبويه (ت نحو ١٨٠هـ/٧٩٦م) إمام النحاة، وكتابه أصل النحو العربي."
  },
  "refs": [
    {
      "label": "Wikipedia — سيبويه",
      "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%D8%A8%D9%88%D9%8A%D9%87"
    }
  ]
},
{
  "id": "mu-ath-bin-jabal-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع معاد بن جبل",
  "en": "Mu'ath Bin Jabal Street",
  "meaning": {
    "en": "A Companion sent to teach in Yemen",
    "ar": "صحابي بعثه النبي إلى اليمن"
  },
  "story": {
    "en": "Mu'adh ibn Jabal (d. 18 AH / 639 CE) was a companion sent by the Prophet to teach the people of Yemen.",
    "ar": "معاذ بن جبل (ت ١٨هـ/٦٣٩م) صحابي، بعثه النبي إلى اليمن معلّماً."
  },
  "refs": [
    {
      "label": "Wikipedia — معاذ بن جبل",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B9%D8%A7%D8%B0_%D8%A8%D9%86_%D8%AC%D8%A8%D9%84"
    }
  ]
},
{
  "id": "moawiah-bin-abi-sofian-street",
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع معاوية بن أبي سفيان",
  "en": "Moawiah Bin Abi Sofian Street",
  "meaning": {
    "en": "The first Umayyad caliph",
    "ar": "أول خلفاء بني أمية"
  },
  "story": {
    "en": "Mu'awiya ibn Abi Sufyan (602–680) was the first caliph of the Umayyad dynasty, ruling from Damascus.",
    "ar": "معاوية بن أبي سفيان (ت ٦٠هـ/٦٨٠م) أول خلفاء بني أمية، وحكم من دمشق."
  },
  "refs": [
    {
      "label": "Wikipedia — معاوية بن أبي سفيان",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B9%D8%A7%D9%88%D9%8A%D8%A9_%D8%A8%D9%86_%D8%A3%D8%A8%D9%8A_%D8%B3%D9%81%D9%8A%D8%A7%D9%86"
    }
  ]
},
{
  "id": "abdulmalik-bin-marwan-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع عبدالمَلك بن مَروان",
  "en": "Abdulmalik Bin Marwan Street",
  "meaning": {
    "en": "Fifth Umayyad caliph",
    "ar": "الخليفة الأموي الخامس"
  },
  "story": {
    "en": "Abd al-Malik ibn Marwan (646–705) was the fifth Umayyad caliph, who ordered the Arabisation of the coinage and administration.",
    "ar": "عبد الملك بن مروان (٢٦–٨٦هـ/٦٤٦–٧٠٥م) الخليفة الأموي الخامس، وفي عهده عُرِّبت الدواوين والنقود."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الملك بن مروان",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%A8%D9%86_%D9%85%D8%B1%D9%88%D8%A7%D9%86"
    }
  ]
},
{
  "id": "al-imam-ash-shafi-i-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الإمام الشافعي",
  "en": "Al Imam Ash Shafi'i Street",
  "meaning": {
    "en": "Founder of the Shafi'i school",
    "ar": "صاحب المذهب الشافعي"
  },
  "story": {
    "en": "Al-Shafi'i (767–820) was a jurist and the founder of the Shafi'i school of law.",
    "ar": "الشافعي (١٥٠–٢٠٤هـ/٧٦٧–٨٢٠م) فقيه وصاحب المذهب الشافعي."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن إدريس الشافعي",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%A5%D8%AF%D8%B1%D9%8A%D8%B3_%D8%A7%D9%84%D8%B4%D8%A7%D9%81%D8%B9%D9%8A"
    }
  ]
},
{
  "id": "al-imam-muslim-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الإمام مسلم",
  "en": "Al Imam Muslim Street",
  "meaning": {
    "en": "Compiler of Sahih Muslim",
    "ar": "صاحب صحيح مسلم"
  },
  "story": {
    "en": "Muslim ibn al-Hajjaj (821–875) compiled Sahih Muslim, one of the two most authoritative collections of hadith.",
    "ar": "مسلم بن الحجاج (٢٠٦–٢٦١هـ/٨٢١–٨٧٥م) صاحب صحيح مسلم، أحد أصح كتابين بعد القرآن."
  },
  "refs": [
    {
      "label": "Wikipedia — مسلم بن الحجاج",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B3%D9%84%D9%85_%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D8%AC%D8%A7%D8%AC"
    }
  ]
},
{
  "id": "al-imam-ahmed-bin-hanbel-street",
  "emirate": "ajman",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الإمام احمد بن حنبل",
  "en": "Al Imam Ahmed Bin Hanbel Street",
  "meaning": {
    "en": "Founder of the Hanbali school",
    "ar": "صاحب المذهب الحنبلي"
  },
  "story": {
    "en": "Ahmad ibn Hanbal (780–855) was a jurist and the founder of the Hanbali school of law.",
    "ar": "أحمد بن حنبل (١٦٤–٢٤١هـ/٧٨٠–٨٥٥م) فقيه وصاحب المذهب الحنبلي."
  },
  "refs": [
    {
      "label": "Wikipedia — أحمد بن حنبل",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%AD%D9%86%D8%A8%D9%84"
    }
  ]
},
{
  "id": "al-bukhari-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع البُخارِي",
  "en": "Al Bukhari Street",
  "meaning": {
    "en": "Compiler of Sahih al-Bukhari",
    "ar": "صاحب صحيح البخاري"
  },
  "story": {
    "en": "Al-Bukhari (810–870) compiled Sahih al-Bukhari, the most authoritative collection of hadith.",
    "ar": "البخاري (١٩٤–٢٥٦هـ/٨١٠–٨٧٠م) صاحب صحيح البخاري."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن إسماعيل البخاري",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84_%D8%A7%D9%84%D8%A8%D8%AE%D8%A7%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "adh-dhahabi-street",
  "emirate": "abu-dhabi",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الذَّهَبِي",
  "en": "Adh Dhahabi Street",
  "meaning": {
    "en": "A historian and hadith scholar",
    "ar": "مؤرخ ومحدث"
  },
  "story": {
    "en": "Al-Dhahabi (1274–1348) was a historian and hadith scholar of Damascus.",
    "ar": "الذهبي (٦٧٣–٧٤٨هـ/١٢٧٤–١٣٤٨م) مؤرخ ومحدث دمشقي."
  },
  "refs": [
    {
      "label": "Wikipedia — شمس الدين الذهبي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B4%D9%85%D8%B3_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A"
    }
  ]
},
{
  "id": "tabari-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الطبري",
  "en": "Tabari Street",
  "meaning": {
    "en": "A historian and Quran commentator",
    "ar": "مؤرخ ومفسر"
  },
  "story": {
    "en": "Al-Tabari (839–923) was a historian and Quran commentator, author of the History of the Prophets and Kings.",
    "ar": "الطبري (٢٢٤–٣١٠هـ/٨٣٩–٩٢٣م) مؤرخ ومفسر، صاحب تاريخ الرسل والملوك."
  },
  "refs": [
    {
      "label": "Wikipedia — محمد بن جرير الطبري",
      "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%AC%D8%B1%D9%8A%D8%B1_%D8%A7%D9%84%D8%B7%D8%A8%D8%B1%D9%8A"
    }
  ]
},
{
  "id": "al-asqalani-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع العسقلاني",
  "en": "Al Asqalani Street",
  "meaning": {
    "en": "The hadith scholar Ibn Hajar",
    "ar": "ابن حجر العسقلاني"
  },
  "story": {
    "en": "Ibn Hajar al-Asqalani (1372–1449) was a hadith scholar, author of Fath al-Bari.",
    "ar": "ابن حجر العسقلاني (٧٧٣–٨٥٢هـ/١٣٧٢–١٤٤٩م) محدّث، صاحب فتح الباري."
  },
  "refs": [
    {
      "label": "Wikipedia — ابن حجر العسقلاني",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D8%A8%D9%86_%D8%AD%D8%AC%D8%B1_%D8%A7%D9%84%D8%B9%D8%B3%D9%82%D9%84%D8%A7%D9%86%D9%8A"
    }
  ]
},
{
  "id": "al-baqlani-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الباقلاني",
  "en": "Al Baqlani Street",
  "meaning": {
    "en": "A theologian of Basra and Baghdad",
    "ar": "متكلم من البصرة وبغداد"
  },
  "story": {
    "en": "Al-Baqillani (950–1013) was a theologian and a leading figure of the Ash'ari school.",
    "ar": "الباقلاني (ت ٤٠٣هـ/١٠١٣م) متكلم، من أعلام الأشعرية."
  },
  "refs": [
    {
      "label": "Wikipedia — أبو بكر الباقلاني",
      "url": "https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D9%88_%D8%A8%D9%83%D8%B1_%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D9%84%D8%A7%D9%86%D9%8A"
    }
  ]
},
{
  "id": "al-dar-qatni-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الدار قطني",
  "en": "Al Dar Qatni Street",
  "meaning": {
    "en": "A hadith critic of Baghdad",
    "ar": "محدّث ناقد بغدادي"
  },
  "story": {
    "en": "Al-Daraqutni (918–995) was a hadith scholar and critic of Baghdad.",
    "ar": "الدارقطني (٣٠٦–٣٨٥هـ/٩١٨–٩٩٥م) محدّث وناقد بغدادي."
  },
  "refs": [
    {
      "label": "Wikipedia — الدارقطني",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%D9%82%D8%B7%D9%86%D9%8A"
    }
  ]
},
{
  "id": "al-edrissi-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الإدرسي",
  "en": "Al Edrissi Street",
  "meaning": {
    "en": "A geographer and mapmaker",
    "ar": "جغرافي ورسّام خرائط"
  },
  "story": {
    "en": "Al-Idrisi (1100–1165) was a geographer at the Norman court in Sicily, author of the Tabula Rogeriana.",
    "ar": "الإدريسي (ت ٥٦٠هـ/١١٦٥م) جغرافي في بلاط صقلية، صاحب نزهة المشتاق."
  },
  "refs": [
    {
      "label": "Wikipedia — الإدريسي",
      "url": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A5%D8%AF%D8%B1%D9%8A%D8%B3%D9%8A"
    }
  ]
},
{
  "id": "al-jabarti-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع الجبرتي",
  "en": "Al Jabarti Street",
  "meaning": {
    "en": "A historian of Egypt",
    "ar": "مؤرخ مصري"
  },
  "story": {
    "en": "Al-Jabarti (1754–1822) was a historian of Egypt who chronicled the French expedition.",
    "ar": "الجبرتي (١١٦٧–١٢٣٧هـ/١٧٥٤–١٨٢٢م) مؤرخ مصري، أرّخ للحملة الفرنسية."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الرحمن الجبرتي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86_%D8%A7%D9%84%D8%AC%D8%A8%D8%B1%D8%AA%D9%8A"
    }
  ]
},
{
  "id": "al-maqdisi-street",
  "emirate": "sharjah",
  "category": "person",
  "origin": "documented",
  "ar": "شارع المقدسي",
  "en": "Al Maqdisi Street",
  "meaning": {
    "en": "A hadith scholar of Jerusalem",
    "ar": "محدّث من بيت المقدس"
  },
  "story": {
    "en": "Abd al-Ghani al-Maqdisi (1146–1203) was a hadith scholar of the Hanbali school.",
    "ar": "عبد الغني المقدسي (٥٤١–٦٠٠هـ/١١٤٦–١٢٠٣م) محدّث حنبلي."
  },
  "refs": [
    {
      "label": "Wikipedia — عبد الغني المقدسي",
      "url": "https://ar.wikipedia.org/wiki/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%BA%D9%86%D9%8A_%D8%A7%D9%84%D9%85%D9%82%D8%AF%D8%B3%D9%8A"
    }
  ]
}
];
