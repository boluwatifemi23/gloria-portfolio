import { lifecycle } from "@/data/content";

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="section border-t border-line bg-surface">
      <div className="wrap">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Programmes across the customer lifecycle</h2>
        <p className="mt-3 max-w-prose text-muted">Every step has an owner in the CRM and a next action. A reply on any channel stops the rest, and an opt-out removes the person everywhere.</p>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {lifecycle.map((s, i) => (
            <li key={s.stage} className="bg-surface p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-xs font-bold text-paper">{i + 1}</span>
                <h3 className="text-lg font-bold">{s.stage}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {s.programmes.map((p) => (<li key={p} className="text-sm leading-snug text-muted">{p}</li>))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
