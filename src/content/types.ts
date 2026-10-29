/*
 * Content types for the PASA site. They mirror the collections the admin will
 * hold later (milestone 4), so moving from these files to a CMS is a data import.
 *
 * Conventions:
 * - Bracketed text such as "[Dates to be announced]" is a placeholder for a fact the client has not supplied.
 * - `draft: true` marks text written for the client's review; pages show a draft note until it is approved.
 * - Long-form text is Markdown.
 */

export type StageId = "plan" | "bid" | "evaluate" | "award" | "manage" | "close"

export type ServiceSlug =
  | "procurement-advisory"
  | "bidding-and-tender-support"
  | "bid-evaluation-support"
  | "contract-management"
  | "capacity-development"
  | "mentoring"

export interface Link {
  label: string
  href: string
}

export interface Stage {
  id: StageId
  name: string
  /** One line shown on the cycle itself */
  summary: string
  /** Panel heading, e.g. "Planning a procurement" */
  title: string
  text: string
  advice: Link & { note: string }
  training: Link & { note: string }
  guides: Link[]
}

export interface Service {
  slug: ServiceSlug
  name: string
  /** One line for lists and menus */
  summary: string
  /** Lead paragraph on the service page */
  intro: string
  stages: StageId[]
  /** Caption naming the stages, e.g. "Award, manage and close" */
  coverage: string
  /** "What PASA can help with" */
  areas: string[]
  /** "Who it is for" */
  audience: string
  /** A framing note the service must carry, e.g. independence for bid evaluation */
  note?: { title: string; text: string }
  /** Knowledge Hub guides and articles that explain the work, by slug */
  guides: string[]
}

/** The four groups the homepage presents under "What PASA does" */
export interface Offer {
  name: string
  summary: string
  href: string
  stages: StageId[]
  coverage: string
}

export interface NavGroup {
  label: string
  href: string
  sections: { title?: string; links: (Link & { note?: string })[] }[]
}

export interface FinancingInstitution {
  short?: string
  name: string
}

export type TopicSlug =
  | "procurement-basics"
  | "procurement-planning"
  | "procurement-methods"
  | "bidding-and-tendering"
  | "bid-evaluation"
  | "contract-management"
  | "articles"

export interface Topic {
  slug: TopicSlug
  name: string
  summary: string
  stages: StageId[]
  coverage: string
  /** Methods and frameworks content always notes that terms differ between frameworks */
  frameworkNote?: boolean
  /** The PASA service that helps with this part of the cycle */
  service?: ServiceSlug
}

/** A Knowledge Hub guide or article. Without a body it is listed as in preparation. */
export interface Entry {
  kind: "guide" | "article"
  slug: string
  title: string
  summary: string
  topic: TopicSlug
  /** Further topics that list this entry */
  alsoIn?: TopicSlug[]
  stages: StageId[]
  /** Related Procurement Dictionary terms, by slug */
  terms?: string[]
  /** Markdown */
  body?: string
  draft?: boolean
}

export interface Term {
  slug: string
  term: string
  /** "Also called …" */
  aka?: string
  definition: string
  /** Further sections, e.g. "In practice" */
  sections?: { title: string; text: string }[]
  compare?: {
    caption: string
    columns: [string, string]
    rows: [aspect: string, first: string, second: string][]
  }
  /** Stages where the term matters; the first is marked as the main one */
  stages: StageId[]
  stageNotes?: Partial<Record<StageId, string>>
  related?: string[]
  frameworkNote?: boolean
}

export type ProgramLevel = "Beginner" | "Professional"

export interface Program {
  slug: string
  title: string
  level: ProgramLevel
  /** One line for cards: who the program is for */
  summary: string
  overview: string
  objectives: string[]
  audience: string[]
  topics: { title: string; text: string }[]
  trainer: string
  duration: string
  delivery: string
  fee: string
  dates: string
  venue: string
  draft?: boolean
}

/** A program announced for later, without a page of its own yet */
export interface PlannedProgram {
  title: string
  summary: string
  stages: StageId[]
}

export interface Framework {
  name: string
  text: string
  documents: string[]
}

export interface Sector {
  name: string
  text: string
  experience: string
}

export interface Value {
  name: string
  text: string
}
