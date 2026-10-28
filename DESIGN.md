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

Every text pairing passes WCAG AA (navy on white 12.7:1, soft on navy 8.4:1, leaf on navy 9.6:1, subtle on white 6.7:1). Leaf yellow and sky never carry text on white.

## Typography

| Role                 | Utility                       | Spec                                              |
| -------------------- | ----------------------------- | ------------------------------------------------- |
| Display (h1)         | `type-display`                | Archivo 760, 116% wide, 38–68px, tracking −0.02em |
| Section heading (h2) | `type-h2`                     | Archivo 740, 112% wide, 34–52px                   |
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

## Components

- **Buttons** (`components/ui/button.tsx`): `default` (navy), `outline`, `leaf` (yellow, on navy only), `outline-inverse` (on navy), `ghost`, `link`. Minimum height 44px. Press feedback scales to 0.97.
- **Links**: underlined link blue by default. Opt out only for navigation, titles and buttons.
- **Procurement cycle** (`components/home/procurement-cycle.tsx`): tabs along a line on wide screens, an expanding timeline on narrow screens, one shared selection. Arrow keys move between stages.
- **Stage coverage** (`components/pasa/stage-coverage.tsx`): six segments plus a caption naming the stages.
- **Portrait** (`components/pasa/portrait.tsx`): leaf-cut frame with a labelled placeholder until the photograph arrives.
- **Navigation**: shadcn NavigationMenu on wide screens (dropdowns under their trigger), Sheet with an accordion below 1280px.

## Motion

One authored moment per page: the leaf grows into place when a stage is selected (260ms, `ease-out-strong`). Menus open in 150–300ms with ease-out. Hover effects only on devices that hover. `prefers-reduced-motion` removes movement.

## Accessibility

WCAG 2.2 AA. Visible focus on every control (link blue, leaf on navy). Skip link. Real buttons, links and headings in order. Targets at least 44px for primary controls. Verified with axe (0 violations) and Lighthouse (accessibility 100).
