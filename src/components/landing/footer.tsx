import { cacheLife } from "next/cache"
import Image from "next/image"

import { nav, site } from "@/content/landing"

/** Read the year inside the cache, so the footer stays part of the static page. */
async function copyrightYear() {
  "use cache"
  cacheLife("max")
  return new Date().getFullYear()
}

export async function Footer() {
  const year = await copyrightYear()
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/brand/pasa-lockup.svg"
              alt={site.fullName}
              width={172}
              height={33}
              className="h-[33px] w-auto"
            />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Procurement advice, training and mentoring from Naeem Abbas.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-body transition-colors hover:text-navy">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-body transition-colors hover:text-navy">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {site.fullName}
          </p>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-navy">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
