import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/content/routes"
import { site } from "@/content/site"
import type { Link as LinkItem } from "@/content/types"

/** The navy closing band that ends a page with one clear next step. */
export function CtaBand({
  title = "Need procurement advice or professional training?",
  text = "Describe what you are working on, and Naeem will get back to you.",
  action = { label: "Talk to PASA", href: routes.contact },
  id = "cta-title",
}: {
  title?: string
  text?: string
  action?: LinkItem
  id?: string
}) {
  return (
    <section
      aria-labelledby={id}
      className="bg-navy text-white **:focus-visible:outline-leaf [&_a]:decoration-soft/50"
    >
      <div className="container-page flex flex-wrap items-end justify-between gap-x-16 gap-y-8 py-18 md:py-24 xl:py-28">
        <div className="min-w-0 flex-[1_1_560px]">
          <h2
            id={id}
            className="max-w-[18ch] text-[clamp(2.125rem,4vw,3.5rem)] leading-[1.04] font-[760] tracking-[-0.02em] text-balance font-stretch-116%"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-[52ch] type-lead text-soft">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button asChild variant="leaf" size="xl">
            <Link href={action.href}>{action.label}</Link>
          </Button>
          <a href={`mailto:${site.email}`} className="text-[17px] font-medium text-white hover:text-leaf">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
