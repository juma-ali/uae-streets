#!/usr/bin/env node
/**
 * Integrity audit for the knowledge base.
 *
 *   node tools/audit.mjs                              # internal checks → docs/AUDIT.md
 *   node tools/audit.mjs --sample 300 --out sample.csv # stratified sample to verify by hand
 *   node tools/audit.mjs --external other.csv          # compare against another source
 *
 * The internal checks find defects we can prove without leaving the repo. The
 * sample is for checking against a source we cannot legally or technically pull
 * in bulk — a human reads a few hundred names on a map and marks them.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const args = process.argv.slice(2);
const arg = (n, d) => {
  const i = args.indexOf(n);
  return i > -1 && args[i + 1] ? args[i + 1] : d;
};

const sandbox = {};
new Function("window", readFileSync(root + "data/kb.js", "utf8"))(sandbox);
const KB = sandbox.KB;
const S = KB.streets;

const AR = /[\u0600-\u06FF]/;
const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627")
    .replace(/\u0649/g, "\u064A")
    .replace(/\u0629/g, "\u0647")
    .replace(/[^a-z\u0600-\u06FF0-9]+/g, " ")
    .trim();

/* ---------------- internal checks ---------------- */
const checks = [];
const add = (name, rows, note) => checks.push({ name, rows, note });

add("No Arabic name", S.filter((s) => !s.name_ar), "English-only rows");
add(
  "Arabic name has no road word",
  S.filter((s) => s.name_ar && !/شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج|سكة|كورنيش|دوار|جسر/.test(s.name_ar)),
  "usually bridges, roundabouts, districts"
);
add("Arabic name repeated as English", S.filter((s) => s.name_en === s.name_ar), "untranslated");
add("Name still contains digits", S.filter((s) => /\d/.test(s.name_en)), "leftover numbering");
add("Name has stray punctuation", S.filter((s) => /[|<>{}[\]\\]|\(\s*\)|[,;:]\s*$/.test(s.name_en)), "");
add("No district assigned", S.filter((s) => !s.area), "outside admin_level 8/10 polygons");

// a name that appears far apart in one emirate suggests a bad merge
const byKey = new Map();
for (const s of S) {
  const k = s.emirate + "|" + s.name_en.toLowerCase();
  if (!byKey.has(k)) byKey.set(k, []);
  byKey.get(k).push(s);
}
const farApart = [];
for (const rows of byKey.values()) {
  for (let i = 0; i < rows.length; i++)
    for (let j = i + 1; j < rows.length; j++) {
      const d = Math.hypot(
        (rows[i].lat - rows[j].lat) * 111,
        (rows[i].lon - rows[j].lon) * 111 * Math.cos((rows[i].lat * Math.PI) / 180)
      );
      if (d > 15) farApart.push(rows[i]);
    }
}
add("Same name >15 km apart", [...new Set(farApart)], "possible wrong merge");

// many distinct streets sharing one exact point suggests a centring bug
const pts = new Map();
for (const s of S) {
  const k = s.lat + "," + s.lon;
  pts.set(k, (pts.get(k) || 0) + 1);
}
const stacked = [...pts.values()].filter((n) => n > 4).length;
checks.push({ name: "Points shared by >4 streets", rows: { length: stacked }, note: "centring bug indicator" });

/* ---------------- report ---------------- */
const pct = (n) => ((100 * n) / S.length).toFixed(2) + "%";
const lines = [];
lines.push("# Integrity audit", "");
lines.push(`Generated ${new Date().toISOString().slice(0, 10)} · ${S.length.toLocaleString("en")} streets · ${KB.areas.length} districts`, "");
lines.push("## Internal checks", "");
lines.push("| Check | Streets | Share | Note |");
lines.push("|---|---|---|---|");
for (const c of checks) {
  lines.push(`| ${c.name} | ${c.rows.length.toLocaleString("en")} | ${pct(c.rows.length)} | ${c.note} |`);
}
lines.push("");
const worst = checks.filter((c) => c.rows.length && c.rows[0] && c.rows[0].name_en).slice(0, 6);
for (const c of worst) {
  lines.push(`### ${c.name} — examples`, "");
  for (const r of c.rows.slice(0, 5)) lines.push(`- \`${r.name_en}\` — ${r.name_ar || "_no Arabic_"} (${r.emirate})`);
  lines.push("");
}

/* ---------------- external comparison ---------------- */
const externalPath = arg("--external", "");
if (externalPath) {
  const csv = readFileSync(externalPath, "utf8").split(/\r?\n/).filter(Boolean);
  const head = csv.shift().split(",").map((h) => h.trim().toLowerCase());
  const iEn = head.indexOf("name_en");
  const iAr = head.indexOf("name_ar");
  const iEm = head.indexOf("emirate");
  if (iEn < 0) {
    console.error("external csv needs a name_en column");
    process.exit(2);
  }
  const ours = new Map();
  for (const s of S) ours.set(norm(s.name_en) + "|" + norm(s.emirate), s);
  const oursAny = new Map();
  for (const s of S) if (!oursAny.has(norm(s.name_en))) oursAny.set(norm(s.name_en), s);

  let matched = 0, emirateMiss = 0, missing = 0, arabicDiff = 0;
  const missingRows = [], diffRows = [];
  for (const row of csv) {
    const f = row.split(",");
    const en = f[iEn] || "";
    const ar = iAr > -1 ? f[iAr] || "" : "";
    const em = iEm > -1 ? f[iEm] || "" : "";
    const hit = ours.get(norm(en) + "|" + norm(em)) || oursAny.get(norm(en));
    if (!hit) { missing++; missingRows.push(en); continue; }
    matched++;
    if (em && hit.emirate !== norm(em).replace(/ /g, "-") && norm(hit.emirate) !== norm(em)) emirateMiss++;
    if (ar && hit.name_ar && norm(ar) !== norm(hit.name_ar)) { arabicDiff++; diffRows.push(`${en}: ours="${hit.name_ar}" theirs="${ar}"`); }
  }
  lines.push("## Comparison with an external source", "");
  lines.push(`Rows compared: ${csv.length.toLocaleString("en")}`, "");
  lines.push(`- matched: **${matched}** (${((100 * matched) / csv.length).toFixed(1)}%)`);
  lines.push(`- not found in KB: **${missing}**`);
  lines.push(`- different emirate: **${emirateMiss}**`);
  lines.push(`- different Arabic spelling: **${arabicDiff}**`);
  lines.push("");
  if (missingRows.length) lines.push("Missing: " + missingRows.slice(0, 10).map((x) => `\`${x}\``).join(", "), "");
  if (diffRows.length) lines.push("Spelling differences:", ...diffRows.slice(0, 10).map((x) => `- ${x}`), "");
}

writeFileSync(root + "docs/AUDIT.md", lines.join("\n") + "\n");

console.log("checks:");
for (const c of checks) console.log("  " + c.name.padEnd(36) + String(c.rows.length).padStart(6) + "  " + pct(c.rows.length));
console.log("\nwrote docs/AUDIT.md");

/* ---------------- stratified sample ---------------- */
const n = Number(arg("--sample", "0"));
const outFile = arg("--out", "");
if (n > 0 && outFile) {
  // deterministic PRNG so the sample is reproducible
  let seed = 20261022;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);

  const byEm = new Map();
  for (const s of S) {
    if (!byEm.has(s.emirate)) byEm.set(s.emirate, []);
    byEm.get(s.emirate).push(s);
  }
  const sample = [];
  for (const [em, rows] of byEm) {
    const want = Math.max(1, Math.round((n * rows.length) / S.length));
    const pool = rows.slice();
    for (let i = 0; i < want && pool.length; i++) {
      sample.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
    }
  }
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const csvOut = [
    "emirate,district,name_en,name_ar,lat,lon,osm,verdict,notes",
    ...sample.map((s) =>
      [
        s.emirate,
        (KB.areas.find((a) => a.id === s.area) || {}).path?.[3] || "",
        s.name_en,
        s.name_ar || "",
        s.lat,
        s.lon,
        s.osm,
        "",
        "",
      ].map(esc).join(",")
    ),
  ].join("\n");
  writeFileSync(root + outFile, "\uFEFF" + csvOut + "\n", "utf8");
  console.log(`sample: ${sample.length} streets → ${outFile}`);
  console.log("  fill the verdict column: ok / typo / wrong / missing, then run with --external");
}
