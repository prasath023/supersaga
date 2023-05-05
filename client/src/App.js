import React from "react";
import "./App.css";
import Home from "./Home"
import Blog from './Blog'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ReactGa from "react-ga"
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Soon from "./components/Soon";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import {Helmet} from "react-helmet";

function App() {
  const [email,setEmail]=useState("socials@supersaga.app")
  const [password,setPassword]=useState("Ruth@2022")
  const [pageVal,setPageVal]=useState(false)
  const [homePageVal,setHomePageVal]=useState(false)
  const [header, isHeader] = useState(false)
useEffect(() => {
 
const analytics = getAnalytics();
logEvent(analytics, 'notification_received');
}, [])

useEffect(()=>{

  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
},[])

  const handleHeader=(open)=>{
    isHeader(open)
  }
  const handlePage=(val)=>{
    setPageVal(val)
  }

const handleHomePage=(homePage)=>{
  setHomePageVal(homePage)
}
  return (

    <BrowserRouter>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Supersaga is a creator platform where anyone can create & share high-quality 3D animations of up to 30 seconds, within minutes." charSet="utf-8" />
                
      </Helmet>
    <div className="App overflow-x-hidden">
    {!header && <Header handlePage={handlePage} handleHomePage={handleHomePage} />}

    <Routes>
     {/* {!header && <Header handlePage={handlePage} handleHomePage={handleHomePage} />}  

       {homePageVal ? <Blog/> : <Home handleHeader={handleHeader} pageVal={pageVal} handleHomePage={handleHomePage}/>}  */}
        <Route path="/" exact element={<Home handleHeader={handleHeader} pageVal={pageVal} handleHomePage={handleHomePage}/>} />
        <Route path="/blogs" exact element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/investors" exact element={<Soon/>} />

    </Routes>
    </div>

  </BrowserRouter>

   
  );
}

export default App;
