import React from 'react'
import './SofOverview.css'
import software from "../../assests/Software.png";

function SofOverview() {
  return (
    <div className='software max-w-[1360px] m-auto'>
      <h1 className='overview-subheading text-[30px]'>Software Overview</h1>
      <div className='software-desc text-[16px] '>
        <p className='overview-desc'>TaxTech.AI is an advanced AI-powered software solution designed to transform the way taxes are managed. It offers a comprehensive range of features, including personalized tax advice tailored to each user’s unique circumstances, advanced fraud detection capabilities that identify suspicious transactions, and comprehensive error checking to ensure all data is accurate and compliant. With real-time updates on tax law changes and regulations, users have the latest tax code at their fingertips, ensuring they always work with up-to-date information when preparing tax returns and other documents.</p>
        <p className='overview-desc'>Whether you’re an individual taxpayer, a business owner managing complex financials, or a tax professional serving multiple clients, TaxTech.AI simplifies the entire tax process. It provides users with the tools needed to confidently handle their tax obligations, eliminate errors, reduce the risk of audits and penalties, and maximize compliance and efficiency in every aspect of tax filing.</p>
      </div>
      <div className='Overview-div'>
        <img src={software} alt="Software-Overview" className='software-Overview' />
      </div>
    </div>
  )
}

export default SofOverview