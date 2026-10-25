/* Harvests term → definition pairs from every article in the Bin Hweirb
   research centre's UAE knowledge category, then reports which of our
   unglossed street words they explain. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36", "accept-language": "ar" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const norm = (s) =>
  String(s || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();

const cards = {};
new Function("window", readFileSync(root + "data/cards.js", "utf8"))(cards);
const unglossed = new Map();
for (const r of cards.ROADS.rows) {
  if (r[6] || r[3] !== "word") continue;
  const k = norm(String(r[1] || "").replace(/^(شارع|طريق|جادة)\s+/, "")).replace(/^ال/, "");
  if (k) unglossed.set(k, String(r[1] || ""));
}

const posts = JSON.parse(readFileSync(root + ".tmp/jbhsc-posts.json", "utf8"))
  .filter((u) => /^https:\/\/jbhsc\.ae\/[^/]+\/?$/.test(u) && !/rpc\.php|\/(نحن|الرئيسية|اتصل|من)/.test(decodeURIComponent(u)));

const entries = [];
const seen = new Set();
for (let i = 0; i < posts.length; i++) {
  const u = posts[i];
  try {
    const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) });
    if (r.status !== 200) continue;
    const html = await r.text();
    const plain = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<br\s*\/?>/gi, "\n").replace(/<\/(p|div|li|td|tr|h\d|figcaption)>/gi, "\n").replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
      .replace(/[ \t]+/g, " ").trim();
    const lines = plain.split("\n").map((l) => l.trim()).filter(Boolean);
    for (const l of lines) {
      const m = /^([\u0600-\u06FF][\u0600-\u06FF\s\/ـ]{1,30}?)\s*[:：]\s*(.{12,400})$/.exec(l);
      if (!m) continue;
      const names = m[1].split("/").map((s) => s.trim()).filter(Boolean);
      const def = m[2].trim();
      const key = names.join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      entries.push({ names, def, url: u });
    }
  } catch (e) {}
  if ((i + 1) % 20 === 0) console.log("pages", i + 1, "/", posts.length, "| entries:", entries.length);
  await sleep(250);
}
writeFileSync(root + ".tmp/jbhsc-all-entries.json", JSON.stringify(entries, null, 1), "utf8");
console.log("pages:", posts.length, "| entries:", entries.length);

const hits = [];
for (const e of entries) {
  for (const n of e.names) {
    const k = norm(n).replace(/^ال/, "");
    if (unglossed.has(k)) { hits.push({ word: unglossed.get(k), term: n, def: e.def, url: e.url }); break; }
  }
}
writeFileSync(root + ".tmp/jbhsc-all-hits.json", JSON.stringify(hits, null, 1), "utf8");
console.log("hits:", hits.length);
hits.slice(0, 30).forEach((h) => console.log("\n   " + h.word.padEnd(18) + " ← " + h.term + "\n      " + h.def.slice(0, 140)));
