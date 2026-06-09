import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { CoCurriculars } from './components/CoCurriculars'
import { GameTeaser } from './components/GameTeaser'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <div className="dot-grid" aria-hidden="true" />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <CoCurriculars />
          <GameTeaser />
        </main>
        <Footer />
      </div>
    </>
  )
}
