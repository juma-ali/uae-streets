import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/* Eight cards that had no source now have one: the Arabic Wikipedia article
   whose introduction agrees with the claim. The model supplied the lead; the
   article supplies the fact and the citation. Text is written from the article,
   not from the model. */
const root = fileURLToPath(new URL("../", import.meta.url));
const confirmed = JSON.parse(readFileSync(root + ".tmp/people-confirmed.json", "utf8"));

const pick = (ar) => confirmed.find((r) => r.ar === ar && r.verdict === "confirmed");

const PLAN = {
  "الملك عبد العزيز": {
    meaning: { en: "King Abdulaziz, founder of Saudi Arabia", ar: "الملك عبد العزيز، مؤسس المملكة العربية السعودية" },
    story: {
      en: "Abdulaziz bin Abdul Rahman Al Saud (1876–1953) founded the Kingdom of Saudi Arabia and was its first king. The street carries the name of the founder of the neighbouring state.",
      ar: "عبد العزيز بن عبد الرحمن بن فيصل آل سعود (١٢٩٣–١٣٧٣هـ / ١٨٧٦–١٩٥٣م) مؤسس المملكة العربية السعودية وأول ملوكها. ويحمل الشارع اسم مؤسس الدولة المجاورة."
    }
  },
  "النعمان بن مالك": {
    meaning: { en: "An Ansari Companion who fought at Badr", ar: "صحابي من الأنصار، شهد بدراً" },
    story: {
      en: "Al-Nu'man ibn Malik al-Khazraji was a Companion of the Ansar, known as Ibn Qawqal. He fought at Badr and was killed at Uhud.",
      ar: "النعمان بن مالك الخزرجي، ويُعرف بابن قَوقَل، صحابي من الأنصار من بني غنم بن عوف من الخزرج. شهد بدراً، واستُشهد يوم أُحد."
    }
  },
  "بركة بنت ثعلبة": {
    meaning: { en: "Umm Ayman, the Prophet's nurse", ar: "أم أيمن، حاضنة النبي" },
    story: {
      en: "Baraka bint Tha'laba, known as Umm Ayman, was the Prophet's nurse and guardian. She was the wife of Zayd ibn Haritha and the mother of Usama ibn Zayd.",
      ar: "بركة بنت ثعلبة الحبشية، المعروفة بأم أيمن، حاضنة النبي ومربيته، وزوجة الصحابي زيد بن حارثة وأم أسامة بن زيد."
    }
  },
  "سيف غباش": {
    meaning: { en: "The first Minister of State for Foreign Affairs", ar: "أول وزير دولة للشؤون الخارجية" },
    story: {
      en: "Saif Saeed bin Ghobash Al Marri (1932–1977) was born in Ras Al Khaimah and became the first Minister of State for Foreign Affairs of the United Arab Emirates.",
      ar: "سيف سعيد بن غباش المري (١٩٣٢–١٩٧٧م) وُلد في حي المعيريض بإمارة رأس الخيمة، وكان أول وزير دولة للشؤون الخارجية في دولة الإمارات العربية المتحدة."
    }
  },
  "عبدالله النديم": {
    meaning: { en: "An Egyptian writer and orator", ar: "أديب وخطيب مصري" },
    story: {
      en: "Abdullah al-Nadim (1842–1896) was an Egyptian writer and poet, known as the orator of the Urabi revolt.",
      ar: "عبد الله بن مصباح النديم (١٢٦١–١٣١٤هـ / ١٨٤٢–١٨٩٦م) من أدباء مصر وشعرائها، ولُقّب بخطيب الثورة العرابية."
    }
  },
  "عبدالله عمران تريم": {
    meaning: { en: "An Emirati politician and media figure", ar: "سياسي وإعلامي إماراتي" },
    story: {
      en: "Abdullah Omran Taryam (1948–2014) was an Emirati politician and media figure who, with his elder brother Taryam Omran Taryam, took part in the founding of the United Arab Emirates.",
      ar: "عبد الله عمران تريم (١٩٤٨–٢٠١٤م) سياسي وإعلامي إماراتي بارز، شارك مع شقيقه الأكبر تريم عمران تريم في قيام دولة الإمارات العربية المتحدة."
    }
  },
  "نعيم بن مقرن": {
    meaning: { en: "A commander of the conquests in Persia", ar: "من قادة الفتوحات في بلاد فارس" },
    story: {
      en: "Nu'aym ibn Muqarrin al-Muzani, brother of al-Nu'man ibn Muqarrin, took up the banner at Nihawand after his brother fell, and the conquests in Persia were completed under him.",
      ar: "نعيم بن مقرن المزني، أخو النعمان بن مقرن. تولى الراية يوم نهاوند بعد مقتل أخيه، وكانت على يديه فتوح ببلاد فارس."
    }
  },
  "عبد الرحمن الناصر": {
    meaning: { en: "An Umayyad ruler of al-Andalus", ar: "من حكام الدولة الأموية في الأندلس" },
    story: {
      en: "Abd al-Rahman al-Nasir li-Din Allah (891–961) was the eighth Umayyad ruler of al-Andalus and the first to take the title of caliph there.",
      ar: "عبد الرحمن الناصر لدين الله (٢٧٧–٣٥٠هـ / ٨٩١–٩٦١م) ثامن حكام الدولة الأموية في الأندلس، وأول من لقّب بأمير المؤمنين فيها."
    }
  }
};

function objectAt(text, at) {
  let i = text.lastIndexOf("{", at), depth = 0, inStr = false, esc = false;
  for (let k = i; k < text.length; k++) {
    const ch = text[k];
    if (inStr) { if (esc) esc = false; else if (ch === "\\") esc = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; continue; }
    if (ch === "{") depth++;
    else if (ch === "}") { depth--; if (depth === 0) return { start: i, end: k + 1 }; }
  }
  return null;
}

let t = readFileSync("data/streets.js", "utf8");
const norm = (x) => String(x || "").replace(/[\u064B-\u0655\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "ا")
  .replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/\s+/g, " ").trim();
const box = {}; new Function("window", t)(box);
const byName = new Map();
for (const e of box.STREETS) {
  const k = norm(e.ar).replace(/^(شارع|طريق|جادة|دوار|دوارة|نفق|جسر|ساحة|ميدان)\s+/, "").replace(/^ال/, "");
  if (!byName.has(k)) byName.set(k, e.id);
}
let done = 0, missing = [];
for (const [name, plan] of Object.entries(PLAN)) {
  const rec = pick(name);
  if (!rec) { missing.push(name + " (not confirmed)"); continue; }
  const key = norm(name).replace(/^ال/, "");
  const id = byName.get(key);
  let at = -1;
  if (id) {
    at = t.indexOf('"id": "' + id + '"');
    if (at < 0) at = t.indexOf('id: "' + id + '"');
  }
  if (at < 0) { missing.push(name + " (card not found)"); continue; }
  const b = objectAt(t, at);
  if (!b) { missing.push(name + " (bad bounds)"); continue; }
  const c = new Function("return (" + t.slice(b.start, b.end) + ");")();
  c.origin = "documented";
  c.meaning = plan.meaning;
  c.story = plan.story;
  c.refs = [{ label: "ويكيبيديا العربية — " + (rec.articleTitle || name), url: rec.url }];
  t = t.slice(0, b.start) + JSON.stringify(c, null, 2) + t.slice(b.end);
  done++;
}
writeFileSync("data/streets.js", t, "utf8");
console.log("upgraded cards:", done);
if (missing.length) console.log("not done:", missing.join(" · "));
