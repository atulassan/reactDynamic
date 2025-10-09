// WeakSetExample.jsx
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WeakSetExample() {
    
  const [output, setOutput] = useState([]);

  const runExamples = () => {
    const logs = [];

    // Create objects
    const user1 = { name: "Atha" };
    const user2 = { name: "Rahman" };
    const user3 = { name: "Sara" };

    logs.push("Created objects: user1, user2, user3");

    // Initialize WeakSet
    const ws = new WeakSet([user1]);
    logs.push("Initialized WeakSet with user1");

    // Add method
    ws.add(user2);
    logs.push("Added user2 via ws.add(user2)");

    // Has method
    logs.push(`ws.has(user1): ${ws.has(user1)}`); // true
    logs.push(`ws.has(user3): ${ws.has(user3)}`); // false

    // Delete method
    ws.delete(user2);
    logs.push("Deleted user2 via ws.delete(user2)");
    logs.push(`ws.has(user2): ${ws.has(user2)}`); // false

    // Attempting to add primitive (should be ignored in demo)
    try {
      // @ts-ignore
      ws.add("string"); // Will throw in strict JS
    } catch (err) {
      logs.push("Cannot add primitive to WeakSet: Error thrown");
    }

    setOutput(logs);
  };

  const exampleCode = `
// WeakSet Methods Examples
const user1 = { name: "Atha" };
const user2 = { name: "Rahman" };
const user3 = { name: "Sara" };

const ws = new WeakSet([user1]); // Initialize
ws.add(user2); // Add
ws.has(user1); // true
ws.has(user3); // false
ws.delete(user2); // true
`;

  return (
    <div className="p-6 space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold">WeakSet Examples in React</h2>
      <p>
        <strong>WeakSet:</strong> Stores objects only. Weak references allow
        garbage collection.
      </p>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={runExamples}
      >
        Run Examples
      </button>

      <div className="bg-gray-900 rounded p-4 overflow-auto">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {exampleCode}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-100 rounded p-4 space-y-1">
        <h3 className="font-semibold">Output:</h3>
        {output.map((line, idx) => (
          <div key={idx} className="font-mono text-gray-800">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
