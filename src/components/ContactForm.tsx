"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    try {
      await submitForm({
        kind: "contact",
        name: String(body.name ?? ""),
        email: String(body.email ?? ""),
        message: String(body.message ?? ""),
        website: String(body.website ?? ""),
      });
      form.reset();
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="stack-f">
      <label>
        Name
        <input name="name" required maxLength={100} autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required rows={5} maxLength={4000} />
      </label>
      {/* honeypot: real users never see or fill this */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <button type="submit" disabled={state === "sending"} className="btn btn-p">
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="small">
        {state === "sent" && (
          <span style={{ color: "var(--ok)" }}>Thanks, I&apos;ll reply soon.</span>
        )}
        {state === "error" && <span style={{ color: "#f7857d" }}>{error}</span>}
      </p>
    </form>
  );
}
