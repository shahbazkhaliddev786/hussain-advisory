import Link from "next/link"
import Markdown from "react-markdown"

import { cn } from "@/lib/utils"

/**
 * Long-form reading text from Markdown: Source Serif at a comfortable measure,
 * sans-serif headings, internal links through the router. Raw HTML is not rendered.
 */
export function Prose({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("max-w-[68ch] type-reading text-ink-3", className)}>
      <Markdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-12 mb-4 font-sans text-[1.5rem] leading-[1.2] font-[720] text-navy font-stretch-108% first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-9 mb-3 font-sans text-[1.1875rem] leading-snug font-[700] text-navy">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mt-5 first:mt-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="mt-5 grid list-disc gap-2.5 pl-6 marker:text-subtle">{children}</ul>
          ),
          ol: ({ children, start }) => (
            <ol
              start={start}
              className="mt-5 grid list-decimal gap-2.5 pl-7 marker:font-sans marker:text-subtle"
            >
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => <strong className="font-[650] text-navy">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-navy pl-5 text-ink-2 italic">{children}</blockquote>
          ),
          a: ({ href = "", children }) =>
            href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>,
        }}
      >
        {children}
      </Markdown>
    </div>
  )
}
