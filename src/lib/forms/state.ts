/** What a form action returns to the page: the outcome, field errors and the values to show again. */
export interface FormState {
  status: "idle" | "invalid" | "sent" | "unavailable"
  errors?: Partial<Record<string, string>>
  values?: Record<string, string>
}

export const initialFormState: FormState = { status: "idle" }

/** A field people never see. Anything typed into it came from a bot. */
export const HONEYPOT = "website"
