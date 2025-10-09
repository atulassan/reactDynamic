import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SetExamples({ theme = "light" }) {
  const [output, setOutput] = useState("");
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      title: "Creating a Set",
      code: `// Create a new Set
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set(3) {1, 2, 3}`,
      run: () => {
        const set = new Set([1, 2, 2, 3]);
        return Array.from(set);
      },
    },
    add: {
      title: "add() — Add Elements",
      code: `const fruits = new Set();
fruits.add("apple");
fruits.add("banana").add("orange");
console.log(fruits); // Set(3) {"apple", "banana", "orange"}`,
      run: () => {
        const fruits = new Set();
        fruits.add("apple");
        fruits.add("banana").add("orange");
        return Array.from(fruits);
      },
    },
    delete: {
      title: "delete() — Remove Elements",
      code: `const nums = new Set([1, 2, 3]);
nums.delete(2);
console.log(nums); // Set(2) {1, 3}`,
      run: () => {
        const nums = new Set([1, 2, 3]);
        nums.delete(2);
        return Array.from(nums);
      },
    },
    has: {
      title: "has() — Check Existence",
      code: `const colors = new Set(["red", "blue"]);
console.log(colors.has("red"));  // true
console.log(colors.has("green")); // false`,
      run: () => {
        const colors = new Set(["red", "blue"]);
        return {
          hasRed: colors.has("red"),
          hasGreen: colors.has("green"),
        };
      },
    },
    size: {
      title: "size — Property",
      code: `const numbers = new Set([1, 2, 3, 4]);
console.log(numbers.size); // 4`,
      run: () => {
        const numbers = new Set([1, 2, 3, 4]);
        return numbers.size;
      },
    },
    clear: {
      title: "clear() — Remove All Elements",
      code: `const s = new Set([1, 2, 3]);
s.clear();
console.log(s.size); // 0`,
      run: () => {
        const s = new Set([1, 2, 3]);
        s.clear();
        return s.size;
      },
    },
    iterate: {
      title: "Iteration — forEach(), values(), keys(), entries()",
      code: `const cities = new Set(["Paris", "London", "Tokyo"]);

// forEach
cities.forEach(c => console.log(c));

// values()
console.log([...cities.values()]);

// keys() — same as values()
console.log([...cities.keys()]);

// entries()
console.log([...cities.entries()]);`,
      run: () => {
        const cities = new Set(["Paris", "London", "Tokyo"]);
        return {
          forEach: Array.from(cities),
          values: [...cities.values()],
          keys: [...cities.keys()],
          entries: [...cities.entries()],
        };
      },
    },
    convert: {
      title: "Convert Set ↔ Array",
      code: `const set = new Set([1, 2, 3]);
const arr = Array.from(set);  // [1, 2, 3]
const backToSet = new Set(arr);`,
      run: () => {
        const set = new Set([1, 2, 3]);
        const arr = Array.from(set);
        const back = new Set(arr);
        return { array: arr, backToSet: Array.from(back) };
      },
    },
    unique: {
      title: "Remove Duplicates from Array",
      code: `const nums = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]`,
      run: () => {
        const nums = [1, 2, 2, 3, 3, 4];
        return [...new Set(nums)];
      },
    },
    operations: {
      title: "Union / Intersection / Difference",
      code: `const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

// Union
const union = new Set([...a, ...b]);

// Intersection
const intersection = new Set([...a].filter(x => b.has(x)));

// Difference
const difference = new Set([...a].filter(x => !b.has(x)));`,
      run: () => {
        const a = new Set([1, 2, 3]);
        const b = new Set([3, 4, 5]);
        const union = new Set([...a, ...b]);
        const intersection = new Set([...a].filter((x) => b.has(x)));
        const difference = new Set([...a].filter((x) => !b.has(x)));
        return {
          union: [...union],
          intersection: [...intersection],
          difference: [...difference],
        };
      },
    },
  };

  const handleRun = (key) => {
    setSelectedExample(key);
    setOutput(examples[key].run());
  };

  const themeStyle = theme === "light" ? solarizedlight : vs;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        🧩 Comprehensive JavaScript <code>Set</code> Examples
      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(examples).map((key) => (
          <button
            key={key}
            onClick={() => handleRun(key)}
            className={`px-3 py-2 rounded-lg shadow text-sm ${
              selectedExample === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
          >
            {examples[key].title}
          </button>
        ))}
      </div>

      <h2 className="font-semibold text-lg mt-4 mb-2">
        ▶ {examples[selectedExample].title}
      </h2>

      <SyntaxHighlighter
        language="javascript"
        style={themeStyle}
        showLineNumbers
        customStyle={{
          borderRadius: "12px",
          padding: "16px",
          fontSize: "0.9rem",
        }}
      >
        {examples[selectedExample].code}
      </SyntaxHighlighter>

      <div className="mt-4 p-4 bg-gray-50 border rounded-lg font-mono text-sm text-gray-800">
        <span className="font-semibold text-blue-600">Output:</span>
        <pre>{JSON.stringify(output, null, 2)}</pre>
      </div>
    </div>
  );
}
