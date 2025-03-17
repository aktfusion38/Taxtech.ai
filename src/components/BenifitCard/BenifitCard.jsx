import React from 'react'
import taxAdvise from '../../assests/Benifit/tax_advise.png';
import './BenifitCard.css'
function BenifitCard( {cardData}) {
    const {img,heading,para} = cardData;
  return (
    <div className={`benifit-card lg:h-[350px] h-[280px]  `}>
        <div className="benifit-img">
            <img src={img} alt="benifit-img" />
        </div>
        <div className="benifit-heading lg:text-2xl">{heading}</div>
        <div className="benifit-para text-[14px] lg:text-[16px]">{para}</div>
    </div>
  )
}

export default BenifitCard