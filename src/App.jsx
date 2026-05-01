import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Feature from './Components/Feature/Feature'
import Benefits from './Components/Benefits/Benefits'
import Schedule from './Components/Schedule/Schedule'

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
    </>
  )
}

export default App
