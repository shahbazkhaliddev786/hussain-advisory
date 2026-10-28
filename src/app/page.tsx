import { AboutAndAdvisor } from "@/components/home/about-advisor"
import { ClosingCta } from "@/components/home/closing-cta"
import { Experience } from "@/components/home/experience"
import { Hero } from "@/components/home/hero"
import { KnowledgeLatest } from "@/components/home/knowledge-latest"
import { UpcomingTraining } from "@/components/home/upcoming-training"
import { WhatPasaDoes } from "@/components/home/what-pasa-does"

/** Homepage, in the brief's order. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatPasaDoes />
      <AboutAndAdvisor />
      <Experience />
      <KnowledgeLatest />
      <UpcomingTraining />
      <ClosingCta />
    </>
  )
}
