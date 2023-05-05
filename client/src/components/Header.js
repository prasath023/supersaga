import React, { useEffect, useState } from 'react'
import tiktok from "../assets/tik-tok 1.webp"
import twitter from "../assets/twitter 1.webp"
import instagram from "../assets/instagram (1) 1.webp"
import linkedin from "../assets/linkedin 1.webp"
import logo from "../assets/logo.webp"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Header = ({handlePage,handleHomePage}) => {
  const[page,isPage]=useState(false)
  // const[blogPage,isBlogPage]=useState(false)
  const[homePage,isHomePage]=useState(false)
  const[blogPage,isBlogPage]=useState(false)

  useEffect(() => {
    handlePage(page)
  }, [page])
  useEffect(() => {
    
    handleHomePage(homePage)
  }, [homePage])
  const handleChange=()=>{
    isPage(true)
    isHomePage(false)

  }
  const handleChangeBlog=()=>{
    isHomePage(true)
    // isBlogPage(true)


  }
  const handleChangeHome=()=>{
    isHomePage(false)
    isPage(false)

    // isBlogPage(false)
  }
const [open,isOpen]=useState(false)
const handleOpen=()=>{
  isOpen(!open)
} 

  return (
   <> <div className='flex justify-between h-16 md:h-20 lg:px-10 lg:h-24 items-center  text-xl bg-black'>
      <div className='flex text-white justify-end lg:justify-center items-center w-full md:w-3/4 lg:w-1/4'>
      <a className='outline-none' href=""><img className='w-40 md:w-44 lg:w-48 mr-4 md:mr-10 lg:mr-0 cursor-pointer' src={logo} /></a>  
      </div>
      <div className='hidden lg:flex justify-between lg:w-2/4 px-40 w-3/4'>
        <ul className='flex justify-between w-full font-medium text-xs lg:text-sm'>
        {homePage ? <Link className='outline-none' to="/"><li onClick={handleChangeHome} className='hover:text-white cursor-pointer'>
            Home
          </li>  </Link> : <Link className='outline-none' to="/blogs"> <li onClick={handleChangeBlog} className='hover:text-white cursor-pointer'>
            Blogs
          </li> </Link>}
          <Link className='outline-none' to="/investors"> <li className='hover:text-white cursor-pointer'>
            Investors
          </li></Link>
          <li className='hover:text-white cursor-pointer'>
          <a href="https://www.linkedin.com/company/supersaga-app/people/" target="_blank">Team</a>
           
          </li>
           {/* <Link className='outline-none ' to="/services"> <li className='hover:text-white cursor-pointer'>
           Services
          </li></Link>
          <Link className='outline-none' to="/dashboard"> <li className='hover:text-white cursor-pointer'>
           Dashboard
          </li></Link> */}
         
        </ul>
      </div>
      <div className='hidden w-1/4 text-white font-light lg:flex justify-end'>
      <a className='outline-none' href="" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={tiktok}/></a>  
      <a className='outline-none' href="https://twitter.com/supersaga_app" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={twitter}/></a> 
      <a className='outline-none' href="https://www.instagram.com/supersaga.app/" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={instagram}/></a> 
      <a className='outline-none' href="https://www.linkedin.com/company/supersaga-app/" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={linkedin}/></a> 
      
      </div>


      {/* have to change this, this is temp */}


      {/* <Link className='outline-none' to="/signup"> <h1 className='hover:text-white cursor-pointer'>
            Signup
       </h1> </Link> */}

       {/* ends here */}


      <div  className='w-1/4 flex cursor-pointer justify-end text-white mr-7 lg:hidden md:mr-20' >
         {!open && <MenuIcon onClick={handleOpen} />}
         {open && <CloseIcon onClick={handleOpen} className='absolute -mt-3' />}
      </div>
    </div>
    {open && 
      <div className='h-screen lg:hidden text-white w-screen bg-black'>
      
      <div className='flex flex-col justify-start items-center w-full overflow-hidden h-4/6 md:h-5/6'>
      <ul className='flex flex-col justify-center mt-28 md:mt-44 text-xl font-semibold items-center w-full  '>
          
          {homePage ?  <Link className='outline-none' to="/"> <li onClick={()=>{
            isHomePage(false);
            isPage(false)
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
            Home
          </li> </Link> :  <Link className='outline-none' to="/blogs"> <li onClick={()=>{
           isHomePage(true);
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
            Blogs
          </li> </Link>}
          <Link className='outline-none' to="/investors">   <li onClick={()=>{
            handleChange();
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
            Investors
          </li> </Link>
          <li onClick={()=>{
            handleChange();
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
           <a href="https://www.linkedin.com/company/supersaga-app/people/" target="_blank">Team</a>
          </li>
           {/* <Link className='outline-none' to="/services">   <li onClick={()=>{
            handleChange();
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
           Services
          </li> </Link>
          <Link className='outline-none' to="/dashboard">   <li onClick={()=>{
            handleChange();
            handleOpen()
          }} className='cursor-pointer pb-5 md:pb-9 '>
           Dashboard
          </li> </Link> */}
         
        </ul>
        <div className=' w-3/4 mx-auto px-7 md:px-16 pt-10 md:pt-14 font-light flex justify-between'>
      <a className='outline-none' href="" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={tiktok}/></a>  
      <a className='outline-none' href="https://twitter.com/supersaga_app" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={twitter}/></a> 
      <a className='outline-none' href="https://www.instagram.com/supersaga.app/" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={instagram}/></a> 
      <a className='outline-none' href="https://www.linkedin.com/company/supersaga-app/" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={linkedin}/></a> 
      </div>
        </div>
      </div>}</>
  )
}

export default Header