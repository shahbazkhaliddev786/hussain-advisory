import Link from "next/link"

import { AlphabetNav } from "@/components/pasa/alphabet-nav"
import { ArticleCards } from "@/components/pasa/article-cards"
import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { Row, Rows } from "@/components/pasa/rows"
import { StageCoverage } from "@/components/pasa/stage-coverage"
import { terms } from "@/content/dictionary"
import { entriesInTopic, isPublished, latestArticles, topics } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Knowledge Hub",
  description:
    "Plain-language guides to public procurement, organized by the stages of the procurement cycle, with a Procurement Dictionary and answers to readers’ questions.",
  path: routes.knowledgeHub,
})

function topicCount(slug: (typeof topics)[number]["slug"]) {
  const inTopic = entriesInTopic(slug)
  const written = inTopic.filter(isPublished).length
  const planned = inTopic.length - written
  return [written > 0 && `${written} to read`, planned > 0 && `${planned} in preparation`]
    .filter(Boolean)
    .join(", ")
}

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHeader
        title="Knowledge Hub"
        intro="Plain-language guides to public procurement, organized by the stages of the procurement cycle. For newcomers and practitioners alike."
      />

      <PageSection id="start-title" title="Start here">
        <ArticleCards entries={latestArticles.slice(0, 3)} />
      </PageSection>

      <PageSection id="topics-title" title="Topics" ruled>
        <Rows>
          {topics.map((topic) => (
            <Row
              key={topic.slug}
              title={topic.name}
              href={routes.topic(topic.slug)}
              summary={topic.summary}
              detail={
                <>
                  <StageCoverage stages={topic.stages} caption={topic.coverage} />
                  <p className="mt-2 text-[14.5px] text-subtle">{topicCount(topic.slug)}</p>
                </>
              }
            />
          ))}
        </Rows>
      </PageSection>

      <PageSection id="reference-title" title="Reference" tone="mist">
        <section
          aria-labelledby="dictionary-title"
          className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5 border-t-2 border-navy pt-6"
        >
          <div className="min-w-0 flex-[1_1_380px]">
            <h3 id="dictionary-title" className="type-h3">
              <Link href={routes.dictionary} className="text-navy no-underline hover:underline">
                Procurement Dictionary
              </Link>
            </h3>
            <p className="mt-2.5 max-w-[56ch] text-[17px] leading-relaxed text-ink-2">
              {terms.length} procurement terms explained in plain language, from addendum to variation.
            </p>
          </div>
          <AlphabetNav className="max-w-full" />
        </section>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <section aria-labelledby="cases-title" className="border-t border-rule pt-5">
            <h3 id="cases-title" className="text-xl font-[700] font-stretch-108%">
              <Link href={routes.caseStudies} className="text-navy no-underline hover:underline">
                Case studies
              </Link>
            </h3>
            <p className="mt-2 text-[16px] leading-normal text-ink-2">
              Procurement cases, real with permission or clearly labelled as illustrative.
            </p>
          </section>
          <section aria-labelledby="resources-title" className="border-t border-rule pt-5">
            <h3 id="resources-title" className="text-xl font-[700] font-stretch-108%">
              <Link href={routes.resources} className="text-navy no-underline hover:underline">
                Resources and downloads
              </Link>
            </h3>
            <p className="mt-2 text-[16px] leading-normal text-ink-2">
              Checklists and guides to use in your own work.
            </p>
          </section>
          <AskPasaCard id="hub-ask-title" className="md:col-span-2 lg:col-span-1" />
        </div>
      </PageSection>
    </>
  )
}
