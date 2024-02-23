import React, { useState } from 'react'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import Jobs from './components/pages/Jobs'
import Notification from './components/pages/Notification'
import Network from './components/pages/Network'
import { Route, Routes } from 'react-router-dom'
import Notfound from './components/pages/Notfound'
import Footer from './components/pages/Footer'
import Profile from './components/pages/Profile'
import Business from './components/pages/Business'
import Postjob from './components/pages/Postjob'
import Massaging from './components/pages/Massaging'
import Loginnav from './components/login/Loginnav'
import Login from './components/login/Login'

const App = () => {
 
  const[login,setLogin]=useState(false);
 const setlogin =()=>{
  setLogin(true);
 }

  return (
    <div className='  '>
      <Routes>
       
        <Route path={"/"} element={login?<Home/>:<Login setlogin={setlogin}/>} />
        <Route path={"/networks"} element={<Network/>}/>
        <Route path={"/jobs"} element={<Jobs/>}/>
        <Route path={"/massaging"} element={<Massaging/>}/>
        <Route path={"/notification"} element={<Notification/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
        <Route path={"/business"} element={<Business/>}/>
        <Route path={"/postjob"} element={<Postjob/>}/>

        <Route path={"/*"} element={<Notfound/>}/>
      </Routes>
    
      
  
    </div>
  )
}

export default App
