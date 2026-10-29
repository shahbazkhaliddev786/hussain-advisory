import { About } from "@/components/landing/about"
import { Approach } from "@/components/landing/approach"
import { Contact } from "@/components/landing/contact"
import { Faq } from "@/components/landing/faq"
import { Financiers } from "@/components/landing/financiers"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Training } from "@/components/landing/training"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Financiers />
      <Services />
      <Approach />
      <About />
      <Training />
      <Faq />
      <Contact />
    </>
  )
}
