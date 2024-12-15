import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "../assets/css/Navbar.scss"



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeChange, setThemeChange] = useState(false);
  console.log(themeChange);
  const hamburger = !themeChange?require("../assets/images/hamburgerDark.png"):require("../assets/images/hamburger.png");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleThemeChange(){
    setThemeChange(!themeChange);
    if (!themeChange) {
      document.documentElement.style.setProperty("--primary-color", "#171717");
      document.documentElement.style.setProperty("--white-color", "#fff");

      console.log("Dark Mode");
    } else {
      document.documentElement.style.setProperty("--primary-color", "#fff");
      document.documentElement.style.setProperty("--white-color", "#171717");
      console.log("Light Mode");
    }
  }
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
          <input type="checkbox" className="theme-checkbox" value={themeChange} onChange={handleThemeChange}/>
          <a href='#'  onClick={toggleMenu}><img src={hamburger} width="45vw" alt="Hamburger Menu"/></a>
        </div>
    </div>
    </>
  )
}
