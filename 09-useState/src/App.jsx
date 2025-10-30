import React from 'react'
import { useState } from 'react'
import Ravi from './components/Ravi.'
const App = () => {

  const [a, setA] = useState(10);
  const [user, setUser] = useState("Ravi")

  function changeA ()  {
     setA (30);
     setUser("Kashyap")
    
  }


  return (
    <div>
      <h1>Value of A is {a} <br /> Name of user is {user}</h1>
      <button onClick={changeA}>click</button>
      <Ravi/>
    </div>
  )
}

export default App