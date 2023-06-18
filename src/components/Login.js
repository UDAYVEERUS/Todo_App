import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    const [fullName, setFullName] = useState("")
    const [lastNameNew, setLastNameNew] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setFullName(name)
        setLastNameNew(lastName)
    }
    const handleChange1 = (event) => {
        setName(event.target.value)
    }
    const handleChange2 = (event) => {
        setLastName(event.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Sign in form</h1>
            <h1>Hello:{fullName} {lastNameNew}</h1>
            <input type="text" onChange={handleChange1} placeholder='Enter your name' value={name} />
            <br/>
            <input type="text" onChange={handleChange2} placeholder='Enter your lastName' value={lastName} />
            <br/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login