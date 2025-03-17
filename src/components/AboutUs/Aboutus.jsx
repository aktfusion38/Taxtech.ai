import React from 'react'
import './About.css'
import ComOverview from '../CompanyOverview/Comoverview';
import SoftwareOverview from '../SoftwareOverview/SofOverview';
import AboutFeatures from '../../Pages/AboutFeatures/AboutFeatures';
import Benifit from '../../Pages/Benifit/Benifit';
import Contactform from '../ContactForm/Contactform';
function Aboutus({ about,name}) {  
    // let about = {
    //     top: 'Your AI Tax Co-Pilot: TaxTech.AI',
    //     bottom: 'Closing the Tax Gap,Dollar by Dollar',
    //     subHeading: 'About Us'
    //   };
    //   let contact = {
    //     top: 'Your AI Tax Co-Pilot:TaxTech.AI',
    //     bottom: "Setting a New Standard for Accuracy in U.S. Tax Returns",
    //     subHeading: 'Contact Us'
    //   };
    
    let {top,bottom,subHeading} = about;
    return (
        <div className='mx-auto'>
            <div className='about-us h-32  md:h-64 lg:h-96 pb-10'>
                <div className="left pt-8 pl-8 lg:pt-16 lg:pl-16" >
                    <div className="text sm:text-xl md:text-xl lg:text-4xl">
                        <h1><span className='text-top'>{top}</span>
                            <span className='text-bottom'>{bottom}</span></h1>
                    </div>
                    <div className="subheading  lg:pt-8 text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
                        <h1>{subHeading}</h1>
                    </div>
                </div>
            </div>


            <div>
            {name && <ComOverview />}
            </div>


            <div>
                {name && <SoftwareOverview/>}
            </div>


            {/* <div className='mx-auto'> 
            */}
            <div className='mx-auto'>

                {name && <AboutFeatures/>}
            </div>


            <div>
                {name && <Benifit/>}
            </div>

            <div>
                {!name && <Contactform/>}
            </div>
        </div>
    )
}

export default Aboutus