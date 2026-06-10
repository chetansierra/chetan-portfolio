import { Link } from 'react-router-dom'
import { profile, home } from '../content'

export function Home() {
  return (
    <section className="flex min-h-screen flex-col px-6">
      {/* main block — vertically centered */}
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center pt-16">
        <p className="eyebrow mb-5">{home.welcome}</p>

        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02]">
          {home.greeting}
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-7 max-w-2xl space-y-4 text-lg text-muted leading-relaxed">
          {home.purpose.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/otherwise" className="btn btn-primary">
            Look around →
          </Link>
          <Link to="/work" className="btn btn-ghost">
            The work bit
          </Link>
        </div>
      </div>

      {/* bottom strip — contact + game hint (game comes later) */}
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 pb-10 mono text-xs text-faint">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={`mailto:${profile.email}`} className="link-underline">
            {profile.email}
          </a>
          {profile.socials
            .filter((s) => s.label !== 'Email' && s.href !== '#')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {s.label}
              </a>
            ))}
        </div>
        <Link to="/work" className="link-underline">
          Fancy a game? →
        </Link>
      </div>
    </section>
  )
}
