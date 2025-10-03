import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BasicHooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  // useEffect example
  useEffect(() => {
    console.log("useEffect triggered: count changed:", count);
    document.title = `Count: ${count}`;
  }, [count]); // runs only when count changes

  useEffect(() => {
    console.log("useEffect triggered: name changed:", name);
  }, [name]); // runs only when name changes

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Basic Hooks Demo</h1>

      {/* useState Example */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">1️⃣ useState</h2>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment Count
        </button>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment Count</button>`}
        </SyntaxHighlighter>
      </section>

      {/* useEffect Example */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">2️⃣ useEffect</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="border p-2 rounded"
        />
        <p>Current Name: {name}</p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`useEffect(() => {
  console.log("Name changed:", name);
}, [name]);`}
        </SyntaxHighlighter>
        <p className="text-gray-700">
          ✅ The effect runs whenever the <code>name</code> state changes.
        </p>
      </section>

      {/* Explanation */}
      <section className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>useState:</strong> Manages component state.</li>
          <li><strong>useEffect:</strong> Runs side-effects after render. Dependency array controls when it triggers.</li>
          <li>useEffect without dependencies runs every render; empty array runs only once after mount.</li>
        </ul>
      </section>
    </div>
  );
}
