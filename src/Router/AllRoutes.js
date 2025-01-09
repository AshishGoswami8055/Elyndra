import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Media from '../Pages/Media'
import DisplayMedia from '../Pages/Services'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/portfolio' element={<DisplayMedia/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/uploadAdmin' element={<Media/>}></Route>
        </Routes>
    </div>
  )
}