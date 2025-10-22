import React from 'react'
// import 'remixicon/fonts/remixicon.css'

const RightCard = () => {
  return (
    <>
    <div className='h-full overflow-hidden  relative w-80  rounded-4xl '>
        <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388" alt="" />

        <div className='absolute top-0 left-0 h-full w-full  bg bg-red-200'> 
            <H2> 1</H2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, in aspernatur minus debitis provident esse.</p> */}
            {/* <div> */}
                {/* <button>Satisfied</button> */}
                {/* <button><i class="ri-arrow-right-line"></i></button> */}
            {/* </div> */}

        </div>

    </div>
    </>
  )
}

export default RightCard