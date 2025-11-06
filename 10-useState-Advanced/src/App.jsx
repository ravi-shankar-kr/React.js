import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10);

  const btnClick= () => {
    setnum (20);
     
  }


  const [user, setUser] = useState({user:'Ravi', age:22});  //Arrays

  const btnisClick= () => {
     const newuser = {...user};
    //  console.log(newuser);
    newuser.user = 'Muskan'
    newuser.age = 24

    setUser(newuser) 
  }



  const [arr, setArr] = useState([10, 20, 30]);  //Arrays

  const addArray= () => {
     const newarr = [...arr];
     newarr.push(90);
     setArr(newarr);
     
    //  console.log(arr);
  }

  const [useArr, setUserArr] = useState({user:'Ravi', age:22});  //Arrays
  const userArray= () => {
    setUserArr(prev => ({...prev, age:50}))
   console.log(useArr);
  }
  



  return (
    <div>
       <button className='p-10 border  '>click</button>
      <h1 className='text-5xl m-6  '>{num}</h1>
      <button onClick={btnClick} className='px-5 py-3 m-3 rounded-3xl bg-gray-200'>Click</button>

      <h1 className='text-5xl m-6  '>{user.user}, {user.age}</h1>
      <button onClick={btnisClick} className='px-5 py-3 m-3 rounded-3xl bg-gray-200'>Click</button>

      <h1 className='text-5xl m-6  '>{arr}</h1>
      <button onClick={addArray} className='px-5 py-3 m-3 rounded-3xl bg-gray-200'>Click</button>

      <h1 className='text-5xl m-6  '>{useArr.user}, {useArr.age}</h1>
      <button onClick={userArray} className='px-5 py-3 m-3 rounded-3xl bg-gray-200'>Click</button>
      
    
    </div>
  )
}

export default App