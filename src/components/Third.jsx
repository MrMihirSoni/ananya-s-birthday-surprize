import React from 'react'
import image from '../assets/Excited.png'

const Third = ({count, setCount}) => {
  return (
    <div>
      <div><img src={image} alt="" /><p>Yes today is ....</p></div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Third