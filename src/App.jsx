import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Feature from './Components/Feature/Feature'
import Benefits from './Components/Benefits/Benefits'
import Schedule from './Components/Schedule/Schedule'
import Speakers from './Components/Speakers/Speakers'
import Image from './Components/Image/Image'
import Pricing from './Components/Pricing/Pricing'
import Vedio from './Components/Vedio/Vedio'
import FAQ from './Components/FAQ/FAQ'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber/>
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
      <Footer/>
    </>
  )
}

export default App
