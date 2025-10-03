import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SOLID() {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">💡 SOLID Principles in JavaScript</h1>
      <p className="mb-8 text-gray-700">
        SOLID is a set of 5 principles to write **clean, maintainable, and scalable code**.
        They are widely used in OOP but also applicable in JavaScript and React.
      </p>

      {/* 1️⃣ Single Responsibility Principle */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">1️⃣ Single Responsibility Principle (SRP)</h2>
        <p className="mb-3 text-gray-700">
          A class or function should have **one responsibility**.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Violation
class User {
  save() { /* save user */ }
  render() { /* render user UI */ }
}

// ✅ Correct
class User {
  save() { /* save user */ }
}

class UserUI {
  render() { /* render user UI */ }
}`}
        </SyntaxHighlighter>
      </section>

      {/* 2️⃣ Open/Closed Principle */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">2️⃣ Open/Closed Principle (OCP)</h2>
        <p className="mb-3 text-gray-700">
          Classes or functions should be **open for extension but closed for modification**.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Violation
function calculate(area) {
  if (area.type === 'circle') return Math.PI * area.radius ** 2;
  if (area.type === 'square') return area.size ** 2;
}

// ✅ Correct using polymorphism
class Shape {
  area() { return 0; }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}

class Square extends Shape {
  constructor(size) { super(); this.size = size; }
  area() { return this.size ** 2; }
}`}
        </SyntaxHighlighter>
      </section>

      {/* 3️⃣ Liskov Substitution Principle */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3️⃣ Liskov Substitution Principle (LSP)</h2>
        <p className="mb-3 text-gray-700">
          Subtypes must be substitutable for their base types without breaking functionality.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`class Bird {
  fly() { console.log("I can fly"); }
}

class Duck extends Bird {}
class Penguin extends Bird {
  fly() { throw new Error("Cannot fly!"); } // ❌ violates LSP
}`}</SyntaxHighlighter>
      </section>

      {/* 4️⃣ Interface Segregation Principle */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">4️⃣ Interface Segregation Principle (ISP)</h2>
        <p className="mb-3 text-gray-700">
          No client should be forced to depend on methods it does not use.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Violation
class Worker {
  work() {}
  eat() {}
}

// ✅ Correct - separate interfaces
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Robot extends Workable {}
class Human extends Workable {
  eat() {}
}`}
        </SyntaxHighlighter>
      </section>

      {/* 5️⃣ Dependency Inversion Principle */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">5️⃣ Dependency Inversion Principle (DIP)</h2>
        <p className="mb-3 text-gray-700">
          High-level modules should not depend on low-level modules. Both should depend on abstractions.
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// ❌ Violation
class Backend {
  fetchData() {}
}

class App {
  constructor() {
    this.backend = new Backend();
  }
}

// ✅ Correct
class IDataService {
  fetchData() {}
}

class BackendService extends IDataService {
  fetchData() {}
}

class App {
  constructor(dataService) {
    this.dataService = dataService;
  }
}`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
