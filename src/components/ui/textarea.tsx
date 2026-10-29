import * as React from "react"

import { cn } from "@/lib/utils"

// shadcn/ui textarea, tuned to match the PASA input.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-32 w-full rounded-xl border border-input bg-white px-3.5 py-2.5 text-base leading-normal text-navy shadow-[0_1px_2px_rgb(16_40_80/0.04)] transition-[border-color,box-shadow] duration-150 outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-100",
        "aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-red-50",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
