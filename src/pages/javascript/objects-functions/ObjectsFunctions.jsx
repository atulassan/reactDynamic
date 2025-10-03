// ObjectsFunctions.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ObjectsFunctions() {
  const jsExample = `// Objects & Functions Examples

// Object creation
const person = { name: 'Alice', age: 25 };

// Adding methods
person.greet = function() { return \`Hello, \${this.name}!\`; };
console.log(person.greet());

// Function declarations
function sum(a, b) { return a + b; }

// Function expressions
const multiply = function(a, b) { return a * b; };

// Arrow functions
const square = n => n ** 2;
const double = n => n * 2;

// Default parameters
function greet(name='Guest') { return \`Hello, \${name}\`; }

// Rest & Spread
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
const arr = [1,2,3];
console.log(sumAll(...arr));

// IIFE (Immediately Invoked Function Expression)
(function(msg) {
  console.log('IIFE says:', msg);
})('Hello World');

// Higher Order Functions
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2); // map is HOF
const filtered = numbers.filter(n => n % 2 === 0); // filter is HOF

// Returning functions from functions
function multiplier(factor) {
  return function(n) {
    return n * factor;
  };
}
const triple = multiplier(3);
console.log(triple(5)); // 15`;

  const explanation = `// Explanation
// 1. Object methods: adding functions to objects
// 2. Function types: declaration, expression, arrow
// 3. Default parameters
// 4. Rest & Spread for arrays and arguments
// 5. IIFE: execute immediately
// 6. Higher Order Functions: map, filter, reduce
// 7. Functions returning functions (closures)`;

  const reactExample = `// React Example: Functions in React
import React, { useState } from 'react';

export default function ObjectsFunctionsReact() {
  const [numbers, setNumbers] = useState([1,2,3]);

  const addNumber = n => setNumbers([...numbers, n]);
  const doubleNumbers = () => setNumbers(numbers.map(num => num * 2));
  const resetNumbers = () => setNumbers([1,2,3]);

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Objects & Functions in React</h2>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={() => addNumber(numbers.length + 1)} className="p-2 bg-blue-500 text-white rounded">Add Number</button>
      <button onClick={doubleNumbers} className="p-2 bg-green-500 text-white rounded ml-2">Double Numbers</button>
      <button onClick={resetNumbers} className="p-2 bg-gray-500 text-white rounded ml-2">Reset</button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 JavaScript Objects & Functions</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
