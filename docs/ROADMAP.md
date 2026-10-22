# Roadmap

Open work, roughly in order. Each item carries the trigger that should start it,
so nothing gets built early and nothing gets forgotten.

## Performance (deliberately deferred)

Measured on 2026-10-20, 1,000 synthetic streets, desktop headless Chrome:

| | 27 streets (now) | 1,000 streets |
|---|---|---|
| Data | 28 KB raw / 9 KB gzip | ~1,047 KB raw / ~338 KB gzip |
| DOM nodes | ~1,300 | 11,267 |
| Render | negligible | ~640 ms desktop, ~1.3–2.5 s mid-range phone |

At 27 streets there is nothing to fix. The plan below is ordered by cost.

- [ ] **Stage 1 — batch the grid.** *Trigger: ~150 streets, or the first slow phone.*
      Render 48–60 cards, then "Show more" (or an IntersectionObserver sentinel).
      Debounce search ~150 ms and render only the first batch. Keeps the DOM
      bounded regardless of dataset size. ~30 lines, no architecture change.
- [ ] **Stage 2 — split the data.** *Trigger: ~300 streets / 250 KB+.*
      Add `tools/build-data.mjs` that emits a compact index (id, en, ar, emirate,
      category, meaning ≈150 B/entry) plus one chunk per emirate.
      `data/streets.js` stays the single file you edit; the split is generated.
- [ ] **Stage 3 — accept a build step.** *Trigger: >3,000 streets, or SEO becomes
      a goal.* Per-street static pages with real titles and URLs, plus Pagefind.
- [ ] **Benchmark script.** `tools/bench.mjs`: generate N synthetic streets, report
      ms and node count, so the triggers above are measured rather than guessed.

**Not doing:** list virtualization (windowing) — poor trade against batching at
these volumes; and numbered pagination — worse for browsing than "show more".

## Arabic

- [ ] **Read the three rewritten entries** — `muroor-road`, `electra-street`,
      `sheikh-zayed-road` — then `node tools/arabic-review.mjs --approve <id>`.
      They are deliberately still in the queue.
- [ ] **Read the other 24.** They were accepted as a baseline, not individually
      reviewed. `docs/arabic-style.md` is the standard to hold them to.
- [ ] **Al Wasl — find a citable source** for "the old name of Dubai", then promote
      the entry from `local` to `documented`.

## Portraits (deferred 2026-10-20)

Research is done and filed in [PORTRAITS.md](PORTRAITS.md) — candidates, licences,
the two "wrong person" traps, and the policy (PD/CC0/CC BY only, monogram fallback,
no AI likenesses, living rulers need permission).

- [ ] **Decide the eight candidates.** The review tool is still in place:
      open `.review/index.html`, press A / R / S, paste the resulting JSON back.
- [ ] **Apply approvals:** crop to 480×640, store under `assets/img/people/`, add the
      `portrait` field with its credit line.
- [ ] **Add `tools/portrait-check.mjs`** to CI: six required fields, file exists,
      size under 80 KB.
- [ ] **Monogram tile** for every entry without a photo — the default, not a fallback
      that looks broken.

Of the 13 person entries: 3 have verified or likely-usable photos, 2 are living rulers
awaiting a policy call, 3 have only postage stamps, and 5 cannot have a portrait.

## Knowledge base (in progress)

Streets are collected district by district, each row resolving to
`Emirate » City » Area » District`. OSM-derived, ODbL, never loaded by the site.
Numeric-only names ("Road 1b", "Street 112") are excluded by decision.

**Current: 11,567 streets across all seven emirates, 258 districts, 11,186 with Arabic names, 3.8 MB.** Rules in
[KB.md](KB.md).

- [x] **Khalifa City** — 236 streets, full four-level path.
- [x] **Abu Dhabi emirate, five populated boxes** — capital 4,559 · Al Ain 2,552 ·
      Liwa 275 · Ruwais 36 · Sila 34.
- [x] **Offline collection** — `tools/pbf-import.mjs` reads the 84 MB UAE extract in
      ~8 s. This replaced Overpass for collection after it 504'd and, worse, returned
      empty tiles that silently dropped the island.
- [x] **District assignment** — `pbf-boundaries` stitches `admin_level 8` polygons
      from the PBF into rings; `kb-districts` assigns each street to the tightest
      containing one. 86 districts, 92% of streets resolved.
- [x] **Numbering decision** — confirmed: most Dubai roads are plot numbers and are
      excluded by design (61% of Dubai, 62% of Ajman). Each affected emirate page states
      the figure.
- [ ] **The 463 orphan streets** — outside any district polygon (Al Ain's rural
      outskirts, the capital's edges). Either accept emirate-level, or add the
      missing boundaries upstream in OSM.
- [x] **Integrity audit** — `tools/audit.mjs`: internal checks plus a reproducible
      299-street sample (`data/verification-sample.csv`) for checking against an
      official source. Results in [AUDIT.md](AUDIT.md).
- [x] **Wikipedia cross-check** — `tools/wiki-check.mjs` against the Dubai route
      lists: 83% exact, 6 transliteration variants, **8 roads missing from OSM**
      (Mankhool, Al Musallah, Al Rebat, Al Diyafah, Discovery Garden, Deira Islands,
      E 611, Dubai–Al Ain). See [WIKI-CHECK.md](WIKI-CHECK.md).
- [ ] **Fix the 8 upstream** — add or correct those roads in OpenStreetMap; they
      cannot be invented downstream.
- [x] **Naming convention** — followed the OSM UAE wiki (`name` is Arabic);
      removed 42 rows that had Arabic text in the English field.
- [x] **Bilingual directory** — every page has an EN/AR toggle, RTL layout, Arabic
      district names and Arabic-Indic numerals.
- [x] **Story cross-links** — 22 of the 27 editorial entries badge their street in
      the directory tables and link back to the guide; the guide's sheet links to the
      directory. **5 stories have no mapped street**: Muroor Road, Electra Street,
      Khalifa Street, Buhairah Corniche, Sheikh Rashid bin Ahmad Al Mualla Street —
      OSM has no road under those names, the same gap class as Dubai's Deira roads.
- [ ] **Fold `data/index.js` into `data/kb.js`** so there is one facts file.
- [x] **All seven emirates** — country-wide import + boundary assignment. Note the
      consequence of the numeric rule: Dubai keeps only 934 named streets out of 23,960
      named roads because 54% are numbered.
- [x] **Dubai's districts** — `admin_level 10` used as the fallback; 562 streets
      recovered, 463 remain without a district.
- [x] **Search** — `directory/search.html` + a 906 KB index; English and Arabic,
      diacritic-insensitive, ranked (street-name hits above district hits).
- [x] **Static directory pages** — `tools/wiki-build.mjs` emits 358 pages
      (emirates → districts → street table), 1.8 MB total.

Lessons paid for: an area-wide Overpass query is too heavy; a dense bbox tile takes
minutes; and Overpass answers "busy" with an *empty result*, not an error — so a
"0 ways" tile must never be trusted. The PBF route removes all three problems.

**Two PBF encoding traps, both now fixed:** way `refs` are *delta-encoded*, so reading
them as absolute ids silently produced every centre from a road's first node; and
relation members use fields 8/9/10 (roles, memids, types), not the order they appear
in prose. Both bugs looked plausible on screen — 20k "streets" with coordinates — and
only showed up when a second tool disagreed.

## Content

- [x] **OSM name differences — reviewed, no change.** Both forms are correct
      Arabic: ميثا / ميثاء and شارع / طريق are variants, not errors. The house
      style keeps **شارع** and **ميثا** throughout. Recorded in
      `docs/arabic-style.md` so it is not raised again.

- [ ] **Confirm with the municipality:** the official name of Umm Al Quwain's
      principal street; the Ajman "Sheikh Ammar bin Humaid" naming; Sharjah's
      Maliha Road.
- [ ] **Grow to ~100 streets**, one emirate at a time — Deira and Bur Dubai first.

## Repo housekeeping (needs the owner's GitHub login)

- [ ] Add topics: `uae`, `street-names`, `arabic`, `bilingual`, `rtl`, `static-site`.
- [ ] Paste the live URL into the repo's **Website** field.
- [x] Issue forms added — `.github/ISSUE_TEMPLATE/correction.yml` and `street.yml`.
      Both make a public source a required field, so an unsourced report cannot be
      submitted at all.

## Design

- [ ] The hero street-sign graphic is Arabic-first by design; revisit only if the
      English audience turns out to dominate.
