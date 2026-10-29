import Link from "next/link"

import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { ProgramCard } from "@/components/pasa/program-card"
import { routes } from "@/content/routes"
import { programs } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Upcoming training",
  description: "Dates, delivery and fees for PASA’s scheduled procurement training programs.",
  path: routes.trainingUpcoming,
})

export default function UpcomingTrainingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Training", href: routes.training },
          { label: "Upcoming training", href: routes.trainingUpcoming },
        ]}
        title="Upcoming training"
        intro="Dates, delivery and fees for scheduled programs. Dates are announced here first; register your interest to hear as soon as they are set."
      />
      <section aria-label="Scheduled programs" className="container-page grid gap-8 py-14 md:py-20">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} heading="h2" />
        ))}
        <p className="text-[17px] text-ink-2">
          Looking for training on a specific topic?{" "}
          <Link href={routes.trainingCustomized}>Customized training</Link> can cover any stage of the
          procurement cycle.
        </p>
      </section>
      <CtaBand />
    </>
  )
}
