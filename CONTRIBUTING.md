# Maintaining UAE Streets

How to add streets, edit the interface text, and publish the site. For the
visitor-facing overview, see [README.md](README.md).

The site is plain HTML, CSS and JavaScript — **no build step, no dependencies, no
server**. `index.html` reads `data/streets.js`; everything else is static.

---

## 1. Open it locally

Double-click `index.html`. That's it.

- Language switch: **EN / ع** in the header (Arabic flips the whole layout to RTL)
- Theme: the sun/moon button next to it; follows your system until you choose
- Search: type any part of a name in either language, or press `/`
- Filters: emirate, and what the street was named after
- Click any card for the full story

---

## 2. What's in the folder

| File | What it does | Edit it when… |
|---|---|---|
| `index.html` | Page structure + all fixed text (each string has an `data-en` and `data-ar` twin) | you want to change headings, the “How names work” section, or the footer |
| `assets/css/styles.css` | Design tokens, layout, dark mode, RTL | you want different colours, type, spacing |
| `assets/js/app.js` | Search, filters, detail panel, language + theme, URL state | you want new behaviour |
| `data/streets.js` | **The content.** All 34 streets live here; optional `former:` / `now:` record renames | you add or correct a street |
| `data/dictionary.js` | Arabic head-noun glosses, Wiktionary CC BY-SA | regex + tool |
| `data/kb.js` | Knowledge base: 11,567 streets, 7 emirates, 344 districts (ODbL) — rules in `docs/KB.md` | regenerate with the tools below |
| `tools/pbf-import.mjs` | Reads the UAE extract offline and emits roads for one or more bboxes | the primary collector |
| `tools/pbf-boundaries.mjs` | Stitches admin boundaries from the PBF into rings | districts are missing or wrong |
| `tools/kb-districts.mjs` | Assigns Abu Dhabi streets to districts (area refreshes) | after collecting a new area |
| `tools/kb-country.mjs` | Country build: emirate + district assignment for all seven | the main KB build |
| `tools/verify.mjs` | Builds `.review/verify.html`: 50 stratified, risk-first streets, one click each | you are verifying names by hand |
| `tools/wiki-check.mjs` | Cross-checks Dubai roads against Wikipedia's route lists | you want an independent signal |
| `tools/web-check.mjs` | Corroborates a few names through a local SearXNG (rate-limited — see WEB-CHECK.md) | answering "does this road exist?" |
| `tools/audit.mjs` | Integrity checks; `--assert` is the CI gate on KB invariants | before publishing, after a big import | Internal integrity checks; emits a stratified sample for cross-checking | before publishing, after a big import |
| `tools/classify.mjs` | Assigns people/places/words/tribes/events to every street → `data/categories.js` | after a KB rebuild |
| `tools/wiki-build.mjs` | Generates `directory/`: 358 browse pages + `search.html` + the search index | the KB changed |
| `tools/templates/search.html` | The search page template (hand-edited, copied on build) | you change search behaviour |
| `directory/` | Generated browse pages (emirates → districts → streets) | never edited by hand |
| `tools/kb-collect.mjs` | Overpass fallback: collects an area's roads in bbox tiles | when no extract is at hand |
| `tools/osm-district.mjs` | Lists named streets in a bounding box (cached) | you want a worklist, not a collection |
| `tools/kb-build.mjs` | Turns a cached collection into `data/kb.js` rows | you add a district |
| `CITATION.cff` | Citation metadata for anyone reusing the dataset | you want your name on it |
| `LICENSE` | MIT for the code; the content is CC BY 4.0 (see §12) | — |
| `README.md` | Visitor-facing front page — GitHub renders it | the project's story or feature list changes |
| `CONTRIBUTING.md` | This maintainer guide | — |
| `docs/EDITORIAL.md` | Register for cards about public figures — enforced by `tools/editorial-lint.mjs` | you write or edit a story |
| `docs/arabic-style.md` | House style for the Arabic entries | you settle a wording question |
| `docs/CONTRIBUTING.ar.md` | Arabic summary of this guide (linked from the Arabic footer) | the essentials change |
| `docs/PORTRAITS.md` | Portrait research: candidates, licences, policy | you add or publish a portrait |
| `docs/ROADMAP.md` | Open work with the trigger for each item | you close or add an item |
| `docs/preview.png` | Screenshot used in the README | the design changes noticeably |
| `tools/arabic-lint.mjs` | Mechanical Arabic checks | you add a rule |
| `tools/arabic-review.mjs` | Review queue / approval state | — |
| `tools/validate-forms.mjs` | Checks the issue-form YAML (needs `js-yaml`) | you edit `.github/ISSUE_TEMPLATE/*.yml` |

The site reads `data/streets.js` as a plain script (it sets `window.STREETS`), so it
works from `file://` with no server and no CORS problems.

---

## 3. Add a street (the 5-minute version)

1. Open `data/streets.js`.
2. Copy any existing block, from `{` to the closing `},`.
3. Paste it before the final `]`, then change the values.
4. Make sure `id` is unique (kebab-case, no spaces).
5. Save, refresh the browser. The counts, filters and search update themselves.

Template — replace the Arabic and English:

```js
{
  id: "my-new-street",              // unique, kebab-case
  emirate: "dubai",                 // abu-dhabi | dubai | sharjah | ajman |
                                    // uaq | ras-al-khaimah | fujairah
  category: "person",               // person | place | word | tribe | event
  origin: "documented",             // documented | local  (see §5)
  ar: "شارع ...",
  en: "My New Street",
  translit: "Shāriʿ ...",           // optional
  meaning: { en: "The street of ...", ar: "شارع ..." },
  story: {
    en: "Two or three sentences: who or what the name honours, and why it matters.",
    ar: "جملتان أو ثلاث: من أو ما الذي يكرّمه الاسم، ولماذا يهم."
  },
  refs: [ { label: "Source name", url: "https://..." } ]   // optional
},
```

### Field reference

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Unique. Also becomes the shareable link `index.html#street=my-new-street` |
| `emirate` | yes | Must match one of the seven ids above, or the card won't filter |
| `category` | yes | Drives the coloured top border and the “Named after …” label |
| `origin` | yes | `documented` or `local` — shown as a badge on every card |
| `ar` | yes | The Arabic name as written on signs, including `شارع` if it appears |
| `en` | yes | The name as normally written in English |
| `translit` | no | Pronounced form, e.g. `Shāriʿ al-Waṣl` |
| `meaning` | yes | One short gloss, both languages |
| `story` | yes | 2–3 sentences, both languages |
| `refs` | no | Any sources; they render as links at the bottom of the detail panel |

Tips:

- Arabic in JS is fine; just keep the quotes straight (`"..."`).
- Don't repeat the name in `meaning` — say *who the person was* or *what the word means*.
- Longer stories are fine; the panel scrolls.

---

## 4. Change the words around the site

Every fixed string carries both languages:

```html
<h2 data-en="Five ways a street gets its name" data-ar="خمس طرق يحصل بها الشارع على اسمه">
  Five ways a street gets its name
</h2>
```

Edit the `data-en` / `data-ar` values (and, for tidiness, the fallback text between
the tags). The switch applies them at runtime — no duplication in JS.

---

## 5. The content rule (please keep it)

Street-name etymology is full of confident guesswork, so every entry says how
solid its explanation is:

- **`documented`** — named for a person, event or landmark on the record.
  (Sheikh Zayed Road, 2 December Street, Baniyas Road.)
- **`local`** — a widely told local explanation with no official record.
  (Al Rigga, Oud Metha, Jumeirah.) Label it; don't present it as fact.

The site shows these as “Documented name” / “Local account”, and the detail panel
adds a line of context. When you're unsure, `local` is the honest choice.

### Arabic checks

Arabic is written from the same facts as the English, not translated from it.
Two scripts keep that reviewable as the dataset grows:

```bash
node tools/arabic-lint.mjs      # punctuation, Latin leakage, calques, length balance
node tools/arabic-review.mjs    # entries whose Arabic changed since you approved them
```

Run both before committing. The house style is [docs/arabic-style.md](docs/arabic-style.md).
The review script keeps a hash of each entry's Arabic at the moment you accept it
(`docs/arabic-review.json`), so approved entries never return to the queue unless
their Arabic actually changes — review cost tracks new writing, not dataset size.
Both run automatically in GitHub Actions on every push.

---

## 6. Publish it

### Option A — GitHub Pages (free, permanent)

1. Create a GitHub account and a new **public** repository, e.g. `uae-streets`.
2. Upload the contents of this folder (not the folder itself).
3. Repo → **Settings** → **Pages** → Source: *Deploy from a branch* → `main` / `/root` → Save.
4. Wait a minute; your site appears at `https://<username>.github.io/uae-streets/`.

### Option B — Netlify Drop (fastest, no account needed to start)

1. Go to `app.netlify.com/drop`.
2. Drag this folder onto the page.
3. You get a live URL immediately; claim it to keep it.

Either way, relative paths mean you can also put the folder on any static host
(Cloudflare Pages, Vercel, an S3 bucket, a USB stick).

---

## 7. Make it yours

- **Colours** — `:root` at the top of `styles.css`. The dark palette is right below it;
  change both or the toggle will look half-finished.
- **Category colours** — the `CATEGORIES` array in `app.js` (`person`, `place`, `word`, …).
- **Type** — the Google Fonts `<link>` in `index.html` and the three `--font-*`
  variables in `styles.css`. Offline, it falls back to system fonts.
- **Cards per row** — `.grid { grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)) }`.

### Something to check before you publish

The starter set is compiled from public information, and a few naming details are
worth confirming with the relevant municipality before you present this as
authoritative:

- Umm Al Quwain — confirm the current official name of the principal street.
- Ajman — confirm the Sheikh Ammar bin Humaid street naming.
- Dubai folk etymologies (Al Rigga, Oud Metha, Jumeirah) are intentionally marked
  `local` — keep them that way unless you find a documented source.
- Al Wasl — "the old name of Dubai" is widely repeated but currently carries no
  source here. Add a citable one before promoting it from `local` to `documented`.
- Spelling varies (Al Wasl / Al Wasel); the site notes this, but pick one form
  for each `en` field and stay consistent.

---

## 8. How the search behaves

- Matches **both** languages at once, whichever language the interface is in.
- Normalises Arabic: strips diacritics, treats `أ إ آ` as `ا`, `ى` as `ي`, `ة` as `ه`.
- Multiple words are AND-ed: `dubai union` narrows to Dubai + a union story.
- Searches names, transliterations, meanings, stories, emirate and category.
- Filters and queries are written to the URL, so any view is shareable:
  `index.html?emirate=dubai&category=person`, `index.html?q=unity`,
  `index.html?lang=ar&theme=dark`, and street links `#street=al-wasl-road`.

## 9. Known limitations

- The browser Back button does not close the street panel (the URL is updated with
  `replaceState`, not a history entry). Esc, ✕, or a backdrop click does.
- The dataset is deliberately small — 34 streets, not a gazetteer.
- Arabic and English stories are editorial summaries, not official translations.
- No map yet. Adding coordinates to each entry plus Leaflet would be the natural
  next step.

## 10. Good next steps

1. Grow to ~100 streets, one emirate at a time (Dubai's Deira and Bur Dubai first).
2. Add `lat`/`lng` to each entry and a map toggle.
3. Group streets named after the same person or family into a small profile page.
4. Add an audio clip per name for pronunciation.
5. Add a “suggest a street” link (a Google Form is enough) once it's public.

## 11. Commit and push

The repository is the source of truth — edit locally, not in the GitHub web editor,
or the remote and your working copy will drift apart.

```
git status          # see what changed
git add -A
git commit -m "Add three Deira streets"
git push
```

Commits are authored as `juma-ali <101454814+juma-ali@users.noreply.github.com>`,
set per-repository with `git config user.name` and `git config user.email`.

---

## 12. License

- **Code** — the HTML, CSS and JavaScript are MIT licensed. See [LICENSE](LICENSE).
- **Content** — the street entries, meanings and stories (everything in
  `data/streets.js`) are **CC BY 4.0**: reuse them, including commercially, with
  attribution to this project.

If you republish the dataset, keep the `documented` / `local` labels intact — they
are the honest part of it. If you'd like to be cited, put your own name and the
repository URL into `CITATION.cff`.

---

Built with plain HTML, CSS and JavaScript. Type: Fraunces, Inter, IBM Plex Sans Arabic.
Content compiled from public sources; local accounts are labelled as such.


### What counts as a source

A `refs` entry needs a name and a URL. In order of preference:

1. a municipal or institutional publication (Abu Dhabi DMT, Dubai Culture);
2. a named study or journal — e.g. **مؤسسة الموروث للدراسات الإماراتية**, which
   documents studies based on the UAE's oral heritage (its journal is *الموروث*);
3. an encyclopaedia entry that states the same fact;
4. the institution's own channel, when nothing better is published — label it as
   such, so the card does not imply more than it has.

An entry with no `refs` stays `origin: "account"`, and its card says so plainly.

### Route numbers

`route:` — the official route number where the road has one (`E 66`, `D 94`). It
renders as a line on the card and is the one field a road article can cite without
also implying it documents the naming story. Wikipedia's *Dubai* article gives
these in its Road section.

### Renames

Two optional fields on a street entry, both `{ en, ar }`:

- `former:` — the name the road used to carry. Shown when the entry uses the
  current name, e.g. *Zayed The First Street* → "Formerly Electra Street".
- `now:` — the name the road carries officially today. Shown when the entry uses
  the name people still say, e.g. *Electra Street* → "Now officially Zayed The
  First Street".

Both render under the transliteration in the detail sheet, in whichever language
is active. Use them when the sign and the street disagree; do not use them for
translations (`ar`/`en` already carry those).

### Landform glosses

Streets named after a landform carry a gloss too — `طريق العصب` no, `شارع وادي عَفيا
— valley, dry riverbed`. These come from `CURATED` in `tools/dictionary.mjs`:
standard Arabic meanings for terms like وادي، جبل، رملة، سبخة، خور، جزيرة، plus three
taken from UAE sources (نقا / عرقوب from *لهجتنا المحلية*; هور / هيرات from the NLA
glossary).

`ساروق` — "the low passage or path between two dunes" — is the Emirati dialect
sense; Dubai Municipality's heritage director describes it as the low ground between
two sand plateaus, quoted in [Al Bayan](https://www.albayan.ae/across-the-uae/news-and-reports/2016-06-23-1.2666647).

Terms whose Gulf sense is not certain — بدع، محضر، غيط، وعبة — are deliberately
**left out** rather than guessed, and those streets show no gloss.

Glosses are printed only for `place` and `word` streets. A street named after a
person must not be glossed with a vocabulary meaning: `Al Habeeb` is a family name,
not "the beloved".

### Word glosses

Streets named after a word show its gloss under the English name, e.g.
`طريق العصب — nerve`. Glosses come from Wiktionary's Arabic entries (CC BY-SA
4.0) through the kaikki.org extract, filtered to lexical senses only: grammatical
notes ("elative degree of", "plural of") and proper nouns are dropped, because a
street named `الأربح` is not the elative of anything.


### Where glosses come from

1. **Wiktionary** (via kaikki.org) — the bulk, English glosses.
2. **Curated landforms** in `tools/dictionary.mjs` — standard Arabic meanings, some
   sourced from UAE material (`ساروق` from Dubai Municipality via Al Bayan; `نقا`,
   `عرقوب` from *لهجتنا المحلية*; `هور`, `هيرات` from the NLA glossary).
3. **[معجم عربي](https://www.arabicterminology.com/) — the classical lexicons**
   (Lisan al-Arab, Taj al-Arus, al-Wasit, al-Muhit…). Consulted by hand; it is not
   wired into the build, and it does **not** resolve place names: asked for `ساروق`
   it answers "a small saw", for `رباضة` "a lion". A toponym is not a lexical sense.

### What each street row can show

Under the street name, in this order:

1. **story** badge — a curated entry exists for this name;
2. **Route E11 / D 94** — the official route number (`ref` in OSM), 409 streets;
3. **formerly …** — the previous name (`old_name`), 133 major-road renames;
4. **the gloss** — what the head noun means, place and word streets only.

### The all-roads page

`roads.html` renders a card for **every** road — all 11,470 — without loading the KB.
`tools/cards-build.mjs` writes `data/cards.js` (~1 MB): one array per road holding both
names, a district index, the category, route, former name, gloss and any story id.
The grid draws 60 at a time with `Show more`; filtering and search happen in memory.

Why not load `data/kb.js`? It is 4.7 MB and the guide's performance budget assumes a
small page. The card index is the same trick as the search index: precompute what the
UI shows, leave the rest out.

### Front-page search includes every road

The guide's search loads `data/cards.js` **on the first keystroke**, not at page load, so
the landing page stays light. Once loaded, results are the curated cards first, then up to
60 matching roads from the full index; the count reads "N stories · M more roads" and the
filter chips count both. Roads without a story link to their district page in the directory.

Loading the index eagerly would add ~1 MB to a page whose whole point is to open instantly.

### The landing page shows every road

Below the story cards the page renders **"Every other road (11,425)"** — the compact index,
60 cards at a time with `Show more`. Story cards stay first because they carry the story;
the rest carry what is known: district, naming pattern, route, former name, gloss.

Two details that were wrong at first and are worth keeping right:

- the emirate chips use the id `uaq` while the index uses `umm-al-quwain`; without a mapping
  Umm Al Quwain showed **1** instead of 444;
- the hero total is formatted with `toLocaleString` — it read `11470`.

### Counts and caching

Every count comes from **one source at a time**: while the index is loading the chips count
the curated list (35), and once it is in they count the index (11,470). Adding the two
double-counted the stories, which read `11505`.

Rows outside any district keep their emirate through a synthetic district entry, so the
emirate filters reach them — without it Dubai showed 554 instead of 902.

Asset URLs carry `?v=` so a browser cannot keep serving yesterday's `app.js`; a stale
script is indistinguishable from a bug when the numbers are wrong.

### Roads outside every district

454 roads — 348 of them in Dubai — sit outside every `admin_level 8/10` polygon. Rather than
leave them blank, `tools/localities.mjs` assigns each the nearest OSM `place=*` node:
suburbs and neighbourhoods outrank villages, which outrank localities, within 6 km.
453 of 454 now have a name.

Two things this is **not**:

- it is **not** an administrative district — the card says "near Sufouh Gardens", not "in";
- it is a **nearest** label. `Expo Village Boulevard` lands on a neighbouring area, because
  no place node exists at Expo Village itself. Say "near" and the statement stays true.

The place nodes come from Overpass into `.cache/places.json`, and `data/localities.js` is keyed
by OSM id. The alternative — scraping openalfa.com, which groups streets by locality — was
rejected: its `robots.txt` disallows GPTBot, ChatGPT-User, CCBot and OpenAI. The same
assignment is reproducible from OSM, so there was no need to take it from them.

### Numbered former names

65 of the 133 recorded renames were renames *from a number* — `1st Street`, `119th Street`,
`Street 12`. They are dropped by `GENERIC_FORMER` in `tools/cards-build.mjs` and
`tools/wiki-build.mjs`, on the same principle that excludes numeric names from the
directory: "formerly 1st Street" is not information a reader can use.
