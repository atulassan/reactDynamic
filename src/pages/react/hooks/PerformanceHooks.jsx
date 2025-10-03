import React, { useState, useCallback, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// React.memo Child for useCallback demo
const CallbackChild = React.memo(({ onClick }) => {
  console.log("CallbackChild rendered");
  return (
    <div className="p-2 border rounded">
      <p>CallbackChild Component</p>
      <button
        onClick={onClick}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Increment Count (useCallback)
      </button>
    </div>
  );
});

// Heavy calculation for useMemo demo
function heavyCalculation(num) {
  console.log("Running heavy calculation...");
  let result = 0;
  for (let i = 0; i < 100_000_000; i++) {
    result += num * 0.00000001;
  }
  return result;
}

// React.memo Child for useMemo demo
const MemoChild = React.memo(({ value }) => {
  console.log("MemoChild rendered");
  return <p>Heavy Calculation Result: {value}</p>;
});

export default function PerformanceHooks() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  const [number, setNumber] = useState(5);

  // useCallback: memoized function for child
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // useMemo: memoize heavy calculation
  const memoizedValue = useMemo(() => heavyCalculation(number), [number]);

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Performance Hooks Demo</h1>

      {/* Section 1: useCallback + React.memo */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">1️⃣ useCallback + React.memo</h2>
        <div className="space-x-2">
          <button
            onClick={() => setOther(other + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Increment Other ({other})
          </button>
          <p>Count (from Child): {count}</p>
        </div>
        <CallbackChild onClick={handleIncrement} />
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Memoized child with useCallback
const CallbackChild = React.memo(({ onClick }) => ...);
const handleIncrement = useCallback(() => setCount(prev => prev + 1), []);
<CallbackChild onClick={handleIncrement} />`}
        </SyntaxHighlighter>
        <p className="text-gray-700">
          ✅ Child only re-renders when its props (callback reference) changes. Incrementing <code>other</code> does not re-render child.
        </p>
      </section>

      {/* Section 2: useMemo */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">2️⃣ useMemo</h2>
        <div className="space-x-2">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="border p-2 rounded"
            placeholder="Enter number"
          />
        </div>
        <MemoChild value={memoizedValue} />
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Heavy calculation memoized
const memoizedValue = useMemo(() => heavyCalculation(number), [number]);
<MemoChild value={memoizedValue} />`}
        </SyntaxHighlighter>
        <p className="text-gray-700">
          ✅ Heavy calculation only runs when <code>number</code> changes. Updating other state does not trigger recalculation.
        </p>
      </section>

      {/* Section 3: Explanation */}
      <section className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>React.memo:</strong> Prevents unnecessary re-renders of functional components.</li>
          <li><strong>useCallback:</strong> Returns a memoized callback to avoid changing function references on each render.</li>
          <li><strong>useMemo:</strong> Returns a memoized value to avoid expensive recalculations.</li>
          <li>Combining them improves performance in components with heavy calculations or memoized children.</li>
        </ul>
      </section>
    </div>
  );
}
