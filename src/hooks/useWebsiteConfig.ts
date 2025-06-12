import { useState, useEffect } from 'react'
import { getWebsiteConfig, type WebsiteConfig } from '../lib/supabase'

export function useWebsiteConfig() {
  const [config, setConfig] = useState<WebsiteConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchConfig() {
      try {
        setLoading(true)
        const configData = await getWebsiteConfig()
        setConfig(configData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch website config')
      } finally {
        setLoading(false)
      }
    }

    fetchConfig()
  }, [])

  return { config, loading, error }
}