// SetMapWeak.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SetMapWeak() {
  const jsExample = `// Set Example
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicates ignored
console.log(mySet); // Set { 1, 2 }

// Map Example
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
console.log(myMap.get('name')); // Alice

// WeakSet Example (holds only objects, not enumerable)
const ws = new WeakSet();
const obj1 = { id: 1 };
ws.add(obj1);
console.log(ws.has(obj1)); // true

// WeakMap Example (keys must be objects)
const wm = new WeakMap();
const keyObj = { key: 'obj' };
wm.set(keyObj, 'value');
console.log(wm.get(keyObj)); // value
`;

  const explanation = `// Explanation:
// 1. Set: Stores unique values (primitives or object references).
// 2. Map: Stores key-value pairs. Keys can be any type.
// 3. WeakSet: Stores objects only, allows garbage collection, not enumerable.
// 4. WeakMap: Stores key-value pairs with object keys, keys are weakly referenced (GC safe).`;

  const reactExample = `// React Example: Using Set and Map
import React, { useState } from 'react';

export default function SetMapExample() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
  ]);

  // Remove duplicates using Set
  const uniqueIds = Array.from(new Set(users.map(u => u.id)));

  // Map to get names by id
  const idNameMap = new Map(users.map(u => [u.id, u.name]));

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Set & Map Example in React</h2>
      <p>Unique IDs: {uniqueIds.join(', ')}</p>
      <p>Name for ID 2: {idNameMap.get(2)}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Set / Map / WeakSet / WeakMap</h1>

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
