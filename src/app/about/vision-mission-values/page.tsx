import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { mission, values, vision } from "@/content/about"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Vision, mission and values",
  description: "What PASA works towards, how it gets there, and the values behind the work.",
  path: routes.values,
})

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "About", href: routes.about },
          { label: "Vision, mission and values", href: routes.values },
        ]}
        title="Vision, mission and values"
        intro="What PASA works towards, how it gets there, and the values behind the work."
      />

      <PageSection id="vision-title" title="Vision" layout="split">
        <p className="max-w-[30ch] font-serif text-[clamp(1.625rem,2.8vw,2.25rem)] leading-[1.3] font-[520] text-pretty">
          {vision}
        </p>
      </PageSection>

      <PageSection id="mission-title" title="Mission" layout="split" ruled>
        <p className="max-w-[58ch] text-[clamp(1.1875rem,1.6vw,1.375rem)] leading-relaxed text-ink-2">
          {mission}
        </p>
      </PageSection>

      <PageSection id="values-title" title="Values" tone="mist">
        <dl className="grid gap-x-12 border-t-2 border-navy md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name} className="border-b border-rule pt-6 pb-7">
              <dt className="type-h3">{value.name}</dt>
              <dd className="mt-2.5 text-[17px] leading-relaxed text-ink-2">{value.text}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <CtaBand />
    </>
  )
}
