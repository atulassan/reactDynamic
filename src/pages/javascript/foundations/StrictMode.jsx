// StrictModeExample.jsx
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StrictModeExample() {
  const jsExample = `// Using React.StrictMode

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StrictMode features:
// 1. Identifies unsafe lifecycle methods in class components
// 2. Detects legacy string ref usage
// 3. Detects unexpected side effects
// 4. Detects deprecated findDOMNode usage
`;

  const reactExample = `// StrictMode in functional component
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect run');
  }, []);

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="p-2 bg-blue-500 text-white rounded">
        Increment
      </button>
    </div>
  );
}

// When wrapped with StrictMode, useEffect runs twice in development
// to detect side effects and ensure components are resilient.
`;

  const explanation = `// Explanation:
// React.StrictMode is a tool for highlighting potential problems in an application.
// It does NOT render any visible UI itself. It runs checks and warnings in development mode only.
// Common uses:
// - Detecting unsafe lifecycle methods in classes
// - Detecting legacy string refs
// - Detecting unexpected side effects
// - Detecting deprecated APIs`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 React StrictMode</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript / ReactDOM Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">Functional Component Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
