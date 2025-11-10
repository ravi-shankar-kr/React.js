import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
 
 
 
const Product = () => {
  return (
    
    <div>
        <div className='flex justify-center gap-10 py-5'>
            <Link to='/product/men' >Mens</Link>
            <Link to='/product/women'>Women</Link>
        </div>
          
         <Outlet />
    </div>
  )
}

export default Product