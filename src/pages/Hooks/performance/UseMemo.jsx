import React, { useState, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// A heavy calculation function
function heavyCalculation(num) {
  console.log("Running heavy calculation...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num * 0.000000001;
  }
  return result;
}

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Using useMemo to memoize heavy calculation
  const memoizedValue = useMemo(() => heavyCalculation(number), [number]);

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 useMemo Example</h1>

      {/* Interactive Inputs */}
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increment Count ({count})
        </button>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 rounded"
          placeholder="Enter number"
        />
      </div>

      <p>Heavy Calculation Result: {memoizedValue}</p>

      {/* Explanation */}
      <div className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Without useMemo:</strong> The heavy calculation would run on every render, even if `count` changes.
          </li>
          <li>
            <strong>With useMemo:</strong> The calculation only runs when `number` changes.  
            This optimizes performance.
          </li>
          <li>
            useMemo returns the <code>memoizedValue</code> so React skips recalculation until dependencies change.
          </li>
        </ul>
      </div>

      {/* Syntax Highlighting */}
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Heavy calculation function
function heavyCalculation(num) {
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num * 0.000000001;
  }
  return result;
}

// Memoized calculation
const memoizedValue = useMemo(() => heavyCalculation(number), [number]);`}
      </SyntaxHighlighter>
    </div>
  );
}
