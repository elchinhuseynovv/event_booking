/*
  # Update logo URL to new signed URL
  
  1. Changes
    - Updates the logo URL to the new signed URL provided
    - Ensures the correct logo is loaded from Supabase storage
*/

-- Clear existing logos and insert the new one
DELETE FROM logos;

INSERT INTO logos (url, alt_text)
VALUES (
  'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9sb2dvLnBuZyIsImlhdCI6MTc0OTcxNDgwNywiZXhwIjoyNDQwOTE0ODA3fQ.n9HYG5TuhTxBHY8dVV98vlSiNELAB-B_b6EB5Bh6nk0',
  'Raw Media Logo'
);