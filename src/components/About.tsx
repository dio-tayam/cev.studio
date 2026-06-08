import Reveal from './Reveal'

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-16">
      <Reveal>
        <p className="text-xl md:text-2xl text-primary leading-relaxed max-w-2xl">
          cev.studio is a small, focused digital agency.
          <br />
          We work with founders, brands, and builders who care about craft.
        </p>
      </Reveal>
    </section>
  )
}
