import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Random from './Random.jsx'

export default function AllQuotes() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const authorSlug = searchParams.get('author')
  const [limit, setLimit] = useState(4)
  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const response = await fetch(
      `https://api.quotable.io/quotes?author=${authorSlug}&limit=${limit}&page=${page}`
    )
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [page, limit])

  return (
    <div>
      {data && (
        <div className='All'>
          <Link to='/'>
            <Random />
          </Link>
          <h2 className='All-h2'>{data.results[0].author}</h2>
          <ul className='All-ul'>
            {data.results.map((quote) => (
              <li className='All-li' key={quote._id}>
                {`“${quote.content}”`}
              </li>
            ))}
          </ul>
          <div className='All-buttons'>
            <button
              className='All-button'
              onClick={() => {
                setPage(page - 1)
              }}
              disabled={page === 1}>
              Previous
            </button>

            <button
              className='All-button'
              onClick={() => {
                setPage(page + 1)
              }}
              disabled={page === data.totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
