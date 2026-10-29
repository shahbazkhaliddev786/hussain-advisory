import { cn } from "@/lib/utils"

/**
 * A titled section of an inner page. "split" sets the heading in a narrow left column
 * beside the content on wide screens; "stack" puts it above.
 */
export function PageSection({
  id,
  title,
  intro,
  children,
  layout = "stack",
  tone = "white",
  ruled = false,
  className,
}: {
  id: string
  title: React.ReactNode
  intro?: React.ReactNode
  children: React.ReactNode
  layout?: "stack" | "split"
  tone?: "white" | "mist"
  /** Draw a hairline above, to separate two white sections */
  ruled?: boolean
  className?: string
}) {
  return (
    <section aria-labelledby={id} className={cn(tone === "mist" && "bg-mist", className)}>
      <div className="container-page">
        <div
          className={cn(
            "py-14 md:py-20",
            ruled && "border-t border-hairline",
            layout === "split" && "grid gap-x-16 gap-y-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
          )}
        >
          <div>
            <h2 id={id} className="max-w-[20ch] type-section">
              {title}
            </h2>
            {intro && (
              <p className="mt-4 max-w-[52ch] text-lg leading-normal text-pretty text-subtle">{intro}</p>
            )}
          </div>
          <div className={cn(layout === "stack" && "mt-8 md:mt-10")}>{children}</div>
        </div>
      </div>
    </section>
  )
}
