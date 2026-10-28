import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/content/routes"

export const metadata: Metadata = {
  title: "Page not found",
}

const destinations = [
  { label: "Services", href: routes.services },
  { label: "Training", href: routes.training },
  { label: "Knowledge Hub", href: routes.knowledgeHub },
  { label: "Contact", href: routes.contact },
]

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="container-page py-20 md:py-28">
      <h1 id="not-found-title" className="type-h2">
        This page could not be found
      </h1>
      <p className="mt-5 max-w-[52ch] type-lead text-subtle">
        It may have moved, or it has not been published yet. These sections are a good place to continue.
      </p>
      <ul className="mt-10 grid max-w-xl border-t-2 border-navy sm:grid-cols-2 sm:gap-x-10">
        {destinations.map((destination) => (
          <li key={destination.href} className="border-b border-hairline">
            <Link
              href={destination.href}
              className="block py-4 text-xl font-[720] text-navy font-stretch-112% no-underline hover:underline"
            >
              {destination.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-10">
        <Link href={routes.home}>Go to the homepage</Link>
      </Button>
    </section>
  )
}
