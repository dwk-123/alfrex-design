# Alfrex Design

The shared design system for Alfrex USA internal applications. This repository
distributes the Alfrex design language and its Next.js/shadcn implementation as
installable [skills.sh](https://skills.sh/) skills.

## Install

From the root of a consumer project, run:

```bash
npx skills add dwk-123/alfrex-design
```

Select both public skills when prompted:

- **`alfrex-design-language`** — framework-agnostic visual language, tokens,
  typography, page archetypes, voice, and number formatting.
- **`alfrex-shadcn`** — Next.js, Tailwind v4, and shadcn v4 setup, light/dark
  theme, Base UI component recipes, and legacy `.als-*` migration guidance.

Skills page: <https://skills.sh/dwk-123/alfrex-design>

### Non-interactive install

For Claude Code and Codex:

```bash
npx skills add dwk-123/alfrex-design \
  --skill alfrex-design-language alfrex-shadcn \
  --agent claude-code codex \
  -y
```

This installs canonical copies under `.agents/skills/` and creates agent-specific
links such as `.claude/skills/`.

## Use with an agent

After installation, ask the agent to use the relevant skill explicitly. For
example:

```text
Use alfrex-design-language to review this screen for Alfrex consistency.
```

```text
Use alfrex-shadcn to apply the Alfrex theme to this existing base-nova shadcn app.
Follow the bundled setup guide and run the production build afterward.
```

```text
Use alfrex-shadcn to migrate this legacy .als-* screen. Follow als-migration.md
and component-map.md, and do not enable dark mode until the legacy routes are gone.
```

The shadcn skill chooses among three paths:

1. **Fresh app** — initialize the supported shadcn configuration, install stock
   components, copy the theme and Alfrex recipes, then configure IBM Plex.
2. **Existing shadcn app** — verify `base-nova`, Base UI, neutral base, and CSS
   variables before adopting the theme.
3. **Legacy `.als-*` app** — use a hybrid import order and migrate complete
   screens incrementally.

## Supported shadcn stack

The shipped component sources target:

- Next.js App Router
- Tailwind CSS v4
- shadcn v4, style `base-nova`
- Base UI, not Radix
- neutral base color with CSS variables
- Lucide icons
- IBM Plex Sans and IBM Plex Mono through `next/font`

The framework-agnostic `alfrex-design-language` skill can be used without this
stack.

## What gets installed

The skills CLI copies the complete skill directories, including:

```text
alfrex-shadcn/
├── SKILL.md
├── assets/
│   ├── alfrex-theme.css
│   └── components/
│       ├── button.tsx
│       ├── empty-state.tsx
│       ├── field.tsx
│       ├── filter-chip.tsx
│       ├── inline-alert.tsx
│       ├── metric.tsx
│       ├── nav-item.tsx
│       └── status-pill.tsx
└── references/
    ├── setup.md
    ├── component-map.md
    └── als-migration.md
```

Installing a skill does **not** automatically rewrite the consumer application.
The agent reads `references/setup.md` and copies the bundled source assets into
the app. Consumer apps compile those files normally; this repository has no
build or npm package.

## Core rules

- Primary actions are neutral ink, never brand red.
- Red is identity, active navigation, alerts, and the single
  money-committing action.
- Dark primary flips to paper-white with dark text; it does not become red.
- Every operational number uses IBM Plex Mono with tabular numerals.
- Borders define cards and controls; only modals and toasts receive shadows.
- Use only the six shared status families: planning, pending, booked, transit,
  delivered, and alert.

## Update

Refresh installed skills with:

```bash
npx skills update alfrex-design-language alfrex-shadcn -p -y
```

The update refreshes the installed skill trees. If an app previously copied the
theme or TSX assets into `src/`, inspect the upstream changes and recopy those
files deliberately.

## Repository layout

```text
skills/          Public skills distributed by skills.sh
design-system/   Additive-only legacy tokens and .als-* compatibility CSS
components/      Buildless HTML design previews
.claude/skills/  Local shareable-skill links plus repo-internal authoring tools
```

Token changes are synchronized across the legacy tokens, shadcn theme, and
design-language tables in the same commit.
