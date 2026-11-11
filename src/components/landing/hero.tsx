import { ArrowRightIcon, CircleCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CycleCard } from "@/components/landing/cycle-card"
import { PauseOffscreen } from "@/components/landing/pause-offscreen"
import { hero } from "@/content/landing"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 md:pt-40"
    >
      <HeroBackground />
      <PauseOffscreen />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <a
          href="#about"
          className="inline-flex animate-in items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 py-1 pr-3 pl-1.5 text-sm font-medium text-navy shadow-hairline backdrop-blur transition-colors duration-(--duration-quick) ease-out-strong animation-duration-700 fade-in-0 fill-mode-both slide-in-from-bottom-3 hover:border-brand-300 motion-reduce:animate-none"
        >
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
            PASA
          </span>
          {hero.badge}
          <ArrowRightIcon aria-hidden="true" className="size-3.5 text-muted" />
        </a>

        <h1 id="hero-title" className="mx-auto mt-7 max-w-5xl type-display text-navy">
          <span className="lg:block">{hero.title}</span>{" "}
          <span className="text-gradient lg:block">{hero.highlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-body md:text-xl">
          {hero.intro}
        </p>

        <div className="mt-9 flex animate-in flex-col justify-center gap-3 delay-200 ease-out-strong animation-duration-700 fade-in-0 fill-mode-both slide-in-from-bottom-3 motion-reduce:animate-none sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">
              Request advisory support
              <ArrowRightIcon className="transition-transform duration-(--duration-quick) group-hover/button:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#training">Explore training</a>
          </Button>
        </div>

        <ul className="mt-8 flex animate-in flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted delay-300 ease-out-strong animation-duration-700 fade-in-0 fill-mode-both slide-in-from-bottom-3 motion-reduce:animate-none">
          {hero.audiences.map((audience) => (
            <li key={audience} className="flex items-center gap-1.5">
              <CircleCheckIcon aria-hidden="true" className="size-4 text-brand-500" />
              {audience}
            </li>
          ))}
        </ul>
      </div>

      <CycleCard />
    </section>
  )
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Three glows that drift on their own slow loops (aurora). Each layer overhangs by 10% so no edge
          ever shows; phones and reduced motion get the same glows, still. */}
      <div className="absolute inset-x-0 top-0 h-[46rem]">
        <div
          data-ambient
          className="absolute -inset-[10%] bg-[radial-gradient(38rem_26rem_at_21.7%_13.3%,rgb(84_138_210/0.26),transparent_70%)] motion-safe:md:animate-aurora-a"
        />
        <div
          data-ambient
          className="absolute -inset-[10%] bg-[radial-gradient(34rem_24rem_at_80%_10%,rgb(114_174_228/0.3),transparent_70%)] motion-safe:md:animate-aurora-b"
        />
        <div
          data-ambient
          className="absolute -inset-[10%] bg-[radial-gradient(30rem_18rem_at_55%_43.3%,rgb(252_222_126/0.32),transparent_70%)] motion-safe:md:animate-aurora-c"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(11_52_89/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(11_52_89/0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_35%,transparent_100%)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  )
}
