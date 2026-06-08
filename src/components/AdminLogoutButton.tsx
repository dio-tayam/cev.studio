'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function AdminLogoutButton({ className = '' }: { className?: string }) {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={`flex items-center gap-2 font-mono uppercase text-xs tracking-widest text-muted transition-colors duration-200 hover:text-accent ${className}`}
    >
      <LogOut size={14} strokeWidth={1.5} />
      Sign out
    </button>
  )
}
