import React, { useState } from 'react';
import { JavascriptRoutes } from "../../DynamicRoutes";
import { Sidebar } from '../Components/Sidebar';
import { LazyRouter } from '../Components/LazyRouter';
import { NavLink } from 'react-router-dom';

const demoFeatures = [
  {
    icon: '⚡',
    title: 'Dynamic Lazy Loading',
    description: 'Components are loaded on-demand using React.lazy()'
  },
  {
    icon: '🔄',
    title: 'Suspense Integration',
    description: 'Smooth loading states while components are being fetched'
  },
  {
    icon: '📦',
    title: 'Code Splitting',
    description: 'Reduces initial bundle size for better performance'
  },
  {
    icon: '🛡️',
    title: 'Error Boundaries',
    description: 'Graceful error handling for failed component loads'
  }
];

const demoSections = [
  {
    icon: '🔰',
    title: 'Foundations',
    description: 'Scopes in JavaScript, Hoisting, Temporal Dead Zone, Type Coercion & Equality, Strict Mode'
  },
  {
    icon: '📦',
    title: 'Objects & Functions',
    description: 'Objects & Methods, Arrays & Methods, Set / Map / WeakSet / WeakMap'
  },
  {
    icon: '🏗️',
    title: 'Advanced Data & Structures',
    description: 'Symbols, Deep vs Shallow Copy, Prototype & Inheritance, Prototype Chain, Prototype vs Classical Inheritance, Instances / Implements / Extends, OOPS Principles'
  },
  {
    icon: '🔬',
    title: 'Deep dive',
    description: 'Functions in Depth, Call Apply Bind, Functional Types, Pure Functions, Higher Order Functions, Currying, Rest vs Spread Operator, Destructuring, Optional Chaining, Nullish Coalescing'
  },
  {
    icon: '⚙️',
    title: 'Execution & Async',
    description: 'Event Loop, Synchronous vs Asynchronous, Promises, Error Handling, Event Bubbling, Event Delegation, Debouncing, Throttling, Memory Leaks'
  },
  {
    icon: '🔧',
    title: 'Modules & Tooling',
    description: 'ES Modules, Modules vs CommonJS, Tree Shaking, Polyfills, Transpiling'
  },
  {
    icon: '🌐',
    title: 'Browser & Advanced APIs',
    description: 'Storage Types, CORS, Service Workers, CSS in JS Context'
  },
  {
    icon: '🏛️',
    title: 'Advanced & Architecture',
    description: 'Design Patterns, SOLID Principles'
  }
];

export default function JavascriptMain() {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <div className="flex h-screen bg-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Tab Switcher */}
      {/*<div className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
        <div className="flex items-center justify-center space-x-2 p-3">
          <NavLink
            to="/javascript"
            className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Javascript
          </NavLink>
          <NavLink
            to="/react"
            className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            React
          </NavLink>
        </div>
      </div>*/}

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          routes={JavascriptRoutes}
          currentPath={currentPath}
          onNavigate={navigate}
          title="React Learning"
        />

        <main className="flex-1 overflow-y-auto">
          <LazyRouter
            routes={JavascriptRoutes}
            currentPath={currentPath}
            onNavigate={navigate}
            homeProps={{
              title: "Welcome to JavaScript Reference",
              subtitle: "Comprehensive guide to JavaScript concepts, patterns, and best practices",
              features: demoFeatures,
              sections: demoSections
            }}
          />
        </main>
      </div>
    </div>
  );
}