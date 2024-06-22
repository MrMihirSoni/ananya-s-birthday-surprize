import React from 'react'
import image from '../assets/Thinking.png'

const Second = ({count, setCount}) => {
  return (
    <div>
      <div><img src={image} alt="" /><p>What's Special about today?</p></div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Second
