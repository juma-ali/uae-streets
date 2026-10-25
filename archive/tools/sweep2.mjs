/* Sweep 2 — the first pass required the whole name to match a Wikipedia *title*.
   These five hand-found cards showed the miss: the sign writes عبدالله as one
   word, Wikipedia writes عبد الله as two. So this pass:
     1. normalises harder (no spaces, no hamza forms, no diacritics, ى→ي, ة→ه),
     2. searches the article TEXT with a phrase query, not just titles,
     3. accepts a hit only if the normalised intro actually contains the name. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "uae-streets-kb/1.0 (street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const hard = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")   // diacritics, tatweel
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF]/g, "")              // drop spaces and punctuation
    .replace(/ابن/g, "بن")
    .trim();

const box = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(box);
const pending = box.STREETS.filter((c) => c.origin !== "documented")
  .map((c) => ({
    id: c.id,
    en: c.en,
    ar: String(c.ar).replace(/^(شارع|طريق|جادة)\s+/, "").trim(),
    key: hard(String(c.ar).replace(/^(شارع|طريق|جادة)\s+/, "")),
  }))
  .filter((c) => c.key.length >= 6);
console.log("names to sweep:", pending.length);

const hits = [];
let checked = 0;
for (const p of pending) {
  checked++;
  try {
    const u =
      "https://ar.wikipedia.org/w/api.php?action=query&list=search&format=json&formatversion=2&srlimit=3&srsearch=" +
      encodeURIComponent('"' + p.ar + '"');
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(15000) });
    const j = await r.json();
    const titles = ((j.query && j.query.search) || []).map((s) => s.title);
    if (titles.length) hits.push({ ...p, titles });
  } catch (e) {}
  if (checked % 100 === 0) console.log("checked", checked, "| with hits", hits.length);
  await sleep(200);
}
console.log("names with search hits:", hits.length);
writeFileSync(root + ".tmp/sweep2-hits.json", JSON.stringify(hits, null, 1), "utf8");

// intros for every title we saw
const titles = [...new Set(hits.flatMap((h) => h.titles))];
const intros = {};
for (let i = 0; i < titles.length; i += 10) {
  const batch = titles.slice(i, i + 10);
  const q = batch.map((t) => encodeURIComponent(t.replace(/ /g, "_"))).join("%7C");
  try {
    const u =
      "https://ar.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&formatversion=2&redirects=1&titles=" +
      q;
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) });
    const j = await r.json();
    for (const pg of (j.query && j.query.pages) || []) {
      if (pg.extract) intros[pg.title] = pg.extract.replace(/\s+/g, " ").trim();
    }
  } catch (e) {}
  if ((i / 10) % 20 === 0) console.log("intros", Object.keys(intros).length);
  await sleep(600);
}
writeFileSync(root + ".tmp/sweep2-intros.json", JSON.stringify(intros, null, 1), "utf8");

// accept only where the intro really names this person
const accepted = [];
for (const h of hits) {
  for (const t of h.titles) {
    const intro = intros[t];
    if (!intro) continue;
    if (hard(intro).includes(h.key)) {
      accepted.push({ id: h.id, en: h.en, ar: h.ar, title: t, intro });
      break;
    }
  }
}
writeFileSync(root + ".tmp/sweep2-accepted.json", JSON.stringify(accepted, null, 1), "utf8");
console.log("DONE | hits:", hits.length, "| intros:", Object.keys(intros).length, "| ACCEPTED:", accepted.length);
