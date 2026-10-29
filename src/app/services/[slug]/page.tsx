import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/pasa/cta-band"
import { CycleTimeline } from "@/components/pasa/cycle-timeline"
import { EntryList } from "@/components/pasa/entry-list"
import { PageHeader } from "@/components/pasa/page-header"
import { entryBySlug } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { getService, services } from "@/content/services"
import { site } from "@/content/site"
import { featuredProgram } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug)
  if (!service) return {}
  return pageMetadata({ title: service.name, description: service.intro, path: routes.service(service.slug) })
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug)
  if (!service) notFound()

  const contact = `${routes.contact}?topic=${service.slug}`
  const guides = service.guides.map(entryBySlug)

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Services", href: routes.services },
          { label: service.name, href: routes.service(service.slug) },
        ]}
        title={service.name}
        intro={service.intro}
      />

      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <section aria-labelledby="areas-title">
            <h2 id="areas-title" className="type-section">
              What PASA can help with
            </h2>
            <ul className="mt-7 grid gap-x-10 border-t-2 border-navy sm:grid-cols-2">
              {service.areas.map((area) => (
                <li key={area} className="border-b border-hairline py-4 text-lg font-medium">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          {service.note && (
            <aside
              aria-labelledby="note-title"
              className="mt-12 max-w-[64ch] border-l-4 border-navy bg-mist px-6 py-5"
            >
              <h2 id="note-title" className="text-lg leading-snug font-[700]">
                {service.note.title}
              </h2>
              <p className="mt-2 text-[17px] leading-relaxed text-ink-2">{service.note.text}</p>
            </aside>
          )}

          <section aria-labelledby="audience-title" className="mt-14">
            <h2 id="audience-title" className="type-section">
              Who it is for
            </h2>
            <p className="mt-5 max-w-[64ch] text-lg leading-relaxed text-ink-2">{service.audience}</p>
          </section>

          <section aria-labelledby="learn-title" className="mt-14">
            <h2 id="learn-title" className="type-section">
              Learn more
            </h2>
            <div className="mt-7 grid gap-x-12 gap-y-10 md:grid-cols-2">
              <div>
                <h3 className="text-[17px] font-[680]">Guides in the Knowledge Hub</h3>
                <EntryList entries={guides} className="mt-3" />
              </div>
              <div>
                <h3 className="text-[17px] font-[680]">Training</h3>
                <ul className="mt-3 border-t border-hairline">
                  <li className="border-b border-hairline py-4.5">
                    <Link
                      href={routes.program(featuredProgram.slug)}
                      className="text-[17.5px] leading-snug font-semibold text-navy no-underline hover:underline"
                    >
                      {featuredProgram.title}
                    </Link>
                    <p className="mt-1 text-[15.5px] leading-snug text-subtle">{featuredProgram.summary}</p>
                  </li>
                  <li className="border-b border-hairline py-4.5">
                    <Link
                      href={routes.trainingCustomized}
                      className="text-[17.5px] leading-snug font-semibold text-navy no-underline hover:underline"
                    >
                      Customized training
                    </Link>
                    <p className="mt-1 text-[15.5px] leading-snug text-subtle">
                      Training designed around your team and the rules you work under.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="grid content-start gap-12 lg:sticky lg:top-8 lg:self-start">
          <CycleTimeline highlight={service.stages} title="Where it fits in the procurement cycle" />
          <section aria-labelledby="ask-title" className="border-t-2 border-navy pt-5">
            <h2 id="ask-title" className="text-[17px] leading-snug font-[680]">
              Talk to Naeem about {service.name.toLowerCase()}
            </h2>
            <Button asChild className="mt-4">
              <Link href={contact}>Request support</Link>
            </Button>
            <p className="mt-3 text-[15px] text-subtle">
              Or email <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </section>
        </aside>
      </div>

      <CtaBand action={{ label: "Request advisory support", href: contact }} />
    </>
  )
}
