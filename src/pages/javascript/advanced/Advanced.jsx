// Advanced.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Advanced() {
  const fiberCode = `// React Fiber simplified example
function App() {
  return (
    <div>
      <h1>Hello Fiber</h1>
      <p>Fiber breaks rendering into small chunks.</p>
    </div>
  );
}
// Fiber lets React pause, resume, and prioritize work
// Instead of rendering everything in one go.`;

  const diffingCode = `// Diffing & Reconciliation
<ul>
  <li key="1">Apple</li>
  <li key="2">Banana</li>
</ul>

// If list changes to:
<ul>
  <li key="2">Banana</li>
  <li key="3">Cherry</li>
</ul>

// React reuses "Banana" (key=2) and only updates the changed nodes.`;

  const hydrationCode = `// Hydration in SSR
// Server renders HTML first
<div id="root">
  <h1>Hello World</h1>
</div>

// Client attaches React event listeners on load
hydrateRoot(document.getElementById("root"), <App />);`;

  const serverComponentCode = `// React Server Components (RSC) example
// server/Hello.server.js
export default function Hello() {
  return <h1>Hello from the server</h1>;
}

// client/App.js
import Hello from "../server/Hello.server";
export default function App() {
  return <Hello />;
}
// Runs on server, reduces JS sent to client`;

  const renderingCode = `// Rendering Patterns

// CSR (Client-Side Rendering)
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// SSR (Server-Side Rendering) - Next.js getServerSideProps
export async function getServerSideProps() {
  return { props: { data: "SSR Example" } };
}

// SSG (Static Site Generation)
export async function getStaticProps() {
  return { props: { data: "Pre-rendered at build time" } };
}

// ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  return {
    props: { data: "Revalidated periodically" },
    revalidate: 60 // seconds
  };
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">⚡ Advanced & Architecture in React</h1>
      <p className="mb-4">
        React’s advanced concepts and architectural patterns ensure performance,
        scalability, and maintainability of modern apps. Let’s explore:
      </p>

      {/* Fiber */}
      <h2 className="text-xl font-semibold mt-6">1️⃣ React Fiber Architecture</h2>
      <p className="mb-2">
        Fiber is React’s new reconciliation engine (since v16). It breaks rendering into units of work
        so React can pause/resume rendering for smooth UIs.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {fiberCode}
      </SyntaxHighlighter>

      {/* Diffing */}
      <h2 className="text-xl font-semibold mt-6">2️⃣ Diffing & Reconciliation</h2>
      <p className="mb-2">
        React uses a virtual DOM and compares (diffs) it with the previous tree.
        With <b>keys</b>, React minimizes DOM updates for efficiency.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {diffingCode}
      </SyntaxHighlighter>

      {/* Hydration */}
      <h2 className="text-xl font-semibold mt-6">3️⃣ Hydration</h2>
      <p className="mb-2">
        Hydration is attaching React’s event listeners to server-rendered HTML.
        It’s key in SSR/Next.js for fast initial loads.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {hydrationCode}
      </SyntaxHighlighter>

      {/* Server Components */}
      <h2 className="text-xl font-semibold mt-6">4️⃣ Server Components (React 18+)</h2>
      <p className="mb-2">
        Server Components let you offload rendering logic to the server, reducing client-side JS bundle size.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {serverComponentCode}
      </SyntaxHighlighter>

      {/* Rendering Patterns */}
      <h2 className="text-xl font-semibold mt-6">5️⃣ Rendering Patterns</h2>
      <p className="mb-2">React apps can be rendered in multiple ways depending on use-case:</p>
      <ul className="list-disc ml-6 mb-2">
        <li><b>CSR</b> → All rendering happens in browser.</li>
        <li><b>SSR</b> → Server pre-renders HTML on each request.</li>
        <li><b>SSG</b> → Pages pre-rendered at build time.</li>
        <li><b>ISR</b> → Pages regenerated periodically after build.</li>
      </ul>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {renderingCode}
      </SyntaxHighlighter>

      {/* Summary */}
      <h2 className="text-xl font-semibold mt-6">✅ Summary</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>⚡ Fiber: incremental rendering & scheduling.</li>
        <li>🔄 Reconciliation: efficient diffing with keys.</li>
        <li>💧 Hydration: attach React to SSR HTML.</li>
        <li>🖥️ Server Components: less JS on client.</li>
        <li>🌍 Rendering patterns: CSR, SSR, SSG, ISR.</li>
      </ul>
    </div>
  );
}
