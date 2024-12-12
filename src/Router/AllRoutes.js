import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}