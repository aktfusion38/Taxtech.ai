import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import axios from "axios";
import './waitList.css'
import { toast } from "react-toastify";
function WaitList() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    state: ''
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      let response = await axios({
        method: 'post',
        url: 'http://localhost:8080/visitorform',
        data: formData
      });
      if (response.status === 200) {
        toast.success('Save the visitor inforamation successfully.');  // Success toast
      } else {
        toast.error('Failed to  visitor inforamation.');  // Error toast if status is not 200
      }
    } catch (error) {
      toast.error('An error occurred while Saving the visitor inforamation');
    }
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      state: ''
    });
  }
  return (
    <div className='wait-list text-center py-2'>
      <h1 className='text-3xl text-white p-8 font-bold'>The Future of Tax Is Here!</h1>
      <p className='text-[#B3BBC4] '>Step into the Future of American Tax Technology with Our Patent-Pending AI Software.</p>
      <h1 className='text-3xl  font-bold py-8 text-[#31A7DB] font-[Poppins]'><span className='bg-linear-to-r from-[#8CB1E2]  to-[#2DA7DB] bg-clip-text text-transparent'>Launching soon.</span> Get exclusive first access!</h1>



      <div className=' lg:flex px-4 lg:px-16 py-8 '>
        <div className='lg:w-[50%] sm:text-center pl-2 lg:pl-16'>
          <h1 className='text-xl lg:text-3xl leading-8 font-bold text-white w-full lg:w-[70%] text-center lg:text-left tracking-wide pb-8'> Join the Free Waitlist & Get Early Access.</h1>
          <p className='text-[#B3BBC4] md:text-center w-[100%] lg:w-[70%] lg:text-left'>Join our waitlist today to get a software demo delivered straight to your inbox and enjoy exclusive early access when we launch.
          </p>
        </div>
        <div className='w-full lg:w-[50%] mx-auto feature-form'>
          <form action="" className='pb-8 text-center visited-form' autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder='First Name' className='text-[#B3BBC4] block outline-none border-b-2 w-3/4  py-4 border-b-[#31A7DB] placeholder:text-[#B3BBC4]   focus:bg-transparent' name='firstname' value={formData.firstname} onChange={(e) => handleChange(e)} />

            <input type="text" placeholder='Last Name' className='text-[#B3BBC4] block outline-none border-b-2 w-3/4   py-4 border-b-[#31A7DB] placeholder:text-[#B3BBC4]' name='lastname' value={formData.lastname} onChange={(e) => handleChange(e)} />

            <input type="email" placeholder='Email address' className='text-[#B3BBC4] block outline-none border-b-2 w-3/4   py-4 border-b-[#31A7DB] placeholder:text-[#B3BBC4]' name='email' value={formData.email} onChange={(e) => handleChange(e)} />




            <select name="state" id="" className='text-[#B3BBC4] block outline-none border-b-2 w-3/4   py-4 border-b-[#31A7DB] placeholder:text-[#B3BBC4]' value={formData.state} onChange={(e) => (handleChange(e))}>
              <option value="Madhya Pradesh" className='select-option bg-transparent'>Madhya Pradesh</option>
              <option value="Bihar" className='select-option bg-transparent'>Bihar</option>
              <option value="Punjab" className='select-option bg-transparent'>Punjab</option>
              <option value="Gujrat" className='select-option bg-transparent'>Gujrat</option>
            </select>


            <div className='w-[78%] pt-8'>
              <Button content={'Get Started'} onSubmit={(e) => handleSubmit(e)} />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default WaitList