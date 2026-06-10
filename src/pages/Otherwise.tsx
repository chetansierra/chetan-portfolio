import { otherwise } from '../content'

export function Otherwise() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-36 pb-24">
      <p className="eyebrow mb-5">Other than work</p>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Otherwise</h1>
      <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">{otherwise.intro}</p>

      <div className="mt-14 space-y-4">
        {otherwise.entries.map((e, i) => (
          <article key={i} className="surface surface-hover p-6">
            <span className="tag">{e.kind}</span>
            <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{e.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
