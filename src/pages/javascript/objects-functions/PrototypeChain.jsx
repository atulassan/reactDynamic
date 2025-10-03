// PrototypeChain.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PrototypeChain() {
  const jsExample = `// Prototype Chain Example

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return \`Hi, I'm \${this.name}\`;
};

function Employee(name, age, role) {
  Person.call(this, name, age);
  this.role = role;
}

// Set up prototype chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getDetails = function () {
  return \`\${this.greet()}, I am a \${this.role}\`;
};

const emp = new Employee('Alice', 28, 'Developer');
console.log(emp.getDetails()); // Hi, I'm Alice, I am a Developer

// Checking prototype chain
console.log(emp.__proto__ === Employee.prototype); // true
console.log(emp.__proto__.__proto__ === Person.prototype); // true
console.log(emp.__proto__.__proto__.__proto__ === Object.prototype); // true
`;

  const explanation = `// Explanation:
// Every object in JS has a prototype (__proto__)
// Prototype chain is the chain of objects from which properties and methods are inherited
// Employee -> Person -> Object
// If a property/method is not found in the object, JS looks up the chain
`;

  const reactExample = `// React Example: Prototype Chain in action
import React from 'react';

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  getDetails() {
    return \`\${this.greet()}, I am a \${this.role}\`;
  }
}

export default function PrototypeChainExample() {
  const emp = new Employee('Bob', 'Designer');
  return (
    <div className="p-4 border rounded-md">
      <h2>Prototype Chain Example in React</h2>
      <p>{emp.getDetails()}</p>
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Prototype Chain</h1>

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
