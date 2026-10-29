import { financiers, financiersNote } from "@/content/landing"

/** "Experience with projects financed by": the brief's required wording, with its disclaimer. */
export function Financiers() {
  return (
    <section aria-labelledby="financed-title" className="border-y border-line bg-white py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="financed-title" className="text-center text-sm font-medium text-muted">
          Experience with projects financed by
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-12">
          {financiers.map((financier) => (
            <li key={financier} className="text-lg font-semibold tracking-tight text-[#64748b] md:text-xl">
              {financier}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-relaxed text-muted">
          {financiersNote}
        </p>
      </div>
    </section>
  )
}
