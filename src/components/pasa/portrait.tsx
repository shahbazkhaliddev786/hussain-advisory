import { UserRoundIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Portrait of Naeem Abbas in the leaf-cut frame from the logo.
 * Shows a marked placeholder until the professional photo is supplied.
 */
export function Portrait({ tone = "light", className }: { tone?: "light" | "navy"; className?: string }) {
  return (
    <div
      role="img"
      aria-label="Portrait of Naeem Abbas (photo to come)"
      className={cn(
        "grid place-items-center",
        tone === "light" ? "bg-haze text-[#7f98b8]" : "bg-navy-600 text-sky",
        className,
      )}
    >
      <UserRoundIcon aria-hidden="true" strokeWidth={1.1} className="size-[38%] max-h-24 max-w-24" />
    </div>
  )
}
