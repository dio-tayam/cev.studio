'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

const fieldClasses =
  'w-full bg-transparent border-b border-border py-3 text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200'

const labelClasses = 'block font-mono uppercase text-xs tracking-widest text-muted mb-2'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) {
        setError('Invalid username or password.')
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="mb-6">
        <Logo />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-8">
        <h1 className="text-2xl text-primary text-center">Admin Login</h1>

        <div>
          <label htmlFor="username" className={labelClasses}>
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            className={fieldClasses}
            autoComplete="username"
          />
        </div>

        <div>
          <label htmlFor="password" className={labelClasses}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={fieldClasses}
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-black font-mono uppercase tracking-widest py-4 transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        {error && <p className="font-mono text-sm text-muted">{error}</p>}
      </form>
    </div>
  )
}
