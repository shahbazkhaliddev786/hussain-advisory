import Link from "next/link"

import { cn } from "@/lib/utils"

/** A ruled list of items, each a title, a description and an optional detail column. */
export function Rows({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ul className={cn("border-t-2 border-navy", className)}>{children}</ul>
}

export function Row({
  title,
  href,
  summary,
  detail,
  heading: Heading = "h3",
  id,
}: {
  title: string
  href?: string
  summary?: React.ReactNode
  detail?: React.ReactNode
  heading?: "h2" | "h3"
  id?: string
}) {
  return (
    <li
      id={id}
      className="grid grid-cols-1 gap-x-10 gap-y-3.5 border-b border-hairline pt-7.5 pb-8 md:grid-cols-3"
    >
      <Heading className="type-h3">
        {href ? (
          <Link href={href} className="text-navy no-underline hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      {summary && <div className="text-[17px] leading-relaxed text-subtle">{summary}</div>}
      {detail && <div className="pt-1">{detail}</div>}
    </li>
  )
}
