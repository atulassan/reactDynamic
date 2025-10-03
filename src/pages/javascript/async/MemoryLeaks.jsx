// MemoryLeaks.jsx
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MemoryLeaks() {
  const example = `// Example: Memory Leak in React
import { useEffect, useState } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Problem: If we forget to clear the interval, it keeps running
    // return () => clearInterval(interval); // This fixes the memory leak
  }, []);

  return <div>Count: {count}</div>;
}`;

  const explanation = `// Explanation
// Memory leaks occur when resources (timers, subscriptions, DOM nodes) are not
// properly cleaned up, causing increased memory usage over time.
// Common causes in React:
// 1. setInterval / setTimeout not cleared
// 2. Event listeners not removed
// 3. Subscriptions (WebSocket, RxJS) not unsubscribed
// 4. Stale closures holding large objects in memory
// Proper cleanup in useEffect or componentWillUnmount is crucial.`;

  const bestPractices = `// Best Practices to Avoid Memory Leaks
// 1. Always return cleanup functions in useEffect
// 2. Remove event listeners when component unmounts
// 3. Cancel network requests if component unmounts
// 4. Avoid storing large data in closures
// 5. Use React DevTools Memory tab to monitor leaks`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">💾 Memory Leaks in React</h1>

      <p className="mb-4">
        Memory leaks happen when your React components or JavaScript code retain
        references to objects that are no longer needed, causing increased memory
        usage and potential performance issues.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {example}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Best Practices</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {bestPractices}
      </SyntaxHighlighter>
    </div>
  );
}
