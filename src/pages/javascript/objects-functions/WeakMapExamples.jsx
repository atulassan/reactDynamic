// WeakMapExample.jsx
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WeakMapExample() {
  const [output, setOutput] = useState([]);

  const runExamples = () => {
    const logs = [];

    // Create objects as keys
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };

    logs.push("Created objects: obj1, obj2, obj3");

    // Initialize WeakMap
    const wm = new WeakMap([[obj1, "Atha"]]);
    logs.push("Initialized WeakMap with obj1 -> 'Atha'");

    // set method
    wm.set(obj2, "Rahman");
    logs.push("Added obj2 -> 'Rahman' via wm.set(obj2, 'Rahman')");

    // get method
    logs.push(`wm.get(obj1): ${wm.get(obj1)}`); // Atha
    logs.push(`wm.get(obj3): ${wm.get(obj3)}`); // undefined

    // has method
    logs.push(`wm.has(obj2): ${wm.has(obj2)}`); // true

    // delete method
    wm.delete(obj2);
    logs.push("Deleted obj2 via wm.delete(obj2)");
    logs.push(`wm.has(obj2): ${wm.has(obj2)}`); // false

    // Attempting to use primitive key (should throw)
    try {
      // @ts-ignore
      wm.set("string", "value"); // Throws in strict JS
    } catch (err) {
      logs.push("Cannot use primitive as key in WeakMap: Error thrown");
    }

    setOutput(logs);
  };

  const exampleCode = `
// WeakMap Methods Examples
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

const wm = new WeakMap([[obj1, "Atha"]]); // Initialize
wm.set(obj2, "Rahman"); // Set key-value
wm.get(obj1); // 'Atha'
wm.has(obj2); // true
wm.delete(obj2); // true
`;

  return (
    <div className="p-6 space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold">WeakMap Examples in React</h2>
      <p>
        <strong>WeakMap:</strong> Stores key-value pairs where keys must be objects.
        Weak references allow garbage collection when objects are no longer reachable.
      </p>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={runExamples}
      >
        Run Examples
      </button>

      <div className="bg-gray-900 rounded p-4 overflow-auto">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {exampleCode}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-100 rounded p-4 space-y-1">
        <h3 className="font-semibold">Output:</h3>
        {output.map((line, idx) => (
          <div key={idx} className="font-mono text-gray-800">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
