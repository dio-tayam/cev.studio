import Reveal from './Reveal'

const services = [
  {
    number: '01',
    name: 'Web Development',
    description: 'Fast, accessible sites and apps built to scale.',
  },
  {
    number: '02',
    name: 'Mobile Apps',
    description: 'Native-feeling experiences for iOS and Android.',
  },
  {
    number: '03',
    name: 'Brand Identity',
    description: 'Visual systems that make brands unmistakable.',
  },
  {
    number: '04',
    name: '3D Modelling',
    description: 'Dimensional assets for product and motion work.',
  },
]

export default function Services() {
  return (
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-mono uppercase text-xs tracking-widest text-muted">What we do</h2>
            <span className="font-mono text-xs text-muted">{services.length} disciplines</span>
          </div>
        </Reveal>

        <ul>
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 80}>
              <li className="group relative border-b border-border overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 w-0 bg-surface/80 transition-[width] duration-500 ease-out group-hover:w-full"
                  aria-hidden
                />
                <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 py-8 md:py-10 px-0 transition-[padding] duration-500 ease-out group-hover:px-6">
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-accent">
                      {service.number}
                    </span>
                    <span className="text-3xl md:text-4xl text-primary tracking-tight transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-accent">
                      {service.name}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-muted md:max-w-xs md:text-right">
                    {service.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
