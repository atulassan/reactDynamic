// Currying.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Currying() {
  const jsExample = `// Currying Example

// Normal function
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6

// Curried function
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}
const multiplyBy2 = curriedMultiply(2);
console.log(multiplyBy2(5)); // 10
console.log(curriedMultiply(3)(4)); // 12

// Using arrow functions
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6`;

  const explanation = `// Explanation
// 1. Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.
// 2. Useful for creating reusable and partially applied functions.
// 3. Helps in functional programming patterns and code composability.`;

  const reactExample = `// React Example: Using Currying
import React from 'react';

function CurriedComponent() {
  // Curried function to handle button clicks
  const handleClick = (message) => (event) => {
    alert(message);
    console.log("Event Target:", event.target);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2>Currying Example in React</h2>
      <button onClick={handleClick('Hello from Button 1')} className="m-2 p-2 bg-blue-500 text-white rounded">
        Button 1
      </button>
      <button onClick={handleClick('Hello from Button 2')} className="m-2 p-2 bg-green-500 text-white rounded">
        Button 2
      </button>
    </div>
  );
}

export default CurriedComponent;`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Currying in JavaScript</h1>

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
