import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ControlledComponents() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Age: ${formData.age}`);
  };

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Controlled Components</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded border">
        <div>
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
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
          <li>Controlled components use React state to manage input values.</li>
          <li>Every change in input triggers <code>onChange</code>, updating state.</li>
          <li>React state is the single source of truth for form data.</li>
          <li>Useful when you need validation, dynamic input, or real-time updates.</li>
        </ul>
      </div>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`const [formData, setFormData] = useState({ name: '', age: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

<form onSubmit={handleSubmit}>
  <input name="name" value={formData.name} onChange={handleChange} />
  <input name="age" value={formData.age} onChange={handleChange} />
</form>`}
      </SyntaxHighlighter>
    </div>
  );
}
