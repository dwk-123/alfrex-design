import * as React from "react"

import { cn } from "@/lib/utils"

function EmptyState({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        "flex flex-col items-center px-[18px] py-[34px] text-center text-[13.5px] text-[var(--alfrex-text-muted)]",
        className
      )}
      {...props}
    />
  )
}

function EmptyStateTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="empty-state-title"
      className={cn(
        "m-0 text-sm font-semibold text-[var(--alfrex-text-strong)]",
        className
      )}
      {...props}
    />
  )
}

function EmptyStateDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="empty-state-description"
      className={cn("mt-1 max-w-md text-pretty", className)}
      {...props}
    />
  )
}

function EmptyStateActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-state-actions"
      className={cn("mt-4 flex flex-wrap justify-center gap-2", className)}
      {...props}
    />
  )
}

export {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateTitle,
}
