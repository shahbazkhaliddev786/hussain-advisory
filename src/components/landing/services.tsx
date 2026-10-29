import {
  ClipboardCheckIcon,
  CompassIcon,
  FileTextIcon,
  ScaleIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { services, type ServiceIcon } from "@/content/landing"
import { cn } from "@/lib/utils"

const icons: Record<ServiceIcon, typeof CompassIcon> = {
  compass: CompassIcon,
  file: FileTextIcon,
  scale: ScaleIcon,
  clipboard: ClipboardCheckIcon,
  growth: TrendingUpIcon,
  users: UsersIcon,
}

// Bento layout: two wide cards carry a small illustration; the rest share the rows.
const spans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="services-title"
            label="Services"
            title="Support at every stage of the procurement cycle"
            intro="Six ways PASA helps public institutions, development projects and procurement teams get procurement right."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            const wide = i === 0 || i === 3
            return (
              <Reveal key={service.name} delay={(i % 2) * 80} className={spans[i]}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl p-7 card transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(16_40_80/0.04),0_24px_48px_-24px_rgb(44_95_176/0.45)] md:p-8",
                    wide && "md:grid md:grid-cols-[1fr_0.9fr] md:items-center md:gap-8",
                  )}
                >
                  <div>
                    <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-100">
                      <Icon aria-hidden="true" strokeWidth={1.8} className="size-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy">{service.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">{service.text}</p>
                    {service.note && (
                      <p className="mt-3 flex gap-2 text-sm leading-snug text-brand-700">
                        <ShieldCheckIcon
                          aria-hidden="true"
                          strokeWidth={1.8}
                          className="mt-px size-4 shrink-0"
                        />
                        {service.note}
                      </p>
                    )}
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-body ring-1 ring-line"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i === 0 && <PlanIllustration />}
                  {i === 3 && <MilestoneIllustration />}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** A small procurement-plan timeline, drawn with bars. Decorative. */
function PlanIllustration() {
  const rows = [
    { label: "Needs", start: 0, width: 34 },
    { label: "Market", start: 18, width: 36 },
    { label: "Method", start: 40, width: 28 },
    { label: "Documents", start: 56, width: 38 },
  ]
  return (
    <div
      aria-hidden="true"
      className="mt-8 rounded-2xl bg-surface p-4 ring-1 ring-line md:mt-0 md:self-center"
    >
      <div className="flex items-center justify-between text-[11px] font-medium text-muted">
        <span>Procurement plan</span>
        <span>Q1 · Q2 · Q3</span>
      </div>
      <div className="mt-3 grid gap-2.5">
        {rows.map((row, i) => (
          <div key={row.label} className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
            <span className="text-[11px] text-muted">{row.label}</span>
            <span className="relative h-2.5 rounded-full bg-white ring-1 ring-line">
              <span
                className={cn(
                  "absolute inset-y-0 rounded-full transition-[width] duration-700 ease-out-strong",
                  i === 3
                    ? "bg-gradient-to-r from-brand-400 to-sky"
                    : "bg-gradient-to-r from-brand-500 to-brand-400",
                )}
                style={{ left: `${row.start}%`, width: `${row.width}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Contract milestones from award to closure. Decorative. */
function MilestoneIllustration() {
  const steps = ["Award", "Start", "Delivery", "Payment", "Closure"]
  return (
    <div
      aria-hidden="true"
      className="mt-8 rounded-2xl bg-surface p-4 ring-1 ring-line md:mt-0 md:self-center"
    >
      <div className="flex items-center justify-between text-[11px] font-medium text-muted">
        <span>Contract milestones</span>
        <span className="rounded-full bg-leaf/70 px-2 py-0.5 text-navy">On track</span>
      </div>
      <div className="relative mt-5 px-1">
        <span className="absolute top-[7px] right-2 left-2 h-0.5 rounded-full bg-line" />
        <span className="absolute top-[7px] left-2 h-0.5 w-[62%] rounded-full bg-gradient-to-r from-brand-500 to-brand-400" />
        <ol className="relative flex justify-between">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  "size-4 rounded-full ring-4 ring-surface",
                  i < 3
                    ? "bg-brand-500"
                    : i === 3
                      ? "bg-white ring-brand-200 outline-2 outline-brand-500"
                      : "bg-white outline-1 outline-line",
                )}
              />
              <span className="text-[10.5px] text-muted">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
