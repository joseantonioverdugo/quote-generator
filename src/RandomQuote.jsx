export default function RandomQuote({ quote, author, tags }) {
  return (
    <>
      {quote && (
        <div className='Quote'>
          <div className='Quote-rectangulo'></div>
          <p className='Quote-p'>{quote}</p>
        </div>
      )}
    </>
  )
}
