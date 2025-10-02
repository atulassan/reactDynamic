import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Basics() {
  const topics = [
    { title: "What is React?", path: "what-is-react" },
    { title: "Advantages & Limitations", path: "advantages-limitations" },
    { title: "JSX", path: "jsx" },
    { title: "Virtual DOM", path: "virtual-dom" },
    { title: "Diffing & Reconciliation", path: "diffing-reconciliation" },
    { title: "Functional vs Class Components", path: "functional-vs-class-components" },
    { title: "Stateful vs Stateless Components", path: "stateful-vs-stateless" },
    { title: "Lifecycle Methods (Class)", path: "lifecycle-methods-class" },
    { title: "Events", path: "events" },
  ];

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⚛️ React Basics</h1>
      <p className="text-gray-700 mb-6">
        The fundamentals of React — from JSX to lifecycle methods.  
        Select a topic below to explore:
      </p>

      {/* Navigation Menu */}
      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {topics.map((topic) => (
          <Link
            key={topic.path}
            to={topic.path}
            className="block p-4 bg-white border rounded shadow hover:bg-blue-50 transition"
          >
            {topic.title}
          </Link>
        ))}
      </nav>

      {/* Where child routes render */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
