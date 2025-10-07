// EventDelegation.jsx
import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventDelegation() {
  const example = `// Event Delegation Example in Vanilla JS
// Instead of attaching event listeners to each button, attach to parent
document.getElementById("buttonContainer").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "BUTTON") {
    alert("Button clicked: " + e.target.innerText);
  }
});`;

  const reactExample = `// Event Delegation in React
import React from 'react';

function ButtonList() {
  const handleClick = (e) => {
    alert("Button clicked: " + e.target.innerText);
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
}

export default ButtonList;`;

  const explanation = `// Explanation
// 1. Event delegation is a pattern where a single event listener is added to a parent element 
//    to handle events on its child elements.
// 2. Benefits:
//    - Fewer event listeners -> better performance
//    - Handles dynamic elements added to DOM
// 3. In React, events bubble up, so you can attach one handler on a parent and check e.target to
//    determine which child triggered the event.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🖱️ Event Delegation in JavaScript & React</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter
        language='Javascript'
        style={solarizedlight} // or use `vs` for a clean VS Code look
        showLineNumbers
        customStyle={{
          fontSize: "20px",
          lineHeight: "1.6",
          backgroundColor: "#fdfdfd",
          padding: "16px",
          borderRadius: "0 0 8px 8px",
          color: "#333",
        }}
        codeTagProps={{
          style: {
            fontFamily: "JetBrains Mono, Fira Code, monospace",
          },
        }}
      >
        {explanation}
      </SyntaxHighlighter>

      <p className="mb-4">
        Event delegation allows you to attach a single event listener to a parent element 
        instead of multiple listeners on individual child elements. This pattern improves 
        performance and works with dynamic child elements.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 Vanilla JS Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {example}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
      
    </div>
  );
}
