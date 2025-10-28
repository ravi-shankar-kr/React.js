import React from 'react'
import RightCardContent from './RightCardContent'
// import 'remixicon/fonts/remixicon.css'

const RightCard = (props) => {
  console.log(props.users)
  return (
    <>
    <div className='h-full overflow-hidden  relative w-80  rounded-4xl shrink-0 '>
        <img className='h-full w-full object-cover ' src={props.img} alt="" />

        <RightCardContent id={props.id} tag={props.tag}/>

    </div>
    </>
  )
}

export default RightCard