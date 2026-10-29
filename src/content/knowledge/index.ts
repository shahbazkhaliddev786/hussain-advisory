import { routes } from "../routes"
import type { Entry, Link, StageId, Topic, TopicSlug } from "../types"
import tenCommonMistakes from "./writing/10-common-procurement-mistakes"
import marketAnalysis from "./writing/market-analysis"
import procurementPlans from "./writing/procurement-plans"
import specificationsAndToR from "./writing/specifications-and-terms-of-reference"
import understandingTheCycle from "./writing/understanding-the-procurement-cycle"
import whatIsPublicProcurement from "./writing/what-is-public-procurement"

const everyStage: StageId[] = ["plan", "bid", "evaluate", "award", "manage", "close"]

/** Knowledge Hub topics, in the order of the brief and the procurement cycle. */
export const topics: Topic[] = [
  {
    slug: "procurement-basics",
    name: "Procurement basics",
    summary: "What procurement is, who does it, and the principles that keep it fair.",
    stages: everyStage,
    coverage: "The whole cycle",
  },
  {
    slug: "procurement-planning",
    name: "Procurement planning",
    summary: "Deciding what to buy, how and when: plans, market analysis, cost estimates and specifications.",
    stages: ["plan"],
    coverage: "Plan",
    service: "procurement-advisory",
  },
  {
    slug: "procurement-methods",
    name: "Procurement methods",
    summary: "The main ways to buy, from open competition to direct procurement, and when each applies.",
    stages: ["plan", "bid"],
    coverage: "Plan and bid",
    frameworkNote: true,
    service: "procurement-advisory",
  },
  {
    slug: "bidding-and-tendering",
    name: "Bidding and tendering",
    summary: "Bidding documents, eligibility, pre-bid meetings, clarifications and bid submission.",
    stages: ["bid"],
    coverage: "Bid",
    service: "bidding-and-tender-support",
  },
  {
    slug: "bid-evaluation",
    name: "Bid evaluation",
    summary: "Checking responsiveness and qualification, applying the criteria and reporting the result.",
    stages: ["evaluate"],
    coverage: "Evaluate",
    service: "bid-evaluation-support",
  },
  {
    slug: "contract-management",
    name: "Contract management",
    summary: "From award and commencement to monitoring, variations, payments, disputes and closure.",
    stages: ["award", "manage", "close"],
    coverage: "Award, manage and close",
    service: "contract-management",
  },
  {
    slug: "articles",
    name: "Articles and insights",
    summary: "Longer pieces on procurement practice and the problems that come up most often.",
    stages: everyStage,
    coverage: "The whole cycle",
  },
]

/**
 * Guides and articles. Entries without a body are listed as in preparation:
 * they show what the Knowledge Hub will cover and wait for PASA's writing.
 */
export const entries: Entry[] = [
  // Procurement basics
  {
    kind: "guide",
    slug: "what-is-procurement",
    title: "What is procurement?",
    summary:
      "Buying the goods, works and services an organization needs, through a planned and documented process.",
    topic: "procurement-basics",
    stages: ["plan"],
    terms: ["value-for-money"],
  },
  {
    kind: "article",
    slug: "what-is-public-procurement",
    title: "What is public procurement?",
    summary: "Who buys, what they buy, and the rules that keep public buying fair and open.",
    topic: "procurement-basics",
    alsoIn: ["articles"],
    stages: everyStage,
    terms: ["value-for-money", "open-competition", "bidding-document"],
    body: whatIsPublicProcurement,
    draft: true,
  },
  {
    kind: "article",
    slug: "understanding-the-procurement-cycle",
    title: "Understanding the procurement cycle",
    summary: "Six stages from planning to closing the contract, and what has to happen at each one.",
    topic: "procurement-basics",
    alsoIn: ["articles"],
    stages: everyStage,
    terms: ["procurement-plan", "evaluation", "award", "contract-closure"],
    body: understandingTheCycle,
    draft: true,
  },
  {
    kind: "guide",
    slug: "goods-works-and-services",
    title: "Goods, works and services",
    summary: "The main categories of procurement, and why the difference matters for method and contract.",
    topic: "procurement-basics",
    stages: ["plan"],
    terms: ["consultant", "specifications"],
  },
  {
    kind: "guide",
    slug: "what-is-competitive-bidding",
    title: "What is competitive bidding?",
    summary: "Inviting several suppliers to bid on the same terms, so the best offer can be chosen fairly.",
    topic: "procurement-basics",
    stages: ["bid"],
    terms: ["open-competition", "bid", "bidder"],
  },
  {
    kind: "guide",
    slug: "what-is-value-for-money",
    title: "What is value for money?",
    summary:
      "The best balance of quality, cost and risk over the life of a contract, not just the lowest price.",
    topic: "procurement-basics",
    stages: ["plan", "evaluate"],
    terms: ["value-for-money"],
  },

  // Procurement planning
  {
    kind: "guide",
    slug: "procurement-plans",
    title: "Procurement plans",
    summary: "What a procurement plan contains, who prepares it, and how to keep it realistic.",
    topic: "procurement-planning",
    stages: ["plan"],
    terms: ["procurement-plan", "cost-estimate", "market-analysis"],
    body: procurementPlans,
    draft: true,
  },
  {
    kind: "guide",
    slug: "market-analysis",
    title: "Market analysis",
    summary:
      "Finding out who can supply what you need, at what price and on what terms, before you go to market.",
    topic: "procurement-planning",
    stages: ["plan"],
    terms: ["market-analysis", "cost-estimate", "value-for-money"],
    body: marketAnalysis,
    draft: true,
  },
  {
    kind: "guide",
    slug: "cost-estimation",
    title: "Cost estimation",
    summary:
      "Building a reliable estimate of what a procurement should cost, and using it to judge bid prices.",
    topic: "procurement-planning",
    stages: ["plan", "evaluate"],
    terms: ["cost-estimate", "market-analysis"],
  },
  {
    kind: "guide",
    slug: "procurement-strategy",
    title: "Procurement strategy",
    summary: "Choosing how to approach the market: packaging, method, contract type and timing.",
    topic: "procurement-planning",
    stages: ["plan"],
    terms: ["procurement-plan", "open-competition"],
  },
  {
    kind: "guide",
    slug: "specifications-and-terms-of-reference",
    title: "Specifications and terms of reference",
    summary: "Describing what you need clearly enough that bidders can price it and you can check it.",
    topic: "procurement-planning",
    alsoIn: ["bidding-and-tendering"],
    stages: ["plan", "bid"],
    terms: ["specifications", "terms-of-reference", "bidding-document", "consultant"],
    body: specificationsAndToR,
    draft: true,
  },

  // Procurement methods
  {
    kind: "guide",
    slug: "open-competition",
    title: "Open competition",
    summary: "Advertising openly so any eligible supplier can bid: the usual method for larger contracts.",
    topic: "procurement-methods",
    stages: ["plan", "bid"],
    terms: ["open-competition", "bidding-document"],
  },
  {
    kind: "guide",
    slug: "request-for-quotations",
    title: "Request for quotations",
    summary: "A simpler method for low-value, readily available items: comparing written quotations.",
    topic: "procurement-methods",
    stages: ["plan", "bid"],
    terms: ["request-for-quotations"],
  },
  {
    kind: "guide",
    slug: "direct-procurement",
    title: "Direct procurement",
    summary:
      "Buying from one supplier without competition, allowed only in limited, justified circumstances.",
    topic: "procurement-methods",
    stages: ["plan"],
    terms: ["direct-procurement"],
  },
  {
    kind: "guide",
    slug: "selecting-consultants",
    title: "Selecting consultants",
    summary: "How consulting services are procured, where quality usually counts as much as price.",
    topic: "procurement-methods",
    stages: ["plan", "bid", "evaluate"],
    terms: ["consultant", "terms-of-reference", "evaluation-criteria"],
  },

  // Bidding and tendering
  {
    kind: "guide",
    slug: "bidding-documents",
    title: "Bidding documents",
    summary: "What a bidding document contains, and why each part matters to bidders and evaluators.",
    topic: "bidding-and-tendering",
    stages: ["bid"],
    terms: ["bidding-document", "addendum", "evaluation-criteria"],
  },
  {
    kind: "guide",
    slug: "eligibility",
    title: "Eligibility",
    summary: "Who may bid at all, and how eligibility differs from qualification.",
    topic: "bidding-and-tendering",
    stages: ["bid", "evaluate"],
    terms: ["eligibility", "qualification-criteria", "conflict-of-interest"],
  },
  {
    kind: "guide",
    slug: "pre-bid-meetings",
    title: "Pre-bid meetings",
    summary:
      "A meeting or site visit where bidders ask questions, with every answer shared with all bidders.",
    topic: "bidding-and-tendering",
    stages: ["bid"],
    terms: ["pre-bid-meeting", "clarification", "addendum"],
  },
  {
    kind: "guide",
    slug: "clarifications",
    title: "Clarifications",
    summary: "How bidders ask questions during bidding, and how answers and addenda are shared fairly.",
    topic: "bidding-and-tendering",
    stages: ["bid"],
    terms: ["clarification", "addendum"],
  },
  {
    kind: "guide",
    slug: "bid-submission",
    title: "Bid submission",
    summary: "Deadlines, sealing, bid securities and the public opening of bids.",
    topic: "bidding-and-tendering",
    stages: ["bid"],
    terms: ["bid", "bid-security", "bid-opening"],
  },

  // Bid evaluation
  {
    kind: "guide",
    slug: "responsiveness",
    title: "Responsiveness",
    summary:
      "Checking that a bid meets the essential requirements of the bidding document before comparing it.",
    topic: "bid-evaluation",
    stages: ["evaluate"],
    terms: ["responsiveness", "evaluation"],
  },
  {
    kind: "guide",
    slug: "qualification",
    title: "Qualification",
    summary: "Checking that a bidder can carry out the contract: experience, finances, staff and equipment.",
    topic: "bid-evaluation",
    alsoIn: ["bidding-and-tendering"],
    stages: ["evaluate", "bid"],
    terms: ["qualification-criteria", "prequalification", "post-qualification"],
  },
  {
    kind: "guide",
    slug: "evaluation-criteria",
    title: "Evaluation criteria",
    summary: "How bids are compared: on price alone, or on a combined score for quality and cost.",
    topic: "bid-evaluation",
    stages: ["evaluate", "bid"],
    terms: ["evaluation-criteria", "qualification-criteria", "value-for-money"],
  },
  {
    kind: "guide",
    slug: "technical-evaluation",
    title: "Technical evaluation",
    summary: "Assessing whether, and how well, each bid meets the technical requirements.",
    topic: "bid-evaluation",
    stages: ["evaluate"],
    terms: ["specifications", "evaluation-committee"],
  },
  {
    kind: "guide",
    slug: "financial-evaluation",
    title: "Financial evaluation",
    summary: "Correcting and comparing prices on an equal basis to find the best-evaluated bid.",
    topic: "bid-evaluation",
    stages: ["evaluate"],
    terms: ["evaluation", "cost-estimate"],
  },
  {
    kind: "guide",
    slug: "evaluation-reports",
    title: "Evaluation reports",
    summary: "Recording how each bid was assessed, so the recommendation can be checked and defended.",
    topic: "bid-evaluation",
    stages: ["evaluate", "award"],
    terms: ["evaluation-report", "evaluation-committee", "award"],
  },

  // Contract management
  {
    kind: "guide",
    slug: "contract-award",
    title: "Contract award",
    summary: "From the evaluation result to notifying bidders and signing the contract.",
    topic: "contract-management",
    stages: ["award"],
    terms: ["award", "standstill-period", "performance-security"],
  },
  {
    kind: "guide",
    slug: "contract-commencement",
    title: "Contract commencement",
    summary: "Starting the contract well: securities, a kick-off meeting, schedules, and who does what.",
    topic: "contract-management",
    stages: ["award", "manage"],
    terms: ["contract", "performance-security"],
  },
  {
    kind: "guide",
    slug: "performance-monitoring",
    title: "Performance monitoring",
    summary: "Tracking deliverables, milestones and quality against what the contract requires.",
    topic: "contract-management",
    stages: ["manage"],
    terms: ["contract", "liquidated-damages"],
  },
  {
    kind: "guide",
    slug: "variations",
    title: "Variations",
    summary: "Changing the scope, quantities or timing of a contract within its terms and the rules.",
    topic: "contract-management",
    stages: ["manage"],
    terms: ["variation", "contract"],
  },
  {
    kind: "guide",
    slug: "payments",
    title: "Payments",
    summary: "Checking invoices against delivered work, and paying on time under the contract terms.",
    topic: "contract-management",
    stages: ["manage"],
    terms: ["contract"],
  },
  {
    kind: "guide",
    slug: "delays",
    title: "Delays",
    summary: "Why contracts run late, what the contract says about it, and how to respond.",
    topic: "contract-management",
    stages: ["manage"],
    terms: ["liquidated-damages", "variation"],
  },
  {
    kind: "guide",
    slug: "disputes",
    title: "Disputes",
    summary: "Resolving disagreements under the contract, from negotiation to formal dispute resolution.",
    topic: "contract-management",
    stages: ["manage", "close"],
    terms: ["contract"],
  },
  {
    kind: "guide",
    slug: "contract-closure",
    title: "Contract closure",
    summary: "Confirming completion, making final payments, releasing securities and closing the file.",
    topic: "contract-management",
    stages: ["close"],
    terms: ["contract-closure", "performance-security"],
  },

  // Articles and insights
  {
    kind: "article",
    slug: "10-common-procurement-mistakes",
    title: "10 common procurement mistakes",
    summary: "Where procurements most often go wrong, and the habits that prevent it.",
    topic: "articles",
    stages: everyStage,
    terms: ["specifications", "evaluation-criteria", "clarification"],
    body: tenCommonMistakes,
    draft: true,
  },
]

export function entryHref(entry: Pick<Entry, "kind" | "slug">) {
  return entry.kind === "article" ? routes.article(entry.slug) : routes.guide(entry.slug)
}

export const isPublished = (entry: Entry) => entry.body !== undefined

export function getEntry(kind: Entry["kind"], slug: string) {
  return entries.find((entry) => entry.kind === kind && entry.slug === slug)
}

/** Entry by slug, whatever its kind. Fails the build on a typo in curated lists. */
export function entryBySlug(slug: string) {
  const entry = entries.find((candidate) => candidate.slug === slug)
  if (!entry) throw new Error(`Unknown Knowledge Hub entry: ${slug}`)
  return entry
}

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug)
}

export function topicName(slug: TopicSlug) {
  return getTopic(slug)?.name ?? slug
}

/** Entries filed under a topic, written ones first. */
export function entriesInTopic(slug: TopicSlug) {
  return entries
    .filter((entry) => entry.topic === slug || entry.alsoIn?.includes(slug))
    .sort((a, b) => Number(isPublished(b)) - Number(isPublished(a)))
}

/** Guide link by slug, for curated lists such as the procurement cycle. Fails the build on a typo. */
export function guideLink(slug: string): Link {
  const entry = getEntry("guide", slug)
  if (!entry) throw new Error(`Unknown Knowledge Hub guide: ${slug}`)
  return { label: entry.title, href: entryHref(entry) }
}

/** The newest articles, for the homepage and the hub. Content has no dates yet, so the list order decides. */
export const latestArticles = entries.filter((entry) => entry.kind === "article" && isPublished(entry))
