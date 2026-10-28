import { cacheLife } from "next/cache"
import Link from "next/link"

import { Logo } from "@/components/site/logo"
import { routes } from "@/content/routes"
import { footerNav, site } from "@/content/site"

/** Read the year inside the cache so the footer stays part of the static output. */
async function copyrightYear() {
  "use cache"
  cacheLife("max")
  return new Date().getFullYear()
}

export async function SiteFooter() {
  const year = await copyrightYear()
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="container-page pt-14 pb-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo href={null} height={44} className="w-[229px]" />
            <p className="mt-4 max-w-[34ch] text-[15.5px] text-subtle">
              Procurement advice, training and mentoring from Naeem Abbas.
            </p>
          </div>
          {footerNav.map((group) => (
            <nav
              key={group.title}
              aria-labelledby={`footer-${group.title}`}
              className="text-[15px] leading-snug"
            >
              <h2 id={`footer-${group.title}`} className="mb-3 text-[15px] font-semibold">
                {group.title}
              </h2>
              <ul className="grid gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ink-2 no-underline hover:text-link hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-hairline pt-5 text-sm text-subtle">
          <p>
            © {year} {site.fullName}
          </p>
          <Link href={routes.privacy} className="text-subtle">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
