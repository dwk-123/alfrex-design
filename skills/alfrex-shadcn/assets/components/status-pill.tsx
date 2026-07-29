import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusPillVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-[var(--alfrex-r-pill)] px-2.5 py-1 text-[11.5px] leading-none font-semibold focus-visible:ring-3 focus-visible:ring-ring/50",
  {
    variants: {
      status: {
        planning:
          "bg-[var(--alfrex-planning-bg)] text-[var(--alfrex-planning-fg)]",
        pending:
          "bg-[var(--alfrex-pending-bg)] text-[var(--alfrex-pending-fg)]",
        booked:
          "bg-[var(--alfrex-booked-bg)] text-[var(--alfrex-booked-fg)]",
        transit:
          "bg-[var(--alfrex-transit-bg)] text-[var(--alfrex-transit-fg)]",
        delivered:
          "bg-[var(--alfrex-delivered-bg)] text-[var(--alfrex-delivered-fg)]",
        alert: "bg-[var(--alfrex-alert-bg)] text-[var(--alfrex-alert-fg)]",
      },
    },
    defaultVariants: {
      status: "planning",
    },
  }
)

function StatusPill({
  className,
  status = "planning",
  render,
  ...props
}: useRender.ComponentProps<"span"> &
  VariantProps<typeof statusPillVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(statusPillVariants({ status }), className),
      },
      props
    ),
    render,
    state: { slot: "status-pill", status },
  })
}

function Tag({
  className,
  render,
  ...props
}: useRender.ComponentProps<"span">) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          "inline-flex w-fit items-center rounded-[5px] bg-[var(--alfrex-tag-bg)] px-[7px] py-0.5 text-[10.5px] leading-none font-semibold tracking-[.02em] text-[var(--alfrex-tag-fg)]",
          className
        ),
      },
      props
    ),
    render,
    state: { slot: "tag" },
  })
}

function CountBadge({
  className,
  render,
  ...props
}: useRender.ComponentProps<"span">) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          "inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[9px] bg-[var(--alfrex-pending-bg)] px-1.5 font-mono text-[11px] leading-none font-semibold text-[var(--alfrex-pending-fg)] tabular-nums",
          className
        ),
      },
      props
    ),
    render,
    state: { slot: "count-badge" },
  })
}

export { CountBadge, StatusPill, Tag, statusPillVariants }
