import type { Framework, Sector } from "./types"

/** Educational overview of development partners' procurement rules. Drafted for review. */
export const partnerProcurement = {
  intro:
    "How procurement works on projects financed by development partners, and why the rules can differ from national procedures.",
  sections: [
    {
      title: "What a procurement framework is",
      text: "When a development partner finances a project, the financing agreement states which procurement rules apply to the contracts it pays for. These rules, the financier’s procurement framework, set out the methods, documents, thresholds and review steps the project must follow. They can differ from the national procurement law of the same country.",
    },
    {
      title: "Why it matters",
      text: "A contract procured under the wrong procedure may not be eligible for financing. Project teams need to know which rules apply, which standard documents to use, and when the financier must review a decision before it is made.",
    },
  ],
  draft: true,
}

export const frameworks: Framework[] = [
  {
    name: "World Bank",
    text: "Investment projects financed by the World Bank follow its Procurement Framework. Borrowers apply the Procurement Regulations for IPF Borrowers, use the Bank’s standard procurement documents and agree a procurement plan with the Bank.",
    documents: ["Procurement Regulations for IPF Borrowers", "Standard Procurement Documents"],
  },
  {
    name: "Asian Development Bank (ADB)",
    text: "Projects financed by ADB follow its Procurement Policy and the Procurement Regulations for ADB Borrowers, with ADB’s standard bidding documents and guidance notes.",
    documents: ["ADB Procurement Policy", "Procurement Regulations for ADB Borrowers"],
  },
  {
    name: "International Fund for Agricultural Development (IFAD)",
    text: "IFAD-financed projects follow IFAD’s Project Procurement Guidelines and Procurement Handbook. National procurement rules apply to the extent they are consistent with IFAD’s guidelines.",
    documents: ["IFAD Project Procurement Guidelines", "IFAD Procurement Handbook"],
  },
  {
    name: "Agence Française de Développement (AFD)",
    text: "Contracts financed by AFD follow its procurement guidelines for AFD-financed contracts in foreign countries, which set out the principles and procedures the contracting authority must respect.",
    documents: ["Procurement Guidelines for AFD-Financed Contracts in Foreign Countries"],
  },
  {
    name: "Other development partners",
    text: "Bilateral agencies, the EU, UN bodies and other financiers each have their own procurement rules. The financing agreement states which rules apply.",
    documents: [],
  },
]

export const frameworksCaveat =
  "Financiers update their rules from time to time. Always use the version named in the financing agreement."

/** Sectors from the brief. Naeem's experience in each is still to be described. */
export const sectors: Sector[] = [
  {
    name: "Energy",
    text: "Generation, transmission and distribution works, equipment supply and related consulting services.",
    experience: "[Naeem’s experience in energy projects]",
  },
  {
    name: "Transport",
    text: "Roads, bridges and other transport infrastructure, with design and supervision consultancies.",
    experience: "[Naeem’s experience in transport projects]",
  },
  {
    name: "Urban infrastructure",
    text: "Water supply, sanitation, drainage and other municipal works and services.",
    experience: "[Naeem’s experience in urban infrastructure projects]",
  },
  {
    name: "Agriculture",
    text: "Inputs, equipment, irrigation works and rural development programs.",
    experience: "[Naeem’s experience in agriculture projects]",
  },
  {
    name: "Natural resources",
    text: "Watershed, forestry and environmental management works and services.",
    experience: "[Naeem’s experience in natural resources projects]",
  },
  {
    name: "Community development",
    text: "Community-driven projects, small works and procurement carried out by communities themselves.",
    experience: "[Naeem’s experience in community development projects]",
  },
  {
    name: "Emergency response",
    text: "Urgent procurement after disasters and in crises, where speed and accountability both matter.",
    experience: "[Naeem’s experience in emergency response projects]",
  },
]

/** Anchor for a sector on the sectors page, e.g. "urban-infrastructure". */
export const sectorId = (name: string) => name.toLowerCase().replace(/[^a-z]+/g, "-")
