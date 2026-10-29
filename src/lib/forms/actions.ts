"use server"

import type { z } from "zod"

import { deliver } from "@/lib/forms/inbox"
import { type FormName, inquirySchema, questionSchema, registrationSchema } from "@/lib/forms/schemas"
import { type FormState, HONEYPOT } from "@/lib/forms/state"

async function handle<S extends z.ZodObject>(
  form: FormName,
  schema: S,
  formData: FormData,
): Promise<FormState> {
  const values: Record<string, string> = {}
  for (const key of Object.keys(schema.shape)) {
    const value = formData.get(key)
    values[key] = typeof value === "string" ? value : ""
  }

  // Answer bots as if all went well, and keep their submissions out of the inbox.
  if (formData.get(HONEYPOT)) return { status: "sent" }

  const result = schema.safeParse(values)
  if (!result.success) {
    const errors: Record<string, string> = {}
    for (const issue of result.error.issues) {
      const field = String(issue.path[0])
      errors[field] ??= issue.message
    }
    return { status: "invalid", errors, values }
  }

  const outcome = await deliver(form, result.data as Record<string, string>)
  return outcome === "delivered" ? { status: "sent" } : { status: "unavailable", values }
}

export async function sendInquiry(_previous: FormState, formData: FormData) {
  return handle("inquiry", inquirySchema, formData)
}

export async function registerForTraining(_previous: FormState, formData: FormData) {
  return handle("registration", registrationSchema, formData)
}

export async function askQuestion(_previous: FormState, formData: FormData) {
  return handle("question", questionSchema, formData)
}
