# Migrating a legacy `.als-*` app

Treat migration as screen-by-screen replacement, not a global search-and-replace.
The legacy CSS remains supported for existing consumers, but it is
additive-only and receives no new component architecture.

## Known inventory

The planning inventory that motivated this migration counted approximately:

- Sample Manager: **607** `.als-*` usages
- Spec: **310** usages
- Sales: **187** usages

Recount in the target repo before estimating work:

```bash
rg -o 'als-[A-Za-z0-9_-]+' --glob '!node_modules/**' --glob '!.next/**' | wc -l
rg -l 'als-[A-Za-z0-9_-]+' --glob '!node_modules/**' --glob '!.next/**'
```

## Critical dark-mode constraint

The legacy classes are **light-only**. Many rules hard-code `#fff`, light hover
fills, focus borders, and modal/footer surfaces. Even when the imported token
file contains a `.dark` palette, an unmigrated `.als-*` screen is not dark-safe.

Keep dark mode disabled in a hybrid app until every screen reachable under the
same app shell is migrated. A route-level attempt to remove `.dark` is fragile:
portals for dialogs, menus, and toasts inherit from the document root and can
still render mixed themes.

## Hybrid import order

Place all imports at the top of Tailwind globals. If legacy files live under
`src/app/legacy/`, use:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "./legacy/tokens.css";
@import "./legacy/components.css";
@import "./alfrex-theme.css";

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
  html { @apply font-sans; }
}
```

The Alfrex shadcn theme comes after legacy tokens so its synchronized primitives
and semantic bridge win. Legacy `.als-*` selectors remain available without
competing with stock shadcn data-slot selectors.

Do not retain the stock shadcn `:root`, `.dark`, or `@theme inline` blocks in
`globals.css`.

## Migration sequence

1. **Inventory by route.** Group usage by screen and shared shell. Identify
   portal components (modal, toast, select/menu) separately.
2. **Install the skill and theme.** Follow `setup.md`, but do not expose a dark
   toggle yet.
3. **Migrate the shell first.** Body typography, app background, navigation,
   page gutter, toast provider, and shared dialogs must use shadcn semantics.
4. **Pick one complete screen.** Convert markup using `component-map.md`. Do
   not leave a card half `.als-*` and half stock shadcn.
5. **Convert numbers explicitly.** Add `font-mono tabular-nums`; right-align
   numeric table cells. Utility migration can otherwise erase this rule.
6. **Replace portal primitives.** Use stock Base UI Dialog, Select,
   DropdownMenu, Sheet, and Sonner so focus, dismissal, layering, and dark mode
   have one owner.
7. **Verify the route.** Keyboard traversal, focus rings, empty/loading/error
   states, narrow viewport behavior, and mutation toasts.
8. **Remove dead legacy selectors/imports.** Use `rg` after each screen. Keep
   the legacy stylesheets only while at least one route needs them.
9. **Enable dark last.** Render every route and every portal in both modes,
   then add next-themes and the toggle.

## Classes that require design decisions

- Legacy grid tables (`.als-thead`, `.als-row`) may map to stock `<Table>` or a
  responsive list. Preserve data-label stacking only when it is genuinely more
  usable than horizontal scroll.
- `.als-data-preview` handles unknown columns. Prefer a stock table in an
  overflow wrapper on desktop and deliberate stacked records on narrow screens.
- `.als-modal--native` becomes stock controlled Dialog. Do not carry native
  `<dialog>` styling forward.
- `.als-btn--danger` becomes `variant="destructive"`, but audit semantics:
  delete/cancel without financial commitment normally uses outline plus a
  confirmation dialog. Red fill marks the one money-committing action.

## Do not migrate these forks

Spec and Sales Forge contain hand-built `.als-menu*` and `.als-select*`
selectors. They are intentionally not upstreamed. Replace them with stock
base-nova/Base UI `DropdownMenu` and `Select`.

## Conflicting local agent guidance

Before adoption, reconcile or disable stale product-local skills that contradict
the installed source:

- Sales has `sales-ui-conventions` guidance claiming there is no Tailwind.
- Spec has a `product-ui` skill that may encode its fork as canonical.

Do not edit those skills as part of installing Alfrex design. Flag the conflict
to the product owner, then make the precedence explicit in that repository's
`AGENTS.md`. The installed `alfrex-design-language` and `alfrex-shadcn` skills
are the current shared source for new shadcn work.

## Completion criteria

Migration is complete only when:

```bash
rg 'als-' src
```

returns no runtime markup or styles (historical docs are acceptable), both
light and dark route sweeps pass, every portal uses Base UI/shadcn, and numeric
formatting still follows the Alfrex Mono rule.
