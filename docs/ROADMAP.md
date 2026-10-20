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
