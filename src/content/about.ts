import { routes } from "./routes"
import type { FinancingInstitution, Link, Value } from "./types"

export const advisor = {
  name: "Naeem Abbas",
  role: "Procurement and contract management advisor",
  summary:
    "More than 30 years in public procurement and contract management, including more than two decades training and mentoring public officials and development professionals.",
  biography:
    "[Full biography to come from Naeem Abbas: career history, the roles and organizations he has worked with, and qualifications.]",
  experience: [
    {
      title: "Public procurement",
      text: "More than 30 years across the procurement cycle, from planning to contract award. [Roles and organizations to come.]",
    },
    {
      title: "Contract management",
      text: "Contract administration, performance, variations and closure. [Examples to come.]",
    },
    {
      title: "Training and mentoring",
      text: "More than two decades training and mentoring public officials and development professionals. [Programs and audiences to come.]",
    },
    {
      title: "Development projects",
      text: "Experience with projects financed by the World Bank, ADB, IFAD, AFD, USAID, FCDO, the EU and international NGOs.",
    },
  ],
  expertise: [
    "Procurement strategy and planning",
    "Specifications, terms of reference and bidding documents",
    "Bid evaluation within the applicable rules",
    "Contract administration and performance",
    "Variations, claims and contract closure",
    "Development partner procurement frameworks",
    "Procurement capacity assessment",
    "Training design and delivery",
  ],
}

export const about = {
  statement:
    "PASA helps public institutions and development projects run procurement that is transparent, efficient and well managed, and helps the people responsible for it build skills that last.",
  intro: [
    "PASA, Public Procurement and Supply Advisor, is the practice of Naeem Abbas, a procurement and contract management specialist with more than 30 years in public procurement.",
    "PASA works with government departments, project implementation units, development projects and NGOs. It advises on procurement and contract management, trains the people who carry them out, and mentors practitioners as they grow into their roles.",
    "Alongside that work, PASA publishes plain-language guides in the Knowledge Hub, so anyone learning procurement can find clear answers.",
  ],
  ways: [
    {
      label: "Advisory support",
      href: routes.services,
      note: "Hands-on support with procurement and contract management, from planning to contract closure.",
    },
    {
      label: "Training",
      href: routes.training,
      note: "Programs for newcomers and practitioners, and training designed around your team.",
    },
    {
      label: "Mentoring",
      href: routes.service("mentoring"),
      note: "One-to-one and team mentoring for procurement practitioners and development professionals.",
    },
    {
      label: "Knowledge sharing",
      href: routes.knowledgeHub,
      note: "Free guides, a procurement dictionary and answers to visitors’ questions in the Knowledge Hub.",
    },
  ] satisfies (Link & { note: string })[],
}

export const vision =
  "To contribute to stronger, transparent, efficient and professionally managed procurement systems."

export const mission =
  "To help public institutions, development projects and procurement professionals plan, run and manage procurement well, through practical advisory support, training, mentoring and freely shared knowledge."

export const values: Value[] = [
  {
    name: "Integrity",
    text: "Honest advice that follows the applicable rules, with any conflict of interest declared up front.",
  },
  {
    name: "Professionalism",
    text: "Careful, well-documented work, delivered on time and to the standard the rules require.",
  },
  {
    name: "Transparency",
    text: "Clear processes and records, so every decision can be explained and checked.",
  },
  {
    name: "Accountability",
    text: "Standing behind the advice given, and helping clients account for public money.",
  },
  {
    name: "Value for money",
    text: "The best balance of quality, cost and risk over the life of a contract, not simply the lowest price.",
  },
  {
    name: "Continuous learning",
    text: "Sharing knowledge freely and keeping up with changing rules and practice.",
  },
]

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

export const assignments =
  "[Selected assignments will be described here, with the permission of the organizations involved.]"
