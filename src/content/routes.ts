import type { ServiceSlug } from "./types"

/** Every internal URL in one place, so the sitemap and the links never drift apart. */
export const routes = {
  home: "/",

  about: "/about",
  advisor: "/about/naeem-abbas",
  values: "/about/vision-mission-values",
  experience: "/about/experience",

  services: "/services",
  service: (slug: ServiceSlug) => `/services/${slug}`,

  training: "/training",
  trainingBeginner: "/training/beginner",
  trainingProfessional: "/training/professional",
  trainingCustomized: "/training/customized",
  trainingUpcoming: "/training/upcoming",
  program: (slug: string) => `/training/programs/${slug}`,

  knowledgeHub: "/knowledge-hub",
  topic: (slug: string) => `/knowledge-hub/${slug}`,
  guide: (slug: string) => `/knowledge-hub/guides/${slug}`,
  article: (slug: string) => `/knowledge-hub/articles/${slug}`,
  dictionary: "/knowledge-hub/dictionary",
  term: (slug: string) => `/knowledge-hub/dictionary/${slug}`,
  caseStudies: "/knowledge-hub/case-studies",
  resources: "/knowledge-hub/resources",
  askPasa: "/knowledge-hub/ask-pasa",

  partnerProcurement: "/expertise/development-partner-procurement",
  sectors: "/expertise/sectors",

  contact: "/contact",
  requestSupport: "/contact?topic=advisory",
  trainingInquiry: "/contact?topic=training",
  privacy: "/privacy",
} as const
