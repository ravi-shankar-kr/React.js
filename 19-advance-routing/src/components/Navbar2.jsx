import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()
  return (
    <div className='flex gap-10 text-2xl bg-amber-400 px-5 py-2 '>
        <button
        onClick={() => {
            navigate('/')
        }}
         className='bg-blue-600 rounded px-5 py-2 text-2xl font-semibold cursor-pointer active:scale-95'>Return to Home page</button>

        <button 
        onClick={() => {
            navigate(-1)
        }}
         className='bg-blue-600 rounded px-5 py-2 text-2xl font-semibold cursor-pointer active:scale-95'>Back</button>

        <button
        onClick={() => {
            navigate(+1)
        }}
         className='bg-blue-600 rounded px-5 py-2 text-2xl font-semibold cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2