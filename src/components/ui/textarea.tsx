import * as React from "react"

import { cn } from "@/lib/utils"

// shadcn/ui textarea, tuned to match the PASA input.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-36 w-full rounded-sm border border-field bg-white px-3.5 py-3 text-[17px] leading-normal text-navy transition-[border-color] duration-150 placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-navy focus-visible:outline-offset-1",
        "aria-invalid:border-destructive aria-invalid:shadow-[inset_0_0_0_1px_var(--color-destructive)]",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
