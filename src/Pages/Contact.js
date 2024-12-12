import React from 'react'
import '../App.scss';
import Map from '../assets/images/map2.png'
export default function Contact() {
  return (
    <>
     <div className="banner">
      <h1>Contact</h1>
      <div className="form-table">
      <div className='map_img'>
        <img src={Map}/>
      </div>
        <form className="main-form">
          {/* <!-- Name Field --> */}
          <div class="form__group field">
            <input 
              type="input" 
              class="form__field" 
              placeholder="Name" 
              name="name" 
              id="name" 
              required 
            />
            <label for="name" class="form__label">Name</label>
          </div>

          {/* <!-- Email Field --> */}
          <div class="form__group field">
            <input 
              type="input" 
              class="form__field" 
              placeholder="E-mail" 
              name="email" 
              id="email" 
              required 
            />
            <label for="email" class="form__label">E-mail</label>
          </div>

          {/* <!-- Phone Field --> */}
          <div class="form__group field">
            <input 
              type="input" 
              class="form__field" 
              placeholder="Phone" 
              name="phone" 
              id="phone" 
              required 
            />
            <label for="phone" class="form__label">Phone</label>
          </div>

          {/* <!-- Message Field --> */}
          <div class="form__group field">
            <input 
              type="input" 
              class="form__field" 
              placeholder="Message" 
              name="message" 
              id="message" 
              required 
            />
            <label for="message" class="form__label">Message</label>
          </div>

          {/* <!-- File Upload --> */}
          <div class="upload-container">
            <label class="upload-label" for="file-upload">
              <svg 
                type="file" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 512" 
                class="upload-icon"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <span>Upload File</span>
            </label>
            <input 
              type="file" 
              id="file-upload" 
              class="file-input" 
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button>SEND MESSAGE ——</button>
        </form>
      </div>
    </div>

    </>
  )
}
