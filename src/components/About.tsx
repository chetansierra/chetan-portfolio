import { about } from '../content'

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <p className="eyebrow mb-7">About</p>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
        <div className="space-y-5 text-[17px] leading-relaxed text-muted max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div>
          <p className="mono text-xs text-faint mb-4">// interests</p>
          <div className="flex flex-wrap gap-2">
            {about.interests.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
