import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/pasa/section-header"
import { latestArticles } from "@/content/home"
import { routes } from "@/content/routes"

export function KnowledgeLatest() {
  return (
    <section aria-labelledby="hub-title" className="container-page pb-18 md:pb-24 xl:pb-30">
      <div className="border-t border-hairline pt-16 md:pt-22 xl:pt-26">
        <SectionHeader
          id="hub-title"
          title="From the Knowledge Hub"
          intro="Plain-language guides to public procurement, for newcomers and practitioners alike."
        />
        <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="border-t-2 border-navy pt-6">
              <h3 className="font-serif text-[27px] leading-[1.2] font-[620] tracking-[-0.005em]">
                <Link href={article.href} className="text-navy no-underline hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-ink-2">{article.summary}</p>
              <p className="mt-4 text-[14.5px] font-semibold text-subtle">{article.category}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button asChild variant="outline">
            <Link href={routes.knowledgeHub}>Browse the Knowledge Hub</Link>
          </Button>
          <Link href={routes.dictionary} className="font-semibold text-link">
            Look up a term in the Procurement Dictionary
          </Link>
        </div>
      </div>
    </section>
  )
}
