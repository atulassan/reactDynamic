// RestSpread.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function RestSpread() {
  const jsExample = `// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest Operator
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }

// Function Parameters with Rest
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`;

  const explanation = `// Explanation
// 1. Spread (...) expands arrays or objects into individual elements/properties.
// 2. Rest (...) collects remaining elements/properties into an array or object.
// 3. Useful for cloning, merging, or destructuring data.
// 4. In functions, rest parameters allow variable number of arguments.`;

  const reactExample = `// React Example: Using Rest & Spread
import React, { useState } from 'react';

function SpreadRestComponent() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  // Add new number using spread
  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  // Destructuring with rest
  const [first, ...rest] = numbers;

  return (
    <div className="p-4 border rounded-md">
      <h2>Numbers: {numbers.join(', ')}</h2>
      <p>First: {first}</p>
      <p>Rest: {rest.join(', ')}</p>
      <button onClick={addNumber} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Add Number
      </button>
    </div>
  );
}

export default SpreadRestComponent;`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Rest & Spread Operators in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Examples</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
