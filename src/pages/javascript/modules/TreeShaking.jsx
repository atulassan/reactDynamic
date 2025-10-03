// TreeShaking.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TreeShaking() {
  const beforeTreeShaking = `// File: utils.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// File: main.js
import * as Utils from './utils';

console.log(Utils.add(2, 3)); // Using only add
`;

  const afterTreeShaking = `// After tree shaking
// Only the "add" function is included in the bundle
export function add(a, b) {
  return a + b;
}
`;

  const treeShakingExplanation = `// Explanation
// Tree shaking is a process used by bundlers (like Webpack, Vite, Rollup)
// to remove unused code from the final bundle, reducing size and improving performance.
// Only the imported and used code is kept in the final output.`;

  const bundlerTips = `// Tips for tree shaking in React projects:
// 1. Use ES6 module syntax (import/export) instead of CommonJS (require/module.exports)
// 2. Avoid dynamic imports for utility libraries unless necessary
// 3. Make sure your bundler (Webpack/Rollup/Vite) is in production mode
// 4. Minifiers like Terser can help remove dead code`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🌲 Tree Shaking in JavaScript</h1>

      <p className="mb-4">
        <b>Tree shaking</b> is a technique to remove unused code from your final
        JavaScript bundle. This is especially important in React apps to reduce
        bundle size and improve performance.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 Example Before Tree Shaking</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {beforeTreeShaking}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Example After Tree Shaking</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {afterTreeShaking}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {treeShakingExplanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Bundler Tips</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {bundlerTips}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">✅ Summary</h2>
      <p>
        By enabling tree shaking, your React application's bundle only contains
        the code you actually use, making it smaller and faster to load. Always
        use ES6 modules for maximum benefit.
      </p>
    </div>
  );
}
