import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Play, Lock, Eye, RefreshCw, Layers, Box } from 'lucide-react';

export default function OOPPrinciplesGuide() {
  const [activeTab, setActiveTab] = useState('encapsulation');
  const [output, setOutput] = useState('');

  const principles = {
    encapsulation: {
      title: 'Encapsulation',
      icon: Lock,
      description: 'Bundling data and methods that operate on that data within a single unit, hiding internal details',
      color: 'from-blue-600 to-cyan-600',
      code: `// 1. Using Closures for Private Variables
function BankAccount(initialBalance) {
  // Private variable (closure)
  let balance = initialBalance;
  
  // Public methods
  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount;
      return \`Deposited: $\${amount}. New balance: $\${balance}\`;
    }
    return 'Invalid amount';
  };
  
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return \`Withdrawn: $\${amount}. New balance: $\${balance}\`;
    }
    return 'Insufficient funds';
  };
  
  this.getBalance = function() {
    return balance;
  };
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500); // "Deposited: $500. New balance: $1500"
// account.balance is not accessible directly!

// 2. ES6 Classes with Private Fields
class User {
  #password; // Private field (ES2022)
  
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }
  
  #hashPassword(pwd) { // Private method
    return 'hashed_' + pwd;
  }
  
  authenticate(pwd) {
    return this.#password === pwd;
  }
  
  changePassword(oldPwd, newPwd) {
    if (this.#password === oldPwd) {
      this.#password = this.#hashPassword(newPwd);
      return 'Password changed successfully';
    }
    return 'Incorrect password';
  }
}

const user = new User('john', 'secret123');
console.log(user.username); // 'john'
// console.log(user.#password); // SyntaxError!
user.authenticate('secret123'); // true

// 3. WeakMap Pattern for Privacy
const _privateData = new WeakMap();

class Person {
  constructor(name, ssn) {
    this.name = name;
    _privateData.set(this, { ssn });
  }
  
  getSSN() {
    return _privateData.get(this).ssn;
  }
}

const person = new Person('Alice', '123-45-6789');
console.log(person.name); // 'Alice'
console.log(person.ssn); // undefined
console.log(person.getSSN()); // '123-45-6789'`,
      example: () => {
        class BankAccount {
          #balance;
          
          constructor(initial) {
            this.#balance = initial;
          }
          
          deposit(amount) {
            this.#balance += amount;
            return `Balance: $${this.#balance}`;
          }
          
          getBalance() {
            return this.#balance;
          }
        }
        
        const acc = new BankAccount(1000);
        acc.deposit(500);
        return `Balance: $${acc.getBalance()}`;
      },
      keyPoints: [
        'Hide internal implementation details',
        'Expose only necessary interfaces',
        'Prevent unauthorized access to data',
        'Use private fields (#) or closures',
        'Control how data is accessed and modified'
      ]
    },
    abstraction: {
      title: 'Abstraction',
      icon: Eye,
      description: 'Hiding complex implementation details and showing only essential features',
      color: 'from-purple-600 to-pink-600',
      code: `// 1. Abstract Base Class Pattern
class Vehicle {
  constructor(brand) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract class can't be instantiated");
    }
    this.brand = brand;
  }
  
  // Abstract method (must be implemented by subclasses)
  start() {
    throw new Error("Method 'start()' must be implemented");
  }
  
  // Concrete method
  displayBrand() {
    return \`Brand: \${this.brand}\`;
  }
}

class Car extends Vehicle {
  start() {
    return \`\${this.brand} car engine started\`;
  }
}

class Motorcycle extends Vehicle {
  start() {
    return \`\${this.brand} motorcycle engine started\`;
  }
}

const car = new Car('Toyota');
console.log(car.start()); // "Toyota car engine started"
// const vehicle = new Vehicle('Generic'); // Error!

// 2. Interface-like Pattern using Symbols
const PaymentInterface = {
  processPayment: Symbol('processPayment'),
  refund: Symbol('refund')
};

class CreditCardPayment {
  [PaymentInterface.processPayment](amount) {
    return \`Processing credit card payment: $\${amount}\`;
  }
  
  [PaymentInterface.refund](amount) {
    return \`Refunding credit card: $\${amount}\`;
  }
}

class PayPalPayment {
  [PaymentInterface.processPayment](amount) {
    return \`Processing PayPal payment: $\${amount}\`;
  }
  
  [PaymentInterface.refund](amount) {
    return \`Refunding PayPal: $\${amount}\`;
  }
}

// 3. Abstraction through Modules
class Database {
  // Abstract complex operations
  static async fetchUser(id) {
    // Complex SQL queries, connection handling, etc.
    // All hidden from the user
    return { id, name: 'John Doe' };
  }
  
  static async saveUser(userData) {
    // Complex validation, sanitization, transactions
    // User doesn't need to know the details
    return { success: true, id: 123 };
  }
}

// Simple interface for users
const user = await Database.fetchUser(1);
const result = await Database.saveUser({ name: 'Jane' });

// 4. Factory Pattern for Abstraction
class ShapeFactory {
  static createShape(type, ...args) {
    switch(type) {
      case 'circle':
        return new Circle(...args);
      case 'rectangle':
        return new Rectangle(...args);
      default:
        throw new Error('Unknown shape');
    }
  }
}

class Circle {
  constructor(radius) { this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() { return this.width * this.height; }
}

// User doesn't need to know about Circle/Rectangle classes
const shape1 = ShapeFactory.createShape('circle', 5);
const shape2 = ShapeFactory.createShape('rectangle', 4, 6);`,
      example: () => {
        class Animal {
          constructor(name) {
            if (this.constructor === Animal) {
              throw new Error("Cannot instantiate abstract class");
            }
            this.name = name;
          }
          
          makeSound() {
            throw new Error("Must implement makeSound");
          }
        }
        
        class Dog extends Animal {
          makeSound() {
            return `${this.name} says: Woof!`;
          }
        }
        
        const dog = new Dog('Buddy');
        return dog.makeSound();
      },
      keyPoints: [
        'Hide complex implementation details',
        'Provide simple interfaces',
        'Focus on what an object does, not how',
        'Use abstract classes or interfaces',
        'Reduce complexity for users'
      ]
    },
    inheritance: {
      title: 'Inheritance',
      icon: Layers,
      description: 'Creating new classes from existing ones, inheriting properties and methods',
      color: 'from-green-600 to-teal-600',
      code: `// 1. ES6 Class Inheritance
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    return \`\${this.name} is eating\`;
  }
  
  sleep() {
    return \`\${this.name} is sleeping\`;
  }
  
  getInfo() {
    return \`Name: \${this.name}, Age: \${this.age}\`;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    return \`\${this.name} says: Woof!\`;
  }
  
  // Method overriding
  getInfo() {
    return \`\${super.getInfo()}, Breed: \${this.breed}\`;
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  
  meow() {
    return \`\${this.name} says: Meow!\`;
  }
  
  getInfo() {
    return \`\${super.getInfo()}, Color: \${this.color}\`;
  }
}

const dog = new Dog('Max', 3, 'Golden Retriever');
console.log(dog.eat()); // "Max is eating"
console.log(dog.bark()); // "Max says: Woof!"
console.log(dog.getInfo()); // "Name: Max, Age: 3, Breed: Golden Retriever"

// 2. Prototypal Inheritance (ES5 Style)
function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.start = function() {
  return \`\${this.brand} vehicle started\`;
};

function Car(brand, model) {
  Vehicle.call(this, brand); // Call parent constructor
  this.model = model;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
  return \`Driving \${this.brand} \${this.model}\`;
};

const car = new Car('Toyota', 'Camry');
console.log(car.start()); // "Toyota vehicle started"
console.log(car.drive()); // "Driving Toyota Camry"

// 3. Multi-level Inheritance
class LivingBeing {
  constructor(name) {
    this.name = name;
  }
  
  breathe() {
    return \`\${this.name} is breathing\`;
  }
}

class Mammal extends LivingBeing {
  constructor(name, hasHair) {
    super(name);
    this.hasHair = hasHair;
  }
  
  feedYoung() {
    return \`\${this.name} feeds its young\`;
  }
}

class Human extends Mammal {
  constructor(name, language) {
    super(name, true);
    this.language = language;
  }
  
  speak() {
    return \`\${this.name} speaks \${this.language}\`;
  }
}

const human = new Human('Alice', 'English');
console.log(human.breathe()); // "Alice is breathing"
console.log(human.feedYoung()); // "Alice feeds its young"
console.log(human.speak()); // "Alice speaks English"

// 4. Mixin Pattern (Multiple Inheritance Alternative)
const SwimMixin = {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

const FlyMixin = {
  fly() {
    return \`\${this.name} is flying\`;
  }
};

class Duck extends Animal {
  constructor(name) {
    super(name, 1);
  }
}

// Add mixins
Object.assign(Duck.prototype, SwimMixin, FlyMixin);

const duck = new Duck('Donald');
console.log(duck.swim()); // "Donald is swimming"
console.log(duck.fly()); // "Donald is flying"`,
      example: () => {
        class Vehicle {
          constructor(brand) {
            this.brand = brand;
          }
          
          start() {
            return `${this.brand} started`;
          }
        }
        
        class Car extends Vehicle {
          constructor(brand, model) {
            super(brand);
            this.model = model;
          }
          
          drive() {
            return `Driving ${this.brand} ${this.model}`;
          }
        }
        
        const car = new Car('Tesla', 'Model 3');
        return `${car.start()}, ${car.drive()}`;
      },
      keyPoints: [
        'Reuse code from parent classes',
        'Create hierarchical relationships',
        'Use extends keyword in ES6',
        'Call super() in child constructor',
        'Override parent methods when needed'
      ]
    },
    polymorphism: {
      title: 'Polymorphism',
      icon: RefreshCw,
      description: 'Objects of different types can be accessed through the same interface',
      color: 'from-orange-600 to-red-600',
      code: `// 1. Method Overriding (Runtime Polymorphism)
class Shape {
  constructor(name) {
    this.name = name;
  }
  
  area() {
    return 0;
  }
  
  describe() {
    return \`This is a \${this.name}\`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }
  
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super('Triangle');
    this.base = base;
    this.height = height;
  }
  
  area() {
    return (this.base * this.height) / 2;
  }
}

// Polymorphism in action
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 8)
];

shapes.forEach(shape => {
  console.log(\`\${shape.describe()}: Area = \${shape.area().toFixed(2)}\`);
});

// 2. Duck Typing (JavaScript's Dynamic Nature)
class Bird {
  fly() {
    return 'Bird is flying';
  }
}

class Airplane {
  fly() {
    return 'Airplane is flying';
  }
}

class Helicopter {
  fly() {
    return 'Helicopter is flying';
  }
}

function makeItFly(flyingObject) {
  // Don't care about the type, just needs fly() method
  return flyingObject.fly();
}

console.log(makeItFly(new Bird())); // "Bird is flying"
console.log(makeItFly(new Airplane())); // "Airplane is flying"
console.log(makeItFly(new Helicopter())); // "Helicopter is flying"

// 3. Parametric Polymorphism (Generics simulation)
class Collection {
  constructor() {
    this.items = [];
  }
  
  add(item) {
    this.items.push(item);
  }
  
  get(index) {
    return this.items[index];
  }
  
  forEach(callback) {
    this.items.forEach(callback);
  }
}

// Works with any type
const numbers = new Collection();
numbers.add(1);
numbers.add(2);

const strings = new Collection();
strings.add('hello');
strings.add('world');

const objects = new Collection();
objects.add({ name: 'John' });
objects.add({ name: 'Jane' });

// 4. Method Overloading Simulation
class Calculator {
  add(...args) {
    // Polymorphic behavior based on arguments
    if (args.length === 2) {
      return args[0] + args[1];
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2];
    } else if (Array.isArray(args[0])) {
      return args[0].reduce((sum, val) => sum + val, 0);
    }
    return 0;
  }
  
  calculate(operation, ...numbers) {
    switch(operation) {
      case 'add':
        return numbers.reduce((sum, n) => sum + n, 0);
      case 'multiply':
        return numbers.reduce((prod, n) => prod * n, 1);
      case 'subtract':
        return numbers.reduce((diff, n) => diff - n);
      default:
        return 0;
    }
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.add(5, 3, 2)); // 10
console.log(calc.add([1, 2, 3, 4])); // 10

// 5. Interface-like Polymorphism
class PaymentProcessor {
  static process(payment) {
    // Works with any object that has a process() method
    return payment.process();
  }
}

class CreditCard {
  process() {
    return 'Processing credit card payment';
  }
}

class PayPal {
  process() {
    return 'Processing PayPal payment';
  }
}

class Cryptocurrency {
  process() {
    return 'Processing crypto payment';
  }
}

const payments = [new CreditCard(), new PayPal(), new Cryptocurrency()];
payments.forEach(payment => {
  console.log(PaymentProcessor.process(payment));
});`,
      example: () => {
        class Animal {
          makeSound() {
            return 'Some sound';
          }
        }
        
        class Dog extends Animal {
          makeSound() {
            return 'Woof!';
          }
        }
        
        class Cat extends Animal {
          makeSound() {
            return 'Meow!';
          }
        }
        
        const animals = [new Dog(), new Cat(), new Dog()];
        return animals.map(a => a.makeSound()).join(', ');
      },
      keyPoints: [
        'Same interface, different implementations',
        'Method overriding for runtime polymorphism',
        'Duck typing in JavaScript',
        'Works with inheritance hierarchy',
        'Enables flexible and reusable code'
      ]
    },
    composition: {
      title: 'Composition',
      icon: Box,
      description: 'Building complex objects by combining simpler ones (favor composition over inheritance)',
      color: 'from-indigo-600 to-purple-600',
      code: `// 1. Basic Composition
class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }
  
  start() {
    return \`Engine with \${this.horsepower}hp started\`;
  }
  
  stop() {
    return 'Engine stopped';
  }
}

class Wheels {
  constructor(count) {
    this.count = count;
  }
  
  rotate() {
    return \`\${this.count} wheels rotating\`;
  }
}

class GPS {
  navigate(destination) {
    return \`Navigating to \${destination}\`;
  }
}

// Car is composed of Engine, Wheels, and GPS
class Car {
  constructor(brand, horsepower) {
    this.brand = brand;
    this.engine = new Engine(horsepower);
    this.wheels = new Wheels(4);
    this.gps = new GPS();
  }
  
  start() {
    return \`\${this.brand}: \${this.engine.start()}\`;
  }
  
  drive(destination) {
    return \`\${this.wheels.rotate()}. \${this.gps.navigate(destination)}\`;
  }
}

const car = new Car('Tesla', 450);
console.log(car.start()); // "Tesla: Engine with 450hp started"
console.log(car.drive('New York')); // "4 wheels rotating. Navigating to New York"

// 2. Function Composition
const canEat = (state) => ({
  eat: (food) => {
    console.log(\`Eating \${food}\`);
    state.energy += 10;
  }
});

const canSleep = (state) => ({
  sleep: (hours) => {
    console.log(\`Sleeping \${hours} hours\`);
    state.energy += hours * 5;
  }
});

const canWalk = (state) => ({
  walk: (distance) => {
    console.log(\`Walking \${distance}km\`);
    state.energy -= distance * 2;
  }
});

// Compose behaviors
const createPerson = (name) => {
  const state = {
    name,
    energy: 100
  };
  
  return Object.assign(
    {},
    { getEnergy: () => state.energy },
    canEat(state),
    canSleep(state),
    canWalk(state)
  );
};

const person = createPerson('John');
person.eat('pizza');
person.walk(5);
person.sleep(8);
console.log(person.getEnergy());

// 3. Mixin Composition Pattern
const withLogging = (Base) => class extends Base {
  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }
};

const withValidation = (Base) => class extends Base {
  validate(data) {
    return data !== null && data !== undefined;
  }
};

const withSerialization = (Base) => class extends Base {
  serialize() {
    return JSON.stringify(this);
  }
  
  deserialize(json) {
    return JSON.parse(json);
  }
};

class DataModel {
  constructor(data) {
    this.data = data;
  }
}

// Compose multiple behaviors
const EnhancedModel = withSerialization(
  withValidation(
    withLogging(DataModel)
  )
);

const model = new EnhancedModel({ id: 1, name: 'Test' });
model.log('Model created');
console.log(model.validate(model.data));
console.log(model.serialize());

// 4. Dependency Injection through Composition
class Logger {
  log(message) {
    console.log(\`LOG: \${message}\`);
  }
}

class Database {
  connect() {
    return 'Connected to database';
  }
  
  query(sql) {
    return \`Executing: \${sql}\`;
  }
}

class Cache {
  get(key) {
    return \`Getting \${key} from cache\`;
  }
  
  set(key, value) {
    return \`Setting \${key} in cache\`;
  }
}

class UserService {
  constructor(logger, database, cache) {
    this.logger = logger;
    this.db = database;
    this.cache = cache;
  }
  
  getUser(id) {
    this.logger.log(\`Fetching user \${id}\`);
    
    const cached = this.cache.get(\`user:\${id}\`);
    if (cached) return cached;
    
    const result = this.db.query(\`SELECT * FROM users WHERE id=\${id}\`);
    this.cache.set(\`user:\${id}\`, result);
    return result;
  }
}

const userService = new UserService(
  new Logger(),
  new Database(),
  new Cache()
);

// 5. Object Composition vs Class Inheritance
// Instead of:
// class FlyingCar extends Car, Airplane { } // Not possible!

// Use composition:
class FlyingCar {
  constructor() {
    this.car = new Car('Flying DeLorean', 300);
    this.wings = { extend: () => 'Wings extended' };
  }
  
  drive() {
    return this.car.start();
  }
  
  fly() {
    return \`\${this.wings.extend()}. Taking off!\`;
  }
}

const flyingCar = new FlyingCar();
console.log(flyingCar.drive());
console.log(flyingCar.fly());`,
      example: () => {
        class Logger {
          log(msg) { return `[LOG] ${msg}`; }
        }
        
        class Database {
          save(data) { return `Saved: ${data}`; }
        }
        
        class UserService {
          constructor() {
            this.logger = new Logger();
            this.db = new Database();
          }
          
          createUser(name) {
            this.logger.log(`Creating user: ${name}`);
            return this.db.save(name);
          }
        }
        
        const service = new UserService();
        return service.createUser('Alice');
      },
      keyPoints: [
        'Combine objects to create complex functionality',
        'More flexible than inheritance',
        'Favor composition over inheritance',
        'Enables better code reuse',
        'Easier to test and maintain'
      ]
    }
  };

  const runExample = () => {
    try {
      const result = principles[activeTab].example();
      setOutput(result);
    } catch (e) {
      setOutput(`Error: ${e.message}`);
    }
  };

  const IconComponent = principles[activeTab].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            <Code className="w-12 h-12 text-blue-400" />
            OOP Principles in JavaScript
          </h1>
          <p className="text-gray-300 text-xl">Complete Guide with Interactive Examples</p>
        </div>

        {/* Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.entries(principles).map(([key, principle]) => {
            const Icon = principle.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  activeTab === key
                    ? 'bg-gradient-to-r ' + principle.color + ' text-white shadow-xl'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">{principle.title}</div>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${principles[activeTab].color} p-8`}>
            <div className="flex items-center gap-4 mb-4">
              <IconComponent className="w-12 h-12 text-white" />
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {principles[activeTab].title}
                </h2>
                <p className="text-gray-100 text-lg mt-2">
                  {principles[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-green-400" />
                Code Examples
              </h3>
            </div>

            <SyntaxHighlighter 
              language="javascript" 
              style={oneDark}
              customStyle={{ 
                borderRadius: '12px', 
                padding: '24px',
                fontSize: '14px'
              }}
            >
              {principles[activeTab].code}
            </SyntaxHighlighter>

            {/* Key Points */}
            <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Key Points
              </h4>
              <ul className="space-y-2">
                {principles[activeTab].keyPoints.map((point, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Run Example Button */}
            <button
              onClick={runExample}
              className={`mt-8 w-full bg-gradient-to-r ${principles[activeTab].color} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 text-lg shadow-lg`}
            >
              <Play className="w-6 h-6" />
              Run Interactive Example
            </button>

            {/* Output */}
            {output && (
              <div className="mt-6 bg-gray-900 border-2 border-green-500 rounded-xl p-6">
                <h4 className="text-green-400 font-bold mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">✓</span> Output:
                </h4>
                <pre className="text-gray-200 font-mono text-sm whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-8 bg-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 OOP Principles Quick Reference
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-5 border border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-8 h-8 text-blue-300" />
                <h4 className="text-blue-200 font-bold text-lg">Encapsulation</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Bundle data + methods, hide internals</p>
              <code className="text-blue-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                #privateField<br/>
                _privateMethod()
              </code>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-5 border border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-8 h-8 text-purple-300" />
                <h4 className="text-purple-200 font-bold text-lg">Abstraction</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Hide complexity, show essentials</p>
              <code className="text-purple-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                Abstract classes<br/>
                Interface patterns
              </code>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-5 border border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-8 h-8 text-green-300" />
                <h4 className="text-green-200 font-bold text-lg">Inheritance</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Reuse code through hierarchies</p>
              <code className="text-green-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                class Child extends Parent<br/>
                super()
              </code>
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-xl p-5 border border-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <RefreshCw className="w-8 h-8 text-orange-300" />
                <h4 className="text-orange-200 font-bold text-lg">Polymorphism</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Same interface, different behavior</p>
              <code className="text-orange-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                Method overriding<br/>
                Duck typing
              </code>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl p-5 border border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <Box className="w-8 h-8 text-indigo-300" />
                <h4 className="text-indigo-200 font-bold text-lg">Composition</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Build complex from simple</p>
              <code className="text-indigo-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                Has-a relationship<br/>
                Favor over inheritance
              </code>
            </div>

            <div className="bg-gradient-to-br from-pink-900 to-pink-800 rounded-xl p-5 border border-pink-500">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-8 h-8 text-pink-300" />
                <h4 className="text-pink-200 font-bold text-lg">Best Practices</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">Write maintainable OOP code</p>
              <code className="text-pink-300 text-xs block bg-black bg-opacity-30 p-2 rounded">
                SOLID principles<br/>
                Clean code
              </code>
            </div>
          </div>
        </div>

        {/* Design Patterns Reference */}
        <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-3xl">🏗️</span>
            Common OOP Design Patterns in JavaScript
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-xl p-6">
              <h4 className="text-yellow-400 font-bold text-lg mb-3">Singleton Pattern</h4>
              <p className="text-gray-300 text-sm mb-3">Ensure only one instance exists</p>
              <SyntaxHighlighter 
                language="javascript" 
                style={oneDark}
                customStyle={{ 
                  borderRadius: '8px', 
                  padding: '12px',
                  fontSize: '12px'
                }}
              >
{`class Singleton {
  static instance;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}`}
              </SyntaxHighlighter>
            </div>

            <div className="bg-gray-700 rounded-xl p-6">
              <h4 className="text-yellow-400 font-bold text-lg mb-3">Factory Pattern</h4>
              <p className="text-gray-300 text-sm mb-3">Create objects without specifying class</p>
              <SyntaxHighlighter 
                language="javascript" 
                style={oneDark}
                customStyle={{ 
                  borderRadius: '8px', 
                  padding: '12px',
                  fontSize: '12px'
                }}
              >
{`class Factory {
  static create(type) {
    switch(type) {
      case 'A': return new A();
      case 'B': return new B();
    }
  }
}`}
              </SyntaxHighlighter>
            </div>

            <div className="bg-gray-700 rounded-xl p-6">
              <h4 className="text-yellow-400 font-bold text-lg mb-3">Observer Pattern</h4>
              <p className="text-gray-300 text-sm mb-3">Subscribe to object state changes</p>
              <SyntaxHighlighter 
                language="javascript" 
                style={oneDark}
                customStyle={{ 
                  borderRadius: '8px', 
                  padding: '12px',
                  fontSize: '12px'
                }}
              >
{`class Subject {
  observers = [];
  
  subscribe(obs) {
    this.observers.push(obs);
  }
  
  notify(data) {
    this.observers.forEach(o => 
      o.update(data)
    );
  }
}`}
              </SyntaxHighlighter>
            </div>

            <div className="bg-gray-700 rounded-xl p-6">
              <h4 className="text-yellow-400 font-bold text-lg mb-3">Strategy Pattern</h4>
              <p className="text-gray-300 text-sm mb-3">Select algorithm at runtime</p>
              <SyntaxHighlighter 
                language="javascript" 
                style={oneDark}
                customStyle={{ 
                  borderRadius: '8px', 
                  padding: '12px',
                  fontSize: '12px'
                }}
              >
{`class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  execute() {
    return this.strategy.doWork();
  }
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* SOLID Principles */}
        <div className="mt-8 bg-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-3xl">⭐</span>
            SOLID Principles
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-5 border-l-4 border-red-400">
              <h4 className="text-red-200 font-bold text-lg mb-2">S - Single Responsibility</h4>
              <p className="text-gray-300 text-sm">A class should have only one reason to change</p>
            </div>

            <div className="bg-gradient-to-r from-orange-900 to-orange-800 rounded-xl p-5 border-l-4 border-orange-400">
              <h4 className="text-orange-200 font-bold text-lg mb-2">O - Open/Closed Principle</h4>
              <p className="text-gray-300 text-sm">Open for extension, closed for modification</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-900 to-yellow-800 rounded-xl p-5 border-l-4 border-yellow-400">
              <h4 className="text-yellow-200 font-bold text-lg mb-2">L - Liskov Substitution</h4>
              <p className="text-gray-300 text-sm">Subtypes must be substitutable for base types</p>
            </div>

            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-xl p-5 border-l-4 border-green-400">
              <h4 className="text-green-200 font-bold text-lg mb-2">I - Interface Segregation</h4>
              <p className="text-gray-300 text-sm">Many specific interfaces better than one general</p>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-5 border-l-4 border-blue-400">
              <h4 className="text-blue-200 font-bold text-lg mb-2">D - Dependency Inversion</h4>
              <p className="text-gray-300 text-sm">Depend on abstractions, not concretions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}