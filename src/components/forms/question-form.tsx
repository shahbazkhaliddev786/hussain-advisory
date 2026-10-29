"use client"

import { useActionState } from "react"

import { CheckboxField, Honeypot, TextAreaField, TextField } from "@/components/forms/fields"
import { ErrorSummary, FormSent, SubmitButton, UnavailableNotice } from "@/components/forms/form-status"
import { askQuestion } from "@/lib/forms/actions"
import { initialFormState } from "@/lib/forms/state"

const FORM = "question"
const ORDER = ["question", "context", "name", "email"]

/** Ask PASA: a general procurement question that may be answered in the Knowledge Hub. */
export function QuestionForm() {
  const [state, action, pending] = useActionState(askQuestion, initialFormState)
  const values = state.values ?? {}
  const errors = state.errors ?? {}

  if (state.status === "sent") {
    return (
      <FormSent title="Thank you, your question has been sent">
        If PASA answers it in the Knowledge Hub, you will get an email with the link.
      </FormSent>
    )
  }

  return (
    <form action={action} noValidate className="relative grid gap-8">
      {state.status === "invalid" && <ErrorSummary form={FORM} errors={errors} order={ORDER} />}
      {state.status === "unavailable" && <UnavailableNotice form={FORM} />}

      <TextAreaField
        form={FORM}
        name="question"
        label="Your question"
        hint="For example: what is the difference between qualification and evaluation criteria?"
        defaultValue={values.question}
        error={errors.question}
        rows={5}
      />
      <TextAreaField
        form={FORM}
        name="context"
        label="Context"
        optional
        hint="Anything that helps, such as your role, or the country or financier whose rules apply"
        defaultValue={values.context}
        error={errors.context}
        rows={3}
        className="[&_textarea]:min-h-24"
      />
      <TextField
        form={FORM}
        name="name"
        label="Name"
        optional
        autoComplete="name"
        defaultValue={values.name}
        error={errors.name}
        className="max-w-md"
      />
      <TextField
        form={FORM}
        name="email"
        label="Email"
        type="email"
        hint="So PASA can tell you when your question is answered"
        autoComplete="email"
        spellCheck={false}
        defaultValue={values.email}
        error={errors.email}
        className="max-w-md"
      />
      <CheckboxField
        form={FORM}
        name="publish"
        label="PASA may publish my question, without my name, with an answer in the Knowledge Hub"
        defaultChecked={values.publish === "yes"}
      />

      <Honeypot form={FORM} />
      <SubmitButton pending={pending}>Send question</SubmitButton>
    </form>
  )
}
