import './App.scss'
import AllRoutes from './Router/AllRoutes'
import Navbar from './Components/Navbar'
import './assets/css/MediaQuery.scss'
import Footer from './Pages/Footer'
import gsap, { Expo,Circ,Power3 } from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('.ScrollMain'),
  //     smooth: true,
  //     multiplier: 1,
  //     class: 'is-inview',
  //     getDirection: true,
  //   });

  //   // Cleanup the scroll instance when the component unmounts
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  useEffect(() => {
    var tl = gsap.timeline()
    tl
    .to(".parentReveal .childReveal",{
      y: "0%",
      duration: .8,
      ease: Power3.easeInOut
    })
    .to(".parentReveal .childReveal",{
      y: "-100%",
      duration: 1.1,
      delay: 1,
      ease: Power3.easeInOut
    })
    .to('.blackLoader',{
      height:0,
      duration: 1,
      delay:-.9,
      ease: Circ.easeInOut
    })
    .to('.purpleLoader',{
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut
    })
    .to('.purpleLoader',{
      height: "0%",
      duration: 1,
      delay: -0.4,
      ease: Circ.easeInOut
    })
  }, [])
  return (
    <>
      <div id="main">
        {/* <div className="blackLoader">
          <div className='Welcome_text'>
            <h2 className='revealAni'><span className='parentReveal'><span className='childReveal'>Welcome <span>to</span></span></span></h2>
          </div>
        </div>
        <div className="purpleLoader"></div> */}
        <div className="mainContent">
            <Navbar />
            <AllRoutes />
            <Footer />
        </div>
      </div>
    </>
  )
}

export default App
