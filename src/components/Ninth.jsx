import React from 'react'
import image from '../assets/Pappi.png'

const Ninth = ({count, setCount}) => {
  return (
    <div className='main'>
      <div className='text'><img src={image} alt="" /><p>ab itna aage aa hi gyi ho to ye lo pappi</p></div>
      <button className='leftBtn' onClick={()=>setCount(null)} ><i className='bx bxs-left-arrow' ></i></button>
    </div>
  )
}

export default Ninth
