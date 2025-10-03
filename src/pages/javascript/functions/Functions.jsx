// AdvancedFunctionalPatterns.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AdvancedFunctionalPatterns() {
  const curryingExample = `// Currying Example
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10`;

  const hofExample = `// Higher-Order Function Example
const greet = (fn) => (name) => fn(name);
const sayHello = (name) => 'Hello, ' + name;
const greetUser = greet(sayHello);
console.log(greetUser('Alice')); // Hello, Alice`;

  const closuresExample = `// Closure Example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`;

  const pureFunctionsExample = `// Pure Function Example
function add(a, b) {
  return a + b;
}
console.log(add(2,3)); // 5`;

  const functionalTypesExample = `// Functional Types Example
// Regular Function
function greet(name) { return 'Hello ' + name; }
// Function Expression
const sum = function(a, b) { return a + b; };
// Arrow Function
const multiply = (a, b) => a * b;`;

  const reactExample = `// React Example: Using HOF, Currying, Closures
import React from 'react';

function withBorder(WrappedComponent) {
  return function(props) {
    return (
      <div style={{border:'2px solid blue', padding:'10px', margin:'5px'}}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

const Message = ({ text }) => <p>{text}</p>;
const MessageWithBorder = withBorder(Message);

export default function AdvancedExample() {
  const double = (x) => x * 2;
  const curriedAdd = (a) => (b) => a + b;
  const addFive = curriedAdd(5);

  const counter = (() => {
    let count = 0;
    return () => { count++; return count; };
  })();

  return (
    <div className="p-4">
      <MessageWithBorder text={"Hello HOF!"} />
      <p>Doubled 5: {double(5)}</p>
      <p>Add 5 + 3: {addFive(3)}</p>
      <p>Counter: {counter()}, {counter()}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Advanced Functional JS Patterns</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 Currying</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {curryingExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Higher-Order Functions (HOF)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {hofExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Closures</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {closuresExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Pure Functions</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {pureFunctionsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Functional Types</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {functionalTypesExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example (HOF + Currying + Closures)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
