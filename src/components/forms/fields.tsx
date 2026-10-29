import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { HONEYPOT } from "@/lib/forms/state"
import { cn } from "@/lib/utils"

/*
 * Form fields built on native elements, so the forms also work before JavaScript loads.
 * Order inside a field: label, hint, error, control. Hint and error are linked to the
 * control with aria-describedby; optional fields say so in the label.
 */

interface FieldProps {
  /** Form prefix, so ids stay unique: `${form}-${name}` */
  form: string
  name: string
  label: string
  hint?: React.ReactNode
  error?: string
  optional?: boolean
  className?: string
}

export const fieldId = (form: string, name: string) => `${form}-${name}`

function describedBy(id: string, hint?: React.ReactNode, error?: string) {
  return [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined
}

function Label({ htmlFor, label, optional }: { htmlFor: string; label: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[17px] leading-snug font-semibold">
      {label}
      {optional && <span className="font-normal text-subtle"> (optional)</span>}
    </label>
  )
}

function Hint({ id, children }: { id: string; children?: React.ReactNode }) {
  if (!children) return null
  return (
    <p id={`${id}-hint`} className="text-[15.5px] leading-normal text-subtle">
      {children}
    </p>
  )
}

function ErrorMessage({ id, children }: { id: string; children?: string }) {
  if (!children) return null
  return (
    <p id={`${id}-error`} className="text-[15.5px] leading-normal font-semibold text-destructive">
      <span className="sr-only">Error: </span>
      {children}
    </p>
  )
}

export function TextField({
  form,
  name,
  label,
  hint,
  error,
  optional,
  className,
  ...input
}: FieldProps & Omit<React.ComponentProps<"input">, "form" | "name">) {
  const id = fieldId(form, name)
  return (
    <div className={cn("grid content-start gap-2", className)}>
      <Label htmlFor={id} label={label} optional={optional} />
      <Hint id={id}>{hint}</Hint>
      <ErrorMessage id={id}>{error}</ErrorMessage>
      <Input
        id={id}
        name={name}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        {...input}
      />
    </div>
  )
}

export function TextAreaField({
  form,
  name,
  label,
  hint,
  error,
  optional,
  className,
  ...textarea
}: FieldProps & Omit<React.ComponentProps<"textarea">, "form" | "name">) {
  const id = fieldId(form, name)
  return (
    <div className={cn("grid content-start gap-2", className)}>
      <Label htmlFor={id} label={label} optional={optional} />
      <Hint id={id}>{hint}</Hint>
      <ErrorMessage id={id}>{error}</ErrorMessage>
      <Textarea
        id={id}
        name={name}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        {...textarea}
      />
    </div>
  )
}

export function SelectField({
  form,
  name,
  label,
  hint,
  error,
  optional,
  className,
  options,
  placeholder,
  ...select
}: FieldProps &
  Omit<React.ComponentProps<"select">, "form" | "name"> & {
    options: { value: string; label: string }[]
    placeholder?: string
  }) {
  const id = fieldId(form, name)
  return (
    <div className={cn("grid content-start gap-2", className)}>
      <Label htmlFor={id} label={label} optional={optional} />
      <Hint id={id}>{hint}</Hint>
      <ErrorMessage id={id}>{error}</ErrorMessage>
      <NativeSelect
        id={id}
        name={name}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        {...select}
      >
        {placeholder && <NativeSelectOption value="">{placeholder}</NativeSelectOption>}
        {options.map((option) => (
          <NativeSelectOption key={option.value} value={option.value}>
            {option.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  )
}

/** One choice from a short list, shown all at once. */
export function RadioGroupField({
  form,
  name,
  label,
  hint,
  error,
  optional,
  className,
  options,
  defaultValue,
}: FieldProps & { options: { value: string; label: string }[]; defaultValue?: string }) {
  const id = fieldId(form, name)
  return (
    <fieldset
      id={id}
      tabIndex={-1}
      aria-describedby={describedBy(id, hint, error)}
      className={cn(
        "grid content-start gap-2 outline-offset-4",
        error && "border-l-4 border-destructive pl-4",
        className,
      )}
    >
      <legend className="mb-2 text-[17px] leading-snug font-semibold">
        {label}
        {optional && <span className="font-normal text-subtle"> (optional)</span>}
      </legend>
      <Hint id={id}>{hint}</Hint>
      <ErrorMessage id={id}>{error}</ErrorMessage>
      <div className="grid gap-x-6 sm:grid-cols-2">
        {options.map((option, i) => (
          <label
            key={option.value}
            className="flex min-h-11 cursor-pointer items-center gap-3 py-1.5 text-[17px] leading-snug"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              required={!optional && i === 0}
              className="size-5 shrink-0 cursor-pointer accent-navy"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function CheckboxField({
  form,
  name,
  label,
  hint,
  className,
  defaultChecked,
}: Omit<FieldProps, "error" | "optional"> & { defaultChecked?: boolean }) {
  const id = fieldId(form, name)
  return (
    <div className={cn("grid gap-1", className)}>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 py-1 text-[17px] leading-snug">
        <input
          id={id}
          type="checkbox"
          name={name}
          value="yes"
          defaultChecked={defaultChecked}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-navy"
        />
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="pl-8 text-[15.5px] leading-normal text-subtle">
          {hint}
        </p>
      )}
    </div>
  )
}

/** Hidden from people and assistive technology; bots that fill every field reveal themselves. */
export function Honeypot({ form }: { form: string }) {
  const id = fieldId(form, HONEYPOT)
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
      <label htmlFor={id}>Leave this field empty</label>
      <input id={id} type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
    </div>
  )
}
