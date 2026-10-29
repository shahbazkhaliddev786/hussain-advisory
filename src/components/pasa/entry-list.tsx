import Link from "next/link"

import { entryHref, isPublished, topicName } from "@/content/knowledge"
import type { Entry } from "@/content/types"
import { cn } from "@/lib/utils"

/** Guides and articles as a ruled list. Entries still being written say so before the click. */
export function EntryList({
  entries,
  showTopic = false,
  className,
}: {
  entries: Entry[]
  showTopic?: boolean
  className?: string
}) {
  return (
    <ul className={cn("border-t border-hairline", className)}>
      {entries.map((entry) => (
        <li key={entry.slug} className="border-b border-hairline py-4.5">
          <Link
            href={entryHref(entry)}
            className="text-[17.5px] leading-snug font-semibold text-navy no-underline hover:underline"
          >
            {entry.title}
          </Link>
          {!isPublished(entry) && (
            <span className="ml-2.5 text-[14px] font-medium text-subtle">In preparation</span>
          )}
          <p className="mt-1 text-[15.5px] leading-snug text-subtle">{entry.summary}</p>
          {showTopic && (
            <p className="mt-1.5 text-[14px] font-semibold text-subtle">{topicName(entry.topic)}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
