/*
 * Content types for the PASA site. They mirror the collections the admin will
 * hold later (milestone 4), so moving from these files to a CMS is a data import.
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
  summary: string
  stages: StageId[]
  areas: string[]
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

export interface Article {
  slug: string
  title: string
  summary: string
  category: string
  href: string
}

export interface TrainingProgram {
  slug: string
  title: string
  level: "Beginner" | "Professional" | "Customized"
  audience: string
  href: string
}

/** A dated run of a program. Unknown details stay as visible placeholders. */
export interface TrainingSession {
  program: TrainingProgram
  dates: string
  format: string
  duration: string
  fee: string
}
