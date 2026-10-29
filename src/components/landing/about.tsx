import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { advisor } from "@/content/landing"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <Portrait />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="about-title"
              label="About"
              title={`Meet ${advisor.name}`}
              intro={advisor.summary}
              align="left"
            />
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
              PASA is his practice: one experienced advisor, working directly with each client, from the first
              conversation to the last deliverable.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {advisor.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl p-5 card">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-4xl font-semibold tracking-[-0.04em] text-navy">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul aria-label="Values" className="mt-8 flex flex-wrap gap-2">
              {advisor.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-navy shadow-[0_1px_2px_rgb(16_40_80/0.06)] ring-1 ring-line"
                >
                  {value}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" variant="navy" className="mt-10">
              <a href="#contact">
                Work with Naeem
                <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Portrait frame. Shows a monogram until the professional photograph is supplied. */
function Portrait() {
  return (
    <div className="relative mx-auto max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_30%_20%,rgb(84_138_210/0.35),transparent),radial-gradient(50%_50%_at_80%_90%,rgb(252_222_126/0.45),transparent)] blur-2xl"
      />
      <div
        role="img"
        aria-label={`${advisor.name} (photograph to come)`}
        className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#eaf2fd_0%,#dce9fa_45%,#fdf3d3_100%)] shadow-[0_30px_70px_-30px_rgb(11_52_89/0.45)] ring-1 ring-white"
      >
        <span aria-hidden="true" className="text-[9rem] font-semibold tracking-[-0.06em] text-navy/15">
          NA
        </span>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_10px_30px_-12px_rgb(11_52_89/0.35)] backdrop-blur-xl">
          <p className="font-semibold text-navy">{advisor.name}</p>
          <p className="text-sm text-muted">{advisor.role}</p>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 hidden rounded-2xl bg-navy px-4 py-3 text-white shadow-[0_18px_40px_-18px_rgb(11_52_89/0.8)] sm:block">
        <p className="text-2xl font-semibold tracking-tight">30+</p>
        <p className="text-xs text-brand-200">years of experience</p>
      </div>
    </div>
  )
}
