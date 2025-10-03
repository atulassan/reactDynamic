import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function RenderingPatterns() {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">⚡ Rendering Patterns in React</h1>
      <p className="text-gray-700 mb-8">
        React applications can be rendered in multiple ways depending on the project
        requirements (performance, SEO, user experience). Let's explore CSR, SSR, SSG, and ISR.
      </p>

      {/* CSR */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">1️⃣ Client-Side Rendering (CSR)</h2>
        <p className="mb-3 text-gray-700">
          - The entire app is loaded in the **browser**.  
          - Only a minimal HTML shell is served, and React takes over after JavaScript loads.  
          - Great for **SPA apps**, but not SEO-friendly until hydrated.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// index.html (served by server)
<div id="root"></div>
<script src="bundle.js"></script>

// React mounts after JS loads
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`}
        </SyntaxHighlighter>
      </section>

      {/* SSR */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">2️⃣ Server-Side Rendering (SSR)</h2>
        <p className="mb-3 text-gray-700">
          - HTML is **generated on the server per request** and sent to the client.  
          - Improves SEO and faster first paint.  
          - Requires server infra.  
          - Common in frameworks like **Next.js**.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Next.js SSR Example
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

export default function Page({ data }) {
  return <div>Fetched: {data.value}</div>;
}`}
        </SyntaxHighlighter>
      </section>

      {/* SSG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3️⃣ Static Site Generation (SSG)</h2>
        <p className="mb-3 text-gray-700">
          - Pages are **built at build-time** (pre-rendered as static HTML).  
          - Super fast and **SEO-friendly**.  
          - Best for blogs, docs, or content that doesn’t change often.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Next.js SSG Example
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}`}
        </SyntaxHighlighter>
      </section>

      {/* ISR */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">4️⃣ Incremental Static Regeneration (ISR)</h2>
        <p className="mb-3 text-gray-700">
          - Combines **SSG + on-demand updates**.  
          - Static pages are built at build time, but revalidated in the background
            after a certain interval.  
          - Used in **Next.js** for dynamic content that still needs speed.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Next.js ISR Example
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/news");
  const news = await res.json();

  return {
    props: { news },
    revalidate: 10, // re-build page every 10s
  };
}

export default function News({ news }) {
  return <div>{news.title}</div>;
}`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
