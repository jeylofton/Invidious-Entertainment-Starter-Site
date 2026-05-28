"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded border border-border bg-bg/40 px-4 py-3 text-text placeholder:text-text-muted/70 outline-none transition-colors focus:border-gold";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 w-full max-w-[560px] rounded border border-border bg-bg/40 px-6 py-10 text-center">
        <p className="font-display text-2xl text-gold">Message sent.</p>
        <p className="mt-3 text-text-muted">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-[560px] text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" required maxLength={100} placeholder="Your name" className={fieldClass} />
        <input type="email" name="email" required maxLength={200} placeholder="Your email" className={fieldClass} />
      </div>
      <textarea
        name="message"
        required
        maxLength={5000}
        rows={5}
        placeholder="Your message"
        className={`${fieldClass} mt-4 resize-y`}
      />

      {status === "error" && (
        <p className="mt-3 text-sm text-red" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full border border-gold px-8 py-3 text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-bg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
