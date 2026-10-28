import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Portrait } from "@/components/pasa/portrait"
import { about, advisor } from "@/content/home"
import { routes } from "@/content/routes"

export function AboutAndAdvisor() {
  return (
    <div className="bg-mist">
      <div className="container-page py-18 md:py-24 xl:py-30">
        <section aria-labelledby="about-title" className="grid gap-x-24 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 id="about-title" className="type-h2">
              About PASA
            </h2>
            <p className="mt-7 text-[clamp(1.3125rem,1.8vw,1.5625rem)] leading-[1.45] font-[430] text-pretty">
              {about.statement}
            </p>
          </div>
          <div className="lg:pt-2">
            <h3 className="text-[17px] font-semibold">What PASA stands for</h3>
            <ul className="mt-3.5 grid gap-x-7 sm:grid-cols-2">
              {about.values.map((value) => (
                <li key={value} className="border-t border-rule py-3 text-[17px] font-medium">
                  {value}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-9">
              <Link href={routes.about}>More about PASA</Link>
            </Button>
          </div>
        </section>

        <section
          aria-labelledby="advisor-title"
          className="mt-18 grid items-center gap-x-24 gap-y-10 border-t border-rule pt-14 md:mt-24 md:pt-20 lg:grid-cols-2"
        >
          <Portrait className="aspect-[4/5] w-full max-w-[420px] rounded-[140px_0_140px_0]" />
          <div>
            <h2 id="advisor-title" className="type-h2">
              Meet the advisor
            </h2>
            <h3 className="mt-7 text-[26px] leading-[1.15] font-[720] font-stretch-110%">{advisor.name}</h3>
            <p className="mt-1.5 text-subtle">{advisor.role}</p>
            <p className="mt-4.5 max-w-[46ch] text-lg leading-relaxed text-pretty text-ink-2">
              {advisor.summary}
            </p>
            <Link href={routes.advisor} className="mt-4.5 inline-block text-[16.5px] font-semibold text-link">
              Read Naeem’s profile
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
