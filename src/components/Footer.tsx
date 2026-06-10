import { profile } from '../content'

export function Footer() {
  return (
    <footer
      className="max-w-5xl mx-auto w-full px-6 py-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Résumé ↗
          </a>
          <p className="mt-3 mono text-xs text-faint">The short version of all this.</p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="link-underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 mono text-xs text-faint">© {profile.fullName} — built lightweight.</p>
    </footer>
  )
}
