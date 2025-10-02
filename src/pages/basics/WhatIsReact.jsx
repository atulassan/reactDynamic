import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WhatIsReact() {
  const jsxExample = `
import React from "react";

// A simple React component
function Hello() {
  return <h1>Hello, React!</h1>;
}

export default Hello;
  `;

  const domExample = `
// Traditional JavaScript DOM
const element = document.createElement("h1");
element.innerText = "Hello, JavaScript DOM!";
document.body.appendChild(element);
  `;

  return (
    <div className="p-6 animate-fadeIn space-y-8 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">⚛️ What is React?</h1>

      <section className="p-4 bg-white rounded shadow space-y-3">
        <p className="text-gray-700 leading-relaxed">
          <b>React</b> is an <span className="text-blue-600">open-source JavaScript library</span> 
          developed by <b>Facebook</b> for building <b>user interfaces (UIs)</b>, 
          especially for <b>single-page applications (SPAs)</b>.  
          It allows developers to create reusable UI components and efficiently
          update only the parts of the DOM that change, thanks to its <b>Virtual DOM</b>.
        </p>
      </section>

      {/* Traditional DOM vs React JSX */}
      <section className="p-4 bg-white rounded shadow space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">📌 Example: Traditional DOM vs React</h2>

        <div>
          <h3 className="font-semibold text-gray-700">👉 Traditional JavaScript DOM</h3>
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {domExample}
          </SyntaxHighlighter>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">👉 React (using JSX)</h3>
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {jsxExample}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Key Features */}
      <section className="p-4 bg-white rounded shadow space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">✨ Key Features of React</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>⚡ Uses a <b>Virtual DOM</b> for efficient rendering</li>
          <li>🧩 <b>Component-Based Architecture</b> → reusable & modular</li>
          <li>🔄 <b>Unidirectional Data Flow</b> ensures predictable UI</li>
          <li>🎣 <b>Hooks</b> for managing state & lifecycle in functional components</li>
          <li>🌍 Can be used for <b>Web</b> and <b>Mobile (React Native)</b></li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold text-gray-800">📌 Conclusion</h2>
        <p className="text-gray-700 mt-2">
          React makes it easier to build dynamic, interactive UIs with less code
          and better performance compared to manipulating the DOM directly.
        </p>
      </section>
    </div>
  );
}
