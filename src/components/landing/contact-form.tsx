import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { interests } from "@/content/landing"

/** PASA's Formspree form. Formspree emails each message to the inbox set in its dashboard. */
const FORMSPREE_ACTION = "https://formspree.io/f/xyeendgk"

/**
 * The contact form. It posts straight to Formspree, which shows its own "Thanks" page
 * with a link back to the site. The browser checks the required fields before sending.
 */
export function ContactForm() {
  return (
    <form action={FORMSPREE_ACTION} method="POST" className="relative grid gap-5">
      <input type="hidden" name="_subject" value="New inquiry from the PASA website" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name">
          {(props) => (
            <Input {...props} required maxLength={120} autoComplete="name" placeholder="Your full name" />
          )}
        </Field>
        <Field name="email" label="Email">
          {(props) => (
            <Input
              {...props}
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              spellCheck={false}
              placeholder="you@organization.com"
            />
          )}
        </Field>
      </div>

      <Field name="organization" label="Organization" optional>
        {(props) => (
          <Input
            {...props}
            maxLength={160}
            autoComplete="organization"
            placeholder="Ministry, project or company"
          />
        )}
      </Field>

      <Field name="interest" label="I’m interested in">
        {(props) => (
          <NativeSelect {...props} required defaultValue="">
            <NativeSelectOption value="" disabled>
              Choose a topic
            </NativeSelectOption>
            {interests.map((interest) => (
              <NativeSelectOption key={interest.value} value={interest.label}>
                {interest.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        )}
      </Field>

      <Field name="message" label="Message">
        {(props) => (
          <Textarea
            {...props}
            required
            rows={4}
            maxLength={3000}
            placeholder="Tell us about your procurement or training need"
          />
        )}
      </Field>

      {/* Formspree's spam trap: people never see this field, so anything typed into it came from a bot. */}
      <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full">
        Send inquiry
        <ArrowRightIcon className="transition-transform duration-(--duration-quick) group-hover/button:translate-x-0.5" />
      </Button>
      <p className="text-center text-xs text-muted">Your details are only used to reply to you.</p>
    </form>
  )
}

/** Label and control, wired together for assistive technology. */
function Field({
  name,
  label,
  optional,
  children,
}: {
  name: string
  label: string
  optional?: boolean
  children: (props: { id: string; name: string }) => React.ReactNode
}) {
  const id = `contact-${name}`
  return (
    <div className="grid content-start gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children({ id, name })}
    </div>
  )
}
