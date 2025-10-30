import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10);

  const btnClick= () => {
    setnum (20);
  }

  return (
    <div>
      <h1 className='text-5xl m-6  '>{num}</h1>
      <button onClick={btnClick} className='px-5 py-3 m-3 rounded-3xl bg-gray-200'>Click</button>
    </div>
  )
}

export default App