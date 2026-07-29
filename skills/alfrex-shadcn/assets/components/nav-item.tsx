import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const navItemVariants = cva(
  "flex w-full items-center gap-[11px] rounded-lg border-0 border-l-[3px] border-l-transparent bg-transparent px-[13px] py-[9px] text-left text-sm font-medium text-[var(--alfrex-text-muted)] outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:text-[var(--alfrex-text-disabled)] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      active: {
        false: "hover:bg-muted hover:text-foreground",
        true:
          "border-l-[var(--alfrex-brand)] bg-accent font-semibold text-accent-foreground hover:bg-accent",
      },
    },
    defaultVariants: { active: false },
  }
)

function NavItem({
  className,
  active = false,
  render,
  ...props
}: useRender.ComponentProps<"button"> &
  VariantProps<typeof navItemVariants>) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        type: "button",
        "aria-current": active ? "page" : undefined,
        className: cn(navItemVariants({ active }), className),
      },
      props
    ),
    render,
    state: { slot: "nav-item", active },
  })
}

export { NavItem, navItemVariants }
