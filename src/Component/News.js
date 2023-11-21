    import React, { useEffect, useState } from 'react'
    import NewsItem from './NewsItem'

    function News() {

    const[news,setnews]=useState({
        
        articles: []

        
        
    
    })


    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('');
            const result = await response.json();
            // setnews({articles:result.articles});
            // setnews(result.articles);
               setnews(result)
        } 
        
        
        catch (error) {
            console.error('Error in fetching data:', error);
        }
        };

        fetchData();
    }, []);
    


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
