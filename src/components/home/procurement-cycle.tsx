"use client"

import { useState } from "react"
import Link from "next/link"
import { Accordion as AccordionPrimitive, Tabs as TabsPrimitive } from "radix-ui"

import type { Stage, StageId } from "@/content/types"
import { cn } from "@/lib/utils"

/**
 * The signature interaction: the procurement cycle drawn as one line.
 * Wide screens get tabs along a horizontal line; narrow screens get a vertical
 * timeline that opens in place. Both share one selection.
 */
export function ProcurementCycle({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState<StageId>(stages[0].id)
  const select = (value: string) => {
    if (value) setActive(value as StageId)
  }

  return (
    <div>
      <h2 id="cycle-heading" className="text-lg leading-snug font-semibold text-white">
        Where are you in the procurement cycle?
      </h2>

      <TabsPrimitive.Root value={active} onValueChange={select} className="mt-5 hidden lg:block">
        <TabsPrimitive.List aria-labelledby="cycle-heading" className="grid grid-cols-6">
          {stages.map((stage, i) => (
            <TabsPrimitive.Trigger
              key={stage.id}
              value={stage.id}
              className="group relative cursor-pointer border-t-2 border-sky/55 pt-7 pr-5 pb-6 text-left outline-offset-[6px]"
            >
              <Node />
              <span className="block text-[13.5px] type-numeral text-sky">{i + 1}</span>
              <span className="mt-1.5 block text-2xl leading-[1.1] font-[720] text-white font-stretch-112% group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.2em] group-data-[state=active]:text-leaf">
                {stage.name}
              </span>
              <span className="mt-2 block text-[15px] leading-[1.45] text-pretty text-soft">
                {stage.summary}
              </span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {stages.map((stage) => (
          <TabsPrimitive.Content
            key={stage.id}
            value={stage.id}
            className="border-t border-soft/25 pt-8 pb-16 outline-offset-8 xl:pb-20"
          >
            <StagePanel stage={stage} />
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>

      <AccordionPrimitive.Root
        type="single"
        value={active}
        onValueChange={select}
        className="mt-5 ml-[7px] border-l-2 border-sky/55 pb-8 lg:hidden"
      >
        {stages.map((stage, i) => (
          <AccordionPrimitive.Item key={stage.id} value={stage.id} className="group relative pl-[22px]">
            <Node vertical />
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className="flex min-h-14 w-full cursor-pointer items-baseline gap-3 py-3 text-left">
                <span className="text-[13.5px] type-numeral text-sky">{i + 1}</span>
                <span className="text-[22px] leading-[1.15] font-[720] text-white font-stretch-112% group-data-[state=open]:text-leaf">
                  {stage.name}
                </span>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
              <div className="pb-6">
                <StagePanel stage={stage} compact />
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </div>
  )
}

/** A station on the line: a ring, replaced by the yellow leaf when selected. */
function Node({ vertical = false }: { vertical?: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute size-3.5 rounded-full border-2 border-sky bg-navy transition-opacity duration-150",
          vertical ? "top-[21px] -left-2" : "-top-2 left-0",
          vertical ? "group-data-[state=open]:opacity-0" : "group-data-[state=active]:opacity-0",
        )}
      />
      <span
        aria-hidden="true"
        data-leaf=""
        className={cn(
          "absolute size-6 origin-bottom-left scale-[0.55] leaf opacity-0 transition-[opacity,transform] duration-[160ms,260ms] ease-out-strong motion-reduce:transition-none",
          vertical
            ? "top-4 -left-[13px] group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100"
            : "-top-[13px] -left-[3px] group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100",
        )}
      />
    </>
  )
}

function StagePanel({ stage, compact = false }: { stage: Stage; compact?: boolean }) {
  const label = "mb-2.5 text-[14.5px] font-semibold text-soft"
  const link = "font-semibold text-white decoration-soft/50 hover:text-leaf hover:decoration-leaf"
  return (
    <div className={cn("grid", compact ? "gap-5" : "grid-cols-4 gap-10")}>
      <div>
        {!compact && (
          <h3 className="text-[26px] leading-[1.15] font-[720] text-leaf font-stretch-112%">{stage.title}</h3>
        )}
        <p className={cn("text-[16px] leading-relaxed text-pretty text-soft", !compact && "mt-2.5")}>
          {stage.text}
        </p>
      </div>
      <div>
        <h4 className={label}>Advice</h4>
        <Link href={stage.advice.href} className={cn(link, "text-[17px]")}>
          {stage.advice.label}
        </Link>
        <p className="mt-1.5 text-[15px] leading-snug text-soft">{stage.advice.note}</p>
      </div>
      <div>
        <h4 className={label}>Training</h4>
        <Link href={stage.training.href} className={cn(link, "text-[17px]")}>
          {stage.training.label}
        </Link>
        <p className="mt-1.5 text-[15px] leading-snug text-soft">{stage.training.note}</p>
      </div>
      <div>
        <h4 className={label}>Guides in the Knowledge Hub</h4>
        <ul className="grid gap-2">
          {stage.guides.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href} className={cn(link, "text-[16px] font-normal")}>
                {guide.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
