import * as React from "react"

import { cn } from "@/lib/utils"

// shadcn/ui input, tuned for PASA: 48px tall, 17px text (no zoom on iOS), a border
// with enough contrast to find, and the site-wide focus outline.
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-sm border border-field bg-white px-3.5 text-[17px] text-navy transition-[border-color] duration-150 placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-navy focus-visible:outline-offset-1",
        "aria-invalid:border-destructive aria-invalid:shadow-[inset_0_0_0_1px_var(--color-destructive)]",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
