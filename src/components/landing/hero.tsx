import { ArrowRightIcon, CircleCheckIcon, ScaleIcon, UsersIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { StageIcon } from "@/components/landing/stage-icon"
import { hero, stages } from "@/content/landing"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 md:pt-40"
    >
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <a
          href="#about"
          className="inline-flex animate-in items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 py-1 pr-3 pl-1.5 text-sm font-medium text-navy shadow-[0_1px_2px_rgb(16_40_80/0.06)] backdrop-blur transition-colors duration-700 ease-out-strong fade-in-0 fill-mode-both slide-in-from-bottom-3 hover:border-brand-300 motion-reduce:animate-none"
        >
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
            PASA
          </span>
          {hero.badge}
          <ArrowRightIcon aria-hidden="true" className="size-3.5 text-muted" />
        </a>

        <h1 id="hero-title" className="mx-auto mt-7 max-w-5xl type-display text-navy">
          <span className="lg:block">{hero.title}</span>{" "}
          <span className="text-gradient lg:block">{hero.highlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-body md:text-xl">
          {hero.intro}
        </p>

        <div className="mt-9 flex animate-in flex-col justify-center gap-3 delay-200 duration-700 ease-out-strong fade-in-0 fill-mode-both slide-in-from-bottom-3 motion-reduce:animate-none sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">
              Request advisory support
              <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#training">Explore training</a>
          </Button>
        </div>

        <ul className="mt-8 flex animate-in flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted delay-300 duration-700 ease-out-strong fade-in-0 fill-mode-both slide-in-from-bottom-3 motion-reduce:animate-none">
          {hero.audiences.map((audience) => (
            <li key={audience} className="flex items-center gap-1.5">
              <CircleCheckIcon aria-hidden="true" className="size-4 text-brand-500" />
              {audience}
            </li>
          ))}
        </ul>
      </div>

      <CycleCard />
    </section>
  )
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(38rem_26rem_at_16%_6%,rgb(84_138_210/0.26),transparent_70%),radial-gradient(34rem_24rem_at_86%_2%,rgb(114_174_228/0.3),transparent_70%),radial-gradient(30rem_18rem_at_56%_42%,rgb(252_222_126/0.32),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(11_52_89/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(11_52_89/0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_35%,transparent_100%)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  )
}

/** The hero's product shot: the procurement cycle PASA covers, as a polished card. */
function CycleCard() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl animate-in px-4 pb-20 delay-300 duration-1000 ease-out-strong fade-in-0 fill-mode-both slide-in-from-bottom-6 motion-reduce:animate-none sm:px-6 md:mt-20 md:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-12 top-16 bottom-24 -z-10 rounded-[3rem] bg-[radial-gradient(50%_60%_at_50%_45%,rgb(58_111_196/0.28),transparent)] blur-2xl"
      />

      <div className="rounded-[1.75rem] border border-white/80 bg-white/60 p-2 shadow-[0_30px_80px_-30px_rgb(11_52_89/0.35)] ring-1 ring-line backdrop-blur-xl">
        <div className="rounded-[1.35rem] border border-line bg-gradient-to-b from-white to-surface p-5 md:p-8 xl:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 text-left">
            <div>
              <p className="font-semibold text-navy">The procurement cycle</p>
              <p className="text-sm text-muted">Advice and training at every stage, from plan to close</p>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              6 stages · end to end
            </span>
          </div>

          <ol className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <span
              aria-hidden="true"
              className="absolute top-[2.15rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-leaf lg:block"
            />
            {stages.map((stage, i) => (
              <li
                key={stage.id}
                className="relative rounded-2xl bg-white p-4 text-left shadow-[0_1px_2px_rgb(16_40_80/0.05)] ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgb(44_95_176/0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-100">
                    <StageIcon id={stage.id} className="size-[18px]" />
                  </span>
                  <span className="text-xs font-semibold text-muted tabular-nums">0{i + 1}</span>
                </div>
                <p className="mt-4 font-semibold text-navy">{stage.name}</p>
                <p className="mt-1 text-[13px] leading-snug text-muted">{stage.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-12 left-10 hidden w-64 animate-float rounded-2xl border border-white/80 bg-white/85 p-4 text-left shadow-[0_20px_50px_-20px_rgb(11_52_89/0.4)] ring-1 ring-line backdrop-blur-xl motion-reduce:animate-none xl:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-leaf/60 text-navy">
            <ScaleIcon className="size-[18px]" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">Independent evaluation</p>
            <p className="text-xs text-muted">Criteria applied as published</p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-10 bottom-12 hidden w-64 animate-float-late rounded-2xl border border-white/80 bg-white/85 p-4 text-left shadow-[0_20px_50px_-20px_rgb(11_52_89/0.4)] ring-1 ring-line backdrop-blur-xl motion-reduce:animate-none xl:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-700">
            <UsersIcon className="size-[18px]" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">Training and mentoring</p>
            <p className="text-xs text-muted">For teams and individuals</p>
          </div>
        </div>
      </div>
    </div>
  )
}
