-- Enable extensions (slug/search use-cases)
create extension if not exists pgcrypto;

-- 1) Profiles (roles)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'student' check (role in ('student', 'librarian', 'admin')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Students can read their own profile
create policy "profiles_select_own"
on public.profiles for select
using (auth.uid() = id);

-- Only admins can update roles (simple policy; you can refine)
create policy "profiles_update_admin_only"
on public.profiles for update
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- Auto-create profile on signup (trigger)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), 'student')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();


-- 2) Library items
create table if not exists public.library_items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('book', 'thesis')),
  title text not null,
  slug text not null unique,
  abstract text,
  year int,
  language text default 'pt',
  cover_path text,        -- storage path in bucket "library-covers"
  file_path text not null,-- storage path in bucket "library-files"
  published boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists library_items_type_idx on public.library_items(type);
create index if not exists library_items_year_idx on public.library_items(year);
create index if not exists library_items_published_idx on public.library_items(published);

-- updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_library_items_updated_at on public.library_items;
create trigger trg_library_items_updated_at
before update on public.library_items
for each row execute function public.set_updated_at();

alter table public.library_items enable row level security;

-- Authenticated students can read only published items
create policy "library_items_select_authenticated_published"
on public.library_items for select
using (auth.role() = 'authenticated' and published = true);

-- Librarian/admin can insert/update/delete
create policy "library_items_write_librarian_admin"
on public.library_items for all
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('librarian', 'admin')
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('librarian', 'admin')
  )
);


-- 3) Authors
create table if not exists public.library_authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique
);

alter table public.library_authors enable row level security;

create policy "library_authors_select_authenticated"
on public.library_authors for select
using (auth.role() = 'authenticated');

create policy "library_authors_write_librarian_admin"
on public.library_authors for all
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
)
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
);

create table if not exists public.library_item_authors (
  item_id uuid references public.library_items(id) on delete cascade,
  author_id uuid references public.library_authors(id) on delete cascade,
  author_order int not null default 1,
  primary key (item_id, author_id)
);

alter table public.library_item_authors enable row level security;

create policy "library_item_authors_select_authenticated"
on public.library_item_authors for select
using (auth.role() = 'authenticated');

create policy "library_item_authors_write_librarian_admin"
on public.library_item_authors for all
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
)
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
);


-- 4) Tags
create table if not exists public.library_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique
);

alter table public.library_tags enable row level security;

create policy "library_tags_select_authenticated"
on public.library_tags for select
using (auth.role() = 'authenticated');

create policy "library_tags_write_librarian_admin"
on public.library_tags for all
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
)
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
);

create table if not exists public.library_item_tags (
  item_id uuid references public.library_items(id) on delete cascade,
  tag_id uuid references public.library_tags(id) on delete cascade,
  primary key (item_id, tag_id)
);

alter table public.library_item_tags enable row level security;

create policy "library_item_tags_select_authenticated"
on public.library_item_tags for select
using (auth.role() = 'authenticated');

create policy "library_item_tags_write_librarian_admin"
on public.library_item_tags for all
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
)
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
);


-- 5) Optional: link items to cursos (remove if you don't have cursos table)
-- create table if not exists public.library_item_courses (
--   item_id uuid references public.library_items(id) on delete cascade,
--   curso_id uuid references public.cursos(id) on delete restrict,
--   primary key (item_id, curso_id)
-- );
-- alter table public.library_item_courses enable row level security;
-- create policy "library_item_courses_select_authenticated"
-- on public.library_item_courses for select
-- using (auth.role() = 'authenticated');
-- create policy "library_item_courses_write_librarian_admin"
-- on public.library_item_courses for all
-- using (
--   exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
-- )
-- with check (
--   exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
-- );


-- 6) Events (views/downloads)
create table if not exists public.library_events (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.library_items(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete set null,
  event_type text not null check (event_type in ('view', 'download')),
  created_at timestamptz not null default now()
);

create index if not exists library_events_item_idx on public.library_events(item_id);
create index if not exists library_events_user_idx on public.library_events(user_id);

alter table public.library_events enable row level security;

-- Students can insert their own events; can select only aggregated via views later (optional)
create policy "library_events_insert_authenticated"
on public.library_events for insert
with check (auth.role() = 'authenticated' and (user_id = auth.uid() or user_id is null));

-- Librarian/admin can read events (optional)
create policy "library_events_select_librarian_admin"
on public.library_events for select
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('librarian','admin'))
);
