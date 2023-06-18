import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.heading}</h1>
        <img src={props.imgsrc} alt="_blank" />
        <p>{props.title}</p>
        <p>{props.lorem}</p>
        <button>{props.text}</button>
        <hr />
    </div>
  )
}

export default Card