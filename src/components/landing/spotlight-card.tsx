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

  function move(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !glowRef.current) return
    const rect = event.currentTarget.getBoundingClientRect()
    glowRef.current.style.transform = `translate3d(${event.clientX - rect.left}px, ${event.clientY - rect.top}px, 0)`
  }

  return (
    <article onPointerMove={move} className={cn("spotlight-card", className)}>
      <span ref={glowRef} aria-hidden="true" className="spotlight-card__glow" />
      {children}
    </article>
  )
}
