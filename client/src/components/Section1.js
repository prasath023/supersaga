import React from 'react'
import "../css/Section1.css"
import review from "../assets/leon review.webp"
const Section1 = () => {

  return (
    <div className='flex flex-col justify-center lg:pt-40 pb-28 pt-20 md:pt-36 lg:pb-32'>
        <div className='flex justify-center items-center pb-8 lg:pb-0'>
            <h1 className='backGroundLetter1 relative'>LET THE <br></br><span className='pl-10 lg:pl-32'>SAGA BEGIN</span></h1>
            <img className='h-24 absolute md:h-36 lg:h-56' src={review}/>
        </div>
        <div className='flex flex-col pl-5 w-full md:ml-20 lineDiv lg:w-2/4 lg:ml-72'>
            <p className='line rounded-full'></p>
            <p className='lineText pt-0 lg:pt-4 text-xs'>One of the veterans of the Animation Industry;</p>
            <p className='lineText text-xs'>Contributed to flims like Spiderman, Men-in-black,
            Stuart Littel etc.</p>
        </div>
    </div>
  )
}

export default Section1