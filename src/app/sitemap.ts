import type { MetadataRoute } from "next"

import { terms } from "@/content/dictionary"
import { entries, entryHref, isPublished, topics } from "@/content/knowledge"
import { routes } from "@/content/routes"
import { services } from "@/content/services"
import { programs } from "@/content/training"
import { absoluteUrl } from "@/lib/metadata"

/** Every public page. Guides still in preparation are left out, as they are kept out of search. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.about,
    routes.advisor,
    routes.values,
    routes.experience,
    routes.services,
    ...services.map((service) => routes.service(service.slug)),
    routes.training,
    routes.trainingBeginner,
    routes.trainingProfessional,
    routes.trainingCustomized,
    routes.trainingUpcoming,
    ...programs.map((program) => routes.program(program.slug)),
    routes.knowledgeHub,
    ...topics.map((topic) => routes.topic(topic.slug)),
    ...entries.filter(isPublished).map(entryHref),
    routes.dictionary,
    ...terms.map((term) => routes.term(term.slug)),
    routes.caseStudies,
    routes.resources,
    routes.askPasa,
    routes.partnerProcurement,
    routes.sectors,
    routes.contact,
    routes.privacy,
  ]
  return paths.map((path) => ({ url: absoluteUrl(path) }))
}
