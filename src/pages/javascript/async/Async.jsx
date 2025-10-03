// ExecutionAsync.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ExecutionAsync() {
  const syncVsAsyncExample = `// Synchronous vs Asynchronous Execution

console.log("Start"); // synchronous

setTimeout(() => {
  console.log("Timeout callback"); // asynchronous (macrotask)
}, 0);

Promise.resolve()
  .then(() => console.log("Promise then")); // asynchronous (microtask)

console.log("End");

// Expected Output:
// Start
// End
// Promise then
// Timeout callback`;

  const asyncAwaitExample = `// Async/Await Example
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Async operation completed");
  }
};

fetchData();`;

  const explanation = `// Explanation
// 1. JavaScript executes synchronous code first.
// 2. Asynchronous tasks (Promises, setTimeout, fetch) are handled by the Event Loop.
// 3. Microtasks (Promise.then) run after the current stack but before macrotasks (setTimeout).
// 4. Async/Await is syntactic sugar over Promises to write asynchronous code like synchronous code.
// 5. Always handle errors in async code using try/catch/finally.`

  const reactExample = `// React Example using Async/Await & Promises
import React, { useEffect, useState } from 'react';

function AsyncExecutionComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Start");

    // setTimeout example
    setTimeout(() => console.log("Timeout callback"), 0);

    // Promise example
    Promise.resolve().then(() => console.log("Promise then"));

    // Async/Await fetch
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };

    fetchData();

    console.log("End");
  }, []);

  return (
    <div>
      <h2>Execution & Async in React</h2>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading data..."}</pre>
    </div>
  );
}

export default AsyncExecutionComponent;`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚡ Execution & Async in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 Synchronous vs Asynchronous</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {syncVsAsyncExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Async/Await Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {asyncAwaitExample}
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
