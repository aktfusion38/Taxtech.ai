import React from 'react'
import './Aboutright.css'
function Aboutright({ data }) {
  let { icon, heading, para, img } = data;
  return (
    <div className='main py- flex flex-col lg:flex-row lg:w-[100%] lg:gap-[115px] '>

      <div className='about-content lg:w-[60%] '>
          <div className='about-top '>
            <img src={icon} alt="icon" className='about-icon' />
            <h1 className='text-sm'>{heading}</h1>
          </div>
          <p className='text-[12px] lg:text-[16px]'>{para}</p>
      </div>
      <div className='right-container flex justify-center items-center  lg:w-[40%] '>
        <img src={img} alt="img" />
      </div>

    </div>
  )
}

export default Aboutright