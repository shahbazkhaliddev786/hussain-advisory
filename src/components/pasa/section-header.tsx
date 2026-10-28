import { cn } from "@/lib/utils"

/** Section heading with an optional short intro set beside it on wide screens. */
export function SectionHeader({
  id,
  title,
  intro,
  action,
  className,
}: {
  id: string
  title: React.ReactNode
  intro?: string
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-x-16 gap-y-4", className)}>
      <h2 id={id} className="max-w-[22ch] type-h2">
        {title}
      </h2>
      {intro && <p className="max-w-[40ch] text-lg leading-normal text-pretty text-subtle">{intro}</p>}
      {action}
    </div>
  )
}
