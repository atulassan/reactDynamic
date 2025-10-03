// Scopes.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Scopes() {
  const jsExample = `// JavaScript Scopes Examples

// 1. Global Scope
var globalVar = "I'm global!";
console.log(globalVar); // Accessible anywhere

function checkGlobal() {
  console.log(globalVar); // Accessible here
}
checkGlobal();

// 2. Function Scope
function functionScopeExample() {
  var functionVar = "I'm local to function";
  console.log(functionVar); // Accessible inside function
}
functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined

// 3. Block Scope (let & const)
if (true) {
  let blockVar = "I'm block scoped";
  const blockConst = "Me too!";
  var functionScoped = "I'm function scoped, not block";
  console.log(blockVar, blockConst); // Works
}
console.log(functionScoped); // Works (var)
// console.log(blockVar, blockConst); // Error

// 4. Lexical Scope
function outer() {
  let outerVar = 'I am outside!';
  function inner() {
    console.log(outerVar); // Inner function can access outer variable
  }
  inner();
}
outer();

// 5. Closures
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`;

  const explanation = `// Explanation:
// 1. Global Scope: Variables declared outside any function or block are accessible globally.
// 2. Function Scope: Variables declared with 'var' inside a function are accessible only within that function.
// 3. Block Scope: 'let' and 'const' variables are block-scoped, accessible only inside the block.
// 4. Lexical Scope: Inner functions have access to outer function variables.
// 5. Closures: A function remembers the variables from the scope in which it was created, even if executed outside that scope.`;

  const reactExample = `// React Example: Demonstrating Scopes
import React, { useState, useEffect } from 'react';

export default function ScopesExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let message = "Inside useEffect (block scope)";
    console.log(message);

    function localFunction() {
      let innerMessage = "Inside local function";
      console.log(innerMessage);
    }
    localFunction();

    const closureExample = (() => {
      let local = 0;
      return () => ++local;
    })();
    console.log("Closure call 1:", closureExample());
    console.log("Closure call 2:", closureExample());
  }, []);

  return (
    <div className="p-4 border rounded space-y-2">
      <h2>Scopes in React</h2>
      <p>Check console to see global, function, block scope, and closures in action.</p>
      <button onClick={() => setCount(count + 1)} className="p-2 bg-blue-500 text-white rounded">
        Increment Count
      </button>
      <p>Count: {count}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Scopes in JavaScript</h1>

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
