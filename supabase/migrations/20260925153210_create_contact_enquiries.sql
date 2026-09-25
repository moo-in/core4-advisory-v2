/*
# Create contact_enquiries table

1. New Tables
- `contact_enquiries`
- `id` (uuid, primary key, auto-generated)
- `full_name` (text, not null) — the enquirer's full name
- `designation` (text, not null) — their role or title
- `organisation` (text, not null) — organisation or individual identifier
- `whatsapp_number` (text, not null) — contact number for WhatsApp
- `email` (text, not null) — email address
- `requirement_area` (text, not null) — selected area of interest
- `requirement_details` (text, not null) — free-text description of the requirement
- `privacy_acknowledged` (boolean, not null, default false) — confirms the user agreed to the privacy policy
- `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_enquiries`.
- Allow anon + authenticated INSERT only (public contact form, no sign-in).
- No SELECT, UPDATE, or DELETE from the frontend — enquiries are managed server-side.

3. Notes
- This is a single-tenant no-auth app. The contact form is public.
- Only INSERT is exposed to the anon role so visitors can submit enquiries.
- All other access is denied by default (no SELECT/UPDATE/DELETE policies for anon).
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  designation text NOT NULL,
  organisation text NOT NULL,
  whatsapp_number text NOT NULL,
  email text NOT NULL,
  requirement_area text NOT NULL,
  requirement_details text NOT NULL,
  privacy_acknowledged boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_enquiries" ON contact_enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
