import React from "react";

const Arrayofobject = () => {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Alice", age: 35 },
  ];

  return (
    <div>
      <h2>My Component</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arrayofobject;
