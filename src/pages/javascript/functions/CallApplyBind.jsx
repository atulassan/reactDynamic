import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Play } from 'lucide-react';

export default function CallApplyBindGuide() {
  const [activeTab, setActiveTab] = useState('call');
  const [output, setOutput] = useState('');

  const examples = {
    call: {
      title: 'call()',
      description: 'Invokes a function with a given this value and arguments provided individually',
      syntax: `functionName.call(thisArg, arg1, arg2, ...)`,
      code: `// Basic Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + 
           " from " + city + ", " + country;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

// Using call() to invoke person.fullName with person1 as 'this'
person.fullName.call(person1, "Oslo", "Norway");
// Returns: "John Doe from Oslo, Norway"

// Another Example: Borrowing methods
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.call(null, 5, 6, 2, 3, 7);
// Returns: 7

// Constructor chaining
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

const cheese = new Food('feta', 5);
// cheese = { name: 'feta', price: 5, category: 'food' }`,
      useCase: 'Use when you want to invoke a function immediately with a specific context and known arguments'
    },
    apply: {
      title: 'apply()',
      description: 'Invokes a function with a given this value and arguments provided as an array',
      syntax: `functionName.apply(thisArg, [argsArray])`,
      code: `// Basic Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + 
           " from " + city + ", " + country;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Jane"
}

// Using apply() with arguments as array
person.fullName.apply(person1, ["Paris", "France"]);
// Returns: "Mary Jane from Paris, France"

// Practical Example: Math operations with arrays
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
// Returns: 7

const min = Math.min.apply(null, numbers);
// Returns: 2

// Array concatenation
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
Array.prototype.push.apply(array1, array2);
// array1 = [1, 2, 3, 4, 5, 6]

// Function with variable arguments
function greet(greeting, punctuation) {
  return greeting + ', ' + this.name + punctuation;
}

const user = { name: 'Alice' };
const args = ['Hello', '!'];
greet.apply(user, args);
// Returns: "Hello, Alice!"`,
      useCase: 'Use when you have arguments in an array or when the number of arguments is dynamic'
    },
    bind: {
      title: 'bind()',
      description: 'Creates a new function with a given this value and optional preset arguments',
      syntax: `const newFunction = functionName.bind(thisArg, arg1, arg2, ...)`,
      code: `// Basic Example
const person = {
  firstName: "Jane",
  lastName: "Smith",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

// Create a bound function
const getFullName = person.fullName.bind(person);
getFullName(); // Returns: "Jane Smith"

// Partial Application (Currying)
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
double(5); // Returns: 10

const triple = multiply.bind(null, 3);
triple(5); // Returns: 15

// Event Handlers in React/DOM
class Button {
  constructor() {
    this.count = 0;
    // Bind method to preserve 'this' context
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.count++;
    console.log('Clicked:', this.count);
  }
}

// Borrowing methods with preset arguments
function greet(greeting, punctuation) {
  return greeting + ', ' + this.name + punctuation;
}

const user = { name: 'Bob' };
const sayHello = greet.bind(user, 'Hello');
sayHello('!'); // Returns: "Hello, Bob!"
sayHello('?'); // Returns: "Hello, Bob?"

// Function composition
const addTax = function(tax, price) {
  return price + (price * tax);
}.bind(null, 0.1); // 10% tax

addTax(100); // Returns: 110`,
      useCase: 'Use when you need to preserve context for later execution, especially in callbacks and event handlers'
    }
  };

  const comparisonCode = `// Key Differences Summary

// 1. INVOCATION
const obj = { name: 'Test' };

function sayHi(greeting) {
  return greeting + ', ' + this.name;
}

sayHi.call(obj, 'Hello');   // Executes immediately: "Hello, Test"
sayHi.apply(obj, ['Hello']); // Executes immediately: "Hello, Test"
const bound = sayHi.bind(obj, 'Hello'); // Returns function
bound(); // Execute later: "Hello, Test"

// 2. ARGUMENT PASSING
function sum(a, b, c) {
  return a + b + c;
}

sum.call(null, 1, 2, 3);      // Arguments individually
sum.apply(null, [1, 2, 3]);   // Arguments as array
const addOne = sum.bind(null, 1); // Partial arguments
addOne(2, 3); // Returns: 6

// 3. COMMON USE CASES

// call() - Method borrowing
const arr = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(arr, '-'); // "a-b"

// apply() - Math operations with arrays
const nums = [5, 10, 15];
Math.max.apply(null, nums); // 15

// bind() - Event handlers & React
class Component {
  constructor() {
    this.handleClick = this.onClick.bind(this);
  }
  onClick() { /* 'this' is preserved */ }
}

// 4. PERFORMANCE
// bind() creates a new function (memory overhead)
// call() and apply() don't create new functions
// Use call() when possible for better performance`;

  const runExample = (type) => {
    try {
      let result = '';
      switch(type) {
        case 'call':
          const person = {
            fullName: function(city, country) {
              return this.firstName + " " + this.lastName + " from " + city + ", " + country;
            }
          };
          const person1 = { firstName: "John", lastName: "Doe" };
          result = person.fullName.call(person1, "Oslo", "Norway");
          break;
        case 'apply':
          const person2 = {
            fullName: function(city, country) {
              return this.firstName + " " + this.lastName + " from " + city + ", " + country;
            }
          };
          const person3 = { firstName: "Mary", lastName: "Jane" };
          result = person2.fullName.apply(person3, ["Paris", "France"]);
          break;
        case 'bind':
          function multiply(a, b) {
            return a * b;
          }
          const double = multiply.bind(null, 2);
          result = `double(5) = ${double(5)}, double(10) = ${double(10)}`;
          break;
        default:
          result = 'Select an example';
      }
      setOutput(result);
    } catch (e) {
      setOutput(`Error: ${e.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            <Code className="w-10 h-10 text-blue-400" />
            JavaScript: call, apply, bind
          </h1>
          <p className="text-gray-300 text-lg">Comprehensive Reference Guide</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-gray-800 p-2 rounded-lg">
          {Object.keys(examples).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {examples[key].title}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('comparison')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'comparison'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Comparison
          </button>
        </div>

        {/* Content */}
        {activeTab !== 'comparison' ? (
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {examples[activeTab].title}
              </h2>
              <p className="text-gray-100 mb-3">{examples[activeTab].description}</p>
              <div className="bg-black bg-opacity-30 rounded p-3 font-mono text-sm text-gray-100">
                {examples[activeTab].syntax}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-400" />
                  Code Examples
                </h3>
              </div>

              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{ borderRadius: '8px', padding: '20px' }}>
                {examples[activeTab].code}
              </SyntaxHighlighter>

              <div className="mt-6 bg-gray-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">💡 Use Case:</h4>
                <p className="text-gray-300">{examples[activeTab].useCase}</p>
              </div>

              <button
                onClick={() => runExample(activeTab)}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Run Example
              </button>

              {output && (
                <div className="mt-4 bg-gray-900 border border-green-500 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Output:</h4>
                  <pre className="text-gray-200 font-mono text-sm">{output}</pre>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Complete Comparison
              </h2>
              <p className="text-gray-100">Understanding the differences and when to use each</p>
            </div>

            <div className="p-6">
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{ borderRadius: '8px', padding: '20px' }}>
                {comparisonCode}
              </SyntaxHighlighter>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
                  <h4 className="text-blue-400 font-bold mb-2">call()</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Executes immediately</li>
                    <li>• Individual arguments</li>
                    <li>• Method borrowing</li>
                    <li>• Better performance</li>
                  </ul>
                </div>
                <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-2">apply()</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Executes immediately</li>
                    <li>• Array arguments</li>
                    <li>• Dynamic argument count</li>
                    <li>• Math operations</li>
                  </ul>
                </div>
                <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-4">
                  <h4 className="text-purple-400 font-bold mb-2">bind()</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Returns new function</li>
                    <li>• Preserves context</li>
                    <li>• Event handlers</li>
                    <li>• Partial application</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-8 bg-gray-800 rounded-lg shadow-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Quick Decision Guide</h3>
          <div className="space-y-3 text-gray-300">
            <p><span className="text-blue-400 font-semibold">Use call()</span> when you need to execute a function immediately with a specific context and you have the arguments ready.</p>
            <p><span className="text-green-400 font-semibold">Use apply()</span> when you need to execute a function immediately with a specific context and your arguments are in an array.</p>
            <p><span className="text-purple-400 font-semibold">Use bind()</span> when you need to create a new function with a preset context for later execution (callbacks, event handlers).</p>
          </div>
        </div>
      </div>
    </div>
  );
}