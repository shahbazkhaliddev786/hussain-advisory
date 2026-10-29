import * as React from "react"

import { cn } from "@/lib/utils"

// shadcn/ui input, tuned for PASA: rounded, 16px text (no zoom on iOS), a soft focus ring.
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border border-input bg-white px-3.5 text-base text-navy shadow-[0_1px_2px_rgb(16_40_80/0.04)] transition-[border-color,box-shadow] duration-150 outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-100",
        "aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-red-50",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
