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
  }
];
