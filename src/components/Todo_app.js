import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { title, description };
      setTodos(updatedTodos);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setTodos([...todos, { title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setEditMode(true);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <br />
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
