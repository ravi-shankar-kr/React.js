import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1 className='text-5xl font bold '>The theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App