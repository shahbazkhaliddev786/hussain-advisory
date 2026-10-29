"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { inSection, isCurrent } from "@/components/site/nav-state"
import { mainNav } from "@/content/site"
import { routes } from "@/content/routes"
import { cn } from "@/lib/utils"

const triggerClass =
  "h-11 rounded-sm bg-transparent px-3 text-[15.5px] font-medium text-navy hover:bg-accent hover:text-navy focus:bg-accent data-[state=open]:bg-accent data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent data-current:underline data-current:decoration-2 data-current:underline-offset-8"

/**
 * Header navigation for wide screens: dropdowns open under their own trigger.
 * With a pathname, the current section is underlined and the current page carries the leaf.
 */
export function DesktopNav({ pathname }: { pathname?: string }) {
  return (
    <NavigationMenu viewport={false} aria-label="Main" className="max-w-none flex-none">
      <NavigationMenuList className="gap-0.5">
        {mainNav.map((group) => {
          const wide = group.sections.length > 1
          return (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger
                className={triggerClass}
                data-current={inSection(group.href, pathname) || undefined}
              >
                {group.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={cn(
                  "border-hairline! p-0 shadow-[0_18px_40px_-18px_rgba(11,52,89,0.35)]!",
                  wide ? "md:w-[34rem]" : "md:w-[22rem]",
                )}
              >
                <div className={cn("grid gap-x-4 p-2", wide && "grid-cols-2")}>
                  {group.sections.map((section, i) => (
                    <div key={section.title ?? i}>
                      {section.title && (
                        <p className="px-3 pt-2 pb-1 text-[13.5px] font-semibold text-subtle">
                          {section.title}
                        </p>
                      )}
                      <ul className="grid">
                        {section.links.map((link) => {
                          const current = isCurrent(link.href, pathname)
                          return (
                            <li key={link.href}>
                              <NavigationMenuLink asChild active={current}>
                                <Link
                                  href={link.href}
                                  className="relative rounded-sm px-3 py-2.5 text-navy no-underline hover:bg-accent focus:bg-accent"
                                >
                                  {current && (
                                    <span
                                      aria-hidden="true"
                                      className="absolute top-[15px] -left-0.5 size-2.5 leaf"
                                    />
                                  )}
                                  <span className="text-[15.5px] font-semibold">{link.label}</span>
                                  {link.note && (
                                    <span className="text-[13.5px] leading-snug text-subtle">
                                      {link.note}
                                    </span>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={isCurrent(routes.contact, pathname)}>
            <Link
              href={routes.contact}
              className="flex h-11 flex-row items-center rounded-sm px-3 text-[15.5px] font-medium text-navy no-underline hover:bg-accent focus:bg-accent data-active:underline data-active:decoration-2 data-active:underline-offset-8"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

/** Reads the current path, so the header can mark where the visitor is. */
export function DesktopNavWithPath() {
  return <DesktopNav pathname={usePathname()} />
}
