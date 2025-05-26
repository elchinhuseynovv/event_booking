/*
  # Update logo to use logo.png

  1. Changes
    - Removes existing logo
    - Adds new logo.png with correct URL
*/

-- Remove existing logo
DELETE FROM logos;

-- Insert new logo
INSERT INTO logos (url, alt_text)
VALUES (
  'logo.png',
  'Raw Media Logo'
);