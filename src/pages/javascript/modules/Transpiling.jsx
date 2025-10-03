// Transpiling.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Transpiling() {
  const modernCode = `// Modern JavaScript (ES6+)
class Person {
  #privateField = "secret";

  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(\`Hello, I'm \${this.name}!\`);
  };
}

const p = new Person("Athavullah");
p.greet();`;

  const transpiledCode = `// Transpiled JavaScript (ES5 - via Babel)
"use strict";

function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello, I'm " + this.name + "!");
  };
}

var p = new Person("Athavullah");
p.greet();`;

  const babelConfig = `// .babelrc example
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚙️ Transpiling in JavaScript</h1>

      <p className="mb-4">
        <b>Transpiling</b> is the process of converting modern JavaScript (ES6+)
        or JSX into older versions (like ES5) so browsers can understand it.
        React apps heavily rely on transpiling for JSX and modern syntax.
      </p>

      {/* Modern JS */}
      <h2 className="text-xl font-semibold mt-6">🔹 Modern JavaScript (ES6+)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {modernCode}
      </SyntaxHighlighter>

      {/* Transpiled JS */}
      <h2 className="text-xl font-semibold mt-6">🔹 Transpiled JavaScript (ES5)</h2>
      <p className="mb-2">
        Babel converts ES6+ features into compatible ES5 syntax for older
        browsers:
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {transpiledCode}
      </SyntaxHighlighter>

      {/* Babel */}
      <h2 className="text-xl font-semibold mt-6">🔹 Babel Configuration</h2>
      <p className="mb-2">
        Babel uses <code>presets</code> and <code>plugins</code> to decide how
        to transpile code:
      </p>
      <SyntaxHighlighter language="json" style={oneDark}>
        {babelConfig}
      </SyntaxHighlighter>

      {/* Why Transpiling */}
      <h2 className="text-xl font-semibold mt-6">✅ Why Do We Need Transpiling?</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>Run modern ES6+ code in old browsers.</li>
        <li>Convert JSX → React.createElement calls.</li>
        <li>Enable experimental features (class fields, decorators, etc.).</li>
        <li>Improve developer experience with TypeScript, JSX, and modern syntax.</li>
      </ul>

      {/* Tools */}
      <h2 className="text-xl font-semibold mt-6">🛠️ Tools Used for Transpiling</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li><b>Babel</b> → The most common JS/JSX transpiler.</li>
        <li><b>TypeScript Compiler (tsc)</b> → Transpiles TypeScript → JS.</li>
        <li><b>Webpack / Vite / Parcel</b> → Bundle + transpile using Babel plugins.</li>
      </ul>

      {/* Summary */}
      <h2 className="text-xl font-semibold mt-6">📌 Summary</h2>
      <p>
        Transpiling ensures **compatibility** between modern JavaScript
        features and older browser environments. In React, Babel makes JSX
        and modern syntax possible across all browsers.
      </p>
    </div>
  );
}
