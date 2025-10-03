import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Child component
function Child({ name }) {
  console.log("Child rendered");
  return <p>Child Name: {name}</p>;
}

// Memoized Child
const MemoizedChild = React.memo(Child);

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 React.memo Example</h1>

      <ul data-start="213" data-end="538">
        <li data-start="213" data-end="346">
          <p data-start="215" data-end="346"><code data-start="215" data-end="227">React.memo</code> is a <strong data-start="233" data-end="265">higher-order component (HOC)</strong> that <strong data-start="271" data-end="306">optimizes functional components</strong> by preventing unnecessary re-renders.</p>
        </li>
        <li data-start="347" data-end="452">
          <p data-start="349" data-end="452">It <strong data-start="352" data-end="385">memorizes the rendered output</strong> of a component and <strong data-start="405" data-end="449">re-renders it only when its props change</strong>.</p>
        </li>
        <li data-start="453" data-end="538">
          <p data-start="455" data-end="538">It’s similar to <code data-start="471" data-end="486">PureComponent</code> for class components but for functional components.</p>
        </li>
      </ul>

      {/* Buttons */}
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment Count ({count})
        </button>
        <button
          onClick={() => setName(name === "Alice" ? "Bob" : "Alice")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Change Name
        </button>
      </div>

      {/* Memoized Child */}
      <MemoizedChild name={name} />

      {/* Syntax Highlighter */}
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="mt-4 rounded">
        {`// Child component
function Child({ name }) {
  return <p>Child Name: {name}</p>;
}

// Memoize Child to prevent unnecessary re-renders
const MemoizedChild = React.memo(Child);

// Usage in parent
<MemoizedChild name={name} />`}
      </SyntaxHighlighter>

      {/* Advanced Example */}
      <section className="mt-6 p-4 border rounded space-y-2">
        <h2 className="text-xl font-semibold">Advanced React.memo with Objects</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`const Child = ({ user }) => <p>User: {user.name}</p>;
const MemoChild = React.memo(Child, (prev, next) => prev.user.name === next.user.name);`}
        </SyntaxHighlighter>
        <p className="text-gray-700">
          ✅ Only re-renders if the <code>user.name</code> changes, even if a new object is passed.
        </p>
      </section>
    </div>
  );
}
