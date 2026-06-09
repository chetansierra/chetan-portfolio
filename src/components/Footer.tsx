import { profile } from '../content'

export function Footer() {
  return (
    <footer
      className="max-w-5xl mx-auto px-6 py-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-semibold">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 mono text-xs text-faint">
            Built lightweight — no tracking, no clutter.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="link-underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
