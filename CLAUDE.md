# Mane Musings

A curly hair blog built with Next.js (App Router), Sanity, Tailwind CSS v4, deployed on Cloudflare Pages.
Primary monetization: affiliate links embedded in articles as inline product cards.

## Stack
- **Framework:** Next.js 16, App Router, TypeScript
- **CMS:** Sanity v3 — Studio embedded at `/studio` (run `npm run dev`, visit http://localhost:3000/studio)
- **Styling:** Tailwind CSS v4 — design tokens in `src/app/globals.css` inside `@theme {}`. No `tailwind.config.ts`.
- **Fonts:** Bebas Neue (display/headlines), Archivo (body/UI) — configured in `src/lib/fonts.ts`
- **Testing:** Vitest + React Testing Library (`npm run test`)
- **Hosting:** Cloudflare Pages — push to main to deploy

## Design Tokens
| Token | Hex | Usage |
|---|---|---|
| `canvas` | #FEFEFB | Page background |
| `ink` | #393A3A | Headlines, primary text, CTA buttons |
| `sage-light` | #F0F5E5 | Card hover states, tag backgrounds |
| `sage` | #DDE2BE | Borders, dividers, pill outlines |
| `warm-white` | #FCFCF5 | Subtle section backgrounds |
| `cream` | #F2F4E5 | Panel / section backgrounds |
| `stone` | #E6E8DA | Heavier borders |
| `gray` | #696B6B | Secondary text, captions, meta |
| `body` | #505252 | Body text |

Usage: `bg-canvas`, `text-ink`, `border-sage`, etc.

## Sanity File Location
Sanity files live in `src/sanity/` (not a top-level `sanity/` directory).
- Client: `src/sanity/lib/client.ts`
- Queries: `src/sanity/lib/queries.ts`
- Schemas: `src/sanity/schemaTypes/`
- Tests: `src/sanity/__tests__/`
- Import from anywhere in the app: `import { ... } from '@/sanity/lib/queries'`

## Routes
| Route | Page |
|---|---|
| `/` | Homepage (hero + article grid, no topic filter) |
| `/articles` | Articles listing (hero + topics strip + grid) |
| `/articles/[slug]` | Article page |
| `/topics/[slug]` | Topic category page |
| `/what-i-use` | What I Use (3 pinned articles) |
| `/about` | About |
| `/studio` | Embedded Sanity Studio |
| `/curl-types/[slug]` | Hair type hub (hidden until enabled) |

**Important:** Article URLs are `/articles/[slug]`, not root-level `/<slug>`.

**Important:** Pages must not use `<main>` as their root element — the root layout at `src/app/layout.tsx` already provides one.

## Sanity Schemas
- **Post** — `category` (required), `hairTypes[]` (optional), `pinnedToWhatIUse` (boolean), `body` (Portable Text with `affiliateCardEmbed` and `splitSection` blocks), `seo`.
- **Category** — topic categories
- **HairType** — curl types (3B, 4C, etc.). `enabled: boolean` — set true in Studio to activate `/curl-types/[slug]`. No code deploy needed.
- **AffiliateLink** — reusable product. Define once, reference from many posts.

## Portable Text Body Blocks
- `affiliateCardEmbed` — inline product card. Rendered by `src/components/article/AffiliateCard.tsx`.
- `splitSection` — two-column layout: heading on left, content on right. Stacks on mobile. Rendered by `src/components/article/SplitSection.tsx`.

## What I Use Page
`/what-i-use` shows posts with `pinnedToWhatIUse: true`. To change which articles appear: Sanity Studio → Posts → toggle `Pin to What I Use`.

## Hair Type Pages
`/curl-types/[slug]` returns 404 unless `HairType.enabled` is `true`. To activate: Sanity Studio → Hair Types → select → toggle Enabled → save.

## Running Locally
```bash
npm run dev          # Next.js + embedded Studio at http://localhost:3000
npm run test         # Vitest watch mode
npm run test:run     # Vitest single run
```
