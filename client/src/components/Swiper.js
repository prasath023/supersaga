import React, { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import phone from "../assets/iphone.webp"
import "../css/SwiperCss.css"
import mainImg from "../assets/Rectangle - PC screen.webp" 
import secondImg from "../assets/2nd.webp"
import 'swiper/css/pagination';
import video1 from "../assets/character.webm"
import video2 from "../assets/spline.webm"
import image1 from "../assets/image1.jpg"

export default () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const handlePlayVideo = async() => {
    videoRef1.current.defaultMuted=true;
    videoRef2.current.defaultMuted=true;
     await videoRef1.current.play()
     await videoRef2.current.play()
 }
 useEffect(() => {
   handlePlayVideo()
 }, [])

  return (
    <Swiper
    modules={[ Pagination, Autoplay ]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      className="swiperCss w-full h-full -mt-16 lg:mt-0"
    >
        <SwiperSlide data-swiper-autoplay="3000" className='flex justify-center '>
          <div>
          <img className='mainImg relative' src={mainImg} alt="" />
            <div className='slide md:bg-black absolute flex justify-center items-center'>
        <video ref={videoRef1} className='h-full w-full object-cover'  autoPlay={true} playsInline={true} muted={true} loop={true} >
        <source src={video1} type="video/webm"  />
        </video>
          </div>
          </div></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="3000" className='flex phoneDiv justify-center items-center '>
        <div className="flex  relative lg:mt-0 h-2/4 md:h-full  justify-center items-center ">
        <img className='iPhone1 ' src={phone} alt="" />
          <div className='slideMob bg-black absolute flex justify-center items-center'>
          <img className="h-full w-full object-cover" src={image1} alt="" />
          </div>
        </div></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="3000"  className='flex justify-center '>
        <div>
        <img className='mainImg relative' src={mainImg} alt="" />
        <div className='slide bg-black absolute flex justify-center items-center'>
      <video ref={videoRef2} className='h-full w-full object-cover' autoPlay={true} playsInline={true} muted={true} loop={true}  >
      <source src={video2} type="video/webm"  />
        </video>
        </div>
        </div></SwiperSlide>      
    </Swiper>
  );
};
          
