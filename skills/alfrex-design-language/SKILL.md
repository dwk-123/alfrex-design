---
name: alfrex-design-language
description: The Alfrex house style for designing, building, or reviewing internal operations UI across Sample Manager, Quote Manager, Spec, Sales, logistics, production, purchasing, and inventory tools. Use before making visual or UX decisions for any Alfrex screen or component.
---

# Alfrex design language

Alfrex UIs are internal, all-day, utility-first tools. They read like an
instrument panel: quiet surfaces, one decisive accent, monospaced numbers that
operators can trust.

This skill is framework-agnostic. When the target uses Next.js, Tailwind, or
shadcn, also load the `alfrex-shadcn` skill for implementation instructions.

## Non-negotiables

1. **Two fonts only.** IBM Plex Sans is UI and prose. IBM Plex Mono is every
   number: IDs, quantities, dimensions, weights, dates, times, money, and
   percentages. Use tabular numerals and right-align numeric table cells.
2. **One accent.** Red is identity, active navigation, alerts, and the single
   money-committing action in a flow. Normal primary buttons are neutral ink,
   never red.
3. **Dark mode preserves the rule.** Ink flips to light “paper ink” with dark
   text. It does not become red.
4. **Borders, not shadows.** One-pixel lines define cards, controls, and rows.
   Use shadow only when something physically floats: modal or toast.
5. **Six status families only.** Planning, pending, booked, transit, delivered,
   and alert retain the same meaning everywhere. Map new business states onto
   them; do not invent a seventh color.
6. **Flat, compact geometry.** Statuses are tint pills with a 6px radius.
   Buttons and controls use 9px, cards 12px, and modals 16px. Buttons are not
   capsule pills.
7. **Do not use** a second accent, gradients, emoji as UI icons, card
   drop-shadows, decorative glass effects, or color as the only carrier of
   state.

## Core tokens

### Brand, surfaces, lines, and text

| Role | Light | Dark |
|---|---:|---:|
| Brand | `#E11B22` | `#F04349` |
| Brand pressed | `#C9151C` | `#F7686D` |
| Brand wash | `#FCEAEB` | `#33171A` |
| Ink | `#1B1C20` | `#F2F3F5` |
| On ink | `#FFFFFF` | `#16171B` |
| App background | `#EEEFF2` | `#131418` |
| Card background | `#FFFFFF` | `#1C1E23` |
| Inset background | `#F8F9FB` | `#22242A` |
| Card border | `#E4E5E9` | `#2C2F36` |
| Control border | `#D8DAE0` | `#3A3D45` |
| Header hairline | `#EDEEF1` | `#262930` |
| Row hairline | `#F2F3F5` | `#22242A` |
| Text strong | `#1B1C20` | `#F2F3F5` |
| Text body | `#3A3D44` | `#C6C9CF` |
| Text muted | `#6B6E76` | `#9398A1` |
| Text faint | `#9398A1` | `#8E929B` |
| Text disabled | `#BFC2C9` | `#878B94` |
| Cross-record link bg | `#EAF1FC` | `#182440` |
| Cross-record link fg | `#2A5BB8` | `#7FA6EC` |

The dark faint and disabled values deliberately remain readable on the lightest
dark inset. Convey disabled state through behavior and typography as well as
color.

### Fixed status palette

Each entry is `tint background / foreground / solid dot-or-chart color`.

| Meaning | Light | Dark |
|---|---|---|
| Planning / draft | `#EDEFF2 / #5A5E66 / #9AA0A8` | `#262930 / #A9AEB8 / #7D838D` |
| Pending / awaiting | `#FBEFD6 / #9A6A12 / #E0A33E` | `#332A17 / #E5B45D / #D89C3D` |
| Booked / confirmed | `#E1EAFA / #2A5BB8 / #3A6FCC` | `#182440 / #7FA6EC / #5C88DC` |
| In transit | `#ECE7FB / #5B46C4 / #7A66D6` | `#241E3D / #A491F0 / #8B76E4` |
| Delivered / positive | `#DEF1E5 / #1F7A45 / #3FA463` | `#14291C / #5FC98A / #4BAE6F` |
| Alert / loss / over | `#FBE5E6 / #C01620 / #E1444C` | `#351719 / #F1747A / #E5555C` |

Always pair status color with a word or icon. Alert is excluded from normal
chart series; the five non-alert solid colors form the default chart sequence.

## Typography

Load IBM Plex Sans weights 400, 500, 600, 700 and IBM Plex Mono weights 400,
500, 600.

| Use | Specification |
|---|---|
| Index page title | Sans 23px / 600 / `-.01em` |
| Detail record ID | Mono 25px / 600 |
| Metric value | Mono 27px / 600 / tight line height |
| Card heading | Sans 14px / 600 |
| Body | Sans 13.5px / 400 / body text color |
| Column or field label | Sans 11px / 600 / uppercase / `.04em` / faint |
| Figures | Mono 13px / 600 / tabular; right-aligned in tables |
| Status pill | Sans 11.5px / 600 |

The surrounding sentence remains Sans, but wrap the numeric value itself in Mono.
Do this even for inline dates, percentages, and measurements. IDs are always Mono.

## Spacing, radius, and elevation

- 4px base spacing: 4, 8, 12, 14, 18, 24, and 32px.
- 32px page gutter, 18px card padding, 14px grid gap, 8px inline gap.
- Radius: 6px status, 9px interactive control, 12px card, 16px modal.
- Compact non-interactive tags use 5px. An 18px count badge may be circular for
  one digit or capsule-shaped for multiple digits; the capsule prohibition
  applies to buttons and controls, not counters.
- Toast shadow: `0 14px 34px rgba(15,18,25,.30)`.
- Modal shadow: `0 24px 60px rgba(15,18,25,.28)`.
- No shadow on cards, tables, inputs, nav rails, or fixed page chrome.

## Page archetypes

Every screen belongs to one of these three shapes.

### Overview

Greeting or operational heading, a metric-card band, prioritized attention
queues, then an activity rail. Metrics summarize; queues lead to work. Do not
turn every fact into an isolated card.

### Index

`h1`, one-line operational purpose, filter chips, then a dense table or grid.
The whole row opens detail. Use uppercase 11px column heads. Right-align all
numeric cells in Mono.

### Detail

Breadcrumb, large Mono record ID, status pill, and actions. Below that, use a
wide left work column and a 340px right rail for delivery, documents, or
history. One normal ink primary action per view; the committing red action
appears only at the point of financial commitment.

## Component behavior

- **Primary button:** ink fill and on-ink text. In dark mode this is a light
  neutral button with dark text.
- **Committing button:** red fill; only one when the action books, submits,
  purchases, or otherwise commits money.
- **Status:** flat tint with readable state text; never a solid saturated badge.
- **Card:** card surface, one-pixel border, 12px radius, no shadow.
- **Table:** inset header, hairline rows, whole-row navigation, Mono figures.
- **Nav:** active item gets brand wash, pressed-red text, and a 3px red edge.
- **Toast:** every mutation gets feedback; bottom-right, ink surface, floating
  shadow, roughly 3.2 seconds unless action or error requires persistence.
- **Empty state:** state the next action, not an apology.

## Voice and number formats

Write plainly and operationally. Subtitles state a fact rather than selling the
screen. Prefer “Create the first shipment” over “No shipments found.”

- Money: `$1,000.00`
- Weight: `2,400 lbs`
- Dimensions: `48"×96"×11"`
- Signed margin: `+$508` or `−$160`
- Percentage: `12.4%`
- Date: use the product's established unambiguous format; keep it Mono

When a requirement falls outside these patterns, compose existing roles first.
Only create a token when no existing role can carry the meaning.
