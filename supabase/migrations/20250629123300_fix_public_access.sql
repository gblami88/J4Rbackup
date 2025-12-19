/*
  # Fix RLS Policy for Public Form Submissions

  1. Changes
    - Drop existing restrictive policy
    - Create new policy that allows public access for form submissions
    - This allows anyone (not just anon role) to submit the form

  2. Security
    - Policy still restricts to INSERT only
    - No read access for unauthenticated users
    - Maintains security while allowing form submissions
*/

-- Drop the old policy
DROP POLICY IF EXISTS "Anyone can submit business analysis requests" ON business_analysis_requests;

-- Create new policy with public access for inserts
CREATE POLICY "Public can submit business analysis requests"
  ON business_analysis_requests
  FOR INSERT
  TO public
  WITH CHECK (true);
