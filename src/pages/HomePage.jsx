import React, { useState } from 'react';
import HeroSection from '../components/HerosSection';
import NomineesSection from '../components/NomineesSection';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
 

  return (
    <>
     <HeroSection/>
     <NomineesSection/>
     <HowItWorks/>
     <AboutUs/>
     <Footer/>
    </>
 

    
  );
};

export default HomePage;
