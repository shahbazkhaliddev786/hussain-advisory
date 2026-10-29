import { services } from "@/content/services"
import { programs } from "@/content/training"

/** "I am interested in": the six services, plus training and anything else. */
export const interests = [
  ...services.map((service) => ({ value: service.slug, label: service.name })),
  { value: "training", label: "Training" },
  { value: "other", label: "Something else" },
]

/** Short names used in links, e.g. /contact?topic=advisory. */
const topicAliases: Record<string, string> = { advisory: "procurement-advisory" }

export function interestFromTopic(topic: string | null | undefined) {
  if (!topic) return undefined
  const value = topicAliases[topic] ?? topic
  return interests.some((interest) => interest.value === value) ? value : undefined
}

export const trainingOptions = [
  ...programs.map((program) => ({ value: program.slug, label: program.title })),
  { value: "customized", label: "Customized training for my team" },
]
