"use client"

import { Suspense, useActionState } from "react"
import { useSearchParams } from "next/navigation"

import { Honeypot, RadioGroupField, TextAreaField, TextField } from "@/components/forms/fields"
import { ErrorSummary, FormSent, SubmitButton, UnavailableNotice } from "@/components/forms/form-status"
import { sendInquiry } from "@/lib/forms/actions"
import { interestFromTopic, interests } from "@/lib/forms/options"
import { initialFormState } from "@/lib/forms/state"

const FORM = "inquiry"
const ORDER = ["name", "organization", "email", "phone", "interest", "message"]

/** The contact form from the brief: who you are, what you are interested in, your message. */
export function InquiryForm() {
  const [state, action, pending] = useActionState(sendInquiry, initialFormState)
  const values = state.values ?? {}
  const errors = state.errors ?? {}

  if (state.status === "sent") {
    return (
      <FormSent title="Thank you, your inquiry has been sent">
        Naeem will read it and get back to you by email.
      </FormSent>
    )
  }

  const interest = (preselected?: string) => (
    <RadioGroupField
      form={FORM}
      name="interest"
      label="I am interested in"
      options={interests}
      defaultValue={values.interest || preselected}
      error={errors.interest}
    />
  )

  return (
    <form action={action} noValidate className="relative grid gap-8">
      {state.status === "invalid" && <ErrorSummary form={FORM} errors={errors} order={ORDER} />}
      {state.status === "unavailable" && <UnavailableNotice form={FORM} />}

      <TextField
        form={FORM}
        name="name"
        label="Name"
        autoComplete="name"
        defaultValue={values.name}
        error={errors.name}
        className="max-w-md"
      />
      <TextField
        form={FORM}
        name="organization"
        label="Organization"
        optional
        autoComplete="organization"
        defaultValue={values.organization}
        error={errors.organization}
        className="max-w-md"
      />
      <TextField
        form={FORM}
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        spellCheck={false}
        defaultValue={values.email}
        error={errors.email}
        className="max-w-md"
      />
      <TextField
        form={FORM}
        name="phone"
        label="Phone"
        optional
        type="tel"
        autoComplete="tel"
        defaultValue={values.phone}
        error={errors.phone}
        className="max-w-xs"
      />

      {/* Links such as "Request advisory support" preselect a topic through ?topic= */}
      <Suspense fallback={interest()}>
        <InterestFromQuery>{interest}</InterestFromQuery>
      </Suspense>

      <TextAreaField
        form={FORM}
        name="message"
        label="Message"
        hint="What are you working on, and how can PASA help?"
        defaultValue={values.message}
        error={errors.message}
        rows={6}
      />

      <Honeypot form={FORM} />
      <SubmitButton pending={pending}>Send inquiry</SubmitButton>
    </form>
  )
}

function InterestFromQuery({ children }: { children: (preselected?: string) => React.ReactNode }) {
  const topic = useSearchParams().get("topic")
  return children(interestFromTopic(topic))
}
