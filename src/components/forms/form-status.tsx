"use client"

import { useEffect, useRef } from "react"
import { CircleCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fieldId } from "@/components/forms/fields"
import { site } from "@/content/site"

/**
 * Lists every error at the top of the form and takes focus, so keyboard and screen
 * reader users hear what to fix. Each item jumps to its field.
 */
export function ErrorSummary({
  form,
  errors,
  order,
}: {
  form: string
  errors: Partial<Record<string, string>>
  /** Field names in the order they appear in the form */
  order: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => ref.current?.focus(), [errors])

  const titleId = `${form}-error-summary`
  return (
    <div
      ref={ref}
      tabIndex={-1}
      aria-labelledby={titleId}
      className="border-2 border-destructive bg-white px-5 py-4.5 outline-offset-4"
    >
      <h2 id={titleId} className="text-xl leading-snug font-[720] font-stretch-108%">
        There is a problem
      </h2>
      <ul className="mt-2.5 grid gap-1.5">
        {order
          .filter((name) => errors[name])
          .map((name) => (
            <li key={name}>
              <a
                href={`#${fieldId(form, name)}`}
                onClick={(event) => {
                  const target = document.getElementById(fieldId(form, name))
                  if (!target) return
                  event.preventDefault()
                  target.focus({ preventScroll: true })
                  target.scrollIntoView({ block: "center" })
                }}
                className="font-semibold text-destructive decoration-destructive/50"
              >
                {errors[name]}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

/** Shown when the site has nowhere to deliver the form yet. The answers stay in the form. */
export function UnavailableNotice({ form }: { form: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => ref.current?.focus(), [])

  const titleId = `${form}-unavailable`
  return (
    <div
      ref={ref}
      tabIndex={-1}
      aria-labelledby={titleId}
      className="border-2 border-navy bg-mist px-5 py-4.5 outline-offset-4"
    >
      <h2 id={titleId} className="text-xl leading-snug font-[720] font-stretch-108%">
        Your form was not sent
      </h2>
      <p className="mt-2 max-w-[60ch] text-[17px] leading-normal text-ink-2">
        This website cannot deliver forms yet. Please email your details to{" "}
        <a href={`mailto:${site.email}`} className="font-semibold">
          {site.email}
        </a>
        . Your answers are still in the form below, so you can copy them.
      </p>
    </div>
  )
}

/** Replaces the form once it has been received. */
export function FormSent({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => ref.current?.focus(), [])

  return (
    <div className="border border-t-4 border-hairline border-t-navy bg-white px-6 pt-6 pb-7 md:px-8">
      <div className="flex items-start gap-3.5">
        <CircleCheckIcon aria-hidden="true" strokeWidth={1.8} className="mt-0.5 size-7 shrink-0 text-navy" />
        <h2 ref={ref} tabIndex={-1} className="type-h3 outline-offset-4">
          {title}
        </h2>
      </div>
      <div className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">{children}</div>
    </div>
  )
}

export function SubmitButton({ pending, children }: { pending: boolean; children: string }) {
  return (
    <Button type="submit" size="lg" disabled={pending} className="justify-self-start">
      {pending ? "Sending…" : children}
    </Button>
  )
}
