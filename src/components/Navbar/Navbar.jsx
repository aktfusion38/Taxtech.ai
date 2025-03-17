import React, { useState } from 'react'
import logo from '../../assests/logo.png'
import Button from '../Button/Button'
import hamburger from '../../assests/hamburger.png'
import './Navbar.css';
import { Link } from 'react-router-dom';

// cosnt [hamburger,setHamburger] = useState()
function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleScroll() {
    window.location.hash = 'about';
    setTimeout(() => {
      let price = document.getElementById('pricing');
      price.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }
  function handleScrollTop(e) {
    // window.scrollTo(0,0);
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // console.log(e);
  }
  function scrollToFooter(e) {
    let footerSection = document.getElementById('footer-section');
    window.scrollTo(0, window.document.body.scrollHeight);
  }

  return (
    <div className='Navbar  justify-between py-4  px-16 bg-[#EFFEFF] border-b-4 border-[#31A7DB] '>
      <div className='nav-top'>
        <div className='top-logo flex text-center '>
          <img src={logo} alt="logo" className='logo     lg:h-[67px] lg:w-[97px] mx-auto' />
          <div className='lg:w-[180px] lg:h-[42px] '>
            <h1 className='font-black sm:text-xl md:text-2xl logo-name'>TEXTECH.AI</h1>
            <small className='text-[#31A7DB] text-[12px] logo-sub tracking-tightest text-nowrap'>THE FUTURE OF TAX IS HERE</small>
          </div>
          
        </div>
        <div className='ham'>
            <img src={hamburger} alt="hamburger" className='hamburger' onClick={() => {
              setToggle(!toggle);
              console.log(toggle)
            }} />
          </div>
      </div>
      <div className='nav-right'>

        <ul className={`nav-links w-full   ${toggle ? 'full' : 'half'}   items-center `}>
          <Link className=' font-semibold hover:text-[#31A7DB] li' onClick={(e) => handleScrollTop(e)} to="/"><span className='hover:border-b-2'>Home</span></Link>
          <Link className=' font-semibold  hover:text-[#31A7DB] li' to="/about" onClick={(e) => handleScrollTop(e)}> <span className='hover:border-b-2 whitespace-nowrap'>About us</span> </Link>
          <Link className=' font-semibold  hover:text-[#31A7DB] li' to="/about" onClick={(e) => handleScroll(e)} > <span className='hover:border-b-2'>Pricing</span> </Link>
          <Link className=' font-semibold  hover:text-[#31A7DB] li' to="/contact" onClick={(e) => handleScrollTop(e)}>  <span className='hover:border-b-2'>Contact</span> </Link>
          <div onClick={(e) => { scrollToFooter(e) }} className=' text-center flex justify-center'>
            <Button content={'Get Started'} />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar