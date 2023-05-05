import React, { useEffect, useRef, useState } from 'react'
import tiktok from "../assets/tik-tok 1.webp"
import emailjs from '@emailjs/browser';
import twitter from "../assets/twitter 1.webp"
import instagram from "../assets/instagram (1) 1.webp"
import linkedin from "../assets/linkedin 1.webp"
import { db } from "../firebase"
import "../css/Section5.css"
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import PhoneInput from 'react-phone-number-input';
const Footer = ({openModalFunction}) => {
//   const [mailId,setMailId]=useState("");
//   const [success1,setSuccess1]=useState(false)
//   const [story,setStory]=useState("");
//   const [value,setValue]=useState("");
//   const[submit,isSubmit]=useState(false);
//   const form2=useRef()
//   const [userCount,setUserCount]=useState()
//   let count=0
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     mailId && sendEmail(e)
//   mailId && emailjs.sendForm('service_r8k7z3a', 'template_fuvcnif',form2.current,'eR2LkyQjCAK-jlmoi',)
//   mailId && emailjs.sendForm('service_h6plny1', 'template_vub6qxv',form2.current, 's1DaooQCbyizlmOIK')
//     mailId && emailjs.sendForm('service_r8k7z3a', 'template_sgistwt',form2.current, 'eR2LkyQjCAK-jlmoi')
//   try {
//         const docRef = mailId && await addDoc(collection(db, "WaitlistUsers"), {
//           email: mailId,
//           city: details && details.city,
//           time: new Date().toLocaleString(),
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     mailId && setSuccess1(true)
//     setTimeout(() => {
//       setSuccess1(false)
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
//   const handleChange1=(e)=>{
//     e.preventDefault();
//     setMailId(e.target.value)
//   }
  
//   const handleChange3=(e)=>{
//     e.preventDefault();
//     setStory(e.target.value)
//   }
const handleOpenModal=()=>{
  openModalFunction(true)
} 
  return (
    <div className='flex flex-col   bg-black justify-center items-center'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl pb-1 lg:pb-6 font-black text-white'>DISCOVER & INTERACT</h1>
        <h1 className='text-base text-center md:mt-2 md:text-xl lg:text-2xl font-medium'>A common place to share & engage with the community.</h1>
        <div className='inputDiv relative pt-16 lg:py-28'>
        <div className='flex  relative bg-black'>
    <input onClick={handleOpenModal} placeholder='Your email' className='lg:text-2xl md:text-base text-sm input1 relative outline-none px-2 -mb-10 lg:px-5 bg-black  rounded-l-sm' type='text'  />
          <button type='submit' onClick={handleOpenModal} className=' outline-none text-white font-semibold rounded-r-sm text-xs  md:text-sm lg:text-2xl btn1 '>
            Get Access
          </button>
          </div>
        {/* <div className=''>
          <Modal className="bg-black text-white" submit={submit && submit}>
        <form ref={form2} className="flex flex-col justify-start items-start" onSubmit={handleSubmit}>
          
        {success1 && <div className='text-green-400 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:mt-5 lg:w-64 flex items-center lg:h-10 success absolute'>Email submitted successfully</div>}
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
        </div> */}
        {/* <form ref={form2} onSubmit={handleSubmit}>
        <input readOnly value={userCount+1} name="userCount" className='hidden' type='text'  />
          <input onChange={handleChange} value={mailId}  placeholder='Your email' className=' text-sm lg:text-2xl input1 relative outline-none px-2 lg:px-5 bg-black md:text-base rounded-l-sm' name="email" type='email'  />
          <button onSubmit={handleSubmit} className=' text-white md:text-sm outline-none font-semibold rounded-r-sm absolute text-xs lg:text-2xl btn1 w-56 '>
            Get Access
          </button>
        </form> */}
        {/* {success1 && <div className='text-green-500 font-medium w-48 -mt-6 mx-auto  text-xs lg:text-base lg:ml-44 lg:mt-2 lg:w-64 pl-3 flex items-center lg:h-10 success absolute ml-7'>Email submitted successfully</div>} */}


      </div>
        <h1 className='text-lg md:text-xl lg:text-2xl -mt-14 lg:mt-0 lg:pt-10 lg:pb-14 font-medium text-white'>Reach out to <span className='getAccess'>hello@supersaga.app</span></h1>
        <div className='lg:pb-14  pt-12 pb-7 flex justify-center items-center'>
      <a className='outline-none' href="" target="_blank"><img className='lg:w-10 h-6 lg:h-10 mr-10 lg:mr-8 cursor-pointer' src={tiktok}/></a>  
      <a className='outline-none' href="https://twitter.com/supersaga_app" target="_blank"><img className='lg:w-10 h-6 lg:h-10 mr-10 lg:mr-8 cursor-pointer' src={twitter}/></a> 
      <a className='outline-none' href="https://www.instagram.com/supersaga.app/" target="_blank"><img className='lg:w-10 h-6 lg:h-10 mr-10 lg:mr-8 cursor-pointer' src={instagram}/></a> 
      <a className='outline-none' href="https://www.linkedin.com/company/supersaga-app/" target="_blank"><img className='lg:w-10 h-6 lg:h-10 cursor-pointer' src={linkedin}/></a> 
      </div>
        <h1 className='lg:text-xl footerText md:text-sm text-xs text-center text-white pb-10 lg:pb-28'>© 2022 by Highavenue Creative Labs. All rights reserved.</h1>
    </div>
  )
}

export default Footer