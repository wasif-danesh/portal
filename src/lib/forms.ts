export interface FormPayload {
  kind: "contact" | "waitlist";
  email: string;
  name?: string | null;
  message?: string | null;
  team?: boolean;
  /** Honeypot: real people never fill it in. */
  website?: string | null;
}

/**
 * Set at build time. With it, the browser posts straight to Formspree (static hosting has no
 * server). Without it, forms post to this site's own /api/contact route (Node server mode).
 * Formspree form ids are public by design.
 */
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const fallback = "Couldn't send your message. Please try again.";

export async function submitForm(payload: FormPayload): Promise<void> {
  if (payload.website) return; // a bot: pretend it worked and send nothing

  const res = formspreeId
    ? await fetch(`https://formspree.io/f/${encodeURIComponent(formspreeId)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: payload.kind === "waitlist" ? "Wasify AI early access" : "Website contact",
        }),
      })
    : await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? data.errors?.[0]?.message ?? fallback);
  }
}
