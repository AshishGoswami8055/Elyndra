import React, { useRef, useState, useEffect } from 'react'
import '../assets/css/Contact.scss';
import Map from '../assets/images/map2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../Components/AnimatedTexts/AnimatedLetters';
export default function Contact() {

  const form = useRef();
  const [letterClass, setLetterClass] = useState('text-animate');
    
    const nameArray = ['C','O','N','T','A','C','T'];
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000); // Match this duration with your SCSS animation time
    
     
      return () => clearTimeout(timer);
    }, []);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xbno9ob', 'template_ua4trvj', form.current, {
        publicKey: 'vq7LUKWmQeR6M7O4M',
      })
      .then(
        () => {
          console.log('SUCCESS Data!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='contact_banner'>
            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>
            <div className='Map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.855541400056!2d72.52239447350922!3d23.065757114718725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8353cab15d3b%3A0x635ec8d6eaad6c90!2sSilver%20Casa%2C%20SILVER%20CASA%2C%20Shenbhai%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380081!5e0!3m2!1sen!2sin!4v1736062281334!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contactContent'>
              <div className='contactForm'>
                <div className='contactTitle'>
                  <h2>What can we help You with?</h2>
                </div>
                <div className="formContact">
                  <form ref={form} onSubmit={sendEmail}>
                    <div>
                      <input type="text" placeholder="E-mail" name='user_email'/>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <input type="text" placeholder="First name" name='user_fname'/>
                      <input type="text" placeholder="Last name" name='user_lname' />
                    </div>
                    <div>
                      <textarea placeholder="Message" name='message'></textarea>
                    </div>
                    <div>
                      <button type="submit">Send_Message</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='contactSecond'>
                  <div className='contactTitle'>
                    <h2>GET IN <span className='bg'>TOUCH</span></h2>
                    <h3>Email :- <span>elyndra31@gmail.com</span></h3>
                    <h3>Contact :- <span>+91 9898989898</span></h3>
                    <h3>Address :- <span>123 Business Street, Suite 100, City, State, ZIP</span></h3>
                    <h3>Website :- <span><a href='/'>www.elyndra.in</a></span></h3>
                    <h3>Follow Us On :- </h3>
                    <div className='SocialMediaIcons'>
                        <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='#'><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href='#'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    </div>
                  </div>
              </div>
            </div>
      </div>

    </>
  )
}
