import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DesktopNav } from "@/components/site/desktop-nav"
import { Logo } from "@/components/site/logo"
import { MobileNav } from "@/components/site/mobile-nav"
import { routes } from "@/content/routes"

export function SiteHeader() {
  return (
    <header className="border-b border-hairline bg-white">
      <div className="container-page flex items-center gap-4 py-3.5 xl:gap-8">
        <Logo preload className="mr-auto w-[198px] sm:w-[230px] xl:w-[260px]" />
        <div className="hidden xl:block">
          <DesktopNav />
        </div>
        <Button asChild className="hidden sm:inline-flex">
          <Link href={routes.requestSupport}>Request advisory support</Link>
        </Button>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
