import type { Metadata } from "next"

import { site } from "@/content/site"

/** Absolute origin for canonical URLs, the sitemap and structured data. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "")

export const absoluteUrl = (path: string) => `${siteUrl}${path}`

/**
 * Metadata for one page. Child metadata replaces the parent's openGraph object
 * instead of merging it, so the shared fields are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  noindex?: boolean
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.fullName,
      locale: "en",
      title: `${title} | ${site.name}`,
      description,
      url: path,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  }
}
