#!/usr/bin/env node
/**
 * Resolves person street names to Wikipedia articles in bulk.
 *
 *   node tools/wiki-cards.mjs
 *
 * Per-name Wikipedia search takes ~7s each — 1,500 names would be three hours.
 * One Wikidata query can match hundreds of names at once against human items
 * (P31 = Q5) whose Arabic label is *exactly* the street's name, which is a much
 * stricter test than free-text search: «عرقوب بن سالمين» cannot drift onto a
 * Palestinian poet when we ask for an exact label.
 *
 * Results land in .cache/wiki-cards.json; .tmp/wiki-candidates.json holds those
 * with an Arabic article, for review before anything is published.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (f, g) => {
  const box = {};
  new Function("window", readFileSync(root + f, "utf8"))(box);
  return box[g];
};

const KB = load("data/kb.js", "KB");
const CATS = load("data/categories.js", "STREET_CATEGORIES");
const ED = load("data/streets.js", "STREETS");

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/^شارع\s+/, "").replace(/\s+/g, " ").trim();

const core = (s) => norm(String(s || "").replace(/^(شارع|طريق|جادة)\s+/, "").split(" ").slice(0, 4).join(" "));

const carded = new Set(ED.map((e) => norm(e.ar)));
const names = new Map();
for (const s of KB.streets) {
  if (CATS[s.osm] !== "person") continue;
  const c = core(s.name_ar);
  if (!c || carded.has(c) || names.has(c)) continue;
  names.set(c, { en: s.name_en, emirate: s.emirate });
}

mkdirSync(root + ".cache", { recursive: true });
const out = root + ".cache/wiki-cards.json";
const cache = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : {};

const SPARQL = "https://query.wikidata.org/sparql";
const UA = { "user-agent": "uae-streets-kb/1.0 (https://github.com/juma-ali/uae-streets)", accept: "application/sparql-results+json" };

const todo = [...names.keys()].filter((n) => !(cache[n] && cache[n].qid));
console.log(`names: ${names.size} | still unresolved: ${todo.length}`);

const CHUNK = 200;
for (let i = 0; i < todo.length; i += CHUNK) {
  const chunk = todo.slice(i, i + CHUNK);
  const values = chunk.map((n) => '"' + n.replace(/"/g, '\\"') + '"@ar').join(" ");
  const query = `
SELECT ?name ?item ?article WHERE {
  VALUES ?name { ${values} }
  ?item rdfs:label ?name .
  ?item wdt:P31 wd:Q5 .
  OPTIONAL { ?article schema:about ?item ; schema:isPartOf <https://ar.wikipedia.org/> . }
}`;
  try {
    const r = await fetch(SPARQL, { method: "POST", headers: { ...UA, "content-type": "application/x-www-form-urlencoded" }, body: "query=" + encodeURIComponent(query), signal: AbortSignal.timeout(120000) });
    if (!r.ok) { console.log("HTTP", r.status, await r.text().then(t => t.slice(0, 120))); continue; }
    const j = await r.json();
    let hits = 0;
    for (const b of j.results.bindings) {
      const name = b.name.value;
      const qid = b.item.value.split("/").pop();
      const article = b.article ? decodeURIComponent(b.article.value.replace("https://ar.wikipedia.org/wiki/", "")) : "";
      cache[name] = { qid, title: article.replace(/_/g, " "), en: (names.get(name) || {}).en, emirate: (names.get(name) || {}).emirate };
      if (article) hits++;
    }
    console.log(`chunk ${i / CHUNK + 1}: ${chunk.length} names → ${j.results.bindings.length} matches (${hits} with an Arabic article)`);
  } catch (e) { console.log("chunk failed:", e.message.slice(0, 80)); }
  await new Promise((r) => setTimeout(r, 1500));
  writeFileSync(out, JSON.stringify(cache, null, 1));
}

const candidates = Object.entries(cache).filter(([, v]) => v && v.title);
writeFileSync(root + ".tmp/wiki-candidates.json", JSON.stringify(candidates, null, 1));
console.log(`matched: ${Object.keys(cache).length} | with Arabic article: ${candidates.length}`);
