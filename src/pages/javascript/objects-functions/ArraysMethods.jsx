// ArraysMethodsComplete.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ArraysMethodsPlayground from "../../../Components/Modules/ArraysMethodsPlayground";

export default function ArraysMethodsComplete() {
  const jsExample = `// Arrays Examples
const numbers = [1, 2, 3, 4, 5];

// Iteration
numbers.forEach(n => console.log(n));

// Transformation
const doubled = numbers.map(n => n * 2);
const squared = numbers.map(n => n ** 2);

// Filtering
const evens = numbers.filter(n => n % 2 === 0);
const odds = numbers.filter(n => n % 2 !== 0);

// Searching
const three = numbers.find(n => n === 3);
const indexThree = numbers.findIndex(n => n === 3);
const hasFour = numbers.includes(4);

// Aggregation
const sum = numbers.reduce((acc, n) => acc + n, 0);
const product = numbers.reduce((acc, n) => acc * n, 1);

// Boolean Checks
const allPositive = numbers.every(n => n > 0);
const someGreaterThanThree = numbers.some(n => n > 3);

// Modification
numbers.push(6); // add end
numbers.pop();   // remove end
numbers.shift(); // remove start
numbers.unshift(0); // add start
numbers.reverse(); // reverse array
numbers.sort((a,b) => a - b); // sort numbers

// Extraction & Splicing
const sliced = numbers.slice(1,4); // returns new array
numbers.splice(1,2, 99,100); // remove 2 elements and add 99,100

// Searching & Indexing
const firstEven = numbers.find(n => n % 2 === 0);
const lastEvenIndex = numbers.lastIndexOf(2);

// Flattening & Joining
const nested = [[1,2],[3,4]];
const flat = nested.flat();
const joined = numbers.join('-');

// Conversion & Copy
const arrCopy = Array.from(numbers);
const filled = Array(5).fill(0);

// Iterators & Keys/Values/Entries
for (const n of numbers) console.log(n);
for (const [index, value] of numbers.entries()) console.log(index, value);

// Miscellaneous
const arrayStr = numbers.toString();
const arrayLength = numbers.length;
const arrayIsArray = Array.isArray(numbers);
`;

  const explanation = `// Explanation:
// 1. Iteration: forEach, for...of
// 2. Transformation: map, flat, flatMap
// 3. Filtering: filter
// 4. Searching: find, findIndex, includes, indexOf, lastIndexOf
// 5. Aggregation: reduce, reduceRight
// 6. Boolean Checks: every, some
// 7. Modification: push, pop, shift, unshift, reverse, sort, splice
// 8. Extraction: slice
// 9. Conversion: join, toString, Array.from, fill
// 10. Iterators: entries(), keys(), values()
// 11. Utility: length, Array.isArray
`;

  const reactExample = `// React Example: Array Methods in React
import React, { useState } from 'react';

export default function ArraysReactExample() {
  const [numbers, setNumbers] = useState([1,2,3,4,5]);

  const addNumber = () => setNumbers([...numbers, numbers.length + 1]);
  const removeEven = () => setNumbers(numbers.filter(n => n % 2 !== 0));
  const doubleNumbers = () => setNumbers(numbers.map(n => n * 2));
  const resetNumbers = () => setNumbers([1,2,3,4,5]);

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Complete Array Methods in React</h2>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={addNumber} className="p-2 bg-blue-500 text-white rounded">Add Number</button>
      <button onClick={removeEven} className="p-2 bg-red-500 text-white rounded ml-2">Remove Evens</button>
      <button onClick={doubleNumbers} className="p-2 bg-green-500 text-white rounded ml-2">Double</button>
      <button onClick={resetNumbers} className="p-2 bg-gray-500 text-white rounded ml-2">Reset</button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Complete Arrays & Methods in JavaScript</h1>

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

      <ArraysMethodsPlayground />
    </div>
  );
}
