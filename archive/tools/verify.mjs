#!/usr/bin/env node
/**
 * A short, targeted verification list — the point is to check fewer streets, not
 * to make checking each one fancier.
 *
 *   node tools/verify.mjs                 → .review/verify.html, 50 riskiest
 *   node tools/verify.mjs --limit 0       → all 299
 *
 * Rows are ordered by how likely they are to be wrong (no Arabic name, digits in
 * the name, no district, single-word names), so the first 50 test the weak spots.
 * One click opens the map at the exact coordinate; then a verdict.
 *
 * Verdicts persist in localStorage; Export writes the CSV `tools/audit.mjs
 * --external` reads back; Import restores a previous export. .review/ is gitignored.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const src = arg("--source", "data/verification-sample.csv");
const limit = Number(arg("--limit", "50"));

const csv = readFileSync(root + src, "utf8").replace(/^\uFEFF/, "");
function parseCsv(text) {
  const rows = [];
  let f = [], cur = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") { f.push(cur); cur = ""; }
    else if (c === "\n") { f.push(cur); rows.push(f); f = []; cur = ""; }
    else if (c !== "\r") cur += c;
  }
  if (cur || f.length) { f.push(cur); rows.push(f); }
  return rows;
}

const rows = parseCsv(csv.trim());
const head = rows.shift().map((h) => h.trim().replace(/^"|"$/g, ""));
const idx = Object.fromEntries(head.map((h, i) => [h, i]));
const all = rows
  .filter((r) => r.length > 5)
  .map((r) => ({
    emirate: r[idx.emirate] || "",
    district: r[idx.district] || "",
    en: r[idx.name_en] || "",
    ar: r[idx.name_ar] || "",
    lat: r[idx.lat] || "",
    lon: r[idx.lon] || "",
    osm: r[idx.osm] || "",
  }));

const risk = (s) =>
  (!s.ar ? 3 : 0) +
  (/\d/.test(s.en) ? 2 : 0) +
  (!s.district ? 1 : 0) +
  (s.en.trim().split(/\s+/).length < 2 ? 1 : 0) +
  (/^[A-Z\s'-]+$/.test(s.en) ? 1 : 0);

/* Stratified: every emirate gets a share proportional to its size, and within
   each emirate the riskiest rows come first. A pure risk sort makes page one all
   Dubai plot names and says nothing about the dataset. */
function select(n) {
  if (!n) return all.slice().sort((a, b) => risk(b) - risk(a));
  const byEm = new Map();
  for (const s of all) {
    if (!byEm.has(s.emirate)) byEm.set(s.emirate, []);
    byEm.get(s.emirate).push(s);
  }
  const quota = [...byEm.entries()].map(([em, rows]) => ({
    em,
    rows: rows.slice().sort((a, b) => risk(b) - risk(a)),
    want: Math.max(1, Math.round((n * rows.length) / all.length)),
  }));
  const picked = [];
  const taken = new Map();
  // round-robin for variety, but never past a quota — proportions must hold
  let progressed = true;
  while (picked.length < n && progressed) {
    progressed = false;
    for (const q of quota) {
      if (picked.length >= n) break;
      if ((taken.get(q.em) || 0) >= q.want) continue;
      const next = q.rows.shift();
      if (!next) continue;
      picked.push(next);
      taken.set(q.em, (taken.get(q.em) || 0) + 1);
      progressed = true;
    }
  }
  return picked;
}
const items = select(limit);

const esc = (s) =>
  String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const list = items
  .map(
    (s, i) => `<li class="row" data-id="${esc(s.osm)}" data-lat="${esc(s.lat)}" data-lon="${esc(s.lon)}">
  <span class="n">${i + 1}</span>
  <span class="names">
    <b>${esc(s.en)}</b>
    <span class="ar" lang="ar" dir="rtl">${esc(s.ar) || "<em>no Arabic name</em>"}</span>
    <span class="where">${esc(s.district) || "no district"} &middot; ${esc(s.emirate)}</span>
  </span>
  <a class="open" target="_blank" rel="noopener"
     href="https://www.google.com/maps/search/?api=1&query=${esc(s.lat)},${esc(s.lon)}">map &rarr;</a>
  <span class="v">
    <button data-v="ok">ok</button><button data-v="typo">typo</button><button data-v="wrong">wrong</button><button data-v="missing">missing</button>
  </span>
</li>`
  )
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check ${items.length} street names</title>
<style>
:root{--paper:#faf5ec;--card:#fffdf8;--ink:#211b14;--ink3:#7d7263;--line:#e6dac6;--accent:#a94f22}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
header{position:sticky;top:0;z-index:9;background:var(--paper);border-bottom:1px solid var(--line);padding:.65rem 1rem;display:flex;gap:.8rem;align-items:center;flex-wrap:wrap}
h1{font-size:1rem;margin:0;font-family:Georgia,serif}
.bar{flex:1;min-width:6rem;height:8px;background:var(--line);border-radius:99px;overflow:hidden}
.bar>i{display:block;height:100%;width:0;background:var(--accent);transition:width .2s}
button{font:inherit;cursor:pointer;border:1px solid var(--line);background:var(--card);border-radius:8px;padding:.2rem .5rem;font-size:.78rem}
button:hover{border-color:var(--ink3)}
ol{list-style:none;margin:0;padding:.8rem 1rem 3rem;max-width:900px}
.row{display:flex;gap:.7rem;align-items:flex-start;padding:.55rem .3rem;border-bottom:1px solid var(--line)}
.row.ok{background:#eef7f1}.row.typo{background:#fdf6e6}.row.wrong{background:#fbeeee}.row.missing{background:#f2f0fa}
.n{color:var(--ink3);font-size:.72rem;width:1.6rem;flex:none;padding-top:.2rem}
.names{flex:1;display:flex;flex-direction:column;min-width:0}
.names b{font-weight:600;font-size:.95rem}
.ar{color:var(--ink3);font-size:1rem}
.where{color:var(--ink3);font-size:.72rem}
.open{color:var(--accent);text-decoration:none;font-size:.8rem;white-space:nowrap;flex:none;padding-top:.15rem}
.v{display:flex;gap:.25rem;flex:none}
.row.ok button[data-v=ok],.row.typo button[data-v=typo],.row.wrong button[data-v=wrong],.row.missing button[data-v=missing]{background:var(--accent);color:#fff;border-color:var(--accent)}
.hint{color:var(--ink3);font-size:.8rem;padding:0 1rem;margin:.4rem 0 0}
</style>
</head>
<body>
<header>
  <h1>Check ${items.length}</h1>
  <div class="bar"><i id="prog"></i></div>
  <span id="count" style="font-size:.8rem;color:var(--ink3)">0 done</span>
  <button id="export">Export CSV</button>
  <label style="font-size:.8rem;color:var(--ink3);cursor:pointer">Import CSV<input type="file" id="import" accept=".csv" hidden></label>
  <button id="reset">Reset</button>
</header>
<p class="hint">Click <b>map</b> — it opens Google Maps at the exact spot. If the label there matches, press <b>ok</b>; if it shows a different name, <b>wrong</b>; if nothing is labelled, <b>missing</b>.</p>
<ol>
${list}
</ol>
<script>
var KEY = "verify-verdicts-v1";
var store = {};
try { store = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
var rows = Array.prototype.slice.call(document.querySelectorAll(".row"));

function paint() {
  var done = 0;
  rows.forEach(function (r) {
    var v = store[r.dataset.id];
    r.className = "row" + (v ? " " + v : "");
    if (v) done++;
  });
  document.getElementById("count").textContent = done + " / " + rows.length + " done";
  document.getElementById("prog").style.width = (100 * done / rows.length) + "%";
}

document.querySelector("ol").addEventListener("click", function (e) {
  var b = e.target.closest("button[data-v]"); if (!b) return;
  var r = b.closest(".row"), id = r.dataset.id;
  store[id] = (store[id] === b.dataset.v) ? null : b.dataset.v;
  if (!store[id]) delete store[id];
  localStorage.setItem(KEY, JSON.stringify(store));
  paint();
});

document.getElementById("reset").addEventListener("click", function () {
  if (!confirm("Clear all verdicts?")) return;
  store = {}; localStorage.removeItem(KEY); paint();
});

document.getElementById("export").addEventListener("click", function () {
  var q = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
  var out = ["emirate,district,name_en,name_ar,lat,lon,osm,verdict,notes"];
  rows.forEach(function (r) {
    var where = r.querySelector(".where").textContent.split("\\u00b7");
    out.push([
      (where[1] || "").trim(),
      (where[0] || "").trim().replace(/^no district$/, ""),
      r.querySelector("b").textContent,
      r.querySelector(".ar").textContent,
      r.dataset.lat, r.dataset.lon, r.dataset.id, store[r.dataset.id] || "", ""
    ].map(q).join(","));
  });
  var blob = new Blob(["\\uFEFF" + out.join("\\n") + "\\n"], { type: "text/csv;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "verification-sample.csv"; a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById("import").addEventListener("change", function (e) {
  var f = e.target.files && e.target.files[0]; if (!f) return;
  var reader = new FileReader();
  reader.onload = function () {
    var lines = String(reader.result).replace(/^\\uFEFF/, "").split(/\\r?\\n/).filter(Boolean).slice(1);
    var n = 0;
    lines.forEach(function (line) {
      var p = [], cur = "", q = false;
      for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
        else if (ch === '"') q = true; else if (ch === ",") { p.push(cur); cur = ""; } else cur += ch;
      }
      p.push(cur);
      if (p[6] && p[7] && p[7].trim()) { store[p[6]] = p[7].trim(); n++; }
    });
    localStorage.setItem(KEY, JSON.stringify(store));
    paint();
    alert("Imported " + n + " verdicts.");
  };
  reader.readAsText(f);
});

paint();
</script>
</body>
</html>`;

mkdirSync(root + ".review", { recursive: true });
writeFileSync(root + ".review/verify.html", html);
console.log(`.review/verify.html — ${items.length} rows (from ${all.length})`);
console.log("first five: " + items.slice(0, 5).map((s) => s.en).join(" · "));
