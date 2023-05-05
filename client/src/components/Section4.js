import React from 'react'
import "../css/Section4.css"
import timeLine from "../assets/Powerful controls.webp"

const Section4 = () => {
  return (
    <div className='section4 flex  relative text-white'>
        <div className='relative z-10 lg:pl-10 '>
    <div className='flex justify-center w-screen items-center lg:items-start lg:justify-start lg:p-16  pt-10  sectionContainer2 flex-col'>
        <p className='line1 rounded-full'></p>
        <p className='text-4xl md:text-5xl text-center lg:text-start lg:text-7xl pt-4 font-black'>POWERFUL <br></br> CONTROLS</p>
        <p className='lg:py-7 py-4 text-center lg:text-start  pt-6 text-lg md:text-2xl lg:text-3xl font-medium'>Enhancing your creativity.</p>
        <p className='lg:text-base text-center lg:text-start md:text-sm text-xs font-normal lg:font-semibold'>Setup new camera animations to capture cinematic
renders. A powerful timeline system that gives you
enormous control over the content. Edit, Drag, Trim &
Delete the animation tracks within a button click.</p>
    </div>
    <div className='flex justify-center items-center '>
    <img className='lg:hidden w-5/6 pl-5 lg:pl-0 mt-8 lg:mt-0 lg:mb-64 mr-2' src={timeLine} alt="" />
    </div>
    <div className='inputDiv3 pt-16 lg:pt-5 pl-5  lg:pl-16'>
    <a className='outline-none' href="https://www.youtube.com/channel/UCiDHzXKKNyp5KzCcwJR8G7g" target="_blank"><button className='outline-none text-white cursor-pointer font-semibold rounded-sm text-sm md:text-base lg:text-2xl btnnn'>
        How it works
      </button></a> 
    </div>
    </div>
    <div className=' z-0 flex justify-end h-full mt-64 lg:mt-0 items-end w-screen relative'>
      <img className='hidden scale lg:flex lg:mb-64 mr-2' src={timeLine} alt="" />
      <h1 className='absolute textDirection pr-1 lg:pr-0 z-50'>DIRECTION</h1>
    </div>
</div>
  )
}

export default Section4