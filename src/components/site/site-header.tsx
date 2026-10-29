import { Suspense } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DesktopNav, DesktopNavWithPath } from "@/components/site/desktop-nav"
import { Logo } from "@/components/site/logo"
import { MobileNav, MobileNavWithPath } from "@/components/site/mobile-nav"
import { routes } from "@/content/routes"

/*
 * Every page is prerendered with a known path, so the menus render with their current
 * state in the static HTML. The Suspense fallbacks (the same menus without that state)
 * only show for a path the build has not seen.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-hairline bg-white">
      <div className="container-page flex items-center gap-4 py-3.5 xl:gap-8">
        <Logo preload className="mr-auto w-[198px] sm:w-[230px] xl:w-[260px]" />
        <div className="hidden xl:block">
          <Suspense fallback={<DesktopNav />}>
            <DesktopNavWithPath />
          </Suspense>
        </div>
        <Button asChild className="hidden sm:inline-flex">
          <Link href={routes.requestSupport}>Request advisory support</Link>
        </Button>
        <div className="xl:hidden">
          <Suspense fallback={<MobileNav />}>
            <MobileNavWithPath />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
