// import React, { useEffect, useState } from 'react'
// import "../assets/css/About.scss"
// import AnimatedLetters from '../Components/AnimatedTexts/AnimatedLetters'
// import {motion} from "framer-motion"
// import { gsap } from "gsap";
// import { SplitText } from 'gsap-trial/SplitText';

// gsap.registerPlugin(SplitText);
// let mySplitText = new SplitText('p',{type: 'character'})

// export default function About() {
//   const [mousePosition, setMousePosition] = useState({
//     x:0,
//     y:0
//   });
//   const [cursorVariant, setCursorVariant] = useState("default");
//   const [letterClass, setLetterClass] = useState('text-animate');
//   const nameArray = ["A","B","O","U","T"];

//     //cursor useEffect
//     useEffect(() => {
//       const mouseMove = (e)=>{
//         setMousePosition({
//           x: e.clientX,
//           y: e.clientY
//         })
//       }
//       window.addEventListener("mousemove", mouseMove);
//       return()=>{
//         window.removeEventListener("mousemove", mouseMove);
//       }
//     }, [])
  
//     const variants = {
//       default: {
//         x:mousePosition.x - 20,
//         y:mousePosition.y - 20,
//         type:"smooth"
//       },
//       text:{
//         x:mousePosition.x - 175,
//         y:mousePosition.y - 175,
//         width: 350,
//         height: 350,
//         mixBlendMode:"difference",
//         type:"smooth"
//       }
//     }
//     const textEnter = ()=> setCursorVariant("text");
//     const textLeave = ()=> setCursorVariant("default");
  

//   return (
//     <div className='about_banner'>
//       <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
//         <AnimatedLetters letterClass={letterClass}
//                 strArray={nameArray} idx={15}/>
//       </h1>
//       <div className='aboutUs' onMouseEnter={textEnter} onMouseLeave={textLeave}>
//         <p>Elyndra is a creative and adaptable game production company dedicated to delivering top-notch games across all genres. We combine technical expertise with creativity to bring concepts to life, whether they involve intricate simulations or hyper-casual, immersive worlds. Our goal is to create captivating, player-centric experiences that offer measurable business value while engaging audiences. Elyndra empowers brands to turn their ideas into impactful games that resonate in the global market, focusing on innovation, collaboration, and strategic solutions.</p>
//       </div>
//       <motion.div className="cursor"
//       variants={variants}
//       animate={cursorVariant}/>
//     </div>
//   )
// }
import React, { useEffect, useState } from "react";
import "../assets/css/About.scss";
import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedLetters from "../Components/AnimatedTexts/AnimatedLetters";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [letterClass, setLetterClass] = useState('text-animate');
  const [cursorVariant, setCursorVariant] = useState("default");
  const nameArray = ["A", "B", "O", "U", "T"," ","U","S"];

  // Cursor effect
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // GSAP SplitText and ScrollTrigger Animation
  useEffect(() => {
    const splitElements = document.querySelectorAll(".scroll-highlight");

    splitElements.forEach((element) => {
      const splitText = new SplitText(element, { types: "chars, words" });

      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.5,
        stagger: 0.6,
        duration:1,
        ease: "power3.out",
      });

      // Cleanup to revert SplitText on unmount
      return () => {
        splitText.revert();
        ScrollTrigger.kill();
      };
    });
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="about_banner">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
         <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray} idx={15}/>
       </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="aboutUs" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <p className="scroll-highlight">
        Elyndra is a creative and adaptable game production company dedicated to delivering top-notch games across all genres. We combine technical expertise with creativity to bring concepts to life, whether they involve intricate simulations or hyper-casual, immersive worlds. Our goal is to create captivating, player-centric experiences that offer measurable business value while engaging audiences. Elyndra empowers brands to turn their ideas into impactful games that resonate in the global market, focusing on innovation, collaboration, and strategic solutions.
        </p>
      </div>
    </div>
  );
}
