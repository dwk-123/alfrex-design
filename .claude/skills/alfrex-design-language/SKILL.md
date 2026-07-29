---
name: alfrex-design-language
description: The Alfrex house style — tokens, non-negotiables, and page archetypes for any Alfrex internal UI. Load before designing, building, or reviewing screens or components for Sample-Manager, Quote-Manager, Spec, Sales tools, or this repo.
---

# Alfrex design language

Alfrex UIs are internal, all-day, utility-first tools. They should read like an
instrument panel: quiet surfaces, one decisive accent, monospaced numbers you
can trust.

Exact values live in code — read these instead of trusting any prose:

- `design-system/tokens.css` — colors, status palette, type, spacing, radius, elevation
- `design-system/components.css` — the `.als-*` classes and their modifiers
- `design-system/design-system.md` — full component and archetype reference

## Non-negotiables

1. **Two fonts.** IBM Plex Sans for UI/prose; IBM Plex Mono for *every* number
   (IDs, quantities, weights, dims, dates, money, percentages), `tabular-nums`,
   right-aligned in tables.
2. **One accent.** Brand red `--alfrex-brand` is identity, active nav, and
   alerts. Primary buttons are ink, never red; a red button marks the single
   money-committing action in a flow (e.g. *Book*).
3. **Borders, not shadows.** 1px hairlines define cards and rows. Shadow only
   for things that truly float (modal, toast).
4. **Status is a flat tint pill** with one fixed palette shared by every record
   type — planning / pending / booked / transit / delivered / alert. Never
   invent a new status color; map new states onto the existing six.
5. **No** second accent, gradients, emoji in UI, card drop-shadows, or
   pill-round buttons.

## Page archetypes

Every screen is one of three — stay inside them:

- **Overview** — greeting, metric-card band, prioritized attention queues,
  activity rail.
- **Index** — `h1` + one-line purpose, filter chips, grid table; whole row
  clicks into detail.
- **Detail** — breadcrumb, big mono record ID + status pill + actions; wide
  left work column, 340px right rail (delivery / docs / history).

## Voice

Subtitles state operational fact plainly. Empty states name the next action,
not an apology ("Create the first shipment"). Money `$1,000.00`, weight
`2,400 lbs`, dims `48"×96"×11"`, signed margins `+$508` / `−$160`.

When something the archetypes don't cover comes up, extend by composing
existing tokens and classes; only add a new token when no existing one can
carry the meaning, and add it to `tokens.css` first.
