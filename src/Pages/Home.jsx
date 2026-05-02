import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Feature from '../Components/Feature/Feature'
import Benefits from '../Components/Benefits/Benefits'
import Schedule from '../Components/Schedule/Schedule'
import Speakers from '../Components/Speakers/Speakers'
import Image from '../Components/Image/Image'
import Pricing from '../Components/Pricing/Pricing'
import Vedio from '../Components/Vedio/Vedio'
import FAQ from '../Components/FAQ/FAQ'
import Testimonials from '../Components/Testimonials/Testimonials'
import Blog from '../Components/Blog/Blog'


const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Feature/>
      <Benefits/>
      <Schedule/>
      <Speakers/>
      <Image/>
      <Pricing/>
      <Vedio/>
      <FAQ/>
      <Testimonials/>
      <Blog/>
    </div>
  )
}

export default Home
