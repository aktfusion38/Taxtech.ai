import React, { useState } from 'react'
import logo from '../../assests/logo.png'
import Button from '../Button/Button';
import phone from '../../assests/phone-call.png'
import mail from '../../assests/mail.png'
import address from '../../assests/address.png'
import facebook from '../../assests/facebook.png';
import insta from '../../assests/insta.png';
import linkedin from '../../assests/linkedIn.png';
import twitter from '../../assests/twitter.png';
import music from '../../assests/music.png';
import flag from '../../assests/flag.png'
import axios from 'axios'
import './Footer.css';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';


function Footer() {
  const [email, setEmail] = useState({ email: '' });
  function handleChange(e) {
    setEmail({ [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios({
        method: 'post',
        url: 'http://localhost:8080/sendmail',
        data: email
      });
      // Assuming a successful response indicates the email was sent
      if (response.status === 250) {
        toast.success('Email sent successfully!');  // Success toast
      } else {
        toast.error('Failed to send email.');  // Error toast if status is not 200
      }
    } catch (error) {
      toast.error('An error occurred while sending the email.');  // Error toast in case of exception

    }
    setEmail({ email: '' });
  } 
  return (
    <>
      <div className='outer'>
      <div className='footer' id='footer-section'>
        <div className='top'>
          {/* first container */}
          <div className='logo-container '>
            <img src={logo} alt="logo" />
            <div>
              <h1>TEXTCH.AI </h1>
              <p>THE FUTURE OF TAX IS HERE</p>
            </div>
          </div>
          {/* second container */}
          <div className='navigation '>
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li><Link to="/about">About Us</Link></li>
              <li>Pricing </li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Certificate</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          {/* third container */}
          <div className='contact'>
            <div className="contact-info">
              <div className='mobile'><img src={phone} alt="phone" />
                <span>+1012 3456 789</span></div>
              <div className='email'><img src={mail} alt="email" />
                <span>info@textech.ai</span></div>
            </div>
            <div className="address">
              <img src={address} alt="address" />
              <span>Tax Technologies LLC, 130 South Indian River Drive, Suite 202, Fort Pierce, Florida 34950, United States</span>
            </div>
            {/* <div className="social-icon">
              <div><img src={facebook} alt="facebook" /></div>
              <div><img src={insta} alt="instagram" /></div>
              <div><img src={linkedin} alt="linkedin" /></div>
              <div><img src={twitter} alt="twitter" /></div>
              <div><img src={music} alt="music" /></div>
            </div> */}
          </div>
          {/* fourth container */}
          <div className='card'>
            <h1 className='heading'>Subscribe to Our Newsletter!</h1>
            <form action="" className='footer-email' onSubmit={(e) => { handleSubmit(e) }} autoComplete="off">
              <input type="email" placeholder='Enter email' name='email' value={email.email} className='email' onChange={(e) => handleChange(e)} />
              <Button content={'Subscribe'} />
            </form>

          </div>
        </div>
        
      </div>
      <div className="social-icon bg-[#294F82] w-[100vw]">
              <div> <Link to="https://www.facebook.com/" target="_blank"><img className='fb' src={facebook} alt="facebook" /></Link> </div>
              <div> <Link to="https://www.instagram.com/" target="_blank"><img className='insta' src={insta} alt="instagram" /></Link> </div>

              <div> <Link to="https://in.linkedin.com/" target="_blank"><img className='linkedin' src={linkedin} alt="linkedin" /></Link> </div> 

              <div> <Link to="https://x.com/?lang=en" target="_blank"><img className='twitter' src={twitter} alt="twitter" /></Link> </div> 
              <div> <Link to=""  ><img className='music' src={music} alt="music" /></Link> </div>  
            </div>
      </div>

      <div className="copyright">
        <div className="info">Copyright © 2024 Tax Technologies LLC - All Rights Reserved.</div>
        <div className="flag"><img src={flag} alt="us_flag" /></div>
      </div>
    </>
  )
}

export default Footer