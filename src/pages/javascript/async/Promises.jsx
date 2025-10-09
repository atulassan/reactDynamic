// Promises.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import PromisesFull from "./PromisesFull";

export default function Promises() {
  const jsExample = `// JavaScript Promise Example
const fetchData = new Promise((resolve, reject) => {
  const success = true; // simulate success/failure
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise completed"));`;

  const reactExample = `// React Example using Promises
import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
          success ? resolve("React data loaded!") : reject("Failed to load data");
        }, 1000);
      });
    };

    fetchData()
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchDataComponent;`;

  const explanation = `// Explanation
// 1. Promises are used to handle asynchronous operations in JavaScript.
// 2. A Promise can be in one of three states: pending, fulfilled, or rejected.
// 3. Use .then() to handle success, .catch() for errors, and .finally() for cleanup.
// 4. In React, Promises are commonly used with useEffect to fetch data from APIs.
// 5. Always handle both success and failure to avoid unhandled promise rejections.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">💡 Promises in JavaScript & React</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter
        language='Javascript'
        style={solarizedlight} // or use `vs` for a clean VS Code look
        showLineNumbers
        customStyle={{
          fontSize: "20px",
          lineHeight: "1.6",
          backgroundColor: "#fdfdfd",
          padding: "16px",
          borderRadius: "0 0 8px 8px",
          color: "#333",
        }}
        codeTagProps={{
          style: {
            fontFamily: "JetBrains Mono, Fira Code, monospace",
          },
        }}
      >
        {explanation}
      </SyntaxHighlighter>
      <PromisesFull />

      <p className="mb-4">
        Promises are a modern way to handle asynchronous operations like API calls
        and timeouts. They improve code readability and error handling.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
      
    </div>
    
  );
}
