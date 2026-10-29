"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
import { inSection, isCurrent } from "@/components/site/nav-state"
import { routes } from "@/content/routes"
import { mainNav, site } from "@/content/site"
import { cn } from "@/lib/utils"

/**
 * Menu for screens too narrow for the full header navigation.
 * With a pathname, the current section starts open and the current page carries the leaf.
 */
export function MobileNav({ pathname }: { pathname?: string }) {
  const currentGroup = mainNav.find((group) => inSection(group.href, pathname))?.label
  const contactCurrent = isCurrent(routes.contact, pathname)

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
          <Accordion type="single" collapsible defaultValue={currentGroup}>
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
                        {section.links.map((link) => {
                          const current = isCurrent(link.href, pathname)
                          return (
                            <li key={link.href}>
                              <SheetClose asChild>
                                <Link
                                  href={link.href}
                                  aria-current={current ? "page" : undefined}
                                  className={cn(
                                    "relative block rounded-sm py-2.5 text-[16px] text-navy no-underline hover:text-link",
                                    current && "pl-5 font-semibold",
                                  )}
                                >
                                  {current && (
                                    <span
                                      aria-hidden="true"
                                      className="absolute top-[17px] left-0 size-2.5 leaf"
                                    />
                                  )}
                                  {link.label}
                                </Link>
                              </SheetClose>
                            </li>
                          )
                        })}
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
              aria-current={contactCurrent ? "page" : undefined}
              className={cn(
                "relative block border-b border-hairline py-4 text-[17px] font-semibold text-navy no-underline",
                contactCurrent && "pl-5",
              )}
            >
              {contactCurrent && (
                <span aria-hidden="true" className="absolute top-[23px] left-0 size-2.5 leaf" />
              )}
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

/** Reads the current path, so the menu can mark where the visitor is. */
export function MobileNavWithPath() {
  return <MobileNav pathname={usePathname()} />
}
