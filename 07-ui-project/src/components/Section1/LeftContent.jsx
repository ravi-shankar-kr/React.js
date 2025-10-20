import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between '>
        <div className='p-6'>
            <h3 className='text-6xl font-bold mb-6 leading-[1.1]'>Prospective <br /><span className=' '> Customer</span> <br />Segmentation</h3>
            <p className='text-xl text-gray-700 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, distinctio eveniet? Sint iusto esse unde ullam iure nisi inventore sit.</p>
        </div>
        <div className='text-9xl'><i className="ri-arrow-right-up-line"></i></div>
    </div>
  )
}

export default LeftContent