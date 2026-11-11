"use client";
import { useEffect, useState } from "react";
import { leadJourney } from "@/data/content";

// One lead moves through the real pipeline. The only automatic animation on the page.
export default function LeadFlow() {
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) { setStep(leadJourney.length - 1); return; }
    const id = setInterval(() => setStep((s) => (s + 1) % (leadJourney.length + 1)), 1700);
    return () => clearInterval(id);
  }, []);
  const active = Math.min(step, leadJourney.length - 1);
  const done = step >= leadJourney.length - 1;

  return (
    <figure className="relative rounded-3xl border border-line bg-surface p-6 shadow-[0_30px_60px_-40px_rgb(var(--navy)/0.45)] sm:p-8" aria-label="How one lead moves through the system">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted">Lead</p>
          <p className="font-display text-lg font-bold">Demo lead, web enquiry</p>
        </div>
        <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold transition-colors ${done ? "bg-teal/15 text-teal" : "bg-amber/15 text-amber"}`}>
          {done ? "Appointment confirmed" : step === 2 ? "SLA: 30 min" : "In progress"}
        </span>
      </div>
      <ol className="mt-7 space-y-1">
        {leadJourney.map((s, i) => {
          const state = i < active || (done && i === active) ? "done" : i === active ? "now" : "next";
          return (
            <li key={s.label} className="relative flex gap-4 pb-4 last:pb-0">
              {i < leadJourney.length - 1 && (
                <span className={`absolute left-[11px] top-7 h-[calc(100%-1.25rem)] w-0.5 transition-colors duration-500 ${i < active ? "bg-teal" : "bg-line"}`} aria-hidden />
              )}
              <span className={`relative mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 text-[11px] font-bold transition-all duration-500 ${
                state === "done" ? "border-teal bg-teal text-surface" : state === "now" ? "border-amber bg-surface text-amber scale-110" : "border-line bg-surface text-muted"
              }`}>
                {state === "done" ? "✓" : i + 1}
              </span>
              <div>
                <p className={`text-sm font-semibold transition-colors ${state === "next" ? "text-muted" : "text-ink"}`}>{s.label}</p>
                <p className={`text-xs leading-snug transition-colors ${state === "now" ? "text-muted" : "text-muted/70"}`}>{s.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
      {!reduced && <figcaption className="mt-6 border-t border-line pt-4 text-xs text-muted">A demo lead moving through the pipeline I built.</figcaption>}
    </figure>
  );
}
