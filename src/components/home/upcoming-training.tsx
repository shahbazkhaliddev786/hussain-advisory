import Link from "next/link"

import { Button } from "@/components/ui/button"
import { upcomingSession } from "@/content/home"
import { routes } from "@/content/routes"

export function UpcomingTraining() {
  const { program } = upcomingSession
  const details = [
    ["Level", program.level],
    ["Dates", upcomingSession.dates],
    ["Format", upcomingSession.format],
    ["Duration", upcomingSession.duration],
    ["Fee", upcomingSession.fee],
  ] as const

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

        <article className="mt-10 flex flex-wrap items-start gap-x-14 gap-y-7 border border-t-4 border-hairline border-t-navy bg-white p-6 md:p-10">
          <div className="min-w-0 flex-[2_1_420px]">
            <h3 className="text-[clamp(1.625rem,2.4vw,2rem)] leading-[1.12] font-[740] tracking-[-0.012em] text-balance font-stretch-112%">
              {program.title}
            </h3>
            <p className="mt-3.5 text-[17px] leading-relaxed text-ink-2">{program.audience}</p>
          </div>
          <dl className="grid flex-[1_1_260px] grid-cols-[auto_1fr] gap-x-5 gap-y-3 leading-snug">
            {details.map(([term, value]) => (
              <div key={term} className="contents">
                <dt className="text-subtle">{term}</dt>
                <dd className="font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-[1_1_260px] flex-wrap content-start gap-3">
            <Button asChild>
              <Link href={routes.program(program.slug)}>Register interest</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={routes.program(program.slug)}>View program</Link>
            </Button>
            <p className="mt-1.5 basis-full text-[15px] leading-normal text-subtle">
              Training a whole team?{" "}
              <Link href={routes.trainingCustomized}>Ask about customized training</Link>.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
