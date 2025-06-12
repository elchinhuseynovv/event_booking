/*
  # Update logo to use logo1.png
  
  1. Changes
    - Removes existing logo entries
    - Adds the new logo1.png with the provided signed URL
    - Ensures clean logo state in database
*/

-- Clear all existing logos to ensure clean state
DELETE FROM logos;

-- Insert the new logo1.png
INSERT INTO logos (url, alt_text)
VALUES (
  'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9sb2dvMS5wbmciLCJpYXQiOjE3NDk3MTU1MzksImV4cCI6MjQ0MDkxNTUzOX0.M7GZcGm3nDDkChBe9o1mB4wl2FBklOAycbodXzm9jQk',
  'Raw Media Logo'
);