import React, { useState } from 'react'

import '../App.css'

const DIgitalClock = () => {
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
  return (
    <div>
        <h1>Time</h1>
        <h2>{ctime}</h2>
        <button onClick={updateTime}>get time</button>
        <h2>{date}</h2>
    </div>
  )
}

export default DIgitalClock 