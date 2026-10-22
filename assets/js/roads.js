/* Card grid for every road. Reads data/cards.js (compact index) — never the KB. */
(function () {
  var DATA = window.ROADS || { emirates: {}, districts: [], rows: [] };
  var PAGE = 60;

  var CAT_EN = { person: "People", place: "Places", word: "Words", tribe: "Tribes", event: "Events" };
  var CAT_AR = { person: "الشخصيات", place: "الأماكن", word: "الكلمات", tribe: "القبائل", event: "الأحداث" };

  var state = { lang: "en", q: "", emirate: "all", category: "all", shown: PAGE };

  var grid = document.getElementById("grid");
  var countEl = document.getElementById("count");
  var moreBtn = document.getElementById("more");
  var input = document.getElementById("q");
  var emSel = document.getElementById("em");
  var catSel = document.getElementById("cat");

  function norm(s) {
    return String(s == null ? "" : s).toLowerCase()
      .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
      .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627")
      .replace(/\u0649/g, "\u064A")
      .replace(/\u0629/g, "\u0647")
      .replace(/[\u2019'\u02BC`]/g, "")
      .replace(/\s+/g, " ").trim();
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function num(n) { return n.toLocaleString(state.lang === "ar" ? "ar-EG" : "en"); }
  function t(en, ar) { return state.lang === "ar" ? ar : en; }

  /* rows: [en, ar, districtIndex, category, route, former, gloss, storyId] */
  var rows = DATA.rows.map(function (r) {
    var d = r[2] >= 0 ? DATA.districts[r[2]] : null;
    return {
      en: r[0], ar: r[1], district: d, cat: r[3], ref: r[4], former: r[5], gloss: r[6], story: r[7],
      ne: norm(r[0]), na: norm(r[1]), nd: norm(d ? d[0] : "")
    };
  });

  var byEmirate = {};
  rows.forEach(function (r) {
    if (!r.district) return;
    byEmirate[r.district[2]] = (byEmirate[r.district[2]] || 0) + 1;
  });

  function buildControls() {
    var allEm = document.createElement("option");
    allEm.value = "all";
    allEm.textContent = t("All emirates", "كل الإمارات");
    emSel.appendChild(allEm);
    var allCat = document.createElement("option");
    allCat.value = "all";
    allCat.textContent = t("Any name", "أي اسم");
    catSel.appendChild(allCat);
    Object.keys(DATA.emirates).forEach(function (id) {
      var label = DATA.emirates[id][state.lang === "ar" ? 1 : 0];
      var o = document.createElement("option");
      o.value = id;
      o.textContent = label + " (" + num(byEmirate[id] || 0) + ")";
      emSel.appendChild(o);
    });
    Object.keys(CAT_EN).forEach(function (c) {
      var o = document.createElement("option");
      o.value = c;
      o.textContent = state.lang === "ar" ? CAT_AR[c] : CAT_EN[c];
      catSel.appendChild(o);
    });
  }

  function filtered() {
    var q = norm(state.q);
    var tokens = q ? q.split(" ").filter(Boolean) : [];
    return rows.filter(function (r) {
      if (state.emirate !== "all" && (!r.district || r.district[2] !== state.emirate)) return false;
      if (state.category !== "all" && r.cat !== state.category) return false;
      for (var i = 0; i < tokens.length; i++) {
        var tok = tokens[i];
        if (r.ne.indexOf(tok) === -1 && r.na.indexOf(tok) === -1 && r.nd.indexOf(tok) === -1) return false;
      }
      return true;
    });
  }

  function card(r) {
    var href = r.story
      ? "index.html#street=" + encodeURIComponent(r.story)
      : r.district ? "directory/" + r.district[2] + "/" + String(r.district[3]).replace(/[^\w-]/g, "_") + ".html" : "directory/index.html";
    var where = r.district ? (state.lang === "ar" ? (r.district[1] || r.district[0]) : r.district[0]) : t("no district", "بلا حي");
    var em = r.district ? DATA.emirates[r.district[2]][state.lang === "ar" ? 1 : 0] : "";
    var chips = '<span class="rcard__chip">' + esc(state.lang === "ar" ? CAT_AR[r.cat] : CAT_EN[r.cat]) + "</span>";
    if (r.ref) chips += '<span class="rcard__chip">' + esc(t("Route ", "الطريق ") + r.ref) + "</span>";
    if (r.story) chips += '<span class="rcard__chip rcard__chip--story">' + esc(t("story", "قصة")) + "</span>";
    var lines = "";
    if (r.former) lines += '<span class="rcard__line">' + esc(t("formerly ", "سابقاً ") + r.former) + "</span>";
    if (r.gloss) lines += '<span class="rcard__gloss" dir="rtl" lang="ar">' + esc(r.ar) + " — " + esc(r.gloss) + "</span>";
    return '<a class="rcard" href="' + esc(href) + '">' +
      '<span class="rcard__en">' + esc(r.en || r.ar) + "</span>" +
      '<span class="rcard__ar" lang="ar" dir="rtl">' + esc(r.ar) + "</span>" +
      '<span class="rcard__where">' + esc(where) + (em ? " · " + esc(em) : "") + "</span>" +
      '<span class="rcard__meta">' + chips + "</span>" +
      lines +
      "</a>";
  }

  function render() {
    var list = filtered();
    var page = list.slice(0, state.shown);
    grid.innerHTML = page.map(card).join("");
    countEl.textContent = t(
      num(page.length) + " of " + num(list.length) + " roads",
      num(page.length) + " من " + num(list.length) + " طريقاً"
    );
    moreBtn.hidden = list.length <= state.shown;
    moreBtn.textContent = t("Show more", "عرض المزيد");
  }

  function applyLang(l) {
    state.lang = l;
    document.documentElement.lang = l === "ar" ? "ar" : "en";
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-en]").forEach(function (el) {
      var v = el.getAttribute(l === "ar" ? "data-ar" : "data-en");
      if (v !== null) el.textContent = v;
    });
    document.querySelectorAll("[data-placeholder-en]").forEach(function (el) {
      el.placeholder = el.getAttribute(l === "ar" ? "data-placeholder-ar" : "data-placeholder-en");
    });
    var title = document.documentElement.getAttribute(l === "ar" ? "data-title-ar" : "data-title-en");
    if (title) document.title = title;
    document.getElementById("lang").textContent = l === "ar" ? "English" : "العربية";
    try { localStorage.setItem("roads-lang", l); } catch (e) {}
    emSel.innerHTML = "";
    catSel.innerHTML = "";
    buildControls();
    emSel.value = state.emirate;
    catSel.value = state.category;
    render();
  }

  input.addEventListener("input", function () {
    state.q = input.value;
    state.shown = PAGE;
    render();
  });
  emSel.addEventListener("change", function () { state.emirate = emSel.value; state.shown = PAGE; render(); });
  catSel.addEventListener("change", function () { state.category = catSel.value; state.shown = PAGE; render(); });
  moreBtn.addEventListener("click", function () { state.shown += PAGE; render(); });
  document.getElementById("lang").addEventListener("click", function () {
    applyLang(state.lang === "ar" ? "en" : "ar");
  });

  buildControls();
  var stored = "en";
  try { stored = localStorage.getItem("roads-lang") || "en"; } catch (e) {}
  applyLang(stored);
})();
