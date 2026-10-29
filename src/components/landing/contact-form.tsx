"use client"

import { useActionState, useEffect, useRef } from "react"
import { ArrowRightIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { interests, site } from "@/content/landing"
import { sendInquiry } from "@/lib/forms/actions"
import { HONEYPOT, initialFormState } from "@/lib/forms/state"

/** The contact form. Works without JavaScript; validated on the server. */
export function ContactForm() {
  const [state, action, pending] = useActionState(sendInquiry, initialFormState)
  const formRef = useRef<HTMLFormElement>(null)
  const sentRef = useRef<HTMLHeadingElement>(null)
  const values = state.values ?? {}
  const errors = state.errors ?? {}

  // After a failed submit, take the visitor to the first field that needs attention.
  useEffect(() => {
    if (state.status === "invalid")
      formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus()
    if (state.status === "sent") sentRef.current?.focus()
  }, [state])

  if (state.status === "sent") {
    return (
      <div className="grid place-items-center py-12 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-brand-50 text-brand-600 ring-8 ring-brand-50/60">
          <CheckIcon aria-hidden="true" strokeWidth={2.5} className="size-6" />
        </span>
        <h3 ref={sentRef} tabIndex={-1} className="mt-6 text-xl font-semibold text-navy outline-none">
          Thank you, your message has been sent
        </h3>
        <p className="mt-2 text-body">Naeem will get back to you by email.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} noValidate className="relative grid gap-5">
      {state.status === "unavailable" && (
        <div
          role="alert"
          className="rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-navy ring-1 ring-amber-200"
        >
          <p className="font-semibold">Your message wasn’t sent</p>
          <p className="mt-1">
            This form isn’t connected yet. Please email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-brand-700 underline underline-offset-2"
            >
              {site.email}
            </a>
            . Your message is still below, so you can copy it.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" error={errors.name}>
          {(props) => <Input {...props} autoComplete="name" defaultValue={values.name} />}
        </Field>
        <Field name="email" label="Email" error={errors.email}>
          {(props) => (
            <Input
              {...props}
              type="email"
              autoComplete="email"
              spellCheck={false}
              defaultValue={values.email}
            />
          )}
        </Field>
      </div>

      <Field name="organization" label="Organization" optional error={errors.organization}>
        {(props) => <Input {...props} autoComplete="organization" defaultValue={values.organization} />}
      </Field>

      <Field name="interest" label="I’m interested in" error={errors.interest}>
        {(props) => (
          // React keeps typed text after a failed submit, but resets a select to its first default:
          // remounting with the submitted value keeps the visitor's choice.
          <NativeSelect {...props} key={values.interest ?? ""} defaultValue={values.interest ?? ""}>
            <NativeSelectOption value="" disabled>
              Choose a topic
            </NativeSelectOption>
            {interests.map((interest) => (
              <NativeSelectOption key={interest.value} value={interest.value}>
                {interest.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        )}
      </Field>

      <Field name="message" label="Message" error={errors.message}>
        {(props) => (
          <Textarea
            {...props}
            rows={4}
            placeholder="Tell us about your procurement or training need"
            defaultValue={values.message}
          />
        )}
      </Field>

      <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" size="lg" disabled={pending} className="mt-1 w-full">
        {pending ? "Sending…" : "Send inquiry"}
        {!pending && (
          <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
        )}
      </Button>
      <p className="text-center text-xs text-muted">Your details are only used to reply to you.</p>
    </form>
  )
}

/** Label, control and error message, wired together for assistive technology. */
function Field({
  name,
  label,
  optional,
  error,
  children,
}: {
  name: string
  label: string
  optional?: boolean
  error?: string
  children: (props: {
    id: string
    name: string
    "aria-invalid"?: true
    "aria-describedby"?: string
  }) => React.ReactNode
}) {
  const id = `contact-${name}`
  return (
    <div className="grid content-start gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children({
        id,
        name,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? `${id}-error` : undefined,
      })}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
