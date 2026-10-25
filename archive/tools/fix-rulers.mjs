import { readFileSync, writeFileSync } from "node:fs";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
let t = readFileSync(root + "data/streets.js", "utf8");

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ")
    .trim();

const patchByAr = (needle, fn) => {
  const box = {};
  new Function("window", t)(box);
  const card = box.STREETS.find(
    (c) => norm(c.ar).includes(norm(needle)) && !fixed.has(c.id) && /early Islamic|Emirati figure/.test(c.meaning.en)
  );
  if (!card) return false;
  const at = t.indexOf('"id": "' + card.id + '"');
  if (at < 0) return false;
  const start = t.lastIndexOf("{", at);
  const end = t.indexOf("\n}", at) + 2;
  const c = JSON.parse(t.slice(start, end));
  fn(c);
  fixed.add(c.id);
  t = t.slice(0, start) + JSON.stringify(c, null, 2) + t.slice(end);
  return true;
};

const PEOPLE = [
  ["أحمد بن راشد المعلا", {
    meaning: { en: "Ruler of Umm Al Quwain, 1911–1981", ar: "حاكم أم القيوين بين ١٩١١ و١٩٨١" },
    story: {
      en: "Sheikh Ahmed bin Rashid Al Mualla (1911–1981) ruled Umm Al Quwain until his death in February 1981, and is remembered as the founder of its modern development.",
      ar: "الشيخ أحمد بن راشد المعلا (١٩١١–١٩٨١) حاكم إمارة أم القيوين حتى وفاته في فبراير ١٩٨١، ويُعدّ مؤسس نهضتها الحديثة."
    },
    ref: ["Wikipedia — أحمد بن راشد المعلا", "https://ar.wikipedia.org/wiki/أحمد_بن_راشد_المعلا"]
  }],
  ["سعود بن راشد المعلا", {
    meaning: { en: "Ruler of Umm Al Quwain from 2009", ar: "حاكم أم القيوين منذ ٢٠٠٩" },
    story: {
      en: "Sheikh Saud bin Rashid Al Mualla (born 1952) became ruler of Umm Al Quwain on 2 January 2009, after the death of his father Sheikh Rashid bin Ahmed.",
      ar: "الشيخ سعود بن راشد المعلا (وُلد ١٩٥٢) تولّى حكم إمارة أم القيوين في ٢ يناير ٢٠٠٩ بعد وفاة والده الشيخ راشد بن أحمد."
    },
    ref: ["Wikipedia — سعود بن راشد المعلا", "https://ar.wikipedia.org/wiki/سعود_بن_راشد_المعلا"]
  }],
  ["سلطان بن أحمد المعلا", {
    meaning: { en: "Of the family that rules Umm Al Quwain", ar: "من الأسرة الحاكمة في أم القيوين" },
    story: {
      en: "The roundabout is named for Sheikh Sultan bin Ahmed Al Mualla, of the Al Mualla family that has ruled Umm Al Quwain since the 19th century.",
      ar: "سُمّي الدوار باسم الشيخ سلطان بن أحمد المعلا، من أسرة المعلا التي تحكم أم القيوين منذ القرن التاسع عشر."
    },
    ref: []
  }],
  ["محمد بن معلا المرر", {
    meaning: { en: "An Emirati figure of the Al Marar family", ar: "شخصية إماراتية من أسرة المرر" },
    story: {
      en: "The street is named for Mohamed bin Mualla Al Marar, an Emirati figure of the Al Marar family. No published biography of him was found.",
      ar: "سُمّي الشارع باسم محمد بن معلا المرر، وهو شخصية إماراتية من أسرة المرر، ولم يُعثر على ترجمة منشورة له."
    },
    ref: []
  }],
  ["خليفة بن زايد", {
    meaning: { en: "President of the United Arab Emirates, 2004–2022", ar: "رئيس دولة الإمارات بين ٢٠٠٤ و٢٠٢٢" },
    story: {
      en: "Sheikh Khalifa bin Zayed Al Nahyan (1948–2022) was the second President of the United Arab Emirates, from 2004 until his death, and ruler of Abu Dhabi.",
      ar: "الشيخ خليفة بن زايد آل نهيان (١٩٤٨–٢٠٢٢) الرئيس الثاني لدولة الإمارات من ٢٠٠٤ حتى وفاته، وحاكم إمارة أبوظبي."
    },
    ref: ["Wikipedia — خليفة بن زايد آل نهيان", "https://ar.wikipedia.org/wiki/خليفة_بن_زايد_آل_نهيان"]
  }],
  ["محمد بن راشد آل مكتوم", {
    meaning: { en: "Ruler of Dubai from 2006", ar: "حاكم دبي منذ ٢٠٠٦" },
    story: {
      en: "Sheikh Mohammed bin Rashid Al Maktoum (born 1949) has ruled Dubai since 2006, and is Vice President and Prime Minister of the United Arab Emirates.",
      ar: "الشيخ محمد بن راشد آل مكتوم (وُلد ١٩٤٩) حاكم إمارة دبي منذ ٢٠٠٦، ونائب رئيس الدولة ورئيس مجلس الوزراء."
    },
    ref: ["Wikipedia — محمد بن راشد آل مكتوم", "https://ar.wikipedia.org/wiki/محمد_بن_راشد_آل_مكتوم"]
  }],
  ["راشد بن سعيد", {
    meaning: { en: "Ruler of Dubai, 1958–1990", ar: "حاكم دبي بين ١٩٥٨ و١٩٩٠" },
    story: {
      en: "Sheikh Rashid bin Saeed Al Maktoum (1912–1990) ruled Dubai from 1958 until his death, and was the first Vice President of the United Arab Emirates.",
      ar: "الشيخ راشد بن سعيد آل مكتوم (١٩١٢–١٩٩٠) حاكم دبي من ١٩٥٨ حتى وفاته، وأول نائب لرئيس دولة الإمارات."
    },
    ref: ["Wikipedia — راشد بن سعيد آل مكتوم", "https://ar.wikipedia.org/wiki/راشد_بن_سعيد_آل_مكتوم"]
  }],
  ["فاطمة بنت مبارك", {
    meaning: { en: "Known as the Mother of the Emirates", ar: "تُلقّب بـ«أم الإمارات»" },
    story: {
      en: "Sheikha Fatima bint Mubarak, known as the Mother of the Emirates, is the widow of Sheikh Zayed and heads the General Women's Union.",
      ar: "الشيخة فاطمة بنت مبارك، المعروفة بـ«أم الإمارات»، زوجة الشيخ زايد، وترأس الاتحاد النسائي العام."
    },
    ref: ["Wikipedia — فاطمة بنت مبارك", "https://ar.wikipedia.org/wiki/فاطمة_بن_مبارك_الكتبي"]
  }]
];

let done = 0;
const fixed = new Set();
for (const [needle, data] of PEOPLE) {
  // every card that carries this name, not just the first
  let again = true;
  while (again) {
    again = patchByAr(needle, (c) => {
      c.origin = "documented";
      c.meaning = data.meaning;
      c.story = data.story;
      c.refs = data.ref.length ? [{ label: data.ref[0], url: data.ref[1] }] : [];
    });
    if (again) done++;
  }
}
fs.writeFileSync(root + "data/streets.js", t, "utf8");
console.log("cards rewritten:", done);
