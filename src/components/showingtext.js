import React, { useState } from 'react';

function ShowingText() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Type Something:</h1>
      <input type="text" value={text} onChange={handleChange} />
      <h2>Typed Text: {text}</h2>
    </div>
  );
}

export default ShowingText;
