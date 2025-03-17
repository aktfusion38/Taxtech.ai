import React from 'react'
import './Comoverview.css'
import hero from "../../assests/HeroOne.png";
function Comoverview() {
  return (
    <div className='company m-auto max-w-[1360px]'>
      {/* <h1 className='overview-subheading'>Company Overview</h1> */}
      <h1 className='text-3xl lg:ease-in transition lg:text-5xl font-semibold text-[#1E3A5F] pb-4'>Company Overview</h1>

      <div className='Overview-div'>
        <img src={hero} alt="Company-Overview" className='Overview sm:w-1/2' />
      </div>
      <p className='overview-desc'>TaxTech.AI is an advanced AI-powered software solution designed to transform the way taxes are managed. It offers a comprehensive range of features, including personalized tax advice tailored to each user's unique circumstances, advanced fraud detection capabilities that identify suspicious transactions, and comprehensive error checking to ensure all data is accurate and compliant. With real-time updates on tax law changes and regulations, users have the latest tax code at their fingertips, ensuring they always work with up-to-date information when preparing tax returns and other documents.</p>
    </div>
  )
}

export default Comoverview