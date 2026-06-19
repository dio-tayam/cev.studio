import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col overflow-hidden border-b border-border"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--color-border) / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border) / 0.7) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 42%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 42%, black 20%, transparent 80%)',
        }}
        aria-hidden
      />

      <div
        className="absolute bottom-[-14rem] left-1/2 -translate-x-1/2 h-[28rem] w-[44rem] rounded-full bg-gradient-to-t from-accent/35 via-surface/60 to-transparent blur-[120px] animate-pulse-glow"
        aria-hidden
      />

      <div className="relative flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 md:items-center">
            <div>
              <p className="font-mono uppercase text-xs tracking-[0.3em] text-muted mb-8 animate-fade-in-up">
                Digital agency
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-primary animate-fade-in-up"
                style={{ animationDelay: '120ms' }}
              >
                Got a project?
                <br />
                <span className="text-accent">Tell us about it.</span>
              </h1>

              <div
                className="mt-10 flex items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: '280ms' }}
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            <div
              className="border border-border bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
