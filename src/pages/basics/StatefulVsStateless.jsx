import React, { Component, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StatefulVsStateless() {
  return (
    <div className="p-6 animate-fadeIn space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">Stateful vs Stateless Components</h1>

      {/* Stateless Component */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">1️⃣ Stateless Component</h2>
        <StatelessExample name="Athavullah" />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
          {`function StatelessExample({ name }) {
  return <p>Hello, {name}!</p>;
}`}</SyntaxHighlighter>
      </section>

      {/* Stateful Class Component */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">2️⃣ Stateful Class Component</h2>
        <StatefulClassExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
          {`class StatefulClassExample extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`}</SyntaxHighlighter>
      </section>

      {/* Functional Stateful Component with Hooks */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">3️⃣ Functional Stateful Component (Hooks)</h2>
        <FunctionalStatefulExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
          {`function FunctionalStatefulExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</SyntaxHighlighter>
      </section>
    </div>
  );
}

// Stateless Example
function StatelessExample({ name }) {
  return <p className="text-gray-700">Hello, {name}!</p>;
}

// Stateful Class Example
class StatefulClassExample extends Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div className="space-y-2">
        <p className="text-gray-700">Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
      </div>
    );
  }
}

// Functional Stateful Example with Hooks
function FunctionalStatefulExample() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-2">
      <p className="text-gray-700">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}
