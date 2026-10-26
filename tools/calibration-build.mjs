/* Builds a calibration set from answers we have already verified.

   Before trusting a local model on 3,520 unknown names, we ask it 20 we can
   check. Ten people whose biography we hold from al-Zirikli with a page number,
   and ten words whose meaning we hold from a dictionary. The model never sees
   the answers; they stay in key.json for scoring. */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const OUT = root + "unsloth/calibration/";
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT + "tasks", { recursive: true });

const streets = {};
new Function("window", readFileSync(root + "data/streets.js", "utf8"))(streets);
const glossesAr = {};
new Function("window", readFileSync(root + "data/glosses-ar.js", "utf8"))(glossesAr);

const dict = {};
new Function("window", readFileSync(root + "data/dictionary.js", "utf8"))(dict);

/* people: documented, with an al-A'lam citation — so we hold a checked answer */
const people = streets.STREETS.filter(
  (e) => e.origin === "documented" && (e.refs || []).some((r) => /الأعلام/.test(r.label)) && e.story && e.story.ar
).slice(0, 10);

/* words: glossed from a source we trust, short and unambiguous */
const wordKeys = ["جرناس", "نهام", "بارجيل", "ليوان", "محماس", "بنديره", "حابول", "مخرافه", "مهباش", "ثبر"];
const words = wordKeys.filter((w) => dict.STREET_GLOSSES[w]).map((w) => ({ w, gloss: dict.STREET_GLOSSES[w], ar: glossesAr.GLOSS_AR[dict.STREET_GLOSSES[w]] || "" }));

const key = { people: [], words: [] };
people.forEach((e, i) => {
  const name = e.ar.replace(/^(شارع|طريق|جادة|دوار)\s+/, "").trim();
  key.people.push({ input: name, expected: e.story.ar.slice(0, 200), ref: (e.refs.find((r) => /الأعلام/.test(r.label)) || {}).label });
  writeFileSync(
    OUT + "tasks/p" + String(i + 1).padStart(2, "0") + ".txt",
    "من هو هذا الشخص؟ اكتب سطراً واحداً بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\n" +
      "إن لم تعرف فاكتب سطراً فارغاً.\n\n" + name + "\t" + e.en + "\n",
    "utf8"
  );
});
words.forEach((x, i) => {
  key.words.push({ input: x.w, expected: x.ar || x.gloss, expectedEn: x.gloss });
  writeFileSync(
    OUT + "tasks/w" + String(i + 1).padStart(2, "0") + ".txt",
    "ما معنى هذه الكلمة في اللهجة الإماراتية؟ سطر واحد بالعربية، ثم TAB، ثم رابط مصدر إن عرفته.\n" +
      "إن لم تعرف فاكتب سطراً فارغاً.\n\n" + x.w + "\n",
    "utf8"
  );
});
writeFileSync(OUT + "key.json", JSON.stringify(key, null, 1), "utf8");
console.log("calibration tasks:", people.length + words.length, "| people:", people.length, "| words:", words.length);
