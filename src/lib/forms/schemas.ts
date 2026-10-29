import { z } from "zod"

import { interests } from "@/content/landing"

// Server-side rules for the contact form. Messages say what to do, not just what went wrong.

const text = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, { error: `${label} must be ${max.toLocaleString("en")} characters or fewer` })

export const inquirySchema = z.object({
  name: text(120, "Name").min(1, { error: "Enter your name" }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Enter your email address" })
    .max(254, { error: "Email address must be 254 characters or fewer" })
    .pipe(z.email({ error: "Enter an email address like name@example.com" })),
  organization: text(160, "Organization"),
  interest: z.string().refine((value) => interests.some((interest) => interest.value === value), {
    error: "Choose what you are interested in",
  }),
  message: text(3000, "Message").min(1, { error: "Tell us a little about what you need" }),
})
