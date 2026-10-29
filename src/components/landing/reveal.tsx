"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * Fades content up as it scrolls into view. Content is visible in the server HTML;
 * only elements below the fold are hidden, after hydration, until they come into view.
 * Nothing moves for people who prefer reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return

    element.dataset.reveal = "hidden"
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.dataset.reveal = "shown"
        observer.disconnect()
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out-strong data-[reveal=hidden]:translate-y-6 data-[reveal=hidden]:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  )
}
