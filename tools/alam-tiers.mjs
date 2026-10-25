/* Matches street names against the الأعلام index in tiers of confidence:

     exact    — identical once diacritics, hamza forms and spacing are removed
     high     — differs only by the article, a nisba ending, or the order of the
                patronymic ("بن X" / "X بن"), which cannot be another person
     probable — the name is a prefix of the entry or vice versa, with one extra
                token (kunya, nisba, or tribal suffix)

   Anything beyond that is left out: a wrong biography is worse than none. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const idx = JSON.parse(readFileSync(root + ".cache/alam-index.json", "utf8"));
const cards = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(cards);

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/* same person, written two ways: drop the article, unify بن/ابن, sort nothing */
const canon = (s) =>
  norm(s)
    .split(" ")
    .filter(Boolean)
    .map((w) => w.replace(/^ال/, "").replace(/^ابن$/, "بن"))
    .join(" ")
    .trim();

const tokens = (s) => canon(s).split(" ").filter(Boolean);
const flat = (s) => canon(s).replace(/ /g, "");

const entries = Object.entries(idx).map(([name, page]) => ({ name, page, c: canon(name), f: flat(name), t: tokens(name) }));
const byCanon = new Map();
for (const e of entries) if (!byCanon.has(e.c)) byCanon.set(e.c, e);

const wanted = cards.STREETS.filter((c) => c.origin !== "documented")
  .map((c) => ({ id: c.id, en: c.en, ar: String(c.ar).replace(/^(شارع|طريق|جادة|دوار|نفق|ساحة|ميدان|جسر)\s+/, "").trim() }));

const hits = [];
for (const w of wanted) {
  const c = canon(w.ar), f = flat(w.ar), t = tokens(w.ar);
  if (!c) continue;

  let m = byCanon.get(c), tier = "exact";

  if (!m) {
    // high: same tokens in another order, or with one nisba/patronymic extra
    for (const e of entries) {
      if (e.t.length === t.length && e.t.every((x) => t.includes(x))) { m = e; tier = "high"; break; }
      if (Math.abs(e.t.length - t.length) === 1) {
        const longer = e.t.length > t.length ? e.t : t;
        const shorter = e.t.length > t.length ? t : e.t;
        if (shorter.every((x, i) => longer[i] === x)) { m = e; tier = "high"; break; }
      }
    }
  }
  if (!m) {
    // probable: one is a prefix of the other on the flat form
    for (const e of entries) {
      if (e.f.startsWith(f) && e.f.length - f.length <= 10) { m = e; tier = "probable"; break; }
      if (f.startsWith(e.f) && f.length - e.f.length <= 6) { m = e; tier = "probable"; break; }
    }
  }
  if (m) hits.push({ id: w.id, en: w.en, ar: w.ar, entry: m.name, page: m.page, tier });
}

const order = { exact: 0, high: 1, probable: 2 };
hits.sort((a, b) => order[a.tier] - order[b.tier]);
writeFileSync(root + ".tmp/alam-tiers.json", JSON.stringify(hits, null, 1), "utf8");
for (const tier of ["exact", "high", "probable"]) {
  const list = hits.filter((h) => h.tier === tier);
  console.log("\n" + tier + ": " + list.length);
  list.slice(0, 12).forEach((h) => console.log("   " + h.ar.padEnd(28) + " → " + h.entry));
}
console.log("\ntotal:", hits.length, "of", wanted.length);
