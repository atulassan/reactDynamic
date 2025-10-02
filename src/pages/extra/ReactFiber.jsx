import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReactFiber() {
  const codeFiberBasics = `// Fiber = A unit of work in React's reconciliation
const fiber = {
  type: MyComponent,
  key: null,
  child: null,
  sibling: null,
  return: parentFiber,
  stateNode: instance,
  pendingProps: props,
  memoizedProps: oldProps,
  alternate: oldFiber
};`;

  const codeConcurrentRendering = `// React Fiber allows splitting rendering work
// into small chunks so UI stays responsive.

function App() {
  return (
    <div>
      <HeavyComponent />  {/* May be paused & resumed */}
      <LightComponent />  {/* Rendered quickly */}
    </div>
  );
}

// With Fiber, React can pause work on HeavyComponent,
// render LightComponent first, then continue later.
`;

  const codePriorityLevels = `// React Fiber assigns priority levels to updates

// High priority (user interactions)
setState({ searchText: "A" });

// Low priority (background work, e.g., prefetching data)
startTransition(() => {
  setState({ searchResults: bigList });
});`;

  const codeUseTransition = `import { useState, useTransition } from "react";

function SearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    // Mark update as low-priority
    startTransition(() => {
      const filtered = bigList.filter(item => item.includes(value));
      setResults(filtered);
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map(r => <li key={r}>{r}</li>)}
      </ul>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚛️ React Fiber Architecture</h1>

      <p className="mb-4">
        <strong>React Fiber</strong> is a complete rewrite of React's
        reconciliation algorithm (introduced in React 16). Its main purpose is
        to make React <u>asynchronous, interruptible, and prioritized</u>. This
        allows React to split rendering work into chunks and keep apps
        responsive.
      </p>

      {/* Fiber basics */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 What is a Fiber?</h2>
      <p className="mb-2">
        Each element in your React tree is represented by a <em>Fiber node</em>.
        A Fiber stores information about:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The component type (function/class/host DOM)</li>
        <li>Props & state</li>
        <li>Parent / child / sibling relations</li>
        <li>Work to do (update, delete, create)</li>
      </ul>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeFiberBasics}
      </SyntaxHighlighter>

      {/* Concurrent rendering */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Concurrent Rendering (Time Slicing)
      </h2>
      <p className="mb-2">
        Fiber lets React <strong>pause and resume rendering</strong>. For
        example:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeConcurrentRendering}
      </SyntaxHighlighter>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`UI Thread Timeline:
[Render start] --- HeavyComponent paused ---
               ---> LightComponent rendered
               ---> Resume HeavyComponent`}
      </pre>

      {/* Priority Levels */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Update Priority Levels
      </h2>
      <p className="mb-2">
        React Fiber categorizes work by priority so urgent updates (like typing)
        are processed before less important ones (like rendering a long list).
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codePriorityLevels}
      </SyntaxHighlighter>

      {/* Example: useTransition */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔹 Example: useTransition (Concurrent Feature)
      </h2>
      <p className="mb-2">
        With <code>useTransition</code>, you can mark certain updates as
        <em>non-urgent</em>. Fiber ensures urgent updates (typing) happen first.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeUseTransition}
      </SyntaxHighlighter>

      <p className="mt-6">
        ✅ <strong>In short</strong>: Fiber = work scheduler for React. It makes
        rendering:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Interruptible (can pause rendering)</li>
        <li>Prioritized (urgent work first)</li>
        <li>Re-usable (work in progress can be reused)</li>
      </ul>
    </div>
  );
}
