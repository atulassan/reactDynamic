// Foundations.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Foundations() {
  const jsExample = `// 1. Variables
var a = 10; // function scoped
let b = 20; // block scoped
const c = 30; // block scoped, cannot reassign

// 2. Data Types
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let obj = { name: "John", age: 25 }; // object
let arr = [1, 2, 3]; // array
let n = null; // null
let u; // undefined
let sym = Symbol("id"); // symbol

// 3. Operators
let sum = a + b; // arithmetic
let isEqual = a === b; // comparison
let logical = (a > 5) && (b < 30); // logical

// 4. Control Flow
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater or equal");
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

while (a > 0) {
  a--;
}

// 5. Functions
function add(x, y) {
  return x + y;
}

const multiply = (x, y) => x * y;

console.log(add(2, 3));
console.log(multiply(4, 5));`;

  const explanation = `// Explanation:
// 1. Variables: var (function scope), let & const (block scope)
// 2. Data Types: Primitive (string, number, boolean, null, undefined, symbol) and Objects (array, object)
// 3. Operators: Arithmetic, comparison, logical, assignment
// 4. Control Flow: if/else, for, while loops
// 5. Functions: Declaration, Expression, Arrow Functions`;

  const reactExample = `// React Example: Using Foundations concepts
import React, { useState } from 'react';

export default function FoundationsExample() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="p-4 border rounded space-y-2">
      <h2>Foundations in React</h2>
      <p>Count: {count}</p>
      <button onClick={increment} className="p-2 bg-green-500 text-white rounded mr-2">
        Increment
      </button>
      <button onClick={decrement} className="p-2 bg-red-500 text-white rounded">
        Decrement
      </button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Foundations in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript Examples</h2>
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
