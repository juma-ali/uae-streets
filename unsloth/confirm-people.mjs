/* Confirms or rejects each lead against Arabic Wikipedia.

   The model is a lead generator: it can be right (قتيبة بن مسلم، بركة بنت ثعلبة)
   and it can be confidently wrong (it gave الأصمعي as «عيسى بن صبيح المبرمان»,
   another man). So a lead becomes a fact only when an article exists AND the
   article's own words agree with the model's claim.

     node unsloth/confirm-people.mjs

   Writes .tmp/people-confirmed.json with name, claim, url, verdict. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const { clean } = JSON.parse(readFileSync(root + ".tmp/people-clean.json", "utf8"));

const UA = { "user-agent": "uae-streets-kb/1.0 (street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();
const words = (s) => new Set(norm(s).split(" ").filter((w) => w.length >= 4));
const shared = (a, b) => {
  const A = words(a), B = words(b);
  let n = 0;
  for (const w of A) if (B.has(w)) n++;
  return n;
};

async function batch(titles) {
  const out = new Map();
  for (let i = 0; i < titles.length; i += 40) {
    const chunk = titles.slice(i, i + 40);
    const u = "https://ar.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1"
      + "&prop=extracts&exintro&explaintext&titles=" + chunk.map(encodeURIComponent).join("%7C");
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(40000) });
    if (!r.ok) { console.log("  batch failed HTTP " + r.status); continue; }
    const j = await r.json();
    for (const p of j.query?.pages || []) {
      if (p.missing || !p.extract) continue;
      out.set((p.normalized || p.title).trim(), { title: p.title, url: "https://ar.wikipedia.org/wiki/" + encodeURIComponent(p.title), extract: p.extract.replace(/\s+/g, " ").trim() });
    }
    await sleep(1500);
  }
  return out;
}

const results = [];
const wanted = new Map();   /* candidate title → the lead(s) that asked for it */
for (const x of clean) {
  const base = norm(x.ar).replace(/^(شارع|طريق|جادة|دوار|دوارة)\s+/, "").trim();
  const candidates = [...new Set([
    base,
    base.replace(/^(ابن|بن)\s+/, ""),
    base.split(" ").slice(0, 2).join(" "),
    base.replace(/^الشيخ\s+/, "")
  ])].filter((c) => c && c.length >= 4);
  x._cands = candidates;
  for (const c of candidates) if (!wanted.has(c)) wanted.set(c, true);
}
console.log("names to look up:", wanted.size);
const pages = await batch([...wanted.keys()]);
console.log("articles found:", pages.size);

for (const x of clean) {
  const hit = x._cands.map((c) => pages.get(c)).find(Boolean);
  if (!hit) { results.push({ ...x, verdict: "no article", url: "" }); continue; }
  const overlap = shared(x.answer, hit.extract);
  results.push({ ...x, verdict: overlap >= 2 ? "confirmed" : "mismatch", url: hit.url, articleTitle: hit.title, overlap, extract: hit.extract.slice(0, 300) });
}

writeFileSync(root + ".tmp/people-confirmed.json", JSON.stringify(results, null, 1), "utf8");
const tally = results.reduce((a, r) => (a[r.verdict] = (a[r.verdict] || 0) + 1, a), {});
console.log("\nresults:", JSON.stringify(tally));

console.log("\n--- confirmed (safe to card) ---");
results.filter((r) => r.verdict === "confirmed").slice(0, 20).forEach((r) =>
  console.log("  " + r.ar.padEnd(24) + " → " + r.claim0 || r.answer.slice(0, 60)));
