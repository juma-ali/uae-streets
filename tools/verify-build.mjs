#!/usr/bin/env node
/**
 * Builds a local review page for the verification sample.
 *
 *   node tools/verify-build.mjs            → .review/verify.html
 *
 * Each row links straight to the coordinates on Google Maps (the basemap Makani
 * uses) and on OpenStreetMap, so checking a name is: click, read, mark a verdict.
 * Verdicts persist in localStorage; "Export CSV" writes the file that
 * `tools/audit.mjs --external` reads back.
 *
 * This page is a workspace tool — .review/ is gitignored, never published.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const csv = readFileSync(root + "data/verification-sample.csv", "utf8").replace(/^\uFEFF/, "");
const lines = csv.trim().split(/\r?\n/);
const head = lines.shift().split(",").map((h) => h.replace(/^"|"$/g, ""));
const idx = Object.fromEntries(head.map((h, i) => [h, i]));

const parseRow = (line) => {
  const out = [];
  let cur = "", q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
};

const rows = lines.map(parseRow).map((f) => ({
  emirate: f[idx.emirate],
  district: f[idx.district],
  en: f[idx.name_en],
  ar: f[idx.name_ar],
  lat: f[idx.lat],
  lon: f[idx.lon],
  osm: f[idx.osm],
}));

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const body = rows
  .map((r, i) => {
    const gmaps = `https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lon}`;
    const osm = `https://www.openstreetmap.org/?mlat=${r.lat}&mlon=${r.lon}#map=18/${r.lat}/${r.lon}`;
    return `<tr data-i="${i}" data-id="${esc(r.osm)}">
  <td class="num">${i + 1}</td>
  <td><div class="en">${esc(r.en)}</div><div class="ar" lang="ar" dir="rtl">${esc(r.ar)}</div></td>
  <td class="where"><span class="d">${esc(r.district)}</span><br><span class="e">${esc(r.emirate)}</span></td>
  <td class="links"><a href="${gmaps}" target="_blank" rel="noopener">Map</a> · <a href="${osm}" target="_blank" rel="noopener">OSM</a></td>
  <td class="verdict">
    <button data-v="ok">ok</button><button data-v="typo">typo</button><button data-v="wrong">wrong</button><button data-v="missing">missing</button>
  </td>
</tr>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Verify 299 street names</title>
<style>
:root{--paper:#faf5ec;--card:#fffdf8;--ink:#211b14;--ink3:#7d7263;--line:#e6dac6;--accent:#a94f22;--ok:#2f7d4f;--bad:#a33}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
header{position:sticky;top:0;background:var(--paper);border-bottom:1px solid var(--line);padding:.7rem 1rem;display:flex;gap:1rem;align-items:center;flex-wrap:wrap;z-index:5}
h1{font-size:1.05rem;margin:0;font-family:Georgia,serif}
.bar{flex:1;min-width:8rem;height:8px;background:var(--line);border-radius:99px;overflow:hidden}
.bar>i{display:block;height:100%;width:0;background:var(--accent);transition:width .2s}
button{font:inherit;cursor:pointer;border:1px solid var(--line);background:var(--card);border-radius:8px;padding:.2rem .5rem}
button:hover{border-color:var(--ink3)}
table{width:100%;border-collapse:collapse}
td{border-bottom:1px solid var(--line);padding:.45rem .6rem;vertical-align:top}
tr.done{background:#f0f7f1}
tr.ok{background:#eef7f1}tr.typo{background:#fdf6e6}tr.wrong{background:#fbeeee}tr.missing{background:#f2f0fa}
.num{color:var(--ink3);font-size:.75rem;padding-top:.7rem}
.en{font-weight:600}
.ar{color:var(--ink3);font-size:1rem}
.where{color:var(--ink3);font-size:.8rem}
.where span{opacity:.7}
td.verdict{white-space:nowrap}
td.verdict button{margin-inline-end:.2rem;font-size:.75rem;padding:.15rem .4rem}
tr.ok button[data-v=ok],tr.typo button[data-v=typo],tr.wrong button[data-v=wrong],tr.missing button[data-v=missing]{background:var(--accent);color:#fff;border-color:var(--accent)}
td.links a{color:var(--accent);text-decoration:none;font-size:.8rem}
.wrap{padding:0 0 4rem}
</style>
</head>
<body>
<header>
  <h1>Verify <span id="total">${rows.length}</span> street names</h1>
  <div class="bar"><i id="prog"></i></div>
  <span id="count" style="font-size:.82rem;color:var(--ink3)">0 marked</span>
  <label style="font-size:.82rem;color:var(--ink3)"><input type="checkbox" id="hide"> hide done</label>
  <button id="export">Export CSV</button>
  <button id="reset">Reset</button>
  <label style="font-size:.82rem;color:var(--ink3);cursor:pointer">Import CSV<input type="file" id="import" accept=".csv" hidden></label>
</header>
<div class="wrap">
<table><tbody>
${body}
</tbody></table>
</div>
<script>
var KEY = "verify-verdicts-v1";
var store = {};
try { store = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { store = {}; }

function paint() {
  var marked = 0;
  document.querySelectorAll("tr[data-id]").forEach(function (tr) {
    var v = store[tr.dataset.id];
    tr.className = v ? ("done " + v) : "";
    if (v) marked++;
  });
  document.getElementById("count").textContent = marked + " marked";
  document.getElementById("prog").style.width = (100 * marked / document.querySelectorAll("tr[data-id]").length) + "%";
  if (document.getElementById("hide").checked) {
    document.querySelectorAll("tr[data-id]").forEach(function (tr) { tr.hidden = !!store[tr.dataset.id]; });
  } else {
    document.querySelectorAll("tr[data-id]").forEach(function (tr) { tr.hidden = false; });
  }
}

document.querySelectorAll("td.verdict").forEach(function (td) {
  td.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    var tr = td.parentElement, id = tr.dataset.id;
    store[id] = (store[id] === b.dataset.v) ? null : b.dataset.v;
    if (!store[id]) delete store[id];
    localStorage.setItem(KEY, JSON.stringify(store));
    paint();
  });
});

document.getElementById("hide").addEventListener("change", paint);
document.getElementById("reset").addEventListener("click", function () {
  if (!confirm("Clear all verdicts?")) return;
  store = {}; localStorage.removeItem(KEY); paint();
});

document.getElementById("export").addEventListener("click", function () {
  var esc = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
  var out = ["emirate,district,name_en,name_ar,lat,lon,osm,verdict,notes"];
  document.querySelectorAll("tr[data-id]").forEach(function (tr) {
    var c = tr.children;
    var en = c[1].querySelector(".en").textContent;
    var ar = c[1].querySelector(".ar").textContent;
    var where = c[2].querySelector(".d").textContent;
    var em = c[2].querySelector(".e").textContent;
    var osm = tr.dataset.id;
    var lat = "", lon = "";
    var link = c[3].querySelector("a").href;
    var m = /query=([-\\d.]+),([-\\d.]+)/.exec(link);
    if (m) { lat = m[1]; lon = m[2]; }
    out.push([em, where, en, ar, lat, lon, osm, store[tr.dataset.id] || "", ""].map(esc).join(","));
  });
  var blob = new Blob(["\\uFEFF" + out.join("\\n") + "\\n"], { type: "text/csv;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "verification-sample.csv";
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById("import").addEventListener("change", function (e) {
  var f = e.target.files && e.target.files[0];
  if (!f) return;
  var reader = new FileReader();
  reader.onload = function () {
    var text = String(reader.result).replace(/^\uFEFF/, "");
    var lines = text.split(/\r?\n/).filter(Boolean).slice(1);
    var n = 0;
    lines.forEach(function (line) {
      // all columns are quoted: split on commas that are outside quotes
      var f2 = [], cur = "", q = false;
      for (var i = 0; i < line.length; i++) {
        var c = line[i];
        if (q) {
          if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
          else if (c === '"') q = false;
          else cur += c;
        } else if (c === '"') q = true;
        else if (c === ",") { f2.push(cur); cur = ""; }
        else cur += c;
      }
      f2.push(cur);
      var osm = f2[6], verdict = (f2[7] || "").trim();
      if (osm && verdict) { store[osm] = verdict; n++; }
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
console.log(`.review/verify.html — ${rows.length} rows`);
