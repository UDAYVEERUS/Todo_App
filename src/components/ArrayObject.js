import React from 'react'

const ArrayObject = () => {
    const data = [
        {
            id : 1,
            name : "uday",
            roll : 12
        },
        {
            id : 2,
            name : "rohit",
            roll : 13
        },
        {
            id : 3,
            name :"diksha",
            roll: 14
        },
    ]
  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {data.map((item) => (
            <li key={item.id}>
                <p>Name : {item.name}</p>
                <p>Roll : {item.roll}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayObject