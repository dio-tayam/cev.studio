import Reveal from './Reveal'

export default function About() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <p className="font-mono uppercase text-xs tracking-[0.3em] text-primary/50 mb-8">
            Who we are
          </p>
          <p className="text-3xl md:text-5xl text-primary leading-[1.15] tracking-tight max-w-3xl">
            A small, focused digital agency for founders, brands, and builders who care about craft.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
