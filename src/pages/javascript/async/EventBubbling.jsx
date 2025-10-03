// EventBubbling.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventBubbling() {
  const jsExample = `// Event Bubbling in Vanilla JS
// Child event triggers parent event handlers as well
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child clicked");
  // e.stopPropagation(); // Use this to stop bubbling
});`;

  const reactExample = `// Event Bubbling in React
function BubblingExample() {
  const handleParentClick = () => console.log("Parent clicked");
  const handleChildClick = (e) => {
    console.log("Child clicked");
    // e.stopPropagation(); // Stop bubbling if needed
  };

  return (
    <div onClick={handleParentClick} style={{ padding: "20px", border: "2px solid blue" }}>
      Parent Div
      <button onClick={handleChildClick} style={{ marginTop: "10px" }}>Child Button</button>
    </div>
  );
}

export default BubblingExample;`;

  const explanation = `// Explanation
// 1. Event Bubbling is the process where an event propagates (bubbles) from the target element up through its ancestors.
// 2. In vanilla JS, all parent elements of the clicked element receive the event unless e.stopPropagation() is used.
// 3. In React, event handlers also bubble up through the component tree.
// 4. Useful for delegation or global event handling, but you can prevent it with e.stopPropagation().`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🌊 Event Bubbling in JavaScript & React</h1>

      <p className="mb-4">
        Event bubbling allows events triggered on a child element to propagate to parent elements.
        This is the basis for patterns like event delegation.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
