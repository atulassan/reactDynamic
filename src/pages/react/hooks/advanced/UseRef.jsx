import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseRef() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const codeDomRef = `// Access DOM element
const inputRef = useRef(null);

<input ref={inputRef} placeholder="Type here..." />;
<button onClick={() => inputRef.current.focus()}>Focus Input</button>;`;

  const codeMutableRef = `// Store mutable values without re-render
const countRef = useRef(0);

<button onClick={() => { countRef.current += 1; console.log(countRef.current); }}>
  Increment Count
</button>;`;

  const codePersistValue = `// Persist value across renders
const renderCountRef = useRef(0);
renderCountRef.current += 1;
console.log("Rendered", renderCountRef.current, "times");`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">🖇️ useRef Hook</h1>
      <p>
        The <code>useRef</code> hook lets you persist values between renders
        without triggering re-renders, and also gives access to DOM elements.
      </p>

      {/* Example 1: Access DOM */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Access DOM Element</h2>
        <p>Focus the input programmatically using <code>ref</code>:</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here..."
          className="px-3 py-2 rounded border border-gray-400"
        />
        <button
          onClick={() => inputRef.current.focus()}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Focus Input
        </button>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeDomRef}
        </SyntaxHighlighter>
      </section>

      {/* Example 2: Mutable value without re-render */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Mutable Value Without Re-render</h2>
        <p>
          Increment a value without causing the component to re-render:
        </p>
        <button
          onClick={() => {
            countRef.current += 1;
            console.log("Current count:", countRef.current);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Increment Count
        </button>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeMutableRef}
        </SyntaxHighlighter>
      </section>

      {/* Example 3: Persist value across renders */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Persist Value Across Renders</h2>
        <p>
          Track how many times the component has rendered without causing extra renders:
        </p>
        <button
          onClick={() => setRenderCount((prev) => prev + 1)}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Re-render Component
        </button>
        <p className="mt-2">Render Count: {renderCount}</p>
        <p>Check console for persisted render count using <code>useRef</code>:</p>
        {(() => {
          countRef.current += 1;
          console.log("Rendered", countRef.current, "times (persisted with useRef)");
        })()}
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codePersistValue}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
