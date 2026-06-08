'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Submission } from '@/lib/types'

function truncate(text: string, length: number) {
  return text.length > length ? `${text.slice(0, length)}…` : text
}

function formatDate(value: string) {
  return new Date(value).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function AdminTable({ submissions }: { submissions: Submission[] }) {
  const [active, setActive] = useState<Submission | null>(null)

  useEffect(() => {
    if (!active) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  if (submissions.length === 0) {
    return (
      <div className="border border-dashed border-border py-24 flex flex-col items-center justify-center text-center gap-2">
        <p className="font-mono text-sm text-muted">No submissions yet.</p>
        <p className="font-mono text-xs text-muted/70">New messages will appear here.</p>
      </div>
    )
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 font-mono uppercase text-xs tracking-widest text-muted font-normal">
                Name
              </th>
              <th className="py-3 pr-4 font-mono uppercase text-xs tracking-widest text-muted font-normal">
                Email
              </th>
              <th className="py-3 pr-4 font-mono uppercase text-xs tracking-widest text-muted font-normal">
                Message
              </th>
              <th className="py-3 pr-4 font-mono uppercase text-xs tracking-widest text-muted font-normal">
                Date
              </th>
              <th className="py-3 font-mono uppercase text-xs tracking-widest text-muted font-normal" />
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-b border-border">
                <td className="py-3 pr-4 text-primary">{submission.name}</td>
                <td className="py-3 pr-4 text-primary">{submission.email}</td>
                <td className="py-3 pr-4 text-muted">{truncate(submission.message, 80)}</td>
                <td className="py-3 pr-4 font-mono text-xs text-muted whitespace-nowrap">
                  {formatDate(submission.created_at)}
                </td>
                <td className="py-3 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => setActive(submission)}
                    className="font-mono uppercase text-xs tracking-widest text-muted transition-colors duration-200 hover:text-accent"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Message from ${active.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-default"
          />

          <div className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto bg-background border border-border p-8 md:p-10">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-6 right-6 text-muted transition-colors duration-200 hover:text-accent"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <p className="font-mono uppercase text-xs tracking-widest text-muted mb-1">
              {active.name}
            </p>
            <p className="font-mono text-xs text-muted mb-6">
              {active.email} · {formatDate(active.created_at)}
            </p>
            <p className="text-primary leading-relaxed whitespace-pre-wrap">{active.message}</p>
          </div>
        </div>
      )}
    </>
  )
}
