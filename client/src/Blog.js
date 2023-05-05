import React,{useState, useEffect} from 'react'
import { db } from "./firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Footer from './components/Footer';

const Blog = () => {
  const [data,setData]=useState([])
  const [openPost,setOpenPost]=useState(false)
  const [singlePost,setSinglePost]=useState([])
  
  useEffect(()=>{
    fetchData()
  },[data])
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "Blogs"));
 
      setData(querySnapshot.docs)
     
    }
  
  // const  handleOpenPost=(id)=>{
      
  //    setSinglePost(data.filter((doc)=>doc.data().id === id))
  //    console.log(singlePost[0].data().id)
  //     setOpenPost(true)
  //   }

  return (
    <div className='bg-white mt-10 text-black h-full'>
       <Helmet>
                <meta name="description" content="" charSet="utf-8" />
                <meta charSet="utf-8" />
                <title>Blogs</title>
                <meta name="keywords" content="blog, 3D animation, supersaga, top 10 3D animation apps, android animation apps, ios animation apps, Best Free 3d Animation Apps for Beginners 2021, Best 3D Animation Apps For Android. Best 3D Animation App for iPhone and iPad" charSet="utf-8" />  
       </Helmet>
      <div className='flex justify-center items-center w-screen md:text-3xl text-2xl md:mb-16 mb-14 lg:text-4xl font-bold lg:mb-20 lg:mt-10'>Our Thoughts</div>
     <div>{data.map((doc)=>
     <Link className='outline-none'  to={`/blogs/${doc.id}`}>
    <div className=' mb-10 md:mt-7 lg:mx-14 lg:mt-10 w-4/6 lg:w-5/6 md:w-screen flex flex-col md:ml-5 md:flex-row justify-center mx-auto items-center md:items-center'>
        <div className='cursor-pointer flex justify-center items-center px-2 md:px-0 md:w-2/4 w-full lg:w-1/4 h-48'>
          <img className='md:h-36 h-24 w-96 md:w-72 lg:w-96 object-cover' src={doc.data().image} alt="" />
        </div>
        <div className='cursor-pointer md:px-3 lg:px-0 w-full lg:w-3/4 lg:ml-5 flex h-full flex-col items-start md:items-start  flex-wrap'>
        <div className='text-base px-2 mb-1 md:px-0 md:mb-5 md:text-lg lg:text-2xl font-medium -mt-10 lg:-mt-16 lg:mb-8'>
          {doc.data().title}
        </div>

        <div className='hidden lg:inline text-left md:text-left text-xs px-2 md:px-0 md:text-sm'>
        {doc.data().para.slice(0, 400)}<span className=''>...</span>
        </div>
        <div className='hidden lg:hidden md:inline text-left md:text-left text-xs px-2 md:px-0 md:text-sm'>
        {doc.data().para.slice(0, 250)}<span className=''>...</span>
        </div>
        <div className='md:hidden lg:hidden text-left md:text-left text-xs px-2 md:px-0 md:text-sm'>
        {doc.data().para.slice(0, 160)}<span className=''>...</span>
        </div>

        </div>

    </div></Link>
    )} </div>
    
    
    </div>
  )
}

export default Blog