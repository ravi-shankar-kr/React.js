import React from 'react'

const App = () => {

  localStorage.setItem('user', 'Ravi')

  const user = localStorage.getItem('user');
  console.log(user);
  


  return (
    <div> 
      <h1 className='bg-red-600 text-2xl'>Hello</h1>
    </div>
  )
}

export default App