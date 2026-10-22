#!/usr/bin/env node
/**
 * Generates the static street directory from data/kb.js:
 *
 *   directory/index.html                      emirates
 *   directory/<emirate>/index.html            districts in that emirate
 *   directory/<emirate>/<area>.html           the street table
 *   directory/search.html + search-index.js   search
 *
 * Bilingual: every piece of chrome carries data-en/data-ar and the toggle swaps
 * it, flips the document to RTL, and remembers the choice. Street names are
 * already bilingual in the data, so they are not duplicated here.
 *
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = root + "directory";

const load = (file, global) => {
  const box = {};
  new Function("window", readFileSync(file, "utf8"))(box);
  return box[global];
};
const KB = load(root + "data/kb.js", "KB");
const EDITORIAL = load(root + "data/streets.js", "STREETS");
const GLOSSES = (() => { try { return load(root + "data/dictionary.js", "STREET_GLOSSES"); } catch { return {}; } })();
const CATEGORIES = (() => { try { return load(root + "data/categories.js", "STREET_CATEGORIES"); } catch { return {}; } })();
/* A gloss explains a word. It must not be printed for a street named after a
   person, a tribe or an event — "Al Habeeb" is someone's name, not "the beloved". */
const glossFor = (s) => {
  const c = CATEGORIES[s.osm];
  if (c !== "place" && c !== "word") return "";
  return GLOSSES[headArOf(s.name_ar)] || "";
};

/* The guide's name for a street and OSM's name for it differ in 3 cases; these
   aliases are the whole fix. The other 5 stories have no mapped street at all. */
const ALIAS = {
  "Al Najda Street": "Sheikha Fatima bint Mubarak Street",
  "Oud Metha Road": "Oud Maitha Road",
  "Sheikh Mohammed bin Salem Street": "Sheikh Mohammad Bin Salem Road",
};

const headArOf = (s) => String(s || "")
  .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
  .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
  .replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "")
  .split(" ")[0].replace(/^ال/, "").trim();

const normName = (s) =>
  String(s || "").toLowerCase()
    .replace(/\b(street|road|st|rd|avenue)\b/g, " ")
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ").replace(/\s+/g, " ").trim();

const byName = new Map();
const globalByName = new Map(); // a name is the same road family in every emirate
const globalRows = new Map(); // normalised English name → every row carrying it
for (const s of KB.streets) {
  byName.set(normName(s.name_en) + "|" + s.emirate, s);
  byName.set(normName(s.name_ar) + "|" + s.emirate, s);
  if (s.old_name_en) byName.set(normName(s.old_name_en) + "|" + s.emirate, s);
  if (s.old_name_ar) byName.set(normName(s.old_name_ar) + "|" + s.emirate, s);
  for (const nm of [s.name_en, s.old_name_en]) {
    const k = normName(nm);
    if (!k) continue;
    if (!globalByName.has(k)) globalByName.set(k, s);
    if (!globalRows.has(k)) globalRows.set(k, []);
    if (!globalRows.get(k).includes(s)) globalRows.get(k).push(s);
  }
}
/* storyOf[osm] = editorial id, so a table row can link back to the guide. */
const storyOf = new Map(); // osm -> [editorial ids]
const unlinked = [];
/* Spelling variants of one name (Itihad / Etihad / Ittihad) should all reach
   the same card; otherwise the guide looks like it covers only one emirate. */
const SYNONYMS = {
  "Al Ittihad Road": ["Al Itihad Street", "Al Etihad road", "Al Ittihad Street", "Al Etihad Road"],
  "Al Istiqlal Street": ["Al Estiqlal Street"],
  "Al Wahda Street": ["Al Wahdah Street", "Al Wehdah Street"],
};

for (const e of EDITORIAL) {
  const candidates = [e.en, ALIAS[e.en], ...(SYNONYMS[e.en] || [])].filter(Boolean);
  let hit = null;
  const matched = new Set();
  for (const nm of candidates) {
    for (const s of globalRows.get(normName(nm)) || []) matched.add(s);
    const local = byName.get(normName(nm) + "|" + e.emirate);
    if (local) matched.add(local);
  }
  // the Arabic name is a name too, but only inside its emirate: different roads
  // share an Arabic name across the country ("شارع البحيرة" is Lake Drive too)
  const localAr = byName.get(normName(e.ar) + "|" + e.emirate);
  if (localAr) matched.add(localAr);

  if (matched.size) {
    for (const s of matched) {
      if (!storyOf.has(s.osm)) storyOf.set(s.osm, []);
      storyOf.get(s.osm).push({ id: e.id, label: e.en });
    }
  } else unlinked.push(e.en);
}
console.log(`stories : ${EDITORIAL.length - unlinked.length} cards → ${storyOf.size} street rows` + (unlinked.length ? ` · unmapped: ${unlinked.join(", ")}` : ""));

const esc = (s) =>
  String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Arabic-Indic digits in Arabic mode, Western digits in English. */
const fmt = (n, lang) => Number(n).toLocaleString(lang === "ar" ? "ar-EG" : "en");

/* One bilingual string: renders English, swaps to Arabic on toggle. */
const bi = (en, ar) =>
  `<span data-en="${esc(en)}" data-ar="${esc(ar)}">${esc(en)}</span>`;

const EMIRATE_EN = {
  "abu-dhabi": "Abu Dhabi",
  dubai: "Dubai",
  sharjah: "Sharjah",
  ajman: "Ajman",
  "umm-al-quwain": "Umm Al Quwain",
  "ras-al-khaimah": "Ras Al Khaimah",
  fujairah: "Fujairah",
};
const EMIRATE_AR = {
  "abu-dhabi": "أبو ظبي",
  dubai: "دبي",
  sharjah: "الشارقة",
  ajman: "عجمان",
  "umm-al-quwain": "أم القيوين",
  "ras-al-khaimah": "رأس الخيمة",
  fujairah: "الفجيرة",
};
const emEn = (id) => EMIRATE_EN[id] || id;
const emAr = (id) => EMIRATE_AR[id] || EMIRATE_EN[id] || id;

const css = `
:root{--paper:#faf5ec;--card:#fffdf8;--ink:#211b14;--ink2:#4c4337;--ink3:#7d7263;--line:#e6dac6;--accent:#a94f22}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 "Inter",system-ui,-apple-system,"Segoe UI",sans-serif}
html[lang="ar"] body{font-family:"Noto Naskh Arabic",Georgia,serif;line-height:1.9}
.wrap{width:min(100% - 2.5rem,940px);margin-inline:auto;padding-block:2rem 3rem}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
h1{font-family:Georgia,serif;font-size:clamp(1.5rem,3vw,2.1rem);margin:.2rem 0 .4rem;letter-spacing:-.01em;line-height:1.2}
html[lang="ar"] h1{letter-spacing:0}
.crumb{font-size:.78rem;color:var(--ink3);margin-bottom:.6rem}
.crumb a{color:var(--ink3)}
.lede{color:var(--ink2);max-width:60ch;margin:0 0 1.6rem}
ul.list{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}
ul.list a{display:flex;justify-content:space-between;gap:1rem;padding:.55rem .8rem;background:var(--card);border:1px solid var(--line);border-radius:10px;color:var(--ink)}
ul.list a:hover{border-color:var(--ink3);text-decoration:none}
.count{color:var(--ink3);font-variant-numeric:tabular-nums;font-size:.85rem}
table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
th,td{text-align:start;padding:.5rem .8rem;border-bottom:1px solid var(--line);font-size:.92rem;vertical-align:top}
th{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);font-weight:600}
tr:last-child td{border-bottom:0}
td.ar{direction:rtl;text-align:right;font-size:1.05rem;min-width:12rem}
td.kind{color:var(--ink3);font-size:.8rem;white-space:nowrap}
.searchbox{display:flex;gap:.5rem;align-items:center;margin:0 0 1.4rem;flex-wrap:wrap}
.searchbox input{flex:1;min-width:14rem;font:inherit;padding:.6rem .85rem;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink)}
.searchbox input:focus{outline:2px solid var(--accent);outline-offset:1px}
ul.list small.where{color:var(--ink3)}
.note{margin-top:2rem;padding:.9rem 1rem;border:1px solid var(--line);border-radius:10px;background:var(--card);font-size:.8rem;color:var(--ink3)}
footer{margin-top:2.5rem;font-size:.78rem;color:var(--ink3);border-top:1px solid var(--line);padding-top:1rem}
.langbtn{position:fixed;top:.8rem;inset-inline-end:1rem;z-index:20;font:inherit;font-size:.78rem;padding:.35rem .8rem;border:1px solid var(--line);border-radius:99px;background:var(--card);color:var(--ink);cursor:pointer}
.langbtn:hover{border-color:var(--ink3)}
.badge{display:inline-block;font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;padding:.05rem .4rem;border:1px solid var(--accent);border-radius:99px;color:var(--accent);vertical-align:middle;text-decoration:none}
.badge:hover{background:var(--accent);color:#fff;text-decoration:none}
ul.gloss,small.gloss{color:var(--ink3);font-size:.78rem;direction:ltr}
small.gloss{direction:rtl;text-align:right;display:inline-block;margin-top:.15rem}
small.meta{color:var(--ink3);font-size:.75rem}
`;

const SCRIPT = `
(function () {
  var KEY = "directory-lang";
  var q = new URLSearchParams(location.search).get("lang");
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  var lang = q || stored() || (document.documentElement.lang === "ar" ? "ar" : "en");

  function apply(l) {
    var ar = l === "ar";
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
    document.querySelectorAll("[data-en]").forEach(function (el) {
      var v = el.getAttribute(ar ? "data-ar" : "data-en");
      if (v !== null) el.textContent = v;
    });
    document.querySelectorAll("[data-placeholder-en]").forEach(function (el) {
      el.placeholder = el.getAttribute(ar ? "data-placeholder-ar" : "data-placeholder-en");
    });
    var t = document.documentElement.getAttribute(ar ? "data-title-ar" : "data-title-en");
    if (t) document.title = t;
    var b = document.getElementById("lang");
    if (b) b.textContent = ar ? "English" : "العربية";
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  var btn = document.getElementById("lang");
  if (btn) btn.addEventListener("click", function () {
    apply(document.documentElement.lang === "ar" ? "en" : "ar");
  });
  apply(lang);
})();
`;

function page(titleEn, titleAr, body, depth) {
  const up = "../".repeat(depth);
  return `<!doctype html>
<html lang="en" dir="ltr" data-title-en="${esc(titleEn)}" data-title-ar="${esc(titleAr)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titleEn)}</title>
<script>try{var p=new URLSearchParams(location.search).get("lang");var s=null;try{s=localStorage.getItem("directory-lang");}catch(e){}if((p||s)==="ar"){document.documentElement.lang="ar";document.documentElement.dir="rtl";}}catch(e){}</script>
<link rel="stylesheet" href="${up}style.css">
</head>
<body>
<button class="langbtn" id="lang" type="button">العربية</button>
<div class="wrap">
${body}
<footer>
  ${bi("Street names and coordinates", "أسماء الشوارع والإحداثيات")} &copy;
  <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>,
  ${bi("ODbL 1.0", "رخصة ODbL 1.0")}. ${bi("Glosses: Wiktionary (CC BY-SA 4.0) and UAE oral-history sources.", "المعاني: ويكاموس (CC BY-SA 4.0) ومصادر التاريخ الشفهي الإماراتي.")}
  ${bi(
    `Collected ${new Date().toISOString().slice(0, 10)} · ${fmt(KB.streets.length, "en")} streets.`,
    `جُمعت في ${new Date().toISOString().slice(0, 10)} · ${fmt(KB.streets.length, "ar")} شارع.`
  )}
</footer>
</div>
<script>${SCRIPT}</script>
</body>
</html>`;
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
writeFileSync(out + "/style.css", css.trim() + "\n");

/* ---------- index: emirates ---------- */
const byEmirate = new Map();
for (const s of KB.streets) {
  if (!byEmirate.has(s.emirate)) byEmirate.set(s.emirate, []);
  byEmirate.get(s.emirate).push(s);
}
const emirates = [...byEmirate.entries()].sort((a, b) => b[1].length - a[1].length);

const indexBody = `
<h1>${bi("Streets of the United Arab Emirates", "شوارع الإمارات العربية المتحدة")}</h1>
<p class="lede">${bi(
  `${fmt(KB.streets.length, "en")} named streets in ${fmt(KB.areas.length, "en")} districts across seven emirates, as mapped in OpenStreetMap. Numbered names (“12A Street”) are excluded by choice.`,
  `${fmt(KB.streets.length, "ar")} شارعاً مسمّى في ${fmt(KB.areas.length, "ar")} حياً في سبع إمارات، كما هي مرسومة في OpenStreetMap. الأسماء الرقمية («شارع 12A») مستثناة عمداً.`
)}</p>
<form class="searchbox" action="search.html" method="get">
  <input type="search" name="q" data-placeholder-en="Search a street — English or Arabic" data-placeholder-ar="ابحث عن شارع — بالعربية أو الإنجليزية" placeholder="Search a street — English or Arabic" aria-label="Search streets">
  <button type="submit">${bi("Search", "بحث")}</button>
</form>
<ul class="list">
${emirates
  .map(
    ([id, rows]) =>
      `  <li><a href="${esc(id)}/index.html"><span>${bi(emEn(id), emAr(id))}</span><span class="count">${bi(
        `${fmt(rows.length, "en")} streets`,
        `${fmt(rows.length, "ar")} شارع`
      )}</span></a></li>`
  )
  .join("\n")}
</ul>
<p class="note">${bi("This directory is generated from", "هذا الدليل مُولَّد من")}
<code>data/kb.js</code>${bi(
  ". It is a listing, not a history: the curated entries with the stories behind the names live on the",
  ": قائمة لا تاريخ. المقالات المشروحة التي تحكي قصة الأسماء على"
)} <a href="../index.html">${bi("main site", "الموقع الرئيسي")}</a>.</p>`;
writeFileSync(
  out + "/index.html",
  page("Streets of the UAE", "شوارع الإمارات العربية المتحدة", indexBody, 0)
);

/* ---------- one page per emirate, one per district ---------- */
let pages = 0;
for (const [em, rows] of emirates) {
  mkdirSync(out + "/" + em, { recursive: true });
  const areas = KB.areas.filter((a) => a.path[0] && rows.some((r) => r.area === a.id));
  const noDistrict = rows.filter((r) => !r.area);
  const emRec = KB.emirates.find((e) => e.id === em) || {};

  /* Say why a page is short, with the number, where numbering dominates. */
  const numericNote =
    emRec.numeric_skipped && emRec.numeric_skipped / emRec.roads_total >= 0.2
      ? `<p class="note">${bi(
          `OpenStreetMap names ${fmt(emRec.roads_total, "en")} roads in ${emEn(em)}. ${fmt(emRec.numeric_skipped, "en")} of them — ${Math.round((100 * emRec.numeric_skipped) / emRec.roads_total)}% — are plot numbers such as “12A Street”, excluded by design. The ${fmt(rows.length, "en")} below are the ones that carry a name.`,
          `يرسم OpenStreetMap ${fmt(emRec.roads_total, "ar")} طريقاً في ${emAr(em)}. منها ${fmt(emRec.numeric_skipped, "ar")} — ${Math.round((100 * emRec.numeric_skipped) / emRec.roads_total)}٪ — أرقام قطع مثل «شارع 12A»، مستثناة عمداً. الشوارع الـ${fmt(rows.length, "ar")} أدناه هي التي تحمل اسماً.`
        )}</p>`
      : "";

  const ledeEn =
    `${fmt(rows.length, "en")} streets` +
    (areas.length ? ` in ${fmt(areas.length, "en")} districts` : "") +
    (noDistrict.length ? `, plus ${fmt(noDistrict.length, "en")} without a district boundary` : "") +
    ".";
  const ledeAr =
    `${fmt(rows.length, "ar")} شارعاً` +
    (areas.length ? ` في ${fmt(areas.length, "ar")} حياً` : "") +
    (noDistrict.length ? `، إضافة إلى ${fmt(noDistrict.length, "ar")} بلا حدود حي` : "") +
    ".";

  const body = `
<p class="crumb"><a href="../index.html">${bi("United Arab Emirates", "الإمارات العربية المتحدة")}</a> &rsaquo; ${bi(
    emEn(em),
    emAr(em)
  )}</p>
<h1>${bi(emEn(em), emAr(em))}</h1>
<form class="searchbox" action="../search.html" method="get">
  <input type="search" name="q" data-placeholder-en="Search a street — English or Arabic" data-placeholder-ar="ابحث عن شارع — بالعربية أو الإنجليزية" placeholder="Search a street — English or Arabic" aria-label="Search streets">
  <button type="submit">${bi("Search", "بحث")}</button>
</form>
<p class="lede">${bi(ledeEn, ledeAr)}</p>
${numericNote}
${(() => { const n = rows.filter((r) => storyOf.has(r.osm)).length; return n ? `<p class="lede">${bi(`${n} of these streets have a researched story behind the name.`, `${n} من هذه الشوارع لها قصة موثّقة وراء اسمها.`)}</p>` : ""; })()}
<ul class="list">
${areas
  .map((a) => {
    const n = rows.filter((r) => r.area === a.id).length;
    const file = a.id.replace(/[^\w-]/g, "_");
    return `  <li><a href="${esc(file)}.html"><span>${bi(a.path[3], a.name_ar || a.path[3])}</span><span class="count">${fmt(n, "en")}</span></a></li>`;
  })
  .join("\n")}
${
  noDistrict.length
    ? `  <li><a href="_no-district.html"><span><em>${bi("No district boundary", "بلا حدود حي")}</em></span><span class="count">${fmt(noDistrict.length, "en")}</span></a></li>`
    : ""
}
</ul>`;
  writeFileSync(out + "/" + em + "/index.html", page(`${emEn(em)} — streets`, `${emAr(em)} — الشوارع`, body, 1));
  pages++;

  const groups = [
    ...areas.map((a) => ({ area: a, rows: rows.filter((r) => r.area === a.id) })),
    ...(noDistrict.length
      ? [{ area: { id: "_no-district", path: [emEn(em), "", "", "No district boundary"], name_ar: "بلا حدود حي" }, rows: noDistrict }]
      : []),
  ];

  for (const g of groups) {
    const file = g.area.id.replace(/[^\w-]/g, "_") + ".html";
    const areaEn = g.area.path[3];
    const areaAr = g.area.name_ar || areaEn;
    const list = g.rows
      .slice()
      .sort((a, b) => (a.name_en || a.name_ar).localeCompare(b.name_en || b.name_ar))
      .map(
        (s) => {
          const meta = [];
          if (s.ref) meta.push(bi("Route " + s.ref, "الطريق " + s.ref));
          if (s.old_name_en) meta.push(bi("formerly " + s.old_name_en, "سابقاً " + (s.old_name_ar || s.old_name_en)));
          const metaLine = meta.length ? `<br><small class="meta">${meta.join(" · ")}</small>` : "";
          return `    <tr><td>${esc(s.name_en || s.name_ar)}${storyOf.has(s.osm) ? storyOf.get(s.osm).map((st) => ` <a class="badge" href="../../index.html#street=${esc(st.id)}" title="${esc(st.label)}">${bi("story", "قصة")}</a>`).join("") : ""}${metaLine}${glossFor(s) ? `<br><small class="gloss">${esc(s.name_ar)} — ${esc(glossFor(s))}</small>` : ""}</td><td class="ar" lang="ar">${esc(s.name_ar || "")}</td><td class="kind">${esc(s.kind)}</td></tr>`;
        }
      )
      .join("\n");

    const b = `
<p class="crumb"><a href="../../index.html">${bi("United Arab Emirates", "الإمارات العربية المتحدة")}</a> &rsaquo; <a href="../index.html">${bi(
      emEn(em),
      emAr(em)
    )}</a> &rsaquo; ${bi(areaEn, areaAr)}</p>
<h1>${bi(areaEn, areaAr)}</h1>
<p class="lede">${bi(
      `${fmt(g.rows.length, "en")} streets in ${emEn(em)}`,
      `${fmt(g.rows.length, "ar")} شارعاً في ${emAr(em)}`
    )}</p>
<table>
  <thead><tr><th>${bi("Street", "الشارع")}</th><th>${bi("Arabic", "بالعربية")}</th><th>${bi("Type", "النوع")}</th></tr></thead>
  <tbody>
${list}
  </tbody>
</table>`;
    writeFileSync(out + "/" + em + "/" + file, page(`${areaEn} — streets`, `${areaAr} — الشوارع`, b, 1));
    pages++;
  }
}

/* ---------- search index + page ---------- */
const areaById = new Map(KB.areas.map((a) => [a.id, a]));
const areaTable = {};
const searchIndex = KB.streets.map((s) => {
  const a = areaById.get(s.area);
  const file = s.area ? s.area.replace(/[^\w-]/g, "_") : "_no-district";
  if (!areaTable[file]) {
    areaTable[file] = [s.emirate, (a && a.path[3]) || "", (a && a.name_ar) || "", EMIRATE_EN[s.emirate] || s.emirate, EMIRATE_AR[s.emirate] || s.emirate];
  }
  return [s.name_en || s.name_ar, s.name_ar || "", file];
});
writeFileSync(
  out + "/search-index.js",
  "window.SEARCH_AREAS = " + JSON.stringify(areaTable) + ";\n" +
    "window.SEARCH_INDEX = " + JSON.stringify(searchIndex) + ";\n"
);
writeFileSync(out + "/search.html", readFileSync(root + "tools/templates/search.html", "utf8"));
console.log(`search : ${searchIndex.length} entries, ${Math.round(readFileSync(out + "/search-index.js").length / 1024)} KB`);
console.log(`pages  : ${pages + 1} (${emirates.length} emirates, ${KB.areas.length} districts)`);
console.log(`out    : directory/`);
