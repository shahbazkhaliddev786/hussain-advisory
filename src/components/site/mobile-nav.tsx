"use client"

import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { routes } from "@/content/routes"
import { mainNav, site } from "@/content/site"

/** Menu for screens too narrow for the full header navigation. */
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="default" className="gap-2 px-3.5">
          <MenuIcon className="size-[18px]" aria-hidden="true" />
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 border-hairline p-0 ease-drawer data-[state=closed]:duration-200 data-[state=open]:duration-300 sm:max-w-md"
      >
        <div className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-3">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
          <Logo height={38} />
          <SheetClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close menu">
              <XIcon className="size-5" aria-hidden="true" />
            </Button>
          </SheetClose>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
          <Accordion type="single" collapsible>
            {mainNav.map((group) => (
              <AccordionItem key={group.label} value={group.label} className="border-hairline">
                <AccordionTrigger className="py-4 text-[17px] font-semibold text-navy hover:no-underline [&>svg]:size-5 [&>svg]:text-navy">
                  {group.label}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {group.sections.map((section, i) => (
                    <div key={section.title ?? i} className={i > 0 ? "mt-4" : undefined}>
                      {section.title && (
                        <p className="pb-1 text-[13.5px] font-semibold text-subtle">{section.title}</p>
                      )}
                      <ul className="grid">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className="block rounded-sm py-2.5 text-[16px] text-navy no-underline hover:text-link"
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <SheetClose asChild>
            <Link
              href={routes.contact}
              className="block border-b border-hairline py-4 text-[17px] font-semibold text-navy no-underline"
            >
              Contact
            </Link>
          </SheetClose>
        </nav>

        <div className="grid gap-3 border-t border-hairline px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <SheetClose asChild>
            <Button asChild size="lg">
              <Link href={routes.requestSupport}>Request advisory support</Link>
            </Button>
          </SheetClose>
          <a href={`mailto:${site.email}`} className="text-center text-[15px] text-link">
            {site.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
