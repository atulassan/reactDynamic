// TemporalDeadZone.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TemporalDeadZone() {
  const jsExample = `// Temporal Dead Zone (TDZ) Example

// Using let or const
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;

// Function declarations are hoisted differently
console.log(foo()); // Works fine
function foo() {
  return 'Function hoisted!';
}

// TDZ occurs only for let and const, not for var
console.log(c); // undefined (var is hoisted)
var c = 30;`;

  const explanation = `// Explanation:
// 1. Variables declared with let and const are hoisted to the top of their block scope, 
//    but are not initialized until the actual declaration is evaluated.
// 2. Accessing them before initialization results in ReferenceError — this period is called Temporal Dead Zone (TDZ).
// 3. 'var' variables are hoisted and initialized with undefined, so no TDZ occurs.
// 4. Function declarations are fully hoisted and can be called before their declaration in the code.`;

  const reactExample = `// React Example showing TDZ
import React, { useState, useEffect } from 'react';

export default function TDZExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // TDZ demonstration
    try {
      console.log(temp); // ReferenceError: Cannot access 'temp' before initialization
      let temp = 5;
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Temporal Dead Zone in React</h2>
      <p>Check console for TDZ ReferenceError demonstration.</p>
      <button onClick={() => setCount(count + 1)} className="p-2 bg-blue-500 text-white rounded">
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Temporal Dead Zone (TDZ) in JavaScript</h1>

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
