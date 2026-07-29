# AGENTS.md

Central home and distribution point for the **Alfrex design system** — the
house style for Alfrex USA internal apps. This public repo is served through the
skills CLI from `github.com/dwk-123/alfrex-design`.

## Two supported layers

### `skills/` — current, shareable shadcn expression

`npx skills add dwk-123/alfrex-design` discovers and installs:

- `alfrex-design-language` — framework-agnostic identity, tokens, typography,
  archetypes, voice, and non-negotiables.
- `alfrex-shadcn` — Next 16 + Tailwind v4 + shadcn v4 (`base-nova`, Base UI)
  theme, source recipes, setup, and `.als-*` migration guidance.

The skills carry source assets; consumers copy those assets into their apps and
build them there. This repo has no build step.

### `design-system/` — legacy `.als-*` compatibility layer

- `tokens.css` — framework-agnostic light/dark primitives.
- `components.css` — canonical `.als-*` classes.
- `design-system.md` — legacy usage guidance.

This layer is kept for existing consumers and is **additive-only**. Do not
rename/remove selectors or redesign their geometry. New shadcn work belongs in
`skills/alfrex-shadcn/`; legacy classes are added only when an existing consumer
already proved the shared need.

`components/` contains buildless HTML previews whose first line is
`<!-- @dsCard group="…" -->`. They remain compatible with the separate
DesignSync workflow.

## Token synchronization rule

A token value has three maintained representations:

1. `design-system/tokens.css`
2. `skills/alfrex-shadcn/assets/alfrex-theme.css`
3. the token tables in `skills/alfrex-design-language/SKILL.md`

Any token addition or value change must update all three in the same commit.
Code wins over prose, but a mismatch is a bug to fix immediately.

## Things agents get wrong

- **Primary buttons are neutral ink, never brand red.** Red is identity, active
  nav, alerts, and the single money-committing action only.
- **Dark primary flips to paper ink.** `--alfrex-ink` becomes `#F2F3F5` and its
  foreground becomes `#16171B`; it still never becomes red.
- **Every number is IBM Plex Mono** — IDs, money, weights, dates, dimensions,
  and percentages. UI/prose is IBM Plex Sans. Do not introduce a third font.
- Borders define surfaces. Shadows are only for floating modal/toast layers.
- There are exactly six status families: planning, pending, booked, transit,
  delivered, alert. Do not invent another color.
- The shadcn stack is `base-nova` on **Base UI**, not Radix; base color neutral,
  CSS variables enabled, Lucide icons.
- Do not reintroduce copied token forks, an npm package, or consumer-local theme
  edits. Fix shared source here.
- There is no repo build. Static previews open directly; consumers compile the
  copied TSX/CSS.

The seed legacy files came from Sample Manager on 2026-07-29. Sample Manager's
separate `DESIGN.md` is stale where it disagrees (`#EC1B2F`, system fonts). This
repo's synchronized tokens are canonical.

## Internal-only skills

- `.claude/skills/component-authoring/` — preview and additive legacy authoring.
- `.claude/skills/design-sync/` — optional claude.ai/design synchronization.

The two shareable skills are canonical under `skills/`; `.claude/skills/`
contains symlinks to them so local agents use the same copy the CLI distributes.

## Release workflow

1. Make and verify synchronized source changes.
2. Run the consumer dry-run when setup, theme, or component assets change.
3. Commit and push `main` to `dwk-123/alfrex-design`.
4. Consumers run:

   ```bash
   npx skills update alfrex-design-language alfrex-shadcn -p -y
   ```

5. Consumers inspect diffs and recopy updated source assets into their app.

A hosted shadcn registry (`registry.json`) is a possible future distribution
option, but it is intentionally deferred. Do not add one unless explicitly
requested.
