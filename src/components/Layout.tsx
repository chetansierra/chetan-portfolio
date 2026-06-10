import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  const { pathname } = useLocation()

  // start each page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Home is a single, no-scroll page — it carries its own bottom strip,
  // so the shared footer is hidden there.
  const isHome = pathname === '/'

  return (
    <>
      <div className="dot-grid" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        {!isHome && <Footer />}
      </div>
    </>
  )
}
