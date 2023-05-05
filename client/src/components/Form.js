import React, { useEffect, useRef, useState } from 'react'
import "../css/Main.css"
import { db } from "../firebase"
import PhoneInput from 'react-phone-number-input'
import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import  axios  from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import 'react-phone-number-input/style.css'

const Form = ({openModalFunction}) => {

    const [mailId,setMailId]=useState("");
    const [newMail,isNewMail]=useState(true);
    const [rejects,setRejects]=useState(false);
    const [link,setLink]=useState("");
    
    const [value,setValue]=useState("");
    const [details, setDetails]=useState()
   let countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const [country,setCountry]=useState("");
    const [success,setSuccess]=useState(false)
    const form=useRef("")
    const [userCount,setUserCount]=useState("")
    let count=0
    useEffect(() => {
      const getUserDetails=()=>{
        fetch("https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1")
        .then(res=>res.json())
        .then(data=> setDetails(data)) 
      }
  
      getUserDetails()
      
    }, [])
    const fetchLink=async()=>{
      const docRef = doc(db, "General","Update");
      const docSnap = await getDoc(docRef);
      setLink(docSnap)
  }

  useEffect(() => {
    fetchLink()
    }, [])



   
  
    let dataEmail={
     email:mailId,
     link:link && link.data().Link
    }
    console.log(dataEmail);
   
    const handleSubmit=async(e)=>{
      e.preventDefault();

 const fetchData = async()=>{
    const q = query(collection(db, "WaitlistUsers"));
    const querySnapshot = await getDocs(q);
    const data=querySnapshot.docs
   for(let i=0; i < data.length; i++){
   
    if(mailId !== data[i].data().email){
     
    }
    else{
      setRejects(true)
      console.log("setting true")
      console.log(newMail);
     return isNewMail(false)
    }
   }
   
  if(newMail){
    try {
      const docRef= mailId  && country && await addDoc(collection(db, "WaitlistUsers"), {
         email: mailId,
         phone: value,
         country:country,
         time: new Date().toLocaleString(),
       })
      
      
     } catch (e) {
       console.error("Error adding document: ", e);
     }
     mailId && country && setSuccess(true) 
       console.log(newMail);
      
       setMailId("")
       setCountry('')
     await axios.post("https://nice-erin-toad-kit.cyclic.app/notice",dataEmail)
       
  }
 
    }
    fetchData()
    setTimeout(() => {
      setSuccess(false)
      setRejects(false)
     
    }, 5000);
    setTimeout(() => {
      isNewMail(true)
    }, 2000);
  }
  
  // useEffect(()=>{
  //   async function fetchData() {
  //     const q = query(collection(db, "waitlist"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //     ++count
  //     setUserCount(count)
  //     });
  //   }
  //   fetchData()
  // },[handleSubmit])
  
    const handleChange1=(e)=>{
      e.preventDefault();
      setMailId(e.target.value)
    }
    
    const handleChange3=(e)=>{
      e.preventDefault();
      setCountry(e.target.value)
    }
    
    const handleClose=()=>{
      openModalFunction(false)
    } 
  
//kycqbkunjqlakemq
  return (
    <div className='bg-black w-screen z-50 overflow-y-hidden relative justify-center items-center h-screen height lg:h-full'>
          {success && <div className='text-green-400 font-black text-lg  md:text-xl lg:text-2xl lg:-mb-10 flex items-start z-50 success bg-white'><h1 className='-mt-44 lg:-mt-24 md:-mt-20'>Email submitted successfully</h1></div>}
          {rejects && <div className={` text-red-400 w-screen justify-center font-black text-lg  md:text-xl lg:text-2xl lg:-mb-10 flex items-cenetr -z-40 rejects absolute `}><h1 className='mt-28 lg:mt-32 md:mt-40'>Email already exists </h1></div>}
          
          <div className='flex md:-mt-2  -mt-3 lg:mt-0 flex-col justify-start items-center w-screen'>
          <div className='w-screen flex justify-center items-center flex-col'>
          <div className='flex mt-7 md:mt-8  lg:ml-24 top justify-center lg:px-5 lg:mr-3 lg:pt-10 items-center w-screen lg:w-2/4'>
          <div className='flex  text-white justify-end font-black lg:justify-start items-center text-3xl w-full md:w-3/4 lg:w-2/4'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mr-5 md:mr-10 lg:mr-0  '>Early Access</h1>
      </div>
          <div className='w-1/4  flex cursor-pointer justify-end items-center text-white  md:mr-20 mr-7' >
          <CloseIcon onClick={handleClose} className='absolute text-white cursor-pointer' />
      </div>
          </div>
          <div className='lg:mt-20 mt-20 md:mt-36 '>
          <form ref={form} className="flex flex-col justify-start items-start" onSubmit={handleSubmit}>
            <input readOnly value={userCount+1} name="userCount" className='hidden' type='text'  />
           
            <p className='lg:mb-5 lg:mt-5 font-medium md:mb-3 mb-2 text-white text-sm md:text-lg lg:text-xl'>Email <span className='star'>*</span> :</p>
            <input onChange={handleChange1} value={mailId} required name="email" placeholder='Your email' className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='email'  />
            <p className='md:mb-5 lg:mt-5 md:mt-2 mt-1  font-medium mb-3 lg:mb-8 text-white text-sm md:text-lg lg:text-xl'>Phone Number : <br></br><span className='lg:text-base md:text-sm text-xs'>(optional)</span></p>
            <div  className="flex h-9 justify-center mb-7 items-center">
            <PhoneInput
      placeholder="Enter phone number"
      international
      countryCallingCodeEditable={false}
      defaultCountry="IN"
      value={value}
      className="px-5  flex h-20 border lg:text-lg md:text-base text-xs border-gray-400 outline-none"
      onChange={setValue}/>
            </div>
           
            <p className='lg:mb-5 lg:mt-5 -mt-1 md:mt-2  md:mb-3 font-medium mb-3 text-white text-sm md:text-lg lg:text-xl '>Country <span className='star'>*</span> :</p>
            {/* <textarea onChange={handleChange3} value={story} name="story" placeholder='If the story is good we will give you access sooner ' className='md:mb-6 mb-5 lg:mb-10 input111 relative outline-none px-2 lg:text-lg md:text-base text-xs  bg-black lg:px-5 pt-3 lg:pt-5 md:pt-4' type='text'  />
             */}
             <select required  className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5 mb-10 lg:mb-14' value={country} onChange={(e)=>setCountry(e.target.value)}>
       <option value={""}>--Select country--</option>
             {
              countries.map((con)=>
              <option value={con}>{con}</option>
              )
             }
       </select>
            
            <button  type='submit' onSubmit={handleSubmit} className='mx-auto lg:mb-20 o outline-none text-white font-semibold  text-xs md:text-sm lg:text-xl btn11 '>
              Submit
            </button>
           
            
          </form>
          </div>
          </div>
         </div>
    </div>
  )
}

export default Form