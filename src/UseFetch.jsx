import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const abortController = new AbortController()
    setLoading(true)
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [count])
  return { data, loading, error, count, setCount }
}
