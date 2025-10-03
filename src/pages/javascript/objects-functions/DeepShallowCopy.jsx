// DeepVsShallowCopy.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DeepVsShallowCopy() {
  const jsExample = `// Shallow Copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.a = 10;
shallowCopy.b.c = 20;

console.log(original.a); // 1  (primitive unaffected)
console.log(original.b.c); // 20 (nested object affected) -> Shallow Copy

// Deep Copy using JSON
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 50;

console.log(original.b.c); // 20 (nested object unaffected) -> Deep Copy

// Deep Copy using structuredClone (modern JS)
const deepCopy2 = structuredClone(original);
deepCopy2.b.c = 100;
console.log(original.b.c); // 20
`;

  const explanation = `// Explanation:
// Shallow Copy: Only copies top-level properties. Nested objects/arrays are still references.
// Deep Copy: Recursively copies all levels. Changes in the copy don't affect original.
// Methods: JSON.parse(JSON.stringify(obj)), structuredClone(obj)`;

  const reactExample = `// React Example: State Update using Deep Copy
import React, { useState } from 'react';

export default function DeepVsShallowCopyExample() {
  const [state, setState] = useState({ user: { name: 'Alice', age: 25 } });

  const updateShallow = () => {
    const shallow = { ...state };
    shallow.user.age = 30;
    setState(shallow);
  };

  const updateDeep = () => {
    const deep = structuredClone(state);
    deep.user.age = 35;
    setState(deep);
  };

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Deep vs Shallow Copy in React State</h2>
      <p>User Age: {state.user.age}</p>
      <button onClick={updateShallow} className="p-2 bg-blue-500 text-white rounded">
        Update Shallow
      </button>
      <button onClick={updateDeep} className="p-2 bg-green-500 text-white rounded ml-2">
        Update Deep
      </button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Deep vs Shallow Copy</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
