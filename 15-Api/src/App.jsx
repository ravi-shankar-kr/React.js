import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  //  const  getData = async () => {

    // const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //  const data = await response.json()
    // console.log(data);
  // 
  // }

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
     
    setData(response.data);

    // console.log("data is getting")

    
  }


  return (
    <div> 
      
       <button onClick={getData} className='border border-black p-3'>Click</button>
       <div>
        {data.map(function(elem,idx){

          return <div> {idx} Hello {elem.author}</div>
        })}
       </div>
    </div>
  )
}

export default App