import React from 'react';
import "./NewsItem.css";

function NewsItem({ title, description, image, readMore, author, date, badgeNumber }) {
  return (
    <div>
      <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        {badgeNumber && (
          <div className="absolute inline-flex items-center justify-center w-[130px] h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {badgeNumber}
          </div>
        )}
        
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <p className='mb-2 text-gray-700'>By {author} on {new Date(date).toGMTString()}</p>
          <a href={readMore} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
