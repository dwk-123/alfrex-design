# AGENTS.md

Central home of the **Alfrex design system** — the house style for Alfrex USA's
internal apps (Sample-Manager, Quote-Manager, Spec, Sales tools). This repo is the
source of truth; apps consume it, they don't fork it. It syncs to a claude.ai/design
project via the `DesignSync` tool.

## Source of truth

- `design-system/tokens.css` — every color, type, spacing, radius, elevation value.
  If a value isn't here, it doesn't belong in any Alfrex UI.
- `design-system/components.css` — canonical `.als-*` component classes.
- `design-system/design-system.md` — the rules and when-to-use guidance.
- `components/` — one directory per component: a self-contained HTML preview
  (first line `<!-- @dsCard group="…" -->`) that renders the component from the
  shared CSS. These are what DesignSync uploads as Design System pane cards.

Prose never overrides code: if this file or a skill disagrees with `tokens.css`,
the CSS wins — fix the prose.

## Things agents get wrong here

- **Primary buttons are ink `#1B1C20`, never brand red.** Red (`#E11B22`) is
  identity, active nav, alerts, and the single money-committing action only.
- **Every number is IBM Plex Mono** — IDs, money, weights, dates, percentages.
  Two fonts total (Plex Sans + Plex Mono); don't introduce a third.
- Borders define surfaces, not shadows. Shadow only on things that float
  (modal, toast).
- There is no build system and none should be added. Plain CSS + static HTML
  previews, viewable by opening the file.
- The seed files were imported from `~/Projects/Sample-Manager/design-system/`
  on 2026-07-29. Sample-Manager's separate `DESIGN.md` disagrees with them
  (red `#EC1B2F` vs `#E11B22`, system fonts vs IBM Plex) — this repo's
  `tokens.css` is canonical; treat that DESIGN.md as stale.

## Skills

- `alfrex-design-language` — the house style: load before designing or reviewing
  any Alfrex UI.
- `component-authoring` — how to add or change a component in this repo.
- `design-sync` — how to push components to the claude.ai design project.
