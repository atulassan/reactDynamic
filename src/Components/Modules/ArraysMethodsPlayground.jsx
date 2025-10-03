import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Array methods, handlers, and highlighted code
const arrayMethods = [
  {
    name: "map",
    description: "Creates a new array by calling a function on every element.",
    code: `const result = arr.map(x => x * 2);`,
    handler: (arr) => arr.map(x => x * 2)
  },
  {
    name: "filter",
    description: "Returns a new array with elements passing a test.",
    code: `const result = arr.filter(x => x % 2 === 0);`,
    handler: (arr) => arr.filter(x => x % 2 === 0)
  },
  {
    name: "reduce",
    description: "Reduces the array to a single value.",
    code: `const result = arr.reduce((acc, x) => acc + x, 0);`,
    handler: (arr) => arr.reduce((acc, x) => acc + x, 0)
  },
  {
    name: "find",
    description: "Finds the first value meeting a condition.",
    code: `const result = arr.find(x => x > 2);`,
    handler: (arr) => arr.find(x => x > 2)
  },
  {
    name: "findIndex",
    description: "Finds the index of a value meeting a condition.",
    code: `const result = arr.findIndex(x => x > 2);`,
    handler: (arr) => arr.findIndex(x => x > 2)
  },
  {
    name: "some",
    description: "Checks if any items meet a condition.",
    code: `const result = arr.some(x => x > 2);`,
    handler: (arr) => arr.some(x => x > 2)
  },
  {
    name: "every",
    description: "Checks if all items meet a condition.",
    code: `const result = arr.every(x => x > 0);`,
    handler: (arr) => arr.every(x => x > 0)
  },
  {
    name: "includes",
    description: "Checks if array contains a value.",
    code: `const result = arr.includes(2);`,
    handler: (arr) => arr.includes(2)
  },
  {
    name: "push",
    description: "Adds a value to the end.",
    code: `arr.push(5); // modifies arr`,
    handler: (arr) => {
      const copy = [...arr];
      copy.push(5);
      return copy;
    }
  },
  {
    name: "pop",
    description: "Removes the last value.",
    code: `arr.pop(); // modifies arr`,
    handler: (arr) => {
      const copy = [...arr];
      copy.pop();
      return copy;
    }
  },
  {
    name: "unshift",
    description: "Adds a value to the start.",
    code: `arr.unshift(0); // modifies arr`,
    handler: (arr) => {
      const copy = [...arr];
      copy.unshift(0);
      return copy;
    }
  },
  {
    name: "shift",
    description: "Removes the first value.",
    code: `arr.shift(); // modifies arr`,
    handler: (arr) => {
      const copy = [...arr];
      copy.shift();
      return copy;
    }
  },
  {
    name: "concat",
    description: "Merges two arrays.",
    code: `const result = arr.concat([5, 6]);`,
    handler: (arr) => arr.concat([5, 6])
  },
  {
    name: "slice",
    description: "Gets a subset by range.",
    code: `const result = arr.slice(1, 3);`,
    handler: (arr) => arr.slice(1, 3)
  },
  {
    name: "splice",
    description: "Modifies array by removing/replacing values.",
    code: `arr.splice(1, 2, 99); // modifies arr`,
    handler: (arr) => {
      const copy = [...arr];
      copy.splice(1, 2, 99);
      return copy;
    }
  },
  {
    name: "sort",
    description: "Sorts array values.",
    code: `const result = [...arr].sort((a, b) => a - b);`,
    handler: (arr) => [...arr].sort((a, b) => a - b)
  },
  {
    name: "join",
    description: "Joins array into a string.",
    code: `const result = arr.join('-');`,
    handler: (arr) => arr.join('-')
  },
  {
    name: "reverse",
    description: "Reverses the array values.",
    code: `const result = [...arr].reverse();`,
    handler: (arr) => [...arr].reverse()
  }
];

const initialArray = [1, 2, 3, 4];

const ArraysMethodsPlayground = () => {
  const [selected, setSelected] = useState(0);

  const method = arrayMethods[selected];
  let result;
  try {
    result = method.handler(initialArray);
    if (Array.isArray(result)) result = JSON.stringify(result);
  } catch (e) {
    result = "Error: " + e.message;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript Array Methods Playground</h2>
      <div className="mb-6">
        <span className="font-medium text-gray-700">Initial Array:</span>
        <span className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm text-gray-500">[{initialArray.join(', ')}]</span>
      </div>
      <div className="mb-6">
        <label htmlFor="method" className="block font-medium text-gray-700 mb-2">Choose Method:</label>
        <select
          id="method"
          value={selected}
          onChange={e => setSelected(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 text-base"
        >
          {arrayMethods.map((m, idx) => (
            <option key={m.name} value={idx}>
              {m.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-blue-700 text-lg">{method.name}</div>
        <div className="text-gray-500 mb-2">{method.description}</div>
        <div className="mb-2">
          <span className="font-medium text-gray-600 mr-2">Code:</span>
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            customStyle={{
              borderRadius: '0.4rem',
              fontSize: "1rem",
              padding: "14px",
              margin: 0,
              background: "#23272e"
            }}
            className="shadow-sm"
          >
            {method.code}
          </SyntaxHighlighter>
        </div>
        <div className="mt-2">
          <span className="font-medium text-gray-600 mr-2">Result:</span>
          <span className="px-3 py-2 bg-gray-100 rounded text-blue-800 font-mono text-base">{String(result)}</span>
        </div>
      </div>
    </div>
  );
};

export default ArraysMethodsPlayground;
