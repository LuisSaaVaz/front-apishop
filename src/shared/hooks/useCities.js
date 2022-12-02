import { useEffect, useState } from 'react'
import { getLocationService } from '../services'

const useCities = () => {
  const [location, setLocation] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true)
        setError("");
        const locations = await getLocationService()
        setLoading(false)
        setLocation(locations)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  return { location, loading, error }
}

export default useCities
