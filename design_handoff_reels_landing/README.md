# Handoff: Reels Editor Landing (Nataliia Bondarenko — Creative & Motion Designer)

## Overview
Single-page portfolio / landing page for a Reels video editor & designer. Primary goal: make the **price of every service** and a **case example of that service** immediately visible. Traffic arrives from an Instagram/TikTok profile link, so mobile is the primary target, tablet second, desktop third.

Sections in order: Hero → Коротко про мене (+4 stat cards) → Послуги та прайс (tabbed, interactive) → Відгуки (full-bleed image) → Умови співпраці (accordion) → Footer CTA.

Language: Ukrainian. All copy in the design is final and comes from the client brief (\`brief_source.md\`) — **do not rewrite or translate it**.

## About the Design Files
The files in this bundle are **design references written in HTML** — a prototype of the intended look and behavior, not production code to copy verbatim.

- \`Reels Editor Landing.dc.html\` — the design. It uses a small in-house template runtime (\`<x-dc>\`, \`{{ holes }}\`, \`<sc-for>\`, \`<sc-if>\`, a \`Component extends DCLogic\` class, \`support.js\`). Read it as: markup + inline styles = the visual spec; the logic class = the state model. Do **not** port the runtime.
- \`image-slot.js\` — an authoring-time drag-and-drop image placeholder used to preview photos. **No place in production.** Every \`<image-slot>\` becomes a real \`<img>\`/\`<picture>\` or a video embed.
- \`support.js\` — the prototype runtime, included only so the HTML opens in a browser. Ignore it when implementing.
- \`brief_source.md\` — the client brief: source of truth for copy, prices and structure.

The task is to **recreate this design in a real codebase**. Recommended if starting from scratch: **Next.js (App Router) + Tailwind CSS**, static export, deployed on Vercel / Netlify / Cloudflare Pages. No backend required unless a CMS is added.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii and interaction behavior below are final — match them. Exact px values are given; where the design uses \`clamp()\`, keep the fluid behavior rather than picking one value.

## Design Tokens

### Colors
| Token | Value | Use |
| --- | --- | --- |
| bg base | \`#F4F3EF\` | page background |
| bg raised | \`#ECE9E6\` | services panel top, package plate |
| surface white | \`#FFFFFF\` | stat cards |
| ink | \`#2B2B2B\` | headlines, primary text, active tab bg |
| ink deep | \`#232323\` | footer CTA panel bg |
| body muted | \`#4A4844\` | list / price text |
| body muted 2 | \`#55534F\` | secondary paragraph |
| label | \`#6B6862\` | captions |
| label light | \`#8C8880\` | notes |
| label lightest | \`#A09B92\` | eyebrow labels, item numbers |
| bronze | \`#C5A079\` | asterisks, checkmarks, accents, hover fill |
| bronze deep | \`#B88B5D\` | accent words in headlines, links |

Glass fills used verbatim: \`rgba(244,243,239,0.16)\` + \`backdrop-filter: blur(20px)\` (nav); \`linear-gradient(150deg, rgba(160,175,190,0.28), rgba(255,255,255,0.55) 55%, rgba(197,160,121,0.18))\` + \`blur(14px)\` (showcase panel). Hero scrim: \`linear-gradient(180deg, rgba(30,30,30,.55) 0%, rgba(30,30,30,.15) 34%, rgba(30,30,30,.72) 100%)\`. Testimonials scrim: \`linear-gradient(180deg, rgba(30,30,30,.4) 0%, rgba(30,30,30,.05) 40%, rgba(30,30,30,.7) 100%)\`.

### Typography — Inter Tight, weights 300/400/500/600/700
Two-size body system, deliberate: **22px = primary text**, **18px = secondary**. Do not introduce intermediate sizes.

| Role | Size | Weight | Tracking / leading |
| --- | --- | --- | --- |
| H1 hero | \`clamp(40px, 11.5vw, 132px)\` | 500 | \`-0.035em\` / 0.9 |
| H2 коротко про мене | \`clamp(38px, 9vw, 108px)\` | 400 | \`-0.04em\` / 0.92 |
| H2 послуги та прайс | 80px | 400 | \`-0.04em\` / 0.95 |
| H2 відгуки | \`clamp(36px, 8vw, 96px)\` | 400 | \`-0.04em\` / 0.94 |
| H2 умови співпраці | \`clamp(32px, 5.4vw, 66px)\` | 400 | \`-0.04em\` / 0.96 |
| H2 footer CTA | \`clamp(34px, 7vw, 92px)\` | 400 | \`-0.04em\` / 0.95 |
| Stat number | \`clamp(32px, 3.6vw, 48px)\` | 500 | \`-0.04em\` / 1 |
| Nav link / CTA text | 22px | 400 | \`0.06em\` links, \`0.02em\` button |
| Tab label, service title, accordion title | \`clamp(22px, 1.6–1.7vw, 24px)\` | 500 | \`-0.01/-0.02em\` |
| Body primary (lead, prices, packages, accordion body) | 22px | 400 (600 for price values and lead-ins) | 1.45–1.5 |
| Secondary (stat labels, eyebrows, includes list, notes, footer, page counter) | 18px | 400 | 1.45 |

### Radii & elevation
Pill \`999px\`; hero / testimonials / footer panel \`34px\`; services panel \`40px\`; showcase panel \`30px\`; service card and stat card \`26px\`; accordion card and tab button \`24px\`; gallery frame \`22px\`; package plate \`20px\`.
Shadows: stat card \`0 18px 40px -30px rgba(43,43,43,.5)\`; showcase panel \`0 30px 60px -44px rgba(43,43,43,.6)\`.

### Spacing
Section padding \`clamp(48–56px, 7–9vw, 110–130px)\` vertical, \`clamp(14–18px, 4–5vw, 60–80px)\` horizontal. Card gaps 10–16px. Outer gutter for full-bleed panels: 14px.

### Decorative marks
- Gold asterisk \`✳\` (bronze) opens sections — hero 26px, about 22px, testimonials 24px, footer 24px.
- \`///\` triple-slash marks in bronze / translucent white as corner accents.
- Arrows are **inline SVG, not glyphs**: \`viewBox="0 0 24 24"\`, \`stroke="currentColor"\`, \`stroke-width="3.2"\`, round caps and joins. Up-right: \`M7 17 17 7\` + \`M9 7h8v8\`. Left: \`M19 12H5\` + \`M11 6l-6 6 6 6\`. Right mirrored.
- Inline "business system" icon in the about lead: 26px, three r=2.4 circles joined by strokes, \`stroke="#B88B5D"\`, \`stroke-width="1.4"\`.
- Bronze \`✓\` before each "Що входить" row.

## Screens / Views

### 1. Hero
Full-viewport section (\`min-height: 92vh\`), 14px gutter, inner rounded 34px card with \`overflow: hidden\`; background image absolutely positioned + scrim overlay (\`pointer-events: none\`); content column pinned to the bottom.
- **Nav** (top, z 3): glass pill, \`margin: 16px\`, \`padding: 8px 10px 8px 20px\`, \`gap: 10px 22px\`, \`border: 1px solid rgba(255,255,255,.3)\`, wraps on narrow screens. Left: wordmark "NB" (22px/500, uppercase). Links: \`Про мене\`, \`Послуги та прайс\`, \`Відгуки\`, \`Умови співпраці\` — 22px, \`rgba(255,255,255,.82)\` → \`#about\`, \`#services\`, \`#reviews\`, \`#terms\`. CTA pill \`Звʼязатись зі мною\` → \`#contact\`, bg \`#F4F3EF\`, text \`#2B2B2B\`; hover bg \`#C5A079\`, text \`#F4F3EF\`.
- **Headline**: bronze \`✳\`; H1 three lines — \`Creative &\` (the \`&\` bronze), \`Motion\` indented \`clamp(0, 6vw, 90px)\`, \`Designer\`; color \`#F4F3EF\`.
- **Bottom row**: left \`Nataliia Bondarenko\` (\`clamp(22px,2.2vw,26px)\`, weight 300, \`rgba(255,255,255,.95)\`); right CTA \`Переглянути послуги\` — pill \`rgba(244,243,239,.9)\`, 22px, with a 40px bronze circle holding the up-right arrow; hover bg \`#F4F3EF\`.
- The overlay content layer is \`pointer-events: none\` with \`auto\` re-enabled on the nav and CTA, so the scrim never blocks the image beneath.
- Media: one portrait image, \`object-fit: cover\`, full-bleed.

### 2. Коротко про мене (\`#about\`)
- H2 two lines \`коротко\` / \`про мене\` (second line bronze, indented \`clamp(0,8vw,120px)\`), then a bronze \`✳\` baseline-aligned.
- Grid \`repeat(auto-fit, minmax(290px, 1fr))\`, gap \`clamp(24px,3vw,54px)\`:
  - Left: lead paragraph 22px/1.45 with the inline system icon mid-sentence and \`монтаж відео\` in bronze — "Допомагаю експертам та бізнесам вибудувати … цілісну візуальну систему: рекламні креативи, упаковка, презентації та монтаж відео."
  - Right: 22px/1.6, \`#55534F\`, \`max-width: 46ch\`, first clause bold — "**Закриваю весь спектр задач для соцмереж в єдиній естетиці** — вам більше не доведеться збирати команду з різних фрілансерів та контролювати розбіжності в стилі."
- **Stat cards**: grid \`repeat(auto-fit, minmax(190px, 1fr))\`, gap 14px, white, radius 26px, padding \`26px 24px 22px\`, number + 18px label: \`2800+\` готових проєктів · \`4+\` роки роботи на фрілансі та в агенції · \`8+\` пройдених програм підвищення кваліфікації · \`9+\` місяців наставництва та менторства.

### 3. Послуги та прайс (\`#services\`) — the core of the page
Outer panel: radius 40px, \`linear-gradient(180deg, #ECE9E6 0%, #F4F3EF 60%)\`, padding \`clamp(24px,4vw,56px)\`, 1px light border. Header: H2 \`послуги\` / \`та прайс\` (bronze second line) + right 18px label \`Оберіть напрям\`.

**Tabs**: \`display: flex; gap: 10px\`, each \`flex: 1 1 200px\`, padding \`18px 22px\`, radius 24px, \`transition: all 220ms ease\`.
- \`Дизайн\` — filled cursor-arrow icon (prototype uses \`➤\` rotated \`-135deg\`; ship a filled cursor SVG).
- \`Монтаж відео\` — \`▶\`.
- Active: bg \`#2B2B2B\`, text \`#F4F3EF\`, border \`#2B2B2B\`. Inactive: bg \`rgba(255,255,255,.6)\`, text \`#2B2B2B\`, border \`rgba(43,43,43,.12)\`. Switching resets service to the first and the gallery to page 1.

**Body**: grid \`repeat(auto-fit, minmax(320px, 1fr))\`, gap 16px, \`align-items: stretch\` (≈40/60 per brief; collapses to one column under ~700px).

**Left — service list** (button-cards, gap 10px, radius 26px): 18px two-digit index (\`01\`…) · title (\`clamp(22px,1.7vw,24px)\`/500) · 34px circular up-right-arrow button. Open: bg \`rgba(255,255,255,.92)\`, border \`rgba(197,160,121,.5)\`, circle filled \`#2B2B2B\`/\`#F4F3EF\`. Closed: bg \`rgba(255,255,255,.45)\`, border \`rgba(43,43,43,.08)\`, transparent circle. \`transition: background 220ms ease\`. Exactly one open; it drives the right panel.

Expanded body order: eyebrow \`Що входить\` (18px \`#A09B92\`) → checklist rows (18px/1.45 \`#4A4844\`, bronze \`✓\`, \`padding: 6px 0\`) → eyebrow \`Вартість\` → price rows (label 22px \`#4A4844\` · spacer · value 22px/600, \`border-bottom: 1px solid rgba(43,43,43,.07)\`) → optional package plate (bg \`#ECE9E6\`, radius 20px, padding 18px, title 22px/600, rows label · dotted leader · value, both 22px) → optional note (18px \`#8C8880\`).

**Content (verbatim from the brief)**

*Дизайн tab*
1. **Дизайн** — Що входить: Аналіз ніші; Розробка графічної концепції; Підбір зображень / генерація елементів; Для креативів один ресайз 4:5 або 1:1 на вибір (або інші). Вартість: 1 креатив 450 грн · Пост 400 грн · Карусель 200 грн / слайд · Історія 200 грн · Highlights (обкладинка) 100 грн · Додатковий ресайз 50 грн. Пакети статичних креативів: 5 шт 2 000 грн · 10 шт 3 900 грн · 20 шт 7 600 грн. Note: "Термін виконання: 1–2 дні (залежить від обʼєму)."
2. **Упаковка Instagram** — Що входить: Аналіз конкурентів для створення унікального візуалу; Підбір фірмових шрифтів та палітри кольорів; Розробка єдиної візуальної концепції стрічки; Обкладинки Highlights (до 5 шт). Вартість: 6 постів 2 900 грн · 9 постів 4 100 грн. Note: "Примітка: наступні слайди каруселі — 200 грн / слайд."
3. **Презентації** — Що входить: Аналіз ніші; Розробка графічної концепції; Підбір зображень / генерація елементів. Вартість: 1–19 сторінок 250 грн / слайд · 20–40 сторінок 200 грн / слайд · 41+ сторінок 150 грн / слайд. Note: "Примітка: для великих інфопродуктів вартість обговорюється індивідуально."

*Монтаж відео tab*
1. **Базовий монтаж** — Що входить: Нарізка та склейка вихідних матеріалів; Видалення пауз, базова кольорокорекція; Підбір фонової музики. Вартість: до 1 хв — **"за запитом"** (the brief leaves this price blank — confirm with the client).
2. **Динамічний монтаж / Відеокреатив** — Що входить: Нарізка та склейка вихідних матеріалів; Видалення пауз, базова кольорокорекція; Додавання субтитрів та стилізація (вручну); Додавання анімації, вставок та плашок; Підбір та генерація контенту (за потреби); Переходи; Покращення звуку (або генерація озвучки) та підбір фонової музики; Саунд-дизайн. Вартість: до 30 секунд 25$ · до 1 хв 35$.
3. **Моушн (Motion Graphics)** — Що входить: Складний монтаж в After Effects; Підбір та генерація контенту (за потреби); Анімована інфографіка; Переходи; Покращення звуку (або генерація озвучки) та підбір фонової музики; Саунд-дизайн. Вартість: до 30 секунд 50$ · до 1 хв 70$.

**Right — showcase panel**: glass card, radius 30px, padding \`clamp(16px,2vw,24px)\`.
- Header: eyebrow \`Приклад\` (18px \`#6B6862\`) left; right the active service title (18px) and, **for Дизайн only**, a format switcher pill group (\`9:16\` / \`4:5\`, 18px, active \`#2B2B2B\`/\`#F4F3EF\`, inactive \`rgba(255,255,255,.65)\`/\`#6B6862\`).
- Gallery frame: radius 22px, \`overflow: hidden\`, bg \`rgba(43,43,43,.06)\`. Only the **current page** is rendered; items are flex children with a fixed \`aspect-ratio\`, \`gap: 12px\`.
- **10 case slots per service**, laid out by format:
  - **9:16** → 2 per page in one row (\`width: calc(50% - 6px)\`) → 5 pages
  - **4:5** → 4 per page as a 2×2 grid (\`flex-wrap: wrap\`, same 50% width) → 3 pages
  - **16:10** (Упаковка Instagram, Презентації) → 1 per page, full width → 10 pages
- Footer row (only when pages > 1): page counter \`1 / 5\` (18px \`#6B6862\`, \`letter-spacing .08em\`) left; two 42px circular arrow buttons right, \`border: 1px solid rgba(43,43,43,.16)\`, bg \`rgba(255,255,255,.7)\`, hover bg \`#2B2B2B\` icon \`#F4F3EF\`. Paging wraps around.
- Panel height: \`align-self: stretch\` (matches the left column; leftover space absorbed by a bottom spacer) **except** Дизайн in 9:16, where it is \`align-self: start\` so no empty space remains under the cases.
- Clicking a case opens a **lightbox**: fixed overlay \`rgba(24,24,24,.86)\` + \`blur(10px)\`, media \`min(1200px, 94vw)\` wide, capped \`90vh\`, radius 20px, \`contain\` (not cropped), cursor \`zoom-out\`, click anywhere to close. Add \`Esc\`, focus trap, \`aria-modal\`.

### 4. Відгуки (\`#reviews\`)
Full-bleed rounded panel (14px gutter, radius 34px, \`min-height: 88vh\`), one image \`cover\` + scrim; content pinned bottom-left: bronze \`✳\` and H2 \`відгуки\` in \`#F4F3EF\`. No text — the screenshot wall of testimonials **is** the image. Overlay \`pointer-events: none\`.

### 5. Умови співпраці (\`#terms\`)
Grid \`repeat(auto-fit, minmax(300px, 1fr))\`, gap \`clamp(28px,4vw,60px)\`.
- Left: eyebrow \`формат роботи\` (18px \`#A09B92\`), H2 \`умови\` / \`співпраці\` (bronze second line), bronze \`///\`.
- Right: accordion, gap 10px, radius 24px. Row: 18px index · title (\`clamp(22px,1.6vw,24px)\`/500) · \`+\` / \`−\` in bronze 20px. Open bg \`rgba(255,255,255,.92)\`, closed \`rgba(236,233,230,.7)\`. Single-open, clicking the open one closes it. Body rows: bronze \`✳\` + 22px/1.5 \`#4A4844\` with a bold \`#2B2B2B\` lead-in.
Items (full Ukrainian text in \`brief_source.md\`): **Оплата та старт проєкту** (Предоплата 50% / Пакети послуг 100%, 1 місяць / передплата як бронювання / ФОП 3 група, IBAN) · **Терміни виконання** (1–3 робочих дні; після 12:00 — з наступного дня / термінові ×2) · **Правки та ТЗ** (до 2 кіл безкоштовно, далі 50–200 грн / ТЗ лише текстом з таймкодами) · **Збереження матеріалів та авторські права** (30 днів зберігання / право на портфоліо, NDA окремо).

### 6. Footer CTA (\`#contact\`)
Dark panel \`#232323\`, radius 34px, padding \`clamp(36px,7vw,96px) clamp(22px,5vw,72px)\`, two radial glows: \`radial-gradient(120% 90% at 88% 10%, rgba(197,160,121,.32), transparent 60%)\` and \`radial-gradient(90% 80% at 0% 100%, rgba(150,168,184,.22), transparent 62%)\`.
Content: bronze \`✳\`; H2 \`Обговоримо\` / \`ваш проект?\` (second line indented \`clamp(0,5vw,70px)\`) in \`#F4F3EF\`; paragraph 22px/1.55 \`rgba(244,243,239,.72)\`, \`max-width: 68ch\`: "Напишіть мені в Telegram або Instagram — розберемо ваші задачі, підберемо оптимальний формат та розрахуємо точну вартість."
Buttons (gap 12px, wrap): \`Написати в Telegram\` — solid \`#F4F3EF\` / \`#2B2B2B\`, hover bg \`#C5A079\` text \`#F4F3EF\`; \`Написати в Instagram\` — \`rgba(244,243,239,.1)\` + \`1px solid rgba(244,243,239,.28)\`, text \`#F4F3EF\`, hover bg \`rgba(244,243,239,.2)\`. Each ends in a 42px circle with the up-right arrow. **Both hrefs are placeholders (\`#\`) — wire the real URLs.**
Bottom bar: top border \`1px solid rgba(244,243,239,.14)\`, left "Nataliia Bondarenko — Creative & Motion Designer", right "/// 2026", both 18px \`rgba(244,243,239,.5)\`.

## Interactions & Behavior
- Nav: in-page anchors (\`#about\`, \`#services\`, \`#reviews\`, \`#terms\`, \`#contact\`). Use CSS \`scroll-behavior: smooth\` + \`scroll-margin-top\`; do **not** call \`scrollIntoView\` on load.
- Services tabs: switch the service list, reset service index to 0 and gallery to page 1.
- Service cards: single-expand accordion; the open service drives the showcase panel.
- Дизайн format switcher: swaps aspect ratio, per-page count, layout (row vs 2×2) and the media set — the two formats hold **separate** case sets (slot ids suffixed \`-916\` / \`-45\`), so they never mix.
- Gallery: prev/next with wrap-around, counter \`current / total\`, page-only rendering (never mount all 10). Add touch swipe and arrow keys.
- Lightbox: open on case click, close on backdrop click; add \`Esc\` and focus management.
- Terms accordion: single-open, toggleable closed.
- Transitions in use: \`all 220ms ease\` (tabs), \`background 220ms ease\` (service cards), \`all 200ms ease\` (format pills), \`transform 480ms cubic-bezier(.65,.05,.36,1)\` (gallery). Respect \`prefers-reduced-motion\`.
- Hover states are documented per component; add visible \`:focus-visible\` rings — the prototype has none.

## Responsive behavior
- Mobile first (Instagram/TikTok link traffic). All grids are \`auto-fit / minmax\`, so they collapse to one column: services under ~700px, about under ~620px, stats to 1–2 columns.
- In one-column services, the showcase panel sits **below** the expanded service card, full width; drop height-matching (\`align-self: start\`).
- Nav pill wraps to two rows (\`flex-wrap: wrap\`, \`gap: 10px 22px\`); consider a compact bar + anchor menu on mobile. Tap targets ≥44px.
- Hero \`min-height: 92vh\` — use \`dvh\` units on mobile to avoid the browser-chrome jump.
- Body type stays 22/18 at all sizes; only headlines scale via \`clamp\`.

## State Management
Local UI state only, no server state:
- \`tab\`: \`"design" | "video"\` (default \`design\`)
- \`svc\`: index of the open service in the current tab (default 0)
- \`page\`: current gallery page (in the prototype an item index \`ex\` divided by \`perPage\`), reset on tab / service / format change
- \`fmt\`: \`"9 / 16" | "4 / 5"\` — Дизайн case format (default \`9 / 16\`)
- \`term\`: index of the open accordion item, \`-1\` = all closed (default 0)
- \`lightbox\`: \`null\` or \`{ src, ratio, alt }\`
Derived: \`perPage\` (16:10 → 1, 4:5 → 4, else 2), \`pages = ceil(total / perPage)\`, slide width, wrap mode, panel alignment.
Prototype-only props to drop or keep as config: \`defaultTab\`, \`expandAllTerms\`.

## Assets & Media — the real work
The prototype ships **no media**. Every \`<image-slot>\` is a placeholder:

| Slot id | Where | Format | Count |
| --- | --- | --- | --- |
| \`hero-bg\` | Hero background | portrait, full-bleed | 1 |
| \`reviews-bg\` | Відгуки | full-bleed (screenshot wall) | 1 |
| \`ex-design-916-0…9\` | Дизайн cases, 9:16 | 9:16 | up to 10 |
| \`ex-design-45-0…9\` | Дизайн cases, 4:5 | 4:5 | up to 10 |
| \`ex-insta-0…9\` | Упаковка Instagram | 16:10 | up to 10 |
| \`ex-decks-0…9\` | Презентації | 16:10 | up to 10 |
| \`ex-basic-0…9\` | Базовий монтаж | 9:16 video | up to 10 |
| \`ex-dynamic-0…9\` | Динамічний монтаж | 9:16 video | up to 10 |
| \`ex-motion-0…9\` | Моушн | 9:16 video | up to 10 |

- **Images**: WebP/AVIF, 2–3 widths, \`<picture>\` / \`next/image\` with \`srcset\` + \`sizes\`; \`loading="lazy"\` everywhere except the hero (\`priority\` / \`fetchpriority="high"\`). Always declare the aspect ratio to avoid layout shift. \`cover\` in the grid, \`contain\` in the lightbox.
- **Videos**: never ship raw mp4 for ~30 slots. Use Cloudflare Stream / Mux / Bunny (HLS + poster), or embed existing Reels/TikToks via iframe. In the grid show the **poster only**; mount the player on click, one at a time. \`preload="none"\`, \`playsinline\`.
- **Fonts**: self-host Inter Tight (woff2, 300–700) with \`font-display: swap\` instead of the Google Fonts link used in the prototype.
- Every case needs real \`alt\` text. The prototype's captions ("Кейс 1 — статичний креатив 9:16") are slot labels, not alt text.

## Content management (recommended)
Cases change often — keep services, prices and case lists in **data**, not JSX: a typed \`services.ts\` to start, or a light CMS (Sanity / Contentful / Google Sheets) if the client wants to swap cases herself. Shape mirrors the prototype: \`{ key, title, includes[], prices[{label,value}], packages?, packagesTitle?, note?, media[{src, poster?, ratio, alt}] }\`.

## Open items for the client
1. Hero portrait, testimonials image, and case media per service.
2. Whether case videos are hosted (Stream / Mux) or embedded from Instagram / TikTok.
3. Mixed currency (грн for design, $ for video) is as briefed — confirm it stays.

## Files in this bundle
- \`Reels Editor Landing.dc.html\` — design reference; open in a browser to see it live.
- \`image-slot.js\`, \`support.js\` — prototype-only runtime pieces, **not for production**.
- \`brief_source.md\` — client brief with original copy and prices.
