# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is bun (`bun.lock` is the source of truth; `package-lock.json` also exists but prefer bun).

```bash
bun dev      # start dev server at http://localhost:3000
bun run build
bun run start
bun run lint # eslint (flat config, next/core-web-vitals + next/typescript)
```

There is no test suite configured in this repo.

## Architecture

Next.js 16 App Router site (React 19, TypeScript, Tailwind CSS v4). It's a personal portfolio with a handful of independent top-level routes rather than a deeply shared page hierarchy:

- `app/page.tsx` — home
- `app/music/page.tsx`, `app/fitness/page.tsx`, `app/photos/page.tsx` — content-heavy pages backed by typed data files in `lib/` (`music-data.ts`, `fitness-data.ts`)
- `app/projects/page.tsx` — client-side filterable project grid, data in `app/projects/Projects.ts`
- `app/projects/[slug]/page.tsx` — dynamic MDX project detail route
- `app/aboutMe/page.tsx` — **not** part of the current visual design system (see below); still uses the old light shadcn styling via `app/components/AboutMe.tsx`

`app/components/site/` holds the shared "jazz club" design system pieces used across the 5 main pages: `SiteNav` (active-link underline, rendered globally from `app/layout.tsx`), `SiteFooter` (also global), `Eyebrow` (accent-colored mono label), `MonoLabel` (muted mono label), `SectionHeading` (eyebrow + serif H2), and `Button` (`primary`/`outline` variants, Link-based, handles `http(s)://`/`mailto:` as external `<a>`). Reach for these instead of hand-rolling new headers/buttons on the 5 main pages. `app/components/YouTubeEmbed.tsx` + `lib/youtube.ts` handle YouTube URL → embed conversion, used by the Music page's recordings.

`app/components/` also has a few pre-existing empty stub files unrelated to the current design (`Gallery.tsx`, `PostCard.tsx`, `ProjectCard.tsx`, `Resume.tsx`) — check before assuming they contain working code.

`components/ui/` is the shadcn/ui component set (new-york style, Radix + lucide icons, configured via `components.json`). Most of it (`card`, `carousel`, `separator`, `sheet`, `badge`) is currently unused dead weight left over from a prior design — only `button.tsx` is still used, by the (out-of-design-system) `AboutMe.tsx`. Add new shadcn components through the shadcn CLI rather than hand-rolling primitives. `lib/utils.ts` exports the `cn()` class-merge helper shadcn components expect.

### Design tokens

The site uses a dark "jazz club" theme defined as CSS custom properties in `app/globals.css` (`--jazz-bg`, `--jazz-surface`, `--jazz-raised`, `--jazz-line`, `--jazz-edge`, `--jazz-fg`, `--jazz-muted`, `--jazz-ink`, `--jazz-accent`), mapped into Tailwind's `@theme inline` block as `--color-jazz-*` so they're usable as ordinary utilities (`bg-jazz-surface`, `text-jazz-muted`, `border-jazz-line`, etc.). Fonts are `next/font/google`: DM Sans (`font-sans`, body), IBM Plex Mono (`font-mono`, labels/eyebrows/metadata), Instrument Serif (`font-serif`, display headings, regular + italic) — all wired as CSS variables in `app/layout.tsx`. `/aboutMe` does not use this token system.

### Content pipeline for projects

Project detail pages are MDX-driven, not React-driven:

- Source content lives in `content/projects/<slug>.mdx`, with YAML frontmatter (currently just `title`).
- `app/projects/[slug]/page.tsx` reads the file directly off disk by slug (`fs.readFileSync`), parses frontmatter with `gray-matter`, and hands the raw MDX body to `ProjectMarkdown` (`app/projects/[slug]/ProjectMarkdown.tsx`), which renders it via `next-mdx-remote/rsc` with `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-highlight`, styled with Tailwind Typography's `prose-invert` plus jazz-theme color overrides to match the rest of the site.
- The **`/projects` grid**, however, does not read from `content/projects/`: it uses the typed array in `app/projects/Projects.ts` (slug, title, category, description, tags — the filter chips are derived from the distinct `category` values). `lib/projects.ts` independently reads `content/projects/` via `gray-matter` and expects `image`/`description` frontmatter, but nothing imports it — when adding a project, keep `app/projects/Projects.ts` and its `content/projects/<slug>.mdx` file in sync manually.
- `lib/markdown.ts` and `lib/data.ts` are empty stub files.

### Fitness / Music data

`lib/fitness-data.ts` and `lib/music-data.ts` hold the real personal data (training split, big-three lifts, gear, recordings, etc.) rendered by their respective pages — edit these rather than the page JSX when updating content. `recentSessions` in `fitness-data.ts` is intentionally empty (renders an honest "No sessions logged yet." state); populate it with real entries as they happen rather than inventing sample rows.
