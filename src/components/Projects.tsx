import { projects } from '../content'

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <p className="eyebrow mb-7">What I build</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article key={p.name} className="surface surface-hover p-6 flex flex-col">
            <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>

            <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
              {p.blurb}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>

            {p.note && <p className="mt-4 mono text-xs text-faint">{p.note}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
