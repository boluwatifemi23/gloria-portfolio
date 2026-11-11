import { caseStudies, demoVideo } from "@/data/content";
import Visual from "./Visuals";

export default function CaseStudies() {
  return (
    <section id="work" className="section border-t border-line">
      <div className="wrap">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Systems I've built</h2>
        <p className="mt-3 max-w-prose text-muted">Each one solved a real problem for a sales team. The interfaces shown are simplified drawings, so no client data appears here.</p>
        <div className="mt-14 space-y-24">
          {caseStudies.map((c, i) => (
            <article key={c.id} id={c.id} className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.title}</h3>
                <p className="mt-2 text-lg text-muted">{c.summary}</p>
                <h4 className="mt-7 text-sm font-semibold">The problem</h4>
                <p className="mt-1.5 max-w-prose leading-relaxed text-muted">{c.problem}</p>
                <h4 className="mt-6 text-sm font-semibold">What I built</h4>
                <ul className="mt-2 max-w-prose space-y-2">
                  {c.built.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />{b}</li>
                  ))}
                </ul>
                <h4 className="mt-6 text-sm font-semibold">Results</h4>
                <ul className="mt-2 space-y-1.5">
                  {c.results.map((r) => (<li key={r} className="flex gap-2 text-ink"><span className="text-teal" aria-hidden>✓</span>{r}</li>))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">{c.stack.map((s) => (<span key={s} className="chip">{s}</span>))}</div>
              </div>
              <div className={`lg:sticky lg:top-24 ${i % 2 ? "lg:order-1" : ""}`}>
                <Visual kind={c.visual} />
                {c.featured && demoVideo.enabled && <Demo />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <div className="mt-6">
      <p className="mb-2 text-sm font-semibold">Full walkthrough</p>
      {demoVideo.youtubeEmbed ? (
        <div className="aspect-video overflow-hidden rounded-2xl border border-line">
          <iframe className="h-full w-full" src={demoVideo.youtubeEmbed} title="SQL Conversion Machine walkthrough" allow="encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      ) : (
        <video className="w-full rounded-2xl border border-line" src={demoVideo.file} poster={demoVideo.poster} controls preload="none" playsInline />
      )}
    </div>
  );
}
