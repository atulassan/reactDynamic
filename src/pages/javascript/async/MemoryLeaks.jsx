// MemoryLeaks.jsx
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

     <p className="text-gray-700">
        A <span className="font-semibold text-blue-600">memory leak</span> occurs when
        allocated memory is not released after it's no longer needed, leading to
        increased memory usage and potential crashes over time.
      </p>
      
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`function startLeak() {
  let arr = [];
  setInterval(() => {
    // ❌ Keeps pushing data without clearing
    arr.push(new Array(1000000).fill("*"));
  }, 1000);
}

// ✅ Fix: clear interval or reuse array
function startSafe() {
  let arr = [];
  const id = setInterval(() => {
    arr.length = 0; // clear array each time
  }, 1000);
  return () => clearInterval(id);
}`}
        </SyntaxHighlighter>

      <h3 className="text-lg font-semibold text-gray-800">🧪 Example:</h3>

    {/* Common Causes */}
      <div className="bg-white p-5 rounded-xl shadow space-y-6">
        <h3 className="text-lg font-bold text-gray-800">🚨 Common Causes & Fixes</h3>

        {/* 1️⃣ setInterval / setTimeout */}
        <div>
          <h4 className="font-semibold text-gray-800">
            1️⃣ Uncleared <code>setInterval</code> / <code>setTimeout</code>
          </h4>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Leak: Timer keeps running even after component unmount
useEffect(() => {
  const id = setInterval(() => console.log("running..."), 1000);
}, []);

// ✅ Fix: Add cleanup
useEffect(() => {
  const id = setInterval(() => console.log("running..."), 1000);
  return () => clearInterval(id);
}, []);`}
          </SyntaxHighlighter>
        </div>

        {/* 2️⃣ Event Listeners */}
        <div>
          <h4 className="font-semibold text-gray-800">
            2️⃣ Not removing event listeners (<code>window.addEventListener</code>)
          </h4>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Leak: Event listener never removed
useEffect(() => {
  window.addEventListener("resize", () => console.log("resized"));
}, []);

// ✅ Fix: Clean up listener on unmount
useEffect(() => {
  const handleResize = () => console.log("resized");
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);`}
          </SyntaxHighlighter>
        </div>

        {/* 3️⃣ Detached DOM nodes */}
        <div>
          <h4 className="font-semibold text-gray-800">
            3️⃣ Detached DOM nodes (removed visually but still referenced)
          </h4>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Leak: DOM node removed but reference kept
let button = document.createElement("button");
button.textContent = "Click";
document.body.appendChild(button);
document.body.removeChild(button); // removed visually
// button reference still in memory

// ✅ Fix:
button = null; // release reference so GC can clean up`}
          </SyntaxHighlighter>
        </div>

        {/* 4️⃣ Global variables */}
        <div>
          <h4 className="font-semibold text-gray-800">
            4️⃣ Global variables holding large data
          </h4>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Leak: Global variable retains memory
window.bigData = new Array(1000000).fill("⚠️");

// ✅ Fix:
delete window.bigData; // or use local scope only`}
          </SyntaxHighlighter>
        </div>

        {/* 5️⃣ Closures */}
        <div>
          <h4 className="font-semibold text-gray-800">
            5️⃣ Closures retaining references to unused objects
          </h4>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Leak: Closure holds onto large object
function leakyFunction() {
  const hugeData = new Array(1000000).fill("data");
  return function inner() {
    console.log(hugeData.length); // keeps reference alive
  };
}

// ✅ Fix: isolate or nullify data
function safeFunction() {
  let hugeData = new Array(1000000).fill("data");
  const inner = () => console.log(hugeData.length);
  hugeData = null; // release memory
  return inner;
}`}
          </SyntaxHighlighter>
        </div>
      </div>

      <p className="mb-4">
        Memory leaks happen when your React components or JavaScript code retain
        references to objects that are no longer needed, causing increased memory
        usage and potential performance issues.
      </p>
       <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">🚨 Common Causes:</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Uncleared <code>setInterval</code> / <code>setTimeout</code></li>
          <li>Not removing event listeners (<code>window.addEventListener</code>)</li>
          <li>Detached DOM nodes (removed visually but still referenced in JS)</li>
          <li>Global variables holding large data</li>
          <li>Closures that retain references to unused objects</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">✅ Prevention Tips:</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Use <code>useEffect</code> cleanup in React</li>
          <li>Clear timers, intervals, and event listeners</li>
          <li>Avoid unnecessary global variables</li>
          <li>Use browser dev tools → Memory tab → Heap snapshots</li>
          <li>Use WeakMap or WeakSet for temporary object references</li>
        </ul>
      </div>  

      

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
