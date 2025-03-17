import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home/Home';
import Aboutus from './components/AboutUs/Aboutus';
import Layout from './Pages/Layout/Layout';
function App() {
  let about = {
    top: 'Your AI Tax Co-Pilot: TaxTech.AI',
    bottom: 'Closing the Tax Gap,Dollar by Dollar',
    subHeading: 'About Us'
  };
  let contact = {
    top: 'Your AI Tax Co-Pilot:TaxTech.AI',
    bottom: "Setting a New Standard for Accuracy in U.S. Tax Returns",
    subHeading: 'Contact Us'
  }; 
   
  return (

    <BrowserRouter>
       
        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
          <Route path='/' element={<Layout children={<Home  />}/>}/>
          <Route path='/about' element={<Layout children={<Aboutus about={about} name={'about'}/>}/>}/>
          <Route path='/contact' element={<Layout children={<Aboutus about={contact} />}/>}/> 
        </Routes>
    </BrowserRouter>
  );



}

export default App

