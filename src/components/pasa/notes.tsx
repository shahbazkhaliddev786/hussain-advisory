import { BookOpenIcon, PencilLineIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/** Marks text drafted from the brief that still needs the client's approval. */
export function DraftNote({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex max-w-[68ch] gap-3 border border-dashed border-dim px-4 py-3 text-[15px] leading-normal text-subtle",
        className,
      )}
    >
      <PencilLineIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <span>{children ?? "Draft text, waiting for PASA’s review before launch."}</span>
    </p>
  )
}

/** Required on procurement-methods and framework content: terms and procedures differ. */
export function FrameworkNote({ id = "framework-note", className }: { id?: string; className?: string }) {
  return (
    <aside
      aria-labelledby={id}
      className={cn(
        "flex max-w-[68ch] items-start gap-4 border border-hairline bg-mist px-6 py-5",
        className,
      )}
    >
      <BookOpenIcon aria-hidden="true" strokeWidth={1.6} className="mt-0.5 size-5.5 shrink-0 text-navy" />
      <div>
        <h2 id={id} className="text-[17px] leading-snug font-[680]">
          Terms differ between frameworks
        </h2>
        <p className="mt-1.5 text-base leading-normal text-ink-2">
          National procurement rules and each financier’s procurement framework can use different terms and
          procedures. Check the rules that apply to your procurement.
        </p>
      </div>
    </aside>
  )
}
