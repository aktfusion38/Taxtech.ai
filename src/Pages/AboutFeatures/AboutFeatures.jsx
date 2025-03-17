import React from 'react'
import './AboutFeatures.css'
import {keyData} from '../../Data/key-feature.js';
import Aboutright from '../../components/Aboutright/Aboutright.jsx';
import Aboutleft from '../../components/Aboutleft/Aboutleft.jsx';

function AboutFeatures() {
 
  return (
    <div className='about-features mx-auto p-4 lg:p-10'>
        <div className="key-feature-heading">
            <h1 className='key-subheading text-2xl lg:text-4xl leading-none'>Key Features of the Software</h1>
            <div className='mx-auto'>
            {
              keyData.map((data,idx)=>{
                return idx%2==0?<Aboutright key={idx} data={data}/>:<Aboutleft key={idx} data={data}/>;
              })
            }
            </div>
        </div>
        
    </div>
  )
}

export default AboutFeatures