// ESModules.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ESModules() {
  const basics = `// ES Modules: Named Exports
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Importing named exports
import { add, multiply } from './math';

console.log(add(2,3)); // 5
console.log(multiply(2,3)); // 6`;


  const defaultExport = `// ES Modules: Default Export
export default function greet(name) {
  return \`Hello, \${name}!\`;
}

// Importing default export
import greet from './greet';

console.log(greet('Athavullah')); // Hello, Athavullah!`;

  const reExport = `// Re-exporting modules
export { add, multiply } from './math';
export { default as greet } from './greet';

// Now you can import everything from a single file
import { add, multiply, greet } from './index';`;

  const explanation = `// Explanation
// 1. ES Modules use 'export' and 'import' statements.
// 2. Named exports allow multiple exports per file.
// 3. Default exports export a single main value.
// 4. Static structure enables tree shaking in modern bundlers (Webpack, Vite, Rollup).
// 5. Helps modularize code and improve maintainability in React apps.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">📦 ES Modules (import/export)</h1>

      <p className="mb-4">
        ES Modules are the standard way to write modular JavaScript. They
        enable **static analysis**, **tree shaking**, and cleaner code organization.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 Named Exports</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {basics}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Default Export</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {defaultExport}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Re-exporting Modules</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reExport}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
