/*
  # Update logo to use new logo1.png URL

  1. Changes
    - Removes existing logo entries to ensure clean state
    - Adds the new logo1.png with the updated signed URL
    - Updates the logo reference to point to the correct storage location
*/

-- Clear existing logos to ensure clean state
DELETE FROM logos;

-- Insert the new logo1.png with updated signed URL
INSERT INTO logos (url, alt_text)
VALUES (
  'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9sb2dvMS5wbmciLCJpYXQiOjE3NDk4OTU2NDMsImV4cCI6MjE4MTg5NTY0M30.QOsn-xkPcEet9t4SvCwXKmQEYAaos0wP08swHET4xeo',
  'Raw Media Logo'
);