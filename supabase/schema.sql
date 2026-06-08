create table submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- No policies: anon/authenticated get zero access. All reads and writes
-- go through server routes using the service role key, which bypasses RLS.
alter table submissions enable row level security;
