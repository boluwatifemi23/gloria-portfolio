import { experience, education } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Experience</h2>
        <div>
          <ol className="space-y-10 border-l-2 border-line pl-6">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-teal" aria-hidden />
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 text-xl font-bold">{e.role}</h3>
                <p className="text-muted">{e.org}</p>
                <ul className="mt-3 space-y-1.5">{e.points.map((p) => (<li key={p} className="leading-relaxed text-muted">{p}</li>))}</ul>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 text-xl font-bold">Education</h3>
          <ul className="mt-3 space-y-1.5">{education.map((e) => (<li key={e} className="text-muted">{e}</li>))}</ul>
        </div>
      </div>
    </section>
  );
}
