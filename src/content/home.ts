import { routes } from "./routes"
import type { Offer } from "./types"

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
