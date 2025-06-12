import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Logo {
  id: string
  url: string
  alt_text: string
  created_at: string
  updated_at: string
}

export interface WebsiteConfig {
  id: string
  name: string
  background_video?: string
  created_at: string
  updated_at: string
}

// Fetch logo from database
export async function getLogo(): Promise<Logo | null> {
  try {
    console.log('Querying logos table...')
    const { data, error } = await supabase
      .from('logos')
      .select('*')
      .limit(1)
      .single()
    
    if (error) {
      console.error('Error fetching logo from database:', error)
      return null
    }
    
    console.log('Raw logo data from database:', data)
    
    if (data) {
      // If the URL is already a full URL (starts with http), use it directly
      if (data.url.startsWith('http')) {
        console.log('Using direct URL:', data.url)
        return data
      }
      
      // Otherwise, try to create a signed URL from storage
      console.log('Attempting to create signed URL for:', data.url)
      
      // Check if the file exists in storage
      const { data: fileData, error: fileError } = await supabase.storage
        .from('logos')
        .list('', { search: data.url })
      
      if (fileError || !fileData || fileData.length === 0) {
        console.warn('Logo file not found in storage:', data.url)
        // If it's not in storage but we have a URL, try to use it anyway
        return data
      }
      
      // Generate a signed URL for the logo image
      const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from('logos')
        .createSignedUrl(data.url, 60 * 60 * 24 * 365) // 1 year expiry
      
      if (signedUrlError || !signedUrlData?.signedUrl) {
        console.error('Error creating signed URL:', signedUrlError)
        // Fallback to the original URL
        return data
      }
      
      console.log('Generated signed URL:', signedUrlData.signedUrl)
      
      return {
        ...data,
        url: signedUrlData.signedUrl
      }
    }
    
    return data
  } catch (error) {
    console.error('Error fetching logo:', error)
    return null
  }
}

// Fetch website config from database
export async function getWebsiteConfig(): Promise<WebsiteConfig | null> {
  try {
    const { data, error } = await supabase
      .from('website_config')
      .select('*')
      .limit(1)
      .single()
    
    if (error) {
      console.error('Error fetching website config:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error fetching website config:', error)
    return null
  }
}