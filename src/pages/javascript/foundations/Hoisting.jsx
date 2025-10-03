// Hoisting.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hoisting() {
  const jsExample = `// Hoisting in JavaScript

// 1. var Hoisting
console.log(a); // undefined (variable is hoisted)
var a = 10;

// 2. let & const Hoisting
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

// 3. Function Declaration Hoisting
console.log(foo()); // "Function hoisted!"
function foo() {
  return 'Function hoisted!';
}

// 4. Function Expression (var) Hoisting
console.log(bar()); // TypeError: bar is not a function
var bar = function() {
  return 'Function expression';
};

// 5. Function Expression (let/const)
console.log(baz()); // ReferenceError: Cannot access 'baz' before initialization
const baz = function() {
  return 'Function expression';
};`;

  const explanation = `// Explanation:
// 1. Variables declared with 'var' are hoisted and initialized as undefined.
// 2. Variables declared with 'let' or 'const' are hoisted but not initialized (Temporal Dead Zone).
// 3. Function declarations are hoisted completely — can call before definition.
// 4. Function expressions behave like variables:
//    - 'var' expressions are hoisted as undefined.
//    - 'let' and 'const' expressions are hoisted but in TDZ.`;

  const reactExample = `// React Example: Hoisting inside component
import React, { useEffect } from 'react';

export default function HoistingExample() {
  useEffect(() => {
    console.log(x); // undefined (var hoisted)
    var x = 5;

    try {
      console.log(y); // ReferenceError (let/const)
      let y = 10;
    } catch (err) {
      console.error(err.message);
    }

    console.log(foo()); // Works
    function foo() {
      return 'Hoisted function!';
    }
  }, []);

  return (
    <div className="p-4 border rounded space-y-2">
      <h2>Hoisting in React</h2>
      <p>Check console to see hoisting behavior in action.</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Hoisting in JavaScript</h1>

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
