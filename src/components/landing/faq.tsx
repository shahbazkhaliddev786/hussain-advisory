import { ChevronDownIcon } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { faqs, site } from "@/content/landing"

/** Native disclosure elements: no JavaScript, and opening one answer closes the others. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="faq-title"
            label="FAQ"
            title="Questions, answered"
            intro={
              <>
                Something else on your mind? Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
                >
                  {site.email}
                </a>
                .
              </>
            }
            align="left"
          />
        </Reveal>

        <Reveal delay={100} className="grid content-start gap-3">
          {faqs.map((faq, i) => (
            <details key={faq.question} name="faq" open={i === 0} className="group rounded-2xl card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="-mt-1 px-6 pb-5 text-[15px] leading-relaxed text-body">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
