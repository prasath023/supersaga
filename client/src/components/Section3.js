import React, { useEffect, useRef } from 'react'
import "../css/Section3.css"
import video5 from "../assets/Dance.webm"

const Section3 = () => {
  const vidRef4 = useRef(null);
  const vidRef5 = useRef(null);
  const handlePlayVideo = async() => {
     vidRef4.current.defaultMuted=true;
     vidRef5.current.defaultMuted=true;
      await vidRef4.current.play()
      await vidRef5.current.play()
  }
  useEffect(() => {
    handlePlayVideo()
  }, [])
  return (
    <div className='bg-black section3 w-screen flex justify-between'>
        <div className='hidden lg:flex justify-center items-center lg:mt-10'>
        <video ref={vidRef4} className='h-2/4 w-full object-cover' autoPlay={true} playsInline={true} muted={true} loop={true} >
        <source src={video5} type="video/webm" />
        </video>
        </div>
        <div className='bg-black w-screen flex lg:items-end text-center items-center lg:text-end flex-col pt-20 pb-20 lg:py-28 lg:pr-10'>
         <div className='flex p-5 justify-end items-center lg:items-end w-full lg:p-16 sectionContainer2 flex-col'>
            <p className='line rounded-full'></p>
            <p className='text-4xl md:text-5xl lg:text-7xl pt-4 font-black text-white'>REAL-TIME BODY/FACE <br></br> CAPTURE</p>
            <p className='lg:py-7 md:text-2xl py-4 pt-6 lg:text-3xl text-xl text-white font-medium'>Time for magic.</p>
            <p className='text-xs lg:text-base md:text-sm font-normal lg:font-semibold'>No prior 3D knowledge is required to animate the character.
Just act in front of your camera, and the AI system will take
care of the rest.</p> 
        </div>
        <div className='flex justify-center lg:hidden items-center lg:mt-10'>
        <video ref={vidRef5}  className=' h-3/4 w-full object-cover' autoPlay={true} playsInline={true} muted={true} loop={true}  >
        <source src={video5} type="video/webm"/>
        </video>
        </div>
        <div className='flex pt-10 lg:pt-0 w-full lg:pb-14 lg:pr-16 justify-center lg:justify-end'>
        <a className='outline-none' href="https://discord.gg/UKaD54pv3n" target="_blank"><button className='text-white outline-none  font-semibold rounded-sm md:text-base text-xs lg:text-2xl  btnn w-56 '>
            Join the community
          </button></a>
          </div>
        </div>
    </div>
  )
}

export default Section3