import "server-only"

import type { FormName } from "@/lib/forms/schemas"

/**
 * Where form submissions go. Until the admin (milestone 4) stores them, there is no
 * destination in production, so the forms say so and point visitors to email instead
 * of pretending a message was sent.
 *
 * PASA_INBOX=log prints submissions to the server log. It is the default in development.
 */
export async function deliver(
  form: FormName,
  data: Record<string, string>,
): Promise<"delivered" | "unavailable"> {
  const mode = process.env.PASA_INBOX ?? (process.env.NODE_ENV === "production" ? "off" : "log")

  if (mode === "log") {
    console.info(`[PASA inbox] ${form}`, JSON.stringify({ receivedAt: new Date().toISOString(), ...data }))
    return "delivered"
  }

  return "unavailable"
}
