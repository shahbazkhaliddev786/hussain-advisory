import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { Row, Rows } from "@/components/pasa/rows"
import { StageCoverage } from "@/components/pasa/stage-coverage"
import { routes } from "@/content/routes"
import { services } from "@/content/services"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Procurement advisory, bidding and tender support, bid evaluation support, contract management, capacity development and mentoring.",
  path: routes.services,
})

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Advice and hands-on support at every stage of the procurement cycle, from one experienced practitioner."
      />
      <section aria-label="Services" className="container-page py-14 md:py-20">
        <Rows>
          {services.map((service) => (
            <Row
              key={service.slug}
              heading="h2"
              title={service.name}
              href={routes.service(service.slug)}
              summary={service.intro}
              detail={<StageCoverage stages={service.stages} caption={service.coverage} />}
            />
          ))}
        </Rows>
      </section>
      <CtaBand
        title="Not sure where to start?"
        text="Describe the procurement you are working on, and Naeem will suggest the right support."
        action={{ label: "Request advisory support", href: routes.requestSupport }}
      />
    </>
  )
}
