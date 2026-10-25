/* Second pass over the A'lam index: drop junk entries, match with a stricter
   rule, then fetch the entry pages so each candidate can be read before it is
   believed. Writes .tmp/alam-candidates.json with tier + snippet. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const UA = { "user-agent": "Mozilla/5.0 (compatible; uae-streets-kb/1.0; street-name research)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const idxRaw = JSON.parse(readFileSync(root + ".cache/alam-index.json", "utf8"));
const idx = Object.fromEntries(
  Object.entries(idxRaw).filter(([name]) => {
    const words = name.trim().split(/\s+/).length;
    if (name.trim().length < 5) return false;                 // "ال", "علي"
    if (words === 1 && name.trim().length < 6) return false;  // too generic
    return /^[\u0600-\u06FF]/.test(name);
  })
);
const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s]/g, " ").replace(/\s+/g, " ").trim();
const canon = (s) => norm(s).split(" ").map((w) => w.replace(/^ال/, "")).join(" ").trim();
const tokens = (s) => canon(s).split(" ").filter(Boolean);

const cards = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(cards);
const wanted = cards.STREETS.filter((c) => c.origin !== "documented")
  .map((c) => ({ id: c.id, en: c.en, ar: String(c.ar).replace(/^(شارع|طريق|جادة|دوار|نفق|ساحة|ميدان|جسر)\s+/, "").trim() }));

const byCanon = new Map();
for (const [name, page] of Object.entries(idx)) {
  const c = canon(name);
  if (!byCanon.has(c)) byCanon.set(c, { name, page });
}

const found = [];
for (const w of wanted) {
  const c = canon(w.ar), t = tokens(w.ar);
  let e = byCanon.get(c), tier = "exact";
  if (!e && t.length >= 2) {
    // high: same token count, every token present on both sides, order may differ
    for (const [ck, cand] of byCanon) {
      const ct = ck.split(" ").filter(Boolean);
      if (ct.length !== t.length) continue;
      if (!t.every((x) => ct.includes(x))) continue;
      e = cand; tier = "high"; break;
    }
  }
  if (!e && t.length >= 2) {
    // probable: the entry carries one extra token (kunya or nisba) at either end
    for (const [ck, cand] of byCanon) {
      const ct = ck.split(" ").filter(Boolean);
      if (Math.abs(ct.length - t.length) !== 1) continue;
      const longer = ct.length > t.length ? ct : t;
      const shorter = ct.length > t.length ? t : ct;
      if (shorter.every((x, i) => longer[i] === x)) { e = cand; tier = "probable"; break; }
    }
  }
  if (e) found.push({ ...w, entry: e.name, page: e.page, tier });
}
console.log("index kept:", Object.keys(idx).length, "| candidates:", found.length,
  "| exact:", found.filter((f) => f.tier === "exact").length,
  "high:", found.filter((f) => f.tier === "high").length,
  "probable:", found.filter((f) => f.tier === "probable").length);

const strip = (seg) =>
  seg.replace(/<span[^>]*class="anchor"[^>]*><\/span>/g, "")
    .replace(/<a [^>]*class="btn_tag[^>]*>[\s\S]*?<\/a>/g, "")
    .replace(/<\/(p|div|h\d|li)>/gi, "\n").replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/[ \t]+/g, " ").replace(/\n{2,}/g, "\n").trim();

const cache = new Map();
for (const f of found) {
  if (!cache.has(f.page)) {
    let rec = null;
    for (let a = 0; a < 2 && !rec; a++) {
      try {
        const r = await fetch(`https://shamela.ws/book/12286/${f.page}`, { headers: UA, signal: AbortSignal.timeout(40000) });
        if (r.status !== 200) { await sleep(1200); continue; }
        const html = await r.text();
        const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
        const vm = /ج(\d+)\s*-\s*ص(\d+)/.exec(title);
        const i = html.indexOf('class="nass');
        const end = html.indexOf("تحميل الصفحة", i);
        rec = { vol: vm ? Number(vm[1]) : 0, printed: vm ? Number(vm[2]) : 0,
          text: strip(i > 0 ? html.slice(i, end > i ? end : i + 14000) : "") };
      } catch (e) { await sleep(1000); }
    }
    cache.set(f.page, rec);
    await sleep(450);
  }
  const rec = cache.get(f.page);
  if (!rec) continue;
  const st = norm(rec.text.replace(/^[^>]{0,140}>/, ""));
  const at = st.replace(/ /g, "").indexOf(canon(f.entry).replace(/ /g, ""));
  let snippet = "";
  if (at >= 0) {
    let count = 0, pos = 0;
    for (; pos < st.length && count < at; pos++) if (st[pos] !== " ") count++;
    snippet = st.slice(pos, pos + 400).trim();
  }
  f.vol = rec.vol; f.printed = rec.printed; f.snippet = snippet;
}
writeFileSync(root + ".tmp/alam-candidates.json", JSON.stringify(found, null, 1), "utf8");
const withText = found.filter((f) => f.snippet && /صحاب|تابع|فقيه|امام|شاعر|محدث|قاض|امير|ملك|خليفه|جد /.test(f.snippet));
console.log("with a readable identification:", withText.length);
