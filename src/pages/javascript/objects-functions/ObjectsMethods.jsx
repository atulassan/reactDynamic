// ObjectsMethods.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ObjectsMethods() {
  const jsExample = `// Objects Examples

// Object creation
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Accessing properties
console.log(person.name); // Dot notation
console.log(person['age']); // Bracket notation

// Adding / Updating properties
person.country = 'USA';
person.age = 31;

// Deleting properties
delete person.city;

// Object.keys, Object.values, Object.entries
console.log(Object.keys(person));   // ['name','age','country']
console.log(Object.values(person)); // ['John',31,'USA']
console.log(Object.entries(person)); // [['name','John'], ['age',31], ['country','USA']]

// Object.assign
const copyPerson = Object.assign({}, person);

// Spread operator
const newPerson = {...person, gender: 'male'};

// Nested objects
const company = {
  name: 'ABC Inc',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};
console.log(company.address.city);

// Optional chaining
console.log(company?.address?.city); // Safe access

// Object.freeze & Object.seal
const frozen = Object.freeze({ a: 1 });
const sealed = Object.seal({ b: 2 });

// Checking properties
console.log('name' in person); // true
console.log(person.hasOwnProperty('age')); // true

// Iteration
for (const key in person) {
  console.log(key, person[key]);
}

// Methods in objects
const calculator = {
  add(a, b) { return a + b; },
  multiply(a, b) { return a * b; }
};
console.log(calculator.add(2,3)); // 5
`;

  const explanation = `// Explanation:
// 1. Object creation: literals, constructor, Object.create
// 2. Access: dot notation, bracket notation
// 3. Modify: add/update, delete
// 4. Iteration: for...in, Object.keys/values/entries
// 5. Copy & Merge: Object.assign, spread
// 6. Nested Objects & Optional chaining
// 7. Freeze & Seal
// 8. Property checking: in, hasOwnProperty
// 9. Methods: defining functions inside objects`;

  const reactExample = `// React Example: Object manipulation in state
import React, { useState } from 'react';

export default function ObjectsReactExample() {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
    city: 'NY'
  });

  const updateAge = () => setPerson({...person, age: person.age + 1});
  const addCountry = () => setPerson({...person, country: 'USA'});
  const deleteCity = () => {
    const { city, ...rest } = person;
    setPerson(rest);
  };

  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2>Objects & Methods in React</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <button onClick={updateAge} className="p-2 bg-blue-500 text-white rounded">Increment Age</button>
      <button onClick={addCountry} className="p-2 bg-green-500 text-white rounded ml-2">Add Country</button>
      <button onClick={deleteCity} className="p-2 bg-red-500 text-white rounded ml-2">Delete City</button>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 JavaScript Objects & Methods</h1>

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
