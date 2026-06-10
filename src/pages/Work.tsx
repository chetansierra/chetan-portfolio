import { work } from '../content'
import { GameTeaser } from '../components/GameTeaser'

type Project = {
  title: string
  what: string
  loved: string
  stack: string[]
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="surface surface-hover p-6 flex flex-col">
      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{p.what}</p>
      <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
        <span className="text-faint">What I loved — </span>
        {p.loved}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Work() {
  return (
    <div className="pt-36 pb-4">
      <div className="max-w-5xl mx-auto px-6">
        <p className="eyebrow mb-5">Work</p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">What I build</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">{work.intro}</p>

        <div className="mt-16">
          <p className="mono text-xs text-faint mb-6">// at work</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {work.atWork.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="mono text-xs text-faint mb-6">// for fun</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {work.sideProjects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </div>
      </div>

      <GameTeaser />
    </div>
  )
}
