"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { mainNav } from "@/content/site"
import { routes } from "@/content/routes"
import { cn } from "@/lib/utils"

const triggerClass =
  "h-11 rounded-sm bg-transparent px-3 text-[15.5px] font-medium text-navy hover:bg-accent hover:text-navy focus:bg-accent data-[state=open]:bg-accent data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"

/** Header navigation for wide screens: dropdowns open under their own trigger. */
export function DesktopNav() {
  return (
    <NavigationMenu viewport={false} aria-label="Main" className="max-w-none flex-none">
      <NavigationMenuList className="gap-0.5">
        {mainNav.map((group) => {
          const wide = group.sections.length > 1
          return (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger className={triggerClass}>{group.label}</NavigationMenuTrigger>
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
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className="rounded-sm px-3 py-2.5 text-navy no-underline hover:bg-accent focus:bg-accent"
                              >
                                <span className="text-[15.5px] font-semibold">{link.label}</span>
                                {link.note && (
                                  <span className="text-[13.5px] leading-snug text-subtle">{link.note}</span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href={routes.contact}
              className="flex h-11 flex-row items-center rounded-sm px-3 text-[15.5px] font-medium text-navy no-underline hover:bg-accent focus:bg-accent"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
