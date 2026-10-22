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
| `data/streets.js` | **The content.** All 27 streets live here; optional `former:` / `now:` record renames | you add or correct a street |
| `data/kb.js` | Knowledge base: 11,567 streets, 7 emirates, 344 districts (ODbL) — rules in `docs/KB.md` | regenerate with the tools below |
| `tools/pbf-import.mjs` | Reads the UAE extract offline and emits roads for one or more bboxes | the primary collector |
| `tools/pbf-boundaries.mjs` | Stitches admin boundaries from the PBF into rings | districts are missing or wrong |
| `tools/kb-districts.mjs` | Assigns Abu Dhabi streets to districts (area refreshes) | after collecting a new area |
| `tools/kb-country.mjs` | Country build: emirate + district assignment for all seven | the main KB build |
| `tools/verify.mjs` | Builds `.review/verify.html`: 50 stratified, risk-first streets, one click each | you are verifying names by hand |
| `tools/wiki-check.mjs` | Cross-checks Dubai roads against Wikipedia's route lists | you want an independent signal |
| `tools/web-check.mjs` | Corroborates a few names through a local SearXNG (rate-limited — see WEB-CHECK.md) | answering "does this road exist?" |
| `tools/audit.mjs` | Integrity checks; `--assert` is the CI gate on KB invariants | before publishing, after a big import | Internal integrity checks; emits a stratified sample for cross-checking | before publishing, after a big import |
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
- The dataset is deliberately small — 27 streets, not a gazetteer.
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
