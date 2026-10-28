# Design engineering skills

Curated, vendored Claude Code skills for building the PASA site. Each folder keeps its upstream license. Invoke any of them with `/<name> [target]`.

## What's here

| Skill | Use it for | Source (pinned) | License |
|---|---|---|---|
| `impeccable` | Design direction, critique, audit, polish, typeset, layout, harden, clarify. Read `reference/craft-floor.md` before any UI edit. | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) `7510e233b228` | Apache-2.0 (+ NOTICE) |
| `frontend-design` | Anti-template aesthetic direction: two-pass plan (tokens → review against brief → build), restraint, UI copy. | [anthropics/skills](https://github.com/anthropics/skills) `ca45fc496a34` | Apache-2.0 |
| `emil-design-eng` | Interaction craft and motion decisions: should it animate, easing, duration, origin, interruptibility. | [emilkowalski/skill](https://github.com/emilkowalski/skill) `a81dbca07f22` | MIT |
| `review-animations` | Strict motion review (Block/Approve). User-invoked only. | same | MIT |
| `break-ui` | Stress-test components with realistic worst-case data (long titles, RTL/Urdu, empty, 1 item, 1,000 items). | same | MIT |
| `web-interface-guidelines` | Vercel's interface rules as a `file:line` compliance review. | [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) `434b7f913646` | MIT |
| `fixing-accessibility` · `fixing-metadata` · `fixing-motion-performance` | Fast, minimal-diff fixers for a11y, SEO/OG metadata, and jank. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills) `59193a75432e` | MIT |
| `web-quality-audit` · `accessibility` · `seo` · `performance` · `core-web-vitals` · `best-practices` | Evidence-led Lighthouse/WCAG 2.2/CWV audits. Folder names must stay as-is; they cross-link via `../<name>/`. | [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills) `afa8da942115` | MIT |

## Where they disagree, and the rule we follow

1. **The brief wins.** PASA's PRODUCT.md and DESIGN.md (once written) override every skill below.
2. **Heading and button case.** Vercel says Title Case; Anthropic and Impeccable say sentence case. We use **sentence case**. It reads as plainer and more institutional for a public-sector audience.
3. **Scroll and entrance motion.** Emil's stagger/reveal patterns describe *how* to build motion. Anthropic and Impeccable decide *how much*: one authored moment per page, never a fade-up on every section.
4. **Reduced motion.** Follow Emil (gentler, not zero: keep opacity, drop movement), not Addy's blanket `0.01ms` reset.
5. **Native elements first.** Vercel's "keyboard handlers on interactive elements" means custom widgets only. Never add key handlers to a native `<button>` (Addy and ibelick agree).
6. **React-specific rules** (hydration, Framer Motion props, `next/image`) apply only if we add React islands.

## Not included, on purpose

- **Impeccable's engine** (`scripts/`, a binary downloaded from GitHub releases on first run), its edit hooks, and its subagents. Commands that call `scripts/impeccable` (`concept-seed`, `detect`, `live`, `generate`, `build-phase`, `hooks`, `doctor`) take the skill's documented "launcher unavailable" path and read PRODUCT.md and DESIGN.md directly. To enable the full engine, run `npx impeccable install` (it adds PostToolUse and Stop hooks).
- **`baseline-ui`** (ibelick) is Tailwind/React-bound, and its bans on custom easing, letter-spacing and gradients contradict the motion and type rules above.
- Mobile/Swift/Expo, toast-library, deploy, and canvas skills from the same repos are not relevant to this site.

## Suggested flow for PASA

1. **Before design:** `/impeccable init` → PRODUCT.md. Then run `frontend-design`'s two-pass plan for tokens and direction.
2. **While building:** `impeccable` craft-floor, `emil-design-eng`, and the `fixing-*` skills act as standing constraints.
3. **Review each surface:** `/impeccable critique`, `/web-interface-guidelines <files>`, `/review-animations`, and `/break-ui` on content-driven components (Knowledge Hub cards, training listings, dictionary entries).
4. **Before launch:** `/web-quality-audit`, then `seo` and `core-web-vitals` on the built site.
