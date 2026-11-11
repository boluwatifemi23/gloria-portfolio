"use client";
import { useState } from "react";
import { profile } from "@/data/content";

export default function Contact() {
  const [state, setState] = useState({ status: "idle", msg: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState({ status: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const out = await res.json();
      if (!res.ok) throw new Error(out.error || "The message didn't send.");
      form.reset();
      setState({ status: "sent", msg: "Message sent. I'll reply by email." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }
  const field = "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-teal focus:outline-none";
  return (
    <section id="contact" className="section border-t border-line bg-surface">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's talk about your CRM</h2>
          <p className="mt-3 max-w-md text-muted">{profile.availability}. Based in {profile.location}.</p>
          <ul className="mt-8 space-y-4">
            <li><span className="block text-sm text-muted">Email</span><a className="text-lg font-semibold hover:text-teal" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="block text-sm text-muted">Phone</span><a className="text-lg font-semibold hover:text-teal" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><span className="block text-sm text-muted">GitHub</span><a className="text-lg font-semibold hover:text-teal" href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace("https://", "")}</a></li>
            {profile.linkedin && (<li><span className="block text-sm text-muted">LinkedIn</span><a className="text-lg font-semibold hover:text-teal" href={profile.linkedin} target="_blank" rel="noreferrer">View profile</a></li>)}
          </ul>
          <a href={profile.cvFile} download className="btn btn-primary mt-8">Download CV</a>
        </div>
        <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
          <label className="block text-sm font-semibold">Name<input name="name" required className={field} autoComplete="name" /></label>
          <label className="block text-sm font-semibold">Email<input name="email" type="email" required className={field} autoComplete="email" /></label>
          <label className="block text-sm font-semibold">Message<textarea name="message" required rows={5} className={field} /></label>
          <button type="submit" disabled={state.status === "sending"} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
            {state.status === "sending" ? "Sending…" : "Send message"}
          </button>
          {state.msg && (
            <p role="status" className={`text-sm ${state.status === "sent" ? "text-teal" : "text-amber"}`}>
              {state.msg}{state.status === "error" && (<> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></>)}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
