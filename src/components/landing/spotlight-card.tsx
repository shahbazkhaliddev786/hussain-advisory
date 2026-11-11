"use client"

import { useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * A card with a soft light that follows the pointer (adapted from React Bits' SpotlightCard).
 * The light is a pre-drawn circle moved with a transform, so following the pointer is compositor
 * work, not a repaint of the card. It only shows for a mouse or pen.
 */
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const glowRef = useRef<HTMLSpanElement>(null)

  // Within the card, each move retargets a short transform transition (globals.css), so the light
  // trails the pointer slightly. On entry it jumps straight to the pointer instead of sliding in
  // from wherever it was left.
  function follow(event: React.PointerEvent<HTMLElement>, snap: boolean) {
    const glow = glowRef.current
    if (event.pointerType === "touch" || !glow) return
    const rect = event.currentTarget.getBoundingClientRect()
    if (snap) glow.style.transitionProperty = "opacity"
    glow.style.transform = `translate3d(${event.clientX - rect.left}px, ${event.clientY - rect.top}px, 0)`
    if (snap) {
      void getComputedStyle(glow).transform // commit the jump before the transform transition returns
      glow.style.transitionProperty = ""
    }
  }

  return (
    <article
      onPointerEnter={(event) => follow(event, true)}
      onPointerMove={(event) => follow(event, false)}
      className={cn("spotlight-card", className)}
    >
      <span ref={glowRef} aria-hidden="true" className="spotlight-card__glow" />
      {children}
    </article>
  )
}
