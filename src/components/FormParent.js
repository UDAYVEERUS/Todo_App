import React, { useState } from 'react'

const FormParent = (props) => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(name)
    } 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>passing data from child to parent component</h1>
                <input type="text" value={name} onChange={handleChange} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FormParent