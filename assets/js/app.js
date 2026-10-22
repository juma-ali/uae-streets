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
      caveatDocumented: "The person, event or landmark behind this name is on the record.",
      caveatLocal: "This explanation is widely told locally, but it is not officially recorded — treat it as oral history.",
      caveatAccount: "This account is recorded by the project; no published source is cited.",
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
      caveatDocumented: "الشخص أو الحدث أو المعلم الذي يحمل الشارع اسمه مسجّل وموثّق.",
      caveatLocal: "هذا التفسير شائع محلياً لكنه غير مسجّل رسمياً — تعامل معه كتاريخ شفهي.",
      caveatAccount: "هذه الرواية مسجّلة في المشروع، ولا يُذكر مصدر منشور.",
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

  function format(tpl, vars) {
    return tpl.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  }

  function emirateOf(id) {
    for (var i = 0; i < EMIRATES.length; i++) if (EMIRATES[i].id === id) return EMIRATES[i];
    return { id: id, en: id, ar: id };
  }
  function categoryOf(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return { id: id, en: id, ar: id, color: "#999" };
  }

  /* ---------- state ---------- */
  var STREETS = (window.STREETS || []).slice();
  var state = { lang: "en", q: "", emirate: "all", category: "all" };
  var results = [];
  var currentId = null;
  var lastTrigger = null;
  var T;               // active text pack

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
  var ORDER = EMIRATES.map(function (e) { return e.id; });
  STREETS.sort(function (a, b) {
    var d = ORDER.indexOf(a.emirate) - ORDER.indexOf(b.emirate);
    return d !== 0 ? d : a.en.localeCompare(b.en);
  });

  /* ---------- filtering ---------- */
  function filterStreets() {
    var q = norm(state.q);
    var tokens = q ? q.split(" ").filter(Boolean) : [];
    return STREETS.filter(function (s) {
      if (state.emirate !== "all" && s.emirate !== state.emirate) return false;
      if (state.category !== "all" && s.category !== state.category) return false;
      if (!tokens.length) return true;
      return tokens.every(function (t) { return s._index.indexOf(t) !== -1; });
    });
  }

  /* ---------- render: chips ---------- */
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
      var n = STREETS.filter(function (s) {
        if (v !== "all" && s.emirate !== v) return false;
        if (state.category !== "all" && s.category !== state.category) return false;
        var q = norm(state.q);
        if (!q) return true;
        return q.split(" ").filter(Boolean).every(function (t) { return s._index.indexOf(t) !== -1; });
      }).length;
      chip.querySelector(".chip__count").textContent = n;
      chip.setAttribute("aria-pressed", String(state.emirate === v));
    });

    $$('#category-chips .chip').forEach(function (chip) {
      var v = chip.getAttribute("data-value");
      var n = STREETS.filter(function (s) {
        if (v !== "all" && s.category !== v) return false;
        if (state.emirate !== "all" && s.emirate !== state.emirate) return false;
        var q = norm(state.q);
        if (!q) return true;
        return q.split(" ").filter(Boolean).every(function (t) { return s._index.indexOf(t) !== -1; });
      }).length;
      chip.querySelector(".chip__count").textContent = n;
      chip.setAttribute("aria-pressed", String(state.category === v));
    });
  }

  /* ---------- render: grid ---------- */
  function renderGrid(animate) {
    var grid = $("#grid");
    if (!grid) return;

    grid.classList.toggle("grid--animate", !!animate);

    grid.innerHTML = results.map(function (s, i) {
      var em = emirateOf(s.emirate);
      var cat = categoryOf(s.category);
      var meaning = s.meaning ? s.meaning[state.lang] : "";
      var originLabel = s.origin === "account" ? T.originAccount : s.origin === "local" ? T.originLocal : T.originDocumented;
      // The name in the reader's own language is the heading and comes first.
      var nameBlock = state.lang === "ar"
        ? '<h3 class="card__ar" lang="ar" dir="rtl">' + esc(s.ar) + "</h3>" +
          '<p class="card__en" dir="ltr">' + esc(s.en) + "</p>"
        : '<h3 class="card__en" dir="ltr">' + esc(s.en) + "</h3>" +
          '<p class="card__ar" lang="ar" dir="rtl">' + esc(s.ar) + "</p>";
      return (
        '<a class="card" href="#street=' + esc(s.id) + '" data-id="' + esc(s.id) + '" ' +
          'style="--cat:' + cat.color + ';--i:' + Math.min(i, 14) + '" ' +
          'aria-label="' + esc((state.lang === "ar" ? s.ar : s.en) + " — " + em[state.lang]) + '">' +
          '<div class="card__top">' +
            '<span class="card__emirate">' + esc(em[state.lang]) + "</span>" +
            '<span class="badge badge--' + (s.origin === "local" ? "local" : "documented") + '">' + esc(originLabel) + "</span>" +
          "</div>" +
          nameBlock +
          (meaning ? '<p class="card__meaning">' + esc(meaning) + "</p>" : "") +
          '<div class="card__foot">' +
            '<span class="card__tag">' + esc(T.categoryNoun[s.category] || cat[state.lang]) + "</span>" +
            '<span class="card__more">' + esc(T.read) + ' <span class="arrow" aria-hidden="true">→</span></span>' +
          "</div>" +
        "</a>"
      );
    }).join("");

    $("#empty").hidden = results.length !== 0;
  }

  /* ---------- render: count + title ---------- */
  function renderChrome() {
    var n = results.length;
    var total = STREETS.length;
    var isFiltered = !!(state.q || state.emirate !== "all" || state.category !== "all");

    var countEl = $("#result-count");
    if (countEl) {
      countEl.textContent = isFiltered
        ? format(T.countFiltered, { n: n, total: total })
        : (n === 1 ? T.countOne : format(T.countMany, { n: n }));
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

    var shuffleBtn = $("#shuffle");
    if (shuffleBtn) shuffleBtn.disabled = results.length === 0;

    var clear = $("#search-clear");
    if (clear) clear.hidden = !state.q;
  }

  /* ---------- stats ---------- */
  function renderStats() {
    var box = $("#stats");
    if (!box) return;
    var html = EMIRATES.map(function (e) {
      var n = STREETS.filter(function (s) { return s.emirate === e.id; }).length;
      return '<div class="stat"><dt>' + esc(e[state.lang]) + "</dt><dd>" + n + "</dd></div>";
    }).join("");
    html += '<div class="stat stat--total"><dt>' +
      (state.lang === "ar" ? "المجموع" : "Total") + "</dt><dd>" + STREETS.length + "</dd></div>";
    box.innerHTML = html;
  }

  /* ---------- url state (shareable views) ---------- */
  function syncUrl() {
    var p = new URLSearchParams();
    if (state.emirate !== "all") p.set("emirate", state.emirate);
    if (state.category !== "all") p.set("category", state.category);
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
          '<span class="sheet__tag sheet__tag--origin' + (origin === "local" ? " is-local" : origin === "account" ? " is-account" : "") + '">' +
            esc(origin === "account" ? T.originAccount : origin === "local" ? T.originLocal : T.originDocumented) + "</span>" +
        "</div>" +
      "</div>" +
      (meaning
        ? '<div class="sheet__meaning"><span class="sheet__meaning-label">' + esc(T.meaning) + "</span>" +
          '<p class="sheet__meaning-text">' + esc(meaning) + "</p></div>"
        : "") +
      '<div class="sheet__story"><p>' + esc(story) + "</p></div>" +
      '<p class="sheet__dir"><a href="directory/search.html?q=' + encodeURIComponent(s.en) + '">' +
        (state.lang === "ar" ? "ابحث عنه في دليل الشوارع ←" : "Find it in the street directory →") +
        "</a></p>" +
      '<p class="sheet__caveat">' + esc(origin === "account" ? T.caveatAccount : origin === "local" ? T.caveatLocal : T.caveatDocumented) + "</p>" +
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
    results = filterStreets();
    renderGrid(animate !== false);
    refreshChipCounts();
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
        state.q = search.value;
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
        state.q = ""; state.emirate = "all"; state.category = "all";
        if (search) search.value = "";
        update(true);
      });
    }
    if (shuffle) {
      shuffle.addEventListener("click", function () {
        if (!results.length) return;
        var pick = results[Math.floor(Math.random() * results.length)];
        openStreet(pick.id);
      });
    }

    ["#emirate-chips", "#category-chips"].forEach(function (sel) {
      var wrap = $(sel);
      if (!wrap) return;
      wrap.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (!chip) return;
        var group = chip.getAttribute("data-group");
        var value = chip.getAttribute("data-value");
        if (group === "emirate") state.emirate = value;
        if (group === "category") state.category = value;
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
    if (el) el.textContent = STREETS.length;
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
    var qParam = params.get("q");
    if (qParam) {
      state.q = qParam;
      if ($("#search")) $("#search").value = qParam;
    }

    applyLanguage(initial);

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
