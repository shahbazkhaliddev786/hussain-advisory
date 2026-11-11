import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the project's own theme tokens (globals.css). Without this it reads
// `text-ui` as a text colour and drops the real colour class (e.g. a button's `text-white`),
// and it cannot tell that two named shadows conflict.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["ui"],
      shadow: ["hairline", "tab", "card", "lift", "float", "raised", "overlay"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
