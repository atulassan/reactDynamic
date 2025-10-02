import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Child component receiving props
function Greeting({ name }) {
  return <p className="text-gray-700">Hello, {name}!</p>;
}

export default function PropsState() {
  const [name, setName] = useState("React Learner"); // State example

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">

      <h1 className="text-3xl font-bold">🔹 Props & State</h1>

      {/* State Example */}
      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-xl font-semibold">State Example</h2>
        <p className="text-gray-700">This input updates React state:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded w-full"
        />
        <p className="text-gray-700 mt-2">Current State: {name}</p>

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`const [name, setName] = useState('React Learner');
<input value={name} onChange={(e) => setName(e.target.value)} />`}
        </SyntaxHighlighter>
      </section>

      {/* Props Example */}
      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-xl font-semibold">Props Example</h2>
        <p className="text-gray-700">
          Passing state as <strong>props</strong> to child component:
        </p>
        <Greeting name={name} />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Parent passes state as prop
<Greeting name={name} />

// Child receives props
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}`}
        </SyntaxHighlighter>
      </section>

      {/* Explanation */}
      <section className="bg-gray-100 p-4 rounded space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>State:</strong> Managed within a component, changes trigger re-render.
          </li>
          <li>
            <strong>Props:</strong> Data passed from parent to child, read-only in child.
          </li>
          <li>
            State can be passed down to children as props for consistent UI.
          </li>
        </ul>
      </section>
    </div>
  );
}
