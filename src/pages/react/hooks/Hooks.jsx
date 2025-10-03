import React from "react";
import BasicHooks from "./BasicHooks";
import PerformanceHooks from "./PerformanceHooks";
import AdvancedHooks from "./AdvancedHooks";

export default function Hooks() {
  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 All Hooks Overview</h1>

      {/* Section 1: Basic Hooks */}
      <section className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-2xl font-semibold">1️⃣ Basic Hooks</h2>
        <p className="text-gray-700">useState and useEffect examples with explanations.</p>
        <BasicHooks />
      </section>

      {/* Section 2: Performance Hooks */}
      <section className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-2xl font-semibold">2️⃣ Performance Hooks</h2>
        <p className="text-gray-700">React.memo, useCallback, and useMemo demos with interactive examples.</p>
        <PerformanceHooks />
      </section>

      {/* Section 3: Advanced Hooks */}
      <section className="bg-white p-4 rounded border space-y-2">
        <h2 className="text-2xl font-semibold">3️⃣ Advanced Hooks</h2>
        <p className="text-gray-700">useContext, useReducer, useRef, useTransition, Custom Hooks examples.</p>
        <AdvancedHooks />
      </section>
    </div>
  );
}
