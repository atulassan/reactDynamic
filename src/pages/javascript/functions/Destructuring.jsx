// Destructuring.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Destructuring() {
  const jsExample = `// Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

// Default value
const [a, b, c = 10] = [5, 6];
console.log(c); // 10

// Object Destructuring
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, age, city, country = "Unknown" } = person;
console.log(name, age, city, country); // Alice 25 Paris Unknown

// Nested Destructuring
const data = { user: { id: 1, username: "John" }, tags: ["js", "react"] };
const { user: { id, username }, tags: [firstTag, secondTag] } = data;
console.log(id, username, firstTag, secondTag); // 1 John js react

// Function Parameters Destructuring
function greet({ name, age }) {
  console.log(\`Hello \${name}, you are \${age} years old\`);
}
greet(person);`;

  const explanation = `// Explanation
// 1. Array destructuring extracts values by position.
// 2. Object destructuring extracts values by key name.
// 3. Default values can be provided in case of undefined.
// 4. Nested destructuring allows extracting from deep objects/arrays.
// 5. Function parameter destructuring allows directly accessing object properties.`;

  const reactExample = `// React Example: Destructuring Props & State
import React, { useState } from 'react';

function UserCard({ user }) {
  const { name, age, city } = user; // Object destructuring
  const [count, setCount] = useState(0); // Array destructuring (state)

  return (
    <div className="p-4 border rounded-md">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </div>
  );
}

export default function App() {
  const person = { name: "Alice", age: 25, city: "Paris" };
  return <UserCard user={person} />;
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 JavaScript Destructuring</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Examples</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
