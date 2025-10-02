import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Extra() {
  const codePerformance = `// React.memo Example
const Child = React.memo(({ count }) => <p>Count: {count}</p>);

// useMemo Example
const expensiveCalc = useMemo(() => compute(data), [data]);

// Lazy Loading
const LazyComp = React.lazy(() => import("./HeavyComp"));
<React.Suspense fallback={<p>Loading...</p>}><LazyComp /></React.Suspense>;`;

  const codeTesting = `// Jest + React Testing Library Example
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});`;

  const codeErrorBoundary = `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Logged Error:", error, info);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong.</h2>;
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>;`;

  const codeFiber = `// React Fiber reconciler runs in chunks
// Instead of rendering whole tree, it breaks work into units
// Prioritizes updates (e.g., user input > background updates)

// Example: concurrent rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`;

  const codeStrictMode = `<React.StrictMode>
  <App />
</React.StrictMode>

// StrictMode helps highlight side-effect issues
// Example: useEffect double-invoked in dev to detect unsafe patterns`;

  const codeHydration = `// Hydration Example (React 18)
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(document.getElementById("root"), <App />);`;

  const codeServerComponents = `// Server Components Example (React 18+)
// server/Message.server.jsx
export default function Message() {
  return <p>Hello from the server!</p>;
}

// Client Component imports Server Component
import Message from "./Message.server";
export default function App() {
  return <Message />;
}`;

  return (
    <div className="p-6 animate-fadeIn space-y-8">
      <h1 className="text-3xl font-bold mb-4">
        🎯 Extra / Interview Must-Know
      </h1>

      {/* Performance Optimization */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">⚡ Performance Optimization</h2>
        <p>
          Techniques like <code>React.memo</code>, <code>useMemo</code>,{" "}
          <code>useCallback</code>, and lazy loading help optimize rendering.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codePerformance}
        </SyntaxHighlighter>
      </section>

      {/* Testing */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🧪 Testing (Jest, RTL)</h2>
        <p>
          Jest + React Testing Library (RTL) are commonly used for unit and
          integration testing in React apps.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeTesting}
        </SyntaxHighlighter>
      </section>

      {/* Error Boundaries */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🚧 Error Boundaries</h2>
        <p>
          Error boundaries catch errors in React components and prevent the
          entire app from crashing.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeErrorBoundary}
        </SyntaxHighlighter>
      </section>

      {/* React Fiber */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🧵 React Fiber</h2>
        <p>
          Fiber is the reconciliation engine in React that enables concurrent
          rendering and prioritization of updates.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeFiber}
        </SyntaxHighlighter>
      </section>

      {/* StrictMode */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">✅ StrictMode</h2>
        <p>
          Helps identify unsafe lifecycle methods, side effects, and deprecated
          APIs during development.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeStrictMode}
        </SyntaxHighlighter>
      </section>

      {/* Hydration */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">💧 Hydration</h2>
        <p>
          Hydration attaches React event listeners to pre-rendered HTML on the
          client, improving performance in SSR apps.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeHydration}
        </SyntaxHighlighter>
      </section>

      {/* Server Components */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🌐 Server Components</h2>
        <p>
          React Server Components (RSC) allow rendering components on the server
          while sending minimal data to the client.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeServerComponents}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
