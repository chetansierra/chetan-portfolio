export function GameTeaser() {
  return (
    <section id="game" className="max-w-5xl mx-auto px-6 py-24">
      <div className="surface p-10 md:p-16 text-center">
        <p className="eyebrow mb-4">The add-on</p>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          System Design Arena
        </h2>

        <p className="mt-4 mx-auto max-w-md text-muted leading-relaxed">
          A fast, interactive quiz on system design. Answer under pressure, rack
          up a score, and see how your instincts hold up.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <button
            className="btn btn-primary"
            disabled
            style={{ opacity: 0.5, cursor: 'not-allowed' }}
          >
            Coming soon
          </button>
        </div>

        <p className="mt-4 mono text-xs text-faint">
          Being rebuilt to run right here in the browser.
        </p>
      </div>
    </section>
  )
}
