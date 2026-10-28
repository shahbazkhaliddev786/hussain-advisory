import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const LOCKUP_RATIO = 333 / 64

/** The PASA lockup: three-leaf mark, wordmark and full name. Always on a light ground. */
export function Logo({
  height = 50,
  href = "/",
  preload = false,
  className,
}: {
  height?: number
  href?: string | null
  preload?: boolean
  className?: string
}) {
  const image = (
    <Image
      src="/brand/pasa-lockup.svg"
      alt={href ? "PASA home" : "PASA, Public Procurement and Supply Advisor"}
      width={Math.round(height * LOCKUP_RATIO)}
      height={height}
      preload={preload}
      className="block h-auto max-w-full"
    />
  )

  if (!href) return <div className={cn("shrink-0", className)}>{image}</div>

  return (
    <Link href={href} className={cn("block shrink-0 rounded-xs", className)}>
      {image}
    </Link>
  )
}
