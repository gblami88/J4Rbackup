/*
  # Create Analysis Requests Table

  1. New Tables
    - `analysis_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Customer's name
      - `email` (text) - Customer's email address
      - `business_type` (text) - Type of business
      - `message` (text, optional) - Additional message from customer
      - `created_at` (timestamptz) - When the request was submitted
      - `status` (text) - Status of the request (pending, contacted, completed)
  
  2. Security
    - Enable RLS on `analysis_requests` table
    - Add policy for public inserts (anyone can submit a request)
    - No select/update/delete policies (only admins should access via dashboard)
*/

CREATE TABLE IF NOT EXISTS analysis_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE analysis_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit analysis requests"
  ON analysis_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);