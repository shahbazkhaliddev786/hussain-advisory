import { ArrowRightIcon, CheckIcon, ClockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { training } from "@/content/landing"

export function Training() {
  const { featured, customized } = training
  return (
    <section id="training" aria-labelledby="training-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="training-title"
            label="Training"
            title="Practical training that builds lasting capacity"
            intro="Programs for people new to procurement, and training designed around your own team."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-3xl p-8 shadow-[0_24px_60px_-30px_rgb(44_95_176/0.45)] border-gradient md:p-10">
              <p className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                {featured.label}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-navy md:text-[1.75rem] md:leading-tight">
                {featured.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{featured.text}</p>
              <ul className="mt-7 mb-10 grid gap-3 sm:grid-cols-2">
                {featured.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-[15px] text-navy">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <CheckIcon aria-hidden="true" strokeWidth={3} className="size-3" />
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                  <ClockIcon aria-hidden="true" className="size-4" />
                  {featured.status}
                </span>
                <Button asChild>
                  <a href="#contact">
                    Register interest
                    <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-[0_24px_60px_-30px_rgb(11_52_89/0.7)] md:p-10">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(84_138_210/0.55),transparent)]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-28 -left-16 -z-10 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(252_222_126/0.22),transparent)]"
              />
              <p className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/15">
                {customized.label}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] md:text-[1.75rem] md:leading-tight">
                {customized.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-200">{customized.text}</p>
              <ul className="mt-7 mb-10 flex flex-wrap gap-2">
                {customized.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/15"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-white/10 pt-6">
                <Button asChild variant="light">
                  <a href="#contact">
                    Plan training for your team
                    <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
