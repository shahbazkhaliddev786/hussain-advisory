import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/pasa/cta-band"
import { FinancierList } from "@/components/pasa/financier-list"
import { JsonLd } from "@/components/pasa/json-ld"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { Portrait } from "@/components/pasa/portrait"
import { advisor } from "@/content/about"
import { routes } from "@/content/routes"
import { site } from "@/content/site"
import { absoluteUrl, pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Naeem Abbas",
  description: `${advisor.name}, ${advisor.role.toLowerCase()}. ${advisor.summary}`,
  path: routes.advisor,
})

export default function AdvisorPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "About", href: routes.about },
          { label: "Meet the advisor", href: routes.advisor },
        ]}
        title={advisor.name}
        intro={
          <>
            <span className="block font-semibold text-navy">{advisor.role}</span>
            <span className="mt-2 block">{advisor.summary}</span>
          </>
        }
        aside={<Portrait className="aspect-[4/5] w-full max-w-[300px] rounded-[100px_0_100px_0]" />}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button asChild size="lg">
            <Link href={routes.requestSupport}>Request advisory support</Link>
          </Button>
          <a href={`mailto:${site.email}`} className="font-semibold">
            {site.email}
          </a>
        </div>
      </PageHeader>

      <PageSection id="bio-title" title="Biography" layout="split">
        <p className="max-w-[64ch] text-lg leading-relaxed text-ink-2">{advisor.biography}</p>
      </PageSection>

      <PageSection id="experience-title" title="Experience" layout="split" ruled>
        <dl className="grid max-w-[64ch] border-t-2 border-navy">
          {advisor.experience.map((item) => (
            <div key={item.title} className="border-b border-hairline py-5.5">
              <dt className="text-xl leading-snug font-[700] font-stretch-108%">{item.title}</dt>
              <dd className="mt-1.5 text-[17px] leading-relaxed text-ink-2">{item.text}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection id="expertise-title" title="Areas of expertise" layout="split" tone="mist">
        <ul className="grid gap-x-10 border-t border-rule sm:grid-cols-2">
          {advisor.expertise.map((area) => (
            <li key={area} className="border-b border-rule py-3.5 text-[17px] font-medium">
              {area}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        id="projects-title"
        title={<>Development&#8209;project experience</>}
        intro="Naeem’s work includes development projects financed by these institutions."
      >
        <FinancierList />
        <Link href={routes.experience} className="mt-5 inline-block font-semibold">
          More about PASA’s experience
        </Link>
      </PageSection>

      <CtaBand
        title="Work with Naeem"
        text="Advisory support, training or mentoring: describe what you need, and Naeem will get back to you."
        action={{ label: "Request advisory support", href: routes.requestSupport }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: advisor.name,
          jobTitle: advisor.role,
          description: advisor.summary,
          url: absoluteUrl(routes.advisor),
          worksFor: { "@type": "Organization", name: site.fullName, url: absoluteUrl(routes.home) },
          knowsAbout: advisor.expertise,
        }}
      />
    </>
  )
}
