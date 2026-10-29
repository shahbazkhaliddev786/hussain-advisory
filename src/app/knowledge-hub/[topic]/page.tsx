import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { TopicPage } from "@/components/pasa/topic-page"
import { getTopic, topics } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

// "Articles and insights" has its own route, beside the article pages it lists.
const routedHere = topics.filter((topic) => topic.slug !== "articles")

export function generateStaticParams() {
  return routedHere.map((topic) => ({ topic: topic.slug }))
}

export async function generateMetadata({ params }: PageProps<"/knowledge-hub/[topic]">): Promise<Metadata> {
  const { topic: slug } = await params
  const topic = routedHere.find((candidate) => candidate.slug === slug)
  if (!topic) return {}
  return pageMetadata({ title: topic.name, description: topic.summary, path: routes.topic(topic.slug) })
}

export default async function KnowledgeTopicPage({ params }: PageProps<"/knowledge-hub/[topic]">) {
  const topic = getTopic((await params).topic)
  if (!topic || topic.slug === "articles") notFound()
  return <TopicPage topic={topic} />
}
