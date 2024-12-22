import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../Components/AnimatedTexts/AnimatedLetters';
import ball from "../assets/images/ball.png";
import team1 from "../assets/images/sampleTeam.jpg";
import team2 from "../assets/images/sampleTeam2.jpg";
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
  const viewportWidth = window.innerWidth;
  const customCursorWidth = (30 / 100) * viewportWidth; // 35vw in pixels
  const customCursorHeight = customCursorWidth; 
  const variants = {
    default: {
      x:mousePosition.x - 20,
      y:mousePosition.y - 20,
      type:"smooth"
    },
    text:{
      x: mousePosition.x - 0.5 * customCursorWidth, // Offset by half the width
      y: mousePosition.y - 0.5 * customCursorHeight,
      width: "30vw",
      height: "30vw",
      type:"smooth"
    }
  }
  const textEnter = ()=> setCursorVariant("text");
  const textLeave = ()=> setCursorVariant("default");

  return (
    <div className="home">
      {/* Banner  */}
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
      {/* work project  */}
      <div className='workProject'>
        <div className='workProjectTitle'>
          <h2>See our work and <span>projects</span></h2>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'><span>1</span> Game Development</a>
            </div>
            <div>button</div>
          </div>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'><span>2</span> Ui/Ux Graphic Design</a>
            </div>
            <div>button</div>
          </div>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'><span>3</span> Web Development</a>
            </div>
            <div>button</div>
          </div>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'><span>4</span> Application Development</a>
            </div>
            <div>button</div>
          </div>
        </div>
      </div>
      <div className='workProject'>
        <div className='workProjectTitle'>
          <h2>open positions</h2>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'>Developer</a>
            </div>
            <div>button</div>
          </div>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'>UI Designer</a>
            </div>
            <div>button</div>
          </div>
        </div>
        <div className='workProjectContent'>
          <div className='workProjectBox'>
            <div className='workProjectBoxTitle'>
              <a href='#'>Graphic Designer</a>
            </div>
            <div>button</div>
          </div>
        </div>
       
      </div>
      {/* team  */}
      <div className="team">
        <div className='teamTitle'>
          <h2>join us & Our Awesome <span>team</span></h2>
        </div>
        <div className="teamContent">
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team1}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Ashish Goswami</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team2}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Pushpa Raj</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team1}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Ashish Goswami</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team2}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Pushpa Raj</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team1}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Ashish Goswami</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className='teamBox'>
            <div className='teamBoxImg'>
              <img src={team2}  alt='team'/>
            </div>
            <div className='teamBoxDetails'>
              <div className='teamMemberName'>
                <h4>Pushpa Raj</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor  */}
      <motion.div className="cursor"
      variants={variants}
      animate={cursorVariant}/>
    </div>
  );
}
