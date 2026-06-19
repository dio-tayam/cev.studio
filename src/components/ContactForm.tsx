'use client'

import { useEffect, useState, FormEvent } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'loading' | 'success' | 'error'
type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

const fieldClasses =
  'w-full bg-transparent border-b border-border px-3 py-3 text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:shadow-[0_1px_12px_-2px_rgba(179,230,17,0.35)] transition-[color,border-color,box-shadow] duration-200'

const labelClasses = 'block font-mono uppercase text-xs tracking-widest text-muted mb-2 px-3'

const errorClasses = 'mt-2 font-mono text-xs text-accent px-3'

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {}

  if (!name.trim()) errors.name = 'Please enter your name.'

  if (!email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_REGEX.test(email.trim())) errors.email = 'Please enter a valid email address.'

  if (!message.trim()) errors.message = 'Please enter a message.'
  else if (message.trim().length < 10)
    errors.message = 'Tell us a little more — at least 10 characters.'

  return errors
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  useEffect(() => {
    if (status !== 'success') return

    const timeout = setTimeout(() => setStatus('idle'), 6000)
    return () => clearTimeout(timeout)
  }, [status])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const fieldErrors = validate(name, email, message)
    setErrors(fieldErrors)

    if (Object.keys(fieldErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setName('')
      setEmail('')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setErrors((prev) => ({ ...prev, name: undefined }))
          }}
          placeholder="Your name"
          className={fieldClasses}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          data-1p-ignore
          data-lpignore="true"
          data-bwignore="true"
          data-form-type="other"
        />
        {errors.name && <p className={errorClasses}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setErrors((prev) => ({ ...prev, email: undefined }))
          }}
          placeholder="you@example.com"
          className={fieldClasses}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          data-1p-ignore
          data-lpignore="true"
          data-bwignore="true"
          data-form-type="other"
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setErrors((prev) => ({ ...prev, message: undefined }))
          }}
          placeholder="Tell us about your project"
          className={`${fieldClasses} resize-none`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-accent to-[#e3ff80] text-black font-mono uppercase tracking-widest py-4 transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_32px_-4px_rgba(179,230,17,0.5)] disabled:opacity-60 disabled:shadow-none"
        >
          {status === 'loading' ? 'Sending…' : 'Send it →'}
        </button>

        {status === 'success' && (
          <p className="font-mono text-xs text-muted animate-fade-in-up">
            Got it — we&apos;ll be in touch within 24 hours.
          </p>
        )}

        {status === 'error' && (
          <p className="font-mono text-xs text-muted">Something went wrong. Try again.</p>
        )}
      </div>
    </form>
  )
}
