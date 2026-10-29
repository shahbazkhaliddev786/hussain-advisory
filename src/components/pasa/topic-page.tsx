import Link from "next/link"

import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { CycleTimeline } from "@/components/pasa/cycle-timeline"
import { EntryList } from "@/components/pasa/entry-list"
import { FrameworkNote } from "@/components/pasa/notes"
import { PageHeader } from "@/components/pasa/page-header"
import { entriesInTopic } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { getService } from "@/content/services"
import type { Topic } from "@/content/types"

/** One Knowledge Hub topic: its guides and articles, where it sits in the cycle, and who can help. */
export function TopicPage({ topic }: { topic: Topic }) {
  const service = topic.service ? getService(topic.service) : undefined
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Knowledge Hub", href: routes.knowledgeHub },
          { label: topic.name, href: routes.topic(topic.slug) },
        ]}
        title={topic.name}
        intro={topic.summary}
      />
      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section aria-labelledby="entries-title" className="min-w-0">
          <h2 id="entries-title" className="sr-only">
            Guides and articles
          </h2>
          {topic.frameworkNote && <FrameworkNote className="mb-10" />}
          <EntryList entries={entriesInTopic(topic.slug)} className="border-t-2 border-navy" />
        </section>
        <aside className="grid content-start gap-12">
          <CycleTimeline highlight={topic.stages} title="Where this topic sits in the cycle" />
          {service && (
            <section aria-labelledby="service-title" className="border-t-2 border-navy pt-5">
              <h2 id="service-title" className="text-[17px] leading-snug font-[680]">
                Need help with this?
              </h2>
              <p className="mt-2 text-base leading-normal text-ink-2">
                <Link href={routes.service(service.slug)} className="font-semibold">
                  {service.name}
                </Link>
                : {service.summary.charAt(0).toLowerCase() + service.summary.slice(1)}
              </p>
            </section>
          )}
          <AskPasaCard />
        </aside>
      </div>
    </>
  )
}
