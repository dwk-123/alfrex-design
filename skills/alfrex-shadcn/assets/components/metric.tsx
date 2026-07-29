import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Metric({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric"
      className={cn(
        "rounded-[var(--alfrex-r-card)] border border-border bg-card px-4 pt-4 pb-3.5 text-card-foreground",
        className
      )}
      {...props}
    />
  )
}

const metricLabelVariants = cva(
  "mb-[11px] flex items-center gap-[7px] text-xs font-medium text-[var(--alfrex-text-muted)] before:size-2 before:shrink-0 before:rounded-[2px] before:content-['']",
  {
    variants: {
      status: {
        planning: "before:bg-[var(--alfrex-planning-solid)]",
        pending: "before:bg-[var(--alfrex-pending-solid)]",
        booked: "before:bg-[var(--alfrex-booked-solid)]",
        transit: "before:bg-[var(--alfrex-transit-solid)]",
        delivered: "before:bg-[var(--alfrex-delivered-solid)]",
        alert: "before:bg-[var(--alfrex-alert-solid)]",
      },
    },
    defaultVariants: { status: "planning" },
  }
)

function MetricLabel({
  className,
  status = "planning",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof metricLabelVariants>) {
  return (
    <div
      data-slot="metric-label"
      className={cn(metricLabelVariants({ status }), className)}
      {...props}
    />
  )
}

function MetricValue({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric-value"
      className={cn(
        "font-mono text-[27px] leading-none font-semibold text-[var(--alfrex-text-strong)] tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function MetricSub({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric-sub"
      className={cn(
        "mt-[7px] text-xs text-[var(--alfrex-text-faint)]",
        className
      )}
      {...props}
    />
  )
}

export { Metric, MetricLabel, MetricSub, MetricValue, metricLabelVariants }
