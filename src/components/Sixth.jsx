import React from 'react'

const Sixth = ({count, setCount}) => {
  return (
    <div>
      <div>Happy BirthDay....</div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Sixth