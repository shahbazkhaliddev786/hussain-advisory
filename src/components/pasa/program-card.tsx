import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/content/routes"
import type { Program } from "@/content/types"

/** A program with its key details and the two next steps: register, or read more. */
export function ProgramCard({
  program,
  heading: Heading = "h3",
  footnote,
}: {
  program: Program
  heading?: "h2" | "h3"
  footnote?: React.ReactNode
}) {
  const details = [
    ["Level", program.level],
    ["Dates", program.dates],
    ["Delivery", program.delivery],
    ["Duration", program.duration],
    ["Fee", program.fee],
  ] as const

  return (
    <article className="flex flex-wrap items-start gap-x-14 gap-y-7 border border-t-4 border-hairline border-t-navy bg-white p-6 md:p-10">
      <div className="min-w-0 flex-[2_1_420px]">
        <Heading className="text-[clamp(1.625rem,2.4vw,2rem)] leading-[1.12] font-[740] tracking-[-0.012em] text-balance font-stretch-112%">
          {program.title}
        </Heading>
        <p className="mt-3.5 text-[17px] leading-relaxed text-ink-2">{program.summary}</p>
      </div>
      <dl className="grid flex-[1_1_260px] grid-cols-[auto_1fr] gap-x-5 gap-y-3 leading-snug">
        {details.map(([term, value]) => (
          <div key={term} className="contents">
            <dt className="text-subtle">{term}</dt>
            <dd className="font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-[1_1_260px] flex-wrap content-start gap-3">
        <Button asChild>
          <Link href={`${routes.program(program.slug)}#register`}>Register interest</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={routes.program(program.slug)}>View program</Link>
        </Button>
        {footnote && <p className="mt-1.5 basis-full text-[15px] leading-normal text-subtle">{footnote}</p>}
      </div>
    </article>
  )
}
