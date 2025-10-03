// OOPPrinciples.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function OOPPrinciples() {
  const jsExample = `// Object-Oriented Programming (OOP) Principles in JS

// 1. Encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}
const john = new Person('John', 30);
console.log(john.getDetails()); // John is 30 years old

// 2. Inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  getEmployeeDetails() {
    return \`\${this.getDetails()}, Role: \${this.role}\`;
  }
}
const emp = new Employee('Alice', 28, 'Developer');
console.log(emp.getEmployeeDetails()); // Alice is 28 years old, Role: Developer

// 3. Polymorphism
class Shape {
  area() {
    return 0;
  }
}
class Square extends Shape {
  constructor(side) { super(); this.side = side; }
  area() { return this.side * this.side; }
}
const sq = new Square(5);
console.log(sq.area()); // 25

// 4. Abstraction
// Using methods to hide internal details
class BankAccount {
  #balance = 0; // private field
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
`;

  const explanation = `// Explanation of OOP Principles
// 1. Encapsulation: Bundle data and methods; restrict direct access to internal state
// 2. Inheritance: Create new classes based on existing ones
// 3. Polymorphism: Same method name behaves differently depending on object
// 4. Abstraction: Hide implementation details using methods or private fields`;

  const reactExample = `// React Example: OOP Principles
import React from 'react';

// Encapsulation + Inheritance
class ComponentBase extends React.Component {
  log(message) { console.log('Log:', message); }
}

class ButtonComponent extends ComponentBase {
  handleClick = () => {
    this.log('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick} className="p-2 bg-blue-500 text-white rounded">
        Click Me
      </button>
    );
  }
}

export default function OOPExample() {
  return (
    <div className="p-4 border rounded-md">
      <h2>OOP Principles in React</h2>
      <ButtonComponent />
    </div>
  );
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">🛠 OOP Principles in JavaScript</h1>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Examples</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example (OOP)</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>
    </div>
  );
}
