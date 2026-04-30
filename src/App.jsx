import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber/>
      <Banner/>
      <About/>
    </>
  )
}

export default App
