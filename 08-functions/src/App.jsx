import React from 'react'

const App = () => {

  // const btnclicked = () => {
    // console.log("btn is clicked")
  // }

  const mouseEnter = () =>{
    console.log("Mouse is enter")
  }

  const inputChange= (elem) =>{
    console.log(elem.target.value);
    
  }


  const pagescroll= (elem) =>{
    if(elem < 0){
      console.log("page is negative", elem);
      
    }else{
      console.log("page is positive", elem)
    }
  }




   
  return (
    <div onWheel={(elem) => {
      pagescroll(elem.deltaY)
    }}>
      <h1 className='uppercase text-8xl font-bold'>Hello, Ravi</h1>

      <button
      onMouseEnter={mouseEnter}
      //  onClick={btnclicked}
      onClick={() => {
        console.log("Button is clicked")
      }} 
       className='bg-blue-200 rounded-4xl p-5 font-bold '>Change user</button>





       <input 
       onChange={inputChange}

      // onChange={() => {
        // console.log("Input is typing")
      // }}

      // onChange={(elem) => {
        // console.log(elem.target.value);
        // 
      // }}
       className='bg-amber-100 border px-10 py-2 mx-5'
      type="text" placeholder='Text here' />



      <div 
      onMouseMove={() => {
        console.log("Mouse is in the box");
        
      }}  
      className='box bg-red-300 h-80 w-80 '>Box</div>



      <div
       className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App