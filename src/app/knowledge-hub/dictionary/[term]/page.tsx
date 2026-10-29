import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { AlphabetNav } from "@/components/pasa/alphabet-nav"
import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { Breadcrumbs } from "@/components/pasa/breadcrumbs"
import { CycleTimeline } from "@/components/pasa/cycle-timeline"
import { EntryList } from "@/components/pasa/entry-list"
import { JsonLd } from "@/components/pasa/json-ld"
import { DraftNote, FrameworkNote } from "@/components/pasa/notes"
import { getTerm, terms } from "@/content/dictionary"
import { entries } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { absoluteUrl, pageMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return terms.map((term) => ({ term: term.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge-hub/dictionary/[term]">): Promise<Metadata> {
  const term = getTerm((await params).term)
  if (!term) return {}
  return pageMetadata({ title: term.term, description: term.definition, path: routes.term(term.slug) })
}

/** One dictionary entry, laid out as in the Direction A dictionary artboard. */
export default async function TermPage({ params }: PageProps<"/knowledge-hub/dictionary/[term]">) {
  const term = getTerm((await params).term)
  if (!term) notFound()

  const related = (term.related ?? []).map(getTerm).filter((item) => item !== undefined)
  const guides = entries.filter((entry) => entry.terms?.includes(term.slug)).slice(0, 4)

  return (
    <>
      <div className="border-b border-hairline bg-mist">
        <div className="container-page pt-7 pb-6.5 md:pt-9">
          <Breadcrumbs
            items={[
              { label: "Knowledge Hub", href: routes.knowledgeHub },
              { label: "Procurement Dictionary", href: routes.dictionary },
              { label: term.term, href: routes.term(term.slug) },
            ]}
          />
          <div className="mt-5.5 flex flex-wrap items-center gap-x-7 gap-y-3">
            <p className="text-[22px] font-[720] font-stretch-112%">Procurement Dictionary</p>
            <AlphabetNav current={term.term[0].toUpperCase()} className="min-w-0 flex-[1_1_560px]" />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(4.5rem,8vw,7rem)] lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="max-w-[760px] min-w-0">
          <h1 className="type-page">{term.term}</h1>
          {term.aka && <p className="mt-3.5 font-serif text-lg text-subtle italic">Also called {term.aka}</p>}
          <p className="mt-7 font-serif text-[clamp(1.375rem,1.9vw,1.625rem)] leading-[1.45] font-[450] text-pretty">
            {term.definition}
          </p>

          {term.sections?.map((section) => (
            <section key={section.title}>
              <h2 className="mt-12 text-[22px] leading-[1.2] font-[720] font-stretch-108%">
                {section.title}
              </h2>
              <p className="mt-3 type-reading text-ink-3">{section.text}</p>
            </section>
          ))}

          {term.compare && (
            // Focusable so keyboard users can scroll the table when it is wider than a phone screen
            <div
              role="region"
              aria-label={term.compare.caption}
              tabIndex={0}
              className="mt-6 overflow-x-auto"
            >
              <table className="w-full min-w-[520px] border-collapse text-base leading-[1.45]">
                <caption className="sr-only">{term.compare.caption}</caption>
                <thead>
                  <tr className="border-b-2 border-navy text-left">
                    <th scope="col" className="w-[22%] py-2.5 pr-4 font-semibold text-subtle">
                      <span className="sr-only">Aspect</span>
                    </th>
                    <th scope="col" className="py-2.5 pr-4 font-bold">
                      {term.compare.columns[0]}
                    </th>
                    <th scope="col" className="py-2.5 font-bold">
                      {term.compare.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {term.compare.rows.map(([aspect, first, second]) => (
                    <tr key={aspect} className="border-b border-hairline align-top">
                      <th scope="row" className="py-3.5 pr-4 text-left font-semibold text-subtle">
                        {aspect}
                      </th>
                      <td className="py-3.5 pr-4">{first}</td>
                      <td className="py-3.5">{second}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {term.frameworkNote && <FrameworkNote className="mt-10" />}

          {guides.length > 0 && (
            <section aria-labelledby="guides-title" className="mt-14">
              <h2 id="guides-title" className="text-[22px] leading-[1.2] font-[720] font-stretch-108%">
                Read more in the Knowledge Hub
              </h2>
              <EntryList entries={guides} className="mt-4" />
            </section>
          )}

          <DraftNote className="mt-14">Definition drafted for PASA’s review before launch.</DraftNote>
        </article>

        <aside aria-label="About this term" className="grid content-start gap-11">
          <CycleTimeline highlight={term.stages} notes={term.stageNotes} />
          {related.length > 0 && (
            <section aria-labelledby="related-title">
              <h2 id="related-title" className="text-[17px] leading-snug font-[680]">
                Related terms
              </h2>
              <ul className="mt-3.5 border-t border-hairline">
                {related.map((item) => (
                  <li key={item.slug} className="border-b border-hairline">
                    <Link href={routes.term(item.slug)} className="block py-2.5 text-[16.5px]">
                      {item.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <AskPasaCard />
        </aside>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: term.term,
          description: term.definition,
          url: absoluteUrl(routes.term(term.slug)),
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "PASA Procurement Dictionary",
            url: absoluteUrl(routes.dictionary),
          },
        }}
      />
    </>
  )
}
