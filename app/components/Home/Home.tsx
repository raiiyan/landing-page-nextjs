'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Services from './Services/Services'
import ClientReview from './ClientReview/ClientReview'
import Team from './Team/Team'
import Pricing from './Pricing/Pricing'

const Home = () => {

  useEffect (() => {
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        easing: 'ease',
        anchorPlacement: "top-bottom"
      });
    };

    initAOS();
  })

  return (
    <div className='overflow-hidden'>
        < Hero />
        < About />
        < Feature />
        < Services />
        < ClientReview />
        < Team />
        < Pricing />
    </div>
  )
}

export default Home