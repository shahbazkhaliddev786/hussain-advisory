"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScaleIcon, UsersIcon } from "lucide-react"

import { StageIcon } from "@/components/landing/stage-icon"
import { stages } from "@/content/landing"

gsap.registerPlugin(useGSAP)

/** The hero's product shot: the procurement cycle PASA covers, as a polished card. */
export function CycleCard() {
  const root = useRef<HTMLDivElement>(null)

  // Entrance: the card rises, the six stages follow in order, the connector draws left to right and the
  // two chips settle. power4.out is the same quint curve as the CSS motion tokens.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } })
        tl.from("[data-cycle-panel]", { autoAlpha: 0, y: 24, duration: 0.8, delay: 0.1 })
          .from("[data-cycle-stage]", { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.05 }, "-=0.6")
          .from(
            "[data-cycle-line]",
            { scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power2.inOut" },
            "-=0.7",
          )
          .from("[data-cycle-chip]", { autoAlpha: 0, y: 12, duration: 0.6, stagger: 0.08 }, "-=0.4")
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <div ref={root} className="relative mx-auto mt-16 max-w-6xl px-4 pb-20 sm:px-6 md:mt-20 md:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-12 top-16 bottom-24 -z-10 rounded-[3rem] bg-[radial-gradient(50%_60%_at_50%_45%,rgb(58_111_196/0.28),transparent)] blur-2xl"
      />

      <div
        data-cycle-panel
        className="rounded-[1.75rem] border border-white/80 bg-white/70 p-2 shadow-raised ring-1 ring-line"
      >
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
              data-cycle-line
              aria-hidden="true"
              className="absolute top-[2.15rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-leaf lg:block"
            />
            {stages.map((stage, i) => (
              <li
                key={stage.id}
                data-cycle-stage
                className="relative rounded-2xl bg-white p-4 text-left shadow-hairline ring-1 ring-line"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-100">
                    <StageIcon id={stage.id} className="size-[18px]" />
                  </span>
                  <span className="text-xs font-semibold text-muted tabular-nums">0{i + 1}</span>
                </div>
                <p className="mt-4 font-semibold text-navy">{stage.name}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{stage.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div
        data-cycle-chip
        aria-hidden="true"
        className="absolute bottom-12 left-10 hidden w-64 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 text-left shadow-float ring-1 ring-line xl:flex"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-leaf/60 text-navy">
          <ScaleIcon className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy">Independent evaluation</p>
          <p className="text-xs text-muted">Criteria applied as published</p>
        </div>
      </div>

      <div
        data-cycle-chip
        aria-hidden="true"
        className="absolute right-10 bottom-12 hidden w-64 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 text-left shadow-float ring-1 ring-line xl:flex"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-700">
          <UsersIcon className="size-[18px]" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy">Training and mentoring</p>
          <p className="text-xs text-muted">For teams and individuals</p>
        </div>
      </div>
    </div>
  )
}
