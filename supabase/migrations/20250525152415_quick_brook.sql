/*
  # Website Configuration Tables

  1. New Tables
    - `website_config`
      - `id` (uuid, primary key)
      - `name` (text, website name)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `logos` (already exists)
      - Will be used to store the website logo

  2. Security
    - Enable RLS on `website_config` table
    - Add policy for authenticated users to read website config
    - Add policy for admin users to modify website config
*/

-- Create website_config table
CREATE TABLE IF NOT EXISTS website_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE website_config ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to website config"
  ON website_config
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin update access to website config"
  ON website_config
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE auth.email() = 'admin@example.com'))
  WITH CHECK (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE auth.email() = 'admin@example.com'));

-- Insert initial website config
INSERT INTO website_config (name) VALUES ('Raw Media');

-- Insert logo into existing logos table
INSERT INTO logos (url, alt_text) 
VALUES (
  'https://raw.githubusercontent.com/your-org/your-repo/main/logo.png',
  'Raw Media Logo'
);