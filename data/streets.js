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
}
];
