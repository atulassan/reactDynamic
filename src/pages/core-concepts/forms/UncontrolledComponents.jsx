import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UncontrolledComponents() {
  // Ref for the input
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    alert(`Name: ${name}, Age: ${age}`);
  };

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Uncontrolled Components</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded border">
        <div>
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Age:</label>
          <input
            type="number"
            ref={ageRef}
            placeholder="Enter your age"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Explanation */}
      <div className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Uncontrolled components rely on <code>refs</code> to access form values.</li>
          <li>The input state is handled by the DOM, not React state.</li>
          <li>Useful for simple forms or when you need direct DOM access.</li>
          <li>Unlike controlled components, changes to input do not trigger re-renders.</li>
        </ul>
      </div>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Example using ref
const nameRef = useRef(null);

<form onSubmit={handleSubmit}>
  <input type="text" ref={nameRef} />
  <button type="submit">Submit</button>
</form>

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(nameRef.current.value);
};`}
      </SyntaxHighlighter>
    </div>
  );
}
