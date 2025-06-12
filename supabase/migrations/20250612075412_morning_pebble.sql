/*
  # Update logo URL with new signed URL

  1. Changes
    - Updates the logo URL to use the new signed URL provided
    - Ensures the logo points to the correct storage location
*/

UPDATE logos 
SET url = 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9sb2dvLnBuZyIsImlhdCI6MTc0OTcxNDgwNywiZXhwIjoyNDQwOTE0ODA3fQ.n9HYG5TuhTxBHY8dVV98vlSiNELAB-B_b6EB5Bh6nk0',
    alt_text = 'Raw Media Logo',
    updated_at = now()
WHERE alt_text = 'Raw Media Logo';