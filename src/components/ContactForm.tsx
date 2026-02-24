"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  company: string;
  initiative: string;
};

const initialState: FormFields = {
  name: "",
  email: "",
  company: "",
  initiative: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [form, setForm] = useState<FormFields>(initialState);

  const handleChange = (field: keyof FormFields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        const message = result?.error ?? "We couldn't send your message. Email cbford@1337itsolutions.com and we will jump on it.";
        throw new Error(message);
      }

      setStatus("success");
      setMessage(result.message ?? "Message sent. We respond within one business day.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      const fallback = "Something glitched. Email cbford@1337itsolutions.com and we will jump on it.";
      setMessage(error instanceof Error && error.message ? error.message : fallback);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-200">
          Name
          <input
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70"
            placeholder="Blake Ford"
          />
        </label>
        <label className="text-sm font-semibold text-slate-200">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70"
            placeholder="founder@nextsaas.com"
          />
        </label>
      </div>
      <label className="text-sm font-semibold text-slate-200">
        Company / Product
        <input
          type="text"
          value={form.company}
          onChange={handleChange("company")}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70"
          placeholder="Seed-stage fintech, Series B marketplace, etc."
        />
      </label>
      <label className="text-sm font-semibold text-slate-200">
        What do you need built?
        <textarea
          required
          value={form.initiative}
          onChange={handleChange("initiative")}
          rows={4}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70"
          placeholder="Example: Modernize GKE platform + ship AI Ops co-pilot for runbooks."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400/80 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Transmitting..." : "Launch a build"}
        <span aria-hidden className="text-lg">↗</span>
      </button>
      {message && (
        <p
          className={`text-sm font-medium ${
            status === "error" ? "text-rose-300" : "text-emerald-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
