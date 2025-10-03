// ModulesVsCommonJS.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ModulesVsCommonJS() {
  const esModules = `// ES Modules (ES6+)
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Importing
import { add, multiply } from './math';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6`;

  const commonJS = `// CommonJS (Node.js)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

module.exports = { add, multiply };

// Importing
const { add, multiply } = require('./math');

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6`;

  const explanation = `// Explanation
// ES Modules (import/export) are statically analyzable, which allows
// modern bundlers to perform tree shaking and optimize bundles.

// CommonJS (require/module.exports) is dynamic and used mainly in Node.js.
// It does not support tree shaking because imports are resolved at runtime.`;

  const tips = `// Tips for React Projects:
// 1. Always prefer ES Modules in React for tree shaking and better optimization.
// 2. CommonJS is mostly used in Node.js environments or legacy packages.
// 3. Avoid mixing ES Modules and CommonJS in the same project to prevent issues.
// 4. Modern bundlers like Vite, Webpack, and Rollup handle ES Modules efficiently.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">📦 ES Modules vs CommonJS</h1>

      <p className="mb-4">
        Understanding module systems is important for React apps and modern
        JavaScript. ES Modules enable static analysis, while CommonJS is
        dynamic and mostly used in Node.js.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 ES Modules (import/export)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {esModules}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 CommonJS (require/module.exports)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {commonJS}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Tips for React Projects</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {tips}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">✅ Summary</h2>
      <p>
        Use <b>ES Modules</b> in React whenever possible for better optimization
        and tree shaking. CommonJS remains useful for server-side Node.js code
        and legacy libraries.
      </p>
    </div>
  );
}
