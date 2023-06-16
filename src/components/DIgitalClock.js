import React, { useState } from 'react'

import '../App.css'

const DIgitalClock = () => {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(updateTime,1000)
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{fontSize : "50px"}}>{ctime}</h1>
    </div>
  )
}

export default DIgitalClock 