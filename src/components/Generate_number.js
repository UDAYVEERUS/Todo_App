import React, { useState } from "react";

const NumberGenerator = () => {
  const [numbers, setNumbers] = useState([]);

  const handleGenerateNumbers = () => {
    const generatedNumbers = Array.from({ length: 5 }, (_, index) => index + 5);
    setNumbers(generatedNumbers);
  };

  return (
    <div>
      <h2>Number Generator</h2>
      <button onClick={handleGenerateNumbers}>Generate Numbers</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberGenerator;
