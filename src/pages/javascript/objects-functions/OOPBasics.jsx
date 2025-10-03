// InstancesImplementsExtends.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function InstancesImplementsExtends() {
  const jsExample = `// Instances, Implements, Extends in JS

// 1. Instances
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const john = new Person('John', 30); // 'john' is an instance of Person
console.log(john instanceof Person); // true

// 2. Extends (Inheritance)
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  getDetails() {
    return \`\${this.name} is \${this.age} and works as \${this.role}\`;
  }
}
const emp = new Employee('Alice', 28, 'Developer');
console.log(emp.getDetails());

// 3. Implements (via interface simulation using JS)
class InterfaceExample {
  login() { throw "Method 'login()' must be implemented."; }
}
class User extends InterfaceExample {
  login() { return "User logged in"; }
}
const user = new User();
console.log(user.login()); // User logged in
`;

  const explanation = `// Explanation:
// Instances: Objects created from a class
// Extends: Inherit properties and methods from a parent class
// Implements: JavaScript does not have interfaces, but we can simulate using abstract methods`;

  const reactExample = `// React Example: Extends in Class Components
import React from 'react';

// Base Component
class BaseButton extends React.Component {
  handleClick = () => {
    console.log('Button clicked!');
  }
  render() {
    return <button onClick={this.handleClick} className="p-2 bg-green-500 text-white rounded">{this.props.label}</button>;
  }
}

// Extended Component
class FancyButton extends BaseButton {
  render() {
    return <button onClick={this.handleClick} className="p-3 bg-purple-600 text-white rounded-lg">{this.props.label}</button>;
  }
}

export default function OOPInstancesExample() {
  return (
    <div className="p-4 border rounded-md">
      <h2>Instances, Extends & Implements in React</h2>
      <FancyButton label="Click Me!" />
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 Instances, Implements & Extends</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example (Class Extends)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
