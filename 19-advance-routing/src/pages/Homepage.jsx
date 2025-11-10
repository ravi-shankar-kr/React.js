import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import Product from './Product'
import Men from './Men'
import Women from './Women'
import NotFound from './NotFound'
import CourcesDetails from './CourcesDetails'


const Homepage = () => {
  return (
    <div>
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/about' element={<About/>} /> 
            <Route path='/contact' element={<Contact/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/courses/:id' element={<CourcesDetails/>} />
            <Route path='/product' element={<Product/>}>
                <Route path='men' element={<Men/>} />
                <Route path='women' element={<Women/>} />
            </Route>
            <Route path='*' element={<NotFound/>} />
         </Routes>
    </div>
  )
}

export default Homepage