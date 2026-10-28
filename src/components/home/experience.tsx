import Link from "next/link"

import { SectionHeader } from "@/components/pasa/section-header"
import { financiers, financiersDisclaimer } from "@/content/home"
import { routes } from "@/content/routes"

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="container-page py-18 md:py-24 xl:py-30">
      <SectionHeader
        id="experience-title"
        title={<>Experience on donor&#8209;financed projects</>}
        intro="Naeem’s work includes development projects financed by these institutions."
      />
      <ul className="mt-12 grid gap-x-10 border-t-2 border-navy sm:grid-cols-2 lg:grid-cols-4">
        {financiers.map((financier) => (
          <li key={financier.name} className="border-b border-hairline pt-5.5 pb-6">
            <span className="block text-2xl leading-[1.15] font-[720] font-stretch-112%">
              {financier.short ?? financier.name}
            </span>
            {financier.short && <span className="mt-1 block text-[15px] text-subtle">{financier.name}</span>}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap justify-between gap-x-12 gap-y-4">
        <p className="max-w-[72ch] text-[14.5px] leading-relaxed text-subtle">{financiersDisclaimer}</p>
        <Link href={routes.partnerProcurement} className="font-semibold text-link">
          How development partners’ procurement frameworks work
        </Link>
      </div>
    </section>
  )
}
