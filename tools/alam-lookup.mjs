/* Looks up street names in the mirrored الأعلام and keeps the entry text with
   its printed citation (volume and page). */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const SRC = root + ".cache/alam-pages.jsonl";
if (!existsSync(SRC)) { console.log("no mirror yet"); process.exit(0); }

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/* Pages are stored as they come: leftovers of the previous entry, then this
   page's entry. Cut the tail that belongs to the next heading. */
const pages = [];
for (const line of readFileSync(SRC, "utf8").split("\n")) {
  if (!line.trim()) continue;
  try {
    const j = JSON.parse(line);
    if (j.name && j.text) pages.push(j);
  } catch {}
}
const byName = new Map();
for (const p of pages) {
  const k = norm(p.name);
  if (!k) continue;
  if (!byName.has(k)) byName.set(k, p);
}
console.log("pages:", pages.length, "| distinct entry titles:", byName.size);

const cardFile = readFileSync(root + "data/streets.js", "utf8");
const cards = {};
new Function("window", cardFile)(cards);
const wanted = cards.STREETS.filter((c) => c.origin !== "documented")
  .map((c) => ({ id: c.id, en: c.en, ar: String(c.ar).replace(/^(شارع|طريق|جادة|دوار|نفق|ساحة|ميدان|جسر)\s+/, "").trim() }));

const hits = [];
for (const w of wanted) {
  const k = norm(w.ar);
  if (!k) continue;
  let rec = byName.get(k);
  if (!rec) {
    // the dictionary files Ibn X under X, and drops the article
    const alt = k.replace(/^ال/, "");
    for (const [name, p] of byName) {
      if (name === alt || name.startsWith(alt + " ") || alt.startsWith(name + " ")) { rec = p; break; }
    }
  }
  if (!rec) continue;
  const flat = rec.text.replace(/قدس/g, "");
  const at = flat.indexOf(norm(rec.name).split(" ")[0]);
  const entry = flat.slice(at >= 0 ? at : 0, (at >= 0 ? at : 0) + 600).trim();
  hits.push({ id: w.id, ar: w.ar, en: w.en, name: rec.name, vol: rec.vol, page: rec.page, entry });
}
writeFileSync(root + ".tmp/alam-hits.json", JSON.stringify(hits, null, 1), "utf8");
console.log("names matched:", hits.length, "of", wanted.length);
hits.slice(0, 6).forEach((h) => console.log("\n[" + h.name + "]  ج" + h.vol + " ص" + h.page + "\n   " + h.entry.slice(0, 220)));
