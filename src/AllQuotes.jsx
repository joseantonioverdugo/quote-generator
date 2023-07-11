import { useLocation } from 'react-router-dom'
import { useFetch } from './UseFetch.jsx'

export default function AllQuotes() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const authorSlug = searchParams.get('author')
  const { data, loading, error } = useFetch(
    `https://api.quotable.io/quotes?author=${authorSlug}`
  )

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <ul>
            {data.results.map((quote) => (
              <li key={quote._id}>{quote.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
