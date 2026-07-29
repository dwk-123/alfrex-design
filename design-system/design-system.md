# Alfrex Operations — Design System

The house style for the Alfrex platform (logistics today; production, purchasing &
inventory next). Internal, all-day, utility-first tooling. **Read like an instrument
panel: quiet surfaces, one decisive accent, monospaced numbers you can trust.**

> Source of truth lives in code, not this doc:
> - `design-system/tokens.css` — color, type, spacing, radius, elevation variables
> - `design-system/components.css` — the canonical component classes (`.als-*`)
>
> Build UI by composing those classes / variables. This file explains the *rules*
> and *when to use what*. If a value isn't in `tokens.css`, it shouldn't be in the UI.

---

## Non-negotiables

1. **Two fonts only.** IBM Plex Sans for all UI/prose; IBM Plex Mono for **every**
   number — IDs, quantities, weights, dimensions, dates, money, percentages.
2. **One accent.** Brand red `#E11B22` is for identity, the active nav item, and
   attention/alerts. **Primary buttons are ink `#1B1C20`, never red.** Red buttons are
   reserved for the single money-committing action (e.g. *Book*).
3. **Borders, not shadows.** Cards and rows are defined by 1px hairlines. Shadow is
   only for things that truly float (modals, toasts).
4. **Status is a flat tint pill.** Fixed mapping, shared across every record type.
5. **No** second accent color, gradients, emoji, card drop-shadows, or pill-round buttons.

---

## Color

| Role | Token | Hex |
|---|---|---|
| Brand / accent | `--alfrex-brand` | `#E11B22` |
| Active nav text | `--alfrex-brand-pressed` | `#C9151C` |
| Active nav bg | `--alfrex-brand-wash` | `#FCEAEB` |
| Primary action + headings | `--alfrex-ink` | `#1B1C20` |
| Page bg | `--alfrex-bg-app` | `#EEEFF2` |
| Inset / table head | `--alfrex-bg-inset` | `#F8F9FB` |
| Card | `--alfrex-bg-card` | `#FFFFFF` |
| Card border | `--alfrex-border-card` | `#E4E5E9` |
| Control border | `--alfrex-border-control` | `#D8DAE0` |
| Header hairline | `--alfrex-hairline` | `#EDEEF1` |
| Row hairline | `--alfrex-hairline-row` | `#F2F3F5` |
| Text: strong / body / muted / faint | | `#1B1C20` / `#3A3D44` / `#6B6E76` / `#9398A1` |

### Status palette (tint background / text — same meaning everywhere)
| State | bg | text |
|---|---|---|
| Planning / draft | `#EDEFF2` | `#5A5E66` |
| Freight requested / awaiting | `#FBEFD6` | `#9A6A12` |
| Booked / confirmed | `#E1EAFA` | `#2A5BB8` |
| In transit | `#ECE7FB` | `#5B46C4` |
| Delivered / positive | `#DEF1E5` | `#1F7A45` |
| Alert / loss / over | `#FBE5E6` | `#C01620` |

Money/quantity bars and metric dots use the matching `--*-solid` token.

---

## Typography

| Use | Font / size / weight |
|---|---|
| Index page title (`h1`) | Sans 23 / 600 / -.01em |
| Detail record ID | **Mono** 25 / 600 |
| Card heading (`h3`) | Sans 14 / 600 |
| Body | Sans 13.5 / 400, color `#3A3D44` |
| Column / field label | Sans 11 / 600, UPPERCASE, +.04em tracking, `#9398A1` |
| Figures (any number) | **Mono** 13 / 600, right-aligned in tables |

Numbers right-align in table cells (`.als-num`). Use `tabular-nums`.

---

## Spacing, radius, elevation

- **Spacing**: 4px base → 8 inline · 14 grid gap · 18 card padding · 32 page gutter.
- **Radius**: 6 pill · 9 button/input · 12 card · 16 modal.
- **Elevation**: toast `0 14px 34px rgba(15,18,25,.30)`; modal `0 24px 60px rgba(15,18,25,.28)`;
  scrim `rgba(20,21,24,.42)`.

---

## Components (use `.als-*` from `components.css`)

- **Button** — `.als-btn` + `--primary` (ink) / `--ghost` / `--danger` (red, money only) /
  `--xlink` / `--mini` / `--link`. One primary per view.
- **Status pill** — `.als-pill` + state modifier. `.als-tag` for CONSOL/NEW; `.als-badge` for nav counts.
- **Card** — `.als-card` › `.als-card__head` (`.als-card__title` + optional `.als-card__note`) › `.als-card__body`.
- **Metric** — `.als-metric` › `__label` (set dot color via a `--*-solid`) › `__value` (mono) › `__sub`.
- **Input** — `.als-label` + `.als-input` (`--num` for numeric, mono + right). **Chips**: `.als-chip` / `--active`.
- **Table** — set `--cols` on `.als-thead` and each `.als-row`; numbers in `.als-num`; whole row clickable.
- **Nav rail** — 256px, grouped; `.als-nav-item` / `--active` (red wash + 3px red edge) / `--disabled` (roadmap).
- **Tabs** — `.als-tabs` › `.als-tab` / `--active` (red underline). For 2–4 lenses on one dataset.
- **Modal** — `.als-scrim` › `.als-modal` (`__head` / `__body` / `__foot`); footer = ghost Cancel + ink primary.
- **Toast** — `.als-toast`, fired on **every** mutation, bottom-right, ink bg, green check, ~3.2s auto-dismiss.

---

## Page archetypes

Every screen is one of three. Stay inside them.

- **A · Overview** — greeting + metric-card band + prioritized attention queues + activity rail. (e.g. *Today*)
- **B · Index** — `h1` + one-line purpose + filter chips + grid table, rows click into detail.
  (e.g. *Orders, Shipments, Quotes, Freight, Documents*)
- **C · Detail** — breadcrumb + big **mono** ID + status pill + actions, then a wide left
  work column and a **340px** right rail (delivery / docs / history). (every record)

---

## Voice & numbers

- Subtitles state operational fact plainly: *"We bill the customer per order on pickup
  day; the broker bills per truck, later."*
- Money `$1,000.00` · weight `2,400 lbs` · dims `48"×96"×11"` · signed margin `+$508` / `−$160`.
- Empty states name the next action, not an apology ("Create the first shipment").
