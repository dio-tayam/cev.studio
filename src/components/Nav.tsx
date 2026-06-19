'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
]

const linkClasses =
  'font-mono uppercase text-xs tracking-widest text-muted transition-colors duration-200 hover:text-accent'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'backdrop-blur-md border-b border-border bg-background/70 shadow-[0_1px_0_0_rgba(179,230,17,0.06)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden relative h-8 w-8 flex items-center justify-center text-muted transition-colors duration-200 hover:text-accent"
        >
          <Menu
            size={18}
            strokeWidth={1.5}
            className={`absolute transition-all duration-300 ease-out ${
              open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            size={18}
            strokeWidth={1.5}
            className={`absolute transition-all duration-300 ease-out ${
              open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </div>

      <nav
        className={`md:hidden overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-64 opacity-100 border-border' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkClasses}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
