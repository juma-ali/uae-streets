/* Second pass: for names that already have a card, upgrade it with the sourced
   text the sweep found. New names become new cards. */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const titles = JSON.parse(readFileSync(root + ".tmp/research-titles.json", "utf8"));
const intros = JSON.parse(readFileSync(root + ".tmp/research-intros.json", "utf8"));

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
  [/خطاط/, "a calligrapher"],
  [/نحوي|لغوي/, "a grammarian"],
  [/طبيب/, "a physician"],
  [/راوية|رواة/, "a transmitter of poetry"],
  [/أديب/, "a man of letters"]
];
const AR_ROLE = {
  "a companion of the Prophet Muhammad": "صحابي من أصحاب النبي محمد",
  "a Tabi'i": "تابعي من التابعين",
  "a narrator of hadith": "من رواة الحديث",
  "a jurist": "فقيه",
  "a poet": "شاعر",
  "a reciter of the Quran": "من قرّاء القرآن",
  "a historian": "مؤرخ",
  "a scholar": "من العلماء",
  "a judge": "قاضٍ",
  "a calligrapher": "خطاط",
  "a grammarian": "من علماء النحو",
  "a physician": "طبيب",
  "a transmitter of poetry": "من رواة الشعر",
  "a man of letters": "أديب"
};

const BAD = /(سياس|رئيس|وزير|ملك|انقلاب|حزب|معارضة|ثورة)/;

let raw = readFileSync(root + "data/streets.js", "utf8");
const box = {};
new Function("window", raw)(box);
const byAr = new Map(box.STREETS.map((c) => [String(c.ar).replace(/^(شارع|طريق)\s+/, ""), c]));

const upgrades = [];
const fresh = [];
for (const t of titles) {
  const intro = intros[t.title];
  if (!intro) continue;
  const bare = t.ar.replace(/^(شارع|طريق)\s+/, "");
  if (BAD.test(intro.slice(0, 240))) continue;
  const role = (ROLE.find(([re]) => re.test(intro)) || [])[1];
  if (!role) continue;
  const enName = t.en.replace(/\s+(Street|Road|Square|St|Roundabout|Tunnel|Boulevard)\s*$/i, "").trim();
  let storyAr = bare + " " + (AR_ROLE[role] || "") + ".";
  if (!AR_ROLE[role]) storyAr = firstSentence(intro, 200);
  const storyEn = enName + " was " + role + ".";
  const ref = { label: "Wikipedia — " + t.title, url: "https://ar.wikipedia.org/wiki/" + encodeURIComponent(t.title.replace(/ /g, "_")) };
  const existing = byAr.get(bare);
  if (existing) upgrades.push({ id: existing.id, storyEn, storyAr, role, enName, ref });
  else fresh.push({ ar: t.ar, en: t.en, role, enName, storyEn, storyAr, ref });
}

for (const u of upgrades) {
  const at = raw.indexOf('"id": "' + u.id + '"');
  if (at < 0) continue;
  const start = raw.lastIndexOf("{", at);
  const end = raw.indexOf("\n}", at) + 2;
  const card = JSON.parse(raw.slice(start, end));
  card.origin = "documented";
  card.meaning = { en: u.enName + " — " + u.role.replace(/^an? /, ""), ar: card.meaning.ar || "من أعلام صدر الإسلام" };
  card.story = { en: u.storyEn, ar: u.storyAr };
  card.refs = [u.ref];
  raw = raw.slice(0, start) + JSON.stringify(card, null, 2) + raw.slice(end);
}

const added = [];
for (const f of fresh) {
  added.push({
    id: String(f.en).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    emirate: "abu-dhabi",
    category: "person",
    origin: "documented",
    ar: f.ar,
    en: f.en,
    meaning: { en: f.enName + " — " + f.role.replace(/^an? /, ""), ar: "من أعلام صدر الإسلام" },
    story: { en: f.storyEn, ar: f.storyAr },
    refs: [f.ref]
  });
}
if (added.length) {
  raw = raw.replace(/\];\s*$/, "").replace(/\s*$/, "") + ",\n" + added.map((e) => JSON.stringify(e, null, 2)).join(",\n") + "\n];\n";
}
writeFileSync(root + "data/streets.js", raw, "utf8");
console.log("upgraded:", upgrades.length, "| new cards:", added.length);
upgrades.slice(0, 5).forEach((u) => console.log("  ↑ " + u.enName + " → " + u.storyEn));
