import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseState() {
  // Example 1: Simple counter
  const [count, setCount] = useState(0);

  // Example 2: Object state
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  // Example 3: Array state
  const [items, setItems] = useState(["Apple", "Banana"]);

  // Example 4: Lazy initialization
  const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));

  const codeExample = `// Simple counter
const [count, setCount] = useState(0);

// Object state
const [user, setUser] = useState({ name: "Alice", age: 25 });

// Array state
const [items, setItems] = useState(["Apple", "Banana"]);

// Lazy initialization
const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">⚡ useState Hook</h1>
      <p>
        The <code>useState</code> hook allows you to add state to functional components.
      </p>

      {/* Example 1: Counter */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">🔹 Simple Counter</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Count: {count}
        </button>
      </section>

      {/* Example 2: Object state */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">🔹 Object State</h2>
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
        <button
          onClick={() => setUser({ ...user, age: user.age + 1 })}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Increase Age
        </button>
      </section>

      {/* Example 3: Array state */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">🔹 Array State</h2>
        <ul className="list-disc ml-6">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button
          onClick={() => setItems([...items, `Item ${items.length + 1}`])}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Add Item
        </button>
      </section>

      {/* Example 4: Lazy initialization */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">🔹 Lazy Initialization</h2>
        <p>Random Number: {random}</p>
        <button
          onClick={() => setRandom(Math.floor(Math.random() * 100))}
          className="px-4 py-2 bg-yellow-600 text-black rounded"
        >
          Generate Random
        </button>
      </section>

      {/* Syntax Highlighting */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Code Example</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeExample}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
