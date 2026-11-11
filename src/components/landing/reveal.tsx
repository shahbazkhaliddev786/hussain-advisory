"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Fades content up as it scrolls into view (GSAP ScrollTrigger). Content is visible in the
 * server HTML; only elements below the fold are hidden, after hydration, until they come into
 * view. Reduced motion keeps a plain fade and drops the movement.
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

  useGSAP(
    () => {
      const element = ref.current
      if (!element || element.getBoundingClientRect().top < window.innerHeight * 0.92) return

      const mm = gsap.matchMedia()
      const reveal = (y: number) =>
        gsap.fromTo(
          element,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            delay: delay / 1000,
            ease: "power3.out",
            clearProps: "transform,visibility",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          },
        )
      mm.add("(prefers-reduced-motion: no-preference)", () => void reveal(16))
      mm.add("(prefers-reduced-motion: reduce)", () => void reveal(0))
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
