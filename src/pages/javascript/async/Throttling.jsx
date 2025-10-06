// Throttling.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}

export default function Throttling() {

  const [value, setValue] = useState("");

  const example = `// Throttling Example in JavaScript
// Throttle function: limits how often a function can run
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}

// Usage: Window resize event
window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Resized at", new Date().toLocaleTimeString());
  }, 1000) // runs at most once per second
);`;

  const reactExample = `// React Throttle Example with Input
import { useState, useCallback } from 'react';
function ThrottleInput() {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    throttle((e) => {
      console.log("Throttled Value:", e.target.value);
    }, 500),
    []
  );

  return <input type="text" onChange={(e) => { setValue(e.target.value); handleChange(e); }} value={value} />;
}

// Helper function
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}`;

  const explanation = `// Explanation
// 1. Throttling ensures a function executes at most once in a specified period.
// 2. Useful for performance optimization on events like scroll, resize, mousemove.
// 3. Unlike debouncing, throttling executes the function at regular intervals, even if the event fires continuously.
// 4. In React, use useCallback to avoid creating new throttled functions on each render.`;

  const handleChange = useCallback(
    throttle((e) => {
      console.log("Throttled Value:", e.target.value);
    }, 2000),
    []
  );

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⏱️ Throttling in JavaScript & React</h1>

      <p className="mb-4">
        Throttling is a technique to limit the rate at which a function executes.
        It is commonly used to optimize performance on high-frequency events.
      </p>

      <p className="mb-4">“Throttling slows down a fast function — it runs at a fixed speed."</p>

      <p><input type="text" onChange={(e) => { setValue(e.target.value); handleChange(e); }} value={value} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /></p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {example}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
