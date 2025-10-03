// ErrorHandling.jsx
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ErrorHandling() {
  const jsExample = `// JavaScript Error Handling
try {
  let result = riskyOperation(); // might throw an error
  console.log(result);
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Finally block executed regardless of error");
}`

  const reactExample = `// React Error Handling with Error Boundary
import React, { Component } from "react";

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage
function BuggyComponent() {
  throw new Error("I am broken!");
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;`;

  const explanation = `// Explanation
// 1. In JavaScript, use try-catch-finally to handle errors gracefully.
// 2. In React, Error Boundaries catch rendering errors, lifecycle errors, and errors in child components.
// 3. Error Boundaries cannot catch errors in event handlers, async code, or server-side rendering.
// 4. They prevent the entire app from crashing and allow you to show fallback UI.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚠️ Error Handling in JavaScript & React</h1>

      <p className="mb-4">
        Handling errors is crucial to ensure your application remains stable and provides
        fallback UI instead of crashing.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example (Error Boundary)</h2>
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
