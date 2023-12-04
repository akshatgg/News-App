import React from 'react'
import animationData from './animationData.json'
import adanimation  from './adanimation.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
function FrontPage() {
  return (
    <div>
      <div className='grid grid-cols-2 grid-rows-1 '>
           <Lottie 
           animationData={adanimation}
           loop={true}
           autoplay={true}
           className='h-[500px]  col-start-1'
           />
           <div className='col-start-2 justify-self-center place-self-center text-3xl text-center' >
            This is the best site you can see news where you want to every <br/> news in every 
            category. Customize your news feed to match your<br/> interests and passions.<br/>
           <br/>
           <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
           </div>
      </div>


      <div className='grid grid-cols-2 grid-rows-1'>
      <div className='col-start-1 justify-self-center place-self-center text-3xl ml-[100px] text-center' >
      At NewsFeed, we believe that staying informed should be an <br/>enriching experience. Say goodbye to mundane  news<br/> consumption and hello to a world of dynamic,  thought-provoking <br/>stories curated just for you. 

           </div>
            <Lottie 
           animationData={animationData}
           loop={true}
           autoplay={true}
           className='h-[450px] mt-12 ml-[150px]'
           />
           
           </div>


           <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Latest News</h1>

    </div>

  )
}

export default FrontPage
