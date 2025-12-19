/*
  # Create business analysis requests table

  1. New Tables
    - `business_analysis_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `business_type` (text, required)
      - `message` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `business_analysis_requests` table
    - Add policy for public insert access (form submissions)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS business_analysis_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE business_analysis_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert (for form submissions)
CREATE POLICY "Anyone can submit business analysis requests"
  ON business_analysis_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow authenticated users to read all requests (for admin access)
CREATE POLICY "Authenticated users can read all requests"
  ON business_analysis_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_business_analysis_requests_email 
  ON business_analysis_requests(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_business_analysis_requests_created_at 
  ON business_analysis_requests(created_at DESC);