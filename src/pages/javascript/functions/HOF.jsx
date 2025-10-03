// HOF.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HOF() {
  const jsExample = `// Higher-Order Function Example

// Function that takes another function as argument
function greetUser(fn) {
  return function(name) {
    return fn(name);
  };
}

const sayHello = (name) => 'Hello, ' + name;
const greet = greetUser(sayHello);

console.log(greet('Alice')); // Hello, Alice

// Array HOFs: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15`;

  const explanation = `// Explanation
// 1. HOF is a function that either accepts another function as argument or returns a function.
// 2. Common HOF examples in JS: map, filter, reduce, forEach.
// 3. Useful for code reuse, abstraction, and functional programming patterns.`;

  const reactExample = `// React Example: HOF Component
import React from 'react';

// HOF to wrap a component with extra props
function withBorder(WrappedComponent) {
  return function(props) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px', margin: '5px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function Message({ text }) {
  return <p>{text}</p>;
}

const MessageWithBorder = withBorder(Message);

export default function HOFComponent() {
  return (
    <div className="p-4">
      <MessageWithBorder text="Hello World!" />
      <MessageWithBorder text="Higher-Order Functions in React" />
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Higher-Order Functions (HOF) in JavaScript</h1>

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
