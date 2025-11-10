import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        props.setTheme('Dark')
    }
  return (
    <div>
        <button onClick={changeTheme} 
        className='bg-blue-400 text-white text-2xl  rounded px-4 py-2 m-3'>
            Chnage Theme
        </button>
    </div>
  )
}

export default Navbar