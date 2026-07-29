---
name: alfrex-shadcn
description: Install, migrate, implement, or review the Alfrex design system in Next.js, Tailwind v4, and shadcn v4 projects using the base-nova Base UI stack. Use for Alfrex themes, components, dark mode, shadcn setup, or replacing legacy .als-* classes.
---

# Alfrex shadcn

This skill carries the source files and instructions for the shared Alfrex
shadcn expression. It targets Next.js App Router, Tailwind v4, shadcn v4 style
`base-nova`, Base UI (not Radix), neutral base, CSS variables, and Lucide.

Load `alfrex-design-language` alongside this skill for visual rules, archetypes,
voice, and number formatting.

## Decide the path first

1. **Fresh Next app or no shadcn config:** read and execute
   `references/setup.md` from the beginning.
2. **Existing base-nova shadcn app:** verify `components.json`, then use the
   adopt-theme/component-copy/font/dark-mode sections of `references/setup.md`.
   Diff locally customized components before overwriting `button.tsx`.
3. **Any app containing `.als-*`:** read `references/als-migration.md` before
   touching imports or enabling dark mode, then use
   `references/component-map.md` screen by screen.
4. **Visual review only:** use the component and token rules here plus the
   design-language skill; do not install files unless requested.

## Bundled artifacts

- `assets/alfrex-theme.css` — full light/dark Alfrex primitives, one shadcn
  semantic bridge, Tailwind `@theme inline` aliases, IBM Plex anti-cycle font
  chain, status chart colors, sidebar colors, and radius scale.
- `assets/components/button.tsx` — Base UI Button replacement with ink default,
  bordered outline, red committing action, cross-record link, and mini size.
- `assets/components/status-pill.tsx` — six fixed statuses plus `Tag` and
  `CountBadge`; stock `badge.tsx` remains untouched.
- `assets/components/metric.tsx`, `filter-chip.tsx`, `nav-item.tsx`,
  `field.tsx`, `empty-state.tsx`, `inline-alert.tsx` — Alfrex compositions that
  are not stock shadcn primitives.
- `references/setup.md` — literal consumer installation and font instructions.
- `references/component-map.md` — complete legacy class translation.
- `references/als-migration.md` — hybrid import order, rollout sequence, and
  dark-mode safety constraint.

Resolve those paths relative to this skill directory. They remain available
when skills.sh copies the skill into another repository.

## Operating rules

- Treat bundled assets as upstream source. Consumer changes that should be
  shared belong in `dwk-123/alfrex-design`, not in one app's copied file.
- Do not add an npm package, private registry, or hosted shadcn registry. Copy
  the source assets as documented.
- Do not introduce Radix APIs into the Base UI component stack.
- Do not duplicate semantic token blocks in consumer `globals.css`.
- Do not use brand red for normal primary actions. Dark primary is paper-white
  with dark text.
- Do not invent status variants or chart colors. Charts use the five non-alert
  solid status colors.
- Do not use shadow on cards or controls. Stock component defaults must be
  neutralized when they introduce visual elevation.
- Every operational number uses `font-mono tabular-nums`; right-align numeric
  table cells.

## Implementation checklist

Before calling work complete:

1. `components.json` matches base-nova/Base UI/neutral/CSS-variable settings.
2. Theme import follows Tailwind and shadcn imports and precedes
   `@custom-variant`.
3. Stock shadcn token blocks have been removed from globals.
4. next/font exposes `--font-plex-sans` and `--font-plex-mono`, never
   `--font-sans` directly.
5. Copied component sources compile without consumer-specific imports.
6. Light and dark show neutral primary, six readable statuses, border-defined
   cards, active red nav treatment, neutral stock item highlights, visible
   keyboard focus, and Mono figures.
7. `npm run build` passes.
8. For migrations, no dark toggle exists while any reachable `.als-*` screen
   remains.

Consumers refresh these files with:

```bash
npx skills update alfrex-design-language alfrex-shadcn -p -y
```

After an update, inspect upstream diffs and recopy changed assets into the app;
the skills CLI updates the skill tree, not consumer copies under `src/`.
