import React from 'react'
import Hero from './Hero';
import Testimonials from './Testimonials';
import About from './About';
import WhyUs from './WhyUs';
import PricingSection from './PricingSection.jsx';
import Workshop from './Workshop.jsx';
import TrustStudent from './TrustStudent.jsx';

const Home = () => {
  return (
    <>
      <main className='min-h-screen bg[#F7F3FF] text-slate-900 antialiased'>
        <Hero />
      </main>
      <Testimonials />
      <About />
      <WhyUs />
      <PricingSection />
      <Workshop />
      <TrustStudent />
    </>
  )
}


export default Home
