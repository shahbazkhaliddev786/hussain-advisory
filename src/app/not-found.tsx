import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-xl place-content-center px-6 pt-32 pb-20 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-3 type-title text-navy">This page could not be found</h1>
      <p className="mt-4 text-lg text-body">It may have moved. Everything about PASA is on the homepage.</p>
      <Button asChild size="lg" className="mx-auto mt-8">
        <Link href="/">Go to the homepage</Link>
      </Button>
    </section>
  )
}
