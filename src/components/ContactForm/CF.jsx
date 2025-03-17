import React, { useState } from "react";
import phone from "../../assests/phone-call.png";
import email from "../../assests/mail.png";
import address from "../../assests/address.png";
import Button from '../Button/Button.jsx';
import axios from 'axios'
import { toast } from 'react-toastify';
// import "./Contactform.css";

function Contactform() {
  const [contact, setContact] = useState({
    firstname: '',
    lastname: "",
    email: '',
    phone: '',
    subject: '',
    msg: ''
  });
  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(contact);
      let response = await axios({
        method: 'post',
        url: 'http://localhost:8080/contactform',
        data: contact
      });
      console.log(response);
      if (response.status === 200) {
        toast.success('Contact information save successfullly.');  // Success toast
      } else {
        toast.error('try : Failed to save contact info');  // Error toast if status is not 200
      }
    } catch (error) {
      toast.error('catch : An error occurred while save the contact info.');  // Error toast in case of exception
    }
    setContact({
      firstname: '',
      lastname: "",
      email: '',
      phone: '',
      subject: '',
      msg: ''
    });

  }


  return (
    <div className="m-8 border-2 border border-red-300">
      <div className="bg-red-300">
        <div className="bg-red-400 ">

          <div className=" ">
            <h1 className="text-5xl font-bold">Get in touch!</h1>
            <h1 className="">Contact Us</h1>
          </div>

          <div className="">
            <div className="">
              <div className="">
                <img src={phone} alt="phone" />
                <span>+1012 3456 789</span>
              </div>
              <div className="">
                <img src={email} alt="email" />
                <span>info@textech.ai</span>
              </div>
            </div>
            <div className="">
              <img src={address} alt="address" className="" />
              <span>
                Tax Technologies LLC, 130 South Indian River Drive, Suite 202,
                Fort Pierce, Florida 34950, United States
              </span>
            </div>
          </div>

          <div className="">
            <iframe width="100%" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=indore+(My%20Business%20Name)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drones ireland</a></iframe>
          </div>

        </div>

        <div className="">
      <form action="" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="">
              {/* Enter first name and last name  */}
              <div className="">
                <div className="">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" name="firstname" value={contact.firstname} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                  <label htmlFor="lastname">Last Name</label>
                  <br />
                  <input type="text" name="lastname" value={contact.lastname} id="lastname" onChange={(e) => handleChange(e)} />
                </div>
              </div>
              {/* Enter email and mobile number  */}
              <div className="">
                <div>
                  <label htmlFor="email">Enter Email</label>
                  <br />
                  <input type="email" name="email" value={contact.email} id="email" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <br />
                  <input type="tel" name="phone" value={contact.phone} id="phone" onChange={(e) => handleChange(e)} />
                </div>
              </div>
              {/* Select the subject using radio button  */}
              <div className="">
                <div>
                  <label htmlFor="subject" className="">
                    Select Subject
                  </label>
                </div>
                <div className="">
                  {/* first two radio input  */}
                  <div className="">
                    <div className="">
                      <input type="radio" value={'General Inquiry'} name="subject" id="" onChange={(e) => handleChange(e)} />
                      General Inquiry
                    </div>
                    <div className="">
                      <input type="radio" name="subject" id="" value={'Technical Support'} onChange={(e) => handleChange(e)} />
                      Technical Support
                    </div>
                  </div>
                  {/* last two radio input  */}
                  <div className="">
                    <div className="">
                      <input type="radio" name="subject" id="" value={' Subscriptions and Pricing'} onChange={(e) => handleChange(e)} />
                      Subscriptions and Pricing
                    </div>
                    <div className="">
                      <input type="radio" name="subject" id="" value={'Job Opportunities'} onChange={(e) => handleChange(e)} />
                      Job Opportunities
                    </div>
                  </div>
                </div>
              </div>
              {/* Enter the message in your words */}
              <div className="">
                <label htmlFor="message">Message</label><br />
                <textarea name="msg" id="message" value={contact.msg} rows={1} placeholder="Write Your message.." onChange={(e) => handleChange(e)}></textarea>
              </div>
            </div>
            <div className="">
              <Button content={'Send Message'} onSubmit />
            </div>
          </form>
        </div>


      </div>
    </div>
  );
}

export default Contactform;
