/* ============================================================
   UAE Streets — app
   No dependencies. State -> render. That's the whole idea.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- reference data ---------- */
  var EMIRATES = [
    { id: "abu-dhabi",      en: "Abu Dhabi",      ar: "أبوظبي" },
    { id: "dubai",          en: "Dubai",          ar: "دبي" },
    { id: "sharjah",        en: "Sharjah",        ar: "الشارقة" },
    { id: "ajman",          en: "Ajman",          ar: "عجمان" },
    { id: "uaq",            en: "Umm Al Quwain",  ar: "أم القيوين" },
    { id: "ras-al-khaimah", en: "Ras Al Khaimah", ar: "رأس الخيمة" },
    { id: "fujairah",       en: "Fujairah",       ar: "الفجيرة" }
  ];

  var CATEGORIES = [
    { id: "person", en: "People",  ar: "الشخصيات", color: "#b4622d" },
    { id: "place",  en: "Places",  ar: "الأماكن",  color: "#1d5a70" },
    { id: "word",   en: "Words",   ar: "الكلمات",  color: "#2f6b4a" },
    { id: "tribe",  en: "Tribes",  ar: "القبائل",  color: "#6d4767" },
    { id: "event",  en: "Events",  ar: "الأحداث",  color: "#9c3b32" }
  ];

  var TEXT = {
    en: {
      allEmirates: "All emirates",
      allCategories: "Any name",
      read: "Read the story",
      prev: "Previous",
      next: "Next",
      sheetHint: "Street",
      route: "Route",
      formerly: "Formerly",
      now: "Now officially",
      meaning: "Meaning",
      sources: "Sources",
      originDocumented: "Documented name",
      originLocal: "Local account",
      originAccount: "Recorded account",
      originUnsourced: "No reference found",
      caveatDocumented: "The name is on the record.",
      caveatPerson: "The person behind this name is on the record.",
      caveatPlace: "The place behind this name is on the record.",
      caveatWord: "The meaning of this name is on the record.",
      caveatEvent: "The event behind this name is on the record.",
      caveatTribe: "The tribe behind this name is on the record.",
      caveatLocal: "This explanation is widely told locally, but it is not officially recorded — treat it as oral history.",
      caveatAccount: "This account is recorded by the project; no published source is cited.",
      caveatUnsourced: "No published source was found for this name. The entry records the name on the sign and claims nothing further.",
      noArabicName: "No Arabic name recorded",
      categoryNoun: { person: "Named after a person", place: "Named after a place", word: "An Arabic word", tribe: "Named after a tribe", event: "Named after an event" },
      countOne: "1 street",
      countMany: "{n} streets",
      countFiltered: "{n} of {total} shown",
      searchLabel: "Search streets",
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme"
    },
    ar: {
      allEmirates: "كل الإمارات",
      allCategories: "أي اسم",
      read: "اقرأ القصة",
      prev: "السابق",
      next: "التالي",
      sheetHint: "شارع",
      route: "الطريق",
      formerly: "كان يُعرف سابقاً باسم",
      now: "يُعرف رسمياً الآن باسم",
      meaning: "المعنى",
      sources: "المصادر",
      originDocumented: "اسم موثّق",
      originLocal: "رواية محلية",
      originAccount: "رواية مسجّلة",
      caveatDocumented: "الاسم مسجّل وموثّق.",
      caveatPerson: "الشخص الذي يحمل الشارع اسمه مسجّل وموثّق.",
      caveatPlace: "الموضع الذي يحمل الشارع اسمه مسجّل وموثّق.",
      caveatWord: "معنى الاسم مسجّل وموثّق.",
      caveatEvent: "الحدث الذي يحمل الشارع اسمه مسجّل وموثّق.",
      caveatTribe: "القبيلة التي يحمل الشارع اسمها مسجّلة وموثّقة.",
      caveatLocal: "هذا التفسير شائع محلياً لكنه غير مسجّل رسمياً — تعامل معه كتاريخ شفهي.",
      originUnsourced: "لا يوجد مرجع",
      caveatAccount: "هذه الرواية مسجّلة في المشروع، ولا يُذكر مصدر منشور.",
      caveatUnsourced: "لم يُعثر على مصدر منشور لهذا الاسم، والبطاقة تسجّل الاسم كما ورد على اللوحة ولا تنسب إليه غيره.",
      categoryNoun: { person: "سُمّي على اسم شخص", place: "سُمّي على اسم مكان", word: "كلمة عربية", tribe: "سُمّي على اسم قبيلة", event: "سُمّي على اسم حدث" },
      countOne: "شارع واحد",
      countMany: "{n} شارعاً",
      countFiltered: "{n} من {total}",
      searchLabel: "ابحث في الشوارع",
      themeToDark: "التبديل إلى الوضع الداكن",
      themeToLight: "التبديل إلى الوضع الفاتح"
    }
  };

  /* ---------- helpers ---------- */
  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var currentId = null;
  var lastTrigger = null;
  var T;               // active text pack

  var ORDER = EMIRATES.map(function (e) { return e.id; });

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Arabic-aware normalisation: strip diacritics and unify alef/ya/ta-marbuta
     so "زايد" and "زايد" variants match, and substring search lets "wasl"
     find "Al Wasl". */
  function norm(str) {
    return String(str == null ? "" : str)
      .toLowerCase()
      .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
      .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627")
      .replace(/\u0649/g, "\u064A")
      .replace(/\u0629/g, "\u0647")
      .replace(/[’'`ʾʿ]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }


  /* A query token matches when the haystack holds it — allowing the Arabic
     article to be present or absent, since signs vary ("الهاملي" / "هاملي"). */
  function tokenHit(hay, token) {
    if (!token) return true;
    if (hay.indexOf(token) !== -1) return true;
    if (token.indexOf("\u0627\u0644") === 0 && hay.indexOf(token.slice(2)) !== -1) return true;
    if (hay.indexOf("\u0627\u0644" + token) !== -1) return true;
    return false;
  }

  function format(tpl, vars) {
    return tpl.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  }

  function emirateOf(id) {
    var key = id === "umm-al-quwain" ? "uaq" : id;
    for (var i = 0; i < EMIRATES.length; i++) if (EMIRATES[i].id === key) return EMIRATES[i];
    return { id: key, en: id, ar: id };
  }
  function categoryOf(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return { id: id, en: id, ar: id, color: "#999" };
  }

  /* ---------- state ---------- */
  var STREETS = (window.STREETS || []).slice();

  /* ---------- build search index once ---------- */
  STREETS.forEach(function (s) {
    var em = emirateOf(s.emirate), cat = categoryOf(s.category);
    s._index = norm([
      s.en, s.ar, s.translit || "", s.id,
      s.meaning && s.meaning.en, s.meaning && s.meaning.ar,
      s.story && s.story.en, s.story && s.story.ar,
      em.en, em.ar, cat.en, cat.ar,
      s.origin === "local" ? "local account" : "documented"
    ].join(" "));
  });

  /* sort: federal order, then English name */
  STREETS.sort(function (a, b) {
    var d = ORDER.indexOf(a.emirate) - ORDER.indexOf(b.emirate);
    return d !== 0 ? d : a.en.localeCompare(b.en);
  });

  var state = { lang: "en", q: "", emirate: "all", region: "all", category: "all", district: "all",
    town: "all", showRoads: false, limit: 24 };
  var storyDistrict = {};
  var results = [];
  var lastRoads = [];
  var ROAD_PAGE = 60;
  var PAGE = 24; // cards per screen
  var ROADS = null;          // the full card index, loaded on first search only
  var roadsLoading = false;
  var roadsWaiting = [];

  function loadRoads(cb) {
    if (ROADS) { if (cb) cb(); return; }
    if (cb) roadsWaiting.push(cb);
    if (roadsLoading) return;
    roadsLoading = true;
    var s = document.createElement("script");
    s.src = "data/cards.js?v=20261029f";
    s.onload = function () {
      ROADS = window.ROADS || null;
      roadsLoading = false;
      storyDistrict = {};
      if (ROADS) ROADS.rows.forEach(function (r) { if (r[7]) storyDistrict[r[7]] = r[2]; });
      setTotals();
      try { renderStats(); } catch (e) {}
      roadsWaiting.splice(0).forEach(function (f) { f(); });
    };
    document.head.appendChild(s);
  }

  /* Rows from the full index that match the query, before emirate/category are applied. */
  function roadQueryMatches() {
    if (!ROADS) return [];
    var tokens = norm(state.q).replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean);
    var out = [];
    for (var i = 0; i < ROADS.rows.length; i++) {
      var r = ROADS.rows[i];
      var d = r[2] >= 0 ? ROADS.districts[r[2]] : null;
      if (state.district !== "all" && String(r[2]) !== String(state.district)) continue;
      if (state.region !== "all" && String(r[8]) !== String(state.region)) continue;
    if (state.town !== "all" && !townOk(r[2])) continue;
      var hay = norm(r[0] + " " + r[1] + " " + (d ? d[0] + " " + (d[1] || "") : ""));
      var ok = true;
      for (var t = 0; t < tokens.length; t++) if (!tokenHit(hay, tokens[t])) { ok = false; break; }
      if (ok) out.push({ row: r, district: d, idx: i });
    }
    return out;
  }

  function roadMatches() {
    return roadQueryMatches().filter(function (x) {
      if (x.row[7]) return false; // a curated card already covers this road
      var emId = state.emirate === "uaq" ? "umm-al-quwain" : state.emirate;
      if (emId !== "all" && (!x.district || x.district[2] !== emId)) return false;
      if (state.category !== "all" && x.row[3] !== state.category) return false;
      return true;
    });
  }

  /* Every road has facts even when nobody has written its story: the naming
     pattern, the district, the gloss, a former name, a route number. Compose them
     into a sentence rather than printing a placeholder. */
  /* The glosses are English; the Arabic column above covers the most frequent
     of them so the Arabic interface is not left without a meaning. */
  function glossIn(s, ar) {
    if (!s) return "";
    if (!ar) return /[\u0600-\u06FF]/.test(s) ? "" : s;
    if (/[\u0600-\u06FF]/.test(s)) return s;
    var m = window.GLOSS_AR && window.GLOSS_AR[s];
    return m || "";
  }

  /* When a street has no gloss and no card, the name itself still says something:
     a "bin/bint" name is a person and their father, a nisba ending is a family,
     an "um-/bu-" opening is a place-name prefix. Say that, rather than only
     "named after a person". */
  function nameShape(arName) {
    var s = String(arName || "").replace(/^\s*(شارع|طريق|جادة|ممر|ميدان|دوار|نفق|ساحة)\s+/, "").trim();
    if (!s) return null;
    var words = s.split(/\s+/);
    var last = words[words.length - 1];
    if (/(^|\s)(بن|بنت|ابن)(\s|$)/.test(s) && words.length >= 3) {
      var i = s.search(/(^|\s)(بن|بنت|ابن)(\s|$)/);
      return { kind: "nasab", given: s.slice(0, i).trim(), rel: /بنت/.test(s) ? "daughter of" : "son of", father: s.slice(i).replace(/^\s*(بن|بنت|ابن)\s*/, "") };
    }
    if (/^ال[\u0600-\u06FF]{3,}ي$/.test(last) && words.length === 1) return { kind: "nisba", family: last };
    if (/^(أم|ام|بو|أبو|ابو)\s/.test(s)) return { kind: "kunya" };
    return null;
  }


  /* The English name carries the same grammar, so read it for the English line. */
  function nameShapeEn(enName) {
    var s = String(enName || "").replace(/\s+(Street|Road|St|Rd|Square|Boulevard|Corniche|Avenue)\s*$/i, "").trim();
    if (!s) return null;
    var m = /^(.*?)\s+(Bin|Bint|Ibn)\s+(.+)$/i.exec(s);
    if (m) return { kind: "nasab", given: m[1], rel: /^bint$/i.test(m[2]) ? "daughter of" : "son of", father: m[3] };
    var w = s.split(/\s+/);
    var al = /^al\s+(\S+)$/i.exec(s);
    if (al && /i$/i.test(al[1])) return { kind: "nisba", family: al[1] };
    if (/^(umm|um|bu|abu)\s/i.test(s)) return { kind: "kunya" };
    return null;
  }

  function describeRoad(r, d, em, where) {
    var ar = state.lang === "ar";
    var parts = [];
    if (d) {
      var near = d[4] === "approx";
      parts.push(ar ? (near ? "طريق قرب " : "طريق في ") + where + "، " + em
                     : (near ? "A road near " : "A road in ") + where + ", " + em);
    }
    var named = {
      person: ar ? "سُمّي نسبةً إلى شخص" : "named after a person",
      place: ar ? "سُمّي نسبةً إلى مكان" : "named after a place",
      word: ar ? "سُمّي بكلمة" : "named for a word",
      tribe: ar ? "سُمّي نسبةً إلى قبيلة" : "named after a tribe",
      event: ar ? "سُمّي تخليداً لحدث" : "named for an event"
    };
    var g = glossIn(r[6], ar);
    var main = named[r[3]] || "";
    if (!g && !r[7] && (r[3] === "person" || r[3] === "word")) {
      var sh = nameShape(r[1]);
      var se = nameShapeEn(r[0]);
      if (sh && sh.kind === "nasab") {
        main = ar ? ("سُمّي باسم " + sh.given + (sh.rel === "daughter of" ? " ابنة " : " بن ") + sh.father)
                  : (se ? ("named for " + se.given + ", " + se.rel + " " + se.father) : named.person);
      } else if (sh && sh.kind === "nisba") {
        main = ar ? ("سُمّي نسبةً إلى أسرة " + sh.family) : (se && se.family ? ("named for a member of the " + se.family + " family") : named.person);
      } else if (sh && sh.kind === "kunya") {
        main = ar ? "اسم مركّب على صيغة «أم/بو»" : "a place name of the um-/bu- type";
      }
    }
    if (g) main += (main ? (ar ? "، أي " : ", meaning ") : "") + "“" + g + "”";
    if (main) parts.push(main);
    if (r[5]) parts.push(ar ? ("عُرف سابقاً بـ " + r[5]) : ("formerly " + r[5]));
    if (r[4]) parts.push(ar ? ("ويحمل رقم الطريق " + r[4]) : ("carries route " + r[4]));
    if (!parts.length) return "";
    var s = parts.join(ar ? "، " : ", ");
    return s.charAt(0).toUpperCase() + s.slice(1) + (ar ? "." : ".");
  }

  function openRoadSheet(idx) {
    if (!ROADS) return;
    var r = ROADS.rows[idx];
    if (!r) return;
    var d = r[2] >= 0 ? ROADS.districts[r[2]] : null;
    var em = d ? emirateOf(d[2]) : null;
    var sheet = $("#sheet"), body = $("#sheet-body");
    if (!sheet || !body) return;
    if (!sheet.open) lastTrigger = document.activeElement;
    var where = d ? (state.lang === "ar" ? d[1] || d[0] : d[0]) : "";
    if (!where) where = em ? em[state.lang] : "";
    var titleBlock = state.lang === "ar" && r[1]
      ? '<h2 class="sheet__ar" id="sheet-title" lang="ar" dir="rtl">' + esc(r[1]) + "</h2><p class=\"sheet__en\" dir=\"ltr\">" + esc(r[0]) + "</p>"
      : '<h2 class="sheet__en" id="sheet-title" dir="ltr">' + esc(r[0] || r[1]) + "</h2>" +
        (r[1] ? '<p class="sheet__ar" lang="ar" dir="rtl">' + esc(r[1]) + "</p>" : "");
    var text = describeRoad(r, d, em ? em[state.lang] : "", where);
    var gloss = glossIn(r[6], state.lang === "ar") ? '<div class="sheet__meaning"><span class="sheet__meaning-label">' + esc(T.meaning) + "</span><p class=\"sheet__meaning-text\">" + esc(glossIn(r[6], state.lang === "ar")) + "</p></div>" : "";
    body.innerHTML =
      '<div class="sheet__head"><p class="sheet__emirate">' + esc(em ? em[state.lang] : "") + " · " + esc(T.categoryNoun[r[3]] || "") + "</p>" +
        titleBlock +
        (r[4] ? '<p class="sheet__route">' + esc(T.route) + " " + esc(r[4]) + "</p>" : "") +
        (r[5] ? '<p class="sheet__rename">' + esc(T.formerly) + " " + esc(r[5]) + "</p>" : "") +
        "</div>" +
      gloss +
      '<div class="sheet__story"><p>' + esc(text) + "</p></div>" +
      '<p class="sheet__caveat">' + esc(state.lang === "ar" ? "الاسم والموقع من خريطة الشارع المفتوح." : "Name and location from OpenStreetMap (ODbL).") + "</p>";
    sheet.showModal();
  }

  function renderRoadCard(x, i) {
    var r = x.row, d = x.district;
    var em = d ? emirateOf(d[2])[state.lang] : "";
    var catLabel = T.categoryNoun[r[3]] || r[3];
    var where = d ? (state.lang === "ar" ? d[1] || d[0] : d[0]) : "";
    if (!where) where = em;
    var href = "#road=" + x.idx;
    var name = !r[1]
      ? '<h3 class="card__en" dir="ltr">' + esc(r[0]) + "</h3>" +
        '<p class="card__ar card__ar--missing" lang="ar" dir="rtl">' + esc(T.noArabicName) + "</p>"
      : state.lang === "ar"
      ? '<h3 class="card__ar" lang="ar" dir="rtl">' + esc(r[1]) + "</h3>" +
        (r[0] ? '<p class="card__en" dir="ltr">' + esc(r[0]) + "</p>" : "")
      : '<h3 class="card__en" dir="ltr">' + esc(r[0] || r[1]) + "</h3>" +
        '<p class="card__ar" lang="ar" dir="rtl">' + esc(r[1]) + "</p>";
    var text = describeRoad(r, d, em, where);
    return '<a class="card card--kb" href="' + esc(href) + '" style="--i:' + Math.min(i, 14) + '">' +
      '<div class="card__top">' +
        '<span class="card__emirate">' + esc(em) + "</span>" +
      "</div>" +
      name +
      (text ? '<p class="card__note">' + esc(text) + "</p>" : "") +
      '<div class="card__foot">' +
        '<span class="card__tag">' + esc(catLabel) + "</span>" +
        '<span class="card__more">' + esc(state.lang === "ar" ? "التفاصيل" : "Details") + ' <span class="arrow" aria-hidden="true">→</span></span>' +
      "</div>" +
    "</a>";
  }

  /* ---------- render: count + title ---------- */
  /* A town is a set of districts; choosing one narrows the same list. */
  function townOk(districtIdx) {
    if (state.town === "all") return true;
    if (!window.HIERARCHY) return true;
    var d = Number(districtIdx);
    if (isNaN(d) || d < 0) return false;
    return String(window.HIERARCHY.districtTown[d]) === String(state.town);
  }

  function filterStreets() {
    var q = norm(state.q);
    var tokens = q ? q.split(" ").filter(Boolean) : [];
    return STREETS.filter(function (s) {
      if (state.emirate !== "all" && s.emirate !== state.emirate) return false;
      if (state.category !== "all" && s.category !== state.category) return false;
      if (state.district !== "all" && String(storyDistrict[s.id]) !== String(state.district)) return false;
    if (state.town !== "all" && !townOk(storyDistrict[s.id])) return false;
      if (!tokens.length) return true;
      return tokens.every(function (t) { return tokenHit(s._index, t); });
    });
  }

  /* ---------- render: chips ---------- */

  /* The Area row only makes sense once an emirate is chosen: it lists that
     emirate's areas (Abu Dhabi city / Al Ain / Al Dhafra …). */
  function syncRegionRow() {
    var row = $("#region-row");
    if (!row) return;
    var em = state.emirate;
    row.hidden = em === "all";
    var chips = row.querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      var c = chips[i];
      c.hidden = c.getAttribute("data-emirate") !== em;
      c.setAttribute("aria-pressed", String(state.region === c.getAttribute("data-region")));
    }
  }

  function buildChips() {
    var emWrap = $("#emirate-chips");
    var catWrap = $("#category-chips");
    if (!emWrap || !catWrap) return;

    emWrap.innerHTML = [
      '<button type="button" class="chip" data-group="emirate" data-value="all" aria-pressed="true">',
        '<span class="chip__label"></span><span class="chip__count"></span>',
      "</button>"
    ].concat(EMIRATES.map(function (e) {
      return '<button type="button" class="chip" data-group="emirate" data-value="' + e.id + '" aria-pressed="false">' +
        '<span class="chip__label" data-en="' + esc(e.en) + '" data-ar="' + esc(e.ar) + '">' + esc(e.en) + "</span>" +
        '<span class="chip__count"></span></button>';
    })).join("");

    catWrap.innerHTML = [
      '<button type="button" class="chip" data-group="category" data-value="all" aria-pressed="true">',
        '<span class="chip__label"></span><span class="chip__count"></span>',
      "</button>"
    ].concat(CATEGORIES.map(function (c) {
      return '<button type="button" class="chip" data-group="category" data-value="' + c.id + '" aria-pressed="false">' +
        '<span class="chip__label" data-en="' + esc(c.en) + '" data-ar="' + esc(c.ar) + '">' + esc(c.en) + "</span>" +
        '<span class="chip__count"></span></button>';
    })).join("");
  }

  function refreshChipLabels() {
    var t = T;
    var allEm = $('.chip[data-group="emirate"][data-value="all"] .chip__label');
    var allCat = $('.chip[data-group="category"][data-value="all"] .chip__label');
    if (allEm) allEm.textContent = t.allEmirates;
    if (allCat) allCat.textContent = t.allCategories;
  }

  function refreshChipCounts() {
    $$('#emirate-chips .chip').forEach(function (chip) {
      var v = chip.getAttribute("data-value");
      var emId = v === "uaq" ? "umm-al-quwain" : v;
      var n;
      if (ROADS) {
        n = roadQueryMatches().filter(function (x) {
          if (emId !== "all" && (!x.district || x.district[2] !== emId)) return false;
          if (state.category !== "all" && x.row[3] !== state.category) return false;
          return true;
        }).length;
      } else {
        n = STREETS.filter(function (s) {
          if (v !== "all" && s.emirate !== v) return false;
          if (state.category !== "all" && s.category !== state.category) return false;
          var q = norm(state.q);
          if (!q) return true;
          return q.split(" ").filter(Boolean).every(function (t) { return s._index.indexOf(t) !== -1; });
        }).length;
      }
      chip.querySelector(".chip__count").textContent = n;
      chip.setAttribute("aria-pressed", String(state.emirate === v));
    });

    $$('#category-chips .chip').forEach(function (chip) {
      var v = chip.getAttribute("data-value");
      var emId2 = state.emirate === "uaq" ? "umm-al-quwain" : state.emirate;
      var n;
      if (ROADS) {
        n = roadQueryMatches().filter(function (x) {
          if (v !== "all" && x.row[3] !== v) return false;
          if (emId2 !== "all" && (!x.district || x.district[2] !== emId2)) return false;
          return true;
        }).length;
      } else {
        n = STREETS.filter(function (s) {
          if (v !== "all" && s.category !== v) return false;
          if (state.emirate !== "all" && s.emirate !== state.emirate) return false;
          var q = norm(state.q);
          if (!q) return true;
          return q.split(" ").filter(Boolean).every(function (t) { return s._index.indexOf(t) !== -1; });
        }).length;
      }
      chip.querySelector(".chip__count").textContent = n;
      chip.setAttribute("aria-pressed", String(state.category === v));
    });
  }

  /* ---------- render: grid ---------- */
  /* Towns of the chosen emirate (and area, when one is chosen). Built at load
     from the hierarchy file, so the row only appears where towns exist. */
  function renderTownChips() {
    var wrap = $("#town-chips"), row = $("#town-row");
    if (!wrap || !row) return;
    if (!ROADS || !window.HIERARCHY || state.emirate === "all") { row.hidden = true; wrap.innerHTML = ""; return; }
    var em = state.emirate === "uaq" ? "umm-al-quwain" : state.emirate;
    var H = window.HIERARCHY, counts = {}, cityOf = {};
    for (var i = 0; i < H.districtTown.length; i++) {
      var t = H.districtTown[i];
      if (t < 0) continue;
      var d = ROADS.districts[i];
      if (!d || d[2] !== em) continue;
      if (state.region !== "all" && String(H.districtCity[i]) !== String(state.region)) continue;
      counts[t] = (counts[t] || 0) + 1;
    }
    var ids = Object.keys(counts).map(Number).sort(function (x, y) { return counts[y] - counts[x]; });
    if (!ids.length) { row.hidden = true; wrap.innerHTML = ""; return; }
    var html = ['<button type="button" class="chip chip--sub" data-town="all" aria-pressed="' +
      (state.town === "all" ? "true" : "false") + '"><span class="chip__label" data-en="All towns" data-ar="كل البلدات">All towns</span></button>'];
    ids.forEach(function (t) {
      var town = H.towns[t];
      html.push('<button type="button" class="chip chip--sub" data-town="' + t + '" aria-pressed="' +
        (String(state.town) === String(t) ? "true" : "false") + '">' +
        '<span class="chip__label" data-en="' + town[0].replace(/"/g, "&quot;") + '" data-ar="' + (town[1] || town[0]).replace(/"/g, "&quot;") + '">' + town[0] +
        '</span><span class="chip__count">' + counts[t] + "</span></button>");
    });
    wrap.innerHTML = html.join("");
    row.hidden = false;
  }

  function renderDistrictChips() {
    var wrap = $("#district-chips");
    var row = $("#district-row");
    if (!wrap || !row) return;
    if (!ROADS || state.emirate === "all") { row.hidden = true; wrap.innerHTML = ""; return; }

    var em = state.emirate === "uaq" ? "umm-al-quwain" : state.emirate;
    var tokens = norm(state.q).split(" ").filter(Boolean);
    var counts = {};
    ROADS.rows.forEach(function (r) {
      var d = r[2] >= 0 ? ROADS.districts[r[2]] : null;
      if (!d || d[2] !== em) return;
      if (state.region !== "all" && window.HIERARCHY && String(window.HIERARCHY.districtCity[r[2]]) !== String(state.region)) return;
      if (state.town !== "all" && !townOk(r[2])) return;
      if (state.category !== "all" && r[3] !== state.category) return;
      if (tokens.length) {
        var hay = norm(r[0] + " " + r[1] + " " + (d[0] || ""));
        if (!tokens.every(function (t) { return hay.indexOf(t) !== -1; })) return;
      }
      counts[r[2]] = (counts[r[2]] || 0) + 1;
    });

    var total = 0;
    Object.keys(counts).forEach(function (k) { total += counts[k]; });
    var html = '<button type="button" class="chip" data-group="district" data-value="all" aria-pressed="' +
      (state.district === "all") + '"><span class="chip__label">' +
      esc(state.lang === "ar" ? "كل الأحياء" : "All districts") + '</span><span class="chip__count">' +
      total.toLocaleString(state.lang === "ar" ? "ar-EG" : "en") + "</span></button>";

    Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).forEach(function (id) {
      var d = ROADS.districts[id];
      var label = state.lang === "ar" ? (d[1] || d[0]) : d[0];
      if (!label) label = state.lang === "ar" ? "بلا حي" : "no district";
      html += '<button type="button" class="chip" data-group="district" data-value="' + id +
        '" aria-pressed="' + (String(state.district) === String(id)) + '"><span class="chip__label">' +
        esc(label) + '</span><span class="chip__count">' +
        counts[id].toLocaleString(state.lang === "ar" ? "ar-EG" : "en") + "</span></button>";
    });

    wrap.innerHTML = html;
    row.hidden = false;
  }

  function renderStoryCard(s, i) {
    var em = emirateOf(s.emirate);
    var cat = categoryOf(s.category);
    var meaning = s.meaning ? s.meaning[state.lang] : "";
    var originLabel = s.origin === "account" ? T.originAccount : s.origin === "unsourced" ? T.originUnsourced : s.origin === "local" ? T.originLocal : T.originDocumented;
    var nameBlock = state.lang === "ar"
      ? '<h3 class="card__ar" lang="ar" dir="rtl">' + esc(s.ar) + "</h3>" +
        '<p class="card__en" dir="ltr">' + esc(s.en) + "</p>"
      : '<h3 class="card__en" dir="ltr">' + esc(s.en) + "</h3>" +
        '<p class="card__ar" lang="ar" dir="rtl">' + esc(s.ar) + "</p>";
    return '<a class="card" href="#street=' + esc(s.id) + '" data-id="' + esc(s.id) + '" ' +
      'style="--cat:' + cat.color + ';--i:' + Math.min(i, 14) + '" ' +
      'aria-label="' + esc((state.lang === "ar" ? s.ar : s.en) + " — " + em[state.lang]) + '">' +
      '<div class="card__top">' +
        '<span class="card__emirate">' + esc(em[state.lang]) + "</span>" +
        '<span class="badge badge--' + (s.origin === "local" ? "local" : s.origin === "unsourced" ? "unsourced" : "documented") + '">' + esc(originLabel) + "</span>" +
      "</div>" +
      nameBlock +
      (meaning ? '<p class="card__meaning">' + esc(meaning) + "</p>" : "") +
      '<div class="card__foot">' +
        '<span class="card__tag">' + esc(T.categoryNoun[s.category] || cat[state.lang]) + "</span>" +
        '<span class="card__more">' + esc(T.read) + ' <span class="arrow" aria-hidden="true">→</span></span>' +
      "</div>" +
    "</a>";
  }
  function renderGrid(animate) {
    var grid = $("#grid");
    lastRoads = (state.q || state.emirate !== "all" || state.category !== "all" || state.district !== "all") ? roadMatches() : [];
    if (!grid) return;

    grid.classList.toggle("grid--animate", !!animate);

    var items = results.map(function (s, i) { return { story: s, i: i }; });
    var shownRoads = lastRoads.slice(0, state.roadsShown || ROAD_PAGE);
    shownRoads.forEach(function (x, i) { items.push({ road: x, i: i }); });
    var limit = state.limit || PAGE;
    grid.innerHTML = items.slice(0, limit).map(function (it) {
      return it.story ? renderStoryCard(it.story, it.i) : renderRoadCard(it.road, it.i);
    }).join("");

    var moreWrap = $("#cards-more-wrap");
    if (moreWrap) {
      var remaining = Math.max(0, items.length - limit);
      moreWrap.hidden = remaining <= 0;
      var moreBtn = $("#cards-more");
      if (moreBtn) moreBtn.textContent = state.lang === "ar"
        ? "عرض مزيد من البطاقات (" + Math.min(remaining, PAGE).toLocaleString("ar-EG") + ")"
        : "Show more cards (" + Math.min(remaining, PAGE) + ")";
    }


    $("#empty").hidden = results.length !== 0 || lastRoads.length !== 0;
  }

  function renderChrome() {
    syncRegionRow();
    var n = results.length;
    var total = STREETS.length;
    var isFiltered = !!(state.q || state.emirate !== "all" || state.category !== "all");

    var countEl = $("#result-count");
    if (countEl) {
      if (lastRoads.length) {
        var shownN = Math.min(lastRoads.length, state.roadsShown || ROAD_PAGE);
        var capped = lastRoads.length > shownN;
        var num = function (x) { return x.toLocaleString(state.lang === "ar" ? "ar-EG" : "en"); };
        var head;
        if (state.lang === "ar") {
          head = capped ? num(shownN) + " من " + num(lastRoads.length) + " طريقاً" : num(lastRoads.length) + " طريقاً";
          countEl.textContent = n ? num(n) + " قصة · " + head : head;
        } else {
          head = capped ? "showing " + num(shownN) + " of " + num(lastRoads.length) + " roads" : num(lastRoads.length) + (lastRoads.length === 1 ? " road" : " roads");
          countEl.textContent = n ? n + (n === 1 ? " story · " : " stories · ") + head : head;
        }
      } else {
        var shown = Math.min(n, state.limit || PAGE);
        if (n > shown) {
          countEl.textContent = state.lang === "ar"
            ? shown.toLocaleString("ar-EG") + " من " + n.toLocaleString("ar-EG") + " شارعاً"
            : "showing " + shown + " of " + n + " streets";
        } else {
          countEl.textContent = isFiltered
            ? format(T.countFiltered, { n: n, total: total })
            : (n === 1 ? T.countOne : format(T.countMany, { n: n }));
        }
      }
    }

    var titleEl = $("#collection-title");
    if (titleEl) {
      var parts = [];
      if (state.category !== "all") parts.push(T.categoryNoun[state.category]);
      if (state.emirate !== "all") parts.push(emirateOf(state.emirate)[state.lang]);
      titleEl.textContent = parts.length ? parts.join(" · ") : (state.lang === "ar" ? "كل الشوارع" : "All streets");
    }

    var reset = $("#reset");
    if (reset) reset.hidden = !isFiltered;

    /* "Show more cards" was rendered but never wired: give it a handler. */
    var moreBtnCtl = $("#cards-more");
    if (moreBtnCtl) {
      moreBtnCtl.addEventListener("click", function () {
        state.limit = (state.limit || PAGE) + PAGE;
        state.roadsShown = (state.roadsShown || ROAD_PAGE) + ROAD_PAGE;
        update(false);
      });
    }

    var shuffleBtn = $("#shuffle");
    if (shuffleBtn) shuffleBtn.disabled = results.length === 0;

    var clear = $("#search-clear");
    if (clear) clear.hidden = !state.q;
  }

  /* ---------- stats ---------- */
  function renderStats() {
    var box = $("#stats");
    if (!box) return;
    var roadsFor = function (id) {
      if (!ROADS) return 0;
      var want = id === "uaq" ? "umm-al-quwain" : id;
      return ROADS.rows.filter(function (r) {
        var d = r[2] >= 0 ? ROADS.districts[r[2]] : null;
        return d && d[2] === want;
      }).length;
    };
    var html = EMIRATES.map(function (e) {
      var n = ROADS ? roadsFor(e.id) : STREETS.filter(function (s) { return s.emirate === e.id; }).length;
      return '<div class="stat"><dt>' + esc(e[state.lang]) + "</dt><dd>" + n.toLocaleString(state.lang === "ar" ? "ar-EG" : "en") + "</dd></div>";
    }).join("");
    var total = (ROADS && ROADS.rows.length) || STREETS.length;
    html += '<div class="stat stat--total"><dt>' +
      (state.lang === "ar" ? "المجموع" : "Total") + "</dt><dd>" + total.toLocaleString(state.lang === "ar" ? "ar-EG" : "en") + "</dd></div>";
    box.innerHTML = html;
  }

  /* ---------- url state (shareable views) ---------- */
  function syncUrl() {
    var p = new URLSearchParams();
    if (state.emirate !== "all") p.set("emirate", state.emirate);
    if (state.category !== "all") p.set("category", state.category);
    if (state.region !== "all") p.set("region", state.region); if (state.town !== "all") p.set("town", state.town); if (state.district !== "all") p.set("district", state.district);
    if (state.q) p.set("q", state.q);
    if (state.lang === "ar") p.set("lang", "ar");
    var dt = document.documentElement.getAttribute("data-theme");
    if (dt === "dark" || dt === "light") p.set("theme", dt);
    var qs = p.toString();
    var hash = currentId ? "#street=" + currentId : "";
    try { history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + hash); } catch (e) {}
  }

  /* ---------- the sheet ---------- */
  function openStreet(id, opts) {
    opts = opts || {};
    var s = STREETS.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    var em = emirateOf(s.emirate);
    var cat = categoryOf(s.category);
    var sheet = $("#sheet");
    var body = $("#sheet-body");
    if (!sheet || !body) return;

    if (!sheet.open) lastTrigger = document.activeElement;

    var idx = results.findIndex(function (x) { return x.id === id; });
    var prev = idx > 0 ? results[idx - 1] : null;
    var next = idx > -1 && idx < results.length - 1 ? results[idx + 1] : null;

    var story = s.story ? (s.story[state.lang] || s.story.en) : "";
    var meaning = s.meaning ? (s.meaning[state.lang] || s.meaning.en) : "";
    var origin = s.origin || "documented";

    // Same rule as the cards: the reader's language is the heading, and first.
    var titleBlock = state.lang === "ar"
      ? '<h2 class="sheet__ar" id="sheet-title" lang="ar" dir="rtl">' + esc(s.ar) + "</h2>" +
        '<p class="sheet__en" dir="ltr">' + esc(s.en) + "</p>"
      : '<h2 class="sheet__en" id="sheet-title" dir="ltr">' + esc(s.en) + "</h2>" +
        '<p class="sheet__ar" lang="ar" dir="rtl">' + esc(s.ar) + "</p>";

    body.innerHTML =
      '<div class="sheet__head">' +
        '<p class="sheet__emirate">' + esc(em[state.lang]) + " · " + esc(cat[state.lang]) + "</p>" +
        titleBlock +
        (s.translit ? '<p class="sheet__translit" dir="ltr">' + esc(s.translit) + "</p>" : "") +
        (s.route ? '<p class="sheet__route">' + esc(T.route) + " " + esc(s.route) + "</p>" : "") +
        (s.now ? '<p class="sheet__rename">' + esc(T.now) + " " + esc(s.now[state.lang]) + "</p>" : "") +
        (s.former ? '<p class="sheet__rename">' + esc(T.formerly) + " " + esc(s.former[state.lang]) + "</p>" : "") +
        '<div class="sheet__tags">' +
          '<span class="sheet__tag">' + esc(T.categoryNoun[s.category] || "") + "</span>" +
          '<span class="sheet__tag sheet__tag--origin' + (origin === "local" ? " is-local" : origin === "account" ? " is-account" : origin === "unsourced" ? " is-unsourced" : "") + '">' +
            esc(origin === "account" ? T.originAccount : origin === "unsourced" ? T.originUnsourced : origin === "local" ? T.originLocal : T.originDocumented) + "</span>" +
        "</div>" +
      "</div>" +
      (meaning
        ? '<div class="sheet__meaning"><span class="sheet__meaning-label">' + esc(T.meaning) + "</span>" +
          '<p class="sheet__meaning-text">' + esc(meaning) + "</p></div>"
        : "") +
      '<div class="sheet__story"><p>' + esc(story) + "</p></div>" +
      '<p class="sheet__caveat">' + esc(origin === "account" ? T.caveatAccount : origin === "unsourced" ? T.caveatUnsourced : origin === "local" ? T.caveatLocal : (T["caveat" + (s.category ? s.category.charAt(0).toUpperCase() + s.category.slice(1) : "")] || T.caveatDocumented)) + "</p>" +
      '<div class="sheet__footer">' +
        (s.refs && s.refs.length
          ? '<div><span class="sheet__meaning-label">' + esc(T.sources) + "</span>" +
            '<div class="sheet__refs">' + s.refs.map(function (r) {
              return '<a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' +
                "↗ " + esc(r.label) + "</a>";
            }).join("") + "</div></div>"
          : "") +
        '<div class="sheet__nav">' +
          '<button type="button" class="btn" data-nav="prev"' + (prev ? "" : " disabled") + ">" +
            (state.lang === "ar" ? "→ " : "← ") + esc(T.prev) + "</button>" +
          '<button type="button" class="btn" data-nav="next"' + (next ? "" : " disabled") + ">" +
            esc(T.next) + (state.lang === "ar" ? " ←" : " →") + "</button>" +
        "</div>" +
      "</div>";

    var hint = $("#sheet-hint");
    if (hint) hint.textContent = T.sheetHint + " " + (idx > -1 ? (idx + 1) + "/" + results.length : "");

    var prevBtn = body.querySelector('[data-nav="prev"]');
    var nextBtn = body.querySelector('[data-nav="next"]');
    if (prevBtn) prevBtn.onclick = function () { if (prev) openStreet(prev.id); };
    if (nextBtn) nextBtn.onclick = function () { if (next) openStreet(next.id); };

    currentId = id;
    if (!sheet.open) sheet.showModal();
    body.scrollTop = 0;

    if (opts.hash !== false) syncUrl();
  }

  function closeSheet() {
    var sheet = $("#sheet");
    if (sheet && sheet.open) sheet.close();
  }

  /* ---------- theme ---------- */
  var themeMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemTheme() { return themeMedia && themeMedia.matches ? "dark" : "light"; }

  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    return (t === "light" || t === "dark") ? t : systemTheme();
  }

  function renderThemeIcon() {
    var btn = $("#theme-toggle");
    if (!btn) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    var label = next === "dark" ? T.themeToDark : T.themeToLight;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
    btn.innerHTML = next === "dark"
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a6.9 6.9 0 0 0 11.1 11.1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  }

  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("uae-streets-theme", next); } catch (e) {}
    renderThemeIcon();
  }

  /* ---------- language ---------- */
  function applyLanguage(lang, opts) {
    opts = opts || {};
    state.lang = lang === "ar" ? "ar" : "en";
    T = TEXT[state.lang];

    var html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === "ar" ? "rtl" : "ltr";

    $$("[data-en]").forEach(function (el) {
      var v = el.getAttribute("data-" + state.lang);
      if (v != null) el.textContent = v;
    });
    $$("[data-en-placeholder]").forEach(function (el) {
      var v = el.getAttribute("data-" + state.lang + "-placeholder");
      if (v != null) el.placeholder = v;
    });

    // Links that point at a language-specific page (the Arabic issue forms).
    $$("[data-href-en]").forEach(function (el) {
      var v = el.getAttribute("data-href-" + state.lang);
      if (v) el.setAttribute("href", v);
    });

    $$(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === state.lang));
    });

    var search = $("#search");
    if (search) search.setAttribute("aria-label", T.searchLabel);

    document.title = state.lang === "ar"
      ? "شوارع الإمارات — قصص الأسماء"
      : "UAE Streets — the stories behind the names";

    try { localStorage.setItem("uae-streets-lang", state.lang); } catch (e) {}

    refreshChipLabels();
    renderStats();
    renderThemeIcon();
    update(false);

    if (currentId) openStreet(currentId, { hash: false });
    if (opts.persist !== false) { /* stored above */ }
  }

  /* ---------- main update ---------- */
  function update(animate) {
    if (!ROADS) { loadRoads(function () { update(false); }); }
    results = filterStreets();
    renderGrid(animate !== false);
    refreshChipCounts();
    renderTownChips();
    renderDistrictChips();
    renderChrome();
    syncUrl();
  }

  /* ---------- events ---------- */
  function bind() {
    var search = $("#search");
    var clearBtn = $("#search-clear");
    var resetBtn = $("#reset");
    var shuffle = $("#shuffle");

    if (search) {
      search.addEventListener("input", function () {
        if (!ROADS && search.value.trim()) loadRoads(function () { update(false); });
        state.q = search.value;
        state.roadsShown = ROAD_PAGE;
        state.limit = PAGE;
        if (search.value.trim()) state.showRoads = true;
        update(false);
      });
      search.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { search.value = ""; state.q = ""; update(false); search.blur(); }
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (search) { search.value = ""; search.focus(); }
        state.q = ""; update(false);
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        state.q = ""; state.emirate = "all"; state.category = "all"; state.district = "all";
        state.showRoads = false;
        if (search) search.value = "";
        update(true);
      });
    }
    window.addEventListener("hashchange", function () {
      var rm = /#road=(\d+)/.exec(location.hash);
      if (rm) openRoadSheet(Number(rm[1]));
    });
    if (shuffle) {
      shuffle.addEventListener("click", function () {
        if (!results.length) return;
        var pick = results[Math.floor(Math.random() * results.length)];
        openStreet(pick.id);
      });
    }

    ["#emirate-chips", "#category-chips", "#district-chips", "#region-chips", "#town-chips"].forEach(function (sel) {
      var wrap = $(sel);
      if (!wrap) return;
      wrap.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (!chip) return;
        var group = chip.getAttribute("data-group");
        var value = chip.getAttribute("data-value");
        if (sel === "#town-chips") {
        state.town = chip.getAttribute("data-town");
        state.district = "all";
        state.limit = PAGE;
        update(true);
        return;
      }
      if (sel === "#region-chips") { state.region = chip.getAttribute("data-region"); state.district = "all"; state.town = "all"; state.limit = PAGE; if (!ROADS) loadRoads(function () { update(true); }); else update(true); return; }
        if (group === "emirate") { state.emirate = value; state.region = "all"; state.district = "all"; state.town = "all"; }
        if (group === "category") state.category = value;
        if (group === "district") state.district = value;
        state.limit = PAGE;
        state.showRoads = true;
        update(true);
      });
    });

    var grid = $("#grid");
    if (grid) {
      grid.addEventListener("click", function (e) {
        var card = e.target.closest(".card");
        if (!card) return;
        // let modifier-clicks open the hash link normally
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        openStreet(card.getAttribute("data-id"));
      });
    }

    var closeBtn = $("#sheet-close");
    if (closeBtn) closeBtn.addEventListener("click", closeSheet);

    var sheet = $("#sheet");
    if (sheet) {
      sheet.addEventListener("click", function (e) {
        if (e.target === sheet) { // click on backdrop
          var r = sheet.getBoundingClientRect();
          var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
          if (!inside) closeSheet();
        }
      });
      sheet.addEventListener("close", function () {
        currentId = null;
        syncUrl();
        if (lastTrigger && document.contains(lastTrigger)) {
          try { lastTrigger.focus(); } catch (e) {}
        }
      });
    }

    $$(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    var themeBtn = $("#theme-toggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    if (themeMedia && themeMedia.addEventListener) {
      themeMedia.addEventListener("change", function () {
        if (!document.documentElement.getAttribute("data-theme")) renderThemeIcon();
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        var t = e.target;
        var typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
        if (!typing && !(sheet && sheet.open)) {
          e.preventDefault();
          if (search) search.focus();
        }
      }
    });
  }

  /* ---------- boot ---------- */
  function setTotals() {
    var el = document.getElementById("total-count");
    if (!el) return;
    var n = (window.ROADS && window.ROADS.rows && window.ROADS.rows.length) || STREETS.length;
    el.textContent = n.toLocaleString(state.lang === "ar" ? "ar-EG" : "en");
  }

  function boot() {
    var params = new URLSearchParams(location.search);
    // read the deep link before anything rewrites the address bar
    var deepHash = location.hash || "";

    var themeParam = params.get("theme");
    if (themeParam === "dark" || themeParam === "light") {
      document.documentElement.setAttribute("data-theme", themeParam);
    }

    var saved = null;
    try { saved = localStorage.getItem("uae-streets-lang"); } catch (e) {}
    var param = params.get("lang");
    var initial = param === "ar" || param === "en" ? param : (saved === "ar" ? "ar" : "en");

    T = TEXT[initial];
    buildChips();
    bind();

    // restore filters from the URL so a filtered view can be shared
    var emParam = params.get("emirate");
    if (emParam && EMIRATES.some(function (e) { return e.id === emParam; })) state.emirate = emParam;
    var catParam = params.get("category");
    if (catParam && CATEGORIES.some(function (c) { return c.id === catParam; })) state.category = catParam;
    var rParam = params.get("region");
    if (rParam) state.region = rParam;
    var tParam = params.get("town");
    if (tParam) state.town = tParam;
    var dParam = params.get("district");
    if (dParam) state.district = dParam;
    var qParam = params.get("q");
    if (qParam) {
      state.q = qParam;
      if ($("#search")) $("#search").value = qParam;
    }
    if (state.q || state.emirate !== "all" || state.category !== "all") state.showRoads = true;

    applyLanguage(initial);

    var rm = /#road=(\d+)/.exec(deepHash);
    if (rm) {
      state.showRoads = true;
      var ridx = Number(rm[1]);
      if (!ROADS) loadRoads(function () { update(false); openRoadSheet(ridx); });
      else openRoadSheet(ridx);
    }
    var m = /#street=([\w-]+)/.exec(deepHash);
    if (m) {
      var id = m[1];
      var exists = STREETS.some(function (s) { return s.id === id; });
      if (exists) {
        // a shared link may point at a street the current filters hide
        if (!results.some(function (s) { return s.id === id; })) {
          state.emirate = "all"; state.category = "all"; state.q = "";
          if ($("#search")) $("#search").value = "";
          update(false);
        }
        openStreet(id);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    setTotals();
    boot();
  }
})();
