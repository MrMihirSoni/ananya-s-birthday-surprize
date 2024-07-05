import React from 'react'
import image from '../assets/Pranked.png'

const Fifth = ({count, setCount}) => {
  return (
    <div className='main'>
      <div className='text'><img src={image} alt="" /><p>Kidding..</p></div>
      <button className='leftBtn' onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button className='rightBtn' onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Fifth