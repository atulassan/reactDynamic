import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseEffectVsUseLayoutEffect() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  // Example 1: useEffect runs after render (default side effect)
  useEffect(() => {
    console.log("useEffect: Document title updated");
    document.title = `Clicked ${count} times`;
  }, [count]);

  // Example 2: useEffect for interval / async
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running, count:", count);
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  // Example 3: useLayoutEffect runs before painting the screen
  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.getBoundingClientRect().width);
    }
  }, [count]);

  const codeExample = `// useEffect example
useEffect(() => {
  console.log("Runs after render");
  document.title = \`Clicked \${count} times\`;
}, [count]);

// useLayoutEffect example
useLayoutEffect(() => {
  console.log("Runs before painting the screen");
  if (divRef.current) {
    setWidth(divRef.current.getBoundingClientRect().width);
  }
}, [count]);`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">📌 useEffect vs useLayoutEffect</h1>
      <p>
        <code>useEffect</code> runs <strong>after painting the DOM</strong>, suitable for async
        operations, data fetching, or side effects that don't block rendering.  
        <code>useLayoutEffect</code> runs <strong>before painting</strong>, useful for
        measuring DOM elements or synchronously applying changes to layout.
      </p>

      {/* Example 1: Count and document title */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Document title update</h2>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Click Me ({count})
        </button>
        <p>Check the browser tab title—it updates after render using <code>useEffect</code>.</p>
      </section>

      {/* Example 2: Measuring DOM with useLayoutEffect */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Measuring DOM before paint</h2>
        <div
          ref={divRef}
          className="p-4 bg-gray-200 rounded"
          style={{ width: count * 20 + 100 }}
        >
          Width of this box is: {width}px
        </div>
        <p>
          The width updates <strong>synchronously</strong> before painting using{" "}
          <code>useLayoutEffect</code>. Resize happens instantly without flicker.
        </p>
      </section>

      {/* Example 3: Interval / async operation */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Interval / Async Side Effect</h2>
        <p>
          Using <code>useEffect</code> to run async operations like timers or API calls:
        </p>
        <p>Open the console to see interval logs updating every 2 seconds.</p>
      </section>

      {/* Syntax Highlighting */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Code Example</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeExample}
        </SyntaxHighlighter>
      </section>

      {/* Notes */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Key Notes</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>useEffect:</strong> After render, async safe, DOM ready.
          </li>
          <li>
            <strong>useLayoutEffect:</strong> Before paint, synchronous, avoids flickering
            when measuring DOM.
          </li>
          <li>
            For server-side rendering (SSR), <code>useEffect</code> runs normally, but{" "}
            <code>useLayoutEffect</code> is ignored (React warns).
          </li>
        </ul>
      </section>
    </div>
  );
}
