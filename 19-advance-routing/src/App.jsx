import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
      <Navbar2/>
      <Homepage/>
      <Footer/>
    </div>
  )
}

export default App