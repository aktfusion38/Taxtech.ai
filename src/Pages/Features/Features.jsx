import React from 'react'
import './Features.css'
// import advisor from '../../images/ai_tax_advisor.png';
import { data } from '../../Data/data.js';
import Button from '../../components/Button/Button'

function Card({ url, text, para }) {

    return (
        <div className='p-1 lg:p-8 text-center flex flex-col gap-4 justify-center items-center'>
            <div className='w-full'> <img src={url} alt="advisor" className='mx-auto' /></div>
            <h1 className='text-xl lg:text-2xl font-medium text-[#1E3A5F]'>{text}</h1>
            <p className='text-[#1E3A5F] text-sm lg:border-none w-[95%] lg:w-[80%] mb-4 pb-2 border-b-2 border-[#x1E3A5F]'> {para}</p>
        </div>
    );
}

function Features() {
    return (
        <div className='features  w-full py-4 lg:py-12'>
            <div className='text-center mx-auto lg:w-[60%] sm:px-4 lg:px-20'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#1E3A5F]  text-center py-8'>Discover the Powerful Features of TaxTech.AI. </h1>
                <p className='lg:text-xl'>Our software is designed to streamline your workflow and set a new standard for accuracy in tax returns.</p>
            </div>
            {/* Render the card component using map  */}
            <div>
                {data?.map((item, idx) => (<Card key={idx} url={item.url} text={item.text} para={item.para} />))}
            </div>
            <div className='text-center px-4 flex justify-center'>
                <Button content={'Contact Us'} />
                <button className='cursor-pointer pl-4 w-[100px]'>View All →  </button>
            </div>
        </div>
    )
}

export default Features