import React from 'react'
import image from "../assets/Calender.png"

const First = ({count, setCount}) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <p>So it's 9th july...</p>
      </div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default First
