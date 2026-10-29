import type { Service, ServiceSlug } from "./types"

/** The one canonical service list, used by the menu, the service pages and the contact form. */
export const services: Service[] = [
  {
    slug: "procurement-advisory",
    name: "Procurement advisory",
    summary: "Strategy, planning, process support, documentation and reviews.",
    intro:
      "Professional guidance across the procurement cycle: choosing the right strategy, planning realistically, running each step by the rules, and solving problems before they grow.",
    stages: ["plan", "bid", "evaluate", "award"],
    coverage: "Plan, bid, evaluate and award",
    areas: [
      "Procurement strategy",
      "Procurement planning",
      "Procurement process support",
      "Procurement documentation",
      "Procurement reviews",
      "Procurement problem-solving",
    ],
    audience:
      "Government departments, project implementation units, development projects and NGOs that plan and carry out procurement.",
    guides: [
      "procurement-plans",
      "market-analysis",
      "procurement-strategy",
      "specifications-and-terms-of-reference",
    ],
  },
  {
    slug: "bidding-and-tender-support",
    name: "Bidding and tender support",
    summary: "Requirements, bidding documents, notices and clarifications.",
    intro:
      "For organizations undertaking procurement: clear requirements and bidding documents, correct notices, and consistent clarifications, so every bidder competes on the same terms.",
    stages: ["bid", "plan"],
    coverage: "Plan and bid",
    areas: [
      "Requirements and specifications",
      "Bidding and tender documents",
      "Procurement notices",
      "Clarifications",
      "Process guidance",
    ],
    audience:
      "Organizations undertaking procurement, from preparing the requirements to the deadline for submitting bids.",
    guides: [
      "bidding-documents",
      "specifications-and-terms-of-reference",
      "clarifications",
      "pre-bid-meetings",
    ],
  },
  {
    slug: "bid-evaluation-support",
    name: "Bid evaluation support",
    summary: "Methodology, criteria, process and documentation, within the applicable rules.",
    intro:
      "Support for procuring entities and evaluation committees: a sound methodology, criteria applied exactly as published, a well-run process and a complete evaluation report.",
    stages: ["evaluate", "bid"],
    coverage: "Bid and evaluate",
    areas: [
      "Evaluation methodology",
      "Evaluation criteria",
      "Evaluation process support",
      "Evaluation documentation",
    ],
    audience: "Procuring entities and evaluation committees on public and donor-financed procurements.",
    guides: ["responsiveness", "qualification", "evaluation-criteria", "evaluation-reports"],
    note: {
      title: "Independence and the applicable rules",
      text: "PASA supports an evaluation only where it is independent of every bidder and has no conflict of interest, and only within the procurement rules that apply to the procurement. Decisions remain with the procuring entity and its evaluation committee.",
    },
  },
  {
    slug: "contract-management",
    name: "Contract management",
    summary: "Administration, performance, variations, claims, payments and closure.",
    intro:
      "Much of a contract’s value is won or lost after signing. PASA supports contract administration and performance from award to closure.",
    stages: ["manage", "award", "close"],
    coverage: "Award, manage and close",
    areas: [
      "Contract administration",
      "Performance monitoring",
      "Deliverables and milestones",
      "Contract variations",
      "Claims and issues management",
      "Payment and performance monitoring",
      "Contract completion and closure",
    ],
    audience:
      "Contract managers, project teams and procuring entities responsible for contracts after they are signed.",
    guides: ["contract-commencement", "performance-monitoring", "variations", "contract-closure"],
  },
  {
    slug: "capacity-development",
    name: "Capacity development",
    summary: "Capacity assessments, training needs and customized programs.",
    intro:
      "Stronger procurement over the long term: assessing an organization’s procurement capacity, identifying training needs, and building programs that close the gaps.",
    stages: ["plan", "bid", "evaluate", "award", "manage", "close"],
    coverage: "Every stage",
    areas: [
      "Organizational procurement capacity assessments",
      "Training needs identification",
      "Customized capacity-building programs",
    ],
    audience:
      "Government departments, development projects, NGOs and procurement teams that want to strengthen how they work.",
    guides: [
      "understanding-the-procurement-cycle",
      "10-common-procurement-mistakes",
      "what-is-public-procurement",
    ],
  },
  {
    slug: "mentoring",
    name: "Mentoring",
    summary: "Individual and team mentoring, and professional development.",
    intro:
      "Guidance from an experienced practitioner, for procurement staff and development professionals growing into their roles.",
    stages: ["plan", "bid", "evaluate", "award", "manage", "close"],
    coverage: "Every stage",
    areas: ["Individual mentoring", "Procurement-team mentoring", "Professional development"],
    audience:
      "Procurement practitioners, new procurement staff and development professionals, individually or as a team.",
    guides: [
      "understanding-the-procurement-cycle",
      "10-common-procurement-mistakes",
      "what-is-value-for-money",
    ],
  },
]

export const serviceSlugs = services.map((service) => service.slug)

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function serviceName(slug: ServiceSlug) {
  return services.find((service) => service.slug === slug)?.name ?? slug
}
