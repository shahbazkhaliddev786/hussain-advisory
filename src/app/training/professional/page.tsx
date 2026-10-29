import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { Row, Rows } from "@/components/pasa/rows"
import { StageCoverage } from "@/components/pasa/stage-coverage"
import { stages } from "@/content/cycle"
import { routes } from "@/content/routes"
import { plannedPrograms } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Professional programs",
  description:
    "Planned professional procurement programs: procurement planning, bidding documents, bid evaluation, contract management and development partner procurement.",
  path: routes.trainingProfessional,
})

const stageNames = (ids: string[]) =>
  ids.length === stages.length
    ? "Every stage"
    : stages
        .filter((stage) => ids.includes(stage.id))
        .map((stage) => stage.name)
        .join(", ")

export default function ProfessionalProgramsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Training", href: routes.training },
          { label: "Professional programs", href: routes.trainingProfessional },
        ]}
        title="Professional programs"
        intro="In-depth programs for practitioners, one stage of the procurement cycle at a time. These programs are planned: register your interest to hear when each one opens."
      >
        <Button asChild size="lg" className="mt-8">
          <Link href={routes.trainingInquiry}>Register your interest</Link>
        </Button>
      </PageHeader>
      <section aria-label="Planned programs" className="container-page py-14 md:py-20">
        <Rows>
          {plannedPrograms.map((program) => (
            <Row
              key={program.title}
              heading="h2"
              title={program.title}
              summary={program.summary}
              detail={
                <>
                  <StageCoverage stages={program.stages} caption={stageNames(program.stages)} />
                  <p className="mt-3 text-[14.5px] font-semibold text-subtle">Planned</p>
                </>
              }
            />
          ))}
        </Rows>
      </section>
      <CtaBand
        title="Need this training sooner?"
        text="Any of these topics can be delivered now as customized training for your team."
        action={{ label: "Ask about customized training", href: routes.trainingCustomized }}
      />
    </>
  )
}
