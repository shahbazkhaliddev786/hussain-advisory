"use client"

import { useActionState } from "react"

import { Honeypot, SelectField, TextAreaField, TextField } from "@/components/forms/fields"
import { ErrorSummary, FormSent, SubmitButton, UnavailableNotice } from "@/components/forms/form-status"
import { registerForTraining } from "@/lib/forms/actions"
import { trainingOptions } from "@/lib/forms/options"
import { initialFormState } from "@/lib/forms/state"

const FORM = "registration"
const ORDER = ["name", "organization", "designation", "email", "phone", "training", "background"]

/** Training registration, with the fields the brief lists. */
export function RegistrationForm({ training }: { training?: string }) {
  const [state, action, pending] = useActionState(registerForTraining, initialFormState)
  const values = state.values ?? {}
  const errors = state.errors ?? {}

  if (state.status === "sent") {
    return (
      <FormSent title="Thank you, your registration has been received">
        Naeem will email you to confirm your place and share the dates, venue and joining details as soon as
        they are set.
      </FormSent>
    )
  }

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
        name="designation"
        label="Designation"
        optional
        hint="Your job title or role"
        autoComplete="organization-title"
        defaultValue={values.designation}
        error={errors.designation}
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
      <SelectField
        form={FORM}
        name="training"
        label="Training selected"
        options={trainingOptions}
        placeholder="Choose a training"
        defaultValue={values.training ?? training ?? ""}
        error={errors.training}
        className="max-w-xl"
      />
      <TextAreaField
        form={FORM}
        name="background"
        label="Professional background"
        optional
        hint="Your role and your experience of procurement so far. It helps Naeem pitch the training at the right level."
        defaultValue={values.background}
        error={errors.background}
        rows={4}
      />

      <Honeypot form={FORM} />
      <SubmitButton pending={pending}>Register interest</SubmitButton>
    </form>
  )
}
