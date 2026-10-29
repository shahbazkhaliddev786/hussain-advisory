import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { RegistrationForm } from "@/components/forms/registration-form"
import { JsonLd } from "@/components/pasa/json-ld"
import { DraftNote } from "@/components/pasa/notes"
import { PageHeader } from "@/components/pasa/page-header"
import { Portrait } from "@/components/pasa/portrait"
import { advisor } from "@/content/about"
import { routes } from "@/content/routes"
import { site } from "@/content/site"
import { getProgram, programs } from "@/content/training"
import { absoluteUrl, pageMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/training/programs/[slug]">): Promise<Metadata> {
  const program = getProgram((await params).slug)
  if (!program) return {}
  return pageMetadata({
    title: program.title,
    description: program.overview,
    path: routes.program(program.slug),
  })
}

const sectionTitle = "text-[1.625rem] leading-[1.2] font-[720] font-stretch-110%"

/** A training program, in the order the brief sets: overview to registration. */
export default async function ProgramPage({ params }: PageProps<"/training/programs/[slug]">) {
  const program = getProgram((await params).slug)
  if (!program) notFound()

  const details = [
    ["Trainer", program.trainer],
    ["Duration", program.duration],
    ["Delivery", program.delivery],
    ["Fee", program.fee],
    ["Dates", program.dates],
    ["Venue", program.venue],
  ] as const

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Training", href: routes.training },
          { label: program.title, href: routes.program(program.slug) },
        ]}
        title={program.title}
        intro={program.overview}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button asChild size="lg">
            <a href="#register">Register interest</a>
          </Button>
          <p className="text-[15.5px] text-ink-2">
            <span className="font-semibold">{program.level}</span> program
          </p>
        </div>
      </PageHeader>

      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="max-w-[68ch] min-w-0">
          {program.draft && (
            <DraftNote className="mb-12">
              Objectives and topics are drafted from the brief, waiting for PASA’s review before launch.
            </DraftNote>
          )}

          <section aria-labelledby="objectives-title">
            <h2 id="objectives-title" className={sectionTitle}>
              Learning objectives
            </h2>
            <p className="mt-4 text-[17px] text-ink-2">
              By the end of the program, participants will be able to:
            </p>
            <ul className="mt-4 grid list-disc gap-2.5 pl-6 text-lg leading-relaxed marker:text-subtle">
              {program.objectives.map((objective) => (
                <li key={objective} className="pl-1">
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="audience-title" className="mt-14">
            <h2 id="audience-title" className={sectionTitle}>
              Who should attend
            </h2>
            <ul className="mt-5 grid border-t border-hairline sm:grid-cols-2 sm:gap-x-8">
              {program.audience.map((item) => (
                <li key={item} className="border-b border-hairline py-3.5 text-[17px] font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="topics-title" className="mt-14">
            <h2 id="topics-title" className={sectionTitle}>
              Topics
            </h2>
            <ol className="mt-5 border-t-2 border-navy">
              {program.topics.map((topic, i) => (
                <li key={topic.title} className="grid grid-cols-[2.5rem_1fr] border-b border-hairline py-4.5">
                  <span className="pt-0.5 text-[15px] type-numeral text-subtle">{i + 1}</span>
                  <span>
                    <span className="block text-lg leading-snug font-[700]">{topic.title}</span>
                    <span className="mt-1 block text-[16px] leading-normal text-ink-2">{topic.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="trainer-title" className="mt-14">
            <h2 id="trainer-title" className={sectionTitle}>
              Trainer
            </h2>
            <div className="mt-5 flex items-center gap-5">
              <Portrait className="h-[104px] w-[84px] shrink-0 rounded-[36px_0_36px_0]" />
              <div>
                <p className="text-xl font-[700]">{advisor.name}</p>
                <p className="mt-1 text-[16px] leading-normal text-ink-2">{advisor.summary}</p>
                <Link href={routes.advisor} className="mt-1.5 inline-block font-semibold">
                  Read Naeem’s profile
                </Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="details-title" className="mt-14">
            <h2 id="details-title" className={sectionTitle}>
              Course details
            </h2>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-8 border-t-2 border-navy">
              {details.map(([term, value]) => (
                <div key={term} className="contents">
                  <dt className="border-b border-hairline py-3.5 text-subtle">{term}</dt>
                  <dd className="border-b border-hairline py-3.5 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="register" aria-labelledby="register-title" className="mt-16 scroll-mt-8">
            <h2 id="register-title" className="type-section">
              Register
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
              Dates are not set yet. Register your interest and Naeem will confirm the details with you by
              email.
            </p>
            <div className="mt-8">
              <RegistrationForm training={program.slug} />
            </div>
          </section>
        </div>

        <aside className="hidden content-start lg:sticky lg:top-8 lg:grid lg:self-start">
          <div className="border-t-2 border-navy pt-5">
            <p className="text-[17px] font-[680]">At a glance</p>
            <dl className="mt-3 grid gap-2.5 text-[16px] leading-snug">
              <div>
                <dt className="text-subtle">Level</dt>
                <dd className="font-semibold">{program.level}</dd>
              </div>
              <div>
                <dt className="text-subtle">Dates</dt>
                <dd className="font-semibold">{program.dates}</dd>
              </div>
              <div>
                <dt className="text-subtle">Fee</dt>
                <dd className="font-semibold">{program.fee}</dd>
              </div>
            </dl>
            <Button asChild className="mt-5 w-full">
              <a href="#register">Register interest</a>
            </Button>
            <p className="mt-4 text-[15px] leading-normal text-subtle">
              Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </aside>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: program.title,
          description: program.overview,
          url: absoluteUrl(routes.program(program.slug)),
          provider: { "@type": "Organization", name: site.fullName, url: absoluteUrl(routes.home) },
          educationalLevel: program.level,
          teaches: program.objectives,
        }}
      />
    </>
  )
}
