import React, { useEffect, useRef } from 'react'
import "../css/Section5.css"
import phone from "../assets/iphone 1.webp"
import lineLeft from "../assets/line pointer.webp"
import lineRight from "../assets/line pointer right.webp"
import like from "../assets/love (1) 1.webp"
import comment from "../assets/chat 1.webp"
import share from "../assets/share 1.webp"
import video4 from "../assets/testshot_5.1.webm"


const Section5 = () => {
  const videoRef3 = useRef(null);
  const handlePlayVideo = async() => {
     videoRef3.current.defaultMuted=true;
      await videoRef3.current.play()
      console.log(  videoRef3 && videoRef3.current  );
  }
  useEffect(() => {
    handlePlayVideo()
  }, [])
  
  

  return (
    <div className='flex justify-center items-center'>
      <div className='flex z-0 lg:justify-center justify-between items-center pr-3 lg:pr-14 pt-32 md:pt-48 md:pb-36 pb-28 lg:pt-56 lg:pb-40'>
      <div className='left flex flex-col md:pr-4 justify-between items-center pr-2 lg:pt-24 lg:pr-7 lg:pb-11 text-right'>
      <div className='flex text-right flex-col items-end'>
        <img className='w-14 lg:w-36 pb-1' src={lineLeft}/>
        <div className='textLeft lg:text-lg md:text-sm text-xs font-medium'>
        <h1 className=''>Only 3D animated content.</h1>
        <h1>No BS.</h1>
        </div>
      </div>
      <div className='text-right lg:pl-20'>
        <div className='flex  justify-center pl-3 text-right lg:pl-0 items-center pb-6'>
          <div className='text-xs text-right textMid  lg:pr-4'>
            <h1>Steve Goulding</h1>
            <h1>@Lokiverse</h1>
          </div>
          <div className='lg:h-14 md:h-8 md:w-8 h-5 ml-2 w-5 lg:w-14 rounded-full bg-white'><img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lswlAfb-BB__tjEQBptfYQ3t8q32sKPQ_g&usqp=CAU" alt="" /> </div>
        </div>
        <div className='text-right textDown text-xs md:text-sm lg:text-base lg:font-semibold'>
          <h1>Let the saga begin.</h1>
          <h1>#storytime</h1>
        </div>
      </div>
      </div>
      <div className='mobilePart relative'>
        <img className='iPhone z-50' src={phone} />
        <div className='absolute -z-10 bg-black mobileScreen2 h-96 w-64'>
        <video ref={videoRef3}  className='h-full w-full object-cover' autoPlay={true} playsInline={true} muted={true} loop={true} >
        <source src={video4} type="video/webm" />
        </video>
        </div>
      </div>
      <div className='flex flex-col  justify-between right pl-2 md:pl-4 pt-16 pb-11 lg:pl-7'>
      <div className='flex flex-col text-left justify-center items-start '>
        <img className='lg:w-36 w-14 pb-1' src={lineRight}/>
        <div className='text-xs textLeft lg:text-lg font-medium'>
        <h1 className='text-left'>Post content upto</h1>
        <h1 className='text-left'>60 seconds.</h1>
        </div>
      </div>
      <div className=''>
        <img className='lg:h-7 md:h-5 md:mb-3 h-4 mb-2 lg:mb-6' src={like}/>
        <img className='lg:h-7 md:h-5 md:mb-3 h-4 mb-2 lg:mb-6' src={comment}/>
        <img className='lg:h-7 md:h-5 md:mb-3 h-4 mb-2 lg:mb-6' src={share}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Section5


