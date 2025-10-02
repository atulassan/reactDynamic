import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Example ErrorBoundary Component ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI can be shown
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Logged Error:", error, errorInfo);
    // You could send error logs to a server here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          <h2>⚠️ Something went wrong.</h2>
          <pre className="text-xs bg-red-200 p-2 rounded mt-2 overflow-x-auto">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Example of a bug component ---
function BuggyCounter() {
  const [count, setCount] = React.useState(0);
  if (count === 5) {
    throw new Error("💥 Crashed at count = 5!");
  }
  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
    >
      Count: {count}
    </button>
  );
}

// --- Documentation Component ---
export default function ErrorBoundaries() {
  const codeErrorBoundary = `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // update state
  }

  componentDidCatch(error, info) {
    // log error somewhere
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}`;

  const codeUsage = `<ErrorBoundary>
  <MyComponent />  {/* If MyComponent throws, fallback UI will show */}
</ErrorBoundary>`;

  const codeFunctional = `import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>⚠️ Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚛️ Error Boundaries in React</h1>

      <p className="mb-4">
        <strong>Error Boundaries</strong> are React components that{" "}
        <u>catch JavaScript errors in their child component tree</u>, log them,
        and display a fallback UI instead of crashing the whole app.
      </p>

      {/* Example */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Live Example</h2>
      <p>Click until the counter reaches 5, then it will throw an error:</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      {/* Syntax */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Class-based Error Boundary</h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeErrorBoundary}
      </SyntaxHighlighter>

      {/* Usage */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Usage</h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeUsage}
      </SyntaxHighlighter>

      {/* Functional Alternative */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Functional Alternative (with react-error-boundary)
      </h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeFunctional}
      </SyntaxHighlighter>

      {/* Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Key Points</h2>
      <ul className="list-disc list-inside">
        <li>Error Boundaries catch errors during rendering, lifecycle, and constructors.</li>
        <li>They <strong>do not</strong> catch errors in:
          <ul className="list-circle list-inside ml-6">
            <li>Event handlers</li>
            <li>Asynchronous code (e.g., setTimeout, promises)</li>
            <li>Server-side rendering</li>
          </ul>
        </li>
        <li>Functional components can use <code>react-error-boundary</code> library.</li>
      </ul>
    </div>
  );
}

