/*
  # Update logo URL
  
  1. Changes
    - Updates the existing logo URL in the logos table to point to the new logo.png file
*/

UPDATE logos 
SET url = 'logo.png',
    alt_text = 'Raw Media Logo',
    updated_at = now()
WHERE alt_text = 'Raw Media Logo';