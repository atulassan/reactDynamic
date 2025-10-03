import React, { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Forms() {
  /** Controlled Component State */
  const [controlledForm, setControlledForm] = useState({ name: "", age: "" });

  /** Uncontrolled Component Refs */
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  /** Controlled Component Handlers */
  const handleControlledChange = (e) => {
    const { name, value } = e.target;
    setControlledForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Form -> Name: ${controlledForm.name}, Age: ${controlledForm.age}`);
  };

  /** Uncontrolled Component Handler */
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Form -> Name: ${nameRef.current.value}, Age: ${ageRef.current.value}`);
  };

  return (
    <div className="p-6 animate-fadeIn space-y-8 bg-gray-50 rounded">

      {/* Controlled Component */}
      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-2xl font-bold">1️⃣ Controlled Component</h2>
        <p className="text-gray-700">
          Form inputs are bound to React state. Every change updates the state.
        </p>

        <form onSubmit={handleControlledSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={controlledForm.name}
              onChange={handleControlledChange}
              className="border p-2 rounded w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-semibold">Age:</label>
            <input
              type="number"
              name="age"
              value={controlledForm.age}
              onChange={handleControlledChange}
              className="border p-2 rounded w-full"
              placeholder="Enter your age"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </form>

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Controlled Component
const [form, setForm] = useState({ name: '', age: '' });

<input name="name" value={form.name} onChange={handleChange} />
<input name="age" value={form.age} onChange={handleChange} />`}
        </SyntaxHighlighter>
      </section>

      {/* Uncontrolled Component */}
      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-2xl font-bold">2️⃣ Uncontrolled Component</h2>
        <p className="text-gray-700">
          Form inputs are not bound to React state. Use refs to access their values directly from the DOM.
        </p>

        <form onSubmit={handleUncontrolledSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              ref={nameRef}
              className="border p-2 rounded w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-semibold">Age:</label>
            <input
              type="number"
              ref={ageRef}
              className="border p-2 rounded w-full"
              placeholder="Enter your age"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Submit
          </button>
        </form>

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Uncontrolled Component
const nameRef = useRef(null);
const ageRef = useRef(null);

<input ref={nameRef} />
<input ref={ageRef} />`}
        </SyntaxHighlighter>
      </section>

      {/* Comparison */}
      <section className="bg-gray-100 p-4 rounded space-y-2">
        <h2 className="text-xl font-semibold">Comparison</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Controlled: React state is the single source of truth.</li>
          <li>Uncontrolled: Form inputs keep their own state in the DOM.</li>
          <li>Controlled allows easy validation and dynamic updates.</li>
          <li>Uncontrolled is simpler for quick forms or refs-based access.</li>
        </ul>
      </section>
    </div>
  );
}
