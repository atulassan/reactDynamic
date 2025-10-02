import React, { useState, useTransition } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseTransition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 2000;

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // non-urgent update
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(value + " " + i);
      }
      setList(newList);
    });
  };

  const codeBasic = `// Basic usage of useTransition
import { useState, useTransition } from "react";

function SearchInput() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 2000;

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Mark heavy update as transition
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(value + " " + i);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <p>⏳ Updating list...</p>}
      <ul>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}`;

  const codeComparison = `// Without useTransition
setInput(value);
const newList = bigComputation(value); 
setList(newList); 
// ❌ Input typing feels "laggy"

// With useTransition
setInput(value);
startTransition(() => {
  const newList = bigComputation(value);
  setList(newList);
});
// ✅ Input stays responsive
`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">⚛️ useTransition Hook</h1>
      <p>
        <code>useTransition</code> lets you mark updates as non-urgent. This
        keeps the UI responsive (e.g., input typing) while React processes heavy
        state updates in the background.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Example Usage</h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeBasic}
      </SyntaxHighlighter>

      {/* Live Demo */}
      <div className="mt-6 border rounded-lg p-4 bg-gray-900 text-white">
        <h3 className="text-lg font-semibold mb-2">Live Demo:</h3>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type something..."
          className="px-3 py-2 rounded text-black"
        />
        {isPending && <p className="text-yellow-400 mt-2">⏳ Updating list...</p>}
        <ul className="h-40 overflow-y-auto mt-2 text-sm">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Example 2 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">
        🔹 With vs Without useTransition
      </h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeComparison}
      </SyntaxHighlighter>

      <p className="mt-6">
        ✅ Use <code>useTransition</code> when you have heavy computations,
        filtering, or rendering lists — it ensures urgent updates (like typing)
        stay smooth.
      </p>
    </div>
  );
}
