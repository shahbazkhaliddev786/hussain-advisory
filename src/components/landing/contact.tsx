import { CheckIcon, MailIcon } from "lucide-react"

import { ContactForm } from "@/components/landing/contact-form"
import { Reveal } from "@/components/landing/reveal"
import { SectionHeading } from "@/components/landing/section-heading"
import { site } from "@/content/landing"

const helpful = [
  "The organization or project, and the procurement involved",
  "The stage you are at, from planning to contract closure",
  "The rules that apply: national, or a financier’s framework",
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-navy py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_28rem_at_10%_0%,rgb(84_138_210/0.45),transparent_70%),radial-gradient(34rem_24rem_at_95%_100%,rgb(114_174_228/0.25),transparent_70%),radial-gradient(24rem_16rem_at_60%_10%,rgb(252_222_126/0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_20%_10%,black,transparent)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="contact-title"
            label="Contact"
            title="Let’s talk about your procurement"
            intro="Advisory support, training or mentoring: describe what you are working on, and Naeem will get back to you."
            align="left"
            tone="dark"
          />

          <a
            href={`mailto:${site.email}`}
            className="mt-10 flex max-w-sm items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-white">
              <MailIcon aria-hidden="true" strokeWidth={1.8} className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-brand-200">Email</span>
              <span className="block font-medium text-white">{site.email}</span>
            </span>
          </a>

          <div className="mt-10">
            <p className="text-sm font-semibold text-white">Helpful to include</p>
            <ul className="mt-4 grid gap-3">
              {helpful.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-brand-200">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-leaf">
                    <CheckIcon aria-hidden="true" strokeWidth={3} className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl bg-white p-6 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.55)] ring-1 ring-white/20 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
