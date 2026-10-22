# The knowledge base (`data/kb.js`)

Facts, not prose: what streets exist, what they are called, and where they are.
The editorial layer — meanings and stories — lives in `data/streets.js` and stays
CC BY. This file is ODbL, because it is derived from OpenStreetMap.

## Schema

```js
window.KB = {
  meta: { license, attribution, note },
  emirates: [{ id, osm, bbox, street_count, note }],
  areas:    [{ id, path: ["Abu Dhabi Emirate", "Abu Dhabi", "Abu Dhabi", "Khalifa City"],
               osm, bbox, street_count }],
  streets:  [{ id, area, emirate, name_en, name_ar, osm, kind, lat, lon, variants }]
}
```

- `path` is the four-level hierarchy: **Emirate » City » Area » District**.
- `area` is null while a street is only known at emirate level.
- `osm` (`way/123`) is the provenance link back to OpenStreetMap.
- `variants` counts numbered stretches that were merged into this row.

## Two rules that shape the data

**1. Numeric-only names are excluded.** `Road 1b`, `Street 112`, `42nd Street`,
`شارع 7` are not documented — by the owner's decision they carry no name, so they
are dropped. 79 were removed.

**2. Numbered stretches merge into the base name.** `Al Aqhuwanah 1 Street` …
`Al Aqhuwanah 9 Street` are stretches of **Al Aqhuwanah Street**, not nine streets:
the number marks the stretch, not the name. Same for `Al Withaq 1…23`. 543 such ways
collapsed into 85 rows.

A name that merely *contains* a number is untouched: `Abu Al Hinna-a 1 Street` keeps
its own row, because the base name is not `Abu Al Hinna-a Street`.

## Build

```bash
node tools/kb-collect.mjs --name abu-dhabi-city --osm relation/3766481 \
  --bbox 24.26,54.30,24.56,54.78 --tiles 2 --bbox-only
node tools/kb-build.mjs --emirate abu-dhabi-city --osm relation/3766481 \
  --bbox 24.26,54.30,24.56,54.78 --note "coverage note"
```

`kb-collect` writes to `.cache/` (gitignored); `kb-build` merges into `data/kb.js`,
replacing only the scope it was given. Overpass is flaky — see the roadmap.

## Current coverage — the whole country

| Emirate | Streets | Named roads in OSM | Districts |
|---|---|---|---|
| Abu Dhabi | 9,004 | 42,868 | most of the 344 |
| Dubai | 934 | 23,960 | few |
| Sharjah | 881 | 5,555 | some |
| Umm Al Quwain | 466 | 1,217 | some |
| Ajman | 111 | 2,009 | few |
| Ras Al Khaimah | 92 | 741 | few |
| Fujairah | 79 | 1,029 | few |

**11,567 streets · 11,186 with Arabic names · 344 districts · 3.8 MB.**

Two numbers explain the shape of that table:

- **21,617 numeric-only names were excluded.** Dubai drops from 23,960 named roads to
  934 streets because **54% of its roads are numbered** (`12A Street`, `Street 5`).
  Ajman is 62% numeric. That is the owner's rule working as intended, not a bug — but
  it means the Dubai listing is thin by design, not by accident.
- **463 streets have no district**: `admin_level 8` where it exists, `admin_level 10`
  as Dubai's neighbourhood fallback (that recovered 562), and `area: null` for the
  rest — plus one unnamed polygon, which is dropped rather than shown blank.

Abu Dhabi remains the deepest: 86 districts and 92% of its streets resolve to the
full path —

```
Abu Dhabi Emirate » Abu Dhabi » Abu Dhabi » Khalifa City
```

### Name normalisation, in order

1. **Parenthetical alias wins**: `13b Street (Yamoor Street)` → `Yamoor Street`.
2. **Leading plot number dropped** when a multi-word name follows: `1 Saheel Street`
   → `Saheel Street`; `2020 Boulevard` keeps its number because only one word follows.
3. **Trailing stretch number dropped**: `Al Aqhuwanah 4 Street` → `Al Aqhuwanah Street`.
4. **Then** the numeric test: if nothing remains but road words, digits and
   single-letter qualifiers, the name is dropped entirely (`10a Street`, `108/1 Road`,
   `1 R/A`, `42nd Street`). The test reads the **English** name — `شارع 10أ` would
   leave a letter behind and defeat it.

Eight OSM typos survive (`1971 Stret`, `7b Streeet`, `7th Roudabout Naffco`): they
carry letters, so no rule can call them numeric. They belong upstream, not here.

## Collection: PBF, not Overpass

```bash
node tools/pbf-import.mjs --name uae            # whole extract, no bbox
node tools/pbf-boundaries.mjs --out .cache/admin-uae.json
node tools/kb-country.mjs                       # assigns emirate + district, writes kb.js
```

`pbf-import` downloads the UAE extract once (`.cache/`, gitignored), then walks it
twice: named highways first, their node coordinates second. Omit `--bbox` for the
country; pass `"s,w,n,e;…"` for a subset.

Overpass remains available (`kb-collect`, `osm-district`) for one-off lookups, but
it is not the primary source any more: it 504s under load and silently returns
**empty tiles**, which is how the island went missing the first time.

## Meanings belong elsewhere

The base names are often ordinary Arabic words — الأُقحوان is the chrysanthemum
(white petals, yellow centre; what Arabic also calls البابونج). That belongs in the
editorial entry, not here. The KB answers *"what is this street called?"*; the
guide answers *"why?"*.
