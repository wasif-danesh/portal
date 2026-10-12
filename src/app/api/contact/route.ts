import { z } from "zod";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(1).max(4000),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  const formId = process.env.FORMSPREE_ID;
  if (!formId) {
    return Response.json(
      { error: "The contact form isn't configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Please check your details and try again." }, { status: 400 });
  }
  const { website, ...fields } = parsed.data;
  if (website) return Response.json({ ok: true }); // silently drop bots

  const res = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    return Response.json(
      { error: "Couldn't send your message. Please try again." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
