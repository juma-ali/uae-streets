/* Turn the research sweep results into cards: only where the Arabic intro
   actually names the person, and never where the intro is about politics. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const titles = JSON.parse(readFileSync(root + ".tmp/research-titles.json", "utf8"));
const intros = JSON.parse(readFileSync(root + ".tmp/research-intros.json", "utf8"));
const box = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(box);
const cards = box.STREETS;
const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/^شارع\s+/, "")
    .replace(/\s+/g, " ")
    .trim();

const tidy = (x) =>
  String(x || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;])/g, "$1")
    .trim();

const firstSentence = (t, max) => {
  const s = tidy(t);
  const cut = s.slice(0, max);
  const stop = cut.lastIndexOf(". ");
  return (stop > 40 ? cut.slice(0, stop + 1) : cut).trim();
};

/* One English line, from the Arabic intro's own first clause. */
const ROLE = [
  [/صحابي[ة]?/, "a companion of the Prophet Muhammad"],
  [/تابعي[ة]?/, "a Tabi'i"],
  [/محدث|راوي|رواة الحديث/, "a narrator of hadith"],
  [/فقيه/, "a jurist"],
  [/شاعر[ة]?/, "a poet"],
  [/قارئ|مقرئ|قراءات/, "a reciter of the Quran"],
  [/مؤرخ/, "a historian"],
  [/عالم|إمام/, "a scholar"],
  [/قاض/, "a judge"],
  [/فارس|قائد/, "a military commander"],
  [/خطاط/, "a calligrapher"],
  [/نحوي|لغوي/, "a grammarian"],
  [/طبيب/, "a physician"],
  [/رحال|رحّال/, "a traveller"],
  [/صوفي|زاهد/, "an ascetic"]
];
const BAD = /(سياس|رئيس|وزير|ملك|أمير المؤمنين|انقلاب|حزب|معارضة|ثورة)/;

const out = [];
const skipped = { noIntro: 0, political: 0, noRole: 0, exists: 0 };
const have = new Set(cards.map((c) => String(c.ar).replace(/^(شارع|طريق)\s+/, "")));

for (const t of titles) {
  const intro = intros[t.title];
  if (!intro) { skipped.noIntro++; continue; }
  const bare = t.ar.replace(/^(شارع|طريق)\s+/, "");
  if (have.has(bare)) { skipped.exists++; continue; }
  if (BAD.test(intro.slice(0, 220))) { skipped.political++; continue; }
  const role = (ROLE.find(([re]) => re.test(intro)) || [])[1];
  if (!role) { skipped.noRole++; continue; }
  const enName = t.en.replace(/\s+(Street|Road|Square|St|Roundabout|Tunnel)\s*$/i, "").trim();
  const storyEn = enName + " was " + role + ".";
  let storyAr = firstSentence(intro, 240);
  if (!/[.؟!]$/.test(storyAr)) storyAr = storyAr.replace(/[،؛\s]+$/, "") + ".";
  out.push({
    id: String(t.en).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: t.ar,
    en: t.en,
    meaning: { en: enName + " — " + role.replace(/^an? /, ""), ar: "من أعلام صدر الإسلام" },
    story: { en: storyEn, ar: storyAr },
    refs: [{ label: "Wikipedia — " + t.title, url: "https://ar.wikipedia.org/wiki/" + encodeURIComponent(t.title.replace(/ /g, "_")) }]
  });
}

writeFileSync(root + ".tmp/research-cards.json", JSON.stringify(out, null, 1), "utf8");
console.log("cards composed:", out.length);
console.log("skipped:", JSON.stringify(skipped));
out.slice(0, 8).forEach((c) => console.log("\n" + c.ar + "\n  " + c.story.en));
