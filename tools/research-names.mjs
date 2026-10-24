/* Search Arabic Wikipedia for each unsourced person name and keep the matches.
   Two passes: opensearch for titles (cheap), then batch intros for the hits. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "uae-streets-kb/1.0 (street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/^ال/, "")
    .replace(/\s+/g, " ")
    .trim();

const candidates = JSON.parse(readFileSync(root + ".tmp/research-candidates.json", "utf8"));
console.log("candidates:", candidates.length);

const accepted = [];
let checked = 0;
for (const c of candidates) {
  checked++;
  try {
    const u =
      "https://ar.wikipedia.org/w/api.php?action=opensearch&format=json&limit=3&search=" +
      encodeURIComponent(c.ar);
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(15000) });
    const [, titles] = await r.json();
    const want = norm(c.ar);
    const hit = (titles || []).find((t) => {
      const got = norm(t);
      return got === want || got.startsWith(want) || want.startsWith(got);
    });
    if (hit) accepted.push({ id: c.id, ar: c.ar, en: c.en, title: hit });
  } catch (e) {
    /* skip this name, keep going */
  }
  if (checked % 100 === 0) console.log("checked", checked, "| accepted", accepted.length);
  await sleep(220);
}
console.log("accepted titles:", accepted.length);
writeFileSync(root + ".tmp/research-titles.json", JSON.stringify(accepted, null, 1), "utf8");

const intros = {};
for (let i = 0; i < accepted.length; i += 20) {
  const batch = accepted.slice(i, i + 20).map((a) => a.title);
  try {
    const u =
      "https://ar.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&formatversion=2&redirects=1&titles=" +
      encodeURIComponent(batch.join("|"));
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) });
    const j = await r.json();
    for (const p of (j.query && j.query.pages) || []) {
      if (p.extract) intros[p.title] = p.extract.replace(/\s+/g, " ").trim();
    }
  } catch (e) {}
  if ((i / 20) % 10 === 0) console.log("intros", Object.keys(intros).length);
  await sleep(700);
}
writeFileSync(root + ".tmp/research-intros.json", JSON.stringify(intros, null, 1), "utf8");
console.log("DONE | titles:", accepted.length, "| intros:", Object.keys(intros).length);
