import React from 'react'
import './Button.css';
function Button({content}) {
  return (
     <button className='button px-5 py-2 rounded-full p-2  text-white bg-linear-to-r from-[#1E3A5F] via-[#8CB1E2] to-[#2DA7DB] cursor-pointer flex whitespace-nowrap'>{content}</button>
  )
}

export default Button