import React from 'react'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import Network from './components/pages/Network'
import { Route, Routes } from 'react-router-dom'
import Notfound from './components/pages/Notfound'
import Footer from './components/pages/Footer'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/networks"} element={<Network/>}/>
        <Route path={"/*"} element={<Notfound/>}/>
      </Routes>
    
    </div>
  )
}

export default App
