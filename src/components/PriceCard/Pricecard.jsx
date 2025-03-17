import React from 'react'
import './Pricecard.css';
import Button from '../Button/Button';
import tickb from '../../assests/tickblack.png';
import tickw from '../../assests/tickwhite.png'
function Pricecard({ cardData }) {
   let { type, price, permonth, owner, advantage, rtn, btn, center } = cardData;

   return (
      <div className={`price-card ${center ? 'add' : ''}`}>
         <div className={`pricetop `}>
            <div className={`'type' ${center?'#fff':'#1E3A5F'}` }  >{type}</div>
            <div className={`price-sec ${center ? 'white' : 'black'}`}><span className={`price ${center ? 'white' : 'black'}`}>{price}</span>{permonth}</div>
            <div className="owner"> {owner}</div>
         </div>

         <div className="advantage mb-4">
            <ul>
               {advantage.map((list, idx) => (<li key={idx}><img src={center?tickw:tickb} style={{}} alt="ckecked" />{list}</li>))}
            </ul>
         </div>

         <div className='price-bottom'>
            <div className={`return ${center ? 'white' : 'black'}`}> {rtn}
               <hr className='line' />
            </div>
            <div className='w-[100%] flex items-center justify-center'>
               <Button content={btn} />
            </div>
         </div>

      </div>
   )
}

export default Pricecard