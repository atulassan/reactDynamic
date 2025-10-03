import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JSX() {
  return (
    <div className="p-6 animate-fadeIn space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">⚡ JSX in React</h1>

      {/* Explanation */}
      <section className="p-4 bg-white rounded shadow">
        <p className="text-gray-700">
          <b>JSX</b> allows you to write HTML-like syntax directly inside JavaScript.
          It is not required, but it makes React code cleaner and easier to read.
        </p>
      </section>

      {/* Example 1: Basic JSX */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">1️⃣ Basic JSX</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`function Hello() {
  return <h1>Hello, JSX!</h1>;
}

// Compiles to:
React.createElement("h1", null, "Hello, JSX!");`}
        </SyntaxHighlighter>

        <Hello />
      </section>

      {/* Example 2: Embedding Expressions */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">2️⃣ Embedding Expressions</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`function Greeting() {
  const name = "Athavullah";
  return <h2>Hello, {name}!</h2>;
}`}
        </SyntaxHighlighter>

        <Greeting />
      </section>

      {/* Example 3: Attributes & Props */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">3️⃣ JSX with Attributes</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`function Profile() {
  const imgUrl = "https://via.placeholder.com/80";
  return <img src={imgUrl} alt="profile" />;
}`}
        </SyntaxHighlighter>

        <Profile />
      </section>

      {/* Example 4: Conditional Rendering */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">4️⃣ Conditional Rendering</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}`}
        </SyntaxHighlighter>

        <UserStatus isLoggedIn={true} />
        <UserStatus isLoggedIn={false} />
      </section>

      {/* Example 5: JSX with Loops */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">5️⃣ JSX with Loops</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
{`function ItemList() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}
        </SyntaxHighlighter>

        <ItemList />
      </section>

      {/* Key Points */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">✅ Key Points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>JSX is syntactic sugar for <code>React.createElement</code>.</li>
          <li>You can embed JavaScript expressions inside <code>{"{}"}</code>.</li>
          <li>Attributes are written in <b>camelCase</b> (<code>className</code>, <code>onClick</code>).</li>
          <li>JSX makes UI components more declarative and easier to debug.</li>
        </ul>
      </section>
    </div>
  );
}

// Example Components
function Hello() {
  return <h1 className="text-xl text-blue-600">Hello, JSX!</h1>;
}

function Greeting() {
  const name = "Athavullah";
  return <h2 className="text-lg text-green-600">Hello, {name}!</h2>;
}

function Profile() {
  const imgUrl = "https://via.placeholder.com/80";
  return <img src={imgUrl} alt="profile" className="rounded-full border" />;
}

function UserStatus({ isLoggedIn }) {
  return (
    <p className="text-gray-700">
      {isLoggedIn ? "Welcome back!" : "Please log in."}
    </p>
  );
}

function ItemList() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <ul className="list-disc pl-6 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
