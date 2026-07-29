import * as React from "react"

import { cn } from "@/lib/utils"

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field"
      className={cn("flex min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "text-[11px] font-semibold tracking-[.04em] text-[var(--alfrex-text-faint)] uppercase",
        className
      )}
      {...props}
    />
  )
}

function FieldValue({
  className,
  mono = false,
  ...props
}: React.ComponentProps<"div"> & { mono?: boolean }) {
  return (
    <div
      data-slot="field-value"
      data-mono={mono}
      className={cn(
        "wrap-anywhere text-[13.5px] text-[var(--alfrex-text)]",
        mono && "font-mono tabular-nums",
        className
      )}
      {...props}
    />
  )
}

export { Field, FieldLabel, FieldValue }
