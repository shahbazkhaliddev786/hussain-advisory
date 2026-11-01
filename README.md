# PASA website

One-page website for PASA, Public Procurement and Supply Advisor: procurement advisory, training and mentoring from Naeem Abbas.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS 4, with the PASA tokens in `src/app/globals.css`
- shadcn/ui components (button, input, textarea, native select), Radix tabs, lucide icons
- Geist through `next/font`
- A Server Action with zod validation for the contact form, delivered through Formspree

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script                 | What it does                                             |
| ---------------------- | -------------------------------------------------------- |
| `npm run dev`          | Development server                                       |
| `npm run build`        | Production build. Fails if the page stops being static   |
| `npm run start`        | Serves the production build                              |
| `npm run lint`         | ESLint                                                   |
| `npm run typecheck`    | Generates route types, then runs the TypeScript compiler |
| `npm run format`       | Prettier, including Tailwind class sorting               |
| `npm run format:check` | Prettier in check mode, as CI runs it                    |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, format check and build on every pull request.

## Project structure

```
src/app                  Layout, the page, not-found, icons
src/components/landing   The page's sections: navbar, hero, services, approach, about,
                         training, FAQ, contact and footer
src/components/ui        shadcn/ui components, tuned to PASA
src/content/landing.ts   All the copy on the page
src/assets               Naeem Abbas's photograph
src/lib/forms            The contact form's action, validation and delivery
public/brand             Logo files
PRODUCT.md, DESIGN.md    Product context and the design system
```

## Editing content

All text lives in `src/content/landing.ts`: services, the six procurement stages, the advisor, training, FAQ and the contact form's topics. Change it there; the components only lay it out.

## Contact form

The form validates on the server, keeps the visitor's answers on errors, works without JavaScript and quietly drops spam bots (a hidden honeypot field).

Messages are sent to **Formspree** (form `xyeendgk`), which emails them to the inbox set in the Formspree dashboard. The visitor's address is the reply-to, so replying to the email answers them directly. The delivery code is in `src/lib/forms/inbox.ts`. If Formspree can't be reached, the form says so, offers email and WhatsApp, and keeps the visitor's message so they can copy it.

| Variable               | Purpose                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Public origin for the canonical URL. Defaults to `http://localhost:3000`             |
| `PASA_INBOX`           | `log` prints contact messages to the server log instead of sending them to Formspree |
| `FORMSPREE_ENDPOINT`   | Overrides the Formspree endpoint. Defaults to `https://formspree.io/f/xyeendgk`      |

## Waiting for the client

- Training dates for the beginner program
- Original logo artwork (`public/brand` holds a vector redraw)
