import React from 'react'
import NewsItem from './NewsItem'

function News() {
  return (
    <div className='text-center '>
      <p className='text-4xl mt-5 mb-5'>
      Latest News
      </p>
      <div className='grid grid-cols-3  justify-items-center gap-y-6'>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
 
      <NewsItem/>

       </div>
    </div>
  )
}

export default News
