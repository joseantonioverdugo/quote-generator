// import React, { createContext, useState, useEffect } from 'react'
// import { useFetch } from '../UseFetch'

// export const DataContext = createContext()

// export function DataProvider({ children }) {
//   const [limit, setLimit] = useState(4)
//   const [page, setPage] = useState(1)
//   const [AllQuotes, setAllQuotes] = useState(null)

//   const {
//     data: randomData,
//     loading: randomLoading,
//     count,
//     setCount,
//   } = useFetch('https://api.quotable.io/random')

//   const author = randomData && randomData.authorSlug

//   useEffect(() => {
//     const { data: AllData } = useFetch(
//       `https://api.quotable.io/quotes?author=${author}&limit=${limit}&page=${page}`
//     )
//     setAllQuotes(AllData)
//   }, [author])

//   console.log(AllQuotes)

//   useEffect(() => {
//     // Aquí puedes realizar cualquier acción adicional cuando count cambie
//     console.log('El valor de count ha cambiado:', count)
//   }, [count, page, limit])
//   console.log(author)

//   return (
//     <DataContext.Provider
//       value={{
//         randomData,
//         randomLoading,
//         count,
//         setCount,
//         AllQuotes,
//         page,
//         setPage,
//       }}>
//       {children}
//     </DataContext.Provider>
//   )
// }

import React, { createContext, useState, useEffect } from 'react'
import { useFetch } from '../UseFetch'

export const DataContext = createContext()

export function DataProvider({ children }) {
  const {
    data: randomData,
    loading: randomLoading,
    count,
    setCount,
  } = useFetch('https://api.quotable.io/random')

  const author = randomData && randomData.authorSlug

  useEffect(() => {
    // console.log('El valor de count ha cambiado:', count)
  }, [count])
  console.log(author)

  return (
    <DataContext.Provider
      value={{
        randomData,
        randomLoading,
        count,
        setCount,
        author,
      }}>
      {children}
    </DataContext.Provider>
  )
}
