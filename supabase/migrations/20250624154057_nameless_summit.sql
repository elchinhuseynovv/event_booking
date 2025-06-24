/*
  # Update background image URL

  1. Changes
    - Updates the background_video column in website_config to use the new background image
    - This will change the home page background from video to the new image
*/

UPDATE website_config 
SET background_video = 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/uidata/background.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1aWRhdGEvYmFja2dyb3VuZC5qcGciLCJpYXQiOjE3NTA3Nzk2MTcsImV4cCI6MjE4Mjc3OTYxN30.-nH5usbU7ykOb2_9FHhZQKR0pOvJeWbCGaG7ETiRCkI',
    updated_at = now();