import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber/>
      <Banner/>
    </>
  )
}

export default App
