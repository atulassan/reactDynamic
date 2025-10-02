import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StrictMode() {
  const codeEnableStrictMode = `// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  const codeDoubleInvoke = `// Example: Detecting side-effects
function Demo() {
  useEffect(() => {
    console.log("Effect runs");
  }, []);

  return <p>Hello StrictMode</p>;
}

// In development, React.StrictMode runs this effect twice
// so you can catch side-effects early.
`;

  const codeUnsafeLifecycle = `// Legacy lifecycle methods flagged in StrictMode
class OldComponent extends React.Component {
  componentWillMount() {
    console.log("⚠️ Deprecated lifecycle called");
  }

  render() {
    return <h2>Old Component</h2>;
  }
}`;
  // --- Live demo of double invoke ---
  function DoubleInvokeDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Effect invoked (count):", count);
    }, [count]);

    return (
      <div className="border border-blue-500 p-4 rounded-lg mt-4">
        <p className="mb-2">Count: {count}</p>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <p className="text-sm text-gray-400 mt-2">
          (In development, React.StrictMode intentionally calls lifecycle hooks
          twice, so check your console logs.)
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">⚛️ React StrictMode</h1>
      <p className="mb-4">
        <strong>StrictMode</strong> is a development tool that helps identify
        potential problems in a React application. It <u>does not render any
        visible UI</u>, but runs additional checks and warnings.
      </p>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Enabling StrictMode
      </h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeEnableStrictMode}
      </SyntaxHighlighter>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Detecting Side Effects
      </h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeDoubleInvoke}
      </SyntaxHighlighter>
      <DoubleInvokeDemo />

      {/* Example 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Flagging Unsafe Lifecycle Methods
      </h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeUnsafeLifecycle}
      </SyntaxHighlighter>

      <p className="mt-6">
        ✅ <strong>StrictMode is only active in development mode</strong>. It
        doesn’t affect the production build but ensures your components are
        future-proof and follow best practices.
      </p>
    </div>
  );
}
