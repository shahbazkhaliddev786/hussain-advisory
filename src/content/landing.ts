/*
 * All copy for the PASA landing page. Facts come from the client's brief; nothing here
 * is invented (no testimonials, client names or statistics beyond the brief's own).
 */

export const site = {
  name: "PASA",
  fullName: "PASA, Public Procurement and Supply Advisor",
  description:
    "Procurement advisory, training and mentoring from Naeem Abbas: more than 30 years in public procurement and contract management.",
  email: "advisorpasa@gmail.com",
}

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "FAQ", href: "#faq" },
]

export const hero = {
  badge: "30+ years in public procurement",
  title: "Strengthening procurement.",
  highlight: "Delivering better results.",
  intro:
    "PASA is the procurement advisory, training and mentoring practice of Naeem Abbas. Practical support across the whole procurement cycle, and training that builds lasting capacity.",
  audiences: ["Government departments", "Development projects", "NGOs and procurement teams"],
}

/** Required wording: experience with projects financed by these institutions, nothing more. */
export const financiers = ["World Bank", "ADB", "IFAD", "AFD", "USAID", "FCDO", "EU", "International NGOs"]

export const financiersNote =
  "Listed to describe how these projects were financed. It does not imply endorsement by, partnership with, or a client relationship with any of these institutions."

export type ServiceIcon = "compass" | "file" | "scale" | "clipboard" | "growth" | "users"

export const services: { name: string; text: string; points: string[]; icon: ServiceIcon; note?: string }[] =
  [
    {
      name: "Procurement advisory",
      text: "Professional guidance across the procurement cycle, from the first plan to the final review.",
      points: ["Strategy", "Planning", "Process support", "Documentation", "Reviews", "Problem-solving"],
      icon: "compass",
    },
    {
      name: "Bidding and tender support",
      text: "Clear requirements and bidding documents, correct notices and fair clarifications.",
      points: ["Specifications", "Bidding documents", "Notices", "Clarifications"],
      icon: "file",
    },
    {
      name: "Bid evaluation support",
      text: "A sound methodology, criteria applied exactly as published, and a complete evaluation report.",
      points: ["Methodology", "Criteria", "Process", "Reports"],
      icon: "scale",
      note: "Only where PASA is independent of every bidder, within the applicable rules.",
    },
    {
      name: "Contract management",
      text: "Much of a contract’s value is won or lost after signing. Support from award to closure.",
      points: ["Administration", "Milestones", "Variations", "Claims", "Payments", "Closure"],
      icon: "clipboard",
    },
    {
      name: "Capacity development",
      text: "Procurement capacity assessments, training needs and customized capacity-building programs.",
      points: ["Assessments", "Training needs", "Custom programs"],
      icon: "growth",
    },
    {
      name: "Mentoring",
      text: "One-to-one and team mentoring for procurement practitioners and development professionals.",
      points: ["Individuals", "Procurement teams", "Professional growth"],
      icon: "users",
    },
  ]

export const stages = [
  {
    id: "plan",
    name: "Plan",
    summary: "Decide what to buy, how and when.",
    title: "Planning a procurement",
    text: "A realistic plan sets the timing, budget and method for everything that follows.",
    help: [
      "Procurement strategy and plans",
      "Market analysis and cost estimates",
      "Specifications and terms of reference",
    ],
  },
  {
    id: "bid",
    name: "Bid",
    summary: "Invite competition on clear, fair terms.",
    title: "Inviting bids",
    text: "Clear bidding documents and consistent clarifications give every bidder the same chance.",
    help: ["Bidding documents", "Procurement notices", "Clarifications and pre-bid meetings"],
  },
  {
    id: "evaluate",
    name: "Evaluate",
    summary: "Judge each bid against the stated criteria.",
    title: "Evaluating bids",
    text: "Evaluation applies the criteria published in the bidding document, and nothing else.",
    help: ["Evaluation methodology", "Responsiveness and qualification", "Evaluation reports"],
  },
  {
    id: "award",
    name: "Award",
    summary: "Select the successful bidder and sign.",
    title: "Awarding the contract",
    text: "Award follows the evaluation result, then notification and signing as the rules require.",
    help: ["Award and notification", "Contract signature", "A well-prepared start"],
  },
  {
    id: "manage",
    name: "Manage",
    summary: "Keep delivery on time and to standard.",
    title: "Managing the contract",
    text: "Much of a contract’s value is won or lost after signing, in monitoring, variations and payments.",
    help: ["Performance monitoring", "Variations and claims", "Payments"],
  },
  {
    id: "close",
    name: "Close",
    summary: "Confirm completion and close out.",
    title: "Closing the contract",
    text: "Closure confirms every obligation is met, final payments are made and the file is complete.",
    help: ["Completion and handover", "Final payments", "Contract closure"],
  },
]

export const advisor = {
  name: "Naeem Abbas",
  role: "Procurement and contract management advisor",
  summary:
    "Naeem has spent more than 30 years in public procurement and contract management, including more than two decades training and mentoring public officials and development professionals.",
  stats: [
    { value: "30+", label: "years in public procurement and contract management" },
    { value: "20+", label: "years training and mentoring professionals" },
    { value: "6", label: "stages of the procurement cycle, covered end to end" },
  ],
  values: [
    "Integrity",
    "Professionalism",
    "Transparency",
    "Accountability",
    "Value for money",
    "Continuous learning",
  ],
}

export const training = {
  featured: {
    label: "Beginner program",
    title: "Procurement Management Training Program for Beginners",
    text: "A practical introduction to public procurement and contract management, following one procurement from the first plan to closing the contract.",
    topics: ["Procurement basics", "Planning", "Bidding", "Evaluation and award", "Contract management"],
    status: "Dates to be announced",
  },
  customized: {
    label: "For organizations",
    title: "Customized training",
    text: "Designed around your team, the procurements you handle and the rules you work under, at beginner or professional level.",
    audiences: ["Government departments", "Development projects", "NGOs", "Procurement teams"],
  },
}

export const faqs = [
  {
    question: "Who does PASA work with?",
    answer:
      "Government departments, project implementation units, development projects, NGOs and procurement teams, as well as individual practitioners who want mentoring.",
  },
  {
    question: "Do you work on donor-financed projects?",
    answer:
      "Yes. Naeem has experience with projects financed by the World Bank, ADB, IFAD, AFD, USAID, FCDO, the EU and international NGOs. Terms and procedures differ between these frameworks, so the work always starts from the rules that apply to yours.",
  },
  {
    question: "Can training be tailored to our team?",
    answer:
      "Yes. Customized training is built around your team, the procurements you handle and the rules you work under, from beginner to professional level.",
  },
  {
    question: "How independent is bid evaluation support?",
    answer:
      "PASA supports an evaluation only where it is independent of every bidder and has no conflict of interest, and only within the applicable procurement rules. Decisions stay with your evaluation committee.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a short message about your procurement or training need with the form below, or email advisorpasa@gmail.com. Naeem will get back to you.",
  },
]

/** "I am interested in" options for the contact form */
export const interests = [
  { value: "advisory", label: "Procurement advisory" },
  { value: "bidding", label: "Bidding and tender support" },
  { value: "evaluation", label: "Bid evaluation support" },
  { value: "contract-management", label: "Contract management" },
  { value: "capacity", label: "Capacity development" },
  { value: "mentoring", label: "Mentoring" },
  { value: "training", label: "Training" },
  { value: "other", label: "Something else" },
]
