import Link from "next/link"

import { InquiryForm } from "@/components/forms/inquiry-form"
import { PageHeader } from "@/components/pasa/page-header"
import { routes } from "@/content/routes"
import { site } from "@/content/site"
import { featuredProgram } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Ask PASA about procurement advisory support, training or mentoring. Email advisorpasa@gmail.com.",
  path: routes.contact,
})

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact PASA"
        intro="Ask about advisory support, training or mentoring. Describe what you are working on, and Naeem will get back to you."
      />
      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section aria-labelledby="inquiry-title">
          <h2 id="inquiry-title" className="type-section">
            Send an inquiry
          </h2>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </section>

        <aside className="grid content-start gap-10 lg:pt-2">
          <section aria-labelledby="details-title">
            <h2 id="details-title" className="text-[17px] leading-snug font-[680]">
              Contact details
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed">
              {site.fullName}
              <br />
              <a href={`mailto:${site.email}`} className="font-semibold">
                {site.email}
              </a>
            </p>
          </section>
          <section aria-labelledby="other-title">
            <h2 id="other-title" className="text-[17px] leading-snug font-[680]">
              Looking for something else?
            </h2>
            <ul className="mt-3 border-t border-hairline">
              <li className="border-b border-hairline py-3">
                <Link href={`${routes.program(featuredProgram.slug)}#register`} className="font-semibold">
                  Register for training
                </Link>
                <span className="mt-0.5 block text-[15px] leading-snug text-subtle">
                  The training registration form
                </span>
              </li>
              <li className="border-b border-hairline py-3">
                <Link href={routes.askPasa} className="font-semibold">
                  Ask a procurement question
                </Link>
                <span className="mt-0.5 block text-[15px] leading-snug text-subtle">
                  General questions, answered in the Knowledge Hub
                </span>
              </li>
            </ul>
          </section>
          <p className="text-[15px] leading-normal text-subtle">
            Read <Link href={routes.privacy}>how PASA uses your details</Link>.
          </p>
        </aside>
      </div>
    </>
  )
}
