import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


// ============================================
// JAVASCRIPT DESIGN PATTERNS
// ============================================

const DesignPatterns = () => {
  const [activeTab, setActiveTab] = useState('singleton');

  const patterns = [
    { id: 'singleton', name: 'Singleton', icon: '👤' },
    { id: 'factory', name: 'Factory', icon: '🏭' },
    { id: 'observer', name: 'Observer', icon: '👁️' },
    { id: 'module', name: 'Module', icon: '📦' },
    { id: 'prototype', name: 'Prototype', icon: '🧬' },
    { id: 'decorator', name: 'Decorator', icon: '🎨' },
    { id: 'strategy', name: 'Strategy', icon: '🎯' },
    { id: 'proxy', name: 'Proxy', icon: '🔒' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">JavaScript Design Patterns</h1>
          <p className="text-indigo-100">Master essential patterns for writing better JavaScript code</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {patterns.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => setActiveTab(pattern.id)}
                className={`px-5 py-4 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === pattern.id
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{pattern.icon}</span>
                {pattern.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'singleton' && <SingletonPattern />}
        {activeTab === 'factory' && <FactoryPattern />}
        {activeTab === 'observer' && <ObserverPattern />}
        {activeTab === 'module' && <ModulePattern />}
        {activeTab === 'prototype' && <PrototypePattern />}
        {activeTab === 'decorator' && <DecoratorPattern />}
        {activeTab === 'strategy' && <StrategyPattern />}
        {activeTab === 'proxy' && <ProxyPattern />}
      </div>
    </div>
  );
};

// ============================================
// 1. SINGLETON PATTERN
// ============================================
const SingletonPattern = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          👤 Singleton Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Ensure a class has only one instance and provide a global point of access to it
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-blue-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Singleton Pattern - Only one instance exists
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    
    this.connection = null;
    this.connectionCount = 0;
    DatabaseConnection.instance = this;
  }

  connect() {
    if (!this.connection) {
      this.connection = 'Connected to database';
      this.connectionCount++;
      console.log('New connection established');
    }
    return this.connection;
  }

  getConnectionCount() {
    return this.connectionCount;
  }
}

// Usage
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true - Same instance!
db1.connect();
console.log(db2.getConnectionCount()); // 1 - Shared state

// ES6 Modern Approach
class Logger {
  static instance = null;
  
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  getLogs() {
    return this.logs;
  }
}

const logger1 = new Logger();
const logger2 = new Logger();
logger1.log('First message');
console.log(logger2.getLogs()); // ['First message'] - Shared!`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Database connections</li>
            <li>• Configuration settings</li>
            <li>• Logging services</li>
            <li>• Cache management</li>
            <li>• Thread pools</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">⚠️ Considerations</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Can make testing difficult</li>
            <li>• Global state can be problematic</li>
            <li>• Hidden dependencies</li>
            <li>• Thread safety issues (in some langs)</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Logger Singleton</h3>
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => addLog('Info: User logged in')}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Log Info
            </button>
            <button
              onClick={() => addLog('Warning: Low disk space')}
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
            >
              Log Warning
            </button>
            <button
              onClick={() => addLog('Error: Connection failed')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Log Error
            </button>
            <button
              onClick={() => setLogs([])}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Clear
            </button>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-40 overflow-y-auto font-mono text-sm">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet. Click buttons above to add logs.</div>
            ) : (
              logs.map((log, i) => <div key={i}>{log}</div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 2. FACTORY PATTERN
// ============================================
const FactoryPattern = () => {
  const [vehicles, setVehicles] = useState([]);

  const createVehicle = (type) => {
    const vehicle = {
      car: { type: 'Car', wheels: 4, icon: '🚗', speed: '120 km/h' },
      bike: { type: 'Bike', wheels: 2, icon: '🏍️', speed: '180 km/h' },
      truck: { type: 'Truck', wheels: 6, icon: '🚛', speed: '90 km/h' }
    }[type];

    if (vehicle) {
      setVehicles(prev => [...prev, { ...vehicle, id: Date.now() }]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🏭 Factory Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Create objects without specifying the exact class of object to be created
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-purple-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Factory Pattern - Create objects based on type
class Car {
  constructor() {
    this.type = 'Car';
    this.wheels = 4;
  }
  
  drive() {
    console.log('Driving a car');
  }
}

class Bike {
  constructor() {
    this.type = 'Bike';
    this.wheels = 2;
  }
  
  drive() {
    console.log('Riding a bike');
  }
}

class Truck {
  constructor() {
    this.type = 'Truck';
    this.wheels = 6;
  }
  
  drive() {
    console.log('Driving a truck');
  }
}

// Factory
class VehicleFactory {
  createVehicle(type) {
    switch(type) {
      case 'car':
        return new Car();
      case 'bike':
        return new Bike();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

// Usage
const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const bike = factory.createVehicle('bike');

car.drive();  // Driving a car
bike.drive(); // Riding a bike

// Modern ES6 Factory Function
const createUser = (type) => {
  const users = {
    admin: () => ({ role: 'admin', permissions: ['read', 'write', 'delete'] }),
    editor: () => ({ role: 'editor', permissions: ['read', 'write'] }),
    viewer: () => ({ role: 'viewer', permissions: ['read'] })
  };
  
  return users[type] ? users[type]() : null;
};

const admin = createUser('admin');
console.log(admin.permissions); // ['read', 'write', 'delete']`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Creating UI components dynamically</li>
            <li>• Database connection managers</li>
            <li>• Plugin systems</li>
            <li>• User role creation</li>
            <li>• Document generators</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Encapsulates object creation</li>
            <li>• Reduces code duplication</li>
            <li>• Easy to add new types</li>
            <li>• Follows Open/Closed Principle</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Vehicle Factory</h3>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => createVehicle('car')}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create Car 🚗
            </button>
            <button
              onClick={() => createVehicle('bike')}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Create Bike 🏍️
            </button>
            <button
              onClick={() => createVehicle('truck')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Create Truck 🚛
            </button>
            <button
              onClick={() => setVehicles([])}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200">
                <div className="text-4xl mb-2">{vehicle.icon}</div>
                <h4 className="font-bold text-gray-800">{vehicle.type}</h4>
                <p className="text-sm text-gray-600">Wheels: {vehicle.wheels}</p>
                <p className="text-sm text-gray-600">Speed: {vehicle.speed}</p>
              </div>
            ))}
          </div>
          {vehicles.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No vehicles created yet. Click buttons above to create vehicles!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// 3. OBSERVER PATTERN
// ============================================
const ObserverPattern = () => {
  const [notifications, setNotifications] = useState([]);
  const [subscribers, setSubscribers] = useState(['User A', 'User B', 'User C']);

  const notify = (message) => {
    const notification = {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString(),
      subscribers: subscribers.length
    };
    setNotifications(prev => [notification, ...prev.slice(0, 4)]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          👁️ Observer Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Define a one-to-many dependency where state changes notify all dependents
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-green-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Observer Pattern - Pub/Sub system
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
    console.log(\`Observer subscribed. Total: \${this.observers.length}\`);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
    console.log(\`Observer unsubscribed. Total: \${this.observers.length}\`);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(\`\${this.name} received: \${data}\`);
  }
}

// Usage
const newsChannel = new Subject();

const subscriber1 = new Observer('John');
const subscriber2 = new Observer('Jane');

newsChannel.subscribe(subscriber1);
newsChannel.subscribe(subscriber2);

newsChannel.notify('Breaking News: New JavaScript features!');
// John received: Breaking News: New JavaScript features!
// Jane received: Breaking News: New JavaScript features!

// Modern Event Emitter Pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

const emitter = new EventEmitter();
emitter.on('userLogin', (user) => console.log(\`\${user} logged in\`));
emitter.emit('userLogin', 'Alice'); // Alice logged in`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Event handling systems</li>
            <li>• State management (Redux)</li>
            <li>• Real-time notifications</li>
            <li>• Chat applications</li>
            <li>• Stock price updates</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Loose coupling between objects</li>
            <li>• Dynamic relationships</li>
            <li>• Broadcast communication</li>
            <li>• Easy to add new observers</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - News Channel</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2">Subscribers ({subscribers.length})</h4>
            <div className="flex flex-wrap gap-2">
              {subscribers.map((sub, i) => (
                <span key={i} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {sub}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => notify('📰 Breaking News: Major update released!')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Breaking News
            </button>
            <button
              onClick={() => notify('⚽ Sports: Team wins championship!')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Sports Update
            </button>
            <button
              onClick={() => notify('🌦️ Weather: Sunny day ahead!')}
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
            >
              Weather Update
            </button>
          </div>
          <div className="space-y-2">
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border border-green-200">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-800">{notif.message}</p>
                  <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Notified {notif.subscribers} subscriber(s)
                </p>
              </div>
            ))}
          </div>
          {notifications.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No notifications yet. Click buttons above to broadcast!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// 4. MODULE PATTERN
// ============================================
const ModulePattern = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          📦 Module Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Encapsulate private and public members, creating a clean API
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-orange-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Module Pattern - Using IIFE (Immediately Invoked Function Expression)
const ShoppingCart = (function() {
  // Private variables and methods
  let items = [];
  let total = 0;

  function calculateTotal() {
    total = items.reduce((sum, item) => sum + item.price, 0);
  }

  // Public API
  return {
    addItem(item) {
      items.push(item);
      calculateTotal();
      console.log(\`Added \${item.name}. Total: $\${total}\`);
    },

    removeItem(itemName) {
      items = items.filter(item => item.name !== itemName);
      calculateTotal();
      console.log(\`Removed \${itemName}. Total: $\${total}\`);
    },

    getTotal() {
      return total;
    },

    getItems() {
      return [...items]; // Return copy, not reference
    },

    clear() {
      items = [];
      total = 0;
      console.log('Cart cleared');
    }
  };
})();

// Usage
ShoppingCart.addItem({ name: 'Laptop', price: 1000 });
ShoppingCart.addItem({ name: 'Mouse', price: 50 });
console.log(ShoppingCart.getTotal()); // 1050

// Can't access private variables
console.log(ShoppingCart.items); // undefined
console.log(ShoppingCart.total); // undefined

// Modern ES6 Module Pattern
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
    return this.#count;
  }

  decrement() {
    this.#count--;
    return this.#count;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment(); // 1
console.log(counter.getCount()); // 1
// counter.#count; // SyntaxError: Private field

// Revealing Module Pattern
const Calculator = (function() {
  let result = 0;

  function add(x) {
    result += x;
    return this;
  }

  function subtract(x) {
    result -= x;
    return this;
  }

  function multiply(x) {
    result *= x;
    return this;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
    return this;
  }

  // Reveal public methods
  return {
    add,
    subtract,
    multiply,
    getResult,
    reset
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log(Calculator.getResult()); // 15`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Creating libraries and APIs</li>
            <li>• Encapsulating functionality</li>
            <li>• Preventing global scope pollution</li>
            <li>• Managing application state</li>
            <li>• Plugin architectures</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Data privacy and encapsulation</li>
            <li>• Clean public API</li>
            <li>• Namespace management</li>
            <li>• Easy to maintain</li>
            <li>• Avoids naming conflicts</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <CartDemo />
    </div>
  );
};

const CartDemo = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { name: 'Laptop', price: 999, icon: '💻' },
    { name: 'Mouse', price: 29, icon: '🖱️' },
    { name: 'Keyboard', price: 79, icon: '⌨️' },
    { name: 'Monitor', price: 299, icon: '🖥️' }
  ];

  const addItem = (product) => {
    const newItems = [...items, { ...product, id: Date.now() }];
    setItems(newItems);
    setTotal(newItems.reduce((sum, item) => sum + item.price, 0));
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    setTotal(newItems.reduce((sum, item) => sum + item.price, 0));
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Shopping Cart Module</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Available Products</h4>
          <div className="space-y-2">
            {products.map((product, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-orange-50 rounded border border-orange-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{product.icon}</span>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Shopping Cart</h4>
          <div className="space-y-2 mb-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded">
                Cart is empty
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-2xl">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 5. PROTOTYPE PATTERN
// ============================================
const PrototypePattern = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🧬 Prototype Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Create objects based on a template of an existing object through cloning
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-teal-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Prototype Pattern - Object cloning
const carPrototype = {
  init(model, year) {
    this.model = model;
    this.year = year;
  },
  
  getInfo() {
    return \`\${this.model} (\${this.year})\`;
  },
  
  clone() {
    return Object.create(this);
  }
};

// Create objects from prototype
const car1 = Object.create(carPrototype);
car1.init('Tesla Model 3', 2023);

const car2 = car1.clone();
car2.init('Tesla Model Y', 2024);

console.log(car1.getInfo()); // Tesla Model 3 (2023)
console.log(car2.getInfo()); // Tesla Model Y (2024)

// Constructor Pattern with Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared across all instances)
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name} and I'm \${this.age} years old\`;
};

Person.prototype.clone = function() {
  return new Person(this.name, this.age);
};

const person1 = new Person('Alice', 30);
const person2 = person1.clone();
person2.name = 'Bob';

console.log(person1.greet()); // Hello, I'm Alice and I'm 30 years old
console.log(person2.greet()); // Hello, I'm Bob and I'm 30 years old

// ES6 Class with Clone
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  getDetails() {
    return \`\${this.name}: $\${this.price}\`;
  }
}

const laptop = new Product('Laptop', 999);
const clonedLaptop = laptop.clone();
clonedLaptop.name = 'Gaming Laptop';
clonedLaptop.price = 1499;

console.log(laptop.getDetails());       // Laptop: $999
console.log(clonedLaptop.getDetails()); // Gaming Laptop: $1499

// Deep Clone Helper
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Object cloning/copying</li>
            <li>• Creating similar objects efficiently</li>
            <li>• Prototype-based inheritance</li>
            <li>• Game object templates</li>
            <li>• Configuration templates</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Performance optimization</li>
            <li>• Reduces initialization overhead</li>
            <li>• Dynamic object creation</li>
            <li>• Memory efficient</li>
            <li>• Flexible object composition</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <PrototypeDemo />
    </div>
  );
};

const PrototypeDemo = () => {
  const [characters, setCharacters] = useState([]);

  const characterPrototype = {
    warrior: { name: 'Warrior', health: 100, attack: 15, icon: '⚔️', color: 'from-red-100 to-orange-100' },
    mage: { name: 'Mage', health: 70, attack: 25, icon: '🧙', color: 'from-purple-100 to-pink-100' },
    archer: { name: 'Archer', health: 85, attack: 20, icon: '🏹', color: 'from-green-100 to-emerald-100' }
  };

  const cloneCharacter = (type) => {
    const prototype = characterPrototype[type];
    if (prototype) {
      setCharacters(prev => [...prev, { ...prototype, id: Date.now() }]);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Character Cloning</h3>
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => cloneCharacter('warrior')}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clone Warrior ⚔️
          </button>
          <button
            onClick={() => cloneCharacter('mage')}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Clone Mage 🧙
          </button>
          <button
            onClick={() => cloneCharacter('archer')}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Clone Archer 🏹
          </button>
          <button
            onClick={() => setCharacters([])}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {characters.map((char) => (
            <div key={char.id} className={`bg-gradient-to-br ${char.color} p-4 rounded-lg border-2 border-gray-300`}>
              <div className="text-4xl mb-2">{char.icon}</div>
              <h4 className="font-bold text-gray-800">{char.name}</h4>
              <p className="text-sm text-gray-700">❤️ Health: {char.health}</p>
              <p className="text-sm text-gray-700">⚡ Attack: {char.attack}</p>
            </div>
          ))}
        </div>
        {characters.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No characters yet. Clone some characters above!
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// 6. DECORATOR PATTERN
// ============================================
const DecoratorPattern = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🎨 Decorator Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Add new functionality to objects dynamically without modifying their structure
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-pink-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Decorator Pattern - Enhance objects with new behavior
class Coffee {
  cost() {
    return 5;
  }
  
  description() {
    return 'Coffee';
  }
}

// Decorators
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 2;
  }
  
  description() {
    return this.coffee.description() + ', Milk';
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
  
  description() {
    return this.coffee.description() + ', Sugar';
  }
}

class WhipCreamDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 3;
  }
  
  description() {
    return this.coffee.description() + ', Whip Cream';
  }
}

// Usage - Stack decorators!
let myCoffee = new Coffee();
console.log(myCoffee.description()); // Coffee
console.log(myCoffee.cost());        // 5

myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
myCoffee = new WhipCreamDecorator(myCoffee);

console.log(myCoffee.description()); // Coffee, Milk, Sugar, Whip Cream
console.log(myCoffee.cost());        // 11

// Functional Decorator Pattern
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling function with args: \${args}\`);
    const result = fn(...args);
    console.log(\`Function returned: \${result}\`);
    return result;
  };
}

function withCaching(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Returning from cache');
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Original function
function expensiveCalculation(n) {
  return n * n;
}

// Decorate it
const cachedCalculation = withCaching(expensiveCalculation);
const loggedCalculation = withLogging(cachedCalculation);

loggedCalculation(5); // Calculates and caches
loggedCalculation(5); // Returns from cache`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Adding features to objects dynamically</li>
            <li>• Middleware in frameworks</li>
            <li>• Logging and monitoring</li>
            <li>• Authorization layers</li>
            <li>• UI component enhancement</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Add functionality without modification</li>
            <li>• Flexible and composable</li>
            <li>• Single Responsibility Principle</li>
            <li>• Runtime configuration</li>
            <li>• Easy to combine decorators</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <CoffeeDemo />
    </div>
  );
};

const CoffeeDemo = () => {
  const [coffee, setCoffee] = useState({ items: ['Coffee'], cost: 5 });

  const addTopping = (name, price) => {
    setCoffee(prev => ({
      items: [...prev.items, name],
      cost: prev.cost + price
    }));
  };

  const reset = () => {
    setCoffee({ items: ['Coffee'], cost: 5 });
  };

  const toppings = [
    { name: 'Milk', price: 2, icon: '🥛' },
    { name: 'Sugar', price: 1, icon: '🍬' },
    { name: 'Whip Cream', price: 3, icon: '🍦' },
    { name: 'Chocolate', price: 2, icon: '🍫' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Coffee Decorator</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Available Toppings</h4>
          <div className="space-y-2">
            {toppings.map((topping, i) => (
              <button
                key={i}
                onClick={() => addTopping(topping.name, topping.price)}
                className="w-full flex items-center justify-between p-3 bg-pink-50 rounded border border-pink-200 hover:bg-pink-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{topping.icon}</span>
                  <span className="font-medium">{topping.name}</span>
                </div>
                <span className="text-sm text-gray-600">+${topping.price}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Your Coffee</h4>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg border-2 border-amber-300 mb-4">
            <div className="text-5xl mb-3 text-center">☕</div>
            <div className="space-y-2">
              {coffee.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-4 rounded-lg mb-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total Cost:</span>
              <span className="font-bold text-2xl">${coffee.cost}</span>
            </div>
          </div>
          <button
            onClick={reset}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 7. STRATEGY PATTERN
// ============================================
const StrategyPattern = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState('standard');

  const calculateShipping = (strategy, weight = 10) => {
    const strategies = {
      standard: weight * 2,
      express: weight * 5,
      overnight: weight * 10
    };
    setShippingCost(strategies[strategy] || 0);
    setSelectedStrategy(strategy);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🎯 Strategy Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Define a family of algorithms, encapsulate each one, and make them interchangeable
        </p>
      </div>

      {/* Implementation */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-indigo-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Strategy Pattern - Interchangeable algorithms
class PaymentStrategy {
  pay(amount) {
    throw new Error('pay method must be implemented');
  }
}

class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} with Credit Card \${this.cardNumber}\`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} with PayPal account \${this.email}\`);
  }
}

class CryptoStrategy extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} with Crypto wallet \${this.walletAddress}\`);
  }
}

// Context class
class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
  
  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }
  
  checkout(amount) {
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart(new CreditCardStrategy('1234-5678'));
cart.checkout(100); // Paid $100 with Credit Card 1234-5678

cart.setPaymentStrategy(new PayPalStrategy('user@email.com'));
cart.checkout(50); // Paid $50 with PayPal account user@email.com

// Functional Strategy Pattern
const strategies = {
  credit: (amount) => console.log(\`Credit card: $\${amount}\`),
  paypal: (amount) => console.log(\`PayPal: $\${amount}\`),
  crypto: (amount) => console.log(\`Crypto: $\${amount}\`)
};

function processPayment(strategy, amount) {
  strategies[strategy](amount);
}

processPayment('credit', 100);
processPayment('paypal', 50);

// Sorting Strategy Example
const sortStrategies = {
  ascending: (arr) => [...arr].sort((a, b) => a - b),
  descending: (arr) => [...arr].sort((a, b) => b - a),
  random: (arr) => [...arr].sort(() => Math.random() - 0.5)
};

function sortArray(arr, strategy) {
  return sortStrategies[strategy](arr);
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, 'ascending'));  // [1, 2, 5, 8, 9]
console.log(sortArray(numbers, 'descending')); // [9, 8, 5, 2, 1]`}
        </SyntaxHighlighter>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Payment processing systems</li>
            <li>• Sorting and filtering algorithms</li>
            <li>• Validation strategies</li>
            <li>• Compression algorithms</li>
            <li>• Route calculation</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Benefits</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Algorithms are interchangeable</li>
            <li>• Easy to add new strategies</li>
            <li>• Eliminates conditional statements</li>
            <li>• Open/Closed Principle</li>
            <li>• Runtime algorithm selection</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Shipping Strategy</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Select Shipping Method</h4>
            <div className="space-y-2">
              <button
                onClick={() => calculateShipping('standard')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  selectedStrategy === 'standard'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">📦 Standard Shipping</p>
                    <p className="text-sm text-gray-600">5-7 business days</p>
                  </div>
                  <span className="text-sm">$2/lb</span>
                </div>
              </button>
              <button
                onClick={() => calculateShipping('express')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  selectedStrategy === 'express'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">⚡ Express Shipping</p>
                    <p className="text-sm text-gray-600">2-3 business days</p>
                  </div>
                  <span className="text-sm">$5/lb</span>
                </div>
              </button>
              <button
                onClick={() => calculateShipping('overnight')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  selectedStrategy === 'overnight'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">🚀 Overnight Shipping</p>
                    <p className="text-sm text-gray-600">Next day delivery</p>
                  </div>
                  <span className="text-sm">$10/lb</span>
                </div>
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shipping Details</h4>
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-6 rounded-lg border-2 border-indigo-300">
              <p className="text-gray-700 mb-4">Package Weight: <span className="font-bold">10 lbs</span></p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-1">Selected Method:</p>
                <p className="font-bold text-lg capitalize">{selectedStrategy} Shipping</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Shipping Cost:</span>
                  <span className="font-bold text-2xl">${shippingCost}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 8. PROXY PATTERN
// ============================================
const ProxyPattern = () => {
  const [accessLogs, setAccessLogs] = useState([]);

  const addLog = (message, allowed) => {
    setAccessLogs(prev => [{
      message,
      allowed,
      time: new Date().toLocaleTimeString(),
      id: Date.now()
    }, ...prev.slice(0, 4)]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🔒 Proxy Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Provide a surrogate or placeholder to control access to an object
        </p>
      </div>
      <h3 className="text-xl font-bold text-red-800">Implementation</h3>  

        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Proxy Pattern - Control access to objects
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    return \`Withdrew $\${amount}. Balance: $\${this.balance}\`;
  }

  deposit(amount) {
    this.balance += amount;
    return \`Deposited $\${amount}. Balance: $\${this.balance}\`;
  }

  getBalance() {
    return this.balance;
  }
}

// Protection Proxy - Controls access
class BankAccountProxy {
  constructor(account, password) {
    this.account = account;
    this.password = password;
  }

  authenticate(password) {
    return password === this.password;
  }

  withdraw(amount, password) {
    if (!this.authenticate(password)) {
      return 'Access denied! Wrong password.';
    }
    return this.account.withdraw(amount);
  }

  deposit(amount, password) {
    if (!this.authenticate(password)) {
      return 'Access denied! Wrong password.';
    }
    return this.account.deposit(amount);
  }

  getBalance(password) {
    if (!this.authenticate(password)) {
      return 'Access denied!';
    }
    return this.account.getBalance();
  }
}

// Usage
const myAccount = new BankAccount(1000);
const proxy = new BankAccountProxy(myAccount, 'secret123');

console.log(proxy.withdraw(100, 'wrong')); // Access denied!
console.log(proxy.withdraw(100, 'secret123')); // Withdrew $100...

// Virtual Proxy - Lazy loading
class ExpensiveImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(\`Loading image: \${this.filename}\`);
  }

  display() {
    console.log(\`Displaying: \${this.filename}\`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }

  display() {
    if (!this.image) {
      this.image = new ExpensiveImage(this.filename);
    }
    this.image.display();
  }
}

// Image only loads when needed
const image = new ImageProxy('photo.jpg');
// Not loaded yet...
image.display(); // Now loads and displays

// Caching Proxy
class APIProxy {
  constructor() {
    this.cache = {};
  }

  async fetchData(url) {
    if (this.cache[url]) {
      console.log('Returning from cache');
      return this.cache[url];
    }

    console.log('Fetching from API');
    const data = await fetch(url).then(res => res.json());
    this.cache[url] = data;
    return data;
  }
}

// ES6 Proxy Object
const user = {
  name: 'John',
  age: 30
};

const handler = {
  get(target, property) {
    console.log(\`Getting property: \${property}\`);
    return target[property];
  },
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    if (property === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    target[property] = value;
    return true;
  }
};

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.name); // Getting property: name -> John
proxyUser.age = 31;          // Setting age to 31`}
        </SyntaxHighlighter>

    {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Access control and authentication</li>
            <li>• Lazy loading resources</li>
            <li>• Caching expensive operations</li>
            <li>• Logging and monitoring</li>
            <li>• Virtual proxies for heavy objects</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Types</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Protection Proxy (access control)</li>
            <li>• Virtual Proxy (lazy initialization)</li>
            <li>• Caching Proxy (performance)</li>
            <li>• Remote Proxy (network calls)</li>
            <li>• Logging Proxy (audit trail)</li>
          </ul>
        </div>
      </div>

    {/* Use Cases */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Use Cases</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Access control and authentication</li>
            <li>• Lazy loading resources</li>
            <li>• Caching expensive operations</li>
            <li>• Logging and monitoring</li>
            <li>• Virtual proxies for heavy objects</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Types</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Protection Proxy (access control)</li>
            <li>• Virtual Proxy (lazy initialization)</li>
            <li>• Caching Proxy (performance)</li>
            <li>• Remote Proxy (network calls)</li>
            <li>• Logging Proxy (audit trail)</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Access Control Proxy</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Try Accessing Resources</h4>
            <div className="space-y-2">
              <button
                onClick={() => addLog('Accessing public data', true)}
                className="w-full p-4 rounded-lg bg-green-50 border-2 border-green-200 hover:bg-green-100 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-bold text-green-800">Public Resource</p>
                    <p className="text-sm text-gray-600">No authentication required</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => addLog('Attempting to access admin panel', false)}
                className="w-full p-4 rounded-lg bg-red-50 border-2 border-red-200 hover:bg-red-100 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="font-bold text-red-800">Admin Resource</p>
                    <p className="text-sm text-gray-600">Authentication required</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => addLog('Accessing user dashboard', true)}
                className="w-full p-4 rounded-lg bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-bold text-blue-800">User Resource</p>
                    <p className="text-sm text-gray-600">Basic auth required</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Access Logs</h4>
            <div className="space-y-2">
              {accessLogs.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-gray-50 rounded">
                  No access attempts yet
                </div>
              ) : (
                accessLogs.map((log) => (
                  <div
                    key={log.id}
                    className={`p-3 rounded-lg border-2 ${
                      log.allowed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={`font-medium ${log.allowed ? 'text-green-800' : 'text-red-800'}`}>
                          {log.allowed ? '✅ Access Granted' : '❌ Access Denied'}
                        </p>
                        <p className="text-sm text-gray-600">{log.message}</p>
                      </div>
                      <span className="text-xs text-gray-500">{log.time}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}


export default DesignPatterns;

     
          