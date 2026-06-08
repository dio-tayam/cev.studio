export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'

export const ADMIN_SESSION_COOKIE = 'admin_session'

export async function adminSessionToken() {
  const data = new TextEncoder().encode(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}`)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}
