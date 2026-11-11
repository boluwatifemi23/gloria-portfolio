import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Tools and skills</h2>
          <p className="mt-3 max-w-md text-muted">Sales-operations process design and full-stack engineering, so integrations get built instead of waited on.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="text-base font-bold">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">{g.items.map((s) => (<span key={s} className="chip text-sm">{s}</span>))}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
