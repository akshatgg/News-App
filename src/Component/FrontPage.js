import React from 'react'
import animationData from './animationData.json'
import adanimation  from './adanimation.json'
import Lottie from 'lottie-react'
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
           <div className='col-start-2 justify-self-center place-self-center text-3xl' >
            This is the best site you can see news where you want to every <br/> news in every 
            category. Customize your news feed to match your<br/> interests and passions.

           </div>
      </div>


      <div className='grid grid-cols-2 grid-rows-1'>
      <div className='col-start-1 justify-self-center place-self-center text-3xl ml-[100px]' >
      At NewsFeed, we believe that staying informed should be an <br/>enriching experience. Say goodbye to mundane  news<br/> consumption and hello to a world of dynamic,  thought-provoking <br/>stories curated just for you. 

           </div>
            <Lottie 
           animationData={animationData}
           loop={true}
           autoplay={true}
           className='h-[450px] mt-12 ml-[150px]'
           />
           
           </div>
    </div>
  )
}

export default FrontPage
