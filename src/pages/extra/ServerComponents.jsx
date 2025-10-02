import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ServerComponents() {

const codeExample = `// Server Component (fetches data on server)
export default async function Dashboard() {
  const posts = await fetch("https://api.example.com/posts").then(res => res.json());
  return (
    <div>
      <h1>Posts</h1>
      <ClientWidget posts={posts} /> {/* Client Component */}
    </div>
  );
}

// Client Component
"use client";
import { useState } from "react";

function ClientWidget({ posts }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Total posts: {posts.length}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">Server Components (React 18+)</h1>

      <p className="mb-4">
        React <strong>Server Components (RSC)</strong> are a new feature in React
        18 that allow components to be rendered on the <strong>server</strong>{" "}
        instead of shipping all JavaScript to the client.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">✨ Why Server Components?</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>🚀 Reduce bundle size (they don’t ship JS to the client).</li>
        <li>🔒 Keep sensitive logic & secrets on the server.</li>
        <li>⚡ Enable faster streaming and progressive rendering.</li>
        <li>🔄 Combine with client components for interactivity.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Example</h2>
      <p className="mb-2">Here’s how Server & Client components work together:</p>

    <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
        {codeExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6 mb-2">⚠️ Limitations</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>❌ Cannot use <code>useState</code> or <code>useEffect</code> in Server Components.</li>
        <li>❌ No access to <code>window</code> or <code>document</code>.</li>
        <li>✅ Works best with frameworks like <strong>Next.js 13+ App Router</strong>.</li>
      </ul>

      <p className="mt-6 italic text-gray-600">
        ⚡ In short: Server Components make apps faster, smaller, and more secure by
        moving rendering logic to the server while still allowing interactive client
        components.
      </p>
    </div>
  );
}
