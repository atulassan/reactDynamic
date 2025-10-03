import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventBubbling() {
  const handleParentClick = () => alert("Parent clicked!");
  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevent bubbling
    alert("Child clicked!");
  };

  return (
    <div className="p-4 bg-white rounded border space-y-4">
      <h2 className="text-2xl font-bold">2️⃣ Event Bubbling</h2>

      <div
        onClick={handleParentClick}
        className="p-4 border border-gray-400 rounded bg-gray-100"
      >
        Parent Div
        <button
          onClick={handleChildClick}
          className="ml-4 px-2 py-1 bg-blue-400 text-white rounded"
        >
          Child Button
        </button>
      </div>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Event Bubbling
<div onClick={handleParentClick}>
  Parent Div
  <button onClick={(e) => { e.stopPropagation(); alert("Child clicked"); }}>
    Child Button
  </button>
</div>`}
      </SyntaxHighlighter>
    </div>
  );
}
