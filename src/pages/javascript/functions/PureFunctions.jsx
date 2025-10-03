// PureFunctions.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PureFunctions() {
  const jsExample = `// Pure Function Example

// Pure function: output depends only on input, no side effects
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same output for same input)

// Impure function: relies on external state or modifies outside variables
let counter = 0;
function increment() {
  counter += 1;
  return counter;
}
console.log(increment()); // 1
console.log(increment()); // 2 (output changes even with no arguments)`;


  const explanation = `// Explanation
// 1. Pure functions:
//    - Always return the same output for the same input
//    - Have no side effects (do not modify external variables, DOM, or state)
// 2. Impure functions can lead to bugs and unpredictable behavior
// 3. Pure functions are fundamental in functional programming, testing, and state management (like Redux)`;


  const reactExample = `// React Example: Pure Function Component
import React from 'react';

// Pure function to double a number
const double = (num) => num * 2;

export default function PureFunctionComponent() {
  const numbers = [1, 2, 3, 4];

  // Using pure function
  const doubledNumbers = numbers.map(double);

  return (
    <div className="p-4 border rounded-md">
      <h2>Original Numbers: {numbers.join(', ')}</h2>
      <h2>Doubled Numbers: {doubledNumbers.join(', ')}</h2>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Pure Functions in JavaScript</h1>

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
