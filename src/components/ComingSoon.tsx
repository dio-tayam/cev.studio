export default function ComingSoon({ label }: { label: string }) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 min-h-[70vh]">
      <p className="font-mono uppercase text-xs tracking-[0.3em] text-muted mb-6">{label}</p>
      <h1 className="text-4xl md:text-6xl text-primary tracking-tight">Coming soon…</h1>
    </section>
  )
}
