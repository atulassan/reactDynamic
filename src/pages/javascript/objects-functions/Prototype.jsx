// PrototypeInheritance.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PrototypeInheritance() {
  const jsExample = `// Prototype & Inheritance in JavaScript

// Base constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

// Derived constructor
function Employee(name, age, role) {
  Person.call(this, name, age); // Inherit properties
  this.role = role;
}

// Inherit methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add additional method
Employee.prototype.getDetails = function() {
  return \`\${this.greet()}, I work as \${this.role}\`;
};

const emp = new Employee("Alice", 28, "Developer");
console.log(emp.getDetails()); // Hi, I'm Alice, I work as Developer
console.log(emp instanceof Employee); // true
console.log(emp instanceof Person); // true
`;

  const explanation = `// Explanation:
// 1. Prototype-based inheritance allows objects to inherit methods and properties from other objects.
// 2. We use Object.create to set up the prototype chain.
// 3. 'call' is used to inherit properties from the parent constructor.
// 4. instanceof checks inheritance hierarchy.`;

  const reactExample = `// React Example: Using Class Inheritance
import React from 'react';

// Base Component
class PersonComponent extends React.Component {
  greet = () => \`Hi, I'm \${this.props.name}\`;
  render() {
    return <p>{this.greet()}</p>;
  }
}

// Derived Component
class EmployeeComponent extends PersonComponent {
  render() {
    return <p>{this.greet()}, I work as {this.props.role}</p>;
  }
}

export default function PrototypeInheritanceExample() {
  return (
    <div className="p-4 border rounded-md">
      <h2>Prototype & Inheritance in React</h2>
      <EmployeeComponent name="Bob" role="Designer" />
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Prototype & Inheritance</h1>

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
