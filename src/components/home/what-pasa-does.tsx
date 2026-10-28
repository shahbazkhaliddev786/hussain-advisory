import Link from "next/link"

import { SectionHeader } from "@/components/pasa/section-header"
import { StageCoverage } from "@/components/pasa/stage-coverage"
import { offers } from "@/content/home"

export function WhatPasaDoes() {
  return (
    <section aria-labelledby="what-title" className="container-page py-18 md:py-24 xl:py-30">
      <SectionHeader
        id="what-title"
        title="What PASA does"
        intro="Four kinds of help, each tied to the stages of procurement where it applies."
      />
      <ul className="mt-12 border-t-2 border-navy">
        {offers.map((offer) => (
          <li
            key={offer.name}
            className="grid grid-cols-1 gap-x-10 gap-y-3.5 border-b border-hairline pt-7.5 pb-8 md:grid-cols-3"
          >
            <h3 className="type-h3">
              <Link href={offer.href} className="text-navy no-underline hover:underline">
                {offer.name}
              </Link>
            </h3>
            <p className="text-[17px] leading-relaxed text-subtle">{offer.summary}</p>
            <StageCoverage stages={offer.stages} caption={offer.coverage} className="pt-2.5" />
          </li>
        ))}
      </ul>
    </section>
  )
}
