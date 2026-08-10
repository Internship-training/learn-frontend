// import React from 'react'

import Hero from "../components/sections/Home/Hero"
import Program from "../components/sections/Home/Program"
import WhyChoose from "../components/sections/Home/WhyChoose";
import Interns from "../components/sections/Home/Interns";
import FAQ from "../components/sections/Home/FAQ";


const Home = () => {
  return (
    <>
      <Hero />
      {/* <WhyChoose /> */}
      <WhyChoose />
      {/* Program */}
      <Program />
      {/* interns */}
      <Interns />
      {/* FAQ */}
      <FAQ />
    </>
  )
}

export default Home