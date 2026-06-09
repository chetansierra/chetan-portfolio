import { coCurriculars } from '../content'

export function CoCurriculars() {
  return (
    <section id="beyond" className="max-w-5xl mx-auto px-6 py-24">
      <p className="eyebrow mb-7">Beyond work</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {coCurriculars.map((c) => (
          <article key={c.title} className="surface p-6">
            <h3 className="text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{c.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
