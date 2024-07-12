import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-co">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form
             or find our contact information below. Your feedback,
              questions, and suggestions are important to us as we 
              strive to provide exceptional service to our university
               community.</p>
               <ul>
                <li><img src={mail_icon} alt="" />saikaranam46@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+91 7095835048</li>
                <li><img src={location_icon} alt="" />Sankethika polytechnic, visakhapatnam</li>
               </ul>
      </div>
      <div className="contact-co">
        <form>
            <label>
                Your Name :
            </label>
            <input type="text" name="name" placeholder='Enter Your Name' id="" />
            <label>Phone :</label>
            <input type="tel" name='phone' placeholder='Enter Your mobile Number'/>
            <label >Write your message here</label>
            <textarea name="message" rows='6' id="" placeholder='Enter your message'></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
