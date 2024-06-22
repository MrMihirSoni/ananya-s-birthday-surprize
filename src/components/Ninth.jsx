import React from 'react'
import image from '../assets/Pappi.png'

const Ninth = ({count, setCount}) => {
  return (
    <div>
      <div><img src={image} alt="" /><p>ab itna aage aa hi gyi ho to ye lo pappi</p></div>
      <button onClick={()=>setCount(6)} ><i className='bx bxs-left-arrow' ></i></button>
    </div>
  )
}

export default Ninth
