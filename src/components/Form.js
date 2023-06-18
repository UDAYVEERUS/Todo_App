import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [fullname, setFullname] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFullname(name)
    }
    return (
        <div>
            <h1>Hello : {fullname}</h1>
            <input type="text" onChange={handleChange} placeholder='Enter Your Name' value={name} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Form