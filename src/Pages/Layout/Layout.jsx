import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import './Layout.css';
function Layout({ children }) {
   function handleScroll(e){
    console.log(e)
   }
    return (<>
        <div className='layout max-w-1360px] m-auto' onScroll={(e)=>{handleScroll(e)}} >
            <div className='max-w-[1360px] m-auto Navbar'>
                <Navbar />
            </div>
            {children}
            <div className='max-w-[1360px] m-auto Footer'>
                <Footer />
            </div>
            <ToastContainer />
        </div>
    </>)
}

export default Layout