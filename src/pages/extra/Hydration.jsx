import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hydration() {
  const codeExampleSSR = `// Example: Server-Side Rendered (HTML only)
export default function Home() {
  return <h1>Hello World</h1>;
}

// Server sends HTML:
// <h1>Hello World</h1>`;

  const codeExampleHydration = `// Hydration attaches React to existing HTML
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(document.getElementById("root"), <App />);`;

  const codeExampleMismatch = `// ⚠️ Example of Hydration Mismatch
function Example() {
  const now = new Date().toLocaleTimeString();
  return <p>{now}</p>;
}

// ❌ The server and client may render different times
// leading to a hydration warning in console.`;

  // --- Live demo: Hydration mismatch ---
  function HydrationMismatchDemo() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(
        () => setTime(new Date().toLocaleTimeString()),
        1000
      );
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="border border-red-500 p-4 rounded-lg mt-4">
        <p className="font-mono">
          ⏰ Current Time (client updates every second): <br />
          <span className="text-red-400">{time}</span>
        </p>
        <p className="text-sm mt-2 text-gray-400">
          (When server-rendered HTML shows a different initial time, React logs
          a hydration mismatch warning.)
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">⚡ React Hydration</h1>
      <p className="mb-4">
        <strong>Hydration</strong> is the process where React takes over
        server-rendered HTML and makes it interactive by attaching event
        listeners and reusing the DOM instead of re-rendering from scratch.
      </p>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Server-Side Rendering</h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
        {codeExampleSSR}
      </SyntaxHighlighter>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Hydration in Client</h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
        {codeExampleHydration}
      </SyntaxHighlighter>

      {/* Example 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Hydration Mismatch Example</h2>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
        {codeExampleMismatch}
      </SyntaxHighlighter>

      {/* Live Demo */}
      <h2 className="text-xl font-semibold mt-6 mb-2">⚡ Live Hydration Mismatch Demo</h2>
      <HydrationMismatchDemo />

      <p className="mt-6">
        ✅ To avoid hydration mismatches, ensure that your server-rendered HTML
        matches the initial client render. For dynamic values (like dates), use{" "}
        <code>suppressHydrationWarning</code> or client-only rendering.
      </p>
    </div>
  );
}
