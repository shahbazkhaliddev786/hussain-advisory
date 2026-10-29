import { cn } from "@/lib/utils"

/** A section's label pill, title and intro, centered by default. */
export function SectionHeading({
  id,
  label,
  title,
  intro,
  align = "center",
  tone = "light",
  className,
}: {
  id: string
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: "center" | "left"
  tone?: "light" | "dark"
  className?: string
}) {
  const dark = tone === "dark"
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
          dark
            ? "bg-white/10 text-brand-100 ring-1 ring-white/15"
            : "bg-white text-brand-700 shadow-[0_1px_2px_rgb(16_40_80/0.06)] ring-1 ring-brand-100",
        )}
      >
        <span aria-hidden="true" className={cn("size-1.5 rounded-full", dark ? "bg-leaf" : "bg-brand-500")} />
        {label}
      </p>
      <h2 id={id} className={cn("mt-5 type-title", dark ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed text-pretty", dark ? "text-brand-200" : "text-body")}>
          {intro}
        </p>
      )}
    </div>
  )
}
