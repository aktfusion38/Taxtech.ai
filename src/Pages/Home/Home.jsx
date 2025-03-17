import React from 'react'  
import Hero from '../Hero/Hero'
import WaitList from '../WaitList/WaitList';
import Features from '../Features/Features'; 
function Home( ) {
   
  return (
    <div className='max-w-[1360px] mx-auto'> 
      <div>
        <Hero />
        
      </div>
      <div>
        <WaitList />
      </div>
      <div>
        <Features />
      </div> 
    </div>
  )
}

export default Home