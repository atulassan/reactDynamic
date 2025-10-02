import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function KeysInLists() {
  const [items, setItems] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `New Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Keys in Lists</h1>

      {/* Interactive List */}
      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-xl font-semibold">Example: Rendering a list of items</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              {item.name} (id: {item.id})
            </li>
          ))}
        </ul>
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Item
        </button>

        {/* Explanation */}
        <div className="bg-gray-100 p-3 rounded">
          <h3 className="font-semibold">Explanation</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Keys help React identify which items have changed, added, or removed.
            </li>
            <li>
              Always use a <strong>stable and unique key</strong> (like an ID) for list items.
            </li>
            <li>
              Avoid using array index as key if items can be reordered or deleted.
            </li>
          </ul>
        </div>

        {/* Syntax Highlighter */}
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
          {`// Example of keys in a list
const items = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Vue' }
];

<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
