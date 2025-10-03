// AdvancedDataStructures.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AdvancedDataStructures() {
  const jsExample = `// Set
const numbers = new Set([1, 2, 3, 2, 1]);
numbers.add(4);
numbers.delete(2);
console.log(numbers.has(3)); // true
console.log([...numbers]); // [1,3,4]

// Map
const userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'User');
console.log(userRoles.get('Alice')); // Admin
console.log(userRoles.has('Bob')); // true
userRoles.delete('Bob');
console.log(userRoles.size); // 1

// WeakSet
const ws = new WeakSet();
let obj = { name: 'John' };
ws.add(obj);
console.log(ws.has(obj)); // true
obj = null; // weakly referenced object can be GC

// WeakMap
const wm = new WeakMap();
let user = { id: 1 };
wm.set(user, 'Admin');
console.log(wm.get(user)); // Admin
user = null; // weakly referenced object can be GC

// Symbols
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false
const objWithSymbol = { [sym1]: 123 };
console.log(objWithSymbol[sym1]); // 123`;

  const explanation = `// Explanation
// 1. Set: unique values, iterable, add/delete/has
// 2. Map: key-value pairs, any type keys, size, get/set/delete
// 3. WeakSet: weakly referenced objects only, no iteration
// 4. WeakMap: weakly referenced keys, no iteration
// 5. Symbols: unique identifiers, used as object keys`;

  const reactExample = `// React Example: Sets & Maps
import React, { useState } from 'react';

export default function AdvancedDataStructuresReact() {
  const [numbers, setNumbers] = useState(new Set([1,2,3]));
  const addNumber = n => setNumbers(new Set(numbers).add(n));

  const [userRoles, setUserRoles] = useState(new Map([['Alice','Admin']]));
  const addUser = (name, role) => setUserRoles(new Map(userRoles).set(name, role));

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Sets in React</h2>
      <p>{[...numbers].join(', ')}</p>
      <button onClick={() => addNumber(numbers.size + 1)} className="p-2 bg-blue-500 text-white rounded">Add Number</button>

      <h2 className="mt-4">Maps in React</h2>
      <pre>{JSON.stringify([...userRoles.entries()], null, 2)}</pre>
      <button onClick={() => addUser('Bob', 'User')} className="p-2 bg-green-500 text-white rounded">Add User</button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Advanced Data Structures</h1>

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
