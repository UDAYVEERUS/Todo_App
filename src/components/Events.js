import React, { useState } from 'react'

const Events = () => {
    const [text, setText] = useState("Click me")
    const [bg, setBg] = useState("yellow")

    const changeText = () => {
        // console.log("i am clicked")
        let newbg = "pink"
        setBg(newbg)
        setText("clicked")
    }
  return (
    <div style={{backgroundColor:bg}}>
        <h1>Event in react</h1>
        <button  onClick={changeText}>{text}</button>
    </div>
  )
}

export default Events