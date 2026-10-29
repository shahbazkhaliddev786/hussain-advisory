import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { Row, Rows } from "@/components/pasa/rows"
import { sectorId, sectors } from "@/content/expertise"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Sectors",
  description:
    "Procurement across energy, transport, urban infrastructure, agriculture, natural resources, community development and emergency response.",
  path: routes.sectors,
})

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        title="Sectors"
        intro="Procurement looks different in every sector: what is bought, the risks, and the rules that apply. These are the sectors of Naeem Abbas’s experience."
      />
      <section aria-label="Sectors" className="container-page py-14 md:py-20">
        <Rows>
          {sectors.map((sector) => (
            <Row
              key={sector.name}
              id={sectorId(sector.name)}
              heading="h2"
              title={sector.name}
              summary={sector.text}
              detail={<p className="text-[17px] leading-relaxed text-ink-2">{sector.experience}</p>}
            />
          ))}
        </Rows>
      </section>
      <CtaBand />
    </>
  )
}
