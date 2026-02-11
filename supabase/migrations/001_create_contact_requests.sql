-- Run this script in the Supabase SQL Editor (Dashboard → SQL Editor) to create
-- the contact_requests table and enable anonymous inserts for the contact form.
--
-- Create contact_requests table for Flight indoor golf center
CREATE TABLE IF NOT EXISTS public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous (unauthenticated) inserts for contact form submissions
CREATE POLICY "Allow anonymous insert for contact form"
  ON public.contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: No SELECT, UPDATE, or DELETE for anonymous users
-- (Only authenticated admins would need those - add later if needed)
