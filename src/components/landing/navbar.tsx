"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { nav, site } from "@/content/landing"
import { cn } from "@/lib/utils"

/**
 * A floating navbar that turns into frosted glass once the page scrolls.
 * On phones, the links open in a panel below it.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  // Close the phone menu with Escape or a tap outside it.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300",
          solid
            ? "border-line/80 bg-white/80 shadow-[0_10px_30px_-14px_rgb(11_52_89/0.25)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 pr-2.5 pl-4">
          <a href="#top" className="shrink-0 rounded-md" aria-label={`${site.name} home`}>
            <Image
              src="/brand/pasa-lockup.svg"
              alt=""
              width={172}
              height={33}
              preload
              className="h-[33px] w-auto"
            />
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[15px] font-medium text-body transition-colors hover:bg-navy/[0.04] hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#contact">
                Get in touch
                <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
              </a>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </Button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="animate-in border-t border-line px-2 pt-2 pb-3 duration-200 fade-in-0 slide-in-from-top-1 md:hidden"
        >
          <ul className="grid">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-2 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get in touch
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
