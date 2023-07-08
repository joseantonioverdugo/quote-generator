import { useState, useEffect } from 'react'
import RandomQuote from './RandomQuote'

export default function FetchQuote() {
  const [data, setData] = useState({
    quote: '',
    author: '',
    tags: [],
  })

  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/quotes/random')
    const data = await response.json()
    console.log(data[0].content)
    console.log(data[0].author)
    console.log(data[0].tags[0])
    setData({
      quote: data[0].content,
      author: data[0].author,
      tags: data[0].tags[0],
    })
  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <RandomQuote quote={data.quote} author={data.author} tags={data.tags} />
  )
}
