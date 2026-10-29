import Link from "next/link"

import { AlphabetNav } from "@/components/pasa/alphabet-nav"
import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { Breadcrumbs } from "@/components/pasa/breadcrumbs"
import { DraftNote, FrameworkNote } from "@/components/pasa/notes"
import { termsByLetter } from "@/content/dictionary"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Procurement Dictionary",
  description:
    "Plain-language explanations of the terms used in public procurement, from addendum and bid security to responsiveness and variation.",
  path: routes.dictionary,
})

export default function DictionaryPage() {
  const groups = [...termsByLetter()]
  return (
    <>
      <div className="border-b border-hairline bg-mist">
        <div className="container-page pt-7 pb-10 md:pt-9 md:pb-14">
          <Breadcrumbs
            items={[
              { label: "Knowledge Hub", href: routes.knowledgeHub },
              { label: "Procurement Dictionary", href: routes.dictionary },
            ]}
          />
          <h1 className="mt-8 type-page md:mt-10">Procurement Dictionary</h1>
          <p className="mt-5 max-w-[60ch] type-lead text-ink-2">
            Plain-language explanations of the terms used in public procurement, each linked to the stage of
            the procurement cycle where it matters.
          </p>
          <AlphabetNav className="mt-8" />
        </div>
      </div>

      <div className="container-page grid gap-x-20 gap-y-14 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <DraftNote className="mb-10">Definitions drafted for PASA’s review before launch.</DraftNote>
          {groups.map(([letter, letterTerms]) => (
            <section
              key={letter}
              id={`letter-${letter.toLowerCase()}`}
              aria-labelledby={`letter-${letter.toLowerCase()}-title`}
              className="grid scroll-mt-6 gap-x-8 border-t-2 border-navy py-6 sm:grid-cols-[4rem_minmax(0,1fr)]"
            >
              <h2
                id={`letter-${letter.toLowerCase()}-title`}
                className="text-[2.5rem] leading-none font-[760] font-stretch-116%"
              >
                {letter}
              </h2>
              <dl className="mt-3 grid gap-5 sm:mt-0">
                {letterTerms.map((term) => (
                  <div key={term.slug}>
                    <dt>
                      <Link href={routes.term(term.slug)} className="text-[19px] font-[680]">
                        {term.term}
                      </Link>
                    </dt>
                    <dd className="mt-1 max-w-[64ch] text-[16.5px] leading-normal text-ink-2">
                      {term.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <aside className="grid content-start gap-12 lg:sticky lg:top-8 lg:self-start">
          <FrameworkNote />
          <AskPasaCard />
        </aside>
      </div>
    </>
  )
}
