import Link from "next/link"

import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { ProgramCard } from "@/components/pasa/program-card"
import { Row, Rows } from "@/components/pasa/rows"
import { routes } from "@/content/routes"
import { featuredProgram, plannedPrograms, programs } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Training",
  description:
    "Practical procurement training from Naeem Abbas: beginner programs, professional programs and training designed for your team.",
  path: routes.training,
})

export default function TrainingPage() {
  const beginnerCount = programs.filter((program) => program.level === "Beginner").length
  return (
    <>
      <PageHeader
        title="Training"
        intro="Practical procurement training for public officials, project teams and people new to procurement, led by Naeem Abbas."
      />

      <PageSection id="upcoming-title" title="Upcoming training">
        <ProgramCard program={featuredProgram} />
        <Link href={routes.trainingUpcoming} className="mt-5 inline-block font-semibold">
          All upcoming training
        </Link>
      </PageSection>

      <PageSection id="programs-title" title="Training programs" tone="mist">
        <Rows>
          <Row
            title="Beginner programs"
            href={routes.trainingBeginner}
            summary="For people new to public procurement, and staff moving into procurement roles."
            detail={
              <p className="text-[15px] font-medium text-ink-2">
                {beginnerCount === 1 ? "1 program" : `${beginnerCount} programs`}
              </p>
            }
          />
          <Row
            title="Professional programs"
            href={routes.trainingProfessional}
            summary="In-depth programs for practitioners, one stage of the procurement cycle at a time."
            detail={
              <p className="text-[15px] font-medium text-ink-2">{plannedPrograms.length} programs planned</p>
            }
          />
          <Row
            title="Customized training"
            href={routes.trainingCustomized}
            summary="Training designed around your team, the procurements you handle and the rules you work under."
            detail={<p className="text-[15px] font-medium text-ink-2">For organizations and teams</p>}
          />
        </Rows>
      </PageSection>

      <CtaBand
        title="Training a whole team?"
        text="Tell PASA who will attend and what they work on, and Naeem will propose a program."
        action={{ label: "Ask about customized training", href: routes.trainingCustomized }}
      />
    </>
  )
}
