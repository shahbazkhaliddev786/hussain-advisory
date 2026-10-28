import { routes } from "./routes"
import type { NavGroup } from "./types"

export const site = {
  name: "PASA",
  fullName: "PASA, Public Procurement and Supply Advisor",
  description:
    "Procurement advisory, training and mentoring from Naeem Abbas: more than 30 years in public procurement and contract management.",
  email: "advisorpasa@gmail.com",
} as const

/** Header navigation. Home is the logo; Media follows after launch. */
export const mainNav: NavGroup[] = [
  {
    label: "About",
    href: routes.about,
    sections: [
      {
        links: [
          { label: "About PASA", href: routes.about },
          { label: "Meet the advisor", href: routes.advisor },
          { label: "Vision, mission and values", href: routes.values },
          { label: "Experience", href: routes.experience },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: routes.services,
    sections: [
      {
        links: [
          { label: "Procurement advisory", href: routes.service("procurement-advisory"), note: "Plan" },
          {
            label: "Bidding and tender support",
            href: routes.service("bidding-and-tender-support"),
            note: "Bid",
          },
          {
            label: "Bid evaluation support",
            href: routes.service("bid-evaluation-support"),
            note: "Evaluate",
          },
          {
            label: "Contract management",
            href: routes.service("contract-management"),
            note: "Award, manage and close",
          },
          {
            label: "Capacity development",
            href: routes.service("capacity-development"),
            note: "Every stage",
          },
          { label: "Mentoring", href: routes.service("mentoring"), note: "Every stage" },
        ],
      },
    ],
  },
  {
    label: "Training",
    href: routes.training,
    sections: [
      {
        links: [
          { label: "Training programs", href: routes.training },
          { label: "Beginner programs", href: routes.trainingBeginner },
          { label: "Professional programs", href: routes.trainingProfessional },
          { label: "Customized training", href: routes.trainingCustomized },
          { label: "Upcoming training", href: routes.trainingUpcoming },
        ],
      },
    ],
  },
  {
    label: "Knowledge Hub",
    href: routes.knowledgeHub,
    sections: [
      {
        title: "Topics",
        links: [
          { label: "Procurement basics", href: routes.topic("procurement-basics") },
          { label: "Procurement planning", href: routes.topic("procurement-planning") },
          { label: "Procurement methods", href: routes.topic("procurement-methods") },
          { label: "Bidding and tendering", href: routes.topic("bidding-and-tendering") },
          { label: "Bid evaluation", href: routes.topic("bid-evaluation") },
          { label: "Contract management", href: routes.topic("contract-management") },
        ],
      },
      {
        title: "Reference",
        links: [
          { label: "Procurement Dictionary", href: routes.dictionary },
          { label: "Articles and insights", href: routes.topic("articles") },
          { label: "Case studies", href: routes.caseStudies },
          { label: "Resources and downloads", href: routes.resources },
          { label: "Ask PASA", href: routes.askPasa },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    href: routes.partnerProcurement,
    sections: [
      {
        links: [
          {
            label: "Development partner procurement",
            href: routes.partnerProcurement,
            note: "World Bank, ADB, IFAD, AFD and other development partners",
          },
          {
            label: "Sectors",
            href: routes.sectors,
            note: "Energy, transport, urban infrastructure, agriculture and more",
          },
        ],
      },
    ],
  },
]

export const footerNav = [
  {
    title: "About",
    links: [
      { label: "About PASA", href: routes.about },
      { label: "Meet the advisor", href: routes.advisor },
      { label: "Vision, mission and values", href: routes.values },
      { label: "Experience", href: routes.experience },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Procurement advisory", href: routes.service("procurement-advisory") },
      { label: "Bidding and tender support", href: routes.service("bidding-and-tender-support") },
      { label: "Bid evaluation support", href: routes.service("bid-evaluation-support") },
      { label: "Contract management", href: routes.service("contract-management") },
      { label: "Capacity development", href: routes.service("capacity-development") },
      { label: "Mentoring", href: routes.service("mentoring") },
    ],
  },
  {
    title: "Learn and train",
    links: [
      { label: "Training programs", href: routes.training },
      { label: "Knowledge Hub", href: routes.knowledgeHub },
      { label: "Procurement Dictionary", href: routes.dictionary },
      { label: "Ask PASA", href: routes.askPasa },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Request advisory support", href: routes.requestSupport },
      { label: "Training inquiry", href: routes.trainingInquiry },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
]
