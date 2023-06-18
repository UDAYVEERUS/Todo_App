import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [fullName, setFullName] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFullName(name)
    }
    const resetForm = () => {
        setFullName("")
    }
    return (
        <div>
            <h1>Hello : {fullName}</h1>
            <input type="text" onChange={handleChange} placeholder='Enter Your Name' value={name} />
            <button onClick={handleSubmit}>submit</button>
            <button onClick={resetForm}>reset</button>
        </div>
    )
}

export default Form