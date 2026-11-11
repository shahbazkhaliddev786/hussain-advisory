"use client"

import { useCallback, useLayoutEffect, useRef, useState } from "react"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { Tabs } from "radix-ui"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { StageIcon } from "@/components/landing/stage-icon"
import { stages } from "@/content/landing"
import { cn } from "@/lib/utils"

/** The procurement cycle as tabs: pick a stage to see where PASA helps. Arrow keys move between stages. */
export function Approach() {
  const [active, setActive] = useState(stages[0].id)
  // Which way the panel enters: forward (from the right) or back (from the left), like the pill.
  const [direction, setDirection] = useState<"forward" | "back">("forward")
  const { listRef, pillRef } = useSlidingPill(active)
  // The card stays put when the stage changes; only its content swaps, fading in and (motion
  // allowing) sliding 8px from the side the selection moved towards, with a 2px blur to bridge the two.
  const enter = cn(
    "animate-in duration-(--duration-fast) ease-(--ease-smooth-out) fade-in-0 motion-safe:blur-in-2",
    direction === "back" ? "motion-safe:slide-in-from-left-2" : "motion-safe:slide-in-from-right-2",
  )

  function select(next: string) {
    const from = stages.findIndex((stage) => stage.id === active)
    const to = stages.findIndex((stage) => stage.id === next)
    setDirection(to < from ? "back" : "forward")
    setActive(next)
  }

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

        <Tabs.Root value={active} onValueChange={select} className="mt-12 md:mt-16">
          <Tabs.List
            ref={listRef}
            aria-label="Stages of the procurement cycle"
            className="group/tabs relative mx-auto grid w-full max-w-3xl grid-cols-3 gap-1 rounded-2xl bg-surface p-1.5 ring-1 ring-line sm:flex sm:w-fit sm:rounded-full"
          >
            {/* The white pill slides to the selected stage. Until it is measured, the selected tab paints its own background. */}
            <span
              ref={pillRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 rounded-xl bg-white opacity-0 shadow-tab transition-[translate,width] duration-(--duration-fast) ease-(--ease-smooth-out) group-data-[pill=ready]/tabs:opacity-100 motion-reduce:transition-none sm:rounded-full"
            />
            {stages.map((stage, i) => (
              <Tabs.Trigger
                key={stage.id}
                value={stage.id}
                className="relative cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors duration-(--duration-fast) ease-(--ease-smooth-out) hover:text-navy data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-tab group-data-[pill=ready]/tabs:data-[state=active]:bg-transparent group-data-[pill=ready]/tabs:data-[state=active]:shadow-none sm:rounded-full"
              >
                <span aria-hidden="true" className="mr-1.5 text-xs text-muted tabular-nums">
                  {i + 1}
                </span>
                {stage.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {stages.map((stage, i) => (
            <Tabs.Content key={stage.id} value={stage.id} className="mt-8 focus-visible:outline-offset-8">
              <div className="grid gap-10 rounded-3xl p-7 card md:grid-cols-[1.1fr_1fr] md:p-12">
                <div className={enter}>
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
                      className="size-4 transition-transform duration-(--duration-quick) motion-safe:group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <div className="rounded-2xl bg-surface p-6 ring-1 ring-line md:p-7">
                  <div className={enter}>
                    <p className="text-sm font-semibold text-navy">How PASA helps</p>
                    <ul className="mt-5 grid gap-4">
                      {stage.help.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-body">
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
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}

/**
 * Moves the white pill onto the selected tab (the transitions.dev "tabs sliding" pattern).
 * The first placement and any resize snap into place; choosing another stage slides.
 */
function useSlidingPill(active: string) {
  const listRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)
  const firstRun = useRef(true)

  const place = useCallback((animate: boolean) => {
    const list = listRef.current
    const pill = pillRef.current
    const tab = list?.querySelector<HTMLElement>('[role="tab"][data-state="active"]')
    if (!list || !pill || !tab) return
    if (!animate) pill.style.transition = "none"
    pill.style.width = `${tab.offsetWidth}px`
    pill.style.height = `${tab.offsetHeight}px`
    pill.style.translate = `${tab.offsetLeft}px ${tab.offsetTop}px`
    if (!animate) {
      void pill.offsetWidth // commit the snap before the transition comes back
      pill.style.transition = ""
    }
    list.dataset.pill = "ready"
  }, [])

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    place(false)
    const observer = new ResizeObserver(() => place(false))
    observer.observe(list)
    return () => observer.disconnect()
  }, [place])

  useLayoutEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    place(true)
  }, [active, place])

  return { listRef, pillRef }
}
