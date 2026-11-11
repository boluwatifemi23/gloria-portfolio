import { profile, proof } from "@/data/content";
import LeadFlow from "./LeadFlow";

export default function Hero() {
  return (
    <section id="top" className="wrap grid gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <div>
        <p className="text-sm font-semibold text-teal">{profile.role} · {profile.location}</p>
        <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{profile.headline}</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.cvFile} download className="btn btn-primary">Download CV</a>
          <a href="#contact" className="btn btn-ghost">Contact me</a>
          <a href="#work" className="btn btn-ghost">See the systems</a>
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6">
          {proof.map((p) => (
            <div key={p.label}>
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-display text-2xl font-bold">{p.value}</dd>
              <dd className="mt-0.5 text-sm text-muted">{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <LeadFlow />
    </section>
  );
}
