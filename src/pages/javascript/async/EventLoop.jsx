// EventLoop.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventLoop() {
  const jsExample = `// JavaScript Event Loop Example
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve()
  .then(() => console.log("Promise then"));

console.log("End");

// Expected Output:
// Start
// End
// Promise then
// Timeout callback`;

  const explanation = `// Explanation
// 1. JavaScript has a single-threaded runtime but can handle async tasks using the Event Loop.
// 2. Synchronous code executes first.
// 3. Microtasks (Promises, process.nextTick) run after the current stack clears, before macrotasks.
// 4. Macrotasks (setTimeout, setInterval) run after microtasks.
// 5. This is why 'Promise then' executes before 'Timeout callback' even if timeout is 0ms.`

  const reactExample = `// React Example using Event Loop concept
import React, { useEffect, useState } from 'react';

function EventLoopComponent() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    console.log("Start");

    setTimeout(() => {
      setMessage(prev => [...prev, "Timeout callback"]);
    }, 0);

    Promise.resolve()
      .then(() => setMessage(prev => [...prev, "Promise then"]));

    setMessage(prev => [...prev, "End"]);
  }, []);

  return (
    <div>
      <h2>Event Loop in Action:</h2>
      {message.map((msg, idx) => <p key={idx}>{msg}</p>)}
    </div>
  );
}

export default EventLoopComponent;`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🌀 JavaScript Event Loop</h1>

      <p className="mb-4">
        Understanding the event loop is crucial for handling asynchronous code in JavaScript.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
