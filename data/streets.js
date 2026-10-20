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
      en: "Abu Dhabi's central spine honours Sheikh Zayed bin Sultan Al Nahyan (1918–2004), ruler of Abu Dhabi from 1966 and first President of the UAE. The street runs through the heart of the island city he rebuilt with oil money — from the Corniche to the old souqs.",
      ar: "يحمل هذا الشارع، وهو عمود المدينة المركزية، اسم الشيخ زايد بن سلطان آل نهيان (1918–2004)، حاكم أبوظبي منذ 1966 وأول رئيس للدولة. ويمرّ الشارع في قلب المدينة الجزيرة التي أعاد بناءها بعائدات النفط، من الكورنيش إلى الأسواق القديمة."
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
    meaning: { en: "The 19th-century ruler called Zayed the Great", ar: "حاكم القرن التاسع عشر الملقّب بزايد الكبير" },
    story: {
      en: "Not the founding father, but his great-grandfather: Sheikh Zayed bin Khalifa Al Nahyan, 'Zayed the Great', ruled Abu Dhabi from 1855 to 1909. His reign was the age when pearl diving made the town rich and Al Nahyan influence spread along the coast — which is why the family kept reusing the name.",
      ar: "ليس المؤسس، بل جدّه الأكبر: الشيخ زايد بن خليفة آل نهيان، «زايد الكبير»، الذي حكم أبوظبي بين 1855 و1909. شهد عهده ازدهار الغوص على اللؤلؤ واتساع نفوذ آل نهيان على الساحل، ولذلك أعادت الأسرة استخدام الاسم."
    }
  },
  {
    id: "al-najda-street",
    emirate: "abu-dhabi",
    category: "word",
    origin: "local",
    ar: "شارع النجدة",
    en: "Al Najda Street",
    translit: "Shāriʿ an-Najda",
    meaning: { en: "Help, rescue", ar: "العون والإنقاذ" },
    story: {
      en: "Najda is the Arabic word for help or rescue. A widely repeated local account says the name stuck because the road led to the city's hospital and emergency services; others simply hear a name of good omen. Either way, it is one of the capital's oldest commercial streets.",
      ar: "«النجدة» في العربية العون والإنقاذ. ويروي أهل المدينة أن الاسم لصق بالشارع لأنه كان يؤدّي إلى المستشفى وخدمات الطوارئ، فيما يسمع آخرون فيه اسماً مباركاً لا أكثر. وعلى أي حال، فهو من أقدم شوارع العاصمة التجارية."
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
    meaning: { en: "Traffic", ar: "المرور" },
    story: {
      en: "Muroor simply means 'traffic', and the road is named for the traffic police headquarters that has long stood on it. Abu Dhabi drivers navigate by their errands rather than by geography: the traffic road, the airport road, the defence road.",
      ar: "«المرور» اسم على مسمّاه: فإدارة المرور والترخيص في أبوظبي تقع على هذا الشارع، حتى صار الناس يسمّون الطريق بحسب أعمالهم لا بمعالمه — طريق المرور، وطريق المطار، وطريق الدفاع."
    }
  },
  {
    id: "electra-street",
    emirate: "abu-dhabi",
    category: "place",
    origin: "local",
    ar: "شارع الإلكترا",
    en: "Electra Street",
    translit: "Shāriʿ al-Electra",
    meaning: { en: "The Electra road", ar: "طريق بناية الإلكترا" },
    story: {
      en: "One of the capital's best-known shopping streets, Electra takes its name from a building — the Electra building, remembered in connection with an electrical company — that once anchored the street. Local accounts differ on the details, but everyone agrees the name arrived with a building, not a person.",
      ar: "من أشهر شوارع التسوّق في العاصمة، ويحمل اسم بناية «الإلكترا» التي كانت علامة في الشارع وتُذكر ارتباطاً بشركة كهربائية. تختلف الروايات في التفاصيل، لكن الجميع يتفق على أن الاسم جاء مع بناية لا مع شخص."
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
      en: "Named for Sheikh Khalifa bin Zayed Al Nahyan (1948–2022), second President of the UAE and ruler of Abu Dhabi. Before the presidency he ran the emirate's oil and public-works portfolios, and the street crosses the downtown he helped modernise.",
      ar: "سُمّي تيمّناً بالشيخ خليفة بن زايد آل نهيان (1948–2022)، الرئيس الثاني للدولة وحاكم أبوظبي. وقبل الرئاسة أشرف على قطاعي النفط والأشغال في الإمارة، والشارع يقطع وسط المدينة الذي ساعد في تحديثه."
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
      en: "Dubai's spine and the longest road in the UAE, E11 is named after Sheikh Zayed bin Sultan Al Nahyan, first President of the UAE and ruler of Abu Dhabi. When it was cut through the desert in the 1970s it carried more camels than cars; today the skyscraper corridor along it carries the founder's name.",
      ar: "يُعدّ شارع الشيخ زايد (E11) أطول طرق الإمارات وعمود دبي الفقري، وقد سُمّي تيمّناً بالشيخ زايد بن سلطان آل نهيان، أول رئيس للدولة وحاكم أبوظبي. وحين شُقّ عبر الصحراء في سبعينيات القرن الماضي كانت الإبل تعبره أكثر من السيارات، واليوم تحمل أبراجه الشاهقة اسمه."
    },
    refs: [{ label: "Khaleej Times — when the road had more camels than cars", url: "https://www.khaleejtimes.com/uae/rewind-50-years-when-dubais-sheikh-zayed-road-had-more-camels-than-cars" }]
  },
  {
    id: "al-wasl-road",
    emirate: "dubai",
    category: "word",
    origin: "local",
    ar: "شارع الوصل",
    en: "Al Wasl Road",
    translit: "Shāriʿ al-Waṣl",
    meaning: { en: "Connection, joining", ar: "الوصل: ربط شيء بشيء" },
    story: {
      en: "Wasl is the Arabic word for joining what was separate. The road is commonly explained as the link that tied Jumeirah and the coast to the Creek and Deira — and some accounts go further, saying Al Wasl was the name Dubai itself carried before 'Dubai' stuck. That older name is a local tradition rather than a documented fact.",
      ar: "«الوصل» في العربية ربط ما انفصل. ويُفسَّر اسم الشارع بأنه الرابط الذي شدّ جميرا والساحل إلى الخور وديرة، ويروي بعضهم أن «الوصل» كان اسماً قديماً لدبي نفسها قبل أن يثبت اسمها الحالي. وهي رواية محلية لا حقيقة موثّقة."
    }
  },
  {
    id: "jumeirah-road",
    emirate: "dubai",
    category: "place",
    origin: "local",
    ar: "شارع جميرا",
    en: "Jumeirah Road",
    translit: "Shāriʿ Jumayrā",
    meaning: { en: "The Jumeirah road", ar: "اسم منطقة، أصله محلّ خلاف" },
    story: {
      en: "Jumeirah is older than the city that grew around it, and its origin is genuinely contested: some trace it to jamr, 'glowing embers', for ground that baked in the sun; others to a word for beauty. What is documented is the place, not the etymology — a good reminder to treat any single explanation with care.",
      ar: "«جميرا» أقدم من المدينة التي التفّت حولها، وأصل اسمها محلّ خلاف حقيقي: فريق يردّها إلى «الجمر» أي الأرض التي تحترق من الشمس، وآخر إلى معنى الجمال. المؤكد هو المكان لا الاشتقاق، وهو تذكير جيد بأن نتعامل بحذر مع أي تفسير واحد."
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
      en: "Named for the Al Maktoum family, rulers of Dubai since 1833. A street named after a ruling family honours a dynasty rather than one individual — which is what the 'Al' marks: the house, not a first name.",
      ar: "سُمّي باسم آل مكتوم، حكّام دبي منذ 1833. والشارع الذي يحمل اسم أسرة حاكمة يكرّم سلالة لا شخصاً واحداً، وهذا ما تدلّ عليه «آل»: البيت لا الاسم الأول."
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
    en: "2 December Street",
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
    origin: "local",
    ar: "شارع الرقة",
    en: "Al Rigga Road",
    translit: "Shāriʿ ar-Riqqa",
    meaning: { en: "Uncertain; linked to water", ar: "اسم غير محسوم، يُربط بالماء" },
    story: {
      en: "Al Rigga is one of Deira's oldest commercial streets, and its name is debated. A common local explanation ties it to raq — the moment water seeps into the bottom of a newly dug well — a memory of the days when wells, not towers, defined the area. Others hear riqqa, 'softness'.",
      ar: "«الرقة» من أقدم شوارع ديرة التجارية، واسمها محلّ نقاش. ويربط تفسير شعبي شائع الاسم بـ«الرَّقّ»، أي ظهور الماء في قاع بئر حديثة الحفر، تذكيراً بأيام كانت الآبار لا الأبراج تحدّد معالم المنطقة. ويسمع آخرون في الاسم معنى «اللين والرّقة»."
    }
  },
  {
    id: "oud-metha-road",
    emirate: "dubai",
    category: "person",
    origin: "local",
    ar: "شارع عود ميثا",
    en: "Oud Metha Road",
    translit: "Shāriʿ ʿŪd Maythā",
    meaning: { en: "Metha's oud", ar: "عود ميثا" },
    story: {
      en: "Local accounts say the district — and the road through it — takes its name from a woman called Maitha, remembered for the oud (agarwood) perfume she used or sold. No official record settles the question, so the story survives as oral history rather than documented fact.",
      ar: "تقول الروايات المحلية إن المنطقة — والشارع الذي يخترقها — سُمّيت على اسم امرأة اسمها «ميثا» عُرفت بعطر العود الذي كانت تستخدمه أو تبيعه. لا وثيقة رسمية تحسم المسألة، فالقصة تعيش كتاريخ شفهي لا كحقيقة موثقة."
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
      en: "E311, Dubai's second great highway, honours Sheikh Mohammed bin Zayed Al Nahyan, President of the UAE since 2022 and for two decades the country's crown prince and defence chief. Its previous name, Emirates Road, still appears on older signs and in older conversations.",
      ar: "الطريق E311، ثاني أكبر شرايين دبي، يحمل اسم الشيخ محمد بن زايد آل نهيان، رئيس الدولة منذ 2022، والذي كان لعقدين ولياً لعهد أبوظبي وقائداً للقوات المسلحة. ولا يزال اسمه السابق «طريق الإمارات» يظهر على اللوحات القديمة."
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
      en: "Sharjah's central street is named for King Faisal bin Abdulaziz of Saudi Arabia, who reigned from 1964 to 1975. Naming a street after a neighbouring head of state reflects the kinship and alliance that tie the Gulf's ruling families together.",
      ar: "الشارع المركزي في الشارقة يحمل اسم الملك فيصل بن عبدالعزيز آل سعود، ملك المملكة العربية السعودية بين 1964 و1975. وتسمية شارع باسم رئيس دولة مجاورة تعبير عن صلات القربى والتحالف بين أسر الخليج الحاكمة."
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
      en: "Ajman's main street honours Sheikh Rashid bin Humaid Al Nuaimi, who ruled the emirate from 1928 to 1981 — across the lean pre-oil decades, the discovery of oil elsewhere, and the birth of the federation. The Al Nuaimi family has ruled Ajman since the 19th century.",
      ar: "أكبر شوارع عجمان يحمل اسم الشيخ راشد بن حميد النعيمي الذي حكم الإمارة بين 1928 و1981، وعبر عقود ما قبل النفط الصعبة وولادة الاتحاد. وآل النعيمي يحكمون عجمان منذ القرن التاسع عشر."
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
      en: "Named for Sheikh Ammar bin Humaid Al Nuaimi, Crown Prince of Ajman, from the same ruling family as the street above. It is a good example of how Gulf streets honour a living dynasty across generations, not only historical figures.",
      ar: "سُمّي تيمّناً بالشيخ عمار بن حميد النعيمي، ولي عهد عجمان، من الأسرة الحاكمة نفسها. وهو مثال جيد على كيف تكرّم شوارع الخليج سلالة حاكمة عبر الأجيال، لا شخصيات تاريخية فقط."
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
      en: "Ras Al Khaimah's main artery, part of the E11, is named after Sheikh Mohammed bin Salem Al Qasimi, who ruled the emirate in the early 20th century. In 2025 its speed limit was cut to 80 km/h — a sign of how the city has grown around a road that once ran through open country.",
      ar: "شريان رأس الخيمة الرئيسي، وهو جزء من الطريق E11، يحمل اسم الشيخ محمد بن سالم القاسمي الذي حكم الإمارة مطلع القرن العشرين. وفي 2025 خُفّضت سرعة الطريق إلى 80 كم/س، دلالة على اتساع المدينة حول طريق كان يوماً في عراء."
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
      en: "Fujairah's main street honours Sheikh Hamad bin Abdullah Al Sharqi, who ruled from 1938 to 1974 — the years when the emirate's mountains and coast were still outside the oil economy. The Al Sharqi family has ruled Fujairah since the 19th century, and the street runs through the town that grew between the mountains and the Gulf of Oman.",
      ar: "الشارع الرئيسي في الفجيرة يكرّم الشيخ حمد بن عبدالله الشرقي الذي حكم بين 1938 و1974، حين كانت جبال الإمارة وساحلها ما تزال خارج اقتصاد النفط. وآل الشرقي يحكمون الفجيرة منذ القرن التاسع عشر، ويمرّ الشارع في البلدة التي نمت بين الجبال وخليج عُمان."
    }
  }
];
