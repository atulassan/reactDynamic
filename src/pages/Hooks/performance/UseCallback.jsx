import React, { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Child component
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <div>
      <p>Child Component</p>
      <button
        onClick={onClick}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Child Button
      </button>
    </div>
  );
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Memoized callback
  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount((prev) => prev + 1);
  }, []); // Dependencies array, empty means stable reference

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 useCallback Example</h1>

      {/* Parent Buttons */}
      <div className="space-x-2">
        <button
          onClick={() => setOther(other + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment Other ({other})
        </button>
        <p>Count (from Child callback): {count}</p>
      </div>

      {/* Child Component */}
      <Child onClick={handleClick} />

      {/* Explanation */}
      <div className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Without useCallback:</strong> The <code>handleClick</code> function is recreated on every render, causing <code>Child</code> to re-render even if props did not change.
          </li>
          <li>
            <strong>With useCallback:</strong> The function reference is stable between renders, so memoized child components (like <code>Child</code>) do not unnecessarily re-render.
          </li>
          <li>
            useCallback is useful when passing callbacks to <code>React.memo</code> children or to optimize heavy re-renders.
          </li>
        </ul>
      </div>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Memoized callback
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);

// Child receives the stable reference
<Child onClick={handleClick} />`}
      </SyntaxHighlighter>
    </div>
  );
}
