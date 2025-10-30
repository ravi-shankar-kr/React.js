import React from 'react'
import { useState } from 'react'

const Ravi = () => {

    const [a, setA] = useState(10);

    function inc() {
        setA (a+1);
    }

    const dec = () => {
        setA (a-1);
    }

  return (
    <div>
        <h1>The number of A is {a}</h1>
        <button onClick={inc}>Increasing</button>
        <button onClick={dec}>Decreasing</button>
    </div>
  )
}

export default Ravi;