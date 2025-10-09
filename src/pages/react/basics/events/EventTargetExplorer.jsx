import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventTargetExplorer() {
  const [targetInfo, setTargetInfo] = useState("");

  const handleInspect = (e) => {
    e.preventDefault();

    // Extract common target properties
    const t = e.target;
    const info = {
      tagName: t.tagName,
      id: t.id,
      name: t.name,
      className: t.className,
      value: t.value,
      type: t.type,
      placeholder: t.placeholder,
      checked: t.checked,
      disabled: t.disabled,
      dataset: t.dataset,
      innerText: t.innerText,
      innerHTML: t.innerHTML,
      parentElement: t.parentElement?.tagName,
      childrenCount: t.children?.length,
      attributes: Array.from(t.attributes).map((a) => `${a.name}="${a.value}"`),
    };

    setTargetInfo(JSON.stringify(info, null, 2));
    console.clear();
    console.log("🧠 Full e.target:", t);
    console.dir(t);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">🎯 Event Target Explorer</h2>
      <p className="text-gray-700 mb-4">
        Click on any of the elements below to inspect their <b>e.target</b> properties.  
        This helps understand how <code>event.target</code> behaves in React Synthetic Events.
      </p>

      {/* Interactive Elements */}
      <div className="space-y-4">
        <button
          id="saveBtn"
          name="saveButton"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleInspect}
        >
          Click Me
        </button>

        <input
          id="username"
          name="user"
          type="text"
          value="John Doe"
          placeholder="Enter your name"
          data-role="admin"
          className="border border-gray-400 rounded px-3 py-2 w-full"
          onClick={handleInspect}
          readOnly
        />

        <select
          id="country"
          name="location"
          className="border border-gray-400 rounded px-3 py-2 w-full"
          onClick={handleInspect}
        >
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>

        <div
          id="card"
          data-info="customDiv"
          className="border border-indigo-400 rounded p-3 hover:bg-indigo-50 cursor-pointer"
          onClick={handleInspect}
        >
          <p className="font-semibold">This is a clickable div</p>
          <span>Click here to inspect this DIV element</span>
        </div>
      </div>

      {/* Output */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">🧾 Target Details:</h3>
        {targetInfo ? (
          <SyntaxHighlighter language="json" style={vs}>
            {targetInfo}
          </SyntaxHighlighter>
        ) : (
          <p className="text-gray-500 italic">Click any element above to see its properties...</p>
        )}
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <p>
          💡 <b>Tip:</b> Open your browser console after clicking — you’ll see a detailed <code>console.dir(e.target)</code> view.
        </p>
      </div>
    </div>
  );
}
