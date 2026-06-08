## cev.studio

A one-page landing page for cev.studio, a small digital studio. The contact
form is the hero — minimal typographic design, light/dark themes, and a
Supabase-backed admin for reviewing submissions.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) with a CSS-variable-based theme system
- [Supabase](https://supabase.com) (Postgres + row level security) for storing contact submissions
- [lucide-react](https://lucide.dev) for icons

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
3. Run the SQL in `supabase/schema.sql` in your Supabase project (creates the
   `submissions` table with row level security enabled)
4. `npm install && npm run dev`

## Deploy

Push to GitHub. Connect the repo to Vercel. Add the same env vars from
`.env.local` in the Vercel project settings.

## Admin

Visit `/admin` to view form submissions. Protected by a simple username/password
login (see `src/middleware.ts` and `src/lib/auth.ts`). Defaults to `admin` / `admin`
— set `ADMIN_USERNAME` and `ADMIN_PASSWORD` in your env to override before shipping.

## Theme

Light/dark mode toggle lives in the nav and persists via `localStorage`. Defaults to light.
