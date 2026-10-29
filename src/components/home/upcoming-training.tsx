import Link from "next/link"

import { ProgramCard } from "@/components/pasa/program-card"
import { routes } from "@/content/routes"
import { featuredProgram } from "@/content/training"

export function UpcomingTraining() {
  return (
    <section aria-labelledby="training-title" className="bg-mist">
      <div className="container-page py-18 md:py-24 xl:py-30">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-4">
          <h2 id="training-title" className="type-h2">
            Upcoming training
          </h2>
          <Link href={routes.training} className="font-semibold text-link">
            See all training programs
          </Link>
        </div>
        <div className="mt-10">
          <ProgramCard
            program={featuredProgram}
            footnote={
              <>
                Training a whole team?{" "}
                <Link href={routes.trainingCustomized}>Ask about customized training</Link>.
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}
