import React,{useState, useEffect} from 'react'
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useParams } from 'react-router-dom';
import "../css/blogPost.css"
import {Helmet} from "react-helmet";
import Footer from './Footer';

const BlogPost = ({currentUser}) => {
    const [singlePost,setSinglePost]=useState([])
    const [data1,setData1]=useState([])
    const [data2,setData2]=useState([])
    const [data3,setData3]=useState([])
    const [data4,setData4]=useState([])
    const [data5,setData5]=useState([])
    const [data6,setData6]=useState([])

    let { id } = useParams();

        fetchData()
    
        async function fetchData() {
          const docRef = doc(db, "Blogs", `${id}`);
          const docSnap = await getDoc(docRef);

          const querySnapshot1 = await getDocs(collection(db, `Blogs/${id}/paragraph`)); 
          setData1(querySnapshot1.docs)

          const querySnapshot2 = await getDocs(collection(db, `Blogs/${id}/titlePoints`)); 
          setData2(querySnapshot2.docs)

          const querySnapshot3 = await getDocs(collection(db, `Blogs/${id}/list`)); 
          setData3(querySnapshot3.docs)
          
          const querySnapshot4 = await getDocs(collection(db, `Blogs/${id}/titlePoints2`)); 
          setData4(querySnapshot4.docs)

          const querySnapshot5 = await getDocs(collection(db, `Blogs/${id}/list2`)); 
          setData5(querySnapshot5.docs)


          if (docSnap.exists()) {
            setSinglePost(docSnap.data())
            
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      //   const fetchData2 =async()=>{
      //     const querySnapshot5 = await getDocs(collection(db, `Blogs/${id}/list`)); 
      //     setData5(querySnapshot5.docs)
      //     if(data5){
      //     for(let i=0; i<data5.length;i++){
      //       const querySnapshot4 =await getDocs(collection(db, `Blogs/${id}/list/${data5[i].id}/features`)); 
      //       querySnapshot4.forEach((doc) => {
      //         console.log(doc.data()); 
      // });
      //       // setData4(...data4,querySnapshot4.docs)
      //     }
      //   }else{
      //     console.log("waste");
      //   }

      //   }

    //  useEffect(()=>{
    //   fetchData2()

    //  })
          
        //   setOpenPost(true)
        
  return (
    <div>
    <div className='flex pb-10 text-black flex-col mx-auto justify-center w-5/6 items-start'>
         <Helmet>
                <meta name="description" content={singlePost.para} charSet="utf-8" />
                <meta charSet="utf-8" />
                <title>{singlePost.title}</title>
                <meta name="keywords" content="blog, 3D animation, supersaga, top 10 3D animation apps, android animation apps, ios animation apps, Best Free 3d Animation Apps for Beginners 2021, Best 3D Animation Apps For Android. Best 3D Animation App for iPhone and iPad" charSet="utf-8" />  
       </Helmet>
        <div className='text-lg text-black md:text-xl md:mt-7 mt-5 lg:mt-10 lg:text-3xl flex w-full justify-between items-center font-semibold md:mb-7 mb-5 lg:mb-10'>
        {singlePost.title}
      <Link className='outline-none'  to="/blogs"><div className='text-white cursor-pointer bg-black font-medium lg:h-10 lg:w-20 h-7 md:h-8 w-14 md:w-16 text-sm md:text-base lg:text-lg flex justify-center items-center'>Back</div></Link>
        </div>
        {/* <div className='w-full flex justify-center items-center object-cover bg-black'>
          <img className='object-cover' src= { singlePost.image} />
        </div>
        <div className='md:text-base text-sm text-black lg:text-xl font-semibold md:mt-6 md:mb-5 mt-4 mb-3 lg:mt-10 lg:mb-7'>
        {singlePost.description}
        </div>

        <div className='text-left text-xs md:text-sm mb-10'>
        { singlePost.blogPost}
        </div> */}
        <div className=' w-full my-2 md:my-5 lg:my-10 flex justify-center items-center'><img className='blogImg' src={singlePost.image} /></div>
       
       <div>
        <p className='lg:mb-7 mb-5 text-sm md:text-base lg:text-lg'>{singlePost.para}</p>
       </div>
        <div>
       <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-3'> {singlePost.subTitle} </h1>
       <ul className='ml-5 text-base md:text-lg lg:text-xl font-medium mb-5'>
       
          {data2.map((doc)=><li className='list-decimal'>{doc.data().point}</li>)}
       
       </ul>
        </div>
        <div>
         <div>
          {data3.map((doc)=>
          <div>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold lg:mb-5 mb-3'>{doc.data().title}</h1>
            <div className='w-full flex justify-center items-center '><img className='mb-7 blogImgContent my-7 lg:my-10' src={doc.data().image} /></div>
            <p className='mb-5 text-sm md:text-sm lg:text-base'>{doc.data().para}</p>
            <h1 className='text-base md:text-lg lg:text-xl mb-3 font-semibold'>{doc.data().features && "Features :"}</h1>
            <ul className='ml-4 text-sm md:text-sm lg:text-base mb-5 lg:mb-10'>
              
            {doc.data().features && doc.data().features.split(".").filter(a=>a!== "").map(b=><li className='list-disc'>{b}</li>)}

            </ul>
          </div>)}
         </div>
        </div>
        <div>
        <div>
       <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-3'> {singlePost.subTitle2} </h1>
       <ul className='ml-5 text-base md:text-lg lg:text-xl font-medium mb-5'>
       
          {data4.map((doc)=><li className='list-decimal'>{doc.data().point}</li>)}
       
       </ul>
        </div>
        <div>
          {data5.map((doc)=>
          <div>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-3 lg:mb-5'>{doc.data().title}</h1>
            <div className='w-full flex justify-center items-center '><img className=' lg:mb-7 blogImgContent my-7 lg:my-10' src={doc.data().image} /></div>
            <p className='mb-5 text-sm md:text-sm lg:text-base'>{doc.data().para}</p>
            <h1 className='text-base md:text-lg lg:text-xl font-semibold mb-3'>{doc.data().features && "Features :"}</h1>
            <ul className='ml-4 mb-5 lg:mb-10 text-sm md:text-sm lg:text-base'>
              
              {doc.data().features && doc.data().features.split(".").filter(a=>a!== "").map(b=><li className='list-disc'>{b}</li>)}
              
            </ul>
          </div>)}
         </div>
        </div>
        </div>
      </div>
  )
}

export default BlogPost