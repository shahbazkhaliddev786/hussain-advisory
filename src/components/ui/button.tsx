import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap no-underline transition-[color,background-color,border-color,transform] duration-150 ease-out select-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive motion-reduce:transition-none motion-reduce:active:scale-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-navy-700",
        leaf: "bg-leaf text-navy hover:bg-leaf-light",
        outline: "border-[1.5px] border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
        "outline-inverse": "border border-soft/60 bg-transparent text-white hover:bg-white/10",
        secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost: "text-navy hover:bg-accent",
        link: "h-auto px-0 text-link underline hover:text-navy",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-5 text-[15.5px]",
        sm: "h-9 px-3.5 text-sm",
        lg: "h-13 px-6 text-[16.5px]",
        xl: "h-14 px-7 text-[17px]",
        icon: "size-11",
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
