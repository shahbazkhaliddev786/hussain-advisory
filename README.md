# PASA website

Public website for PASA, Public Procurement and Supply Advisor: procurement advisory, training and mentoring from Naeem Abbas.

## Stack

- Next.js 16 (App Router, Cache Components, Partial Prefetching, Turbopack), React 19, TypeScript
- Tailwind CSS 4 with the PASA tokens in `src/app/globals.css`
- shadcn/ui (new-york style on Radix primitives), lucide icons
- Archivo (variable, width axis) and Source Serif 4 through `next/font`

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script              | What it does                                                 |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | Development server                                           |
| `npm run build`     | Production build. Fails if any page stops being fully static |
| `npm run start`     | Serves the production build                                  |
| `npm run lint`      | ESLint                                                       |
| `npm run typecheck` | Generates route types, then runs the TypeScript compiler     |
| `npm run format`    | Prettier, including Tailwind class sorting                   |

## Project structure

```
src/app                  Routes: layout, homepage, not-found, icons
src/components/ui        shadcn/ui components (owned code; the button is tuned to PASA)
src/components/site      Header, desktop and mobile navigation, footer, logo
src/components/home      Homepage sections and the procurement cycle
src/components/pasa      Shared PASA pieces: stage coverage, portrait, section header
src/content              Typed content, navigation and routes (shaped like the future CMS)
public/brand             Logo files
docs/                    Client brief, design directions, surface brief
PRODUCT.md, DESIGN.md    Product context and the design system
```

## Conventions

- Page copy lives in `src/content`, and every internal URL comes from `src/content/routes.ts`.
- The site is static: `ensureStatic = "navigation"` in the root layout makes the build fail if a page starts depending on request data.
- Bracketed values such as `[Dates to be announced]` are placeholders waiting for the client.
- Add shadcn/ui components with `npx shadcn@latest add <name>` (`components.json` is configured; it needs network access to ui.shadcn.com).

## Status

Milestone 2: the homepage and the site chrome. Links to other pages lead to the not-found page until milestone 3 builds them.
