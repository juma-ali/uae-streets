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
    "en": "Hassan ibn al-Nu'man (d. 705) was an umayyad general.",
    "ar": "حسان بن النعمان — قائد أموي."
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
    "en": "Asim ibn Thabit (d. 625) was a sahabi (Companion) of Muhammad.",
    "ar": "عاصم بن ثابت — صحابي من الأنصار."
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
    "en": "Aqil bin Al-Bakir was a Sahabi (companion) of Muhammad.",
    "ar": "عاقل بن البكير — صحابي من السابقين الأولين."
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
    "en": "Ka'b bin Zuhayr (700–647) was an arabian poet.",
    "ar": "كعب بن زهير — شاعر مخضرم."
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
    "en": "Sa'd ibn al-Rabi' (d. 625) was a companion of Muhammad.",
    "ar": "سعد بن الربيع — شجاع سعد بن ربيع."
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
    "en": "Zaynab bint al-Awwam (d. 660) was a companion and poet.",
    "ar": "زينب بنت العوام — صحابية وشاعرة."
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
    "en": "Ibn Zaydun (1003–1071) was a poet of al-Andalus.",
    "ar": "ابن زيدون — شاعر أندلسي."
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
    "en": "Amr ibn al-Jamuh (540–625) was a sahaba of Muhammad.",
    "ar": "عمرو بن الجموح — صحابي، وأحد زعماء المدينة وسيد من سادات بني سَلِمة."
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
    "en": "Abbad ibn Bishr (589–632) was a sahaba of Muhammad.",
    "ar": "عباد بن بشر — صحابي من الأنصار."
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
    "en": "Sālim Jamrī (1910–1991) was an emirian poet.",
    "ar": "سالم الجمري — شاعر إماراتي."
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
    "en": "Zayd ibn Wadi'a was an Ansari Companion of the Khazraj who fought at Badr and Uhud.",
    "ar": "زيد بن وديعة بن عمرو بن قيس الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد صلى ال."
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
    "en": "Sulaym ibn al-Harith was an Ansari Companion of the Khazraj who fought at Badr and Uhud.",
    "ar": "سليم بن الحارث بن ثعلبة بن كعب بن عبد الأشهل الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي م."
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
    "en": "Asim ibn Qays was an Ansari Companion of the Aws who fought at Badr and Uhud.",
    "ar": "عاصم بن قيس بن ثابت بن النعمان بن أمية الأوسي الأنصاري صحابي جليل من قبيلة الأوس من الأنصار شهد مع ا."
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
    "en": "Malik ibn Mas'ud was an Ansari Companion of the Khazraj who fought at Badr and Uhud.",
    "ar": "مالك بن مسعود بن اليدي بن عامر الخزرجي الأنصاري صحابي جليل من قبيلة الخزرج من الأنصار شهد مع النبي محمد صلى ا."
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
    "en": "Ahmed Shawqi (1868–1932) was an Egyptian poet.",
    "ar": "أحمد شوقي علي أحمد شوقي (1285- 1351 هـ / 1868- 1932 م) هو ش."
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
    "en": "Buraydah ibn al-Khasib (d. 680) was a companion of the Prophet Muhammad.",
    "ar": "بريدة بن الحُصَيب هو الصحابي بريدة بن الحصيب بن عبد الله بن الحارث بن الأعرج بن سعد بن زراح ب."
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
    "en": "Fatima (604–632) was a daughter of Muhammad.",
    "ar": "فَاطِمَةُ الزَّهْرَاءُ بنت الرسول محمد من أول زوجاته أم ا."
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
    "en": "Musa ibn Nusayr (640–716) was a military commander and provincial governor.",
    "ar": "أبو عبد الرحمن موسى بن نصير (19 هـ/640 م - 97 هـ/716 م) قائد عسكري عربي لعب دورًا بارزًا في انتشار ا."
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
    "en": "Yazid bin Al Harits (d. 624) was a companion of the prophet.",
    "ar": "يزيد بن الحارث المعروف بأمه يزيد بن فسحم (المتوفي سنة 2 هـ) صحابي من بني كعب ب."
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
    "en": "Urwah ibn Zubayr (644–713) was a Muslim jurist and scholar.",
    "ar": "أبو عبد الله عُروة بن الزُبير بن العوام الأسدي (23 هـ/644 م - 94 هـ/713 م) ت."
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
    "en": "Ubay ibn Ka'b (600–649) was a companion of the Prophet Muhammad.",
    "ar": "أُبَيّ بن كعب (ت 30هـ/ 650م) صحابي وقارئ وفقيه وكاتب للوحي وراوي للحديث النبوي من ا."
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
    "en": "Ubaydah ibn al-Harith (563–624) was a companion of the Prophet Muhammad.",
    "ar": "عبيدة بن الحارث بن المطلب هو صحابي بدري، من السابقين إلى ال."
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
  "emirate": "umm-al-quwain",
  "category": "person",
  "origin": "documented",
  "ar": "شارع حفصه بنت عمر",
  "en": "Hafsa Bint Omar Street",
  "meaning": {
    "en": "Fourth wife of Islamic prophet Muhammad",
    "ar": "أم المؤمنين رابع زوجات لمحمد وبنت ثاني الخلفاء الراشدين أمير المؤمنين عمر بن الخطاب (18ق.هـ–41هـ / 605–661م)"
  },
  "story": {
    "en": "Hafsa bint Umar ibn Al-Khattab (604–665) was a wife of the Prophet Muhammad.",
    "ar": "حَفْصَة بِنْتُ عُمَر بنِ الخَطَّاب العَدَوِيَّة القُرَشِيَّة (18 ق هـ - 41 هـ / 605 - 661م) هي راب."
  },
  "refs": [
    {
      "label": "Wikipedia — حفصة بنت عمر",
      "url": "https://ar.wikipedia.org/wiki/%D8%AD%D9%81%D8%B5%D8%A9_%D8%A8%D9%86%D8%AA_%D8%B9%D9%85%D8%B1"
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
}
];
