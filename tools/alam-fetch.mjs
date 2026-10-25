/* Fetches the pages for the matched names and keeps the entry text, so it can
   be read before anything is written to a card. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (compatible; uae-streets-kb/1.0; street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const matches = JSON.parse(readFileSync(root + ".tmp/alam-matches.json", "utf8"));

const strip = (seg) =>
  seg
    .replace(/<span[^>]*class="anchor"[^>]*><\/span>/g, "")
    .replace(/<a [^>]*class="btn_tag[^>]*>[\s\S]*?<\/a>/g, "")
    .replace(/<\/(p|div|h\d|li)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();

const cache = new Map();
const out = [];
for (const m of matches) {
  if (!cache.has(m.page)) {
    let rec = null;
    for (let a = 0; a < 3 && !rec; a++) {
      try {
        const r = await fetch(`https://shamela.ws/book/12286/${m.page}`, { headers: UA, signal: AbortSignal.timeout(40000) });
        if (r.status !== 200) { await sleep(1500); continue; }
        const html = await r.text();
        const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
        const vm = /ج(\d+)\s*-\s*ص(\d+)/.exec(title);
        const i = html.indexOf('class="nass');
        const end = html.indexOf("تحميل الصفحة", i);
        const seg = i > 0 ? html.slice(i, end > i ? end : i + 14000) : "";
        rec = { vol: vm ? Number(vm[1]) : 0, page: vm ? Number(vm[2]) : 0, text: strip(seg).replace(/\s+/g, " ").trim() };
      } catch (e) { await sleep(1200); }
    }
    cache.set(m.page, rec);
    await sleep(500);
  }
  const rec = cache.get(m.page);
  if (!rec) continue;
  out.push({ ...m, vol: rec.vol, printed: rec.page, text: rec.text.slice(0, 1600) });
  console.log(m.ar + "  →  ج" + rec.vol + " ص" + rec.page);
}
writeFileSync(root + ".tmp/alam-entries.json", JSON.stringify(out, null, 1), "utf8");
console.log("entries fetched:", out.length);
