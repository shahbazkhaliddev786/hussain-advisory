# Design system

A light, premium product-page style (in the spirit of Stripe), built from the PASA logo's colours. Tokens live in `src/app/globals.css`; this file explains how to use them.

## Principles

1. **Premium, not plain.** Soft gradient glows, layered rounded cards, pill labels and smooth motion, kept crafted rather than loud.
2. **The procurement cycle is the story.** Plan, bid, evaluate, award, manage, close: the hero shows it, the Approach section explains it.
3. **Real facts only.** 30+ years, two decades of training, the financier list with its disclaimer. No invented testimonials, clients or statistics.
4. **Readable for everyone.** Every text pairing passes WCAG AA; motion respects reduced-motion settings.

## Colour

| Token              | Hex               | Use                                                     |
| ------------------ | ----------------- | ------------------------------------------------------- |
| `navy`             | #0B3459           | Headings, the training and contact dark surfaces        |
| `body`             | #425466           | Body text (7.8:1 on white)                              |
| `muted`            | #5B6B80           | Secondary text (5.4:1 on white)                         |
| `brand-50…700`     | #EFF5FD … #234C8F | Actions, icons, accents; the logo blue is `brand-400`   |
| `sky`              | #72AEE4           | Glows and illustration accents                          |
| `leaf`             | #FCDE7E           | Warm accents in glows, chips and the contact checkmarks |
| `surface` / `line` | #F6F9FC / #E3E8EE | Alternate section background / hairline borders         |
| `input`            | #8494A9           | Form field borders (3:1 on white)                       |

The primary button is a blue gradient (#3A6FC4 to #2A5AA8, white text at 4.9:1 or better). Gradient headline text stays within blues that keep 3:1 for large text.

## Typography

Geist throughout. Headings are semibold with tight tracking.

| Role          | Utility        | Spec                                   |
| ------------- | -------------- | -------------------------------------- |
| Hero headline | `type-display` | 44–72px, tracking −0.045em, weight 600 |
| Section title | `type-title`   | 34–52px, tracking −0.035em, weight 600 |
| Card title    | `text-xl`      | 20px, tracking tight, weight 600       |
| Body          | default        | 16px / 1.6, `text-body`                |
| Lead          | `text-lg`      | 18–20px / relaxed                      |

Sentence case everywhere, including buttons.

## Surfaces and layout

- Content width `max-w-6xl` (72rem) with 24px side padding.
- Sections alternate white and `surface`, with navy for the training card and the contact section. Section padding is 96–128px.
- `card`: white, hairline border, soft layered shadow; cards are `rounded-2xl` or `rounded-3xl` and lift slightly on hover.
- `border-gradient`: the logo's blue, sky and yellow as a border, used once (the featured training card).
- Section headings: a pill label, a centered title, and an intro paragraph.

## Components

- **Navbar** (`landing/navbar.tsx`): floating, transparent at the top, frosted glass after scrolling. Phones get a dropdown panel (Escape and outside taps close it).
- **Hero** (`landing/hero.tsx`): a soft gradient glow over a faint grid, the headline in two lines with the second in gradient text, and the procurement-cycle card with floating detail chips.
- **Services** (`landing/services.tsx`): a bento grid; the two wide cards carry small illustrations.
- **Approach** (`landing/approach.tsx`): Radix tabs for the six stages; arrow keys move between them.
- **About**, **Training**, **FAQ** (native `<details>`, one open at a time), **Contact** (navy section with the form card), **Footer**.

## Motion

- Hero: badge, buttons and the cycle card fade up on load. The headline and intro do not animate, so they paint immediately.
- Sections below the fold fade up once as they enter the viewport (`landing/reveal.tsx`). Content is visible without JavaScript.
- Hover: cards lift 1–4px, arrows nudge 2px. Floating chips drift slowly.
- `prefers-reduced-motion` turns off movement and smooth scrolling.

## Accessibility

WCAG 2.2 AA. Visible focus rings, a skip link, real headings in order, labelled form fields with linked error messages, focus moved to the first error. Verified with axe (0 violations, desktop and phone) and Lighthouse (accessibility 100).
