import { profile } from '../content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Game', href: '#game' },
]

export function Nav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-20 backdrop-blur-md"
      style={{
        background: 'color-mix(in srgb, var(--bg) 78%, transparent)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden sm:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          Get in touch
        </a>
      </div>
    </header>
  )
}
