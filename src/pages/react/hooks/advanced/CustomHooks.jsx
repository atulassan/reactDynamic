import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Custom hook for API fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // prevent memory leaks

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default function CustomHooks() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const codeCustomHook = `// custom hook: useFetch.js
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
}

// usage
const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">🛠️ Custom Hooks - API Fetching</h1>

      <p>
        Custom hooks allow you to extract reusable logic from components. Below
        is an example of a <code>useFetch</code> hook to handle API requests.
      </p>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {codeCustomHook}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-semibold mt-6">🔍 Live Example:</h2>
      {loading && <p className="text-yellow-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <ul className="list-disc pl-6">
          {data.map((post) => (
            <li key={post.id} className="mb-1">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
