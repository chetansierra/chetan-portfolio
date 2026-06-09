import { profile } from '../content'

export function Hero() {
  const github = profile.socials.find((s) => s.label === 'GitHub')?.href ?? '#'

  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-40 pb-24">
      <p className="eyebrow mb-5">{profile.role}</p>

      <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02]">
        {profile.name}
      </h1>

      <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
        {profile.tagline}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a href="#game" className="btn btn-primary">
          Play the game →
        </a>
        <a href={github} className="btn btn-ghost">
          GitHub
        </a>
      </div>

      <div className="mt-14 flex items-center gap-3 mono text-xs text-faint">
        <span>{profile.location}</span>
        <span>/</span>
        <a href={`mailto:${profile.email}`} className="link-underline">
          {profile.email}
        </a>
      </div>
    </section>
  )
}
