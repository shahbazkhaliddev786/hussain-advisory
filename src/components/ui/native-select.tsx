import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// shadcn/ui native select, tuned to match the PASA input. A native element works
// without JavaScript and uses the platform's own picker on phones.
function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative w-full has-[select:disabled]:opacity-50" data-slot="native-select-wrapper">
      <select
        data-slot="native-select"
        className={cn(
          "h-11 w-full min-w-0 appearance-none rounded-xl border border-input bg-white py-2 pr-10 pl-3.5 text-base text-navy shadow-[0_1px_2px_rgb(16_40_80/0.04)] transition-[border-color,box-shadow] duration-150 outline-none disabled:cursor-not-allowed",
          "focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-100",
          "aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-red-50",
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
    </div>
  )
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

export { NativeSelect, NativeSelectOption }
