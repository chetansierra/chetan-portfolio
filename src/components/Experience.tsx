import { experience, education } from '../content'

export function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <p className="eyebrow mb-7">Experience</p>

      <div className="space-y-10">
        {experience.map((e, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
            <div>
              <p className="mono text-xs text-faint">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{e.role}</h3>
              <p className="text-sm text-accent">{e.org}</p>
              {e.team && <p className="mt-1 text-xs text-muted">{e.team}</p>}
            </div>

            <ul className="space-y-2 text-sm text-muted leading-relaxed">
              {e.points.map((pt, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-accent">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider my-12" />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-sm text-accent">{education.school}</p>
        </div>
        <p className="mono text-xs text-faint">{education.period}</p>
      </div>
    </section>
  )
}
