import { useContext, useState, useEffect } from 'react'
import { DataContext } from './context/DataContext'
import { Link } from 'react-router-dom'
import Random from './Random.jsx'

export default function AllQuotes() {
  const [quotes, setQuotes] = useState(null)
  const [limit, setLimit] = useState(4)
  const [page, setPage] = useState(1)

  const { author } = useContext(DataContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.quotable.io/quotes?author=${author}&limit=${limit}&page=${page}`
      )
      const data = await response.json()
      setQuotes(data)
      console.log(data)
    }

    fetchData()
  }, [author, limit, page])

  return (
    <div>
      {quotes && (
        <div className='All'>
          <Link to='/'>
            <Random />
          </Link>
          <h2 className='All-h2'>{quotes.results[0].author}</h2>
          <ul className='All-ul'>
            {quotes.results.map((quote) => (
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
              disabled={page === quotes.totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
