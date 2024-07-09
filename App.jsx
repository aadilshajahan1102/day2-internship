import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to react session</h1>
      <View/>
      
    </>
  )
}

export default App
