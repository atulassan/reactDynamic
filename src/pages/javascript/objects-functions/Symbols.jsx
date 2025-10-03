// Symbols.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Symbols() {
  const jsExample = `// Symbols in JavaScript

// Creating unique symbols
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false, every symbol is unique

// Using symbols as object keys
const user = {
  name: 'Alice',
  [sym1]: 1234
};

console.log(user[sym1]); // 1234

// Symbol properties are not enumerable
for (let key in user) {
  console.log(key); // only 'name' is logged
}

// Well-known symbols
const iterableObj = {
  items: [1,2,3],
  [Symbol.iterator]() {
    let index = 0;
    const items = this.items;
    return {
      next: () => ({
        value: items[index++],
        done: index > items.length
      })
    };
  }
};

for (const item of iterableObj) {
  console.log(item); // 1, 2, 3
}
`;

  const explanation = `// Explanation:
// 1. Symbols are unique and immutable primitive values in JavaScript.
// 2. They are often used as unique object keys to avoid property name collisions.
// 3. Well-known symbols like Symbol.iterator allow custom iteration behavior.`;

  const reactExample = `// React Example: Using Symbols as Unique Keys
import React from 'react';

const symId1 = Symbol('id1');
const symId2 = Symbol('id2');

const users = [
  { [symId1]: 1, name: 'Alice' },
  { [symId2]: 2, name: 'Bob' }
];

export default function SymbolsExample() {
  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Symbols Example in React</h2>
      {users.map(user => (
        <p key={user[Object.getOwnPropertySymbols(user)[0]]}>
          {user.name} - Unique Key
        </p>
      ))}
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Symbols in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
