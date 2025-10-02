import React, { Component, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function FunctionalVsClassComponents() {
  return (
    <div className="p-6 animate-fadeIn space-y-10 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">
        Functional vs Class Components
      </h1>

      {/* Functional Component */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">1️⃣ Functional Component (Hooks)</h2>
        <FunctionalExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`function FunctionalExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Functional Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        </SyntaxHighlighter>
      </section>

      {/* Class Component */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">2️⃣ Class Component</h2>
        <ClassExample />

        <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded mt-2">
{`class ClassExample extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <p>Class Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`}
        </SyntaxHighlighter>
      </section>

      {/* Key Differences */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">⚡ Key Differences</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <b>Syntax:</b> Functional components are simple JS functions, Class components use ES6 classes.
          </li>
          <li>
            <b>State:</b> Functional components use <code>useState</code> & other hooks, Class components use <code>this.state</code>.
          </li>
          <li>
            <b>Lifecycles:</b> Functional components use <code>useEffect</code>, Class components use lifecycle methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>).
          </li>
          <li>
            <b>Performance:</b> Functional components are generally more lightweight.
          </li>
          <li>
            <b>Readability:</b> Hooks make functional components easier to write and maintain.
          </li>
        </ul>
      </section>
    </div>
  );
}

// Functional Example
function FunctionalExample() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-2">
      <p className="text-gray-700">Functional Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

// Class Example
class ClassExample extends Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div className="space-y-2">
        <p className="text-gray-700">Class Count: {this.state.count}</p>
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
