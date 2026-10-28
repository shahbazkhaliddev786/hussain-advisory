import { stageIds } from "@/content/cycle"
import type { StageId } from "@/content/types"
import { cn } from "@/lib/utils"

/** Which part of the procurement cycle a service, program or guide belongs to. */
export function StageCoverage({
  stages,
  caption,
  className,
}: {
  stages: StageId[]
  caption: string
  className?: string
}) {
  return (
    <div className={className}>
      <div aria-hidden="true" className="grid max-w-[300px] grid-cols-6 gap-1">
        {stageIds.map((id) => (
          <span key={id} className={cn("h-1.5", stages.includes(id) ? "bg-navy" : "bg-hairline")} />
        ))}
      </div>
      <p className="mt-2.5 text-[15px] font-medium text-ink-2">{caption}</p>
    </div>
  )
}
