// https:api.quotable.io/quotes?author=${data.authorSlug}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MainContent({ params }) {
  console.log(params)
  return (
    <main className='Main'>
      <div className='Main-quote'>
        <p className='Main-p'>{params.content}</p>
      </div>
      <Link to={`/quotes?author=${params.authorSlug}`}>
        <div className='Data'>
          <div className='Data-author'>
            <p className='Data-name'>{params.author}</p>
            <svg
              className='Data-svg'
              xmlns='http://www.w3.org/2000/svg'
              width='38'
              height='38'
              viewBox='0 0 38 38'
              fill='none'>
              <g clipPath='url(#clip0_1_42)'>
                <path
                  d='M25.3492 17.4167H6.33334V20.5833H25.3492V25.3333L31.6667 19L25.3492 12.6667V17.4167Z'
                  fill='#f2f2f2'
                />
              </g>
              <defs>
                <clipPath id='clip0_1_42'>
                  <rect width='38' height='38' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='Data-tags'>
            <span className='Data-tag'>{params.tags[0]}</span>
          </div>
        </div>
      </Link>
    </main>
  )
}
