// FunctionalTypes.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function FunctionalTypes() {
  const jsExample = `// Functional Types in JavaScript

// 1. Regular Function
function greet(name) {
  return 'Hello, ' + name;
}
console.log(greet('Alice')); // Hello, Alice

// 2. Function Expression
const sum = function(a, b) {
  return a + b;
};
console.log(sum(2, 3)); // 5

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 4)); // 8

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('IIFE executed');
})();

// 5. Higher-Order Function (HOF)
const hof = (fn) => (x) => fn(x) * 2;
const double = hof((num) => num + 3);
console.log(double(2)); // 10`;


  const explanation = `// Explanation
// 1. JavaScript supports multiple function types.
// 2. Regular functions, function expressions, and arrow functions differ in syntax and 'this' behavior.
// 3. IIFE executes immediately and is used to avoid global namespace pollution.
// 4. HOFs accept or return functions, enabling functional programming patterns.`;


  const reactExample = `// React Example: Functional Types
import React from 'react';

export default function FunctionalTypesComponent() {
  const numbers = [1, 2, 3];

  // Regular function
  function doubleNum(num) {
    return num * 2;
  }

  // Arrow function
  const tripleNum = (num) => num * 3;

  return (
    <div className="p-4 border rounded-md">
      <h2>Original Numbers: {numbers.join(', ')}</h2>
      <h2>Doubled Numbers: {numbers.map(doubleNum).join(', ')}</h2>
      <h2>Tripled Numbers: {numbers.map(tripleNum).join(', ')}</h2>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Functional Types in JavaScript</h1>

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
