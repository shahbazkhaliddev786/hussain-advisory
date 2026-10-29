import Link from "next/link"

import { QuestionForm } from "@/components/forms/question-form"
import { PageHeader } from "@/components/pasa/page-header"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Ask PASA",
  description:
    "Send PASA a general procurement question. Selected questions are answered in the Knowledge Hub, so everyone can learn from them.",
  path: routes.askPasa,
})

const steps = [
  {
    title: "Send your question",
    text: "Any general question about public procurement or contract management.",
  },
  {
    title: "PASA selects questions",
    text: "Questions that will help many readers are answered first. Not every question can be answered.",
  },
  {
    title: "Answers are published",
    text: "Answers appear in the Knowledge Hub, without your name, if you agreed to publication.",
  },
]

export default function AskPasaPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Knowledge Hub", href: routes.knowledgeHub },
          { label: "Ask PASA", href: routes.askPasa },
        ]}
        title="Ask PASA"
        intro="Send a general procurement question. PASA selects useful questions and answers them in the Knowledge Hub, so everyone can learn from them."
      />
      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section aria-labelledby="question-title">
          <h2 id="question-title" className="type-section">
            Send a question
          </h2>
          <div className="mt-8">
            <QuestionForm />
          </div>
        </section>

        <aside className="grid content-start gap-10 lg:pt-2">
          <section aria-labelledby="how-title">
            <h2 id="how-title" className="text-[17px] leading-snug font-[680]">
              How it works
            </h2>
            <ol className="mt-4 grid gap-5">
              {steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-x-1">
                  <span className="pt-px text-[15px] type-numeral text-subtle">{i + 1}</span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-0.5 block text-[15.5px] leading-normal text-subtle">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
          <p className="border-t border-hairline pt-5 text-[15.5px] leading-normal text-ink-2">
            Answers are general guidance, not advice on a specific procurement. For help with your own
            procurement, <Link href={routes.requestSupport}>request advisory support</Link>.
          </p>
        </aside>
      </div>
    </>
  )
}
