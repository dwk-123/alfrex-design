"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[var(--alfrex-r-control)] border border-transparent bg-clip-padding text-[13px] font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:bg-muted disabled:text-[var(--alfrex-text-disabled)] disabled:opacity-100 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-input bg-card text-[var(--alfrex-text)] hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "text-[var(--alfrex-text)] hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        // Brand red is reserved for the single money-committing action in a flow.
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-[var(--alfrex-brand-pressed)] focus-visible:border-destructive focus-visible:ring-destructive/30",
        link:
          "h-auto rounded-none border-0 p-0 text-[var(--alfrex-xlink-fg)] underline-offset-4 hover:underline",
        xlink:
          "bg-[var(--alfrex-xlink-bg)] text-[var(--alfrex-xlink-fg)] hover:brightness-95",
      },
      size: {
        default:
          "h-[38px] gap-[7px] px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-2 px-5 text-sm",
        mini: "h-auto gap-1.5 rounded-[7px] px-[11px] py-1.5 text-xs",
        icon: "size-[38px]",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
