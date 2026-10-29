"use server"

import { deliver } from "@/lib/forms/inbox"
import { inquirySchema } from "@/lib/forms/schemas"
import { type FormState, HONEYPOT } from "@/lib/forms/state"

/** The contact form's server action: validate, drop bots, deliver. */
export async function sendInquiry(_previous: FormState, formData: FormData): Promise<FormState> {
  const values: Record<string, string> = {}
  for (const key of Object.keys(inquirySchema.shape)) {
    const value = formData.get(key)
    values[key] = typeof value === "string" ? value : ""
  }

  // Answer bots as if all went well, and keep their submissions out of the inbox.
  if (formData.get(HONEYPOT)) return { status: "sent" }

  const result = inquirySchema.safeParse(values)
  if (!result.success) {
    const errors: Record<string, string> = {}
    for (const issue of result.error.issues) {
      errors[String(issue.path[0])] ??= issue.message
    }
    return { status: "invalid", errors, values }
  }

  const outcome = await deliver(result.data)
  return outcome === "delivered" ? { status: "sent" } : { status: "unavailable", values }
}
