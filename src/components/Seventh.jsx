import React from 'react'

const Seventh = ({count, setCount}) => {
  return (
    <div>
      <div>aage kuch nhi hai</div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Seventh
