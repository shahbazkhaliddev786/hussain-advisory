import { routes } from "./routes"
import type { Article, FinancingInstitution, Offer, TrainingSession } from "./types"

export const hero = {
  title: ["Strengthening procurement.", "Building capacity.", "Delivering better results."],
  intro:
    "PASA is the procurement advisory practice of Naeem Abbas: more than 30 years in public procurement and contract management, and two decades training public officials and development professionals.",
}

/** "What PASA does": the brief's four groups, each tied to the stages it covers. */
export const offers: Offer[] = [
  {
    name: "Procurement advisory",
    summary:
      "Professional guidance across the procurement cycle: strategy, planning, bidding documents, evaluation and reviews.",
    href: routes.service("procurement-advisory"),
    stages: ["plan", "bid", "evaluate", "award"],
    coverage: "Plan, bid, evaluate and award",
  },
  {
    name: "Contract management",
    summary:
      "Supporting effective contract administration and performance: milestones, variations, claims, payments and closure.",
    href: routes.service("contract-management"),
    stages: ["award", "manage", "close"],
    coverage: "Award, manage and close",
  },
  {
    name: "Training and capacity development",
    summary:
      "Building practical procurement knowledge and professional capability, from beginner programs to training designed for your team.",
    href: routes.training,
    stages: ["plan", "bid", "evaluate", "award", "manage", "close"],
    coverage: "Every stage, plan to close",
  },
  {
    name: "Mentoring",
    summary: "Supporting procurement practitioners and development professionals, one to one or as a team.",
    href: routes.service("mentoring"),
    stages: ["plan", "bid", "evaluate", "award", "manage", "close"],
    coverage: "Every stage, plan to close",
  },
]

export const about = {
  statement:
    "PASA helps public institutions and development projects run procurement that is transparent, efficient and well managed, and helps the people responsible for it build skills that last.",
  values: [
    "Integrity",
    "Professionalism",
    "Transparency",
    "Accountability",
    "Value for money",
    "Continuous learning",
  ],
}

export const advisor = {
  name: "Naeem Abbas",
  role: "Procurement and contract management advisor",
  summary:
    "More than 30 years in public procurement and contract management, including more than two decades training and mentoring public officials and development professionals.",
}

/** Required wording: experience with projects financed by these institutions, nothing more. */
export const financiers: FinancingInstitution[] = [
  { name: "World Bank" },
  { short: "ADB", name: "Asian Development Bank" },
  { short: "IFAD", name: "International Fund for Agricultural Development" },
  { short: "AFD", name: "Agence Française de Développement" },
  { short: "USAID", name: "US Agency for International Development" },
  { short: "FCDO", name: "UK Foreign, Commonwealth & Development Office" },
  { short: "EU", name: "European Union" },
  { name: "International NGOs" },
]

export const financiersDisclaimer =
  "Listed to describe how these projects were financed. It does not imply endorsement by, partnership with, or a client relationship with any of these institutions."

export const latestArticles: Article[] = [
  {
    slug: "what-is-public-procurement",
    title: "What is public procurement?",
    summary: "Who buys, what they buy, and the rules that keep public buying fair and open.",
    category: "Procurement basics",
    href: routes.article("what-is-public-procurement"),
  },
  {
    slug: "understanding-the-procurement-cycle",
    title: "Understanding the procurement cycle",
    summary: "Six stages from planning to closing the contract, and what has to happen at each one.",
    category: "Procurement basics",
    href: routes.article("understanding-the-procurement-cycle"),
  },
  {
    slug: "10-common-procurement-mistakes",
    title: "10 common procurement mistakes",
    summary: "Where procurements most often go wrong, and the habits that prevent it.",
    category: "Articles and insights",
    href: routes.article("10-common-procurement-mistakes"),
  },
]

/** Bracketed values are placeholders until the client confirms them. */
export const upcomingSession: TrainingSession = {
  program: {
    slug: "procurement-management-for-beginners",
    title: "Procurement Management Training Program for Beginners",
    level: "Beginner",
    audience: "For people new to public procurement, and staff moving into procurement roles.",
    href: routes.program("procurement-management-for-beginners"),
  },
  dates: "[Dates to be announced]",
  format: "[Online or venue]",
  duration: "[Number of days]",
  fee: "[Fee, or free]",
}
