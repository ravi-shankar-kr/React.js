import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const submitHandler =(e) => {
    e.preventDefault();
    // console.log( title);
    // console.log(details);
    const copyTask = [...task];
    // console.log(task);
    copyTask.push({title,details})
    // console.log(copyTask);
    setTask(copyTask)
    
    
    
    setTitle("")
    setDetails("")
  }


  

  return (
    <div className='h-screen lg:flex bg-black text-white' >

       <form onSubmit={(e) => {
        submitHandler(e);
       }}
        className='flex items-start p-10 lg:w-1/2   gap-5 flex-col ' >

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* pahla input for heading  */}
        <input
         type="text" 
          placeholder='Enter Notes Heading' 
          className='px-5 w-full py-2 border-2 rounded outline-none font-medium'
          value={title}
          onChange ={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* detail input  */}
        <textarea type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full h-32 border-2 rounded outline-none font-medium'
          value={details}
          onChange ={(e) => {
            setDetails(e.target.value);
          
          }}
          
        />

        <button  className='bg-white active:scale-95 w-full text-black px-5 py-2 rounded outline-none font-medium'>Add Notes</button>
         
       </form>

       <div className='p-10  lg:border-l-2 lg:w-1/2 '>
       <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='flex  gap-5 mt-5 items-start justify-start flex-wrap overflow-auto h-full'>
        {task.map(function(elem, idx) {

         return  <div key={idx}  className="relative h-50 w-40 bg-cover py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-2xl text-black p-4">
          <h3 className='leading-tight text-xl font-bold'>{ elem.title}</h3> 
          <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.details} </p>
          </div>
        })}
         
        </div>
       </div>

       
    </div>
  )
}

export default App