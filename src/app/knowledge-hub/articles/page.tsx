import { notFound } from "next/navigation"

import { TopicPage } from "@/components/pasa/topic-page"
import { getTopic } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

const topic = getTopic("articles")

export const metadata = topic
  ? pageMetadata({ title: topic.name, description: topic.summary, path: routes.topic(topic.slug) })
  : {}

export default function ArticlesPage() {
  if (!topic) notFound()
  return <TopicPage topic={topic} />
}
