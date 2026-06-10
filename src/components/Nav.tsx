import { NavLink } from 'react-router-dom'
import { profile } from '../content'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Otherwise', to: '/otherwise' },
  { label: 'Work', to: '/work' },
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
        <NavLink to="/" className="text-[15px] font-semibold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </NavLink>

        <nav className="flex items-center gap-6 sm:gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-accent' : 'text-muted hover:text-[var(--text)]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary hidden sm:inline-flex"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
