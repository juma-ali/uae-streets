# Integrity audit

Generated 2026-10-22 · 11,529 streets · 344 districts

## Cross-check against an independent source

See [WIKI-CHECK.md](WIKI-CHECK.md): 81 Dubai roads named by Wikipedia, **67 exact (83%)**,
**6 more under a different transliteration** (Oud Metha = Oud Maitha, Salahuddin = Salah Al Din),
and **8 absent from OpenStreetMap entirely** — Mankhool Road, Al Musallah Road, Al Rebat Street,
Al Diyafah Street, Discovery Garden Road, Deira Islands Street, Emirates Road (E 611) and
Dubai–Al Ain Road. Those are gaps in OSM's coverage of older Deira/Bur Dubai streets, not
artefacts of this pipeline: every name we hold matches the source or differs only in spelling.

## Internal checks

| Check | Streets | Share | Note |
|---|---|---|---|
| No Arabic name | 347 | 3.01% | English-only rows |
| Arabic name has no road word | 86 | 0.75% | usually bridges, roundabouts, districts |
| Arabic name repeated as English | 15 | 0.13% | untranslated |
| Name still contains digits | 59 | 0.51% | leftover numbering |
| Name has stray punctuation | 0 | 0.00% |  |
| No district assigned | 462 | 4.01% | outside admin_level 8/10 polygons |
| Same name >15 km apart | 0 | 0.00% | possible wrong merge |
| Points shared by >4 streets | 0 | 0.00% | centring bug indicator |

### No Arabic name — examples

- `Abu Dhabi Theater` — _no Arabic_ (abu-dhabi)
- `Al Harf Street` — _no Arabic_ (abu-dhabi)
- `BNPP Service Road` — _no Arabic_ (abu-dhabi)
- `Caracal Road` — _no Arabic_ (abu-dhabi)
- `Coast road` — _no Arabic_ (abu-dhabi)

### Arabic name has no road word — examples

- `Abu Dhabi-Al Ain Truck Road` — أبو ظبي - العين تروك رود (abu-dhabi)
- `Al Sajiy` — السَّجِي (abu-dhabi)
- `Mina Zayed Tunnel` — نفق ميناء زايد (abu-dhabi)
- `Sheikh Zayed Tunnel` — نفق الشيخ زايد (abu-dhabi)
- `Sultan Belfarah Al Qubaisi Street` — سلطان بالفاره القبيسي (abu-dhabi)

### Arabic name repeated as English — examples

- `جسر الحديريات` — جسر الحديريات (abu-dhabi)
- `دوار السليطي` — دوار السليطي (abu-dhabi)
- `شارع عمرو بن العاص` — شارع عمرو بن العاص (ajman)
- `35c شارع` — 35c شارع (dubai)
- `Crescent Road` — Crescent Road (dubai)

### Name still contains digits — examples

- `1971 Stret` — _no Arabic_ (ajman)
- `M1 Master car` — _no Arabic_ (ajman)
- `Seaside Hills Villas 1-10` — _no Arabic_ (ajman)
- `Villas 1-11` — _no Arabic_ (ajman)
- `Villas 12-21` — _no Arabic_ (ajman)

### No district assigned — examples

- `Digdaga Road` — شارع دقداقة (ajman)
- `Abdullah Omran Taryam Street` — شارع عبدالله عمران تريم (dubai)
- `Abraj Al Mina Street` — شارع أبراج الميناء (dubai)
- `Abraj Nakheel Street` — شارع أبراج نخيل (dubai)
- `Acacia Avenue` — _no Arabic_ (dubai)

