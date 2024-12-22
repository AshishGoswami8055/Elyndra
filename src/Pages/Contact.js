import React from 'react'
import '../assets/css/Contact.scss';
import Map from '../assets/images/map2.png'
export default function Contact() {
  return (
    <>
      <div className='contact_banner'>
            <h1>Contact</h1>
            <div className='Map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.003292341927!2d72.8308196272548!3d21.202957201398593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef9dc913593%3A0x96106052132786c3!2sSurat!5e1!3m2!1sen!2sin!4v1734865208960!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contactContent'>
              <div className='contactForm'>
                
              </div>
              <div></div>
            </div>
      </div>

    </>
  )
}
