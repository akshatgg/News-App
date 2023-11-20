import React, { useState } from 'react'
import NewsItem from './NewsItem'

function News() {

  const[news,setnews]=useState({
    
     
      "articles": [
          {
              "source": {
                  "id": "news-com-au",
                  "name": "News.com.au"
              },
              "author": "Matthew Sullivan",
              "title": "Cricket world slams utter ‘greed and overkill’",
              "description": "Whoever wins Sunday’s World Cup between Australia and India will barely get a chance to celebrate, thanks to cricket’s relentless international schedule.",
              "url": "https://www.news.com.au/sport/cricket/greed-and-overkill-forgotten-australia-vs-india-series-proves-cricket-has-lost-the-plot/news-story/782837d86a127691e5c6f8835d6bf912",
              "urlToImage": "https://content.api.news/v3/images/bin/a32283a16f245590b11e1624963855b2",
              "publishedAt": "2023-11-18T12:03:00Z",
              "content": "Whoever wins Sunday’s World Cup between Australia and India will barely get a chance to celebrate, thanks to cricket’s relentless international schedule.\r\nThe two giants of global cricket will battle… [+3620 chars]"
          },
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
          },
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
          }
      ]
  
  })

  
  
  return (
    
    <div className='text-center '>
      <p className='text-4xl mt-5 mb-5'>
      Latest News
      </p>
      <div className='grid grid-cols-3  justify-items-center gap-y-6'>
      
            
     {news.articles.map((element) => (
         <NewsItem 
         id={element.id}
         title={element.title} 
         description={element.description} 
         
         image={element.urlToImage}
         readMore={element.url}
         />
     ))}
    
    
 
     

       </div>
    </div>
  )
}

export default News
