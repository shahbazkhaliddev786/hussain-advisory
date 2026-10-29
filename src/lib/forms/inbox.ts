import "server-only"

/**
 * Where contact messages go. No destination is connected yet, so in production the form
 * says it could not send and points to email, instead of pretending a message was sent.
 * Connecting an email service (such as Resend) only changes this function.
 *
 * PASA_INBOX=log prints messages to the server log. It is the default in development.
 */
export async function deliver(message: Record<string, string>): Promise<"delivered" | "unavailable"> {
  const mode = process.env.PASA_INBOX ?? (process.env.NODE_ENV === "production" ? "off" : "log")

  if (mode === "log") {
    console.info("[PASA inbox]", JSON.stringify({ receivedAt: new Date().toISOString(), ...message }))
    return "delivered"
  }

  return "unavailable"
}
