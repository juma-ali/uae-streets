# Portraits — research dossier

Deferred by decision. This records what was checked, so nobody repeats the search.
Nothing here is published; no image is in the repository.

## Policy (agreed before any image goes in)

- A `portrait` is **optional**. Entries without one get a monogram tile — never a
  placeholder silhouette and never a random photo.
- Accept only: **public domain, CC0, CC BY**. CC BY-SA only where nothing else
  exists, because cropping is an adaptation and the crop must stay BY-SA.
- **No AI-generated likenesses.** A derivative of a rights-reserved photo is still
  a derivative, and a synthetic face in an information card reads as a photograph.
- **Living rulers: no portrait** unless it is an official image with clear
  permission. A face implies endorsement that a monogram doesn't.
- Every image stores `credit`, `license`, `licenseUrl`, `source`, `retrieved` — and
  the **file page must be read**, not just the licence badge, before use.

## Status of the 13 person-named entries

| Person | Entries | Candidate on Commons | Licence | Status |
|---|---|---|---|---|
| Sheikh Zayed (1918–2004) | 2 | `Zayid bin Sultan Al Nuhayyan 1998.jpg` — US DoD, ID 981105-D-9880W-137 | PD | **verified, usable** (crop works, candid) |
| Sheikh Khalifa (1948–2022) | 1 | `Khalifa Bin Zayed Al Nahyan.jpg` | PD | candidate — read the file page rationale |
| King Faisal (1906–1975) | 1 | `Faisal bin Abdulaziz Al Saud.jpg` | PD | candidate — read the file page rationale |
| Mohammed bin Zayed (living) | 1 | `Mohamed bin Zayed Al Nahyan - 2024 (cropped).jpg` | CC BY 4.0 | licence clean; **living-ruler decision** |
| Ammar bin Humaid (living) | 1 | event photo, CC0 | CC0 | licence clean; **living-ruler decision** |
| Rashid bin Humaid (1928–1981) | 1 | Ajman 1965 postage stamp | PD | stamp only — no photograph exists |
| Rashid bin Ahmad Al Mualla (1981–2009) | 1 | Umm Al Quwain 1967 stamp | PD | stamp only |
| Hamad bin Abdullah (1938–1974) | 1 | Fujairah 1964 stamp | PD | stamp only — confirm it shows him |
| Zayed the First (1855–1909) | 1 | none | — | ❌ search returns his grandson |
| Mohammed bin Salem (early 1900s) | 1 | none (a mosque photo only) | — | ❌ no portrait |
| Al Maktoum — the family | 1 | — | — | ❌ not a person |
| Oud Metha — a woman named Maitha | 1 | — | — | ❌ unrecorded; no portrait possible |

Rejected on provenance: `Zayed bin Sultan Al Nahyan.jpg` (CC BY-SA 3.0). Private
uploader, a 1979 photograph, "previously published: no where" — that is how press
images get re-licensed by someone who does not own them.

## Two traps worth remembering

1. Searching **"Zayed the First"** returns **Khalifa bin Zayed** — a different ruler,
   a century later.
2. The file named **"Ahmad bin Rashid Al Mualla"** is **Rashid bin Ahmad's
   grandfather**, not the man the street honours.

## How to resume

A local review tool was built and is still in place (gitignored):

```
.review/index.html     ← double-click; A / R / S or the buttons
.review/img/*.jpg      ← review copies, not for publication
.review/candidates.js  ← the eight candidates and their licence metadata
```

It ends with a JSON block to paste back. Then, per approved image: crop to 480×640,
store under `assets/img/people/`, add the `portrait` field with its credit line, and
add `tools/portrait-check.mjs` (six required fields, file exists, size < 80 KB) to CI.
