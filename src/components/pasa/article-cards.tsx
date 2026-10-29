import Link from "next/link"

import { entryHref, topicName } from "@/content/knowledge"
import type { Entry } from "@/content/types"
import { cn } from "@/lib/utils"

/** Featured reading: serif titles, a summary and the topic, three across on wide screens. */
export function ArticleCards({
  entries,
  heading: Heading = "h3",
  className,
}: {
  entries: Entry[]
  heading?: "h2" | "h3"
  className?: string
}) {
  return (
    <div className={cn("grid gap-x-14 gap-y-10 md:grid-cols-3", className)}>
      {entries.map((entry) => (
        <article key={entry.slug} className="border-t-2 border-navy pt-6">
          <Heading className="font-serif text-[27px] leading-[1.2] font-[620] tracking-[-0.005em]">
            <Link href={entryHref(entry)} className="text-navy no-underline hover:underline">
              {entry.title}
            </Link>
          </Heading>
          <p className="mt-3 font-serif text-lg leading-relaxed text-ink-2">{entry.summary}</p>
          <p className="mt-4 text-[14.5px] font-semibold text-subtle">{topicName(entry.topic)}</p>
        </article>
      ))}
    </div>
  )
}
