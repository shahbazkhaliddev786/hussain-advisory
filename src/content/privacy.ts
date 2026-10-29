import { site } from "./site"

/** Draft privacy notice for the website forms. Needs PASA's review, and possibly legal advice. */
export const privacy = {
  intro: "How PASA handles the details you send through this website.",
  draft: true,
  body: `## Who is responsible

PASA, Public Procurement and Supply Advisor, the practice of Naeem Abbas, is responsible for the details you send through this website. You can reach PASA at [${site.email}](mailto:${site.email}).

## What PASA collects

Only what you type into a form on this website:

- **Contact form**: your name, organization, email, phone number, area of interest and message.
- **Training registration**: your name, organization, designation, email, phone number, the training you chose and your professional background.
- **Ask PASA**: your question and any context you add, your name if you give it, your email, and whether PASA may publish your question.

Fields marked “optional” can be left empty.

## How PASA uses it

- To reply to your inquiry.
- To confirm your training registration and send you the details.
- To let you know if your question is answered in the Knowledge Hub.

PASA does not sell your details or share them with anyone for marketing. Your question is published only if you agree, and never with your name.

## How long PASA keeps it

[Retention period to be confirmed by PASA.]

## Cookies and tracking

This website does not use analytics, advertising or tracking cookies. [The hosting provider and its standard server logs, such as IP addresses kept for security, to be confirmed when hosting is chosen.]

## Your choices

You can ask to see, correct or delete the details PASA holds about you by emailing [${site.email}](mailto:${site.email}).

## Changes to this notice

[Date of the last update.]
`,
}
