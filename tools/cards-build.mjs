#!/usr/bin/env node
/**
 * Builds data/cards.js — a compact index of every road, for the card grid.
 *
 *   node tools/cards-build.mjs
 *
 * The page must not load data/kb.js (4.7 MB). This file carries only what a card
 * shows: both names, district, category, route, former name, gloss, and the id of
 * a curated story if one exists. Districts are factored into a table so the rows
 * stay short.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const load = (f, g) => {
  const box = {};
  new Function("window", readFileSync(root + f, "utf8"))(box);
  return box[g];
};

const KB = load("data/kb.js", "KB");
const CATS = load("data/categories.js", "STREET_CATEGORIES");
const GLOSSES = (() => { try { return load("data/dictionary.js", "STREET_GLOSSES"); } catch { return {}; } })();
const CURATED_SET = (() => { try { return new Set(load("data/dictionary.js", "STREET_CURATED") || []); } catch { return new Set(); } })();
const GLOSSES_EXTRA = (() => { try { return load("data/glosses-extra.js", "STREET_EXTRA") || {}; } catch { return {}; } })();
const ALL_GLOSSES = Object.assign({}, GLOSSES_EXTRA, GLOSSES);
const EDITORIAL = load("data/streets.js", "STREETS");
const LOCALITIES = (() => { try { return load("data/localities.js", "LOCALITIES"); } catch { return {}; } })();


/* Sub-regions: the areas people name when they say where they are. Assigning by
   nearest centre keeps the directory's own vocabulary out of it. */
const REGIONS = [
  ["abu-dhabi","Abu Dhabi city","مدينة أبوظبي",24.4539,54.3773],
  ["abu-dhabi","Al Ain","العين",24.2075,55.7447],
  ["abu-dhabi","Al Dhafra Region","منطقة الظفرة",23.6489,53.7050],
  ["dubai","Dubai city","مدينة دبي",25.2048,55.2708],
  ["dubai","Hatta","حتا",24.8000,56.1167],
  ["sharjah","Sharjah city","مدينة الشارقة",25.3463,55.4209],
  ["sharjah","Al Dhaid","الذيد",25.2833,55.8833],
  ["sharjah","Khor Fakkan","خورفكان",25.3392,56.3571],
  ["sharjah","Kalba","كلباء",25.0167,56.3667],
  ["sharjah","Dibba Al Hisn","دبا الحصن",25.6167,56.2667],
  ["sharjah","Mleiha","مليحة",25.1167,55.8667],
  ["ajman","Ajman city","مدينة عجمان",25.4052,55.5136],
  ["ajman","Manama","المنامة",25.3167,56.0333],
  ["ajman","Masfout","مصفوت",24.9333,56.0500],
  ["umm-al-quwain","Umm Al Quwain city","مدينة أم القيوين",25.5647,55.5552],
  ["umm-al-quwain","Falaj Al Mualla","فلج المعلا",25.3667,55.8667],
  ["ras-al-khaimah","Ras Al Khaimah city","مدينة رأس الخيمة",25.7895,55.9432],
  ["ras-al-khaimah","Al Rams","الرمس",25.8833,55.9833],
  ["fujairah","Fujairah city","مدينة الفجيرة",25.1288,56.3265],
  ["fujairah","Dibba Al Fujairah","دبا الفجيرة",25.5833,56.2833]
];
const regionOf = (s) => {
  if (typeof s.lat !== "number" || typeof s.lon !== "number") return -1;
  let best = -1, bd = Infinity;
  for (let i = 0; i < REGIONS.length; i++) {
    const r = REGIONS[i];
    if (r[0] !== s.emirate) continue;
    const p1 = s.lat * Math.PI / 180, p2 = r[3] * Math.PI / 180;
    const dp = (r[3] - s.lat) * Math.PI / 180, dl = (r[4] - s.lon) * Math.PI / 180;
    const x = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
    const d = 2 * 6371 * Math.asin(Math.sqrt(x));
    if (d < bd) { bd = d; best = i; }
  }
  return best;
};

const norm = (s) =>
  String(s || "")
    .replace(/[\u064B-\u0655\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/^ال/, "").replace(/\s+/g, " ").trim();

/* Names like "ظهرة الرِّمث" carry two elements: the landform and what grows on it.
   Glossing only the head word drops the half that identifies the place. */
/* These read as suffixes, not as a second element: "Adham Boulevard" is not
   "shady of boulevard". */
/* Roundabouts, tunnels and bridges take the name first in English:
   "the airport roundabout", not "roundabout of airport". */
const FEATURE_HEADS = new Set(["دوار", "نفق", "جسر", "ميدان", "ساحه", "تقاطع", "مخرج", "مدخل"]);

const NO_JOIN = new Set(["بوليفارد", "كورنيش", "شارع", "طريق", "ميدان", "دوار", "نفق", "ساحه", "حديقه"]);

const KUNYA_HEADS = new Set(["ابو", "بو", "ام"]);

function glossOf(name, GLOSSES) {
  const whole = norm(String(name || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, ""));
  if (!whole) return "";
  if (GLOSSES[whole]) return GLOSSES[whole];
  const words = whole.split(" ").filter(Boolean);
  const look = (w) => GLOSSES[w] || GLOSSES[w.replace(/^ال/, "")] || "";
  const headGloss = look(words[0]);
  const tail = words.length > 1 ? words[words.length - 1] : "";
  const tailGloss = tail && tail !== words[0] && CURATED_SET.has(tail.replace(/^ال/, "")) ? look(tail) : "";
  const headName = headGloss.split(",")[0];
  const tailName = tailGloss.split(",")[0].split("(")[0].trim();
  if (tailGloss && NO_JOIN.has(tail.replace(/^\u0627\u0644/, ""))) return tailGloss;
  if (headGloss && tailGloss) {
    const h = words[0].replace(/^\u0627\u0644/, "");
    if (FEATURE_HEADS.has(h)) return tailName + " " + headName;
    /* abu-/umm- names: the prefix is a kunya, so the tail carries the meaning. */
    if (KUNYA_HEADS.has(h)) return tailName;
    if (/^of\b/i.test(tailName)) return tailName;
    return headName + " of " + tailName;
  }
  return headGloss || tailGloss || "";
}

const head = (s) =>
  norm(String(s.name_ar || "").replace(/^(شارع|طريق|جادة|ممر|حارة|زقاق|درب|نهج)\s+/, "").split(" ")[0] || "");


/* A former name that was only a number says nothing: "1st Street" → "Amr Bin Al 'As
   Street" is a rename, not a story. The same policy that excludes numeric names from
   the directory applies to the names they replaced. */
const GENERIC_FORMER = /^(\d+\s*(st|nd|rd|th)?\s*(street|road|st|rd)?|(street|road)\s*#?\d+[a-z]?|(شارع|طريق)\s*[\d\u0660-\u0669]+|unnamed.*|no name|track|service road)\.?$/i;
const formerName = (s) => (s && !GENERIC_FORMER.test(String(s).trim()) ? s : "");

const nameKey = (s) =>
  String(s || "").toLowerCase()
    .replace(/['\u2019\u0060]/g, "")          // Mu'alla and Mualla are one street
    .replace(/\b(street|road|st|rd|avenue)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ").trim();

/* One person, several spelling or length variants on different signs. */
const SYNONYMS = {
  "Hafsa Bint Omar Street": ["Hafsa Bint Omar Bin Al Khattab Street"],
};

/* Transliterations wander: Zobier for Zubair, Awwam for Awam, Amro for Amr.
   When the exact key misses, take the closest card name if it is unmistakably
   the same street (edit distance 2 or less, and only one such candidate). */
function editDistance(a, b) {
  const m = a.length, n = b.length;
  if (Math.abs(m - n) > 3) return 99;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

/* Curated entries: match by name, so a road can carry its story. */
const storyByName = new Map();
for (const e of EDITORIAL) {
  storyByName.set(nameKey(e.en), e.id);
  if (e.former) storyByName.set(nameKey(e.former.en), e.id);
}

const areaById = new Map(KB.areas.map((a) => [a.id, a]));
const districts = [];
const districtIndex = new Map();
const districtFor = (areaId, emirate, osm) => {
  /* no admin district? use the nearest OSM place node (towns/suburbs, see tools/localities.mjs) */
  const loc = !areaId && LOCALITIES[osm];
  /* A road outside any district still has an emirate — keep it, so the emirate
     filters can reach it. These rows share one synthetic entry per emirate. */
  const key = areaId || (loc ? "loc:" + loc[0] : "em:" + emirate);
  if (districtIndex.has(key)) return districtIndex.get(key);
  const a = areaId ? areaById.get(areaId) : null;
  districts.push([a ? a.path[3] : (loc ? loc[0] : ""), (a && a.name_ar) || (loc ? loc[1] : "") || "", emirate, areaId || "", loc ? "approx" : ""]);
  districtIndex.set(key, districts.length - 1);
  return districts.length - 1;
};


/* OSM sometimes carries a label rather than a name ("Connections", "Service Road").
   A card that says only that is noise, so it stays out of the index. */
const NOT_A_NAME = /^(service road|service|connection|connections|connector|coast road|free short\w*|track|unnamed.*|road|street|way|path|bike path|footpath|pedestrian.*|parking|roundabout|junction|bridge|tunnel|exit|entry|main street|new street|local road|access road|internal road|link road)\s*\d*$/i;


/* Some person streets arrive from OSM tagged as something else (typically the
   "named after a word" bucket). These are people, so they get the person card. */
const PERSON_NAMES = new Set([
  "خوارزمي",
  "ابو جعفر المدني",
  "ابو ادريس الخولاني",
  "ابو ايوب الانصاري",
  "ابو بكر الصديق",
  "ابو بكر الرازي",
  "ابو الدرداء الانصاري",
  "ابو ذر الغفاري",
  "ابو سعيد الخدري",
  "ابو طلحه",
  "ابو العلاء المعري",
  "ابو عمرو الشيباني",
  "ابو فراس الحمداني",
  "ابو قتاده الانصاري",
  "ابو مالك الاشعري",
  "ابو محجن الثقافي",
  "ابو موسي الاشعري",
  "ابو هريره",
  "ابو حنيفه النعمان",
  "ابو الاسود الدؤلي",
  "ابو البختري الطائي",
  "ابو اسحاق السبيعي",
  "ابو حميد الساعدي",
  "ابو بكر بن عياش",
  "ابو بكر بن المنكدر",
  "ذهبي",
  "بخاري",
  "فارابي",
  "حسن البصري",
  "امام الشافعي",
  "امام مسلم",
  "رازي",
  "مختار مالك",
  "زهراوي",
  "ابهري",
  "عسقلاني",
  "باقلاني",
  "دار قطني",
  "ادرسي",
  "حجاج النضري",
  "هيثم الشيباني",
  "جبرتي",
  "قزويني",
  "مقدسي",
  "مسيب الرياحي",
  "قشيري",
  "رحبي",
  "سائب الثقفي",
  "عامر البجلي",
  "عمرو العماوي",
  "طبري",
  "عبدلله عاي اهمد المصوري",
  "ابو ايوب اك انيم",
  "ابو محجن الثقفي",
  "فضيل بن نعمان",
  "حرقوص بن زهير",
  "عماره المري",
  "اعراف بن الاعلم",
  "مدلول",
  "صفدي",
  "يشكري",
  "حاتم الطائي",
  "ارقم",
  "فرزدق",
  "جاحظ",
  "متنبي",
  "سيبويه",
  "اخطل",
  "اصمعي",
  "بحتري",
  "فاروق",
  "خنساء",
  "ترمذي",
  "قتاده البصري",
  "عبدالكريم الجزري",
  "انيس الانصاري",
  "ضمره الجهيني",
  "جورج ماثيو",
  "هادف حميد الشامسي",
  "حمود علي العامري",
  "عياض الاشعري",
  "جاك شيراك",
  "ربيعه الراي",
  "رفيده الاسلميه",
  "شريح القاضي",
  "حسين الشالي",
  "بكير الليثي",
  "هبار الاسود",
  "هاشم المرقال",
  "حسين الكندي",
  "جعشم الخير",
  "جرير الخفجي",
  "جرير البجلي",
  "جبران خليل جبران",
  "معاويه السكوني",
  "عمير السهمي",
  "ربعي الافكل",
  "رابيه التميمي",
  "صفوان السلمي",
  "سباع الغفاري",
  "سفيان الثوري",
  "وائل الحضرمي",
  "وهب الصنعاني",
  "واقد التميمي",
  "يزيد الحبيري",
  "يزيد السلمي",
  "يزيد السكوني",
  "نابغه الذبياني",
  "سلمان الفارسي",
  "قماشه",
  "راكان",
  "خلفان حماد الظاهري",
  "خلفان مطر سعيد الرميثي",
  "حيي جمعه حيي الهاملي",
  "عبدالعزيز سرحان الكعبي",
  "عبدالحميد سلطان الحمادي",
]);


/* OSM also carries development and facility labels from Dubai's master
   communities — "Frond C", "Zone A", "Villas 1-11", "Terminal 03 Arrival".
   They are places, but they are not street names, so no card is built. */
const NOT_A_STREET = /(^|\s)(service|tertiary|secondary|access|industrial|minor|natural|coast|ring|depot|connection|connector|light vehicles|main avenue|taxi queue|park drive|no name|oaisis|^oasis$)(\s|$)|(^(zone|frond|villas?|villa|block|cluster|townhouses?|residence|tower|complex|terminal|district|sector)\b)|((^|\s)(villas?|blocks?|townhouses?|residence|cluster|terminal|zone)\s*[0-9a-z])|(\d+\s*(st|street|road|rd|stret|rou?ndabout))|(akoya|jumeirah islands|al badia|arabian ranches|mudon|expo village|nadd al sheba|\bjvt\b|\bmbr\b|calida|under ?pass|junction|eagle square|rock crushers|stone crush|group|welded|arrival|departure)/i;


/* Arabic names that OpenStreetMap does not carry. Keys are the English name as
   OSM spells it; values are the Arabic as it appears on the sign or in use. */
/* OSM names that were cut short. Keyed by the lowercase OSM name. */
const NAME_EN = new Map([
  ["sheik hamad b s street", "Sheikh Hamad Bin Saif Al Sharqi Street"],
  ["seif aldawlah road", "Seif Al Dawlah Road"],
  ["amro bin al aas street", "Amr Bin Al 'As Street"],
  ["amr bin al a'as street", "Amr Bin Al 'As Street"],
  ["amer bin al aas street", "Amr Bin Al 'As Street"],
  ["oqbah bin nafae street", "Uqbah Bin Nafi' Street"],
  ["asmaa bint abi baker street", "Asma Bint Abi Bakr Street"],
  ["abdullah bin al zobier street", "Abdullah Bin Al Zubair Street"],
  ["az zubair bin al 'awwam street", "Al Zubair Bin Al 'Awam Street"],
  ["abu bakr bin ayyash street", "Abi Bakr Bin Ayyash Street"],
]);

const AR_OVERRIDES = new Map([
  ["abi al adarham al zamani street", "شارع أبي الأدرهم الزماني"],
  ["abu ja'far al madani street", "شارع أبي جعفر المدني"],
  ["al khawarizmi street", "شارع الخوارزمي"],
  ["al dhaid road", "طريق الذيد"],
  ["ras al khor road", "طريق رأس الخور"],
  ["palm jumeirah road", "طريق نخلة جميرا"],
  ["madinat jumeirah", "مدينة جميرا"],
  ["jebel ali hills", "تلال جبل علي"],
  ["khatt springs road", "طريق خت"],
  ["masafi", "مسافي"],
  ["kalba square", "ساحة كلباء"],
  ["mosque square", "ساحة المسجد"],
  ["new al taawun road", "طريق التعاون الجديد"],
  ["al quoz central street", "شارع القوز المركزي"],
  ["al qouz central street", "شارع القوز المركزي"],
  ["al salam a street", "شارع السلام أ"],
  ["al salam b street", "شارع السلام ب"],
  ["al salam c street", "شارع السلام ج"],
  ["al salam d street", "شارع السلام د"],
  ["al salam e street", "شارع السلام هـ"],
  ["al salam f street", "شارع السلام و"],
  ["al naseem a street", "شارع النسيم أ"],
  ["al naseem b street", "شارع النسيم ب"],
  ["al nassem raod", "شارع النسيم"],
  ["al ghazhal street", "شارع الغزال"],
  ["al hawa street", "شارع الهوا"],
  ["al deem street", "شارع الديم"],
  ["ad deem street", "شارع الديم"],
  ["al abjar street", "شارع الأبجر"],
  ["al aamra street", "شارع العامرة"],
  ["al najoom street", "شارع النجوم"],
  ["al thuraya street", "شارع الثريا"],
  ["yasmin street", "شارع ياسمين"],
  ["nisreen street", "شارع نسرين"],
  ["joory street", "شارع جوري"],
  ["julnar street", "شارع جلنار"],
  ["rasha street", "شارع رشا"],
  ["lila street", "شارع ليلا"],
  ["azalea street", "شارع أزاليا"],
  ["camelia street", "شارع كاميليا"],
  ["camelia", "شارع كاميليا"],
  ["samara street", "شارع سمارة"],
  ["mira", "شارع ميرا"],
  ["rosa", "شارع روزا"],
  ["sidra", "شارع سدرة"],
  ["deema", "شارع ديمة"],
  ["ghadeer", "شارع غدير"],
  ["reem", "شارع ريم"],
  ["maeen", "شارع معين"],
  ["zulal", "شارع زلال"],
  ["hattan", "شارع هتان"],
  ["palma street", "شارع بالميرا"],
  ["maple", "شارع مابل"],
  ["casa street", "شارع كازا"],
  ["al bustan street", "شارع البستان"],
  ["al rimal cr street", "شارع الرمال"],
  ["al tilal street", "شارع التلال"],
  ["al zahirah street", "شارع الزاهرة"],
  ["al atheer street", "شارع الأثير"],
  ["kunooz street", "شارع كنوز"],
  ["mazoon street", "شارع مزون"],
  ["awafi street", "شارع العوافي"],
  ["shammal street", "شارع شمال"],
  ["al harf street", "شارع الحرف"],
  ["shati as saadiyat", "شاطئ السعديات"],
  ["al madina al tebbia street", "شارع المدينة الطبية"],
  ["al quawasim cornishe roundabout", "دوار كورنيش القواسم"],
  ["al hisn fort roundabout", "دوار حصن الحصن"],
  ["kalba fujairah roundabout", "دوار كلباء الفجيرة"],
  ["masafi roundabout", "دوار مسافي"],
  ["lahbab roundabout", "دوار لهباب"],
  ["zayed mosque roundabout", "دوار مسجد زايد"],
  ["al raugh tunnel", "نفق الروغ"],
  ["al ghazeer tunnel", "نفق الغزير"],
  ["rams street", "شارع الرمس"],
  ["al etihad road", "شارع الاتحاد"],
  ["hadaeq sheikh mohammed bin rashid", "حدائق الشيخ محمد بن راشد"],
  ["sheikh khalifa bin zayed al nahyan road", "طريق الشيخ خليفة بن زايد آل نهيان"],
  ["sheikh abdulla bin mohammed road", "طريق الشيخ عبدالله بن محمد"],
  ["azhar street", "شارع الأزهر"],
  ["abu dhabi theater", "مسرح أبوظبي"],
  ["al muntazah complex", "مجمع المنتزه"],
  ["pompidou road", "طريق بومبيدو"],
  ["khallad al ansari street", "شارع خلاد الأنصاري"],
  ["al a’ajbah street", "شارع العجيبة"],
  ["al nethra street", "شارع النثرة"],
  ["al quarda street", "شارع القرطة"],
  ["al rizeem street", "شارع الرزيم"],
  ["al tenkaasah street", "شارع التنكاشة"],
  ["birouwaana street", "شارع بيروانة"],
  ["khayoor street", "شارع خيور"],
  ["meyanib street", "شارع ميانيب"],
  ["zaghoor street", "شارع زغور"],
  ["al naham street", "شارع النهام"],
  ["al yafnah road", "شارع اليفنة"],
  ["defalas road", "شارع دفالس"],
  ["madhloo l st", "شارع مدلول"],
  ["madhloool st", "شارع مدلول"],
  ["madhllool st", "شارع مدلول"],
  ["madhlool st", "شارع مدلول"],
  ["al a'araf bin al a'alam street", "شارع الأعراف بن الاعلم"],
  ["al safadi street", "شارع الصفدي"],
  ["al yashkuri st", "شارع اليشكري"],
  ["dubai madam road", "شارع دبي المدام"],
  ["fodil bin noaman street", "شارع فضيل بن نعمان"],
  ["harqous bin zohair street", "شارع حرقوص بن زهير"],
  ["omara al maree street", "شارع عمارة المري"],
  ["wusha square", "ميدان وشحة"],
  ["mdfaaq bridge-old bridge", "جسر المدفق - الجسر القديم"],
  ["sheik hamad b s street", "شارع الشيخ حمد بن سيف الشرقي"],
  ["khalfan bin matar al rumaithi street", "شارع خلفان بن مطر الرميثي"],
]);


/* Names that are places elsewhere: a street called القاهرة is named for Cairo. */
const PLACE_NAMES = new Set([
  "ذيد",
  "فلج المعلا",
  "مليحه",
  "دمشق",
  "بغداد",
  "بيروت",
  "قاهره",
  "رياض",
  "مكه",
  "مدينه",
  "قدس",
  "عمان",
  "تونس",
  "جزائر",
  "رباط",
  "طرابلس",
  "خرطوم",
  "صنعاء",
  "مسقط",
  "كويت",
  "دوحه",
  "منامه",
  "حلب",
  "حمص",
  "بصره",
  "موصل",
  "كربلاء",
  "نجف",
  "غزه",
  "نابلس",
  "خليل",
  "اريحا",
  "بخاري",
  "سمرقند",
  "اصفهان",
  "شيراز",
  "استانبول",
  "انقره",
  "طهران",
  "باريز",
  "لندن",
  "روما",
  "مدريد",
  "برلين",
  "فيينا",
  "موسكو",
  "ابها",
  "جميرا",
  "زعبيل",
  "خورفكان",
  "وشحه",
]);


/* The tail of Dubai's master-planned communities: plot and marketing labels. */
const NOT_A_STREET_2 = /(arabella|juniper|park avenue|rochester|richmond|stockholm|topanga|valencia grove|wildflower|shoreline|silk leaf|vida residence|mai tower|morocco [ij]|semmer|quortaj|park road (east|south)|crescent drive|gateway avenue|grand avenue|green boulevard|central boulevard|exhibition boulevard|hills grove|hills view|fairways|golf town|parkways|naseej|old way|inner road|north entrance|road to rhc|wonderful road|first street|interchange no|road: wb|m1 master|dwc peripheral|entrance [abc]|lakes roundabout|verona roundabout|dolphin roundabout|lantern roundabout|pot roundabout|scale roundabout|tent roundabout|boat roundabout|pearl roundabout|centro courtyard|emirates cluster|heights east|camelia [12]|arenco|alghandi|office no)/i;

function fuzzyStory(key, keys) {
  /* Transliterations wander: Khaled/Khalid, Ahmed/Ahmad, Alwaleed/Al Waleed.
     Only for long keys, where a two-letter difference cannot be another street:
     a short "Al 'Adi" must never borrow "Al Razi". */
  const flat = key.replace(/ /g, "");
  if (flat.length < 14) return "";
  let best = "", bestD = 3;
  for (const k of keys) {
    const fk = k.replace(/ /g, "");
    if (Math.abs(fk.length - flat.length) > 2) continue;
    const d = editDistance(flat, fk);
    if (d < bestD) { bestD = d; best = k; }
    else if (d === bestD && best && k !== best) best = "";
  }
  return best ? storyByName.get(best) || "" : "";
}

const storyKeys = [...storyByName.keys()];

const rows = [];
for (const s of KB.streets) {
  const rawEn = s.name_en || "";
  const key = String(rawEn).trim().toLowerCase();
  const en = NAME_EN.get(key) || rawEn;
  const ar = s.name_ar || AR_OVERRIDES.get(key) || "";
  const arFixed = AR_OVERRIDES.get(key) || ar;
  if (!en && !arFixed) continue;
  if (!String(en).trim()) continue; // a blank title is worse than no row
  if (NOT_A_NAME.test(String(en).trim())) continue;
  if (NOT_A_STREET.test(String(en).trim())) continue;
  if (NOT_A_STREET_2.test(String(en).trim())) continue;
  let cat = CATS[s.osm] || "word";
  const bare = String(norm(String(ar).replace(/^(شارع|طريق|جادة)\s+/, "")).replace(/^\u0627\u0644/, ""));
  if (PERSON_NAMES.has(bare)) cat = "person";
  else if (PLACE_NAMES.has(bare) || String(bare).split(/\s|-|–/).some((w) => PLACE_NAMES.has(w))) cat = "place";
  const gloss = cat === "place" || cat === "word" ? glossOf(s.name_ar, ALL_GLOSSES) : "";
  let story = storyByName.get(nameKey(en)) || "";
  if (!story) {
    for (const [canon, alts] of Object.entries(SYNONYMS)) {
      if (alts.some((a) => nameKey(a) === nameKey(en))) { story = storyByName.get(nameKey(canon)) || ""; break; }
    }
  }
  if (!story) story = fuzzyStory(nameKey(en), storyKeys);
  rows.push([
    en,
    arFixed,
    districtFor(s.area, s.emirate, s.osm),
    cat,
    s.ref || "",
    formerName(s.old_name_en),
    gloss,
    story,
    regionOf(s),
  ]);
}

const payload = {
  emirates: {
    "abu-dhabi": ["Abu Dhabi", "أبو ظبي"],
    dubai: ["Dubai", "دبي"],
    sharjah: ["Sharjah", "الشارقة"],
    ajman: ["Ajman", "عجمان"],
    "umm-al-quwain": ["Umm Al Quwain", "أم القيوين"],
    "ras-al-khaimah": ["Ras Al Khaimah", "رأس الخيمة"],
    fujairah: ["Fujairah", "الفجيرة"],
  },
  districts,
  regions: REGIONS.map((r) => [r[1], r[2], r[0]]),
  rows,
};

const header =
  "/* Every road, compact enough to render as cards.\n" +
  "   Generated by tools/cards-build.mjs — do not edit by hand.\n" +
  "   Names and coordinates © OpenStreetMap contributors, ODbL 1.0. */\n";

writeFileSync(root + "data/cards.js", header + "window.ROADS = " + JSON.stringify(payload) + ";\n");

const bytes = readFileSync(root + "data/cards.js").length;
console.log(`roads: ${rows.length} | districts: ${districts.length} | data/cards.js: ${Math.round(bytes / 1024)} KB`);
console.log(`with a story: ${rows.filter((r) => r[7]).length} | with a gloss: ${rows.filter((r) => r[6]).length} | with a route: ${rows.filter((r) => r[4]).length}`);
