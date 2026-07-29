---
name: component-authoring
description: How to add or change a component in the Alfrex design repo — file layout, the @dsCard preview convention, and the review loop. Use when creating, editing, or refactoring anything under components/ or design-system/.
---

# Authoring components

Order of operations for any component work:

1. **Tokens first.** If the design needs a new value, add it to
   `design-system/tokens.css` with a comment saying what it means. Components
   reference `var(--alfrex-…)` only — a hard-coded hex or px in a component is
   a bug.
2. **Class next.** Add or extend the `.als-*` class in
   `design-system/components.css`. Follow the existing convention: block
   `.als-card`, elements `.als-card__head`, modifiers `.als-btn--ghost`.
3. **Preview last.** Each component gets `components/<name>/index.html` — a
   self-contained page that links the two shared CSS files by relative path and
   shows the component's real variants with realistic Alfrex data (shipment
   IDs, panel dimensions, freight money — not lorem ipsum).

## Preview file contract

- First line must be the card marker, e.g.
  `<!-- @dsCard group="Components" -->`. DesignSync builds the Design System
  pane index from this marker; without it the component won't get a card.
  Groups in use: `Type`, `Colors`, `Components`, `Patterns`.
- Static HTML only — no build step, no CDN frameworks. It must render by
  opening the file directly.
- Show every variant and state (hover/active/disabled can be shown as forced
  classes side by side), each labeled with the exact class string a consumer
  should copy.

## Review

Check your work by opening the preview in the browser
(`chrome-devtools-axi open <file-url>` + `snapshot`). For human sign-off on a
new or visually changed component, put the preview in front of the user with
`lavish-axi` rather than describing it in prose.

Changing an existing class is a breaking change for every consuming app
(Sample-Manager, Quote-Manager, Spec, …). Renaming or removing a class, or
changing its geometry, deserves a note to the user listing which apps need a
follow-up; purely additive changes don't.
