    import React, { useEffect, useState } from 'react'
    import NewsItem from './NewsItem'
    import Spinner from './Spinner';

    function News({apikey,pagesize,categories}) {
    const[page,setpage]=useState(1)
    // const[news,setnews]=useState({
    //     articles:[],
    //     page:1
    // })
    const [loading,setloading]=useState(true);
    const[news,setnews]=useState([])
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${apikey}&page=${page}&pagesize=${pagesize}`);         
                   const result = await response.json();
           
           
                // articles:result.articles});
            setnews(result.articles);
            //    setnews(result)
            setloading(true)
            }
        
        
        catch (error) {
            console.error('Error in fetching data:', error);
        }
        finally{
            setloading(false)
        }
    };
    
    fetchData();
}, []);

const Prevbtn = async () => {
    console.log("prev");
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${apikey}&page=${page - 1}&pagesize=${pagesize}`);       
         const result = await response.json();
       
        setpage(page -   1);
        setnews(result.articles);
    } catch (error) {
        console.error('Error in fetching data:', error);
    }
    finally{
        setloading(false)
    }
}

const Nextbtn = async () => {
    console.log("Next")
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${apikey}&page=${page + 1}&pagesize=${pagesize}`);       
         const result = await response.json();
        setpage(page + 1);
        setnews(result.articles);
        setloading(true)
    } catch (error) {
        console.error('Error in fetching data:', error);
    }
    finally{
        setloading(false)
    }
}


    return (
        <div className='text-center '>
        <p className='text-4xl mt-5 mb-5'>
        Latest News
        </p>
        <div className='flex justify-content-center'>       
            {loading && <Spinner/>}  
            </div>    
        <div className='grid grid-cols-3  justify-items-center gap-y-6'>
        
        {news.map((element) => (
            <NewsItem 
            id={element.id}
            title={element.title} 
            description={element.description} 
            author={element.author}
            image={element.urlToImage}
            readMore={element.url}
            date={element.publishedAt}
            badgeNumber={element.source.name}
            />
        ))}
        
        </div>




        <div className='d-flex justify-space-between space-x-96 mt-[20px]'>
           {loading===false ? (<button disabled={page <= 1} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Prevbtn}>&larr;Prev</button>):null}
            {loading===false ? (<button disabled={page+1 > Math.ceil(news.totalResults / 20)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Nextbtn}>
  Next&rarr;
</button>):null}
            </div>
        </div>

        
        
    )
    }

    export default News
