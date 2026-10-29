import Link from "next/link"

import { AskPasaCard } from "@/components/pasa/ask-pasa-card"
import { PageHeader } from "@/components/pasa/page-header"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Resources and downloads",
  description: "Procurement checklists and guides from PASA to download and use in your own work.",
  path: routes.resources,
})

/** Resources the brief plans. None is published yet; the online dictionary already exists. */
const planned = [
  { title: "Procurement planning checklist", text: "The steps and records a sound procurement plan needs." },
  { title: "Bid evaluation checklist", text: "From bid opening to the evaluation report, step by step." },
  { title: "Contract management checklist", text: "What to track from commencement to closure." },
  {
    title: "Beginner’s procurement guide",
    text: "The whole procurement cycle in plain language, in one document.",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Knowledge Hub", href: routes.knowledgeHub },
          { label: "Resources and downloads", href: routes.resources },
        ]}
        title="Resources and downloads"
        intro="Checklists and guides to download and use in your own work."
      />
      <div className="container-page grid gap-x-20 gap-y-14 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <section aria-labelledby="available-title" className="max-w-[64ch]">
            <h2 id="available-title" className="type-section">
              Available now
            </h2>
            <div className="mt-6 border-t-2 border-navy pt-5">
              <Link href={routes.dictionary} className="text-xl font-[700]">
                Procurement Dictionary
              </Link>
              <p className="mt-1.5 text-[17px] leading-relaxed text-ink-2">
                The procurement glossary, online: plain-language explanations of procurement terms.
              </p>
            </div>
          </section>
          <section aria-labelledby="planned-title" className="mt-14 max-w-[64ch]">
            <h2 id="planned-title" className="type-section">
              In preparation
            </h2>
            <ul className="mt-6 border-t-2 border-navy">
              {planned.map((resource) => (
                <li key={resource.title} className="border-b border-hairline py-4.5">
                  <p className="text-lg font-[700]">{resource.title}</p>
                  <p className="mt-1 text-[16px] leading-normal text-ink-2">{resource.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="grid content-start">
          <AskPasaCard />
        </aside>
      </div>
    </>
  )
}
