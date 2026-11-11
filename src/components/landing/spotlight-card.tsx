"use client"

import { useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * A card with a soft light that follows the pointer (adapted from React Bits' SpotlightCard).
 * Pure CSS variables, no re-renders; the glow only shows for a mouse or pen.
 */
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)

  function move(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`)
    el.style.setProperty("--my", `${event.clientY - rect.top}px`)
  }

  return (
    <article ref={ref} onPointerMove={move} className={cn("spotlight-card", className)}>
      <span aria-hidden="true" className="spotlight-card__glow" />
      {children}
    </article>
  )
}
