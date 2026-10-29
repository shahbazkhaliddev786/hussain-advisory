import type { Term } from "./types"

/**
 * The Procurement Dictionary. Definitions are framework-neutral and drafted for PASA's review;
 * terms whose meaning depends on the framework carry the framework note.
 */
export const terms: Term[] = [
  {
    slug: "addendum",
    term: "Addendum",
    definition: "A formal change to a bidding document, issued to every bidder before the deadline for bids.",
    sections: [
      {
        title: "In practice",
        text: "An addendum can correct an error, change a requirement or extend the deadline. It becomes part of the bidding document, so bidders must take it into account, and it should go out early enough for them to do so.",
      },
    ],
    stages: ["bid"],
    related: ["clarification", "bidding-document", "pre-bid-meeting"],
  },
  {
    slug: "award",
    term: "Award",
    aka: "contract award",
    definition:
      "The decision to give the contract to the successful bidder, following the evaluation and the approvals the rules require.",
    stages: ["award", "evaluate"],
    stageNotes: {
      evaluate: "The evaluation recommends the award",
      award: "The award is approved and notified",
    },
    related: ["evaluation-report", "standstill-period", "contract", "performance-security"],
    frameworkNote: true,
  },
  {
    slug: "bid",
    term: "Bid",
    aka: "tender, offer",
    definition:
      "A supplier’s formal offer to provide what the bidding document asks for, at a stated price and on the stated terms.",
    stages: ["bid", "evaluate"],
    related: ["bidder", "bidding-document", "bid-security", "tender"],
  },
  {
    slug: "bid-opening",
    term: "Bid opening",
    definition:
      "The session, often public, where the bids received by the deadline are opened and key details such as bidders’ names and prices are read out and recorded.",
    stages: ["bid", "evaluate"],
    related: ["bid", "bid-security", "evaluation"],
  },
  {
    slug: "bid-security",
    term: "Bid security",
    aka: "bid bond, bid guarantee",
    definition:
      "A guarantee submitted with a bid, which the purchaser can claim if the bidder withdraws its bid during its validity period or refuses to sign the contract when required.",
    stages: ["bid"],
    related: ["performance-security", "bid", "bid-opening"],
    frameworkNote: true,
  },
  {
    slug: "bidder",
    term: "Bidder",
    aka: "tenderer",
    definition: "A firm, joint venture or individual that submits a bid.",
    stages: ["bid"],
    related: ["bid", "eligibility", "qualification-criteria"],
  },
  {
    slug: "bidding-document",
    term: "Bidding document",
    aka: "tender document, solicitation document",
    definition:
      "The document that tells bidders what is being bought, how to bid, how bids will be evaluated, and the terms of the contract.",
    sections: [
      {
        title: "In practice",
        text: "Many financiers and national authorities publish standard bidding documents. Using them saves time and reduces mistakes, but the parts specific to each procurement, such as the requirements and the evaluation criteria, still have to be prepared with care.",
      },
    ],
    stages: ["bid", "plan"],
    related: ["specifications", "evaluation-criteria", "addendum", "clarification"],
  },
  {
    slug: "clarification",
    term: "Clarification",
    definition:
      "A bidder’s question about the bidding document, and the purchaser’s answer, which is shared with every bidder without naming who asked.",
    stages: ["bid"],
    related: ["addendum", "pre-bid-meeting", "bidding-document"],
  },
  {
    slug: "conflict-of-interest",
    term: "Conflict of interest",
    definition:
      "A situation where someone involved in a procurement has a personal or business interest that could affect, or appear to affect, their impartiality.",
    sections: [
      {
        title: "In practice",
        text: "Evaluators and advisors are usually asked to declare any conflict before they see the bids. A bidder with a conflict of interest may be ineligible, and an evaluator with one must step aside.",
      },
    ],
    stages: ["evaluate", "bid", "award"],
    related: ["eligibility", "evaluation-committee"],
  },
  {
    slug: "consultant",
    term: "Consultant",
    definition:
      "A firm or individual hired for intellectual and advisory services, such as studies, design, supervision or training, rather than to supply goods or build works.",
    stages: ["plan", "bid", "evaluate"],
    related: ["terms-of-reference", "evaluation-criteria"],
  },
  {
    slug: "contract",
    term: "Contract",
    definition:
      "The legally binding agreement between the purchaser and the supplier, setting out what will be delivered, when, at what price and on what terms.",
    stages: ["manage", "award", "close"],
    related: ["award", "variation", "performance-security", "contract-closure"],
  },
  {
    slug: "contract-closure",
    term: "Contract closure",
    definition:
      "The final stage of a contract: confirming that all obligations are met, making the final payment, releasing securities and completing the file.",
    stages: ["close"],
    related: ["contract", "performance-security"],
  },
  {
    slug: "cost-estimate",
    term: "Cost estimate",
    definition:
      "The purchaser’s own calculation of what a procurement should cost, used to set the budget and to judge whether bid prices are reasonable.",
    stages: ["plan", "evaluate"],
    stageNotes: { plan: "Prepared before bidding", evaluate: "Used to judge bid prices" },
    related: ["market-analysis", "procurement-plan"],
  },
  {
    slug: "direct-procurement",
    term: "Direct procurement",
    aka: "direct contracting, single-source selection",
    definition:
      "Buying from one supplier without competition. Most frameworks allow it only in limited circumstances, which must be justified and recorded.",
    sections: [
      {
        title: "In practice",
        text: "Typical justifications include genuine emergencies, extending an existing contract on the same terms, or a supplier that holds an exclusive right. Even then, the price should be checked against the market.",
      },
    ],
    stages: ["plan"],
    related: ["open-competition", "request-for-quotations"],
    frameworkNote: true,
  },
  {
    slug: "eligibility",
    term: "Eligibility",
    definition:
      "Whether a bidder may take part at all, for example because of nationality rules, debarment or a conflict of interest.",
    sections: [
      {
        title: "Not the same as qualification",
        text: "Eligibility asks whether a bidder is allowed to bid. Qualification asks whether it is able to carry out the contract.",
      },
    ],
    stages: ["bid", "evaluate"],
    related: ["qualification-criteria", "conflict-of-interest", "bidder"],
    frameworkNote: true,
  },
  {
    slug: "evaluation",
    term: "Evaluation",
    definition:
      "The assessment of bids against the criteria in the bidding document, to identify the successful bid.",
    stages: ["evaluate"],
    related: ["evaluation-criteria", "responsiveness", "evaluation-committee", "evaluation-report"],
  },
  {
    slug: "evaluation-committee",
    term: "Evaluation committee",
    definition: "The group of people appointed to examine and evaluate the bids and recommend the award.",
    stages: ["evaluate"],
    related: ["evaluation", "evaluation-report", "conflict-of-interest"],
  },
  {
    slug: "evaluation-criteria",
    term: "Evaluation criteria",
    definition:
      "The factors used to compare the bids that meet the requirements, such as price alone, or a combined score for quality and cost.",
    sections: [
      {
        title: "Not the same as qualification criteria",
        text: "Qualification criteria are pass or fail: a bidder can carry out the contract or it cannot. Evaluation criteria rank the bids that pass, to find the one that offers the best value.",
      },
    ],
    stages: ["evaluate", "bid"],
    stageNotes: { bid: "Stated in the bidding document", evaluate: "Applied to compare bids" },
    related: ["qualification-criteria", "evaluation", "value-for-money"],
  },
  {
    slug: "evaluation-report",
    term: "Evaluation report",
    definition:
      "The record of how the bids were examined and evaluated, ending in a recommendation for award.",
    stages: ["evaluate", "award"],
    related: ["evaluation-committee", "award", "evaluation"],
  },
  {
    slug: "liquidated-damages",
    term: "Liquidated damages",
    definition:
      "A pre-agreed amount the supplier pays for each day or week of delay, set out in the contract and usually capped.",
    stages: ["manage"],
    related: ["contract", "performance-security"],
  },
  {
    slug: "market-analysis",
    term: "Market analysis",
    aka: "market research",
    definition:
      "Research into who can supply what is needed, at what price and on what terms, done before choosing how to procure.",
    stages: ["plan"],
    related: ["cost-estimate", "specifications", "procurement-plan"],
  },
  {
    slug: "open-competition",
    term: "Open competition",
    aka: "open tendering, open bidding",
    definition:
      "A procurement method in which the opportunity is advertised publicly and any eligible supplier may bid.",
    stages: ["bid", "plan"],
    related: ["request-for-quotations", "direct-procurement", "bidding-document"],
    frameworkNote: true,
  },
  {
    slug: "performance-security",
    term: "Performance security",
    aka: "performance bond, performance guarantee",
    definition:
      "A guarantee provided by the supplier after award, which the purchaser can claim if the supplier fails to perform the contract.",
    stages: ["award", "manage", "close"],
    stageNotes: { award: "Provided before signing", close: "Released when obligations are met" },
    related: ["bid-security", "contract", "contract-closure"],
  },
  {
    slug: "post-qualification",
    term: "Post-qualification",
    definition:
      "Checking, after evaluation, that the bidder ranked first meets the qualification criteria, before the contract is awarded.",
    stages: ["evaluate"],
    related: ["qualification-criteria", "prequalification"],
  },
  {
    slug: "pre-bid-meeting",
    term: "Pre-bid meeting",
    aka: "pre-bid conference",
    definition:
      "A meeting, sometimes with a site visit, where potential bidders can ask questions about the bidding document. The minutes are shared with every bidder.",
    stages: ["bid"],
    related: ["clarification", "addendum"],
  },
  {
    slug: "prequalification",
    term: "Prequalification",
    definition:
      "Checking firms’ qualifications before bidding, so that only qualified firms are invited to bid. Common for large or complex contracts.",
    stages: ["bid", "plan"],
    related: ["qualification-criteria", "post-qualification"],
  },
  {
    slug: "procurement-plan",
    term: "Procurement plan",
    definition:
      "A schedule of the procurements an organization or project expects to carry out, with estimated costs, methods and timelines.",
    stages: ["plan"],
    related: ["cost-estimate", "market-analysis"],
  },
  {
    slug: "qualification-criteria",
    term: "Qualification criteria",
    aka: "qualification requirements",
    definition:
      "The minimum requirements a bidder must meet to show it can carry out the contract, such as relevant experience, financial capacity, key staff and equipment.",
    sections: [
      {
        title: "In practice",
        text: "Qualification is usually assessed pass or fail. A bidder either meets each requirement or it does not, and exceeding a requirement earns no extra credit. Depending on the procedure, qualification is checked before bidding (prequalification) or after evaluation, for the bidder ranked first (post-qualification).",
      },
      {
        title: "Not the same as evaluation criteria",
        text: "Evaluation criteria compare the bids that meet the requirements, for example on price, or on a combined score for quality and cost. Qualification asks whether a bidder can do the job; evaluation asks which bid offers the best value.",
      },
    ],
    compare: {
      caption: "Qualification criteria compared with evaluation criteria",
      columns: ["Qualification criteria", "Evaluation criteria"],
      rows: [
        [
          "The question",
          "Can this bidder carry out the contract?",
          "Which compliant bid offers the best value?",
        ],
        ["Applied as", "Pass or fail", "Price, or a score for quality and cost"],
        ["Where it is set", "In the bidding document", "In the bidding document"],
      ],
    },
    stages: ["evaluate", "bid"],
    stageNotes: {
      bid: "Criteria are set in the bidding document",
      evaluate: "Bidders are checked against them",
    },
    related: [
      "evaluation-criteria",
      "eligibility",
      "responsiveness",
      "prequalification",
      "post-qualification",
    ],
    frameworkNote: true,
  },
  {
    slug: "request-for-quotations",
    term: "Request for quotations",
    aka: "RFQ, shopping",
    definition:
      "A simple procurement method that compares written price quotations from several suppliers, used for low-value, readily available goods, works or services.",
    stages: ["bid", "plan"],
    related: ["open-competition", "direct-procurement"],
    frameworkNote: true,
  },
  {
    slug: "responsiveness",
    term: "Responsiveness",
    aka: "substantial responsiveness",
    definition:
      "Whether a bid conforms to all the essential terms, conditions and requirements of the bidding document, without a material deviation.",
    sections: [
      {
        title: "In practice",
        text: "A bid that is not responsive is rejected before the comparison and cannot be made responsive afterwards. Minor deviations that do not affect the substance of the bid can usually be clarified or corrected.",
      },
    ],
    stages: ["evaluate"],
    related: ["evaluation", "qualification-criteria", "bidding-document"],
  },
  {
    slug: "specifications",
    term: "Specifications",
    aka: "technical specifications",
    definition:
      "The description of the goods or works required: their function, performance, standards, quantities and delivery.",
    stages: ["plan", "bid"],
    related: ["terms-of-reference", "bidding-document", "market-analysis"],
  },
  {
    slug: "standstill-period",
    term: "Standstill period",
    definition:
      "A short period after the intended award is announced, during which the contract cannot be signed, so that unsuccessful bidders can raise concerns.",
    stages: ["award"],
    related: ["award", "evaluation-report"],
    frameworkNote: true,
  },
  {
    slug: "tender",
    term: "Tender",
    definition:
      "Another word for a bid, used in many national systems. Tendering is the process of inviting and receiving bids.",
    stages: ["bid"],
    related: ["bid", "bidding-document", "bidder"],
  },
  {
    slug: "terms-of-reference",
    term: "Terms of reference",
    aka: "ToR",
    definition:
      "The description of a consulting assignment: its background, objectives, scope, tasks, deliverables, team and timing.",
    stages: ["plan", "bid"],
    related: ["consultant", "specifications"],
  },
  {
    slug: "value-for-money",
    term: "Value for money",
    definition:
      "The best balance of quality, cost and risk over the whole life of a contract. It is not the same as the lowest price.",
    sections: [
      {
        title: "In practice",
        text: "A cheap item that fails early, or a works contract won with an unrealistic price that ends in variations and delays, can cost more than a higher-priced bid. Value for money looks at the whole cost and the result.",
      },
    ],
    stages: ["plan", "evaluate", "manage"],
    related: ["evaluation-criteria", "cost-estimate"],
  },
  {
    slug: "variation",
    term: "Variation",
    aka: "change order, contract amendment",
    definition:
      "A change to the scope, quantities, timing or price of a contract after it is signed, made under the contract’s terms and the applicable rules.",
    sections: [
      {
        title: "In practice",
        text: "Variations are normal on complex contracts, but each one should be justified, priced and approved before the work is done. Large or repeated variations can be a sign that the original specifications or estimate were weak.",
      },
    ],
    stages: ["manage"],
    related: ["contract", "liquidated-damages"],
  },
]

export const termSlugs = terms.map((term) => term.slug)

export function getTerm(slug: string) {
  return terms.find((term) => term.slug === slug)
}

/** Terms grouped under their first letter, A to Z. */
export function termsByLetter() {
  const groups = new Map<string, Term[]>()
  for (const term of [...terms].sort((a, b) => a.term.localeCompare(b.term))) {
    const letter = term.term[0].toUpperCase()
    groups.set(letter, [...(groups.get(letter) ?? []), term])
  }
  return groups
}

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
