import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {      // form handler
    e.preventDefault()
    console.log("form submitted by ", title)

    setTitle("");
  }

  return (
    <div >
       <form onSubmit={(e) => {
        submitHandler(e)
       }}>
        <input className='bg-white m-5 p-2 rounded-2xl' 
        type="text"
         placeholder='Enter your name'
         value={title}
         onChange={(e) => {
          setTitle(e.target.value);
         }}
         />

        {/* <input className='bg-white m-5 p-2 rounded-2xl' type="text" placeholder='Text Here'/> */}
        <button className='bg-blue-950 px-5 py-2 rounded-2xl'>Click</button>
       </form>
    </div>
  )
}

export default App