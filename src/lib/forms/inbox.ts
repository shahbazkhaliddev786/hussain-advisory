import "server-only"

import { interests } from "@/content/landing"

/** PASA's Formspree form. Formspree emails each submission to the inbox set up in the Formspree dashboard. */
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xyeendgk"

/**
 * Sends a contact message to Formspree. If Formspree can't be reached or rejects the
 * message, the form tells the visitor and offers email and WhatsApp instead.
 *
 * PASA_INBOX=log prints messages to the server log instead of sending them.
 */
export async function deliver(message: Record<string, string>): Promise<"delivered" | "unavailable"> {
  if (process.env.PASA_INBOX === "log") {
    console.info("[PASA inbox]", JSON.stringify({ receivedAt: new Date().toISOString(), ...message }))
    return "delivered"
  }

  const interest = interests.find((option) => option.value === message.interest)?.label ?? message.interest

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name: message.name,
        email: message.email, // Formspree uses this as the reply-to address
        organization: message.organization || "Not given",
        interest,
        message: message.message,
        _subject: `New PASA inquiry from ${message.name}: ${interest}`,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (response.ok) return "delivered"
    console.error("[PASA inbox] Formspree rejected the message", response.status, await response.text())
  } catch (error) {
    console.error("[PASA inbox] Could not reach Formspree", error)
  }
  return "unavailable"
}
