"use client"

import { useState } from "react"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { Tabs } from "radix-ui"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { StageIcon } from "@/components/landing/stage-icon"
import { stages } from "@/content/landing"

/** The procurement cycle as tabs: pick a stage to see where PASA helps. Arrow keys move between stages. */
export function Approach() {
  const [active, setActive] = useState(stages[0].id)

  return (
    <section id="approach" aria-labelledby="approach-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="approach-title"
            label="Approach"
            title="One advisor for the whole procurement cycle"
            intro="Procurement succeeds or fails across six connected stages. Choose one to see where PASA helps."
          />
        </Reveal>

        <Tabs.Root value={active} onValueChange={setActive} className="mt-12">
          <Tabs.List
            aria-label="Stages of the procurement cycle"
            className="mx-auto grid w-full max-w-3xl grid-cols-3 gap-1 rounded-2xl bg-surface p-1.5 ring-1 ring-line sm:flex sm:w-fit sm:rounded-full"
          >
            {stages.map((stage, i) => (
              <Tabs.Trigger
                key={stage.id}
                value={stage.id}
                className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-[background-color,color,box-shadow] duration-200 hover:text-navy data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-[0_1px_2px_rgb(16_40_80/0.08),0_4px_12px_-4px_rgb(16_40_80/0.15)] sm:rounded-full"
              >
                <span className="mr-1.5 text-xs text-muted tabular-nums">{i + 1}</span>
                {stage.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {stages.map((stage, i) => (
            <Tabs.Content
              key={stage.id}
              value={stage.id}
              className="mt-8 animate-in duration-500 ease-out-strong fade-in-0 slide-in-from-bottom-2 focus-visible:outline-offset-8 motion-reduce:animate-none"
            >
              <div className="grid gap-10 rounded-3xl p-7 card md:grid-cols-[1.1fr_1fr] md:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_24px_-10px_rgb(44_95_176/0.8)]">
                      <StageIcon id={stage.id} className="size-[22px]" />
                    </span>
                    <span className="text-sm font-medium text-muted">Stage {i + 1} of 6</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-navy md:text-4xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-body">{stage.text}</p>
                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-1.5 font-medium text-brand-600 hover:text-brand-700"
                  >
                    Talk to Naeem about this stage
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-line md:p-7">
                  <p className="text-sm font-semibold text-navy">How PASA helps</p>
                  <ul className="mt-5 grid gap-4">
                    {stage.help.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-body">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                          <CheckIcon aria-hidden="true" strokeWidth={3} className="size-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden="true" className="mt-7 flex gap-1.5">
                    {stages.map((other, j) => (
                      <span
                        key={other.id}
                        className={
                          j <= i
                            ? "h-1.5 flex-1 rounded-full bg-brand-500"
                            : "h-1.5 flex-1 rounded-full bg-line"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
