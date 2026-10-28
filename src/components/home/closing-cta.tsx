import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/content/routes"
import { site } from "@/content/site"

export function ClosingCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-navy text-white **:focus-visible:outline-leaf [&_a]:decoration-soft/50"
    >
      <div className="container-page flex flex-wrap items-end justify-between gap-x-16 gap-y-8 py-18 md:py-24 xl:py-28">
        <div className="min-w-0 flex-[1_1_560px]">
          <h2
            id="cta-title"
            className="max-w-[18ch] text-[clamp(2.125rem,4vw,3.5rem)] leading-[1.04] font-[760] tracking-[-0.02em] text-balance font-stretch-116%"
          >
            Need procurement advice or professional training?
          </h2>
          <p className="mt-5 max-w-[52ch] type-lead text-soft">
            Describe what you are working on, and Naeem will get back to you.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button asChild variant="leaf" size="xl">
            <Link href={routes.contact}>Talk to PASA</Link>
          </Button>
          <a href={`mailto:${site.email}`} className="text-[17px] font-medium text-white hover:text-leaf">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
