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

## Naming convention

Taken from the [OSM wiki for the UAE](https://wiki.openstreetmap.org/wiki/United_Arab_Emirates):
`name` holds the **Arabic** name by default, `name:ar` mirrors it, and `name:en` is
present only when an English name exists. So this KB never invents an English name:

- `name_en` is empty for **43** streets that have no English tag — mostly roundabouts
  and bridges whose only name is Arabic (`دوار السليطي`).
- `name_ar` is empty for **317** streets that have no Arabic tag.

Earlier builds used `name:en || name`, which quietly wrote Arabic text into the
English field (42 rows, 28 of them with no Arabic anywhere else). The directory and
the search show the Arabic name where English is absent.

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

**Most Dubai roads really are numbers.** 61% of its named roads are plot numbers
(`12A Street`), and Ajman is 62%. Abu Dhabi is 8%; Fujairah and Umm Al Quwain are 0% — their
roads carry names. A thin Dubai listing is the rule working as intended, not a gap, and the
directory prints these numbers on every emirate page where numbering exceeds 20%.

| Emirate | Roads in OSM | Plot numbers excluded | Share | Named streets |
|---|---|---|---|---|
| Abu Dhabi | 42,868 | 3,509 | 8% | 8,967 |
| Dubai | 23,960 | 14,502 | 61% | 934 |
| Sharjah | 5,555 | 2,307 | 42% | 881 |
| Ajman | 2,009 | 1,243 | 62% | 111 |
| Umm al-Quwain | 1,217 | 0 | 0% | 466 |
| Fujairah | 1,029 | 0 | 0% | 79 |
| Ras al-Khaimah | 741 | 104 | 14% | 92 |

**463 streets have no district**: `admin_level 8` where it exists, `admin_level 10` as
Dubai's neighbourhood fallback, and `area: null` for the rest.

Abu Dhabi remains the deepest: 86 districts and 92% of its streets resolve to the full
path —

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
