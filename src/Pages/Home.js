
// import { useEffect, useRef, useState } from 'react';
// import AnimatedLetters from '../Components/AnimatedTexts/AnimatedLetters';
// import ball from "../assets/images/ball.png";
// import { gsap } from "gsap";
// import {motion} from "framer-motion"

// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({
//     x:0,
//     y:0
//   });
//   const [cursorVariant, setCursorVariant] = useState("default");
//   const [letterClass, setLetterClass] = useState('text-animate');
//   const nameArray = ["E", "L", "Y", "N", "D", "R", "A"];
//   const boxRef = useRef(null);
//   const [isMouseActive, setIsMouseActive] = useState(false); // Track mouse activity
//   const [mouseTimeout, setMouseTimeout] = useState(null); // Timeout to detect inactivity

//   // Floating animation
//   const startFloating = () => {
//     gsap.to(boxRef.current, {
//       y: "+=20",
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//       duration: 1.5,
//     });
//   };

//   const stopFloating = () => {
//     gsap.killTweensOf(boxRef.current, "y"); // Stop floating animation on the y-axis
//   };

//   const handleMouseMove = (e) => {
//     setIsMouseActive(true);
//     clearTimeout(mouseTimeout);

//     const rect = boxRef.current.getBoundingClientRect();
//     const offsetX = e.clientX - (rect.left + rect.width / 2);
//     const offsetY = e.clientY - (rect.top + rect.height / 2);

//     // Smooth hover animation with subtle offsets
//     gsap.to(boxRef.current, {
//       x: offsetX * 0.1, // Smaller offset for smoother hover
//       y: offsetY * 0.1,
//       duration: 0.5,
//       ease: "power2.out",
//       overwrite: true, // Blend hover and floating animations
//     });

//     setMouseTimeout(
//       setTimeout(() => {
//         setIsMouseActive(false);
//       }, 2000)
//     );
//   };

//   const handleMouseLeave = () => {
//     setIsMouseActive(false); // Allow floating to resume
//     gsap.to(boxRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
//   };

//   useEffect(() => {
//     if (!isMouseActive) {
//       startFloating(); // Start floating when idle
//     } else {
//       stopFloating(); // Pause floating during hover
//     }
//   }, [isMouseActive]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 4000);

//     // Initial fade-in animation
//     if (boxRef.current) {
//       gsap.fromTo(
//         boxRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 3, delay: 2 }
//       );
//     }

//     return () => clearTimeout(timer);
//   }, []);
//   //cursor useEffect

 

//   useEffect(() => {
//     const mouseMove = (e)=>{
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       })
//     }
//     window.addEventListener("mousemove", mouseMove);
//     return()=>{
//       window.removeEventListener("mousemove", mouseMove);
//     }
//   }, [])

//   const variants = {
//     default: {
//       x:mousePosition.x - 50,
//       y:mousePosition.y - 50
//     }
//   }

//   return (
//     <div>
//       <div className="banner">
//         <h1>
//           <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
//           <img
//             src={ball}
//             ref={boxRef}
//             className="box"
//             width="950px"
//             alt="Ball"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//           />
//         </h1>
//       </div>
//       <motion.div className="cursor"
//       variants={variants}
//       animate={cursorVariant}/>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../Components/AnimatedTexts/AnimatedLetters';
import ball from "../assets/images/ball.png";
import { gsap } from "gsap";
import {motion} from "framer-motion"


export default function Home() {
  
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [letterClass, setLetterClass] = useState('text-animate');
  const [interactionAllowed, setInteractionAllowed] = useState(false); // Manage interaction
  const nameArray = ["E", "L", "Y", "N", "D", "R", "A"];
  const boxRef = useRef(null);
  const [isMouseActive, setIsMouseActive] = useState(false);
  const [mouseTimeout, setMouseTimeout] = useState(null);

  const startFloating = () => {
    if (!interactionAllowed) return; // Prevent floating during the initial animation
  
    gsap.to(boxRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
      overwrite: "auto", // Blend smoothly with hover animation
    });
  };
  
  const stopFloating = () => {
    // gsap.killTweensOf(boxRef.current, "y");
  };

  const handleMouseMove = (e) => {
    if (!interactionAllowed) return; // Ignore interaction until animation is finished
  
    setIsMouseActive(true);
    clearTimeout(mouseTimeout);
  
    const rect = boxRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
  
    // Apply opposite direction offsets with smoother easing
    gsap.to(boxRef.current, {
      x: -offsetX * 0.1,
      y: -offsetY * 0.1,
      duration: 0.8, // Increase duration for smoothness
      ease: "power3.out", // Smoother easing
      overwrite: "auto", // Blend with floating animation
    });
  
    setMouseTimeout(
      setTimeout(() => {
        setIsMouseActive(false);
      }, 2000)
    );
  };
  
  const handleMouseLeave = () => {
    if (!interactionAllowed) return; // Ignore interaction until animation is finished
  
    setIsMouseActive(false);
    gsap.to(boxRef.current, {
      x: 0,
      y: 0,
      duration: 0.8, // Match hover duration for smooth return
      ease: "power3.out",
    });
  };
  

  useEffect(() => {
    if (!isMouseActive) {
      startFloating();
    } else {
      stopFloating();
    }
  }, [isMouseActive]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setInteractionAllowed(true); // Allow interaction after animation completes
      startFloating(); // Ensure floating starts after the animation
    }, 4000); // Match this duration with your SCSS animation time
  
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 3, delay: 2 }
      );
    }
  
    return () => clearTimeout(timer);
  }, []);
  
  
  


  //cursor useEffect

  useEffect(() => {
    const mouseMove = (e)=>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return()=>{
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x:mousePosition.x - 20,
      y:mousePosition.y - 20,
      mixBlendMode:"difference",
      type:"smooth"
    },
    text:{
      x:mousePosition.x - 175,
      y:mousePosition.y - 175,
      width: 350,
      height: 350,
      mixBlendMode:"difference",
      type:"smooth"
    }
  }
  const textEnter = ()=> setCursorVariant("text");
  const textLeave = ()=> setCursorVariant("default");

  return (
    <div className="home">
      <div className="banner">
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <img
            src={ball}
            ref={boxRef}
            className="box"
            width="700vw"
            alt="Ball"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </h1>
        <div className='banner-content'>
          <div className='banner-title'><p>Shaping the future of gaming with creative solutions that deliver real-world business impact.</p></div>
          <div className='banner-work'>
            {/* <p>Available for work</p> */}
            <p>Where Creativity Meets Strategy.</p>
            <h4><span>elyn</span>dra.in</h4>
          </div>
        </div>
        <div className="socialMedia-content">
          <div className='socialMedia'>
            <a href='#'>INSTAGRAM</a>
            <a href='#'>YOUTUBE</a>
            <a href='#'>FACEBOOK</a>
          </div>
        </div>
      </div>
      <motion.div className="cursor"
      variants={variants}
      animate={cursorVariant}/>
    </div>
  );
}
