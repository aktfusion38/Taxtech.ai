import React, { useState } from 'react'
import './hero.css';
import HeroOne from '../../assests/HeroOne.png'
import HeroTwo from '../../assests/HeroTwo.png'
import HeroThree from '../../assests/HeroThree.png'
import Button from '../../components/Button/Button'
import heroGrp from '../../assests/hero_grp.png';
import { toast } from 'react-toastify';

import axios  from 'axios';


function Hero() {

  const [email,setEmail] = useState({email:''});
  function handleChange(e){
    setEmail({[e.target.name]:e.target.value});
  }

  async function handleSubmit(e){
    e.preventDefault();  
    try {
      let response = await axios ({
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
    setEmail({email:''});
   }

  return (
    <div className="hero-bg lg:flex lg:py-8"> 

      <div className='px-4 lg:px-16 lg:w-[50%]'>

        <h1 className=' text-2xl lg:text-3xl lg:pt-[100px]  font-bold bg-linear-to-b from-[#1E3A5F] via-[#8CB1E2] to-[#2DA7DB] bg-clip-text text-transparent' >Your AI Tax Co-Pilot: TaxTech.AI <br />Welcome to the future of tax <br />technology with our cutting-br
          edge, patent-pending AI tax <br />software.</h1>


        <p className='lg:w-[80%] py-[30px] text-[#1E3A5F]'>Empowering Tax Professionals, Businesses, and Individuals to Eliminate Errors and Fraud in Tax Returns, Ensuring Absolute Compliance with IRS Tax Law.</p>

        <form action="" onSubmit={(e)=>{handleSubmit(e)}} autoComplete="off">
          <div className='flex flex-col   gap-5'>
            <input type="email" name='email' value={email.email} placeholder='Enter email' className='outline-none border-b-2 w-3/4   p-2 border-b-[#31A7DB] ' onChange={(e)=>handleChange(e)}/>
            <div className='md:w-1/2 lg:w-1/4'>
              <Button content={'Get Started'} />
            </div>
          </div>
        </form>
      </div>

      <div className='lg:w-[50%] lg:pr-8 w-full flex items-center'> 
        <div className='lg:relativ mx-auto lg:pl-30 lg:pl-0 sm:mt-2'   > 
          <img src={heroGrp} alt="heroGrp" />
        </div>
      </div>


    </div>
  )
}

export default Hero