import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArticleCards } from "@/components/pasa/article-cards"
import { SectionHeader } from "@/components/pasa/section-header"
import { latestArticles } from "@/content/knowledge"
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
        <ArticleCards entries={latestArticles.slice(0, 3)} className="mt-12" />
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
