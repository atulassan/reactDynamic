import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- A simple component to test ---
function Greeting({ name }) {
  if (!name) throw new Error("Name is required!");
  return <h1>Hello, {name} 👋</h1>;
}

// --- Documentation Component ---
export default function Testing() {
  const codeSetup = `// Install required testing libraries
npm install --save-dev jest @testing-library/react @testing-library/jest-dom`;

  const codeTestGreeting = `// Greeting.test.jsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting with name", () => {
  render(<Greeting name="Athavullah" />);
  expect(screen.getByText(/Hello, Athavullah/i)).toBeInTheDocument();
});

test("throws error when name is missing", () => {
  const renderWithoutName = () => render(<Greeting />);
  expect(renderWithoutName).toThrow("Name is required!");
});`;

  const codeUserEvent = `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments counter on click", async () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /count/i });
  await userEvent.click(button);
  expect(button).toHaveTextContent("Count: 1");
});`;

  const codeMocking = `import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Hello from API" }),
  })
);

test("fetches and displays data", async () => {
  render(<App />);
  const element = await screen.findByText(/Hello from API/);
  expect(element).toBeInTheDocument();
});`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🧪 React Testing (Jest + RTL)</h1>

      <p className="mb-4">
        Testing in React ensures components behave as expected. The most common
        stack is <strong>Jest</strong> (test runner) +{" "}
        <strong>React Testing Library (RTL)</strong> for DOM testing.
      </p>

      {/* Setup */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Setup</h2>
      <SyntaxHighlighter
        language="bash"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeSetup}
      </SyntaxHighlighter>

      {/* Basic Test */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Basic Component Test</h2>
      <p>Testing a simple <code>Greeting</code> component:</p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeTestGreeting}
      </SyntaxHighlighter>

      {/* User Event */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Testing User Events</h2>
      <p>
        Use <code>user-event</code> to simulate clicks, typing, etc. Example:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeUserEvent}
      </SyntaxHighlighter>

      {/* Mocking */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Mocking APIs</h2>
      <p>
        Jest can mock <code>fetch</code> or external APIs for predictable tests:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {codeMocking}
      </SyntaxHighlighter>

      {/* Key Notes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔹 Key Notes</h2>
      <ul className="list-disc list-inside">
        <li>Use <code>screen</code> queries like <code>getByText</code>, <code>findByRole</code>.</li>
        <li><code>user-event</code> is better than <code>fireEvent</code> for simulating real interactions.</li>
        <li>Test behavior (what user sees), not implementation details.</li>
        <li>Mock APIs, timers, or modules with <code>jest.fn()</code>.</li>
      </ul>
    </div>
  );
}
