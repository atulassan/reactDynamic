// TypeCoercionEquality.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TypeCoercionEquality() {
  const jsExample = `// Type Coercion & Equality Examples

// 1. Loose vs Strict Equality
console.log(5 == '5');   // true  (loose equality, type coercion)
console.log(5 === '5');  // false (strict equality, no type coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false

// 2. Falsy Values
const falsy = [false, 0, '', null, undefined, NaN];
falsy.forEach(val => console.log(Boolean(val))); // all false

// 3. Truthy Values
const truthy = [true, 1, 'hello', [], {}, () => {}];
truthy.forEach(val => console.log(Boolean(val))); // all true

// 4. Type coercion in arithmetic
console.log('5' - 2); // 3
console.log('5' + 2); // '52'
console.log(true + 2); // 3
console.log(false + 10); // 10

// 5. Edge cases
console.log([] == 0); // true
console.log([] === 0); // false
console.log([1] == 1); // true
console.log([1] === 1); // false
console.log('' == 0); // true
console.log('' === 0); // false
console.log('0' == false); // true
console.log('0' === false); // false`;

  const explanation = `// Explanation:
// 1. '==' checks for equality after type coercion
// 2. '===' checks for strict equality (no type conversion)
// 3. Falsy values are coerced to false in boolean context
// 4. Type coercion occurs automatically in arithmetic and comparisons
// 5. Be careful with arrays, objects, and empty strings: they behave differently in coercion`;

  const reactExample = `// React Example: Display coerced values
import React, { useState } from 'react';

export default function TypeCoercionReact() {
  const [value, setValue] = useState('');

  const isEqual = value == 5 ? 'Loose Equal to 5' : 'Not Equal';
  const isStrict = value === 5 ? 'Strict Equal to 5' : 'Not Strictly Equal';

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Type Coercion Example</h2>
      <input 
        type="text" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        placeholder="Enter a value" 
        className="p-2 border rounded"
      />
      <p>{isEqual}</p>
      <p>{isStrict}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Type Coercion & Equality in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">JavaScript Examples</h2>
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
