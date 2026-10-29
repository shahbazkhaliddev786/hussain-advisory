import type { Metadata } from "next"
import Link from "next/link"

import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { CycleTimeline } from "@/components/pasa/cycle-timeline"
import { EntryList } from "@/components/pasa/entry-list"
import { JsonLd } from "@/components/pasa/json-ld"
import { DraftNote, FrameworkNote } from "@/components/pasa/notes"
import { PageHeader } from "@/components/pasa/page-header"
import { Prose } from "@/components/pasa/prose"
import { getTerm } from "@/content/dictionary"
import { entriesInTopic, entryHref, getTopic, isPublished } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { site } from "@/content/site"
import type { Entry } from "@/content/types"
import { absoluteUrl, pageMetadata } from "@/lib/metadata"

export function entryMetadata(entry: Entry): Metadata {
  return pageMetadata({
    title: entry.title,
    description: entry.summary,
    path: entryHref(entry),
    // A guide still being written is a placeholder: keep it out of search results.
    noindex: !isPublished(entry),
  })
}

/** A guide or an article: reading text with the cycle, related terms and Ask PASA beside it. */
export function EntryPage({ entry }: { entry: Entry }) {
  const topic = getTopic(entry.topic)
  const published = isPublished(entry)
  const relatedTerms = (entry.terms ?? []).map(getTerm).filter((term) => term !== undefined)
  const more = entriesInTopic(entry.topic)
    .filter((other) => other.slug !== entry.slug)
    .slice(0, 4)

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Knowledge Hub", href: routes.knowledgeHub },
          ...(topic ? [{ label: topic.name, href: routes.topic(topic.slug) }] : []),
          { label: entry.title, href: entryHref(entry) },
        ]}
        title={entry.title}
        intro={<span className="font-serif text-[1.3125rem] leading-[1.5]">{entry.summary}</span>}
      >
        <p className="mt-5 text-[15px] font-semibold text-subtle">
          {entry.kind === "article" ? "Article" : "Guide"}
          {!published && ", in preparation"}
        </p>
      </PageHeader>

      <div className="container-page grid gap-x-20 gap-y-14 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          {entry.draft && <DraftNote className="mb-10" />}
          {published && entry.body ? (
            <Prose>{entry.body}</Prose>
          ) : (
            <section
              aria-labelledby="preparation-title"
              className="max-w-[64ch] border border-dashed border-dim px-6 pt-6 pb-7"
            >
              <h2
                id="preparation-title"
                className="text-[1.375rem] leading-snug font-[720] font-stretch-108%"
              >
                This {entry.kind} is in preparation
              </h2>
              <p className="mt-2.5 text-[17px] leading-relaxed text-ink-2">
                PASA is writing it now. Until it is ready, the related terms in the Procurement Dictionary
                explain the basics, or you can send PASA your question.
              </p>
              <Link href={routes.askPasa} className="mt-4 inline-block font-semibold">
                Ask PASA a question
              </Link>
            </section>
          )}

          {topic?.frameworkNote && <FrameworkNote className="mt-12" />}

          {more.length > 0 && topic && (
            <section aria-labelledby="more-title" className="mt-16 max-w-[64ch]">
              <h2 id="more-title" className="text-[1.375rem] leading-snug font-[720] font-stretch-108%">
                More in {topic.name}
              </h2>
              <EntryList entries={more} className="mt-4" />
            </section>
          )}
        </article>

        <aside className="grid content-start gap-12">
          <CycleTimeline highlight={entry.stages} />
          {relatedTerms.length > 0 && (
            <section aria-labelledby="terms-title">
              <h2 id="terms-title" className="text-[17px] leading-snug font-[680]">
                Terms in the Procurement Dictionary
              </h2>
              <ul className="mt-3.5 border-t border-hairline">
                {relatedTerms.map((term) => (
                  <li key={term.slug} className="border-b border-hairline">
                    <Link href={routes.term(term.slug)} className="block py-2.5 text-[16.5px]">
                      {term.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <AskPasaCard />
        </aside>
      </div>

      {published && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: entry.title,
            description: entry.summary,
            url: absoluteUrl(entryHref(entry)),
            inLanguage: "en",
            author: { "@type": "Organization", name: site.fullName, url: absoluteUrl(routes.home) },
            publisher: { "@type": "Organization", name: site.fullName, url: absoluteUrl(routes.home) },
          }}
        />
      )}
    </>
  )
}
