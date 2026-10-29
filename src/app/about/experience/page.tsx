import Link from "next/link"

import { CtaBand } from "@/components/pasa/cta-band"
import { FinancierList } from "@/components/pasa/financier-list"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { assignments } from "@/content/about"
import { sectorId, sectors } from "@/content/expertise"
import { routes } from "@/content/routes"
import { services } from "@/content/services"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Naeem Abbas’s experience in public procurement, contract management and training, including development projects financed by the World Bank, ADB, IFAD, AFD and others.",
  path: routes.experience,
})

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "About", href: routes.about },
          { label: "Experience", href: routes.experience },
        ]}
        title="Experience"
        intro="Naeem Abbas’s experience covers public procurement, contract management and training, much of it on development projects."
      />

      <PageSection
        id="financed-title"
        title="Experience with projects financed by"
        intro="Development projects that Naeem has worked on were financed by these institutions."
      >
        <FinancierList />
        <Link href={routes.partnerProcurement} className="mt-5 inline-block font-semibold">
          How development partners’ procurement frameworks work
        </Link>
      </PageSection>

      <PageSection id="work-title" title="Kinds of work" layout="split" tone="mist">
        <ul className="grid gap-x-10 border-t border-rule sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="border-b border-rule py-3.5">
              <Link
                href={routes.service(service.slug)}
                className="text-[17px] font-semibold text-navy no-underline hover:underline"
              >
                {service.name}
              </Link>
              <span className="mt-0.5 block text-[15px] leading-snug text-subtle">{service.summary}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="sectors-title" title="Sectors" layout="split">
        <ul className="grid gap-x-10 border-t border-hairline sm:grid-cols-2">
          {sectors.map((sector) => (
            <li key={sector.name} className="border-b border-hairline">
              <Link
                href={`${routes.sectors}#${sectorId(sector.name)}`}
                className="block py-3.5 text-[17px] font-semibold text-navy no-underline hover:underline"
              >
                {sector.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="assignments-title" title="Selected assignments" layout="split" ruled>
        <p className="max-w-[64ch] text-lg leading-relaxed text-ink-2">{assignments}</p>
      </PageSection>

      <CtaBand />
    </>
  )
}
