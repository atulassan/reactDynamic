// Polyfills.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Polyfills() {
  const missingFeature = `// Modern JS feature: Array.includes
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(2)); // true
console.log(numbers.includes(7)); // false`;

// Polyfill implementation
  const polyfillExample = `// Polyfill for Array.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (search, start) {
    if (this == null) throw new TypeError("Array.prototype.includes called on null/undefined");
    let len = this.length;
    if (len === 0) return false;

    let i = start || 0;
    if (i < 0) i = len + i;
    
    for (; i < len; i++) {
      if (this[i] === search) return true;
    }
    return false;
  };
}

// Now it works even in old browsers
console.log([1, 2, 3].includes(2)); // true`;

  const fetchPolyfill = `// Fetch API is not supported in very old browsers
// Polyfill using whatwg-fetch or axios
import "whatwg-fetch";

// Usage
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🧩 Polyfills in JavaScript</h1>

      <p className="mb-4">
        A <b>polyfill</b> is a piece of code (usually JS) that implements a
        feature on web browsers that do not natively support it.  
        Think of it as <b>backward compatibility for missing APIs</b>.
      </p>

      {/* Example: Missing feature */}
      <h2 className="text-xl font-semibold mt-6">🔹 Example: Missing Feature</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {missingFeature}
      </SyntaxHighlighter>

      {/* Polyfill example */}
      <h2 className="text-xl font-semibold mt-6">🔹 Polyfill Implementation</h2>
      <p className="mb-2">
        Old browsers may not have <code>Array.includes</code>. Here's how we can
        implement it manually:
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {polyfillExample}
      </SyntaxHighlighter>

      {/* Fetch polyfill */}
      <h2 className="text-xl font-semibold mt-6">🔹 Fetch Polyfill</h2>
      <p className="mb-2">
        The <code>fetch()</code> API is not supported in older browsers like
        IE11. We can polyfill it using libraries:
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {fetchPolyfill}
      </SyntaxHighlighter>

      {/* Tools */}
      <h2 className="text-xl font-semibold mt-6">🛠️ Tools / Libraries</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li><b>core-js</b> → provides polyfills for ES6+ features.</li>
        <li><b>whatwg-fetch</b> → polyfills the fetch API.</li>
        <li><b>Babel + @babel/preset-env</b> → automatically includes needed polyfills.</li>
      </ul>

      {/* Summary */}
      <h2 className="text-xl font-semibold mt-6">📌 Summary</h2>
      <p>
        Use <b>transpilers</b> (like Babel) to handle new <i>syntax</i>,  
        and <b>polyfills</b> to add missing <i>features</i> in older browsers.  
        Together, they ensure your React app works everywhere 🌍.
      </p>
    </div>
  );
}
