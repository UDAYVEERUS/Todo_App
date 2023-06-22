import React from 'react'
import FormParent from './FormParent'

const Child = () => {
    const getData = (data) => {
        console.log("comming from child component", data)
    }
  return (
    <div>
        <FormParent onSubmit={getData} />
    </div>
  )
}

export default Child