import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState()

    const handleChange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }
    return (
        <div>
            <h1>Hello : {name}</h1>
            <input type="text" onChange={handleChange} placeholder='Enter Your Name' />
            <button>submit</button>
        </div>
    )
}

export default Form