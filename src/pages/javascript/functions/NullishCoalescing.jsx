import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


const NullishCoalescing = () => {
  const [testValue, setTestValue] = useState('default');
  const [showComparison, setShowComparison] = useState(false);

  // Test cases for interactive demo
  const testCases = [
    { value: null, label: 'null', description: 'Explicitly no value' },
    { value: undefined, label: 'undefined', description: 'Not defined' },
    { value: '', label: 'Empty String ("")', description: 'Empty but defined' },
    { value: 0, label: 'Zero (0)', description: 'Falsy number' },
    { value: false, label: 'Boolean false', description: 'Falsy boolean' },
    { value: 'Hello', label: 'String "Hello"', description: 'Truthy string' },
    { value: NaN, label: 'NaN', description: 'Not a Number' }
  ];

  const getResult = (value, operator) => {
    if (operator === '??') {
      return value ?? 'fallback';
    } else {
      return value || 'fallback';
    }
  };

  const formatValue = (value) => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (value === '') return '""';
    if (typeof value === 'string') return `"${value}"`;
    if (Number.isNaN(value)) return 'NaN';
    return String(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Nullish Coalescing Operator (??)</h1>
          <p className="text-blue-100 text-lg">
            Understanding JavaScript's nullish coalescing operator and how it differs from OR (||)
          </p>
        </div>

        {/* What is it? */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            What is Nullish Coalescing?
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg">
              The nullish coalescing operator (<code className="bg-blue-100 px-2 py-1 rounded text-blue-800 font-mono">??</code>) 
              is a logical operator that returns its right-hand operand when its left-hand operand is 
              <strong className="text-blue-600"> null</strong> or <strong className="text-blue-600">undefined</strong>, 
              and otherwise returns its left-hand operand.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-semibold text-blue-800 mb-2">Key Point:</p>
              <p>Unlike the OR operator (<code className="bg-blue-200 px-1 rounded">||</code>), 
              it ONLY treats <code className="bg-blue-200 px-1 rounded">null</code> and 
              <code className="bg-blue-200 px-1 rounded">undefined</code> as "nullish", 
              not other falsy values like <code className="bg-blue-200 px-1 rounded">0</code>, 
              <code className="bg-blue-200 px-1 rounded">""</code>, or 
              <code className="bg-blue-200 px-1 rounded">false</code>.</p>
            </div>
          </div>
        </div>

        {/* Syntax */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            Syntax & Examples
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Basic Syntax
const result = value ?? defaultValue;

// Examples
const user = null;
const name = user ?? 'Guest';           // 'Guest'

const count = 0;
const result = count ?? 10;             // 0 (not 10!)

const text = '';
const message = text ?? 'No message';   // '' (not 'No message'!)

// Comparison with OR operator
const a = 0;
console.log(a ?? 100);  // 0  (because 0 is not null/undefined)
console.log(a || 100);  // 100 (because 0 is falsy)

const b = '';
console.log(b ?? 'default');  // ''  (empty string is not null/undefined)
console.log(b || 'default');  // 'default' (empty string is falsy)

// Chaining
const foo = null ?? 'default' ?? 'another';  // 'default'

// With optional chaining
const user = { profile: { name: null } };
const userName = user?.profile?.name ?? 'Anonymous';  // 'Anonymous'

// Function parameters
function greet(name) {
  const greeting = name ?? 'there';
  console.log(\`Hello \${greeting}!\`);
}

greet('Alice');     // Hello Alice!
greet(null);        // Hello there!
greet(undefined);   // Hello there!
greet('');          // Hello ! (empty string is valid!)
greet(0);           // Hello 0! (zero is valid!)`}
          </SyntaxHighlighter>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🎮</span>
            Interactive Comparison Demo
          </h2>
          
          <div className="mb-6">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {showComparison ? 'Hide' : 'Show'} Detailed Comparison
            </button>
          </div>

          <div className="grid gap-4">
            {testCases.map((testCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{testCase.label}</h3>
                      <p className="text-sm text-gray-600">{testCase.description}</p>
                    </div>
                    <code className="bg-white px-3 py-1 rounded border border-gray-300 text-sm font-mono">
                      {formatValue(testCase.value)}
                    </code>
                  </div>
                </div>
                
                {showComparison && (
                  <div className="p-4 bg-white">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Nullish Coalescing Result */}
                      <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-blue-700 font-bold">??</span>
                          <span className="font-semibold text-blue-800">Nullish Coalescing</span>
                        </div>
                        <div className="bg-white p-3 rounded border border-blue-200">
                          <code className="text-sm font-mono text-gray-800">
                            {formatValue(testCase.value)} ?? 'fallback'
                          </code>
                          <div className="mt-2 pt-2 border-t border-blue-200">
                            <span className="text-xs text-gray-600">Result: </span>
                            <span className="font-bold text-blue-700">
                              {formatValue(getResult(testCase.value, '??'))}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* OR Operator Result */}
                      <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-orange-700 font-bold">||</span>
                          <span className="font-semibold text-orange-800">Logical OR</span>
                        </div>
                        <div className="bg-white p-3 rounded border border-orange-200">
                          <code className="text-sm font-mono text-gray-800">
                            {formatValue(testCase.value)} || 'fallback'
                          </code>
                          <div className="mt-2 pt-2 border-t border-orange-200">
                            <span className="text-xs text-gray-600">Result: </span>
                            <span className="font-bold text-orange-700">
                              {formatValue(getResult(testCase.value, '||'))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Explanation */}
                    {getResult(testCase.value, '??') !== getResult(testCase.value, '||') && (
                      <div className="mt-3 bg-yellow-50 p-3 rounded border border-yellow-300">
                        <p className="text-sm text-yellow-800">
                          <strong>⚠️ Different Results!</strong> The OR operator treats this value as falsy, 
                          but nullish coalescing doesn't consider it "nullish".
                        </p>
                      </div>
                    )}
                    {getResult(testCase.value, '??') === getResult(testCase.value, '||') && 
                     (testCase.value === null || testCase.value === undefined) && (
                      <div className="mt-3 bg-green-50 p-3 rounded border border-green-300">
                        <p className="text-sm text-green-800">
                          <strong>✅ Same Result!</strong> Both operators return 'fallback' because 
                          {testCase.value === null ? ' null' : ' undefined'} is both nullish and falsy.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">💡</span>
            Real-World Use Cases
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark}>
{`// 1. Default function parameters (when 0 is valid)
function setVolume(volume) {
  // volume could be 0 (mute), which is valid
  const vol = volume ?? 50;  // ✅ Only use 50 if null/undefined
  console.log(\`Volume set to \${vol}\`);
}
setVolume(0);        // Volume set to 0 ✅
setVolume(null);     // Volume set to 50
setVolume(undefined); // Volume set to 50

// 2. API response handling (empty string is valid data)
function processResponse(response) {
  const username = response.username ?? 'Anonymous';
  // If username is '' (empty string), keep it - it's valid data!
  return username;
}
processResponse({ username: '' });        // Returns '' ✅
processResponse({ username: null });      // Returns 'Anonymous'
processResponse({ username: undefined }); // Returns 'Anonymous'

// 3. Configuration with boolean flags
const config = {
  debug: false,        // false is a valid setting!
  timeout: 0,         // 0 is a valid timeout (no timeout)
  maxRetries: null    // not set
};

const debugMode = config.debug ?? true;     // false ✅ (respects false)
const timeout = config.timeout ?? 3000;     // 0 ✅ (respects 0)
const retries = config.maxRetries ?? 3;     // 3 (null replaced)

// 4. Form data handling
function submitForm(formData) {
  const age = formData.age ?? null;           // 0 is valid age
  const name = formData.name ?? 'Unknown';    // '' might be valid
  const agree = formData.agree ?? false;      // false is valid
  
  return { age, name, agree };
}

// 5. Combining with optional chaining
const user = {
  profile: {
    settings: {
      notifications: 0  // 0 means disabled, valid value
    }
  }
};

const notifCount = user?.profile?.settings?.notifications ?? 10;
// Returns 0, not 10! ✅

// 6. Array operations
const items = [];
const list = items ?? ['default'];  // Returns [] (empty array is valid!)

// 7. Database queries (0 results is valid)
const queryResult = database.count() ?? -1;
// If count() returns 0, keep it - it's valid data!

// 8. Price calculations
function calculateDiscount(discount) {
  // 0 discount is valid (no discount)
  const discountAmount = discount ?? 10;
  return discountAmount;
}
calculateDiscount(0);     // 0 ✅ (no discount)
calculateDiscount(null);  // 10 (default discount)`}
          </SyntaxHighlighter>
        </div>

        {/* Key Differences */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span>??</span>
              Nullish Coalescing
            </h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Only replaces <code className="bg-blue-200 px-1 rounded">null</code> and <code className="bg-blue-200 px-1 rounded">undefined</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Preserves <code className="bg-blue-200 px-1 rounded">0</code>, <code className="bg-blue-200 px-1 rounded">''</code>, <code className="bg-blue-200 px-1 rounded">false</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Perfect for when 0 or empty string are valid values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>More precise control</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
              <span>||</span>
              Logical OR
            </h3>
            <ul className="space-y-2 text-sm text-orange-900">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Replaces ALL falsy values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Treats <code className="bg-orange-200 px-1 rounded">0</code>, <code className="bg-orange-200 px-1 rounded">''</code>, <code className="bg-orange-200 px-1 rounded">false</code>, <code className="bg-orange-200 px-1 rounded">NaN</code> as "missing"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Can cause unexpected behavior with valid 0 or empty strings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Broader replacement scope</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Browser Support */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            Browser Support
          </h3>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded border border-indigo-200 text-center">
              <div className="text-2xl mb-1">🦊</div>
              <p className="font-semibold text-sm">Firefox</p>
              <p className="text-xs text-gray-600">72+</p>
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
          <p className="text-sm text-gray-600 mt-3 text-center">
            ES2020 feature - Well supported in modern browsers
          </p>
        </div>

        {/* Quick Reference */}
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div>
              <p className="text-blue-400 mb-2">// When to use ??</p>
              <p className="text-green-400">✓ When 0 is valid</p>
              <p className="text-green-400">✓ When empty string is valid</p>
              <p className="text-green-400">✓ When false is valid</p>
              <p className="text-green-400">✓ Only replace null/undefined</p>
            </div>
            <div>
              <p className="text-orange-400 mb-2">// When to use ||</p>
              <p className="text-gray-400">• Need to replace any falsy value</p>
              <p className="text-gray-400">• 0 should be treated as "missing"</p>
              <p className="text-gray-400">• Empty string is "missing"</p>
              <p className="text-gray-400">• false means "not provided"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NullishCoalescing;