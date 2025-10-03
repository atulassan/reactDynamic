import React, { useState, useEffect, Suspense, lazy } from 'react';
import { JavascriptRoutes } from '../../DynamicRoutes';


/*// Dynamic lazy loading function
const lazyLoadComponent = (componentPath) => {
  return lazy(() => {
    // In a real app, this would be: import(`./${componentPath}`)
    // For this demo, we'll simulate the lazy loading with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate different components based on the path
        const componentName = componentPath.split('/').pop();
        resolve({
          default: () => (
            <div className="p-6 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{componentName}</h1>
                <p className="text-sm text-gray-500">Dynamically loaded from: {componentPath}</p>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  This component was <strong>lazy loaded</strong> using React's Suspense and dynamic imports.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>✅ Code splitting for better performance</li>
                    <li>✅ Components load only when needed</li>
                    <li>✅ Reduced initial bundle size</li>
                    <li>✅ Better user experience with loading states</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        });
      }, 300); // Simulate network delay
    });
  });
};*/

const lazyLoadComponent = (componentPath) => {
  return lazy(() => import(`./${componentPath}`));
};

// Create component cache to avoid recreating lazy components
const componentCache = {};

const getComponent = (route) => {
  if (!componentCache[route.component]) {
    componentCache[route.component] = lazyLoadComponent(route.componentPath);
  }
  return componentCache[route.component];
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-64">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading component...</p>
    </div>
  </div>
);

// Error Boundary for lazy loading errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error loading component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-700 mb-2">Failed to load component</h2>
            <p className="text-red-600 mb-4">There was an error loading this component.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
          className={`block text-sm w-full text-left py-2 px-4 rounded transition-colors ${
            currentPath === route.path 
              ? 'bg-blue-500 text-white font-medium' 
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
              ? 'bg-blue-500 text-white font-medium' 
              : 'hover:bg-blue-100 text-gray-700'
          }`}
        >
          🏠 Home
        </button>
        <hr className="mb-4" />
        {renderNav(JavascriptRoutes)}
      </div>
    </div>
  );
};

// Home page component
const HomePage = ({ onNavigate }) => {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to React Learning</h1>
      <p className="text-gray-600 mb-6 text-lg">Select a topic from the sidebar to get started</p>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
        <h2 className="font-semibold text-xl mb-4 text-gray-800">🚀 Features of This App:</h2>
        <div className="grid gap-3">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium text-gray-800 mb-1">⚡ Dynamic Lazy Loading</h3>
            <p className="text-sm text-gray-600">Components are loaded on-demand using React.lazy()</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium text-gray-800 mb-1">🔄 Suspense Integration</h3>
            <p className="text-sm text-gray-600">Smooth loading states while components are being fetched</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium text-gray-800 mb-1">📦 Code Splitting</h3>
            <p className="text-sm text-gray-600">Reduces initial bundle size for better performance</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium text-gray-800 mb-1">🛡️ Error Boundaries</h3>
            <p className="text-sm text-gray-600">Graceful error handling for failed component loads</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h2 className="font-semibold text-lg mb-3 text-amber-900">📚 Available Sections:</h2>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-amber-600 mr-2 text-xl">📖</span>
            <div>
              <h3 className="font-medium text-gray-800">Basics</h3>
              <p className="text-sm text-gray-600">Fundamental React concepts including JSX, Virtual DOM, Components, and Events</p>
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
    <div className="p-6 animate-fadeIn">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-700 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-4">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => onNavigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default function JavascriptMain() {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  // Find the current route
  const currentRoute = findRoute(JavascriptRoutes, currentPath);

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
      
      <Sidebar currentPath={currentPath} onNavigate={navigate} />
      
      <main className="flex-1 overflow-y-auto">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            {currentPath === '/' ? (
              <HomePage onNavigate={navigate} />
            ) : currentRoute ? (
              (() => {
                const LazyComponent = getComponent(currentRoute);
                return <LazyComponent />;
              })()
            ) : (
              <NotFound onNavigate={navigate} />
            )}
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}