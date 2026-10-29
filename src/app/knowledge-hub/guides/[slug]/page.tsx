import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { EntryPage, entryMetadata } from "@/components/pasa/entry-page"
import { entries, getEntry } from "@/content/knowledge"

export function generateStaticParams() {
  return entries.filter((entry) => entry.kind === "guide").map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge-hub/guides/[slug]">): Promise<Metadata> {
  const entry = getEntry("guide", (await params).slug)
  return entry ? entryMetadata(entry) : {}
}

export default async function GuidePage({ params }: PageProps<"/knowledge-hub/guides/[slug]">) {
  const entry = getEntry("guide", (await params).slug)
  if (!entry) notFound()
  return <EntryPage entry={entry} />
}
