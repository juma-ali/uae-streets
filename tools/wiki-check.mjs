#!/usr/bin/env node
/**
 * Cross-checks the KB against Wikipedia's road lists — an independent, openly
 * licensed source (CC BY-SA) rather than another OSM mirror.
 *
 *   node tools/wiki-check.mjs
 *
 * Reads the wikitext of:
 *   List of roads in Dubai          (E-routes)
 *   Dubai route numbering system    (E- and D-routes, with alternate street names)
 *
 * and reports, for every road name Wikipedia gives, whether the KB has it.
 * Comparison is on the English name with road-type words trimmed, so
 * "Al Wasl Road" matches "Al Wasl St" but "Al Wasl" and "Al Wasl Road" also match.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const PAGES = ["List_of_roads_in_Dubai", "Dubai_route_numbering_system"];

const fetchWikitext = async (page) => {
  const url =
    "https://en.wikipedia.org/w/api.php?action=parse&prop=wikitext&format=json&formatversion=2&page=" +
    encodeURIComponent(page);
  const r = await fetch(url, { signal: AbortSignal.timeout(40000), headers: { "user-agent": "uae-streets-kb/1.0 (verification)" } });
  if (!r.ok) throw new Error(page + ": HTTP " + r.status);
  const j = await r.json();
  return j.parse.wikitext;
};

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/\b(street|st\.?|road|rd\.?|avenue|ave\.?)\b/g, " ")
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/* ---------- gather the source ---------- */
const claims = new Map(); // normalised name -> { name, route, page }

/* Wikilinks hide the display text: [[Hatta, United Arab Emirates|Hatta Highway]]
   should yield "Hatta Highway", never the target. */
const delink = (s) =>
  s.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1");

for (const page of PAGES) {
  const text = delink(await fetchWikitext(page));
  // routes are written as {{Jct|country=ARE|D|94}} (Jumeirah Street; …)
  const re = /\{\{Jct\|country=ARE\|([DE])\|(\d{2,3})[^}]*\}\}([^\n]*)/g;
  let m;
  while ((m = re.exec(text))) {
    const route = m[1] + " " + m[2];
    const rest = m[3];
    const paren = /\(([^)]*)\)/.exec(rest);
    if (!paren) continue;
    for (const raw of paren[1].split(/[;,]/)) {
      // cut any trailing "(formerly …)" or "(parallel to …)" commentary
      const name = raw.split(" (")[0].replace(/'{2,}/g, "").replace(/\s+/g, " ").trim();
      if (name.length < 3 || /^\d+$/.test(name) || /[|{}[\]]/.test(name)) continue;
      const key = norm(name);
      if (!key) continue;
      if (!claims.has(key)) claims.set(key, { name, route, page });
    }
  }
}

/* ---------- compare ---------- */
const sandbox = {};
new Function("window", readFileSync(root + "data/kb.js", "utf8"))(sandbox);
const KB = sandbox.KB;

const index = new Map();
for (const s of KB.streets) {
  const key = norm(s.name_en);
  if (key && !index.has(key)) index.set(key, s);
}
// also index without a leading "al "
for (const s of KB.streets) {
  const key = norm(s.name_en).replace(/^al /, "");
  if (key && !index.has("~" + key)) index.set("~" + key, s);
}

const rows = [];
for (const [key, c] of claims) {
  const hit = index.get(key) || index.get("~" + key.replace(/^al /, ""));
  rows.push({ ...c, hit });
}

/* Wikipedia and OSM spell some roads differently. These pairs are the same road:
   without this map they read as 6 failures instead of 6 transliterations. */
const VARIANTS = {
  "oud metha": "oud maitha",
  "salahuddin": "salah al din",
  "al marabe a": "al marabea",
  "latifa bin hamdan": "latifa bint hamdan",
  "expo jebel ali lehbab": "jebel ali lahbab",
  "hatta highway": "dubai hatta",
};
const variantOf = (key) => {
  const target = VARIANTS[key];
  return target ? index.get(target) || null : null;
};

const found = rows.filter((r) => r.hit);
const spelled = [];
const missing = [];
for (const r of rows) {
  if (r.hit) continue;
  const alt = variantOf(norm(r.name));
  if (alt) spelled.push({ ...r, alt });
  else missing.push(r);
}

/* ---------- where do the missing ones live in OSM? ---------- */
/* A miss is not necessarily wrong: "Salahuddin Road" and "Salah Al Din Street"
   are the same road spelled differently. Surface the closest KB names so a human
   can judge instead of the script. */
const suggest = (name) => {
  const toks = norm(name).split(" ").filter((x) => x.length > 2);
  if (!toks.length) return [];
  return KB.streets
    .filter((s) => s.emirate === "dubai")
    .map((s) => {
      const n = norm(s.name_en);
      return { s, score: toks.filter((tok) => n.includes(tok)).length };
    })
    .filter((x) => x.score >= Math.min(2, toks.length))
    .sort((a, b) => b.score - a.score || a.s.name_en.localeCompare(b.s.name_en))
    .slice(0, 2)
    .map((x) => x.s.name_en);
};

const lines = [];
lines.push("## Cross-check against Wikipedia", "");
lines.push(`Source: [List of roads in Dubai](https://en.wikipedia.org/wiki/List_of_roads_in_Dubai) + [Dubai route numbering system](https://en.wikipedia.org/wiki/Dubai_route_numbering_system) — CC BY-SA.`, "");
lines.push(`- road names in the source: **${rows.length}**`);
lines.push(`- found exactly: **${found.length}** (${((100 * found.length) / rows.length).toFixed(0)}%)`);
lines.push(`- same road, different spelling: **${spelled.length}**`);
lines.push(`- not found: **${missing.length}**`, "");
if (spelled.length) {
  lines.push("| Wikipedia name | Route | KB spelling |");
  lines.push("|---|---|---|");
  for (const r of spelled) lines.push(`| ${r.name} | ${r.route} | ${r.alt.name_en} |`);
  lines.push("");
}
if (missing.length) {
  lines.push("| Road (Wikipedia) | Route | KB candidates |");
  lines.push("|---|---|---|");
  for (const r of missing) lines.push(`| ${r.name} | ${r.route} | ${suggest(r.name).join(", ") || "—"} |`);
  lines.push("");
}

writeFileSync(root + "docs/WIKI-CHECK.md", lines.join("\n") + "\n");

console.log(`source names : ${rows.length}`);
console.log(`found in KB  : ${found.length} (${((100 * found.length) / rows.length).toFixed(0)}%)`);
console.log(`spelling diff: ${spelled.length}`);
console.log(`not in OSM   : ${missing.length}`);
for (const r of spelled) console.log(`   ≈ ${r.name} → ${r.alt.name_en}`);
for (const r of missing.slice(0, 15)) console.log(`   ✗ ${r.name}  [${r.route}]`);
console.log("\nwrote docs/WIKI-CHECK.md");
