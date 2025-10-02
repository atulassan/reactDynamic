import React, { useState, useCallback, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Child Component (memoized) ---
const ExpensiveChild = React.memo(({ onClick, value }) => {
  console.log("Child re-rendered 🚀");
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded mt-2"
    >
      Increment Child Count ({value})
    </button>
  );
});

export default function PerformanceOptimization() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // ✅ useCallback prevents re-creating function on every render
  const incrementChild = useCallback(() => {
    setChildCount((c) => c + 1);
  }, []);

  // ✅ useMemo caches expensive calculation
  const expensiveCalc = useMemo(() => {
    console.log("Expensive calculation running ⚡");
    return count * 1000;
  }, [count]);

  const codeReactMemo = `const ExpensiveChild = React.memo(({ onClick, value }) => {
  console.log("Child re-rendered 🚀");
  return <button onClick={onClick}>Increment Child Count ({value})</button>;
});`;

  const codeUseCallback = `const incrementChild = useCallback(() => {
  setChildCount((c) => c + 1);
}, []);`;

  const codeUseMemo = `const expensiveCalc = useMemo(() => {
  console.log("Expensive calculation running ⚡");
  return count * 1000;
}, [count]);`;

  const codeLazyLoad = `// Lazy load a component
const LazyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </React.Suspense>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">
        🚀 Performance Optimization in React
      </h1>

      <p className="mb-4">
        React provides tools like <strong>React.memo</strong>,{" "}
        <strong>useMemo</strong>, <strong>useCallback</strong>, and{" "}
        <strong>lazy loading</strong> to optimize rendering performance.
      </p>

      {/* Live Demo */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Live Example</h2>
      <p>Click buttons and check console logs to observe optimizations:</p>
      <div className="space-y-2 mt-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Increment Parent Count ({count})
        </button>
        <ExpensiveChild onClick={incrementChild} value={childCount} />
      </div>
      <p className="mt-2">
        Expensive Calculation: <strong>{expensiveCalc}</strong>
      </p>

      {/* React.memo */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 React.memo</h2>
      <p>
        Prevents unnecessary re-renders of child components if props don’t
        change.
      </p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeReactMemo}
      </SyntaxHighlighter>

      {/* useCallback */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 useCallback</h2>
      <p>
        Returns a memoized function, preventing function re-creation on every
        render.
      </p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeUseCallback}
      </SyntaxHighlighter>

      {/* useMemo */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 useMemo</h2>
      <p>
        Caches expensive calculations and only recomputes when dependencies
        change.
      </p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeUseMemo}
      </SyntaxHighlighter>

      {/* Lazy Loading */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Code Splitting & Lazy Loading</h2>
      <p>
        Use <code>React.lazy</code> + <code>Suspense</code> to load components
        only when needed.
      </p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeLazyLoad}
      </SyntaxHighlighter>

      {/* Key Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Key Notes</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>React.memo</code> works best for pure functional components.
        </li>
        <li>
          <code>useCallback</code> and <code>useMemo</code> should be used
          carefully—overuse may add complexity.
        </li>
        <li>
          Always measure performance with <code>React DevTools Profiler</code>{" "}
          before optimizing.
        </li>
      </ul>
    </div>
  );
}
