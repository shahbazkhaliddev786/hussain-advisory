# Design system

A light, premium product-page style (in the spirit of Stripe), built from the PASA logo's colours. Tokens live in `src/app/globals.css`; this file explains how to use them. A new font-size or shadow token must also be registered with tailwind-merge in `src/lib/utils.ts`, or `cn()` will treat it as a colour and drop the real colour class.

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

| Role          | Utility        | Spec                                                         |
| ------------- | -------------- | ------------------------------------------------------------ |
| Hero headline | `type-display` | 44–72px, tracking −0.04em, weight 600                        |
| Section title | `type-title`   | 34–52px, tracking −0.035em, weight 600                       |
| Panel title   | `text-2xl–4xl` | 24–36px (approach stage, training cards), weight 600         |
| Card title    | `text-xl`      | 20px, tracking tight, weight 600                             |
| Lead          | `text-lg`      | 18–20px / relaxed                                            |
| Body          | default        | 16px / 1.6, `text-body`, including copy inside cards and FAQ |
| Interface     | `text-ui`      | 15px: navigation links and default-size buttons only         |
| Small         | `text-sm`      | 14px: secondary lines, stage summaries, labels               |
| Caption       | `text-xs`      | 12px: pills, chips, illustration labels; nothing smaller     |

Use only these steps; no arbitrary `text-[…px]` sizes. Sentence case everywhere, including buttons.

## Surfaces and layout

- Content width `max-w-6xl` (72rem) with 24px side padding.
- Sections alternate white and `surface`, with navy for the training card and the contact section. Section padding is 96–128px.
- `card`: white, hairline border, soft layered shadow; cards are `rounded-2xl` or `rounded-3xl`. Cards that are not links do not move on hover; the service cards answer the pointer with the spotlight glow only.
- Elevation comes from the shadow tokens, smallest to largest: `shadow-hairline` (pills, inputs), `shadow-tab` (selected tab), `shadow-card` (cards), `shadow-float` (chips, badges, glass captions), `shadow-raised` (hero card, portrait, training cards), `shadow-overlay` (the contact form on navy). The buttons keep their own built-in shadows.
- Gaps: 48px (64px from `md`) between a section heading and its content.
- Bento cards with an illustration go side by side from `lg`; below that the illustration sits under the text.
- `border-gradient`: the logo's blue, sky and yellow as a border, used once (the featured training card).
- Section headings: a pill label, a centered title, and an intro paragraph.

## Components

- **Navbar** (`landing/navbar.tsx`): floating, transparent at the top, frosted glass after scrolling. Phones get a dropdown panel (Escape and outside taps close it).
- **Hero** (`landing/hero.tsx`): a soft gradient glow over a faint grid, the headline in two lines with the second in gradient text, and the procurement-cycle card with two detail chips.
- **Services** (`landing/services.tsx`): a bento grid; the two wide cards carry small illustrations.
- **Approach** (`landing/approach.tsx`): Radix tabs for the six stages; arrow keys move between them. A white pill slides to the selected stage, and the panel enters from the side you moved towards.
- **FAQ** (`landing/faq.tsx`): native `<details>`, one open at a time; answers expand and collapse where the browser supports `::details-content` (the `disclosure` utility) and simply open elsewhere.
- **About**, **Training**, **Contact** (navy section with the form card), **Footer**.

## Motion

- Motion tokens (`--duration-*`, `--ease-smooth-out`, from the transitions.dev scale) live in `globals.css`; every transition uses them. UI motion stays under 300ms: quick 150ms (hover in, closing, button press, field focus), fast 250ms (hover out, opening, tabs, navbar, glow fade). Micro, medium and slow stay in the scale for later use.
- One curve: `--ease-smooth-out` (a strong ease-out, quint) in CSS, `power4.out` in GSAP.
- Opening is slower than closing; hover arrives quickly and leaves softly. Tailwind v4 moves elements with the `translate` and `scale` properties, so transitions list those, not `transform`.
- Hero: badge, buttons and audience line fade up on load (500ms, staggered 80ms). The cycle card (`landing/cycle-card.tsx`) runs a GSAP timeline: panel rises, the six stages stagger in, the connector draws left to right, then the two detail chips settle; all done in about 1.6s. The headline and intro do not animate, so they paint immediately.
- Sections below the fold fade up 12px once via GSAP ScrollTrigger (`landing/reveal.tsx`, 0.5s). Content is visible without JavaScript; reduced motion keeps a plain fade.
- Approach: the stage card stays put when the stage changes; only its content swaps, fading in with a 2px blur and sliding 8px from the side the selection moved towards.
- Service cards carry a pointer-following glow (`landing/spotlight-card.tsx`, adapted from React Bits), mouse and pen only. The glow is moved with a transform and trails the pointer by a 150ms transition.
- From `md`, the hero's three glows drift on slow 22–30s loops (an aurora, CSS only). It is the page's only ambient loop: it carries `data-ambient` and pauses while the hero is off-screen (`landing/pause-offscreen.tsx`).
- The phone menu fades and slides 4px (open 250ms, close 150ms). Buttons scale to 0.98 when pressed. Arrows nudge 2px on hover.
- `prefers-reduced-motion` turns off movement (slides, blur, the pill, the aurora, arrow nudges) and smooth scrolling. Fades stay: the phone menu, the stage content, FAQ answers and section reveals still fade in.

## Accessibility

WCAG 2.2 AA. Visible focus rings, a skip link, real headings in order, labelled form fields with linked error messages, focus moved to the first error. Verified with axe (0 violations, desktop and phone) and Lighthouse (accessibility 100).
