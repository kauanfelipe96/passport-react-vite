import { useState } from 'react'
import './App.css'
import Passport from './components/Passport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Passport/>
    </>
  )
}

export default App
