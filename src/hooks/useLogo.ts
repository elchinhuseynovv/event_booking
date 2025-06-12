import { useState, useEffect } from 'react'
import { getLogo, type Logo } from '../lib/supabase'

export function useLogo() {
  const [logo, setLogo] = useState<Logo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLogo() {
      try {
        setLoading(true)
        console.log('Fetching logo from database...')
        const logoData = await getLogo()
        console.log('Logo data received:', logoData)
        setLogo(logoData)
      } catch (err) {
        console.error('Error in useLogo hook:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch logo')
      } finally {
        setLoading(false)
      }
    }

    fetchLogo()
  }, [])

  return { logo, loading, error }
}