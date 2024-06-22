import React from 'react'

const Eighth = ({count, setCount}) => {
  return (
    <div>
      <div>Bola nn aage kuch ni hai</div>
      <button onClick={()=>setCount(count-1)} ><i className='bx bxs-left-arrow' ></i></button>
      <button onClick={()=>setCount(count+1)} ><i className='bx bxs-right-arrow' ></i></button>
    </div>
  )
}

export default Eighth
