import { financiers, financiersDisclaimer } from "@/content/about"
import { cn } from "@/lib/utils"

/**
 * The institutions that financed projects Naeem worked on, always with the disclaimer:
 * the list describes financing, never endorsement, partnership or a client relationship.
 */
export function FinancierList({ columns = 4, className }: { columns?: 2 | 4; className?: string }) {
  return (
    <div className={className}>
      <ul
        className={cn(
          "grid gap-x-10 border-t-2 border-navy sm:grid-cols-2",
          columns === 4 && "lg:grid-cols-4",
        )}
      >
        {financiers.map((financier) => (
          <li key={financier.name} className="border-b border-hairline pt-5.5 pb-6">
            <span className="block text-2xl leading-[1.15] font-[720] font-stretch-112%">
              {financier.short ?? financier.name}
            </span>
            {financier.short && <span className="mt-1 block text-[15px] text-subtle">{financier.name}</span>}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-[72ch] text-[14.5px] leading-relaxed text-subtle">{financiersDisclaimer}</p>
    </div>
  )
}
