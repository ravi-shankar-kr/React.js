import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute  top-0 left-0 h-full w-full    p-8 flex flex-col justify-between'> 
    <h2 className='bg-white text-2xl font-bold  rounded-full h-14 w-14 flex justify-center '>{props.id+1}</h2>
    
    <div>
      <div>
      <p className='text-xl leading-relaxed text-white mb-15'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, in aspernatur minus debitis provident esse.</p>
      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
        <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
        </div>
      </div>  
    </div>
</div>
  )
}

export default RightCardContent