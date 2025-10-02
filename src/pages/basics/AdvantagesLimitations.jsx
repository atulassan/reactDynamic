import React from "react";

export default function AdvantagesLimitations() {
  return (
    <div className="p-6 animate-fadeIn space-y-8 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold text-center">⚛️ React: Advantages & Limitations</h1>

      {/* Advantages */}
      <section className="p-4 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-semibold text-green-600">✅ Advantages of React</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <b>Reusable Components</b> – Build modular UI elements that can be reused across the application.
          </li>
          <li>
            <b>Virtual DOM</b> – Faster updates by only re-rendering parts of the UI that change.
          </li>
          <li>
            <b>Unidirectional Data Flow</b> – Ensures predictable state management.
          </li>
          <li>
            <b>Rich Ecosystem</b> – Tons of libraries, tools, and community support.
          </li>
          <li>
            <b>Server-Side Rendering (SSR)</b> – Improves SEO and performance with frameworks like Next.js.
          </li>
          <li>
            <b>Hooks</b> – Simplified state and lifecycle management without class components.
          </li>
          <li>
            <b>Cross-Platform</b> – React Native allows building mobile apps with React knowledge.
          </li>
        </ul>
      </section>

      {/* Limitations */}
      <section className="p-4 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">⚠️ Limitations of React</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <b>High Pace of Development</b> – Frequent updates may require continuous learning.
          </li>
          <li>
            <b>JSX Learning Curve</b> – Beginners may find JSX confusing at first.
          </li>
          <li>
            <b>Only Covers the View Layer</b> – Needs extra libraries (like Redux, React Query, or Context) for state management and routing.
          </li>
          <li>
            <b>Poor Documentation at Times</b> – Due to rapid growth, some libraries lack clear documentation.
          </li>
          <li>
            <b>SEO Challenges (without SSR)</b> – React apps rendered purely on the client side may face SEO issues.
          </li>
          <li>
            <b>Too Many Choices</b> – Beginners can be overwhelmed by many third-party solutions.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold text-gray-800">📌 Conclusion</h2>
        <p className="text-gray-700 mt-2">
          React is powerful, fast, and flexible, but it requires good architecture
          and additional libraries for a complete solution. It's one of the most
          popular choices for building modern web applications.
        </p>
      </section>
    </div>
  );
}
