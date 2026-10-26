/* Confirms or rejects each lead against Arabic Wikipedia, one title at a time.

   Two earlier attempts failed:
   - 250 individual requests tripped the API's rate limit (HTTP 429);
   - batching 40 titles per call lost the mapping between the title asked for
     and the title returned (normalised or redirected), so names that do exist
     were reported missing.
   So: one request at a time, a second apart, with backoff on 429. Slow and dull,
   but it returns the truth about whether an article exists. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const { clean } = JSON.parse(readFileSync(root + ".tmp/people-clean.json", "utf8"));

const UA = { "user-agent": "uae-streets-kb/1.0 (street-name research; contact: local project)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();
const words = (s) => new Set(norm(s).split(" ").filter((w) => w.length >= 4));
const shared = (a, b) => { const A = words(a), B = words(b); let n = 0; for (const w of A) if (B.has(w)) n++; return n; };

async function article(title) {
  const u = "https://ar.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1"
    + "&prop=extracts&exintro&explaintext&titles=" + encodeURIComponent(title);
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) });
    if (r.status === 429) { await sleep(5000 * (attempt + 1)); continue; }
    if (!r.ok) return null;
    const j = await r.json();
    const p = (j.query?.pages || [])[0] || {};
    if (p.missing || !p.extract) return null;
    return { title: p.title, url: "https://ar.wikipedia.org/wiki/" + encodeURIComponent(p.title), extract: p.extract.replace(/\s+/g, " ").trim() };
  }
  return null;
}

const results = [];
let i = 0, found = 0;
for (const x of clean) {
  i++;
  const base = norm(x.ar).replace(/^(شارع|طريق|جادة|دوار|دوارة)\s+/, "").trim();
  const candidates = [...new Set([
    base,
    base.replace(/^(ابن|بن)\s+/, ""),
    base.split(" ").slice(0, 2).join(" "),
    base.replace(/^الشيخ\s+/, "")
  ])].filter((c) => c && c.length >= 4);

  let hit = null;
  for (const c of candidates) {
    hit = await article(c);
    await sleep(1100);
    if (hit) break;
  }

  if (!hit) { results.push({ ar: x.ar, en: x.en, answer: x.answer, verdict: "no article" }); continue; }
  found++;
  const overlap = shared(x.answer, hit.extract);
  results.push({
    ar: x.ar, en: x.en, answer: x.answer,
    verdict: overlap >= 2 ? "confirmed" : "mismatch",
    url: hit.url, articleTitle: hit.title, overlap, extract: hit.extract.slice(0, 320)
  });
  if (i % 20 === 0) console.log("checked " + i + "/" + clean.length + " | articles found: " + found);
}

writeFileSync(root + ".tmp/people-confirmed.json", JSON.stringify(results, null, 1), "utf8");
const tally = results.reduce((a, r) => (a[r.verdict] = (a[r.verdict] || 0) + 1, a), {});
console.log("\nresults:", JSON.stringify(tally));
for (const r of results.filter((r) => r.verdict === "confirmed").slice(0, 15)) {
  console.log("  " + r.ar.padEnd(24) + " → " + r.answer.slice(0, 62));
}
