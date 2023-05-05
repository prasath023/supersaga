import React, { useEffect, useRef, useState } from 'react'
import "../css/Main.css"
import emailjs from '@emailjs/browser';
import apple from "../assets/apple-logo 1.webp" 
import vr from "../assets/vr-glasses 1.webp" 
import windows from "../assets/windows-platform-logo 1.webp" 
import Swiper from './Swiper'
import { db } from "../firebase"
import PhoneInput from 'react-phone-number-input'
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import logo from "../assets/logo.webp"
import CloseIcon from '@mui/icons-material/Close';
import 'react-phone-number-input/style.css'
import Form from "./Form"
const Main = ({openModalFunction}) => {

  const handleOpenModal=()=>{
    openModalFunction(true)
  } 

  
  return (
    <div className='flex pt-20 md:pt-24 bg-black flex-col justify-between lg:pt-24 items-center'>
      <div className='heading1 w-full justify-center items-center flex flex-col lg:flex-row font-bold text-white lg:text-5xl'>
        {/* <p className='text2 pt-1 font-bold text-white text-5xl'>
          Create your own 
           </p>
          <div className='span1 flex flex-col pl-3 pt-1 items-start pr-2'>
          <span className='change'>cartoon series</span>
          <span className='change'>virtual influencer</span>
          <span className='change'>Fan-fiction stories</span>
          <span className='change'>cartoon series</span>
          </div> */}
          <p className='text2 text-center lg:text-left lg:pr-3'>Create your own</p>
          <ul className='dynamic md:mt-5 lg:mt-0 text-center lg:text-left'>
            <li>
            <span>Cartoon Series.</span>
            </li>
            <li>
            <span>3D Web Comics.</span>
            </li>
            <li>
            <span>Fan-fiction Stories.</span>
            </li>
          </ul>
      </div>
      <div className='heading2 md:mt-5 font-medium'>
        <h1 className='text1' >
          The power of pixar in your pocket.
        </h1>
      </div>
      <div className='inputDiv relative '>
        

        <div className='flex  relative  bg-black'>
    {/* <input onClick={handleOpenModal} placeholder='Your email' className='lg:text-2xl md:text-base text-sm input1 relative outline-none px-2 -mb-10 lg:px-5 bg-black  rounded-l-sm' type='text'  /> */}
          <button type='submit' onClick={handleOpenModal} className=' md:text-lg outline-none text-white font-semibold rounded-sm text-sm lg:text-2xl lg:px-10 px-5 py-3 btnclr lg:py-5 '>
           Download Window's App <span className='lg:text-xl md:text-sm text-xs font-medium'>(beta)</span>
          </button>
          </div>
         {/* {openModal && 
         <div className='flex flex-col md:-ml-6 absolute justify-start items-center w-screen  h-screen bg-black '>
          <div className='flex justify-center mr-14 pt-5 md:mr-0 md:pt-0 items-center w-screen'>
          <div className='flex text-white justify-end  lg:justify-center items-center w-full md:w-3/4 lg:w-1/4'>
      <a className='outline-none' href=""><img className='w-40 md:w-44 lg:w-48 mr-4 md:mr-10 lg:mr-0 cursor-pointer' src={logo} /></a>  
      </div>
          <div  className='w-1/4  flex cursor-pointer justify-end text-white mr-7 lg:hidden md:mr-20' >
          <CloseIcon onClick={handleOpenModal} className='absolute text-white -mt-3' />
      </div>
          </div>
          <div className='mt-28 md:mt-44'>
          <form ref={form} className="flex flex-col justify-start items-start" onSubmit={handleSubmit}>
          
          {success && <div className='text-green-400 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:mt-5 lg:w-64 flex items-center lg:h-10 success absolute'>Email submitted successfully</div>}
             <p className='mb-1 text-xs md:text-sm lg:text-base'>Email <span className='star'>*</span> :</p>
            <input onChange={handleChange1} value={mailId} name="email" placeholder='Your email' className='lg:text-base md:text-sm bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='email'  />
            <p className='md:mb-3 mb-2 lg:mb-5 text-xs md:text-sm lg:text-base'>Phone Number : (optional)</p>
            <div  className="flex h-9 justify-center mb-7 items-center">
            <PhoneInput
      international
      countryCallingCodeEditable={false}
      defaultCountry="IN"
      value={value}
      name="phoneNumber" 
      className="px-5 flex h-20 border border-gray-400 outline-none"
      onChange={setValue}/>
            </div>
            <p className='mb-2 md:text-sm text-xs lg:text-base '>Tell us a story you want to create : (optional)</p>
            <textarea onChange={handleChange3} value={story} name="story" placeholder='If the story is good we will give you access sooner' className='lg:text-base md:text-sm mb-5 text-xs input11 relative outline-none px-2 bg-black lg:px-5 pt-1 lg:pt-2 md:pt-1' type='text'  />
            <button  type='submit' onSubmit={handleSubmit}  className=' outline-none text-white font-semibold rounded-r-sm text-xs md:text-sm lg:text-xl btn11 '>
              Submit
            </button>
          </form>
          </div>
         </div>} */}

{/* 
        <div className='hidden lg:flex'>
          <Modal className="bg-black text-white" submit={submit && submit}>
        <form ref={form} className="flex px-24 flex-col justify-start items-start" onSubmit={handleSubmit}>
          
        {success && <div className='text-green-400 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:mt-5 lg:w-64 flex items-center lg:h-10 success absolute'>Email submitted successfully</div>}
           <p className='mb-7 text-xs md:text-sm lg:text-base'>Email <span className='star'>*</span> :</p>
          <input onChange={handleChange1} value={mailId} name="email" placeholder='Your email' className='lg:text-base md:text-sm bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-7' type='email'  />
          <p className='mb-9 text-xs md:text-sm lg:text-base'>Phone Number : </p>
          <div  className="flex h-9 justify-center mb-7 items-center">
          <PhoneInput
    international
    countryCallingCodeEditable={false}
    defaultCountry="IN"
    value={value}
    name="phoneNumber" 
    className="px-5 flex h-20 border border-gray-400 outline-none"
    onChange={setValue}/>
          </div>
          <p className='mb-7 mt-2 md:text-sm text-xs lg:text-base '>Tell us a story you want to create : </p>
          <textarea onChange={handleChange3} value={story} name="story" placeholder='If the story is good we will give you access sooner ( OPTIONAL )' className='lg:text-base md:text-sm mb-9 text-xs input11 relative outline-none px-2 bg-black lg:px-5 pt-1 lg:pt-2  md:pt-1' type='text'  />
          <button  type='submit' onSubmit={handleSubmit}  className='mx-auto outline-none text-white font-semibold rounded-r-sm text-xs md:text-sm lg:text-xl btn11 '>
            Submit
          </button>
        </form>
          </Modal>
        </div> */}
          {/* <input onChange={handleChange} value={mailId} name="email" placeholder='Your email' className='lg:text-2xl md:text-base text-sm input1 relative outline-none px-2 lg:px-5 bg-black  rounded-l-sm' type='email'  /> */}
          {/* <button type='submit' onSubmit={handleSubmit} className='outline-none text-white font-semibold rounded-r-sm absolute text-xs md:text-sm lg:text-2xl btn1 lg:w-56 '>
            Get Access
          </button> */}
      </div>

      <div className='flex promotionDiv relative justify-center text-sm md:text-base lg:text-lg lg:font-medium items-center'>
        To be availabe on
        <div className='flex text-white justify-center items-center ml-2 lg:ml-5'>
         <img className='lg:w-5 lg:h-5 w-4 h-4 mr-2 lg:mr-5 cursor-pointer' src={apple}/>
         <img className='lg:w-5 lg:h-5 w-4 h-4 mr-2 lg:mr-5 cursor-pointer' src={windows}/>
         <img className='lg:w-5 lg:h-5 w-4 h-4 cursor-pointer' src={vr}/>
        </div>
      </div>

      <div className='w-screen imageDiv lg:flex flex-col justify-center pt-12 lg:pt-5 '>
        <div className='w-full bg-black flex relative justify-center items-center'>
          <div className='relative z-50 flex justify-center items-center'>
            <Swiper/>
          </div>
        </div>
        <div className='buttonDiv flex w-2/4 mx-auto justify-center' >
          <a className='outline-none' href="https://www.youtube.com/channel/UCiDHzXKKNyp5KzCcwJR8G7g" target="_blank"><button className='bg-black mr-3 lg:mr-7 outline-none text-white font-semibold rounded-md btn2 text-xs lg:text-2xl  '>Watch Demo</button></a>
          <a className='outline-none' href="https://discord.gg/UKaD54pv3n" target="_blank"><button className=' text-white ml-3 lg:ml-7 outline-none font-semibold rounded-md btn3 text-xs lg:text-2xl '>Join Discord</button></a>
        </div>

      </div>

    </div>
  )
}

export default Main;