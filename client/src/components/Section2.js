import React, { useState,useRef,useEffect } from 'react'
import "../css/Section2.css"
import {useInView} from 'react-intersection-observer'
import emailjs from '@emailjs/browser';
import { db } from "../firebase"
import logo from "../assets/logo.webp"
import { addDoc } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";
import CloseIcon from '@mui/icons-material/Close';
import backgroundPic from "../assets/Manila.webp"
import transparentPic from "../assets/overlay.webp"
import boy from "../assets/boy.webp"
import PhoneInput from 'react-phone-number-input';


const Section2 = ({openModalFunction}) => {
  const {ref:first,inView:isFirstTrue}= useInView()
  const {ref:second,inView:isSecondTrue}= useInView()
  const [mailId,setMailId]=useState("");
  const [openModal,isOpenModal]=useState(false)
  const [success2,setSuccess2]=useState(false)
  const [story,setStory]=useState("");
  const [value,setValue]=useState("");
  const[submit,isSubmit]=useState(false);
  const form1=useRef()
//   let count=0
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     mailId && sendEmail(e)
//     mailId && emailjs.sendForm('service_r8k7z3a', 'template_fuvcnif',form1.current,'eR2LkyQjCAK-jlmoi',)
//     mailId && emailjs.sendForm('service_h6plny1', 'template_vub6qxv',form1.current, 's1DaooQCbyizlmOIK')
//     mailId && emailjs.sendForm('service_r8k7z3a', 'template_sgistwt',form1.current, 'eR2LkyQjCAK-jlmoi')
//     try {
//         const docRef = mailId && await addDoc(collection(db, "WaitlistUsers"), {
//           email: mailId,
//           city: details && details.city,
//           time: new Date().toLocaleString(),
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     mailId && setSuccess2(true)
//     setTimeout(() => {
//       setSuccess2(false)
//     }, 10000);
//     setMailId("")
//   }


// useEffect(()=>{
//   async function fetchData() {
//     const q = query(collection(db, "WaitlistUsers"));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//     count++
//     setUserCount(count)
//     });
//   }
//   fetchData()
// },[handleSubmit])
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_h6plny1', 'template_43bwu5n', e.target, 's1DaooQCbyizlmOIK')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  // const handleChange1=(e)=>{
  //   e.preventDefault();
  //   setMailId(e.target.value)
  // }
  
  // const handleChange3=(e)=>{
  //   e.preventDefault();
  //   setStory(e.target.value)
  // }
  // const handleSubmit1=async(e)=>{
  //   e.preventDefault();
  //   mailId && sendEmail(e)
  //   try {
  //       const docRef = mailId && await addDoc(collection(db, "WaitlistUsers"), {
  //         email: mailId,
  //         city: details && details.city,
  //         state: details && details.state,
  //         country: details && details.country_name,
  //         time: new Date().toLocaleString(),
  //       });
      
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //     mailId && setSuccess2(true)
  //     setTimeout(() => {
  //       setSuccess2(false)
  //     }, 10000);
  //   setMailId("")
  // }
  const handleOpenModal=()=>{
    openModalFunction(true)
  } 
  



  return (
    <div className='section2 '>
        <div className='relative  w-full h-full'>
          <div className='absolute w-full bgImg'>
             <img className="object-cover w-full bgImg" src={backgroundPic} alt="" />
          </div>
          <div className='absolute w-full bgImg'>
             <img className="object-cover w-full bgImg" src={transparentPic} alt="" />
          </div>
        <div className='absolute lg:pl-10'>
        <div className=' flex relative lg:hidden justify-end items-end boy'>
            <img ref={second} className={`boyImg ${isSecondTrue && "animateBoy2"}`} src={boy} alt="" />
          </div>
          <div className='-mt-40 boyDiv md:ml-6 lg:mt-0'>
        <div className='flex w-screen p-5 lg:p-16 pt-10 sectionContainer2 flex-col'>
            <p className='line rounded-full'></p>
            <p className='text-4xl md:text-5xl lg:text-7xl pt-4 font-black text-black'>SCENES & <br></br> CHARACTERS</p>
            <p className='py-4 pt-6  lg:py-7 md:text-2xl text-xl lg:text-3xl text-black font-medium'>Ready to use.</p>
            <p className='lg:text-base text-xs md:text-sm font-normal lg:font-semibold'>Mesmerizing worlds, characters & objects to
            enhance your storytelling abilities. All at your fingers,
            just drag & drop into the main scene. We know there is a 
            James Cameron inside each one of you.</p> 
        </div>
        {/* <div className='inputDiv2 pt-20 lg:pl-16 lg:pt-0 relative z-50 lg:mr-56'>
        <div className='flex relative ml-5'>
      <input  name="email" onClick={handleOpenModal} placeholder='Your email' className='lg:text-2xl input2 text-sm relative md:text-base outline-none px-5 rounded-l-sm' type='email'  />
          <button type='submit' onClick={handleOpenModal} className=' outline-none text-white font-semibold rounded-r-sm  md:text-sm  text-xs lg:text-2xl btn1 btn1 '>
            Try It
          </button>
          </div> */}
{/*          
         {openModal && 
         <div className='flex hide flex-col md:-ml-6 absolute justify-start items-center w-screen  h-screen bg-black '>
          <div className='flex justify-center items-center w-screen'>
          <div className='flex text-white justify-end lg:justify-center items-center w-full md:w-3/4 lg:w-1/4'>
      <a className='outline-none' href=""><img className='w-40 md:w-44 lg:w-48 mr-4 md:mr-10 lg:mr-0 cursor-pointer' src={logo} /></a>  
      </div>
          <div  className='w-1/4 flex cursor-pointer justify-end text-white mr-7 lg:hidden md:mr-20' >
          <CloseIcon onClick={handleOpenModal} className='absolute text-white -mt-3' />
      </div>
          </div>
          <div className='mt-28 md:mt-44'>
          <form ref={form1} className="flex flex-col justify-start items-start" onSubmit={handleSubmit}>
          
          {success2 && <div className='text-green-400 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:mt-5 lg:w-64 flex items-center lg:h-10 success absolute'>Email submitted successfully</div>}
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
            <button  type='submit' onSubmit={handleSubmit}  className='mx-auto outline-none text-white font-semibold rounded-r-sm text-xs md:text-sm lg:text-xl btn11 '>
              Submit
            </button>
          </form>
          </div>
         </div>}


        <div className='hidden lg:flex'>
          <Modal className="bg-white text-white" submit={submit && submit}>
        <form ref={form1} className="flex px-24 flex-col justify-start items-start" onSubmit={handleSubmit}>
          
        {success2 && <div className='text-green-400 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:mt-5 lg:w-64 flex items-center lg:h-10 success absolute'>Email submitted successfully</div>}
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
          <button  type='submit' onSubmit={handleSubmit}  className='mx-auto outline-none text-white font-semibold rounded-r-sm text-xs md:text-sm lg:text-xl btn11 '>
            Submit
          </button>
        </form>
          </Modal>
        </div>
        <form ref={form1} onSubmit={handleSubmit}>
        <input readOnly value={userCount+1} name="userCount" className='hidden' type='text'  />
          <input onChange={handleChange} value={mailId} name="email" placeholder='Your email' className='lg:text-2xl input2 text-sm relative md:text-base outline-none px-5 rounded-l-sm' type='email'  />
          <button onSubmit={handleSubmit} className=' outline-none text-white font-semibold rounded-r-sm absolute text-xs md:text-base lg:text-2xl btn1 w-56 '>
            Try it out
          </button>
        </form>
        {success2 && <div className='text-green-500 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:ml-44 lg:mt-2 lg:w-64 pl-3 flex items-center lg:h-10 success absolute ml-7'>Email submitted successfully</div>}

        </div> */}
        <div className='flex lg:pl-16 pl-5 mb-48 mt-5 lg:mt-0 lg:mb-0  relative z-50  bg-transparent'>
    <input onClick={handleOpenModal} placeholder='Your email' className='lg:text-2xl md:text-base text-sm input1  outline-none px-2 -mb-10 lg:px-5 bg-transparent  rounded-l-sm' type='text'  />
          <button type='submit' onClick={handleOpenModal} className=' outline-none text-white font-semibold rounded-r-sm text-xs  md:text-sm lg:text-2xl btn1 '>
            Try It
          </button>
          </div>
        <h1 className='textCinema pl-5 lg:pl-16 absolute'>
            CINEMA
        </h1>
        </div>
        <div className=' hidden relative w-screen lg:flex justify-end items-end boy'>
            <img ref={first} className={`boyImg ${isFirstTrue && "animateBoy"}`} src={boy} alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Section2