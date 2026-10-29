import Link from "next/link"

import { FinancierList } from "@/components/pasa/financier-list"
import { SectionHeader } from "@/components/pasa/section-header"
import { routes } from "@/content/routes"

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="container-page py-18 md:py-24 xl:py-30">
      <SectionHeader
        id="experience-title"
        title={<>Experience on donor&#8209;financed projects</>}
        intro="Naeem’s work includes development projects financed by these institutions."
      />
      <FinancierList className="mt-12" />
      <Link href={routes.partnerProcurement} className="mt-5 inline-block font-semibold text-link">
        How development partners’ procurement frameworks work
      </Link>
    </section>
  )
}
