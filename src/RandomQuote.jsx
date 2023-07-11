import MainContent from './MainContent'
import Random from './Random'

import { useFetch } from './UseFetch'
export default function RandomQuote() {
  const { data, error, count, setCount } = useFetch(
    'https://api.quotable.io/random'
  )

  return (
    <>
      {error && <p className='Quote-p'>Error: {error}</p>}
      {data && (
        <div className='Wrapper'>
          <Random count={count} setCount={setCount} />
          <MainContent params={data} />
        </div>
      )}
    </>
  )
}
