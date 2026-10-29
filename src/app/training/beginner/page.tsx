import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { ProgramCard } from "@/components/pasa/program-card"
import { routes } from "@/content/routes"
import { programs } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Beginner programs",
  description:
    "Procurement training for people new to public procurement, and for staff moving into procurement roles.",
  path: routes.trainingBeginner,
})

export default function BeginnerProgramsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Training", href: routes.training },
          { label: "Beginner programs", href: routes.trainingBeginner },
        ]}
        title="Beginner programs"
        intro="For people new to public procurement, and for staff moving into procurement roles. No previous training is needed."
      />
      <section aria-label="Beginner programs" className="container-page grid gap-8 py-14 md:py-20">
        {programs
          .filter((program) => program.level === "Beginner")
          .map((program) => (
            <ProgramCard key={program.slug} program={program} heading="h2" />
          ))}
      </section>
      <CtaBand
        title="Ready for the next step?"
        text="Professional programs go deeper into each stage of the procurement cycle."
        action={{ label: "See professional programs", href: routes.trainingProfessional }}
      />
    </>
  )
}
