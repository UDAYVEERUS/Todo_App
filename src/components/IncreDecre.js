import React, { useState } from 'react'

const IncreDecre = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count+1)
    }
    const decrementCount = () => {
        setCount(count-1)
    }
    
  return (
    <div>
        <h1>Counting</h1>
        <h2>{count}</h2>
        <button style={{fontSize:"30px" , marginRight : "10px"}} onClick={incrementCount}>+</button>
        <button style={{fontSize:"30px"}} onClick={decrementCount}>-</button>
    
    </div>
  )
}

export default IncreDecre