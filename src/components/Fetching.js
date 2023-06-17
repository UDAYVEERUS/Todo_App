import React, { useState } from 'react'
import Menu from './Menu'

const Fetching = () => {
   

  return (
    <div>
        {Menu.map((item)=>{
            return (
                <div style={{textAlign:"center"}} key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.roll}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Fetching