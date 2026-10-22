#!/usr/bin/env node
/**
 * Corroborates street names against the open web, through a local SearXNG.
 *
 *   node tools/web-check.mjs --names "Mankhool Road;Al Rebat Street"
 *   node tools/web-check.mjs --csv data/verification-sample.csv --limit 25
 *
 * For each name it asks SearXNG for "<name> <emirate> UAE", then counts how many
 * results actually contain the name and whether any come from a source that
 * carries street names authoritatively (RTA, municipality, map services).
 *
 * This is evidence, not proof: a name with hits is corroborated, a name without
 * hits is only suspicious. Rate-limited to one query a second.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};

const BASE = arg("--searx", "http://localhost:8888");
const namesArg = arg("--names", "");
const csvPath = arg("--csv", "");
const limit = Number(arg("--limit", "0"));
const outPath = arg("--out", "docs/WEB-CHECK.md");
const DELAY = Number(arg("--delay", "1200"));

/* Sources that actually carry street names, not blogs that mention a road. */
const TRUSTED = /(^|\.)(rta\.ae|dubai\.gov\.ae|abudhabi\.ae|makani\.ae|dubaifaqs\.com|2gis\.|wikimapia\.org|openstreetmap\.org|google\.[a-z.]+|bayut\.com|propertyfinder\.ae|waze\.com)$/i;

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const core = (s) => norm(s).replace(/\b(street|road|st|rd|avenue|ave)\b/g, " ").replace(/\s+/g, " ").trim();

let targets = [];
if (namesArg) targets = namesArg.split(";").map((s) => s.trim()).filter(Boolean);
else if (csvPath) {
  const lines = readFileSync(root + csvPath, "utf8").replace(/^\uFEFF/, "").trim().split(/\r?\n/);
  const head = lines.shift();
  const cols = head.split(",").map((h) => h.replace(/"/g, "").trim());
  const iEn = cols.indexOf("name_en");
  const iEm = cols.indexOf("emirate");
  targets = lines.map((l) => {
    const f = [];
    let cur = "", q = false;
    for (let i = 0; i < l.length; i++) {
      const c = l[i];
      if (q) { if (c === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
      else if (c === '"') q = true;
      else if (c === ",") { f.push(cur); cur = ""; }
      else cur += c;
    }
    f.push(cur);
    return { name: f[iEn], emirate: iEm > -1 ? f[iEm] : "" };
  }).filter((t) => t.name);
}
/* Absence of web presence only means something for a road somebody would write
   about. Minor suburban streets are silent everywhere, so checking them measures
   the internet, not the data. */
if (process.argv.includes("--major")) {
  const sandbox = {};
  new Function("window", readFileSync(root + "data/kb.js", "utf8"))(sandbox);
  const major = sandbox.KB.streets.filter((s) => /^(motorway|trunk|primary|secondary)$/.test(s.kind));
  const step = Math.max(1, Math.floor(major.length / (limit || 40)));
  targets = major.filter((_, i) => i % step === 0).slice(0, limit || 40).map((s) => ({ name: s.name_en, emirate: s.emirate }));
  console.log("major roads selected:", targets.length, "of", major.length);
}
if (limit > 0 && !process.argv.includes("--major")) targets = targets.slice(0, limit);
if (!targets.length) {
  console.error("Nothing to check. Use --names or --csv.");
  process.exit(2);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const search = async (q) => {
  const url = `${BASE}/search?q=${encodeURIComponent(q)}&format=json`;
  const r = await fetch(url, { signal: AbortSignal.timeout(40000) });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
};

const rows = [];
for (const [i, t] of targets.entries()) {
  const name = typeof t === "string" ? t : t.name;
  const near = typeof t === "string" ? "UAE" : (t.emirate || "UAE") + " UAE";
  process.stdout.write(`[${i + 1}/${targets.length}] ${name} … `);
  let hits = [];
  try {
    const j = await search(`"${name}" ${near}`);
    hits = j.results || [];
  } catch (e) {
    console.log("query failed:", e.message);
    rows.push({ name, near, exact: 0, trusted: [], sampled: 0, error: e.message });
    await sleep(DELAY);
    continue;
  }
  const key = core(name);
  const tokens = key.split(" ").filter((x) => x.length > 2);
  const contains = (text) => {
    const n = norm(text);
    return tokens.length ? tokens.every((tok) => n.includes(tok)) : n.includes(key);
  };
  const exact = hits.filter((h) => contains((h.title || "") + " " + (h.content || "")));
  const trusted = exact
    .map((h) => ({ host: new URL(h.url).hostname.replace(/^www\./, ""), title: h.title || "" }))
    .filter((h) => TRUSTED.test(h.host));

  rows.push({ name, near, exact: exact.length, sampled: hits.length, trusted });
  console.log(`${exact.length}/${hits.length} match${trusted.length ? " · trusted: " + trusted[0].host : ""}`);
  await sleep(DELAY);
}

const corroborated = rows.filter((r) => r.trusted.length > 0);
const mentioned = rows.filter((r) => !r.trusted.length && r.exact > 0);
const silent = rows.filter((r) => r.exact === 0);

const lines = [];
lines.push("# Web corroboration", "");
lines.push(`Queried a local SearXNG for each name plus its emirate. ${rows.length} names.`, "");
lines.push(`- corroborated by a source that carries street names: **${corroborated.length}**`);
lines.push(`- mentioned only by other sites: **${mentioned.length}**`);
lines.push(`- no result contained the name: **${silent.length}**`, "");
lines.push("## Corroborated", "");
lines.push("| Street | Source |");
lines.push("|---|---|");
for (const r of corroborated) lines.push(`| ${r.name} | ${r.trusted[0].host} — ${r.trusted[0].title.slice(0, 60)} |`);
if (silent.length) {
  lines.push("", "## No corroboration found", "");
  lines.push("| Street | Results examined |");
  lines.push("|---|---|");
  for (const r of silent) lines.push(`| ${r.name} | ${r.sampled} |`);
}
writeFileSync(root + outPath, lines.join("\n") + "\n");

console.log(`\ncorroborated ${corroborated.length} · mentioned ${mentioned.length} · silent ${silent.length}`);
console.log(`wrote ${outPath}`);
