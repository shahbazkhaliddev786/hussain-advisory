import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { EntryPage, entryMetadata } from "@/components/pasa/entry-page"
import { entries, getEntry } from "@/content/knowledge"

export function generateStaticParams() {
  return entries.filter((entry) => entry.kind === "article").map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge-hub/articles/[slug]">): Promise<Metadata> {
  const entry = getEntry("article", (await params).slug)
  return entry ? entryMetadata(entry) : {}
}

export default async function ArticlePage({ params }: PageProps<"/knowledge-hub/articles/[slug]">) {
  const entry = getEntry("article", (await params).slug)
  if (!entry) notFound()
  return <EntryPage entry={entry} />
}
