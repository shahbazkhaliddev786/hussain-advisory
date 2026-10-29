import { Breadcrumbs } from "@/components/pasa/breadcrumbs"
import type { Link } from "@/content/types"
import { cn } from "@/lib/utils"

/**
 * The opening band of an inner page: breadcrumb trail, title and lead paragraph
 * on the mist ground. Navy stays reserved for the homepage hero and calls to action.
 */
export function PageHeader({
  title,
  intro,
  breadcrumbs,
  aside,
  children,
  className,
}: {
  title: React.ReactNode
  intro?: React.ReactNode
  /** Section and parent pages, ending with the current page */
  breadcrumbs?: Link[]
  /** Shown beside the title on wide screens, below it on narrow ones */
  aside?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("border-b border-hairline bg-mist", className)}>
      <div className={cn("container-page pb-12 md:pb-16", breadcrumbs ? "pt-7 md:pt-9" : "pt-14 md:pt-20")}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div
          className={cn(
            "flex flex-wrap items-end justify-between gap-x-16 gap-y-8",
            breadcrumbs && "mt-8 md:mt-10",
          )}
        >
          <div className="min-w-0 flex-[1_1_560px]">
            <h1 className="max-w-[22ch] type-page">{title}</h1>
            {intro && <p className="mt-5 max-w-[60ch] type-lead text-ink-2">{intro}</p>}
            {children}
          </div>
          {aside && <div className="min-w-0 flex-[0_1_340px]">{aside}</div>}
        </div>
      </div>
    </div>
  )
}
