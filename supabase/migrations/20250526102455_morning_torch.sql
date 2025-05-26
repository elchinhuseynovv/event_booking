/*
  # Add background video URL to website configuration
  
  1. Changes
    - Adds background_video column to website_config table
    - Sets the background video URL
*/

ALTER TABLE website_config 
ADD COLUMN IF NOT EXISTS background_video text;

UPDATE website_config 
SET background_video = 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/public/uidata/background_video.mp4',
    updated_at = now();