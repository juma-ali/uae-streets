#!/usr/bin/env node
/**
 * Generates the static street directory from data/kb.js:
 *
 *   directory/index.html                      emirates
 *   directory/<emirate>/index.html            districts in that emirate
 *   directory/<emirate>/<area>.html           the street table
 *
 * Plain HTML, no JavaScript, no build step beyond this script.
 * Data © OpenStreetMap contributors, ODbL 1.0.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = root + "directory";

const sandbox = {};
new Function("window", readFileSync(root + "data/kb.js", "utf8"))(sandbox);
const KB = sandbox.KB;

const esc = (s) =>
  String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const EMIRATE_LABEL = {
  "abu-dhabi": "Abu Dhabi",
  dubai: "Dubai",
  sharjah: "Sharjah",
  ajman: "Ajman",
  "umm-al-quwain": "Umm Al Quwain",
  "ras-al-khaimah": "Ras Al Khaimah",
  fujairah: "Fujairah",
};

const css = `
:root{--paper:#faf5ec;--card:#fffdf8;--ink:#211b14;--ink2:#4c4337;--ink3:#7d7263;--line:#e6dac6;--accent:#a94f22}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 "Inter",system-ui,-apple-system,"Segoe UI",sans-serif}
.wrap{width:min(100% - 2.5rem,940px);margin-inline:auto;padding-block:2rem 3rem}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
h1{font-family:Georgia,serif;font-size:clamp(1.5rem,3vw,2.1rem);margin:.2rem 0 .4rem;letter-spacing:-.01em;line-height:1.2}
.crumb{font-size:.78rem;color:var(--ink3);margin-bottom:.6rem}
.crumb a{color:var(--ink3)}
.lede{color:var(--ink2);max-width:60ch;margin:0 0 1.6rem}
ul.list{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}
ul.list a{display:flex;justify-content:space-between;gap:1rem;padding:.55rem .8rem;background:var(--card);border:1px solid var(--line);border-radius:10px;color:var(--ink)}
ul.list a:hover{border-color:var(--ink3);text-decoration:none}
.count{color:var(--ink3);font-variant-numeric:tabular-nums;font-size:.85rem}
table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
th,td{text-align:left;padding:.5rem .8rem;border-bottom:1px solid var(--line);font-size:.92rem;vertical-align:top}
th{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);font-weight:600}
tr:last-child td{border-bottom:0}
td.ar{direction:rtl;text-align:right;font-size:1.05rem;min-width:12rem}
td.kind{color:var(--ink3);font-size:.8rem;white-space:nowrap}
.note{margin-top:2rem;padding:.9rem 1rem;border:1px solid var(--line);border-radius:10px;background:var(--card);font-size:.8rem;color:var(--ink3)}
footer{margin-top:2.5rem;font-size:.78rem;color:var(--ink3);border-top:1px solid var(--line);padding-top:1rem}
`;

function page(title, body, depth) {
  const up = "../".repeat(depth);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<link rel="stylesheet" href="${up}style.css">
</head>
<body>
<div class="wrap">
${body}
<footer>
  Street names and coordinates &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, ODbL 1.0.
  Collected ${new Date().toISOString().slice(0, 10)} &middot; ${KB.streets.length.toLocaleString("en")} streets.
</footer>
</div>
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
<h1>Streets of the United Arab Emirates</h1>
<p class="lede">${KB.streets.length.toLocaleString("en")} named streets in ${KB.areas.length} districts across seven emirates,
as mapped in OpenStreetMap. Numbered names (&ldquo;12A Street&rdquo;) are excluded by choice.</p>
<ul class="list">
${emirates
  .map(
    ([id, rows]) => `  <li><a href="${esc(id)}/index.html"><span>${esc(EMIRATE_LABEL[id] || id)}</span><span class="count">${rows.length.toLocaleString("en")} streets</span></a></li>`
  )
  .join("\n")}
</ul>
<p class="note">This directory is generated from <code>data/kb.js</code>. It is a listing, not a history:
the curated entries with the stories behind the names live on the <a href="../index.html">main site</a>.</p>`;
writeFileSync(out + "/index.html", page("Streets of the UAE", indexBody, 0));

/* ---------- one page per emirate, one per district ---------- */
let pages = 0;
for (const [em, rows] of emirates) {
  mkdirSync(out + "/" + em, { recursive: true });
  const areas = KB.areas.filter((a) => a.path[0] && rows.some((r) => r.area === a.id));
  const noDistrict = rows.filter((r) => !r.area);

  const body = `
<p class="crumb"><a href="../index.html">United Arab Emirates</a> &rsaquo; ${esc(EMIRATE_LABEL[em] || em)}</p>
<h1>${esc(EMIRATE_LABEL[em] || em)}</h1>
<p class="lede">${rows.length.toLocaleString("en")} streets${areas.length ? ` in ${areas.length} districts` : ""}${noDistrict.length ? `, plus ${noDistrict.length.toLocaleString("en")} without a district boundary` : ""}.</p>
<ul class="list">
${areas
  .map((a) => {
    const n = rows.filter((r) => r.area === a.id).length;
    const file = a.id.replace(/[^\w-]/g, "_");
    return `  <li><a href="${esc(file)}.html"><span>${esc(a.path[3])}</span><span class="count">${n.toLocaleString("en")}</span></a></li>`;
  })
  .join("\n")}
${noDistrict.length ? `  <li><a href="_no-district.html"><span><em>No district boundary</em></span><span class="count">${noDistrict.length.toLocaleString("en")}</span></a></li>` : ""}
</ul>`;
  writeFileSync(out + "/" + em + "/index.html", page(`${EMIRATE_LABEL[em] || em} — streets`, body, 1));
  pages++;

  const groups = [
    ...areas.map((a) => ({ area: a, rows: rows.filter((r) => r.area === a.id) })),
    ...(noDistrict.length ? [{ area: { id: "_no-district", path: [EMIRATE_LABEL[em] || em, "", "", "No district boundary"] }, rows: noDistrict }] : []),
  ];

  for (const g of groups) {
    const file = g.area.id.replace(/[^\w-]/g, "_") + ".html";
    const crumb = [EMIRATE_LABEL[em] || em, ...g.area.path.slice(1, 4)].filter(Boolean).join(" » ");
    const list = g.rows
      .slice()
      .sort((a, b) => a.name_en.localeCompare(b.name_en))
      .map(
        (s) => `    <tr><td>${esc(s.name_en)}</td><td class="ar" lang="ar">${esc(s.name_ar || "")}</td><td class="kind">${esc(s.kind)}</td></tr>`
      )
      .join("\n");

    const b = `
<p class="crumb"><a href="../../index.html">United Arab Emirates</a> &rsaquo; <a href="../index.html">${esc(EMIRATE_LABEL[em] || em)}</a> &rsaquo; ${esc(g.area.path[3])}</p>
<h1>${esc(g.area.path[3])}</h1>
<p class="lede">${g.rows.length.toLocaleString("en")} streets in ${esc(g.area.path[1])}</p>
<table>
  <thead><tr><th>Street</th><th>Arabic</th><th>Type</th></tr></thead>
  <tbody>
${list}
  </tbody>
</table>`;
    writeFileSync(out + "/" + em + "/" + file, page(`${g.area.path[3]} — streets`, b, 1));
    pages++;
  }
}

console.log(`pages: ${pages + 1} (${emirates.length} emirates, ${KB.areas.length} districts)`);
console.log(`out  : directory/ (${Math.round(readFileSync(out + "/index.html").length / 1024)} KB index)`);
