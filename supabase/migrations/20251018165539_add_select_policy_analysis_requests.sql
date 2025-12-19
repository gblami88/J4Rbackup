/*
  # Add SELECT policy for analysis_requests
  
  1. Security Changes
    - Add policy to allow anyone to read analysis requests
    - This enables the admin page to display and export data
*/

CREATE POLICY "Anyone can view analysis requests"
  ON analysis_requests
  FOR SELECT
  TO anon
  USING (true);
