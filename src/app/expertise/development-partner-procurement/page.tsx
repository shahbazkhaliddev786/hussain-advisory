import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { CtaBand } from "@/components/pasa/cta-band"
import { FinancierList } from "@/components/pasa/financier-list"
import { DraftNote, FrameworkNote } from "@/components/pasa/notes"
import { PageHeader } from "@/components/pasa/page-header"
import { frameworks, frameworksCaveat, partnerProcurement } from "@/content/expertise"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Development partner procurement",
  description:
    "How procurement works on projects financed by development partners such as the World Bank, ADB, IFAD and AFD, and why the rules can differ from national procedures.",
  path: routes.partnerProcurement,
})

export default function PartnerProcurementPage() {
  return (
    <>
      <PageHeader title="Development partner procurement" intro={partnerProcurement.intro} />

      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          {partnerProcurement.draft && <DraftNote className="mb-10" />}
          {partnerProcurement.sections.map((section) => (
            <section key={section.title} className="mb-12 max-w-[64ch]">
              <h2 className="text-[1.625rem] leading-[1.2] font-[720] font-stretch-110%">{section.title}</h2>
              <p className="mt-4 type-reading text-ink-3">{section.text}</p>
            </section>
          ))}

          <section aria-labelledby="frameworks-title" className="max-w-[64ch]">
            <h2 id="frameworks-title" className="text-[1.625rem] leading-[1.2] font-[720] font-stretch-110%">
              Frameworks you may work under
            </h2>
            <ul className="mt-6 border-t-2 border-navy">
              {frameworks.map((framework) => (
                <li key={framework.name} className="border-b border-hairline py-6">
                  <h3 className="text-xl leading-snug font-[700] font-stretch-108%">{framework.name}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-ink-2">{framework.text}</p>
                  {framework.documents.length > 0 && (
                    <p className="mt-2.5 text-[15.5px] leading-normal text-subtle">
                      <span className="font-semibold text-ink-2">Main documents: </span>
                      {framework.documents.join("; ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15.5px] leading-normal text-subtle">{frameworksCaveat}</p>
          </section>

          <FrameworkNote className="mt-12" />

          <section aria-labelledby="financed-title" className="mt-14">
            <h2 id="financed-title" className="text-[1.625rem] leading-[1.2] font-[720] font-stretch-110%">
              Naeem’s experience with projects financed by
            </h2>
            <FinancierList columns={2} className="mt-6" />
          </section>
        </article>

        <aside className="grid content-start gap-12 lg:sticky lg:top-8 lg:self-start">
          <section aria-labelledby="help-title">
            <h2 id="help-title" className="text-[17px] leading-snug font-[680]">
              Working on a donor-financed project?
            </h2>
            <p className="mt-2 text-base leading-normal text-ink-2">
              PASA can advise on applying the financier’s procurement rules to your procurement.
            </p>
            <Button asChild className="mt-4">
              <Link href={routes.requestSupport}>Request advisory support</Link>
            </Button>
          </section>
          <section aria-labelledby="training-title">
            <h2 id="training-title" className="text-[17px] leading-snug font-[680]">
              Training
            </h2>
            <p className="mt-2 text-base leading-normal text-ink-2">
              A professional program on development partner procurement is planned.{" "}
              <Link href={routes.trainingProfessional}>See professional programs</Link>.
            </p>
          </section>
          <AskPasaCard />
        </aside>
      </div>

      <CtaBand />
    </>
  )
}
