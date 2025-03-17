import React from 'react'
import './Benifit.css';
import BenifitCard from '../../components/BenifitCard/BenifitCard';
import { benifitData } from '../../Data/benifit';
import Pricecard from '../../components/PriceCard/Pricecard';
import {priceData} from '../../Data/pricecard.js';
function Benifit() {
  return (
    <div className='benifit'>
      <div className='benifit-top-heading '>
        <h1 className='text-2xl lg:text-4xl'>Benefits of TaxTech.AI for U.S. Taxpayers</h1>
      </div>
      <div className='benifit-card-section'>
        {/* use map and show the component */}
        {
          benifitData.map((data,idx)=>(<BenifitCard key={idx} cardData={data}/>))
        }
        
      </div>
      <div className='benifit-middle-heading' id='pricing'>
        <h1 className='text-xl lg:text-4xl'>TaxTech.AI offers three versions of its software, allowing users to choose the one that best suits their specific circumstances.</h1>
      </div>
      <div  className='flex justify-center pcard flex-col sm:gap-8 lg:gap-0 lg:flex-row'>
        {/* use map and show price component */} 
        {priceData.map((data,idx)=>(<Pricecard key={idx} cardData={data}/>))}
      </div>
    </div>
  )
}

export default Benifit