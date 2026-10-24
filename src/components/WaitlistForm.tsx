"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";

type State = "idle" | "sending" | "sent" | "error";

/** One-line email signup used in the call-to-action band. */
export function WaitlistInline() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await submitForm({
        kind: "waitlist",
        email: String(data.email ?? ""),
        website: String(data.website ?? ""),
      });
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "sent") return <p className="chip ok">You&apos;re on the list ✓</p>;
  return (
    <form className="signup" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        aria-label="Email"
        required
        maxLength={200}
      />
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <button className="btn btn-p" disabled={state === "sending"}>
        {state === "sending" ? "Joining…" : "Join the list"}
      </button>
      {state === "error" && (
        <p role="status" className="small" style={{ color: "#f7857d", flexBasis: "100%" }}>
          {error}
        </p>
      )}
    </form>
  );
}

/** Full early-access form for /get. */
export function WaitlistFull() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const d = new FormData(form);
    try {
      await submitForm({
        kind: "waitlist",
        name: String(d.get("name") ?? ""),
        email: String(d.get("email") ?? ""),
        message: String(d.get("message") ?? ""),
        team: d.get("team") === "on",
        website: String(d.get("website") ?? ""),
      });
      form.reset();
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card hl">
        <h3>You&apos;re on the list ✓</h3>
        <p className="muted">Thanks. We&apos;ll email you when your invitation is ready.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <form className="stack-f" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" placeholder="Your name" maxLength={100} autoComplete="name" />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            maxLength={200}
            autoComplete="email"
          />
        </label>
        <label>
          What would you use it for?
          <textarea name="message" rows={3} placeholder="Optional" maxLength={2000} />
        </label>
        <label className="check">
          <input type="checkbox" name="team" /> I&apos;d also like to hear about private-cloud or
          team use
        </label>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button className="btn btn-p lg" disabled={state === "sending"}>
          {state === "sending" ? "Joining…" : "Join the early-access list"}
        </button>
        <p role="status" aria-live="polite" className="small" style={{ color: "#f7857d" }}>
          {state === "error" && error}
        </p>
      </form>
    </div>
  );
}
