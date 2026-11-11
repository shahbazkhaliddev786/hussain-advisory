"use client"

import { useEffect, useRef } from "react"

/**
 * Marks the enclosing section with `data-offscreen` while it is out of view, so its ambient
 * loops (elements carrying `data-ambient`) pause instead of running unseen. Renders nothing visible.
 */
export function PauseOffscreen() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const section = ref.current?.closest("section")
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      section.toggleAttribute("data-offscreen", !entry.isIntersecting)
    })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return <span ref={ref} hidden />
}
