import React from 'react'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'

import Main from './components/Main'
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from './components/Section5'
import Soon from './components/Soon'
import "./Home.css"
import Form from "./components/Form"

const Home = ({pageVal,handleHeader}) => {
    const [open,setOpen]=useState(false)

  const openModalFunction=(val)=>{
    setOpen(val)
    }
useEffect(()=>{
  handleHeader(open)
},[open])
    return (<>
    <div className = {`scrollbar-hide lg:flex lg:flex-col h-full bg-black`} >
    {open ? <Form className="h-full bg-black" openModalFunction={openModalFunction} />
    : <>       
        <>
        <Main openModalFunction={openModalFunction}/>
        <Section1 />
        <Section2 openModalFunction={openModalFunction}/>
        <Section3 />
        <Section4 />
        <Section5 />
        </>
       <Footer openModalFunction={openModalFunction}/>

    </>

        
    }
        
    </div>
    
    </> 
    )
}

export default Home