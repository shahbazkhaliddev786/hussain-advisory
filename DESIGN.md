# Design system

Direction A, "the procurement line", as built in `src/`. Tokens live in `src/app/globals.css`; this file explains how to use them.

## Principles

1. **The procurement cycle is the map.** Plan, bid, evaluate, award, manage, close. Services, training and Knowledge Hub content all say where they sit in it.
2. **The yellow leaf marks where you are.** The logo's yellow leaf is the only "you are here" marker: the selected stage, the current letter in the dictionary, the current page. It is never decoration.
3. **Authority through type, not ornament.** Wide Archivo headings carry the voice. No stock imagery, icon-card grids, gradients or logo strips.
4. **Plain words, exact claims.** Copy follows the wording rules in `PRODUCT.md`. Missing facts stay as visible `[placeholders]`.

## Colour

| Token               | Hex               | Use                                                               |
| ------------------- | ----------------- | ----------------------------------------------------------------- |
| `navy`              | #0B3459           | Text, headings, primary buttons, hero and closing bands           |
| `navy-700`          | #14457A           | Hover on navy buttons                                             |
| `navy-600`          | #1C4B7E           | Raised surfaces on navy (portrait placeholder)                    |
| `leaf`              | #FCDE7E           | You-are-here marker; main action on navy                          |
| `link`              | #2659A3           | Links and focus rings on light grounds                            |
| `sky`               | #72AEE4           | The cycle line and stage numbers on navy (graphics only on white) |
| `mist`              | #F2F5F9           | Alternate section bands                                           |
| `hairline` / `rule` | #D3DCE7 / #C5D0DE | Dividers                                                          |
| `subtle`            | #4A5D75           | Secondary text on light grounds                                   |
| `soft`              | #C2D3E9           | Secondary text on navy                                            |
| `ink-2` / `ink-3`   | #24384F / #1C3049 | Body text where pure navy is too heavy                            |
| `field`             | #7A8BA3           | Form control borders (3.5:1 on white)                             |
| `dim`               | #8A9AB0           | Inactive markers and letters; graphics only, never body text      |
| `destructive`       | #B42318           | Form errors (6.6:1 on white)                                      |

Every text pairing passes WCAG AA (navy on white 12.7:1, soft on navy 8.4:1, leaf on navy 9.6:1, subtle on white 6.7:1). Leaf yellow and sky never carry text on white.

## Typography

| Role                 | Utility                       | Spec                                              |
| -------------------- | ----------------------------- | ------------------------------------------------- |
| Display (h1)         | `type-display`                | Archivo 760, 116% wide, 38–68px, tracking −0.02em |
| Page title (h1)      | `type-page`                   | Archivo 760, 116% wide, 38–60px, inner pages      |
| Section heading (h2) | `type-h2`                     | Archivo 740, 112% wide, 34–52px                   |
| Inner section (h2)   | `type-section`                | Archivo 740, 112% wide, 28–36px                   |
| Item heading (h3)    | `type-h3`                     | Archivo 720, 112% wide, 26px                      |
| Lead paragraph       | `type-lead`                   | Archivo 400, 19px / 1.55                          |
| Body                 | default                       | Archivo 400, 17px / 1.55                          |
| Stage numerals       | `type-numeral`                | Archivo 650, 125% wide, tabular figures           |
| Reading text         | `type-reading` / `font-serif` | Source Serif 4, 19px / 1.7, 60–75 characters      |

Sentence case everywhere, including buttons. No all-caps labels and no small labels above headings.

## Layout

- `container-page`: 80rem maximum, 20–48px gutters.
- Section rhythm: 72px (phone) to 120px (wide) vertical padding. More space above a heading than below it.
- Bands alternate white, mist and navy. Navy is reserved for the hero and the closing call to action.
- Corners are near-square (2px). The leaf shape, two rounded opposite corners, is used only for the marker and the portrait frame.
- Inner pages open with a mist **page header**: breadcrumb trail (from the section down; the homepage is the logo), title and lead. Section landing pages have no trail.
- Reading and detail pages use a main column plus a 300–340px aside (cycle timeline, related links, Ask PASA). The aside follows the content on narrow screens.
- Reading text keeps to 64–68 characters per line, even when the column is wider.

## Components

- **Buttons** (`components/ui/button.tsx`): `default` (navy), `outline`, `leaf` (yellow, on navy only), `outline-inverse` (on navy), `ghost`, `link`. Minimum height 44px. Press feedback scales to 0.97.
- **Links**: underlined link blue by default. Opt out only for navigation, titles and buttons.
- **Procurement cycle** (`components/home/procurement-cycle.tsx`): tabs along a line on wide screens, an expanding timeline on narrow screens, one shared selection. Arrow keys move between stages.
- **Stage coverage** (`components/pasa/stage-coverage.tsx`): six segments plus a caption naming the stages.
- **Portrait** (`components/pasa/portrait.tsx`): leaf-cut frame with a labelled placeholder until the photograph arrives.
- **Navigation**: shadcn NavigationMenu on wide screens (dropdowns under their trigger), Sheet with an accordion below 1280px. The current section is underlined; the current page carries a small leaf.
- **Page header and sections** (`components/pasa/page-header.tsx`, `page-section.tsx`): the opening band and titled sections, stacked or split (heading in a narrow left column).
- **Rows** (`components/pasa/rows.tsx`): the ruled list used for services, topics, programs and sectors: title, description, detail.
- **Cycle timeline** (`components/pasa/cycle-timeline.tsx`): the six stages as a vertical line; the main stage gets the leaf, other relevant stages a filled station.
- **Entry list** (`components/pasa/entry-list.tsx`): guides and articles; entries still being written say "In preparation" before the click.
- **Notes** (`components/pasa/notes.tsx`): the framework note (required on methods and framework content) and the dashed draft note for text awaiting the client's review.
- **Prose** (`components/pasa/prose.tsx`): Markdown reading text in Source Serif with sans-serif headings.
- **Alphabet** (`components/pasa/alphabet-nav.tsx`): A to Z for the dictionary; letters without terms stay visible but inert.
- **Program card** (`components/pasa/program-card.tsx`): a program's key details with register and view actions.
- **Forms** (`components/forms`): native controls on shadcn styling, one column, each input sized to its content. Each field reads label, hint, error, control. Optional fields say "(optional)". An error summary takes focus and links to each field; success replaces the form.

## Motion

One authored moment per page: the leaf grows into place when a stage is selected (260ms, `ease-out-strong`). Menus open in 150–300ms with ease-out. Hover effects only on devices that hover. `prefers-reduced-motion` removes movement.

## Accessibility

WCAG 2.2 AA. Visible focus on every control (link blue, leaf on navy). Skip link. Real buttons, links and headings in order. Targets at least 44px for primary controls. Forms work without JavaScript. Verified with axe on every page at desktop and phone widths (0 violations) and Lighthouse (accessibility 100).
