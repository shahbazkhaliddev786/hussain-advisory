# PASA website

Public website for PASA, Public Procurement and Supply Advisor: procurement advisory, training and mentoring from Naeem Abbas.

## Stack

- Next.js 16 (App Router, Cache Components, Partial Prefetching, Turbopack), React 19, TypeScript
- Tailwind CSS 4 with the PASA tokens in `src/app/globals.css`
- shadcn/ui (new-york style on Radix primitives), lucide icons
- Archivo (variable, width axis) and Source Serif 4 through `next/font`
- Server Actions with zod validation for the forms; react-markdown for long-form text

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script                 | What it does                                                 |
| ---------------------- | ------------------------------------------------------------ |
| `npm run dev`          | Development server                                           |
| `npm run build`        | Production build. Fails if any page stops being fully static |
| `npm run start`        | Serves the production build                                  |
| `npm run lint`         | ESLint                                                       |
| `npm run typecheck`    | Generates route types, then runs the TypeScript compiler     |
| `npm run format`       | Prettier, including Tailwind class sorting                   |
| `npm run format:check` | Prettier in check mode, as CI runs it                        |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, format check and build on every pull request.

## Environment variables

| Variable               | Purpose                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, the sitemap and structured data. Defaults to `http://localhost:3000`        |
| `PASA_INBOX`           | `log` prints form submissions to the server log. Default: `log` in development, off in production (see below) |

## Forms

The contact form, training registration and Ask PASA submit through Server Actions (`src/lib/forms/actions.ts`). Each one:

- works without JavaScript, and with it shows errors in place without a page load;
- validates on the server with zod, keeps the visitor's answers on error, and lists errors in a summary that takes focus;
- carries a honeypot field that quietly drops bot submissions.

Submissions have no destination yet: the admin (milestone 4) will store them. Until then, `src/lib/forms/inbox.ts` logs them in development, and in production the form tells the visitor it could not be sent and gives them the email address, keeping their answers so they can copy them. Nothing pretends to send.

## Project structure

```
src/app                  Routes: every page, the sitemap, robots.txt and icons
src/components/ui        shadcn/ui components (owned code, tuned to PASA)
src/components/site      Header, desktop and mobile navigation, footer, logo
src/components/home      Homepage sections and the procurement cycle
src/components/pasa      Shared PASA pieces: page header, sections, rows, cycle timeline,
                         notes, prose, program card, entry lists, alphabet navigation
src/components/forms     Form fields, status messages and the three forms
src/content              Typed content, navigation and routes (shaped like the future CMS)
src/content/knowledge    Knowledge Hub topics and entries; long-form text in writing/
src/lib                  Metadata helpers, form actions, validation and delivery
public/brand             Logo files
docs/                    Client brief, design directions, surface brief
PRODUCT.md, DESIGN.md    Product context and the design system
```

## Content

- Page copy lives in `src/content`, and every internal URL comes from `src/content/routes.ts`.
- Bracketed values such as `[Dates to be announced]` are facts the client has not supplied yet.
- `draft: true` marks knowledge and legal text written for the client's review. Those pages show a "draft" note until the flag is removed.
- A Knowledge Hub entry without a `body` is listed as "in preparation". Its page invites questions, is kept out of search results and is left out of the sitemap.

### Waiting for the client

- Naeem Abbas's portrait and full biography; examples for each area of experience; sector experience
- Training details: dates, delivery, duration, fee and venue
- Review of the drafted text: 6 Knowledge Hub pieces, 36 dictionary definitions, the development partner procurement page, the beginner program's objectives and topics, and the privacy notice
- The bid evaluation independence wording on the service page
- 29 Knowledge Hub guides marked "in preparation" (the brief asks for 8 to 12 before launch)
- Original logo artwork

## Conventions

- The site is static: `ensureStatic = "navigation"` in the root layout makes the build fail if a page starts depending on request data.
- Dynamic routes list their pages in `generateStaticParams`; an unknown slug returns the not-found page.
- Add shadcn/ui components with `npx shadcn@latest add <name>` (`components.json` is configured; it needs network access to ui.shadcn.com).

## Status

Milestone 3: every page of the launch scope (Home, About, Services, Training, Knowledge Hub, Expertise, Contact) and the three forms. Next, milestone 4: the admin, where PASA edits content and receives inquiries, registrations and questions.
