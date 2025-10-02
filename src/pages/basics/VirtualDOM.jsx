import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function VirtualDOM() {
  return (
    <div className="p-6 animate-fadeIn space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">⚡ Virtual DOM in React</h1>

      {/* Explanation */}
      <section className="p-4 bg-white rounded shadow">
        <p className="text-gray-700">
          The <b>Virtual DOM (VDOM)</b> is a lightweight copy of the real DOM
          kept in memory.  
          When your app’s state changes, React updates the virtual DOM first,
          compares it with the previous snapshot (using the <b>diffing
          algorithm</b>), and then applies the minimal number of updates to the
          real DOM.
        </p>
      </section>

      {/* Real DOM vs Virtual DOM */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">1️⃣ Real DOM vs Virtual DOM</h2>

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`// Real DOM
// Every update re-renders the entire UI tree
document.getElementById("count").innerHTML = count;

// Virtual DOM (React)
// Only the changed node is updated
setCount(count + 1); // React diffs and updates <p> only`}
        </SyntaxHighlighter>

        <p className="text-gray-700 mt-3">
          🛑 <b>Real DOM</b> → slow, entire tree updates.  
          ⚡ <b>Virtual DOM</b> → fast, updates only what changed.
        </p>
      </section>

      {/* Example 1 */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">2️⃣ Virtual DOM in Action</h2>
        <CounterExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        </SyntaxHighlighter>

        <p className="text-gray-700 mt-3">
          Only the <code>&lt;h3&gt;</code> node updates instead of the whole UI tree.  
          This is why React feels so fast ⚡.
        </p>
      </section>

      {/* Example 2 */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">3️⃣ Virtual DOM with Lists</h2>
        <ListExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`function ListExample() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const addItem = () => setItems([...items, "New"]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // React tracks via keys
        ))}
      </ul>
      <button onClick={addItem}>Add</button>
    </div>
  );
}`}
        </SyntaxHighlighter>

        <p className="text-gray-700 mt-3">
          React doesn’t re-render the whole list, only adds the new item.  
          The <b>Virtual DOM diffing</b> + <b>keys</b> make this efficient.
        </p>
      </section>

      {/* Key Points */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">✅ Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Virtual DOM is a lightweight copy of the real DOM.</li>
          <li>React updates the VDOM first, then syncs changes to the real DOM.</li>
          <li>Diffing Algorithm ensures minimal updates.</li>
          <li>Performance boost compared to direct real DOM manipulation.</li>
        </ul>
      </section>
    </div>
  );
}

// Example 1
function CounterExample() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-2">
      <h3 className="text-gray-700">Count: {count}</h3>
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
  const addItem = () => setItems([...items, "New"]);

  return (
    <div className="space-y-2">
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={addItem}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </div>
  );
}
