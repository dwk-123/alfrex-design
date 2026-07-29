import * as React from "react"
import { AlertCircle, Info } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inlineAlertVariants = cva(
  "flex items-start gap-[9px] rounded-[var(--alfrex-r-control)] px-[13px] py-[11px] text-[13px] [&_svg]:mt-px [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        error:
          "bg-[var(--alfrex-alert-bg)] text-[var(--alfrex-alert-fg)]",
        info: "border border-border bg-muted text-[var(--alfrex-text-muted)]",
      },
    },
    defaultVariants: { variant: "error" },
  }
)

function InlineAlert({
  className,
  variant = "error",
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof inlineAlertVariants> & {
    icon?: React.ReactNode
  }) {
  const fallbackIcon = variant === "error" ? <AlertCircle /> : <Info />

  return (
    <div
      data-slot="inline-alert"
      role={variant === "error" ? "alert" : "status"}
      className={cn(inlineAlertVariants({ variant }), className)}
      {...props}
    >
      {icon === undefined ? fallbackIcon : icon}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

export { InlineAlert, inlineAlertVariants }
