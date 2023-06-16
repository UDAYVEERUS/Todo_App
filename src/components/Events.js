import React, { useState } from 'react'

const Events = () => {
    const [text, setText] = useState("Click me")
    const [bg, setBg] = useState("yellow")
    const [doubleclick, setDoubleclick]  =  useState("double click")

    const changeText = () => {
        // console.log("i am clicked")
        let newbg = "pink"
        setBg(newbg)
        setText("clicked")
    }
    const doubleClick = () =>{
       setDoubleclick("double clicked")
        setBg("purple")
    }
  return (
    <div style={{backgroundColor:bg}}>
        <h1>Event in react</h1>
        <button  onClick={changeText}>{text}</button>
        <button onDoubleClick={doubleClick}>{doubleclick}</button>
    </div>
  )
}

export default Events