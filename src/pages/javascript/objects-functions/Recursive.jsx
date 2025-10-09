import React, { useState } from 'react';
import { Play, RotateCw, BookOpen, Zap, Layers } from 'lucide-react';

const Recursive = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [output, setOutput] = useState({});
  const [visualSteps, setVisualSteps] = useState([]);

  const recursionExamples = {
    basics: {
      title: 'Recursion Basics',
      icon: BookOpen,
      examples: [
        {
          name: 'What is Recursion?',
          description: 'A function that calls itself until it reaches a base case',
          code: `// Simple countdown example
function countdown(n) {
  // Base case - stop condition
  if (n <= 0) {
    return "Done!";
  }
  
  console.log(n);
  
  // Recursive case - function calls itself
  return countdown(n - 1);
}

countdown(5);`,
          runnable: () => {
            const steps = [];
            function countdown(n) {
              if (n <= 0) {
                steps.push(`Base case reached: n = ${n}`);
                return "Done!";
              }
              steps.push(`Call: countdown(${n})`);
              return countdown(n - 1);
            }
            const result = countdown(5);
            return { result, steps };
          }
        },
        {
          name: 'Anatomy of Recursion',
          description: 'Every recursive function needs a base case and recursive case',
          code: `function factorial(n) {
  // BASE CASE: Stopping condition
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // RECURSIVE CASE: Function calls itself
  // with a smaller problem
  return n * factorial(n - 1);
}

factorial(5);
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1 = 120`,
          runnable: () => {
            const steps = [];
            function factorial(n, depth = 0) {
              const indent = '  '.repeat(depth);
              if (n === 0 || n === 1) {
                steps.push(`${indent}factorial(${n}) → 1 (base case)`);
                return 1;
              }
              steps.push(`${indent}factorial(${n}) = ${n} × factorial(${n-1})`);
              const result = n * factorial(n - 1, depth + 1);
              steps.push(`${indent}factorial(${n}) → ${result}`);
              return result;
            }
            const result = factorial(5);
            return { result, steps };
          }
        },
        {
          name: 'Call Stack Visualization',
          description: 'Understanding how recursion uses the call stack',
          code: `function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

sum(4);

// Call Stack:
// sum(4) → waits for sum(3)
//   sum(3) → waits for sum(2)
//     sum(2) → waits for sum(1)
//       sum(1) → returns 1
//     sum(2) → returns 3
//   sum(3) → returns 6
// sum(4) → returns 10`,
          runnable: () => {
            const steps = [];
            const stack = [];
            
            function sum(n) {
              stack.push(`sum(${n})`);
              steps.push(`📥 Push: ${stack.join(' → ')}`);
              
              if (n === 1) {
                steps.push(`✅ Base case: sum(1) returns 1`);
                stack.pop();
                steps.push(`📤 Pop: ${stack.join(' → ') || 'empty'}`);
                return 1;
              }
              
              const result = n + sum(n - 1);
              steps.push(`✅ sum(${n}) returns ${result}`);
              stack.pop();
              steps.push(`📤 Pop: ${stack.join(' → ') || 'empty'}`);
              return result;
            }
            
            const result = sum(4);
            return { result, steps };
          }
        }
      ]
    },
    patterns: {
      title: 'Common Patterns',
      icon: Layers,
      examples: [
        {
          name: 'Linear Recursion',
          description: 'Function makes one recursive call',
          code: `// Sum of array elements
function sumArray(arr) {
  // Base case: empty array
  if (arr.length === 0) return 0;
  
  // Take first element + sum of rest
  return arr[0] + sumArray(arr.slice(1));
}

sumArray([1, 2, 3, 4, 5]); // 15`,
          runnable: () => {
            const steps = [];
            function sumArray(arr, depth = 0) {
              const indent = '  '.repeat(depth);
              if (arr.length === 0) {
                steps.push(`${indent}sumArray([]) → 0`);
                return 0;
              }
              steps.push(`${indent}sumArray([${arr}]) = ${arr[0]} + sumArray([${arr.slice(1)}])`);
              const result = arr[0] + sumArray(arr.slice(1), depth + 1);
              steps.push(`${indent}sumArray([${arr}]) → ${result}`);
              return result;
            }
            const result = sumArray([1, 2, 3, 4, 5]);
            return { result, steps };
          }
        },
        {
          name: 'Binary Recursion',
          description: 'Function makes two recursive calls',
          code: `// Fibonacci sequence
function fibonacci(n) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Two recursive calls
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(6); // 8`,
          runnable: () => {
            const steps = [];
            let callCount = 0;
            
            function fibonacci(n, depth = 0) {
              callCount++;
              const indent = '  '.repeat(depth);
              
              if (n === 0) {
                steps.push(`${indent}fib(0) → 0`);
                return 0;
              }
              if (n === 1) {
                steps.push(`${indent}fib(1) → 1`);
                return 1;
              }
              
              steps.push(`${indent}fib(${n}) = fib(${n-1}) + fib(${n-2})`);
              const result = fibonacci(n - 1, depth + 1) + fibonacci(n - 2, depth + 1);
              steps.push(`${indent}fib(${n}) → ${result}`);
              return result;
            }
            
            const result = fibonacci(6);
            return { result, steps: steps.slice(0, 30), callCount };
          }
        },
        {
          name: 'Tail Recursion',
          description: 'Recursive call is the last operation (optimizable)',
          code: `// Regular recursion (not tail)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // multiply after
}

// Tail recursion
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, n * acc); // no operation after
}

factorialTail(5); // 120`,
          runnable: () => {
            const steps = [];
            
            function factorialTail(n, acc = 1, depth = 0) {
              const indent = '  '.repeat(depth);
              steps.push(`${indent}factorialTail(${n}, ${acc})`);
              
              if (n <= 1) {
                steps.push(`${indent}Base case reached → ${acc}`);
                return acc;
              }
              
              return factorialTail(n - 1, n * acc, depth + 1);
            }
            
            const result = factorialTail(5);
            return { result, steps };
          }
        }
      ]
    },
    practical: {
      title: 'Practical Examples',
      icon: Zap,
      examples: [
        {
          name: 'Flatten Nested Array',
          description: 'Recursively flatten multi-dimensional arrays',
          code: `function flatten(arr) {
  let result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursive case: flatten nested array
      result = result.concat(flatten(item));
    } else {
      // Base case: add non-array item
      result.push(item);
    }
  }
  
  return result;
}

flatten([1, [2, [3, [4]], 5]]); // [1,2,3,4,5]`,
          runnable: () => {
            const steps = [];
            
            function flatten(arr, depth = 0) {
              const indent = '  '.repeat(depth);
              steps.push(`${indent}flatten([${JSON.stringify(arr).slice(1, -1)}])`);
              
              let result = [];
              
              for (let item of arr) {
                if (Array.isArray(item)) {
                  result = result.concat(flatten(item, depth + 1));
                } else {
                  result.push(item);
                }
              }
              
              steps.push(`${indent}→ [${result}]`);
              return result;
            }
            
            const result = flatten([1, [2, [3, [4]], 5]]);
            return { result, steps };
          }
        },
        {
          name: 'Deep Clone Object',
          description: 'Create a deep copy of nested objects',
          code: `function deepClone(obj) {
  // Base cases
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle objects
  const cloned = {};
  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  
  return cloned;
}

const original = { a: 1, b: { c: 2, d: { e: 3 } } };
const copy = deepClone(original);`,
          runnable: () => {
            const steps = [];
            
            function deepClone(obj, path = 'root', depth = 0) {
              const indent = '  '.repeat(depth);
              
              if (obj === null || typeof obj !== 'object') {
                steps.push(`${indent}${path}: ${obj} (primitive)`);
                return obj;
              }
              
              if (Array.isArray(obj)) {
                steps.push(`${indent}${path}: Array[${obj.length}]`);
                return obj.map((item, i) => deepClone(item, `${path}[${i}]`, depth + 1));
              }
              
              steps.push(`${indent}${path}: Object{${Object.keys(obj).join(', ')}}`);
              const cloned = {};
              for (let key in obj) {
                cloned[key] = deepClone(obj[key], `${path}.${key}`, depth + 1);
              }
              
              return cloned;
            }
            
            const original = { a: 1, b: { c: 2, d: { e: 3 } } };
            const result = deepClone(original);
            return { result: JSON.stringify(result), steps };
          }
        },
        {
          name: 'Binary Search (Recursive)',
          description: 'Search sorted array by dividing in half',
          code: `function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: not found
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  // Base case: found
  if (arr[mid] === target) return mid;
  
  // Recursive cases
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

binarySearch([1, 3, 5, 7, 9, 11, 13], 7); // 3`,
          runnable: () => {
            const steps = [];
            
            function binarySearch(arr, target, left = 0, right = arr.length - 1, depth = 0) {
              const indent = '  '.repeat(depth);
              
              if (left > right) {
                steps.push(`${indent}Not found (left > right)`);
                return -1;
              }
              
              const mid = Math.floor((left + right) / 2);
              steps.push(`${indent}Search [${left}..${right}], mid=${mid}, arr[${mid}]=${arr[mid]}`);
              
              if (arr[mid] === target) {
                steps.push(`${indent}✓ Found at index ${mid}`);
                return mid;
              }
              
              if (arr[mid] > target) {
                steps.push(`${indent}${arr[mid]} > ${target}, search left half`);
                return binarySearch(arr, target, left, mid - 1, depth + 1);
              } else {
                steps.push(`${indent}${arr[mid]} < ${target}, search right half`);
                return binarySearch(arr, target, mid + 1, right, depth + 1);
              }
            }
            
            const result = binarySearch([1, 3, 5, 7, 9, 11, 13], 7);
            return { result, steps };
          }
        },
        {
          name: 'Generate Permutations',
          description: 'Find all possible arrangements',
          code: `function permute(arr) {
  // Base case: single element
  if (arr.length <= 1) return [arr];
  
  const result = [];
  
  // Take each element as first
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    
    // Get permutations of remaining
    const perms = permute(remaining);
    
    // Add current to each permutation
    for (let perm of perms) {
      result.push([current, ...perm]);
    }
  }
  
  return result;
}

permute([1, 2, 3]);`,
          runnable: () => {
            const steps = [];
            
            function permute(arr, depth = 0) {
              const indent = '  '.repeat(depth);
              
              if (arr.length <= 1) {
                steps.push(`${indent}Base: [${arr}]`);
                return [arr];
              }
              
              steps.push(`${indent}Permute [${arr}]`);
              const result = [];
              
              for (let i = 0; i < arr.length; i++) {
                const current = arr[i];
                const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
                const perms = permute(remaining, depth + 1);
                
                for (let perm of perms) {
                  result.push([current, ...perm]);
                }
              }
              
              steps.push(`${indent}→ Found ${result.length} permutations`);
              return result;
            }
            
            const result = permute([1, 2, 3]);
            return { result: JSON.stringify(result), steps, count: result.length };
          }
        }
      ]
    },
    pitfalls: {
      title: 'Common Pitfalls',
      icon: RotateCw,
      examples: [
        {
          name: 'Missing Base Case',
          description: '❌ This causes infinite recursion and stack overflow',
          code: `// BAD - No base case!
function infiniteRecursion(n) {
  console.log(n);
  return infiniteRecursion(n - 1);
  // Stack overflow! No stopping condition
}

// GOOD - Has base case
function properRecursion(n) {
  if (n <= 0) return; // Base case
  console.log(n);
  return properRecursion(n - 1);
}`,
          runnable: () => {
            const steps = [];
            let callCount = 0;
            const maxCalls = 10;
            
            function limitedRecursion(n) {
              if (callCount >= maxCalls) {
                steps.push(`⚠️ Stopped at ${maxCalls} calls to prevent overflow`);
                return '...would continue infinitely';
              }
              callCount++;
              steps.push(`Call ${callCount}: infiniteRecursion(${n})`);
              return limitedRecursion(n - 1);
            }
            
            try {
              limitedRecursion(100);
            } catch (e) {
              steps.push(`💥 Error: ${e.message}`);
            }
            
            return { result: 'Stack Overflow!', steps };
          }
        },
        {
          name: 'Not Moving Toward Base Case',
          description: '❌ Parameters must progress toward the base case',
          code: `// BAD - Never reaches base case
function broken(n) {
  if (n === 0) return 0;
  return broken(n); // n never changes!
}

// GOOD - Moves toward base case
function working(n) {
  if (n === 0) return 0;
  return working(n - 1); // n decreases
}`,
          runnable: () => {
            const steps = [];
            steps.push('❌ broken(5) → broken(5) → broken(5) → ...');
            steps.push('Never reaches base case n === 0');
            steps.push('');
            steps.push('✅ working(5) → working(4) → working(3) → working(2) → working(1) → working(0)');
            steps.push('Properly moves toward base case');
            
            return { result: 'Always modify parameters!', steps };
          }
        },
        {
          name: 'Stack Overflow',
          description: 'Too many recursive calls can exceed call stack limit',
          code: `// This will crash with large n
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Stack overflow around n > 10000
factorial(100000); // 💥

// Solution: Use iteration or tail recursion
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}`,
          runnable: () => {
            const steps = [];
            steps.push('JavaScript call stack has limits:');
            steps.push('• Chrome: ~10,000-15,000 calls');
            steps.push('• Firefox: ~50,000 calls');
            steps.push('• Node.js: ~10,000 calls');
            steps.push('');
            steps.push('Solutions:');
            steps.push('1. Use iteration for deep recursion');
            steps.push('2. Use tail recursion (if optimized)');
            steps.push('3. Use trampolining technique');
            steps.push('4. Increase stack size (Node.js only)');
            
            return { result: 'Be mindful of depth!', steps };
          }
        },
        {
          name: 'Performance Issues',
          description: 'Naive recursion can be extremely slow',
          code: `// BAD - Exponential time O(2^n)
function fibSlow(n) {
  if (n <= 1) return n;
  return fibSlow(n - 1) + fibSlow(n - 2);
  // Recalculates same values many times!
}

// GOOD - With memoization O(n)
function fibFast(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibFast(n - 1, memo) + fibFast(n - 2, memo);
  return memo[n];
}`,
          runnable: () => {
            const steps = [];
            let slowCalls = 0;
            let fastCalls = 0;
            
            function fibSlow(n) {
              slowCalls++;
              if (n <= 1) return n;
              return fibSlow(n - 1) + fibSlow(n - 2);
            }
            
            function fibFast(n, memo = {}) {
              fastCalls++;
              if (n <= 1) return n;
              if (memo[n]) return memo[n];
              memo[n] = fibFast(n - 1, memo) + fibFast(n - 2, memo);
              return memo[n];
            }
            
            const n = 10;
            const slow = fibSlow(n);
            const fast = fibFast(n);
            
            steps.push(`Calculating fibonacci(${n}):`);
            steps.push(`• Naive recursion: ${slowCalls} calls`);
            steps.push(`• With memoization: ${fastCalls} calls`);
            steps.push(`• Speed improvement: ${(slowCalls/fastCalls).toFixed(1)}x faster`);
            
            return { result: `Both return ${slow}`, steps };
          }
        }
      ]
    }
  };

  const runExample = (tabKey, exampleIndex) => {
    const result = recursionExamples[tabKey].examples[exampleIndex].runnable();
    setOutput({ ...output, [`${tabKey}-${exampleIndex}`]: result });
  };

  const tabs = Object.keys(recursionExamples);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <RotateCw className="text-purple-300" size={40} />
            <h1 className="text-5xl font-bold text-white">JavaScript Recursion</h1>
          </div>
          <p className="text-purple-200 text-lg">Master the art of functions calling themselves</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 bg-slate-900/50 p-4 rounded-xl backdrop-blur-sm">
          {tabs.map(tab => {
            const Icon = recursionExamples[tab].icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon size={18} />
                {recursionExamples[tab].title}
              </button>
            );
          })}
        </div>

        {/* Examples */}
        <div className="space-y-6">
          {recursionExamples[activeTab].examples.map((example, index) => (
            <div key={index} className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">{example.name}</h3>
                  <p className="text-slate-300">{example.description}</p>
                </div>
                <button
                  onClick={() => runExample(activeTab, index)}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all shadow-lg shadow-green-500/30 flex-shrink-0"
                >
                  <Play size={18} />
                  Run & Visualize
                </button>
              </div>

              <pre className="bg-slate-950 text-emerald-400 p-5 rounded-lg overflow-x-auto mb-4 border border-slate-700 text-sm">
                <code>{example.code}</code>
              </pre>

              {output[`${activeTab}-${index}`] && (
                <div className="space-y-4">
                  {/* Result */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-400/30 rounded-lg p-4">
                    <div className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                      <Zap size={16} />
                      Result:
                    </div>
                    <div className="text-yellow-300 font-mono text-lg">
                      {output[`${activeTab}-${index}`].result}
                    </div>
                    {output[`${activeTab}-${index}`].callCount && (
                      <div className="text-pink-300 text-sm mt-2">
                        Total recursive calls: {output[`${activeTab}-${index}`].callCount}
                      </div>
                    )}
                    {output[`${activeTab}-${index}`].count && (
                      <div className="text-pink-300 text-sm mt-2">
                        Total permutations: {output[`${activeTab}-${index}`].count}
                      </div>
                    )}
                  </div>

                  {/* Steps */}
                  {output[`${activeTab}-${index}`].steps && (
                    <div className="bg-slate-950 border border-purple-500/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                      <div className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                        <Layers size={16} />
                        Execution Steps:
                      </div>
                      <div className="space-y-1 font-mono text-sm">
                        {output[`${activeTab}-${index}`].steps.map((step, i) => (
                          <div key={i} className="text-cyan-300 leading-relaxed">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Concepts */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen size={24} />
            Key Concepts to Remember
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-purple-100">
            <div>
              <h4 className="font-bold text-purple-300 mb-2">✓ Must Have:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Base case (stopping condition)</li>
                <li>• Recursive case (calls itself)</li>
                <li>• Progress toward base case</li>
                <li>• Return values properly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-pink-300 mb-2">⚡ Performance Tips:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use memoization for repeated calculations</li>
                <li>• Consider iteration for deep recursion</li>
                <li>• Tail recursion when possible</li>
                <li>• Watch out for exponential complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursive;