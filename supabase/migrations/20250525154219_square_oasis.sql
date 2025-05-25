/*
  # Update logo URL with full Supabase storage path

  1. Changes
    - Updates the logo URL to use the complete Supabase storage URL
*/

UPDATE logos 
SET url = 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjYjYyNGVjLWJhZmEtNDBlZC05ZjUxLTQ0NThkZWQ0MWQwMCJ9.eyJ1cmwiOiJsb2dvcy9sb2dvLnBuZyIsImlhdCI6MTc0ODE4NzcyMSwiZXhwIjoxNzc5NzIzNzIxfQ.Z_bbLG4_mZoVbm1n7bM0pAQv0SwO06GL7n1TrZ8LZfI',
    alt_text = 'Raw Media Logo',
    updated_at = now()
WHERE alt_text = 'Raw Media Logo';