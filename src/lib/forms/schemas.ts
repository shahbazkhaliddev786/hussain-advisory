import { z } from "zod"

import { interests, trainingOptions } from "@/lib/forms/options"

/*
 * Server-side rules for the three public forms. Messages follow one pattern:
 * say what to do ("Enter your name"), never just what went wrong.
 */

const required = (message: string, max: number, label: string) =>
  z
    .string()
    .trim()
    .min(1, { error: message })
    .max(max, { error: `${label} must be ${max.toLocaleString("en")} characters or fewer` })

const optional = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, { error: `${label} must be ${max.toLocaleString("en")} characters or fewer` })

const email = z
  .string()
  .trim()
  .min(1, { error: "Enter your email address" })
  .max(254, { error: "Email address must be 254 characters or fewer" })
  .pipe(z.email({ error: "Enter an email address in the correct format, like name@example.com" }))

const phone = optional(40, "Phone number").refine(
  (value) => value === "" || /^[0-9+()\-.\s]{6,}$/.test(value),
  {
    error: "Enter a phone number using digits, spaces and + ( ) - only",
  },
)

const oneOf = (values: string[], message: string) =>
  z.string().refine((value) => values.includes(value), { error: message })

export const inquirySchema = z.object({
  name: required("Enter your name", 120, "Name"),
  organization: optional(160, "Organization"),
  email,
  phone,
  interest: oneOf(
    interests.map((interest) => interest.value),
    "Select what you are interested in",
  ),
  message: required("Enter your message", 3000, "Message"),
})

export const registrationSchema = z.object({
  name: required("Enter your name", 120, "Name"),
  organization: optional(160, "Organization"),
  designation: optional(120, "Designation"),
  email,
  phone,
  training: oneOf(
    trainingOptions.map((option) => option.value),
    "Select the training you want to register for",
  ),
  background: optional(1500, "Professional background"),
})

export const questionSchema = z.object({
  question: required("Enter your question", 2000, "Question"),
  context: optional(600, "Context"),
  name: optional(120, "Name"),
  email,
  publish: z.enum(["yes", ""]),
})

export type FormName = "inquiry" | "registration" | "question"
