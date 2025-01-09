import React from 'react'
import '../assets/css/Footer.scss'
import logo from '../assets/images/circleObj.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerContent'>
            <div className='footerPages'>
                <div><p>Pages</p></div>
                <div>
                    <ul>
                        <li><a href='#'>Studio</a></li>
                        <li><a href='#'>Work</a></li>
                        <li><a href='#'>Portfolio</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerPortfolio'>
                <div><p>Social_Links</p></div>
                <div>
                    <ul>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>Youtube</a></li>
                        <li><a href='#'>Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerContact'>
                <div><p>Contact</p></div>
                <div>
                    <ul>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerSubscribe'>
                <div><p>Subscribe</p></div>
                <div className='footerInput'>
                    <input type='text' placeholder='Email address'/>
                    <a href='#'>Send</a>
                </div>
            </div>
        </div>
        <div className='footerLogo'>
            <h2><img src={logo}/>ELYNDRA</h2>
            <p>© 2024 ELYNDRA, All Rights Reserved.</p>
        </div>
    </div>
  )
}
