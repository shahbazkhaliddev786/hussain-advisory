import { routes } from "./routes"
import type { Stage, StageId } from "./types"

const beginners = {
  label: "Procurement Management for Beginners",
  href: routes.program("procurement-management-for-beginners"),
}
const customized = { label: "Customized training", href: routes.trainingCustomized }

/** The procurement cycle: the map the whole site is organized around. */
export const stages: Stage[] = [
  {
    id: "plan",
    name: "Plan",
    summary: "Decide what to buy, how and when.",
    title: "Planning a procurement",
    text: "A realistic plan sets the timing, budget and method for everything that follows.",
    advice: {
      label: "Procurement advisory",
      href: routes.service("procurement-advisory"),
      note: "Strategy, procurement plans, market analysis and documentation.",
    },
    training: { ...beginners, note: "Covers the whole cycle, starting with planning." },
    guides: [
      { label: "Procurement plans", href: routes.guide("procurement-plans") },
      { label: "Market analysis", href: routes.guide("market-analysis") },
      {
        label: "Specifications and terms of reference",
        href: routes.guide("specifications-and-terms-of-reference"),
      },
    ],
  },
  {
    id: "bid",
    name: "Bid",
    summary: "Invite competition on clear, fair terms.",
    title: "Inviting bids",
    text: "Clear bidding documents and consistent clarifications give every bidder the same chance.",
    advice: {
      label: "Bidding and tender support",
      href: routes.service("bidding-and-tender-support"),
      note: "Requirements, bidding documents, notices and clarifications.",
    },
    training: { ...customized, note: "Designed around your team and the rules you work under." },
    guides: [
      { label: "Bidding documents", href: routes.guide("bidding-documents") },
      { label: "Pre-bid meetings", href: routes.guide("pre-bid-meetings") },
      { label: "Clarifications", href: routes.guide("clarifications") },
    ],
  },
  {
    id: "evaluate",
    name: "Evaluate",
    summary: "Judge each bid against the stated criteria.",
    title: "Evaluating bids",
    text: "Evaluation applies the criteria published in the bidding document, and nothing else.",
    advice: {
      label: "Bid evaluation support",
      href: routes.service("bid-evaluation-support"),
      note: "Methodology, criteria and reports, within the applicable rules.",
    },
    training: { ...customized, note: "Designed around your team and the rules you work under." },
    guides: [
      { label: "Responsiveness", href: routes.guide("responsiveness") },
      { label: "Qualification", href: routes.guide("qualification") },
      { label: "Evaluation reports", href: routes.guide("evaluation-reports") },
    ],
  },
  {
    id: "award",
    name: "Award",
    summary: "Select the successful bidder and sign.",
    title: "Awarding the contract",
    text: "Award follows the evaluation result, then notification and signing as the rules require.",
    advice: {
      label: "Contract management",
      href: routes.service("contract-management"),
      note: "Award, commencement and setting up the contract to succeed.",
    },
    training: { ...beginners, note: "Covers the whole cycle, including award." },
    guides: [
      { label: "Contract award", href: routes.guide("contract-award") },
      { label: "Contract commencement", href: routes.guide("contract-commencement") },
    ],
  },
  {
    id: "manage",
    name: "Manage",
    summary: "Keep delivery on time, on budget and to standard.",
    title: "Managing the contract",
    text: "Much of a contract’s value is won or lost after signing, in monitoring, variations and payments.",
    advice: {
      label: "Contract management",
      href: routes.service("contract-management"),
      note: "Administration, performance, variations, claims and payments.",
    },
    training: { ...customized, note: "Designed around your team and the rules you work under." },
    guides: [
      { label: "Performance monitoring", href: routes.guide("performance-monitoring") },
      { label: "Variations", href: routes.guide("variations") },
      { label: "Delays", href: routes.guide("delays") },
    ],
  },
  {
    id: "close",
    name: "Close",
    summary: "Confirm completion and close the contract.",
    title: "Closing the contract",
    text: "Closure confirms every obligation is met, final payments are made and the file is complete.",
    advice: {
      label: "Contract management",
      href: routes.service("contract-management"),
      note: "Completion, handover and contract closure.",
    },
    training: { ...beginners, note: "Covers the whole cycle, through to closure." },
    guides: [
      { label: "Contract closure", href: routes.guide("contract-closure") },
      { label: "Disputes", href: routes.guide("disputes") },
    ],
  },
]

export const stageIds = stages.map((stage) => stage.id) as StageId[]
