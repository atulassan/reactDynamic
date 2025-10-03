// ModulesAndTooling.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ModulesAndTooling() {
  const modulesExample = `// ES Modules (Recommended in React)
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

import { add, multiply } from './math';

console.log(add(2,3)); // 5`;


  const commonJSExample = `// CommonJS (Node.js)
const { readFile } = require('fs');
const { add, multiply } = require('./math');

console.log(multiply(2,3)); // 6`;

  const toolingExample = `// Example: Webpack module bundling
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { test: /\\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  mode: 'production'
};`;

  const explanation = `// Explanation
// 1. Modules: ES Modules (import/export) allow tree shaking and static analysis.
// 2. CommonJS: require/module.exports, dynamic imports, used in Node.js.
// 3. Tooling: Bundlers like Webpack, Rollup, and Vite combine modules, transpile JSX/ES6, and optimize bundles.
// 4. Transpilers: Babel converts modern JS/JSX into browser-compatible JS.
// 5. Module format and tooling directly impact React app performance and bundle size.`;

  const tips = `// Tips for React Projects:
// 1. Use ES Modules wherever possible.
// 2. Choose a modern bundler like Vite or Webpack for tree shaking.
// 3. Use Babel to transpile JSX and modern JS features.
// 4. Avoid mixing CommonJS and ES Modules in the same project.
// 5. Optimize bundle size using code splitting, dynamic imports, and tree shaking.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔧 Modules & Tooling in React</h1>

      <p className="mb-4">
        Modern React development relies on **module systems** and **tooling** to
        organize code and optimize bundles.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 ES Modules Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {modulesExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 CommonJS Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {commonJSExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Tooling Example (Webpack)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {toolingExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Tips</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {tips}
      </SyntaxHighlighter>
    </div>
  );
}
