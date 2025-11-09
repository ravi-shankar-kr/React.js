import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async() => {
     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
     setUserData(response.data);
  }

  useEffect (function () {

    getData();
  },[index])

  let printUaerData = 'no user Available'

  if ( userData.length > 0) {
    printUaerData = userData.map(function(elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-60 w-50 bg-white rounded overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-semibold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
        
        <div className='flex flex-wrap gap-5'>
            {printUaerData}
        </div>

        <div className='flex justify-center items-center   p-5'>
          <button 
            onClick={ () => {
              if ( index > 1) {
                setIndex(index-1)
              }
            }}
          className=' bg-amber-400 text-black px-4 py-2 font-bold text-sm cursor-pointer active:scale-95 rounded m-5'>Prev</button>
          <button
            onClick={ () => {
              setIndex(index+1)
            }}
           className=' bg-amber-400 text-black px-4 py-2 font-bold text-sm cursor-pointer active:scale-95 rounded m-5'>Next</button>
        </div>
    </div>
  )
}

export default App