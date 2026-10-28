import type { Metadata, Viewport } from "next"
import { Archivo, Source_Serif_4 } from "next/font/google"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { site } from "@/content/site"
import "./globals.css"

// Headings use Archivo's width axis; Source Serif 4 sets Knowledge Hub reading text.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
})

// Reading text sits below the fold on most pages, so it loads on use instead of
// competing with the headline font on slow mobile connections.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
  preload: false,
})

// Every page on this site is public, shared content: the build fails if one stops being static.
export const ensureStatic = "navigation"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: site.fullName,
    template: "%s | PASA",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
    locale: "en",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-leaf focus:px-4 focus:py-2.5 focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
