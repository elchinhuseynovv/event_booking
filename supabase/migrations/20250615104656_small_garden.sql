/*
  # Fix RLS policies for website_config table

  1. Changes
    - Fix the admin policy to use proper email checking
    - Ensure policies work correctly with authentication
    - Add proper admin access control
*/

-- Drop existing problematic policy
DROP POLICY IF EXISTS "Allow admin update access to website config" ON website_config;

-- Create corrected admin policy
CREATE POLICY "Allow admin update access to website config"
  ON website_config
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@example.com'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@example.com'
    )
  );

-- Also add INSERT policy for admin
CREATE POLICY "Allow admin insert access to website config"
  ON website_config
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@example.com'
    )
  );

-- Add DELETE policy for admin
CREATE POLICY "Allow admin delete access to website config"
  ON website_config
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email = 'admin@example.com'
    )
  );