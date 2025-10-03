// PrototypeVsClassical.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PrototypeVsClassical() {
  const jsExample = `// 1. Classical Inheritance (using classes)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
}

class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  getDetails() {
    return \`\${this.greet()}, I am a \${this.role}\`;
  }
}

const emp = new Employee('Alice', 28, 'Developer');
console.log(emp.getDetails()); // Hello, my name is Alice, I am a Developer

// 2. Prototype-based Inheritance
function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.greet = function () {
  return \`Hi, I'm \${this.name}\`;
};

function EmployeeProto(name, age, role) {
  PersonProto.call(this, name, age);
  this.role = role;
}

// Inherit prototype
EmployeeProto.prototype = Object.create(PersonProto.prototype);
EmployeeProto.prototype.constructor = EmployeeProto;

EmployeeProto.prototype.getDetails = function () {
  return \`\${this.greet()}, I work as \${this.role}\`;
};

const empProto = new EmployeeProto('Bob', 32, 'Designer');
console.log(empProto.getDetails()); // Hi, I'm Bob, I work as Designer
`;

  const explanation = `// Explanation:
// Classical Inheritance: Uses ES6 classes, constructor + extends, familiar to OOP in other languages
// Prototype-based Inheritance: JS objects inherit directly from other objects using prototypes, more flexible and native to JS
// Key difference: Classes are syntactic sugar over prototype-based inheritance`;

  const reactExample = `// React Example: Class Inheritance
import React from 'react';

class BaseButton extends React.Component {
  handleClick = () => console.log('Button clicked!');
  render() {
    return <button onClick={this.handleClick}>{this.props.label}</button>;
  }
}

class FancyButton extends BaseButton {
  render() {
    return <button onClick={this.handleClick} className="p-2 bg-indigo-500 text-white rounded">
      {this.props.label}
    </button>;
  }
}

export default function InheritanceExample() {
  return (
    <div className="p-4 border rounded-md">
      <h2>Prototype vs Classical Inheritance in React</h2>
      <FancyButton label="Click Me!" />
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🔹 Prototype vs Classical Inheritance</h1>

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
