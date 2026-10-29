import Link from "next/link"

import { JsonLd } from "@/components/pasa/json-ld"
import { routes } from "@/content/routes"
import type { Link as LinkItem } from "@/content/types"
import { absoluteUrl } from "@/lib/metadata"

/**
 * Trail from the section to the current page. The last item is the current page.
 * Also published as a BreadcrumbList for search results, starting at the homepage.
 */
export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  const trail = [{ label: "Home", href: routes.home }, ...items]
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-[15px] leading-snug">
        <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-subtle">
          {items.map((item, i) =>
            i === items.length - 1 ? (
              <li key={item.href} aria-current="page" className="font-semibold text-navy">
                {item.label}
              </li>
            ) : (
              <li key={item.href} className="flex items-center gap-2.5">
                <Link href={item.href}>{item.label}</Link>
                <span aria-hidden="true">/</span>
              </li>
            ),
          )}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: absoluteUrl(item.href),
          })),
        }}
      />
    </>
  )
}
