import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DiffingReconciliation() {
  return (
    <div className="p-6 animate-fadeIn space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">⚡ Diffing & Reconciliation in React</h1>

      {/* Explanation */}
      <section className="p-4 bg-white rounded shadow">
        <p className="text-gray-700">
          React uses a process called <b>reconciliation</b> to update the UI efficiently when state or props change.  
          Instead of re-rendering the entire DOM, React uses a <b>virtual DOM</b> and applies the{" "}
          <b>Diffing Algorithm</b> to figure out the minimum number of changes required.
        </p>
      </section>

      {/* Example 1 */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">1️⃣ Re-rendering with Virtual DOM</h2>
        <DiffingExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`function DiffingExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Only this part changes in the DOM, not the whole tree */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        </SyntaxHighlighter>
      </section>

      {/* Example 2 */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">2️⃣ Lists & Keys in Reconciliation</h2>
        <ListExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`function ListExample() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const shuffle = () => setItems([...items].reverse());

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>  {/* Keys help React track elements */}
        ))}
      </ul>
      <button onClick={shuffle}>Reverse</button>
    </div>
  );
}`}
        </SyntaxHighlighter>
      </section>

      {/* Key Points */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">⚡ Key Points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            React builds a <b>virtual DOM</b> tree and compares it with the previous one (diffing).
          </li>
          <li>
            If a node type changes (e.g., <code>&lt;div&gt;</code> → <code>&lt;span&gt;</code>), React destroys and recreates it.
          </li>
          <li>
            For <b>lists</b>, <code>key</code> props are crucial. They tell React which elements are the same across renders.
          </li>
          <li>
            Without keys, React may unnecessarily destroy and recreate DOM nodes → performance hit.
          </li>
          <li>
            With keys, React updates only what changed, keeping other nodes intact.
          </li>
        </ul>
      </section>
    </div>
  );
}

// Example 1
function DiffingExample() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-2">
      <p className="text-gray-700">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

// Example 2
function ListExample() {
  const [items, setItems] = useState(["A", "B", "C"]);
  const shuffle = () => setItems([...items].reverse());

  return (
    <div className="space-y-2">
      <ul className="list-disc pl-6">
        {items.map((item) => (
          <li key={item} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={shuffle}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Reverse
      </button>
    </div>
  );
}
