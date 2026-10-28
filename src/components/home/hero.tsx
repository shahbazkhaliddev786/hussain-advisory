import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProcurementCycle } from "@/components/home/procurement-cycle"
import { Portrait } from "@/components/pasa/portrait"
import { stages } from "@/content/cycle"
import { advisor, hero } from "@/content/home"
import { routes } from "@/content/routes"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-navy text-white **:focus-visible:outline-leaf [&_a]:decoration-soft/50"
    >
      <div className="container-page pt-12 md:pt-16 xl:pt-20">
        <h1 id="hero-title" className="type-display">
          {hero.title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className="max-w-[58ch] type-lead text-soft">{hero.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="leaf" size="lg">
                <Link href={routes.services}>Explore our services</Link>
              </Button>
              <Button asChild variant="outline-inverse" size="lg">
                <Link href={routes.training}>View training programs</Link>
              </Button>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 border-y border-soft/25 py-4 sm:w-auto sm:flex-[0_1_340px] sm:border-y-0 sm:border-l sm:border-soft/30 sm:py-1 sm:pl-6">
            <Portrait tone="navy" className="h-[84px] w-[68px] shrink-0 rounded-[30px_0_30px_0]" />
            <div className="min-w-0">
              <p className="font-semibold">{advisor.name}</p>
              <p className="mt-0.5 text-[15px] leading-snug text-soft">{advisor.role}</p>
              <Link
                href={routes.advisor}
                className="mt-1.5 inline-block text-[15px] font-semibold text-white"
              >
                Meet the advisor
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 xl:mt-16">
          <ProcurementCycle stages={stages} />
        </div>
      </div>
    </section>
  )
}
