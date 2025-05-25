/*
  # Update logo URL with full storage path

  1. Changes
    - Updates the logo URL to use the full storage path
    - Ensures the logo is properly referenced from the storage bucket
*/

UPDATE logos 
SET url = 'storage/v1/object/public/logos/logo.png',
    alt_text = 'Raw Media Logo',
    updated_at = now()
WHERE alt_text = 'Raw Media Logo';