import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// shadcn/ui button, tuned for PASA: pill shapes, a blue gradient primary with a soft glow,
// and quick press feedback.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,box-shadow,filter,transform] duration-200 ease-out select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:active:scale-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(180deg,#3a6fc4,#2a5aa8)] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_1px_2px_rgb(16_40_80/0.25),0_10px_24px_-10px_rgb(44_95_176/0.7)] hover:brightness-110",
        navy: "bg-navy text-white shadow-[0_1px_2px_rgb(16_40_80/0.25)] hover:bg-[#123f69]",
        secondary:
          "bg-white text-navy shadow-[0_1px_2px_rgb(16_40_80/0.06)] ring-1 ring-line hover:bg-surface hover:ring-[#d3dbe6]",
        ghost: "text-navy hover:bg-surface",
        light: "bg-white text-navy shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)] hover:bg-brand-50",
        glass: "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/15",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
