import React from 'react'
import './Aboutleft.css'
function Aboutleft({ data }) {
  let { icon, heading, para, img } = data;

  return (
    <div className='main  flex flex-col lg:flex-row lg:w-[100%] lg:gap-[115px]'>

      <div className='left-container flex justify-center items-center  lg:w-[40%]'>
        <img src={img} alt="img" />
      </div>

      <div className='about-content lg:w-[60%]'>
        <div className='about-top'>
          <img src={icon} alt="icon" className='about-icon ' />
          <h1>{heading}</h1>
        </div>
        <p className='text-[12px] lg:text-[16px]'>{para}</p>
      </div>

    </div>
  )
}

export default Aboutleft