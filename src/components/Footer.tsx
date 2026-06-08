import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Logo />
        <p className="font-mono text-xs text-muted">cev.studio © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
