import React from 'react'
import image from '../assets/Pranked.jpg'

const Fifth = ({count, setCount}) => {
  return (
    <div>
      <div><img src={image} alt="" /><p>Kiddingk..</p></div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Fifth