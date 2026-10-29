import Link from "next/link"

import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { PageHeader } from "@/components/pasa/page-header"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Case studies",
  description:
    "Procurement case studies from PASA: real cases shared with permission, and illustrative cases that show how the rules work in practice.",
  path: routes.caseStudies,
})

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Knowledge Hub", href: routes.knowledgeHub },
          { label: "Case studies", href: routes.caseStudies },
        ]}
        title="Case studies"
        intro="Procurement cases that show how the rules work in practice: what happened, what went well, and what could have gone better."
      />
      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="max-w-[64ch] min-w-0">
          <section aria-labelledby="labels-title">
            <h2 id="labels-title" className="type-section">
              Real and illustrative cases
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">
              Real cases are published only with the permission of the organizations involved. Every other
              case is clearly labelled as an illustrative procurement case study.
            </p>
            <p className="mt-6 inline-block border border-navy px-3 py-1.5 text-[15px] font-semibold">
              Illustrative Procurement Case Study
            </p>
            <p className="mt-2 text-[15px] text-subtle">The label that marks an illustrative case.</p>
          </section>
          <section
            aria-labelledby="none-title"
            className="mt-14 border border-dashed border-dim px-6 pt-6 pb-7"
          >
            <h2 id="none-title" className="text-[1.375rem] leading-snug font-[720] font-stretch-108%">
              No case studies yet
            </h2>
            <p className="mt-2.5 text-[17px] leading-relaxed text-ink-2">
              The first case studies are in preparation. Meanwhile, the{" "}
              <Link href={routes.article("10-common-procurement-mistakes")}>
                10 common procurement mistakes
              </Link>{" "}
              show where real procurements most often go wrong.
            </p>
          </section>
        </div>
        <aside className="grid content-start">
          <AskPasaCard />
        </aside>
      </div>
    </>
  )
}
