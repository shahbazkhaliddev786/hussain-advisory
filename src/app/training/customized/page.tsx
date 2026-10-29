import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/pasa/cta-band"
import { PageHeader } from "@/components/pasa/page-header"
import { PageSection } from "@/components/pasa/page-section"
import { stages } from "@/content/cycle"
import { routes } from "@/content/routes"
import { customized } from "@/content/training"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Customized training",
  description:
    "Procurement training designed around your team: for government departments, development projects, NGOs and procurement teams.",
  path: routes.trainingCustomized,
})

export default function CustomizedTrainingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Training", href: routes.training },
          { label: "Customized training", href: routes.trainingCustomized },
        ]}
        title="Customized training"
        intro="Training designed around your team, the procurements you handle and the rules you work under."
      >
        <Button asChild size="lg" className="mt-8">
          <Link href={routes.trainingInquiry}>Ask about training for your team</Link>
        </Button>
      </PageHeader>

      <PageSection id="for-title" title="Who it is for" layout="split">
        <ul className="grid gap-x-10 border-t-2 border-navy sm:grid-cols-2">
          {customized.audiences.map((audience) => (
            <li key={audience} className="border-b border-hairline py-4 text-lg font-medium">
              {audience}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="how-title" title="How it works" layout="split" ruled>
        <ol className="grid gap-8">
          {customized.steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-x-2">
              <span className="pt-0.5 text-2xl leading-none type-numeral text-subtle">{i + 1}</span>
              <span>
                <span className="block text-xl leading-snug font-[700] font-stretch-108%">{step.title}</span>
                <span className="mt-1.5 block max-w-[56ch] text-[17px] leading-relaxed text-ink-2">
                  {step.text}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        id="cover-title"
        title="What it can cover"
        intro="Any stage of the procurement cycle, at beginner or professional level."
        tone="mist"
      >
        <ul className="grid gap-x-10 border-t-2 border-navy sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <li key={stage.id} className="border-b border-rule pt-5 pb-6">
              <span className="text-[13.5px] type-numeral text-subtle">{i + 1}</span>
              <span className="mt-1 block text-[22px] leading-tight font-[720] font-stretch-112%">
                {stage.title}
              </span>
              <span className="mt-1.5 block text-[15.5px] leading-normal text-ink-2">{stage.summary}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      <CtaBand
        title="Plan training for your team"
        text="Tell PASA who will attend and what they work on, and Naeem will propose topics, format and duration."
        action={{ label: "Ask about customized training", href: routes.trainingInquiry }}
      />
    </>
  )
}
