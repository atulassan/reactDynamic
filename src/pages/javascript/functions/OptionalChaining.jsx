import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const OptionalChaining = () => {
  const [activeDemo, setActiveDemo] = useState('basic');
  const [callResult, setCallResult] = useState('');

  // Sample data for demos
  const userWithData = {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'New York',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    hobbies: ['reading', 'gaming'],
    getInfo: function() {
      return `${this.name} from ${this.address.city}`;
    }
  };

  const userWithoutData = {
    name: 'Bob'
    // No address, hobbies, or methods
  };

  const demoScenarios = [
    {
      id: 'nested',
      title: 'Nested Object Access',
      description: 'Access deeply nested properties safely',
      code: `// Without Optional Chaining - Error prone!
const city = user.address.city;
// ❌ TypeError: Cannot read property 'city' of undefined

// With Optional Chaining - Safe!
const city = user?.address?.city;
// ✅ Returns undefined if any part is null/undefined`,
      demo: () => {
        try {
          const withChaining = userWithoutData?.address?.city;
          const withoutChaining = 'Would throw TypeError!';
          return {
            with: withChaining ?? 'undefined',
            without: withoutChaining
          };
        } catch (e) {
          return { error: e.message };
        }
      }
    },
    {
      id: 'array',
      title: 'Array Element Access',
      description: 'Safely access array elements',
      code: `// Access array elements
const firstHobby = user?.hobbies?.[0];
// Returns first hobby or undefined

const thirdHobby = user?.hobbies?.[2];
// Returns undefined if array doesn't exist or is too short`,
      demo: () => {
        return {
          withData: userWithData?.hobbies?.[0] ?? 'No hobby',
          withoutData: userWithoutData?.hobbies?.[0] ?? 'No hobby'
        };
      }
    },
    {
      id: 'function',
      title: 'Optional Function Calls',
      description: 'Call methods that might not exist',
      code: `// Call optional methods
const info = user.getInfo?.();
// Calls method if it exists, returns undefined otherwise

// With parameters
const result = obj.method?.(arg1, arg2);`,
      demo: () => {
        return {
          withMethod: userWithData.getInfo?.() ?? 'Method not found',
          withoutMethod: userWithoutData.getInfo?.() ?? 'Method not found'
        };
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Optional Chaining (?.) Operator</h1>
          <p className="text-indigo-100 text-lg">
            Safe navigation through nested object properties without verbose null checks
          </p>
        </div>

        {/* What is it? */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            What is Optional Chaining?
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg">
              The optional chaining operator (<code className="bg-indigo-100 px-2 py-1 rounded text-indigo-800 font-mono">?.</code>) 
              allows you to safely access deeply nested object properties, even if an intermediate property doesn't exist.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
              <p className="font-semibold text-indigo-800 mb-2">Key Point:</p>
              <p>Instead of causing an error, it returns <code className="bg-indigo-200 px-1 rounded">undefined</code> if 
              any part of the chain is <code className="bg-indigo-200 px-1 rounded">null</code> or 
              <code className="bg-indigo-200 px-1 rounded">undefined</code>.</p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>❌</span>
              Without Optional Chaining
            </h3>
            <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Verbose and error-prone
const city = user && 
             user.address && 
             user.address.city;

// Or with try-catch
try {
  const lat = user
    .address
    .coordinates
    .lat;
} catch (e) {
  console.error(e);
}

// Lots of repetitive checks!
if (user) {
  if (user.address) {
    if (user.address.city) {
      console.log(
        user.address.city
      );
    }
  }
}`}
            </SyntaxHighlighter>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
              <span>✅</span>
              With Optional Chaining
            </h3>
            <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Clean and safe!
const city = user?.address?.city;



// No try-catch needed
const lat = user
  ?.address
  ?.coordinates
  ?.lat;




// Simple and readable
console.log(
  user?.address?.city
);`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Three Forms */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span>
            Three Forms of Optional Chaining
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <div className="text-3xl mb-2">📦</div>
              <h4 className="font-bold text-purple-800 mb-2">Property Access</h4>
              <code className="text-sm bg-purple-100 px-2 py-1 rounded block mb-2">obj?.prop</code>
              <p className="text-sm text-gray-600">Access object properties</p>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`user?.name
user?.address?.city`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <div className="text-3xl mb-2">🔢</div>
              <h4 className="font-bold text-purple-800 mb-2">Array/Computed Access</h4>
              <code className="text-sm bg-purple-100 px-2 py-1 rounded block mb-2">obj?.[expr]</code>
              <p className="text-sm text-gray-600">Access array elements or computed properties</p>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`arr?.[0]
obj?.[key]`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-purple-800 mb-2">Function Calls</h4>
              <code className="text-sm bg-purple-100 px-2 py-1 rounded block mb-2">obj.method?.()</code>
              <p className="text-sm text-gray-600">Call methods that might not exist</p>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`user.getName?.()
onSuccess?.(data)`}
              </pre>
            </div>
          </div>
        </div>

        {/* Interactive Demos */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🎮</span>
            Interactive Demos
          </h2>

          {/* Demo Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {demoScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveDemo(scenario.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeDemo === scenario.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {scenario.title}
              </button>
            ))}
          </div>

          {/* Active Demo */}
          {demoScenarios.map((scenario) => (
            activeDemo === scenario.id && (
              <div key={scenario.id} className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-indigo-800">{scenario.description}</p>
                </div>

                <SyntaxHighlighter language="javascript" style={oneDark}>
                  {scenario.code}
                </SyntaxHighlighter>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-3">✅ User With Data</h4>
                    <div className="bg-white p-3 rounded border border-green-200 mb-3">
                      <pre className="text-xs text-gray-700 overflow-x-auto">
                        {JSON.stringify(userWithData, null, 2)}
                      </pre>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Result:</p>
                      <code className="text-green-800 font-bold">
                        {JSON.stringify(scenario.demo().withData || scenario.demo().with)}
                      </code>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                    <h4 className="font-bold text-orange-800 mb-3">⚠️ User Without Data</h4>
                    <div className="bg-white p-3 rounded border border-orange-200 mb-3">
                      <pre className="text-xs text-gray-700 overflow-x-auto">
                        {JSON.stringify(userWithoutData, null, 2)}
                      </pre>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Result:</p>
                      <code className="text-orange-800 font-bold">
                        {JSON.stringify(scenario.demo().withoutData || scenario.demo().without)}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Real World Examples */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">💼</span>
            Real-World Examples
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// 1. API Response Handling
const userName = apiResponse?.data?.user?.name ?? 'Guest';
const profilePic = apiResponse?.data?.user?.profile?.avatar;

// 2. Event Handling
button.addEventListener('click', (e) => {
  const value = e?.target?.dataset?.value;
  console.log(value);
});

// 3. Optional Callbacks
function fetchData(url, onSuccess, onError) {
  fetch(url)
    .then(response => response.json())
    .then(data => onSuccess?.(data))  // Only call if exists
    .catch(err => onError?.(err));    // Only call if exists
}

// 4. Configuration Objects
const config = {
  api: { timeout: 5000 }
};
const timeout = config?.api?.timeout ?? 3000;
const retries = config?.api?.retries ?? 3;

// 5. DOM Manipulation
const element = document.querySelector('.container');
const text = element?.querySelector('.title')?.textContent;

// 6. Array Operations
const users = [
  { name: 'Alice', profile: { age: 25 } },
  { name: 'Bob' },
  null
];
const ages = users.map(user => user?.profile?.age ?? 'N/A');
// Result: [25, 'N/A', 'N/A']

// 7. Dynamic Property Access
const key = 'address';
const city = user?.[key]?.city;

// 8. Method Chaining
const result = obj
  ?.method1()
  ?.method2()
  ?.property
  ?.method3();

// 9. React Component Props
function UserCard({ user }) {
  return (
    <div>
      <h2>{user?.name ?? 'Anonymous'}</h2>
      <p>{user?.email ?? 'No email'}</p>
      <img src={user?.avatar ?? '/default.png'} />
    </div>
  );
}

// 10. localStorage Access
const savedData = JSON.parse(
  localStorage.getItem('data') ?? '{}'
);
const theme = savedData?.preferences?.theme ?? 'light';

// 11. Error Handling
try {
  const data = JSON.parse(response);
  const value = data?.nested?.value;
} catch (e) {
  console.error(e?.message ?? 'Unknown error');
}

// 12. Combining with Nullish Coalescing
const port = process?.env?.PORT ?? 3000;
const dbUrl = config?.database?.url ?? 'localhost';

// 13. Optional Array Methods
const firstActive = users
  ?.filter(u => u.active)
  ?.[0]
  ?.name;

// 14. GraphQL Response
const posts = graphqlResponse
  ?.data
  ?.user
  ?.posts
  ?.edges
  ?.map(edge => edge?.node);

// 15. Conditional Rendering
const shouldShow = feature?.enabled && 
                   user?.permissions?.includes('admin');`}
          </SyntaxHighlighter>
        </div>

        {/* Common Patterns */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              Best Practices
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Use with nullish coalescing for default values: <code className="bg-gray-100 px-1 rounded">user?.name ?? 'Guest'</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Great for API responses and deeply nested data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Use for optional callbacks and event handlers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Combine with array methods safely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Makes code more readable and maintainable</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              Common Pitfalls
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>Don't use on the left side of assignment: <code className="bg-gray-100 px-1 rounded">obj?.prop = value</code> ❌</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>Can't use with delete: <code className="bg-gray-100 px-1 rounded">delete obj?.prop</code> ❌</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>Only checks null/undefined, not falsy values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>Overuse can hide actual errors in your code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <span>Not a substitute for proper error handling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Performance Note */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
          <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Performance & Behavior
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Short-Circuit Evaluation</p>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-2">
                user?.address?.city?.toUpperCase()
              </code>
              <p>If <code className="bg-gray-200 px-1 rounded">user</code> is null, the rest of the chain is never evaluated.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Returns undefined, not null</p>
              <code className="block bg-gray-100 p-2 rounded text-xs mb-2">
                const result = null?.property; // undefined (not null!)
              </code>
              <p>Optional chaining always returns <code className="bg-gray-200 px-1 rounded">undefined</code> when short-circuiting.</p>
            </div>
          </div>
        </div>

        {/* Browser Support */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            Browser Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-white p-3 rounded border border-indigo-200 text-center">
              <div className="text-2xl mb-1">🦊</div>
              <p className="font-semibold text-sm">Firefox</p>
              <p className="text-xs text-gray-600">74+</p>
            </div>
            <div className="bg-white p-3 rounded border border-indigo-200 text-center">
              <div className="text-2xl mb-1">🎭</div>
              <p className="font-semibold text-sm">Chrome</p>
              <p className="text-xs text-gray-600">80+</p>
            </div>
            <div className="bg-white p-3 rounded border border-indigo-200 text-center">
              <div className="text-2xl mb-1">🧭</div>
              <p className="font-semibold text-sm">Safari</p>
              <p className="text-xs text-gray-600">13.1+</p>
            </div>
            <div className="bg-white p-3 rounded border border-indigo-200 text-center">
              <div className="text-2xl mb-1">📘</div>
              <p className="font-semibold text-sm">Edge</p>
              <p className="text-xs text-gray-600">80+</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            ES2020 feature - Well supported in modern browsers. Use Babel for older browsers.
          </p>
        </div>

        {/* Cheat Sheet */}
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Quick Reference Cheat Sheet
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm font-mono">
            <div className="space-y-2">
              <p className="text-blue-400 font-bold mb-3">// Basic Syntax</p>
              <p><span className="text-green-400">obj?.prop</span> <span className="text-gray-500">// Property</span></p>
              <p><span className="text-green-400">obj?.[expr]</span> <span className="text-gray-500">// Computed</span></p>
              <p><span className="text-green-400">func?.()</span> <span className="text-gray-500">// Function</span></p>
              
              <p className="text-yellow-400 font-bold mt-4 mb-3">// Combining</p>
              <p><span className="text-green-400">a?.b?.c</span> <span className="text-gray-500">// Chain</span></p>
              <p><span className="text-green-400">a?.[b]?.[c]</span> <span className="text-gray-500">// Mixed</span></p>
              <p><span className="text-green-400">a?.b?.()?. c</span> <span className="text-gray-500">// Complex</span></p>
            </div>
            <div className="space-y-2">
              <p className="text-purple-400 font-bold mb-3">// With Nullish Coalescing</p>
              <p><span className="text-green-400">obj?.prop ?? 'default'</span></p>
              <p><span className="text-green-400">arr?.[0] ?? 'empty'</span></p>
              <p><span className="text-green-400">func?.() ?? fallback()</span></p>
              
              <p className="text-orange-400 font-bold mt-4 mb-3">// Returns</p>
              <p><span className="text-gray-400">undefined</span> <span className="text-gray-500">if null/undefined</span></p>
              <p><span className="text-gray-400">value</span> <span className="text-gray-500">otherwise</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalChaining;