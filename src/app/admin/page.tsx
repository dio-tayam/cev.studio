import { createAdminClient } from '@/lib/supabase/admin'
import AdminTable from '@/components/AdminTable'
import AdminLogoutButton from '@/components/AdminLogoutButton'
import { Submission } from '@/lib/types'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const supabase = createAdminClient()

  const { data } = await supabase
    .from('submissions')
    .select('id, name, email, message, created_at')
    .order('created_at', { ascending: false })

  const submissions = (data ?? []) as Submission[]

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-12">
        <div>
          <h1 className="text-2xl text-primary">Submissions</h1>
          <p className="mt-1 font-mono text-xs text-muted">
            {submissions.length} {submissions.length === 1 ? 'message' : 'messages'} received
          </p>
        </div>
        <AdminLogoutButton className="self-start sm:self-auto" />
      </div>
      <AdminTable submissions={submissions} />
    </div>
  )
}
