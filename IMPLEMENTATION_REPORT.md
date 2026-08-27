# Zhejiang Jinliyuan local prototype — implementation report

## Delivered

- Clickable Chinese/English local single-page prototype with semantic hash routes and page-level H1 identities.
- Audit-derived 47-product library and 16-news archive, including detail routes and source-record references.
- Name search, product-family filters, discoverable full-site search, disclosure inventory, accessible mobile navigation, reduced-motion styling and local-only demo form.
- Human-care visual direction using three cohesive AI-generated decorative artworks for the hero, quality/manufacturing and health-responsibility chapters.
- Final completion pass integrates the three artwork assets directly in the source, gives the quality visual an intentional crop, adds representative audited products and a responsibility chapter to the homepage, and adds canonical `build` / `check` validation scripts.
- Product cards, product search, site search and detail headings use each record's clean audited `title`; the untouched `auditedText` remains the source record, even where its legacy heading is duplicated.

## Run locally

`./start-local.ps1` then open `http://localhost:4173/#home`.

## Important boundaries

- This is not deployed and does not contact the live site.
- Public source links are references only. Failed PDF sources are marked `SOURCE_FILE_PENDING_RETRIEVAL`.
- No new product indications, efficacy, procurement labels, corporate metrics, certifications, customer claims or facility facts were added.

## Homepage V2 rebuild — 2026-08-23

- Replaced the rejected concept-art-led homepage with a manufacturing-first design using official original-colour Logo, real production equipment, factory-site and verified product-package images.
- Rebuilt the opening story as factory/production → factual company position → evidence-led `Why Kinglyuan` → representative products → manufacturing/quality → responsibility → separated updates/disclosure → contact.
- `Why Kinglyuan` now uses only visitor-facing industrial evidence from official company/technology pages: more than 20 years of development, 180,000 square metres of site area, R&D personnel above 10% of total staff for consecutive years, and nearly 100 domestic/international registrations completed across intermediates, APIs and formulations. It does not claim capacity, batch success rate, clients or invented approvals.
- Replaced high-motion/template styling with transparent-to-solid navigation, restrained reveal/hover behavior, responsive image framing and reduced-motion support.
- All 47 product pages were individually checked. Fifteen exact official product-page/list-page image matches are now integrated into product cards and applicable details; the remaining 32 routes use a single intentional empty state rather than an inferred or fabricated product image. See `ASSET_RECORD.md` for the mapping.
- No GitHub, Netlify or live-site action was taken.

## V2.1 evidence map and QA

| Homepage evidence | Official source and original wording | Front-end interpretation |
|---|---|---|
| `20+ 年` | `https://www.kinglyuan.com/about.html`: `公司经过二十多年的发展，已成为一个集研发、生产、服务为一体的综合性制药企业。` | 20+ years of development |
| `180,000 ㎡` | `https://www.kinglyuan.com/about.html`: `公司占地18万平方米` | Site area |
| `10%+` | `https://www.kinglyuan.com/ky.html`: `公司研发人员占比职工总人数持续多年超过10%` | R&D personnel share |
| `近百项` | `https://www.kinglyuan.com/ky2.html`: `已完成国内外各类涉及医药中间产品，原料药和制剂的注册审批近百项。` | Completed registrations across stated product areas |

- These four facts replaced the former content-inventory counts on the public homepage. No internal audit, roadmap, source-retrieval or inventory terms remain in the homepage `Why` section.

- `npm run build` regenerated the canonical 47-product, 16-news and 10-disclosure reference data successfully.
- `npm run check` passes homepage source, provenance, product-media, navigation, reduced-motion and unsupported-claim checks.
- Browser review at desktop and 390px mobile confirmed the original-colour logo, real-image hero, mobile grouped navigation, product filtering, product detail, company update, information disclosure and English home routes. A fresh final browser session reported no console warnings or errors while entering the product library from the homepage.

### V2.1 visual follow-up

- The revised industrial-evidence copy and fifteen-image product library passed the local source checks after the V2.1 changes.
- The browser surface disconnected before the final post-change screenshot cycle could be started again. Earlier desktop/390px visual checks remain valid for the shared layout, header, hero, menu and interaction system; the next Owner review should include a quick visual confirmation of the revised `Why Kinglyuan` copy and the mixed image/empty product-card states.

## Homepage V2.2 reconstruction — local only

- Consolidated the active runtime in `app-v2.js`; `index.html` no longer loads the former override file, so stale duplicate home/product implementations cannot replace the current homepage.
- Rebuilt the header and footer around the unmodified transparent official logo: exactly one mark in the opening viewport, a warm solid header for legibility, no CSS white logo support patch, no recolouring or inversion.
- Removed the rejected production-vessel hero. The later father-and-daughter candidate was also rejected because it reads too close to eldercare rather than pharmaceutical health, and the non-human life-science/circulation candidate was rejected as too microscopic and research-like. All three copies were recoverably moved out of the project to `D:/Vault/90_Staging/jinliyuan_rejected_concepts_20260823/` and have no runtime/CSS reference. A real factory-exterior hero branch was evaluated and paused by the Owner; `company-qy2.jpg` is retained as an official candidate but is not referenced. The active hero is the Owner-approved abstract brand-space image: warm-white curves, translucent burgundy and restrained pharmaceutical blue. Its explicit non-factual boundary is recorded in `ASSET_RECORD.md`; official production equipment remains only in Manufacturing & Quality.
- Removed the redundant post-hero company statement, homepage disclosure promotion, manufacturing caption, awkward contact close copy/rule and the black footer break. Company updates now occupy an independent full-width homepage section; Information Disclosure remains accessible through its own navigation route.
- Reworked the evidence grid using only source-verifiable material: 20+ years of development and 560 employees from the company profile; nearly 100 registrations and nearly 100 patent applications from the research-results page. The prior 180,000-square-metre and 10% cards were removed. “Nearly 100 registration approvals” remains approvals, never companies.
- Renamed the section to `产品中心 / Products` and added a reusable display-title sanitiser so consistency-evaluation and dosage parentheticals are absent from customer-facing cards, results and detail headings while unchanged source text remains in the audit record.
- Reframed responsibility inside the shared centred content width; simplified the contact block while retaining the approved burgundy finish and used a warm parchment footer so the unmodified dark official logo remains legible without a white support patch.
- No GitHub, Netlify or public-site action was taken.

## V2.3 homepage refinement — 2026-08-23

- Consolidated the active presentation layer into `styles-v2.css`; `index.html` now loads that single cache-versioned stylesheet and the former refinement file is retained only as an inert rollback note. This prevents old hero, logo and black-footer rules from briefly competing with the current design.
- Reset the desktop anchor so the header brand and hero copy share the same left-side wrap instead of leaving the headline visually centred. The header navigation now distributes across the remaining space; the mobile wrap remains bounded.
- Corrected the evidence display to `20+`, `560`, `≈100`, `≈100`. The original source is `拥有员工560人` (not 560+) and both `近百项` sources are rendered as an approximate count rather than `100+`, `近100`, companies or exact approval totals.
- Replaced bright white featured-product cards with low-contrast warm paper material and restrained hover treatment. The manufacturing section now uses a low-saturation graphite/burgundy gradient instead of black.
- Strengthened the Responsibility eyebrow and cropped the existing authentic `company-qy1.jpg` with CSS only (`object-position: center 18%`, scale) to minimise the lower parking area without falsifying the image.
- Simplified the English hero to `Manufacturing. / Committed to health.` and changed the secondary hero action to `Contact us / 联系我们`, routed directly to `#contact`.
- Featured English products now use an explicitly recorded internal generic-name map: `Irbesartan Tablets`, `Telmisartan Tablets`, `Cilostazol Tablets`, and `Cilostazol`. These are not represented as official English product titles because the audited English public site does not provide them. English company updates deliberately keep their original Chinese titles for the same reason—no unofficial translation is presented as company source material.
- The unmodified official logo is used without a CSS white panel in header and footer. `mix-blend-mode: multiply` is confined to compatible warm surfaces so the existing white pixel field no longer reads as a detached rectangle; the footer remains warm burgundy rather than black.
- `npm run build` regenerated 47 products, 16 news records and 10 disclosure/PDF records; `npm run check` passed all 16 current source checks. No GitHub, Netlify or public-site action was taken.

### Visual-QA state

The interaction gate was `WORK_MODE`. The local browser connection initially supplied a selectable Edge surface but disconnected before a fresh page/tab could be created; its later browser list was empty. Therefore the V2.3 browser screenshot/console pass is **not claimed**. Source-level responsive and semantic checks passed; a fresh connected browser should still inspect Chinese/English at 1365px, 1920px and 390px before final Owner visual sign-off.

### V2.3 anchor regression correction

The shared `.wrap.hero-inner` must retain the full shared wrap width. Its content-width rule was corrected from `max-width: 700px; margin: 0` to `width: var(--wrap); max-width: none; margin-inline: auto`; only the headline itself is limited to `700px`. This makes the header brand and hero copy share the same computed left anchor: 40px at a 1365px desktop viewport, approximately 300px at 1920px (subject only to the browser scrollbar width), and 20px at 390px mobile. It prevents the prior x=0 headline clipping while preserving a left-side hero rather than returning it to the rejected centred position.

### Product-grid overflow correction

The product catalogue grids now use `minmax(0, 1fr)` and every card is allowed to shrink (`min-width: 0`). Product names, long chemical/intermediate names, record text and source links apply safe `overflow-wrap: anywhere` / `word-break: break-word` rules. This preserves every original product string while preventing the previous English catalogue horizontal overflow at desktop and mobile widths.

## About Jinliyuan — Batch 1 formal implementation — 2026-08-26

- routing: `assigned_model: gpt-5.6-terra`; `actual_model: gpt-5.6-terra`; `execution_allowed_for_sol: no`; handoff already completed by the primary task.
- scope delivered: About landing page, Company Profile, Culture, Qualifications, and Company Exhibition in both Chinese and English interfaces.
- page identities: the landing page is an editorial entry sequence rather than four repeated cards; Profile is evidence-led and includes the verified `20+`, `560`, `9.6亿元`, and `18万㎡` foundation data plus the `32` senior-title and `42%` technical-personnel context; Culture uses the public purpose, operating principles and talent philosophy; Qualifications uses source-information lightboxes rather than fabricated certificate imagery; Company Exhibition uses a ten-image selection plus all fifteen authentic legacy public images behind “view all.”
- authenticity: full-size `qy1`–`qy15` public Company Exhibition images were retrieved into `assets/official/gallery/` and recorded in `ASSET_RECORD.md`. No concept certificate, factory, equipment, location, employee event or enterprise event was introduced.
- interaction: About mega-menu now contains all four true secondary routes with the existing continuous desktop hover/focus area; mobile retains grouped, clickable links. Qualification dialogs include their public source record; gallery dialogs support previous/next navigation; the full gallery uses progressive loading rather than numeric pagination.
- responsive correction: repaired the shared mobile `--wrap` declaration and added narrow-layout containment for the About family. Headless Edge has a minimum narrow-window rendering width of approximately 500px; review at that width confirmed menu/language controls, profile layout, text wrapping, factual content and imagery without horizontal loss. Source-level checks cover the 390px breakpoint rules.
- validation: `node --check app-v2.js`, `npm run build`, and `npm run check` passed. Desktop and headless narrow-layout visual review covered the five About routes. No GitHub, Netlify, or public-site action was taken.

## V2.4 navigation and content-surface refinement — local only

- Replaced the homepage mixed product-image row with four consistent official package-photo thumbnails (IDs 55, 6, 54, 7). The former promotional green composition and chemical-structure mixed card are not used in the homepage row; exact provenance is recorded in `ASSET_RECORD.md`.
- Softened the Products → Manufacturing transition by reducing the manufacturing section's visual area, lifting its opening tone to a graphite/burgundy gradient and retaining the official equipment image as the section's factual anchor.
- Added accessible native-detail navigation groups for About, Products, Manufacturing & Quality, Company Updates, Responsibility and Careers. These provide keyboard-operable desktop flyouts and expandable mobile groups. Product category links now route into the existing filtered catalogue rather than producing a missing-page result.
- Existing complete content routes remain local and source-backed: 47 product records, 16 news records and 10 information-disclosure/PDF references. English content without audited company-authored body text continues to retain original Chinese records within an English interface rather than presenting invented official translation.

## V2.4.2 evidence and interaction correction

- The two homepage evidence cards now retain the exact non-precise source wording: `近百项` in Chinese and `Nearly 100` in English. The underlying official `ky2.html` statements establish neither an exact number nor a 90+/100+ threshold, so neither is shown.
- Manufacturing is now a warm stone-colour solid section with a fine boundary from the products stage and dark body text. It contains no gradient and no near-black field; section hierarchy comes from spacing, borders and the official equipment image.
- Desktop navigation flyouts open on pointer hover and keyboard focus, closing on pointer exit/focus exit. Native details clicking remains a fallback and mobile retains the grouped click interaction.

## V3 subpage rebuild

- Replaced the shared subpage landing pattern with independent About, Products, Quality, Responsibility, News, Careers and Contact page families. About uses a 2×2 entry grid with four real routes; Quality uses evidence bands; Products separates public package imagery from the directory; News uses tabs and chronological rows; Careers and Contact are dedicated editorial/information layouts.
- Information Disclosure is no longer exposed in header navigation or rendering routes. Its source data remains local for audit retention.
- The About honours page deliberately states that no standalone certificate image was retained in the local audit set, rather than fabricating credentials. Official company and equipment assets retain source semantics and captions.

## V3.2 reference-driven navigation and display correction — 2026-08-24

- Replaced the plus/minus native-details flyouts with a Samsung Biologics / Jinruikang-style full-width mega menu. Every top-level label is a direct link; desktop disclosure uses a continuous 84px header-to-panel hover/focus region with no geometric gap, while mobile exposes the same hierarchy inside the menu without accordion symbols.
- Browser CUA verification moved from the About top-level link into the full-width panel, then onto Company Profile, and successfully clicked through to `#about/profile` while the panel remained visible. This specifically covers the previously broken pointer path.
- Rebuilt the Responsibility landing links as non-overlapping editorial rows and retained one proportionally cropped official site image. The former inline-anchor layout that produced overlapping cards and narrow vertical strips was removed.
- Removed the equipment image and caption from Production & Quality Management. Only the Research Platform route retains one smaller, centred relevant equipment image; the remaining quality routes are text-led.
- Reduced the company-profile image height and replaced the Careers three-card layout with a large editorial statement, two horizontal information rows and a dedicated recruitment contact band.
- Visual QA at 1280×720 confirmed no horizontal overflow on Responsibility, Production & Quality Management, Research Platform, Careers and News. The browser console reported no warning or error entries during the route pass.
- Cache versions were advanced to `2.10`. `node --check app-v2.js`, `npm run build` and all 25 local checks passed. No GitHub, Netlify or public-site action was taken.

## V4 complete local reconstruction — 2026-08-27

- routing receipt: `assigned_model: gpt-5.6-terra`; `actual_model: gpt-5.6-terra`; `execution_allowed_for_sol: no`; `handoff_required: no`.
- Rebuilt the active local runtime and style system around the reference synthesis rather than extending the former generic-card pattern. The homepage now uses a full-width, warm abstract brand-space composition with colour continuing behind the text side, a centered visual field, the approved Chinese and shortened English headlines, and no extra logo or unsupported monogram.
- Replaced homepage metrics with `20+`, exact `560`, `¥960M` / `RMB 960M`, and `~100` registrations. All four count from zero once when their section enters view; the `~` sign remains visibly approximate and reduced-motion settings keep final values static.
- Product landing now contains six finished medicines in a 3×2 desktop layout. It does not mix chemical structures with packaging. The complete directory has visual product identity, search and category controls; category routes omit the landing-only featured-medicine block. Corrected the legacy category data at presentation level so IDs 6, 7, 12, 13, 14, 16, 54 and 55 are treated as formulations.
- Rebuilt all page families with distinct structure: About overview / profile / culture / qualifications / image archive; Production / quality management / research and development / technical collaboration; full news archive and detail pages; discrete responsibility pages; careers, work environment and recruitment contact; contact, enquiry and adverse-event demo forms; and the separate disclosure archive.
- Desktop navigation is a hover-and-focus mega menu with no click-only `+/-` control and no pointer gap between label and panel. Mobile uses a bounded menu that exposes the same real links. Gallery lightbox, source-record lightbox, product filtering, site search, language route preservation and page-entry reveals remain active.
- Financial figure visual hierarchy is currency prefix + large number + scale suffix: Chinese `¥960M`; English `RMB 960M`. The display is not `960B` and does not use an invalid trillion unit.
- Validation passed: `node --check app-v2.js`; `npm run build`; `npm run check` (14 architecture/content/asset checks). Local browser verification at 1440×1000 and 500×900 covered key Chinese and English routes, no horizontal overflow, current-runtime console errors, hover-menu continuity, count-up completion, product filtering, gallery next/previous control and 15-image archive availability.
- Boundary: local-only review build. No GitHub push, Netlify deployment, public site mutation or form transmission was performed.

## V4.2 second visual reconstruction — local only (2026-08-27)

- Home now uses the approved non-factual `jinliyuan-culture-values-concept-v1.png` brand-space image as its only hero visual. A calibrated left-to-right veil keeps the tree and architectural form visible while placing copy in the left-side middle at 1280–1440px; mobile retains a single bounded composition.
- The Why heading is now “为什么选择金立源？”. Count-up values remain `20+`, exact `560`, `~100`, and an asset hierarchy of large `960`, an enlarged `M`, then a smaller, visually separated `¥` (English: `RMB 960M`).
- Reworked About profile, culture, qualifications and image archive into different editorial families. Heroes are compact so real content appears in the first viewport. Culture uses a CSS-built abstract field rather than repeating the homepage artwork; qualifications uses a concept atmosphere plus source-traceable records and no invented certificate scan; the 15-image archive uses a responsive, proportion-respecting masonry and lightbox.
- Reworked production, quality, research and collaboration into separate evidence/process pages without adding capacity, equipment, policy or quality claims. News and industry pages are concise editorial archives. Disclosure presents only clear date/category/title/action rows while retaining underlying local source records.
- Responsibility now has an independent, clearly labelled concept visual and structured routes; Careers is one complete recruitment page rather than a mega-menu family; Contact has a stronger editorial contact layout. The desktop header has centred navigation, hover/focus megas, a usable search field and no former contact/search divider. Visual interaction arrows are hidden globally and replaced by colour, underline and movement states.
- Validation: `node --check app-v2.js`, `npm run build`, and `npm run check` pass (16 checks). Headless Edge rendered the revised home at 1280px and English mobile at 500px, plus the Culture page at 1440px; no layout break or horizontal loss was found in those snapshots. Browser-plugin control was unavailable in this session, so the route walkthrough used local headless Edge rendering rather than a focused browser window.

## Production release — 2026-08-27

- Runtime commit `472dc37191b01c3b94c4a8537643fd3e337270fc` was pushed to the existing `main` branch of `Gyroo7y/zhejiang-jinliyuan-pharmaceutical`; no force push, repository creation or remote rebinding occurred.
- The already linked Netlify site `zhejiang-jinliyuan-pharmaceutical` (site ID `f5a92a97-fffd-4e01-8783-e11d6649dbea`) uses the established CLI production workflow. Production deploy `6a8fd168f97d07d597a373e3` reached `ready/current` state at `2026-08-27T05:56:03Z`.
- Production URL: `https://zhejiang-jinliyuan-pharmaceutical.netlify.app/`. Immutable deploy URL: `https://6a8fd168f97d07d597a373e3--zhejiang-jinliyuan-pharmaceutical.netlify.app/`.
- Live HTTP checks confirmed `200` responses for the homepage, V4.2 JavaScript and CSS, and the new homepage concept asset; the homepage serves the `v=3.1` cache revision. Local test screenshots, test profiles, Markdown records and tools are excluded by `.netlifyignore` and were not part of the public deploy.
