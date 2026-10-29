import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/content/routes"
import { cn } from "@/lib/utils"

/** The standing invitation to send a procurement question. */
export function AskPasaCard({ id = "ask-pasa-card", className }: { id?: string; className?: string }) {
  return (
    <section
      aria-labelledby={id}
      className={cn("bg-navy px-6 pt-6.5 pb-7 text-white **:focus-visible:outline-leaf", className)}
    >
      <h2 id={id} className="text-[21px] leading-[1.2] font-[720] font-stretch-112%">
        Ask PASA
      </h2>
      <p className="mt-2.5 text-base leading-normal text-soft">
        Have a procurement question? Send it in. Selected questions are answered here in the Knowledge Hub.
      </p>
      <Button asChild variant="leaf" size="lg" className="mt-4.5">
        <Link href={routes.askPasa}>Ask a question</Link>
      </Button>
    </section>
  )
}
