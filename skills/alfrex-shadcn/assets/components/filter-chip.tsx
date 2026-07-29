"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const filterChipVariants = cva(
  "inline-flex h-8 shrink-0 items-center justify-center rounded-[7px] border px-[13px] text-[12.5px] font-medium whitespace-nowrap outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      active: {
        false:
          "border-border bg-card text-[var(--alfrex-text-muted)] hover:bg-muted hover:text-foreground",
        true: "border-primary bg-primary font-semibold text-primary-foreground",
      },
    },
    defaultVariants: { active: false },
  }
)

function FilterChip({
  className,
  active = false,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof filterChipVariants>) {
  return (
    <ButtonPrimitive
      data-slot="filter-chip"
      data-active={active}
      aria-pressed={active ?? false}
      className={cn(filterChipVariants({ active }), className)}
      {...props}
    />
  )
}

export { FilterChip, filterChipVariants }
