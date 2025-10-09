import React, { useState } from 'react';
import { Code, Play } from 'lucide-react';

const TypeCoercionNew = () => {
  const [activeTab, setActiveTab] = useState('type-coercion');
  const [output, setOutput] = useState({});

  const edgeCases = {
    'type-coercion': {
      title: 'Type Coercion',
      cases: [
        {
          name: 'Array Equality Quirks',
          code: `[] == ![]  // true
[] == 0    // true
[] == ''   // true
'' == 0    // true
null == undefined  // true
null === undefined // false`,
          runnable: () => ({
            '[] == ![]': [] == ![],
            '[] == 0': [] == 0,
            "[] == ''": [] == '',
            "'' == 0": '' == 0,
            'null == undefined': null == undefined,
            'null === undefined': null === undefined
          })
        },
        {
          name: 'Addition vs Concatenation',
          code: `1 + '1'    // '11'
1 + + '1'  // 2
'5' - 3    // 2
'5' + 3    // '53'`,
          runnable: () => ({
            "1 + '1'": 1 + '1',
            "1 + + '1'": 1 + + '1',
            "'5' - 3": '5' - 3,
            "'5' + 3": '5' + 3
          })
        },
        {
          name: 'Boolean Coercion',
          code: `Boolean([])        // true
Boolean([].length)  // false
Boolean({})        // true
Boolean('')        // false`,
          runnable: () => ({
            'Boolean([])': Boolean([]),
            'Boolean([].length)': Boolean([].length),
            'Boolean({})': Boolean({}),
            "Boolean('')": Boolean('')
          })
        }
      ]
    },
    'numbers': {
      title: 'Number Edge Cases',
      cases: [
        {
          name: 'NaN Peculiarities',
          code: `NaN === NaN  // false
typeof NaN   // 'number'
isNaN('hello')  // true
Number.isNaN('hello')  // false`,
          runnable: () => ({
            'NaN === NaN': NaN === NaN,
            'typeof NaN': typeof NaN,
            "isNaN('hello')": isNaN('hello'),
            "Number.isNaN('hello')": Number.isNaN('hello')
          })
        },
        {
          name: 'Infinity',
          code: `1 / 0        // Infinity
-1 / 0       // -Infinity
Infinity - Infinity  // NaN
typeof Infinity  // 'number'`,
          runnable: () => ({
            '1 / 0': 1 / 0,
            '-1 / 0': -1 / 0,
            'Infinity - Infinity': Infinity - Infinity,
            'typeof Infinity': typeof Infinity
          })
        },
        {
          name: 'Floating Point Precision',
          code: `0.1 + 0.2 === 0.3  // false
0.1 + 0.2  // 0.30000000000000004
0.3 - 0.2 === 0.1  // false`,
          runnable: () => ({
            '0.1 + 0.2 === 0.3': 0.1 + 0.2 === 0.3,
            '0.1 + 0.2': 0.1 + 0.2,
            '0.3 - 0.2 === 0.1': 0.3 - 0.2 === 0.1
          })
        },
        {
          name: 'Negative Zero',
          code: `-0 === 0  // true
Object.is(-0, 0)  // false
1 / -0  // -Infinity
1 / 0   // Infinity`,
          runnable: () => ({
            '-0 === 0': -0 === 0,
            'Object.is(-0, 0)': Object.is(-0, 0),
            '1 / -0': 1 / -0,
            '1 / 0': 1 / 0
          })
        }
      ]
    },
    'arrays': {
      title: 'Array Edge Cases',
      cases: [
        {
          name: 'Sparse Arrays',
          code: `const sparse = [1, , 3]
sparse.length  // 3
sparse[1]      // undefined
1 in sparse    // false`,
          runnable: () => {
            const sparse = [1, , 3];
            return {
              'sparse.length': sparse.length,
              'sparse[1]': sparse[1],
              '1 in sparse': 1 in sparse,
              'sparse': JSON.stringify(sparse)
            };
          }
        },
        {
          name: 'Array Length Manipulation',
          code: `const arr = [1, 2, 3]
arr.length = 1  // [1]
arr.length = 5  // [1, empty × 4]`,
          runnable: () => {
            const arr1 = [1, 2, 3];
            arr1.length = 1;
            const arr2 = [1];
            arr2.length = 5;
            return {
              'After length = 1': JSON.stringify(arr1),
              'After length = 5': `[${arr2.map((v, i) => v !== undefined ? v : 'empty').join(', ')}]`
            };
          }
        },
        {
          name: 'Sort Surprises',
          code: `[1, 10, 2].sort()  // [1, 10, 2]
[1, 10, 2].sort((a,b) => a-b)  // [1, 2, 10]`,
          runnable: () => ({
            '[1, 10, 2].sort()': JSON.stringify([1, 10, 2].sort()),
            '[1, 10, 2].sort((a,b) => a-b)': JSON.stringify([1, 10, 2].sort((a,b) => a-b))
          })
        },
        {
          name: 'Array.isArray',
          code: `Array.isArray([])  // true
Array.isArray({})  // false
Array.isArray('') // false
[] instanceof Array  // true`,
          runnable: () => ({
            'Array.isArray([])': Array.isArray([]),
            'Array.isArray({})': Array.isArray({}),
            "Array.isArray('')": Array.isArray(''),
            '[] instanceof Array': [] instanceof Array
          })
        }
      ]
    },
    'objects': {
      title: 'Object Edge Cases',
      cases: [
        {
          name: 'Property Access',
          code: `const obj = { '123': 'numeric' }
obj['123']  // 'numeric'
obj.hasOwnProperty('123')  // true`,
          runnable: () => {
            const obj = { '123': 'numeric' };
            return {
              "obj['123']": obj['123'],
              "obj.hasOwnProperty('123')": obj.hasOwnProperty('123')
            };
          }
        },
        {
          name: 'Object.assign Edge Cases',
          code: `Object.assign({}, null)  // {}
Object.assign({}, undefined)  // {}
Object.assign({a:1}, {a:2})  // {a:2}`,
          runnable: () => ({
            'Object.assign({}, null)': JSON.stringify(Object.assign({}, null)),
            'Object.assign({}, undefined)': JSON.stringify(Object.assign({}, undefined)),
            'Object.assign({a:1}, {a:2})': JSON.stringify(Object.assign({a:1}, {a:2}))
          })
        },
        {
          name: 'Object Keys',
          code: `const obj = Object.create({inherited: 1})
obj.own = 2
Object.keys(obj)  // ['own']`,
          runnable: () => {
            const obj = Object.create({inherited: 1});
            obj.own = 2;
            return {
              'Object.keys(obj)': JSON.stringify(Object.keys(obj)),
              'obj.inherited': obj.inherited,
              'obj.own': obj.own
            };
          }
        }
      ]
    },
    'strings': {
      title: 'String Edge Cases',
      cases: [
        {
          name: 'Unicode and Length',
          code: `'😀'.length  // 2 (surrogate pairs)
[...'😀'].length  // 1
'👨‍👩‍👧‍👦'.length  // 11`,
          runnable: () => ({
            "'😀'.length": '😀'.length,
            "[...'😀'].length": [...'😀'].length,
            "'👨‍👩‍👧‍👦'.length": '👨‍👩‍👧‍👦'.length,
            "[...'👨‍👩‍👧‍👦'].length": [...'👨‍👩‍👧‍👦'].length
          })
        },
        {
          name: 'Empty String Coercion',
          code: `'' == 0      // true
'' === 0     // false
+''          // 0
!''.length   // true`,
          runnable: () => ({
            "'' == 0": '' == 0,
            "'' === 0": '' === 0,
            "+''": +'',
            "!''.length": !''.length
          })
        },
        {
          name: 'Template Literals',
          code: `\`\${undefined}\`  // 'undefined'
\`\${null}\`       // 'null'
\`\${NaN}\`        // 'NaN'
\`\${{}}\`         // '[object Object]'`,
          runnable: () => ({
            '`${undefined}`': `${undefined}`,
            '`${null}`': `${null}`,
            '`${NaN}`': `${NaN}`,
            '`${{}}`': `${{}}`
          })
        }
      ]
    },
    'null-undefined': {
      title: 'Null & Undefined',
      cases: [
        {
          name: 'typeof Quirk',
          code: `typeof null  // 'object' (bug)
typeof undefined  // 'undefined'
null instanceof Object  // false`,
          runnable: () => ({
            'typeof null': typeof null,
            'typeof undefined': typeof undefined,
            'null instanceof Object': null instanceof Object
          })
        },
        {
          name: 'Optional Chaining',
          code: `null?.property  // undefined
undefined?.property  // undefined
null?.[0]  // undefined`,
          runnable: () => ({
            'null?.property': null?.property,
            'undefined?.property': undefined?.property,
            'null?.[0]': null?.[0]
          })
        },
        {
          name: 'Nullish Coalescing',
          code: `0 ?? 'default'     // 0
'' ?? 'default'    // ''
null ?? 'default'  // 'default'
false ?? 'default' // false`,
          runnable: () => ({
            "0 ?? 'default'": 0 ?? 'default',
            "'' ?? 'default'": '' ?? 'default',
            "null ?? 'default'": null ?? 'default',
            "false ?? 'default'": false ?? 'default'
          })
        }
      ]
    },
    'operators': {
      title: 'Operator Edge Cases',
      cases: [
        {
          name: 'Comma Operator',
          code: `let x = (1, 2, 3)  // x = 3
let y = (4, 5)  // y = 5`,
          runnable: () => {
            let x = (1, 2, 3);
            let y = (4, 5);
            return { x, y };
          }
        },
        {
          name: 'void Operator',
          code: `void 0  // undefined
void 1  // undefined
void (1 + 1)  // undefined`,
          runnable: () => ({
            'void 0': void 0,
            'void 1': void 1,
            'void (1 + 1)': void (1 + 1)
          })
        },
        {
          name: 'typeof',
          code: `typeof undefined  // 'undefined'
typeof []  // 'object'
typeof function(){}  // 'function'
typeof class{}  // 'function'`,
          runnable: () => ({
            'typeof undefined': typeof undefined,
            'typeof []': typeof [],
            'typeof function(){}': typeof function(){},
            'typeof class{}': typeof class{}
          })
        },
        {
          name: 'delete Operator',
          code: `const obj = { prop: 1 }
delete obj.prop  // true
delete obj.nonExistent  // true`,
          runnable: () => {
            const obj = { prop: 1 };
            const result1 = delete obj.prop;
            const result2 = delete obj.nonExistent;
            return {
              'delete obj.prop': result1,
              'delete obj.nonExistent': result2,
              'obj after delete': JSON.stringify(obj)
            };
          }
        }
      ]
    },
    'dates': {
      title: 'Date Edge Cases',
      cases: [
        {
          name: 'Invalid Dates',
          code: `new Date('invalid')  // Invalid Date
new Date('invalid').toString()
new Date('2024-02-30')  // Invalid`,
          runnable: () => ({
            'new Date("invalid")': new Date('invalid').toString(),
            'new Date("2024-02-30")': new Date('2024-02-30').toString(),
            'isNaN(new Date("invalid"))': isNaN(new Date('invalid'))
          })
        },
        {
          name: 'Month Zero-Indexed',
          code: `new Date(2024, 0, 1)  // Jan 1
new Date(2024, 12, 1)  // Jan 1, 2025
new Date(2024, 1, 30)  // March 1`,
          runnable: () => ({
            'new Date(2024, 0, 1)': new Date(2024, 0, 1).toDateString(),
            'new Date(2024, 12, 1)': new Date(2024, 12, 1).toDateString(),
            'new Date(2024, 1, 30)': new Date(2024, 1, 30).toDateString()
          })
        }
      ]
    },
    'scope': {
      title: 'Scope & Hoisting',
      cases: [
        {
          name: 'Variable Hoisting',
          code: `console.log(x)  // undefined
var x = 5
// let/const throw ReferenceError`,
          runnable: () => {
            try {
              var testVar;
              const result1 = testVar; // undefined
              testVar = 5;
              return {
                'var before assignment': result1,
                'var after assignment': testVar
              };
            } catch (e) {
              return { error: e.message };
            }
          }
        },
        {
          name: 'Function Hoisting',
          code: `test()  // Works!
function test() { return 'hoisted' }`,
          runnable: () => {
            function test() { return 'hoisted'; }
            return {
              'function call before declaration': test()
            };
          }
        }
      ]
    }
  };

  const runExample = (tabKey, caseIndex) => {
    const result = edgeCases[tabKey].cases[caseIndex].runnable();
    setOutput({ ...output, [`${tabKey}-${caseIndex}`]: result });
  };

  const tabs = Object.keys(edgeCases);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">JavaScript Edge Cases Explorer</h1>
          <p className="text-purple-200">Interactive demonstrations of JavaScript's quirky behavior</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {edgeCases[tab].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-4">
          {edgeCases[activeTab].cases.map((caseItem, index) => (
            <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                  <Code size={20} />
                  {caseItem.name}
                </h3>
                <button
                  onClick={() => runExample(activeTab, index)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-lg shadow-green-500/30"
                >
                  <Play size={16} />
                  Run Code
                </button>
              </div>

              <pre className="bg-slate-950 text-green-400 p-4 rounded-lg overflow-x-auto mb-4 border border-slate-700">
                <code>{caseItem.code}</code>
              </pre>

              {output[`${activeTab}-${index}`] && (
                <div className="bg-slate-950 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-purple-400 font-semibold mb-2">Output:</div>
                  <div className="space-y-1">
                    {Object.entries(output[`${activeTab}-${index}`]).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-blue-400">{key}:</span>{' '}
                        <span className="text-yellow-300">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div className="mt-8 bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Best Practices</h3>
          <ul className="space-y-2 text-purple-100">
            <li>✓ Use strict equality (===) instead of loose equality (==)</li>
            <li>✓ Use Number.isNaN() instead of isNaN()</li>
            <li>✓ Check for null/undefined explicitly or use optional chaining</li>
            <li>✓ Be careful with floating-point arithmetic</li>
            <li>✓ Use Array.isArray() instead of instanceof Array</li>
            <li>✓ Always handle promise rejections</li>
            <li>✓ Use strict mode ('use strict')</li>
            <li>✓ Validate and sanitize inputs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TypeCoercionNew;