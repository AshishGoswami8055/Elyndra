import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import hamburger from "../assets/images/hamburger.png"
import logo from "../assets/images/logo.png"
import "../assets/css/Navbar.scss"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
    <div className='Navbar'>
        <div className='logo'>
          {/* <a href='#'>Elyn<span>dra</span></a> */}
          <a href="/"><img src={logo} width="250vw"/></a>
        </div>
        <div className={`nav-part-2 ${menuOpen ? 'show' : ''}`}>
          <div className='nav-content'>

            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/services">Services</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className='hamburger'>
          <a href='#'  onClick={toggleMenu}><img src={hamburger} width="45vw" alt="Hamburger Menu"/></a>
        </div>
    </div>
    </>
  )
}
