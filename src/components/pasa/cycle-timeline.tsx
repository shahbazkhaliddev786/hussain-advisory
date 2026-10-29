import { stages } from "@/content/cycle"
import type { StageId } from "@/content/types"
import { cn } from "@/lib/utils"

/**
 * The procurement cycle as a vertical line, marking where a term, guide or service applies.
 * The first highlighted stage carries the yellow leaf; the others get a filled station.
 */
export function CycleTimeline({
  highlight,
  notes,
  title = "Where it fits in the procurement cycle",
  id = "cycle-timeline",
  className,
}: {
  highlight: StageId[]
  notes?: Partial<Record<StageId, string>>
  title?: string
  id?: string
  className?: string
}) {
  const [main] = highlight
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="text-[17px] leading-snug font-[680]">
        {title}
      </h2>
      <ol className="mt-4.5 ml-[7px] border-l-2 border-rule">
        {stages.map((stage) => {
          const state = stage.id === main ? "main" : highlight.includes(stage.id) ? "on" : "off"
          const note = notes?.[stage.id]
          return (
            <li key={stage.id} className="relative pb-4.5 pl-6 last:pb-0">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute",
                  state === "main"
                    ? "top-0 -left-[13px] size-6 leaf shadow-[0_0_0_2px_#fff]"
                    : "top-[5px] -left-2 size-3.5 rounded-full border-2",
                  state === "on" && "border-navy bg-navy",
                  state === "off" && "border-dim bg-white",
                )}
              />
              <span className={cn("block text-base", state === "off" ? "text-subtle" : "font-bold")}>
                {stage.name}
                {state !== "off" && <span className="sr-only">: applies</span>}
              </span>
              {note && <span className="block text-[15px] leading-snug text-subtle">{note}</span>}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
