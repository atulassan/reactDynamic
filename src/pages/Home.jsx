import React, { useState } from 'react';

// Your routes configuration
const routesConfig = [
  {
    "title": "BASICS",
    "path": "/basics",
    "component": "Basics",
    "componentPath": "pages/basics/Basics",
    "children": [
      { "title": "What is React", "path": "/basics/what-is-react", "component": "WhatIsReact", "componentPath": "pages/basics/WhatIsReact" },
      { "title": "Advantages & Limitations", "path": "/basics/advantages-limitations", "component": "AdvantagesLimitations", "componentPath": "pages/basics/AdvantagesLimitations" },
      { "title": "JSX", "path": "/basics/jsx", "component": "JSX", "componentPath": "pages/basics/JSX" },
      { "title": "Virtual DOM", "path": "/basics/virtual-dom", "component": "VirtualDOM", "componentPath": "pages/basics/VirtualDOM" },
      { "title": "Diffing & Reconciliation", "path": "/basics/diffing-reconciliation", "component": "DiffingReconciliation", "componentPath": "pages/basics/DiffingReconciliation" },
      { "title": "Functional vs Class Components", "path": "/basics/functional-vs-class-components", "component": "FunctionalVsClassComponents", "componentPath": "pages/basics/FunctionalVsClassComponents" },
      { "title": "Stateful vs Stateless", "path": "/basics/stateful-vs-stateless", "component": "StatefulVsStateless", "componentPath": "pages/basics/StatefulVsStateless" },
      { "title": "Lifecycle Methods (class)", "path": "/basics/lifecycle-methods-class", "component": "LifecycleMethodsClass", "componentPath": "pages/basics/LifecycleMethodsClass" },
      {
        "title": "Events",
        "path": "/basics/events",
        "component": "Events",
        "componentPath": "pages/basics/Events",
        "children": [
          { "title": "Synthetic Events", "path": "/basics/events/synthetic-events", "component": "SyntheticEvents", "componentPath": "pages/basics/events/SyntheticEvents" },
          { "title": "Event Bubbling", "path": "/basics/events/event-bubbling", "component": "EventBubbling", "componentPath": "pages/basics/events/EventBubbling" },
          { "title": "Event Delegation", "path": "/basics/events/event-delegation", "component": "EventDelegation", "componentPath": "pages/basics/events/EventDelegation" }
        ]
      }
    ]
  }
];

// Component map
const componentMap = {
  'Basics': () => <div className="p-6"><h1 className="text-2xl font-bold">Basics</h1><p className="mt-4 text-gray-600">Welcome to React Basics section</p></div>,
  'WhatIsReact': () => <div className="p-6"><h1 className="text-2xl font-bold">What is React</h1><p className="mt-4 text-gray-600">React is a JavaScript library for building user interfaces</p></div>,
  'AdvantagesLimitations': () => <div className="p-6"><h1 className="text-2xl font-bold">Advantages & Limitations</h1><p className="mt-4 text-gray-600">Learn about React's pros and cons</p></div>,
  'JSX': () => <div className="p-6"><h1 className="text-2xl font-bold">JSX</h1><p className="mt-4 text-gray-600">JSX is a syntax extension for JavaScript</p></div>,
  'VirtualDOM': () => <div className="p-6"><h1 className="text-2xl font-bold">Virtual DOM</h1><p className="mt-4 text-gray-600">Understanding React's Virtual DOM</p></div>,
  'DiffingReconciliation': () => <div className="p-6"><h1 className="text-2xl font-bold">Diffing & Reconciliation</h1><p className="mt-4 text-gray-600">How React updates the DOM efficiently</p></div>,
  'FunctionalVsClassComponents': () => <div className="p-6"><h1 className="text-2xl font-bold">Functional vs Class Components</h1><p className="mt-4 text-gray-600">Understanding different component types</p></div>,
  'StatefulVsStateless': () => <div className="p-6"><h1 className="text-2xl font-bold">Stateful vs Stateless</h1><p className="mt-4 text-gray-600">Managing state in components</p></div>,
  'LifecycleMethodsClass': () => <div className="p-6"><h1 className="text-2xl font-bold">Lifecycle Methods</h1><p className="mt-4 text-gray-600">Class component lifecycle methods</p></div>,
  'Events': () => <div className="p-6"><h1 className="text-2xl font-bold">Events</h1><p className="mt-4 text-gray-600">Welcome to Events section</p></div>,
  'SyntheticEvents': () => <div className="p-6"><h1 className="text-2xl font-bold">Synthetic Events</h1><p className="mt-4 text-gray-600">React's cross-browser event system</p></div>,
  'EventBubbling': () => <div className="p-6"><h1 className="text-2xl font-bold">Event Bubbling</h1><p className="mt-4 text-gray-600">Understanding event propagation</p></div>,
  'EventDelegation': () => <div className="p-6"><h1 className="text-2xl font-bold">Event Delegation</h1><p className="mt-4 text-gray-600">Efficient event handling patterns</p></div>
};

// Find route by path recursively
const findRoute = (routes, path) => {
  for (const route of routes) {
    if (route.path === path) return route;
    if (route.children) {
      const found = findRoute(route.children, path);
      if (found) return found;
    }
  }
  return null;
};

// Navigation component
const Sidebar = ({ currentPath, onNavigate }) => {
  const renderNav = (routes, level = 0) => {
    return routes.map((route) => (
      <div key={route.path} className={`${level > 0 ? 'ml-4' : ''}`}>
        <button
          onClick={() => onNavigate(route.path)}
          className={`block w-full text-left py-2 px-4 rounded transition-colors ${
            currentPath === route.path 
              ? 'bg-blue-500 text-white' 
              : 'hover:bg-blue-100 text-gray-700'
          }`}
        >
          {route.title}
        </button>
        {route.children && (
          <div className="ml-2 border-l-2 border-gray-200">
            {renderNav(route.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">React Learning</h2>
        <button
          onClick={() => onNavigate('/')}
          className={`block w-full text-left py-2 px-4 rounded mb-4 transition-colors ${
            currentPath === '/' 
              ? 'bg-blue-500 text-white' 
              : 'hover:bg-blue-100 text-gray-700'
          }`}
        >
          🏠 Home
        </button>
        <hr className="mb-4" />
        {renderNav(routesConfig)}
      </div>
    </div>
  );
};

// Home page component
const HomePage = ({ onNavigate }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to React Learning</h1>
      <p className="text-gray-600 mb-6">Select a topic from the sidebar to get started</p>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="font-semibold text-lg mb-3">Available Sections:</h2>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-blue-600 mr-2">📚</span>
            <div>
              <h3 className="font-medium">Basics</h3>
              <p className="text-sm text-gray-600">Fundamental React concepts including JSX, Virtual DOM, and Components</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Not found component
const NotFound = ({ onNavigate }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => onNavigate('/')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Go back home
      </button>
    </div>
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  // Find the current route
  const currentRoute = findRoute(routesConfig, currentPath);
  const Component = currentRoute ? componentMap[currentRoute.component] : null;

  return (
    <div className="flex h-screen bg-white">
      <Sidebar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1 overflow-y-auto">
        {currentPath === '/' ? (
          <HomePage onNavigate={navigate} />
        ) : Component ? (
          <Component />
        ) : (
          <NotFound onNavigate={navigate} />
        )}
      </main>
    </div>
  );
}