// AsyncAwait.jsx
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AsyncAwait() {
  const jsExample = `// JavaScript Async/Await Example
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      success ? resolve("Data loaded successfully!") : reject("Failed to load data");
    }, 1000);
  });
}

async function loadData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Async operation completed");
  }
}

loadData();`;

  const reactExample = `// React Example using Async/Await
function AsyncDataComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
          success ? resolve("React async data loaded!") : reject("Failed to load");
        }, 1000);
      });
    };

    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default AsyncDataComponent;`;

  const explanation = `// Explanation
// 1. Async/Await is syntactic sugar over Promises, making asynchronous code easier to read.
// 2. Use 'await' inside an 'async' function to pause execution until the Promise resolves.
// 3. Wrap 'await' calls in try/catch for error handling.
// 4. In React, use async functions inside useEffect for API calls or asynchronous operations.
// 5. Always handle both success and failure to avoid unhandled errors.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚡ Async/Await in JavaScript & React</h1>

      <p className="mb-4">
        Async/Await simplifies asynchronous code and makes it look synchronous, improving readability.
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
