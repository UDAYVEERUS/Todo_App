import React, { useEffect, useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleSubject = (e) => {
    setSubject(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editMode) {
      const updateTodos = [...todo]
      updateTodos[editIndex] = { title, subject, description }
      setTodo(updateTodos)
      setEditMode(false)
      setEditIndex(null)

    } else {
      setTodo([...todo, { title, subject, description }])
    }
    setTitle("")
    setSubject("")
    setDescription("")
  }
  const handleDelete = (index) => {
    const updateTodo = [...todo]
    updateTodo.splice(index, 1)
    setTodo(updateTodo)
  }
  const handleEdit = (index) => {
    const todos = todo[index]
    setTitle(todos.title)
    setSubject(todos.subject)
    setDescription(todos.description)
    setEditMode(true)
    setEditIndex(index)
  }
  const handleReset = () => {
    setTitle("")
    setSubject("")
    setDescription("")
  }
  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Todo App</h1>
        <input type="text" value={title} onChange={handleTitle} placeholder='Enter title' /><br />
        <input type="text" value={subject} onChange={handleSubject} placeholder='Enter Subject' /><br />
        <textarea value={description} placeholder='Enter Description' onChange={handleDescription}></textarea><br />
        <button style={{ backgroundColor: "green", color: "white" }} type='submit' onClick={handleSubmit}>{editMode ? "Update" : "Add"}</button><br />
        <button onClick={handleReset}>{editMode ? "" : "reset"}</button>
      </div>
      <div style={{ display: "flex", gap: "4px", width: "full", margin: "10px" }}>
        {todo && todo.map((item, index) => {
          return (
            <div key={index} style={{ backgroundColor: "gray", width: "300px" }}>
              <h3>{item.title}</h3>
              <h2>{item.subject}</h2>
              <p>{item.description}</p>
              <button style={{ marginRight: "10px", background: "blue", color: "white" }} onClick={() => handleEdit(index)}>Edit</button>
              <button style={{ background: "red", color: "white" }} onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo