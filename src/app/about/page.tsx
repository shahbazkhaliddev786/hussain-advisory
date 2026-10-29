import Link from "next/link"

import { Portrait } from "@/components/pasa/portrait"
import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { Row, Rows } from "@/components/pasa/rows"
import { about, advisor, mission, vision } from "@/content/about"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "About PASA",
  description:
    "PASA, Public Procurement and Supply Advisor, is the procurement advisory, training and mentoring practice of Naeem Abbas.",
  path: routes.about,
})

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About PASA" intro={about.statement} />

      <PageSection id="who-title" title="Who PASA is" layout="split">
        <div className="grid max-w-[64ch] gap-5 text-lg leading-relaxed text-ink-2">
          {about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      <PageSection id="ways-title" title="How PASA works" ruled>
        <Rows>
          {about.ways.map((way) => (
            <Row key={way.href} title={way.label} href={way.href} summary={way.note} />
          ))}
        </Rows>
      </PageSection>

      <PageSection id="purpose-title" title="Vision and mission" tone="mist" layout="split">
        <div className="max-w-[60ch]">
          <p className="font-serif text-[clamp(1.5rem,2.4vw,1.875rem)] leading-[1.35] font-[520] text-pretty">
            {vision}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">{mission}</p>
          <Link href={routes.values} className="mt-6 inline-block font-semibold">
            Vision, mission and values
          </Link>
        </div>
      </PageSection>

      <section aria-labelledby="advisor-title" className="container-page">
        <div className="grid items-center gap-x-20 gap-y-10 py-14 md:py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Portrait className="aspect-[4/5] w-full max-w-[360px] rounded-[120px_0_120px_0]" />
          <div>
            <h2 id="advisor-title" className="type-section">
              Meet the advisor
            </h2>
            <p className="mt-6 text-[26px] leading-[1.15] font-[720] font-stretch-110%">{advisor.name}</p>
            <p className="mt-1.5 text-subtle">{advisor.role}</p>
            <p className="mt-4.5 max-w-[50ch] text-lg leading-relaxed text-ink-2">{advisor.summary}</p>
            <Link href={routes.advisor} className="mt-4.5 inline-block font-semibold">
              Read Naeem’s profile
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
