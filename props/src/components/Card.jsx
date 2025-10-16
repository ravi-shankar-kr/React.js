import React from 'react'

const Card = (props) => {
  return (
     
        <div className='card'>
            <img src= {props.img} alt="" />
            <h1>{props.user}</h1>
            <h3>{props.age}</h3>
            <p> {props.prof}</p>
            <button>view profile</button>
        </div>
     
  )
}

export default Card