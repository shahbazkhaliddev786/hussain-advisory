import type { PlannedProgram, Program } from "./types"

/** Programs with a page of their own. Bracketed details wait for the client. */
export const programs: Program[] = [
  {
    slug: "procurement-management-for-beginners",
    title: "Procurement Management Training Program for Beginners",
    level: "Beginner",
    summary: "For people new to public procurement, and staff moving into procurement roles.",
    overview:
      "A practical introduction to public procurement and contract management. The program follows one procurement through the whole cycle, from the first plan to closing the contract, and explains what has to happen at each stage and why.",
    objectives: [
      "Explain what public procurement is and the principles behind it.",
      "Describe the six stages of the procurement cycle and what each one produces.",
      "Read a procurement plan, a bidding document and an evaluation report with confidence.",
      "Recognize the most common procurement mistakes and how to avoid them.",
      "Understand the basics of managing a contract after it is signed.",
    ],
    audience: [
      "People new to public procurement",
      "Staff moving into procurement or contract management roles",
      "Project staff on donor-financed projects who work with procurement",
      "Officials who review or approve procurement decisions",
    ],
    topics: [
      {
        title: "Procurement basics",
        text: "What public procurement is, its main principles, and the difference between goods, works and services.",
      },
      {
        title: "Planning",
        text: "Procurement plans, market analysis, cost estimates, specifications and terms of reference.",
      },
      {
        title: "Procurement methods",
        text: "Open competition, requests for quotations and other methods, and when each applies.",
      },
      {
        title: "Bidding",
        text: "Bidding documents, notices, clarifications and bid submission.",
      },
      {
        title: "Evaluation and award",
        text: "Responsiveness, qualification, evaluation criteria, the evaluation report and award.",
      },
      {
        title: "Managing the contract",
        text: "Performance monitoring, variations, payments, delays and contract closure.",
      },
    ],
    trainer: "Naeem Abbas",
    duration: "[Number of days]",
    delivery: "[Online or in person]",
    fee: "[Fee, or free]",
    dates: "[Dates to be announced]",
    venue: "[Venue, or online]",
    draft: true,
  },
]

/** Professional programs the brief plans to introduce later. */
export const plannedPrograms: PlannedProgram[] = [
  {
    title: "Procurement planning",
    summary:
      "Building realistic procurement plans, with market analysis, cost estimates and a clear strategy.",
    stages: ["plan"],
  },
  {
    title: "Bidding documents",
    summary: "Preparing clear, complete bidding documents and handling clarifications fairly.",
    stages: ["bid"],
  },
  {
    title: "Bid evaluation",
    summary: "Running a sound, well-documented evaluation within the applicable rules.",
    stages: ["evaluate"],
  },
  {
    title: "Contract management",
    summary: "Administering contracts: performance, variations, claims, payments and closure.",
    stages: ["award", "manage", "close"],
  },
  {
    title: "Development partner procurement",
    summary:
      "Working under the procurement frameworks of development partners such as the World Bank, ADB, IFAD and AFD.",
    stages: ["plan", "bid", "evaluate", "award", "manage", "close"],
  },
]

export const customized = {
  audiences: ["Government departments", "Development projects", "NGOs", "Organizations", "Procurement teams"],
  steps: [
    {
      title: "Tell PASA about your team",
      text: "Who will attend, the procurements they handle and the rules they work under.",
    },
    {
      title: "Agree the focus",
      text: "PASA identifies the training needs with you, then proposes topics, format and duration.",
    },
    {
      title: "Training built around your work",
      text: "Sessions use your own procurement rules and realistic examples from your sector.",
    },
  ],
}

export const programSlugs = programs.map((program) => program.slug)

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug)
}

/** The program shown as upcoming on the homepage and the training pages. */
export const featuredProgram = programs[0]
