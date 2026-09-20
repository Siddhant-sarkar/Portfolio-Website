# Portfolio redesign: handoff for Claude Code

Reference designs for a five-page redesign of this site. The `*.dc.html` files are design references (1440px desktop boards), not runnable pages: they use a design-tool runtime (`./support.js`, `<x-dc>`, `{{holes}}`) that does not exist in this repo. Read them for layout, spacing, copy and structure, then rebuild them as Next.js (App Router) + Tailwind + shadcn/ui components.

## Task

Rebuild the site from these designs, page by page, in the existing stack:

| Design file | Route |
|---|---|
| Main.dc.html | `/` (home) |
| Music.dc.html | `/music` |
| Fitness.dc.html | `/fitness` |
| Projects.dc.html | `/projects` |
| Photos.dc.html | `/photos` |

Rules:
- Keep the existing routes, MDX content in `content/`, YouTube embed support and deployment setup. Replace the visual layer, and reuse existing content where it exists (real recordings, real lift numbers, real photos).
- Extract shared pieces once: `SiteNav` (active-link underline), `SiteFooter`, `Eyebrow`, `SectionHeading`, `Button` (primary and outline), `MonoLabel`.
- Design boards are 1440px wide with 80px side padding and a 12-column grid (24px gap). Make it responsive: collapse grids to 1 column under ~768px, 2 columns for the 3- and 4-column card grids at tablet.
- Any text in square brackets, like `[XXX] kg`, `[Photo 01]`, `[Add a standard]`, is a placeholder. Replace it with real data, or with data-driven fields, never ship the brackets.
- Contact buttons on Home (Email, GitHub, LinkedIn) have `href="#"`. Wire them to the real links.
- Do not remove or restyle content that exists on the old site unless the design replaces it.

## Design tokens

Dark "jazz club" theme, warm neutrals, one brass accent.

| Token | Value | Use |
|---|---|---|
| bg | `#0E0C0A` | page background |
| surface | `#15120E` | cards, bands |
| raised | `#1D1913` | placeholder tiles, media |
| line | `#2C261D` | borders, dividers |
| edge | `#4A4234` | outline button border |
| text | `#F1E9D8` | primary text |
| muted | `#A89D8A` | secondary text |
| ink | `#14100B` | text on brass |
| accent (brass) | `#DBA54A` | eyebrows, active states, primary buttons, italic headline words |

Accent alternatives the design offers as a tweak: `#D0694F`, `#86AEBF`, `#A3C48F`. Keep the accent as one CSS variable (`--accent`).

Radii: 22px cards, panels and photo tiles; 999px (pill) buttons, chips and tags. Dividers are 1px `line` (`rgba(255,238,215,.12)`).

## Glass (Apple "liquid glass" style)

Every card, panel, nav bar, band, outline button, chip and photo tile is frosted glass over the blurred blob layer. Reuse one class or component for it (Tailwind: a `.glass` utility in `globals.css`, or a `Glass` component).

- Card / panel: `background-color: rgba(255,236,208,.09); background-image: linear-gradient(135deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.03) 42%, rgba(255,255,255,.07) 100%); backdrop-filter: blur(26px) saturate(170%); border: 1px solid rgba(255,244,228,.26); border-radius: 22px; box-shadow: inset 0 1px 0 rgba(255,255,255,.42), inset 0 -1px 0 rgba(255,255,255,.08), inset 1px 0 0 rgba(255,255,255,.14), 0 14px 40px rgba(24,12,3,.34);` Add the `-webkit-backdrop-filter` twin.
- Soft glass (rest-day cards): `background-color: rgba(255,236,208,.04); backdrop-filter: blur(18px); border: 1px solid rgba(255,244,228,.14); border-radius: 22px;` with no sheen or shadow.
- Bands and nav bar: `background-color: rgba(255,236,208,.07)` (nav) or `.07` (contact and CTA bands), `backdrop-filter: blur(22px to 24px) saturate(160%)`, no radius.
- Outline button and inactive chip: `background-color: rgba(255,240,222,.10); backdrop-filter: blur(18px to 20px); border: 1px solid rgba(255,240,222,.42);` pill radius, plus `inset 0 1px 0 rgba(255,255,255,.35)` on buttons.
- Primary button and active chip stay solid brass, with `inset 0 1px 0 rgba(255,255,255,.55)` as a top highlight (buttons also get `0 8px 24px rgba(24,12,3,.35)`).
- Tag pills: `background: rgba(255,240,220,.07); border: 1px solid line; border-radius: 999px`.
- Placeholder image areas (project screenshots, photo tiles, recording tiles): glass plus a faint diagonal-stripe pattern `repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,240,220,.07) 14px 15px)`. Replace with real images (`next/image`, `object-fit: cover`) inside the same rounded, `overflow: hidden` frame.
- Backdrop-filter only shows the blobs if no ancestor is a "backdrop root" (an ancestor with `filter`, `opacity < 1`, `mask`, `mix-blend-mode`, or `will-change` on those). Keep the glass elements' ancestors clean, and keep the blob layer as a sibling behind the page content, not a parent.
- Contrast: text on glass must stay 4.5:1 or better. Body text uses `text` and `muted` only.

## Type

Google Fonts: Instrument Serif (regular + italic), DM Sans (400/500/600), IBM Plex Mono (400/500). Load with `next/font/google`.

- Display / headings: Instrument Serif, weight 400, tight line-height (0.92 to 1.1). Hero H1 120 to 132px, page H1 128px, section H2 64px, card titles 32 to 60px. Accent words are italic and brass.
- Body: DM Sans 15 to 20px, line-height 1.5 to 1.6, muted color.
- Labels ("eyebrows", metadata, tags): IBM Plex Mono, 11 to 13px, uppercase, letter-spacing 0.12em.

## Background: blurred fluid blobs (all pages)

A fixed layer of six soft, blurred blobs sits behind every page. Each blob has an organic, constantly morphing shape, drifts along its own path, and pops in and out (fades and scales in from nothing, wanders, then shrinks away and disappears). Cycles have different lengths and offsets, so the motion never syncs up and reads as random. Page content scrolls over the layer; the layer itself never scrolls.

Exact CSS and markup are in the `<helmet><style>` block and the first child of the root `<div>` of any `*.dc.html` file here (Main.dc.html is fine). Copy the keyframes verbatim: `blobM1` to `blobM4` (move + scale + rotate + opacity, with a mid-cycle disappear in `blobM2` and `blobM4`) and `blobR1`, `blobR2` (border-radius morphing). Summary:

- Wrapper: `position: fixed; inset: 0` (the design uses `top:0; left:0; width:100%; height:900px`, standing in for the viewport), `overflow: hidden; z-index: 0; pointer-events: none; aria-hidden`.
- Blobs: `.blob { opacity: 0; filter: blur(44px); will-change: transform, opacity }`, absolutely positioned, 260 to 620px, each with two animations, e.g. `animation: blobM1 30s ease-in-out -8s infinite, blobR1 17s ease-in-out infinite`. Durations 13 to 40s, negative delays so some are already visible at load.
- Colors: two blobs use the accent (`--accent`, brass `#DBA54A`), two umber `#7A4B26`, one copper `#C4693F`, one muted brown `#5E4630`. Peak opacity 0.45 to 0.6.
- Positions in the design (1440x900): b1 (880,40) 520x460, b2 (-180,380) 620x560, b3 (540,500) 380x340, b4 (1120,540) 300x340, b5 (260,30) 280x260, b6 (760,300) 360x320. In the real site use percentages of the viewport instead of px.
- Every nav, section and footer is `position: relative; z-index: 1`, so content paints above the layer. Cards, bands and the nav bar are frosted glass (see Glass above), so the blobs show through them as well as in the gaps.
- `prefers-reduced-motion: reduce`: no animation, blobs sit still at opacity 0.3.

Implementation in Next.js: build it once as a client component `BackgroundBlobs` rendered in `app/layout.tsx` before `{children}`, so it persists across page navigations and the animation never restarts. Plain CSS keyframes are enough and cost no JS.

Optional upgrade for true randomness: on each blob's `animationiteration` event for its move animation, re-randomize its `left`/`top` (as % of viewport), `width`/`height`, color from the palette, and animation duration, so no two cycles repeat. Keep the total number of blobs at 6 or fewer and keep the blur on each blob (not one big filter on the wrapper) so the wrapper edges do not show.

Keep text contrast: body text must stay at 4.5:1 or better over the brightest blob.

## Shared chrome

- Nav, 88px tall, 80px side padding, bottom border: left "Sid Sarkar" (Instrument Serif 32px) + mono "Dev · Guitar"; right links Home, Music, Fitness, Projects, Photos (16px, active link is ivory with a 2px brass underline, others muted).
- Footer, 140px, top border: left "© 2026 Siddhant Sarkar · Hamburg, Germany", right small links to the four sub-pages.
- Sections are separated by a 1px top border and use 80px vertical padding. Section heading pattern: mono brass label like "01 — About" over an Instrument Serif H2.
- Links and buttons: hover = opacity 0.78. Buttons are 56px tall; touch targets 44px minimum.

## Page notes

**Home**: hero with 3-line H1 "Software / that / swings." (italic brass "swings."), intro paragraph, two buttons (See the projects, Listen to the music). Right side: a Dm7 drop-2 fretboard diagram card (inline SVG, frets 5 to 8, notes F/C/A/D, D is the filled root) over a decorative vinyl-record ring graphic. Then About (large serif paragraph + three facts: Studying, Experience, Looking for), "Four rooms" tiles linking to the sub-pages, "Selected work" 4-row list linking to `/projects`, and a centred contact band.

**Music**: hero "Chasing the right note.", "In the woodshed" 3x2 practice-topic cards, Standards table (Tune / Key / Feel; Blue Bossa is the only real row), Recordings (3 video tiles; use the existing YouTube embed component), Rig (guitar, amp and pedals, software), bandmates call to action.

**Fitness**: hero "Built for the V-taper." with 2x2 stat tiles, 7-day split cards (Push, Pull, Legs, Rest, Upper, Lower, Rest; anchors Bench press / Deadlift / Squat), "big three" lift cards with PR, best set and goal, four goals, and a "Recent sessions" log table (Date / Session / Lift / Sets x reps / Weight / Notes). Drive the lifts and log from data (MDX or a typed array) so entries can be added without touching the layout.

**Projects**: filter chips (All, Web, Data & ML, Music tools) that filter a 3-column card grid client-side, plus a "Showing N projects" count. Each card: screenshot area, category label, title, description, tag pills, "View project" link. Keep the project list in a typed array. The design's six projects: Life-tracking dashboard, Personal AI agent, Real-time transcription tool, Investor onboarding platform, NNS fretboard tool, Swing feel visualizer.

**Photos**: 12-column, 6-row (180px rows, 24px gaps) asymmetric gallery of 9 tiles with a caption on each. Exact spans (grid-column / grid-row): 1/6 & 1/4, 6/10 & 1/3, 10/13 & 1/4, 6/10 & 3/4, 1/5 & 4/6, 5/9 & 4/7, 9/13 & 4/6, 1/5 & 6/7, 9/13 & 6/7. Use `next/image` with real photos.

## Suggested order of work

1. Tokens, fonts, Tailwind theme, shared components (nav, footer, buttons, labels).
2. Home.
3. Projects (has the only real interactivity).
4. Music, Fitness, Photos.
5. Responsive pass, accessibility pass (real `<button>` and `<a>`, alt text, contrast), then remove the `design/` folder or keep it as reference.
