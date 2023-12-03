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
            category 

           </div>
      </div>


      <div>
            <Lottie 
           animationData={animationData}
           loop={true}
           autoplay={true}
           className='h-[500px] ml-[60%] mt-12'
           />
           
           </div>
    </div>
  )
}

export default FrontPage
