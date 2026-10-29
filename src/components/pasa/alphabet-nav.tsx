import Link from "next/link"

import { alphabet, termsByLetter } from "@/content/dictionary"
import { routes } from "@/content/routes"
import { cn } from "@/lib/utils"

/**
 * A to Z across the dictionary. Letters with terms link to their group; the others
 * stay visible but inert. The current letter carries the yellow leaf.
 */
export function AlphabetNav({ current, className }: { current?: string; className?: string }) {
  const letters = termsByLetter()
  return (
    <nav aria-label="Browse terms by letter" className={className}>
      <ul className="flex flex-wrap gap-px text-[15px] font-[620]">
        {alphabet.map((letter) =>
          letters.has(letter) ? (
            <li key={letter}>
              <Link
                href={`${routes.dictionary}#letter-${letter.toLowerCase()}`}
                aria-current={letter === current ? "true" : undefined}
                className={cn(
                  "grid h-9 w-[30px] place-items-center text-navy no-underline hover:bg-haze",
                  letter === current && "rounded-[14px_0_14px_0] bg-leaf hover:bg-leaf",
                )}
              >
                {letter}
              </Link>
            </li>
          ) : (
            <li
              key={letter}
              aria-hidden="true"
              className="grid h-9 w-[30px] place-items-center font-normal text-dim"
            >
              {letter}
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
