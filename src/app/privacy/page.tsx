import { DraftNote } from "@/components/pasa/notes"
import { PageHeader } from "@/components/pasa/page-header"
import { Prose } from "@/components/pasa/prose"
import { privacy } from "@/content/privacy"
import { routes } from "@/content/routes"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Privacy",
  description: privacy.intro,
  path: routes.privacy,
})

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy" intro={privacy.intro} />
      <div className="container-page py-12 md:py-16">
        {privacy.draft && (
          <DraftNote className="mb-10">
            Draft notice, waiting for PASA’s review before launch. It may need advice on the data protection
            law that applies.
          </DraftNote>
        )}
        <Prose>{privacy.body}</Prose>
      </div>
    </>
  )
}
