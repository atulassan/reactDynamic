import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MapAllExamples({ theme = "light" }) {
  const [output, setOutput] = useState("");
  const [selectedExample, setSelectedExample] = useState("intro");

  const examples = {
    intro: {
      title: "Creating a Map",
      code: `// Create a new Map
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

console.log(map); // Map(2) {"name" => "Alice", "age" => 25}`,
      run: () => {
        const map = new Map([
          ["name", "Alice"],
          ["age", 25],
        ]);
        return Object.fromEntries(map);
      },
    },

    set: {
      title: "set() — Add or Update Key-Value Pairs",
      code: `const user = new Map();
user.set("name", "Bob");
user.set("age", 30);
user.set("job", "Developer");
console.log(user); // Map(3) {"name" => "Bob", "age" => 30, "job" => "Developer"}`,
      run: () => {
        const user = new Map();
        user.set("name", "Bob");
        user.set("age", 30);
        user.set("job", "Developer");
        return Object.fromEntries(user);
      },
    },

    get: {
      title: "get() — Retrieve Value by Key",
      code: `const settings = new Map();
settings.set("theme", "dark");
settings.set("version", 3);

console.log(settings.get("theme")); // dark
console.log(settings.get("missing")); // undefined`,
      run: () => {
        const settings = new Map();
        settings.set("theme", "dark");
        settings.set("version", 3);
        return {
          theme: settings.get("theme"),
          missing: settings.get("missing"),
        };
      },
    },

    has: {
      title: "has() — Check if Key Exists",
      code: `const map = new Map([["a", 1], ["b", 2]]);
console.log(map.has("a")); // true
console.log(map.has("c")); // false`,
      run: () => {
        const map = new Map([
          ["a", 1],
          ["b", 2],
        ]);
        return { hasA: map.has("a"), hasC: map.has("c") };
      },
    },

    delete: {
      title: "delete() — Remove an Entry",
      code: `const prices = new Map([
  ["apple", 100],
  ["banana", 60],
]);
prices.delete("banana");
console.log(prices); // Map(1) {"apple" => 100}`,
      run: () => {
        const prices = new Map([
          ["apple", 100],
          ["banana", 60],
        ]);
        prices.delete("banana");
        return Object.fromEntries(prices);
      },
    },

    size: {
      title: "size — Property",
      code: `const roles = new Map([
  ["admin", 3],
  ["user", 10],
]);
console.log(roles.size); // 2`,
      run: () => {
        const roles = new Map([
          ["admin", 3],
          ["user", 10],
        ]);
        return roles.size;
      },
    },

    clear: {
      title: "clear() — Remove All Entries",
      code: `const data = new Map([
  ["x", 1],
  ["y", 2],
]);
data.clear();
console.log(data.size); // 0`,
      run: () => {
        const data = new Map([
          ["x", 1],
          ["y", 2],
        ]);
        data.clear();
        return data.size;
      },
    },

    iterate: {
      title: "Iteration — forEach(), keys(), values(), entries()",
      code: `const capitals = new Map([
  ["France", "Paris"],
  ["Japan", "Tokyo"],
]);

// forEach
capitals.forEach((value, key) => console.log(key, "->", value));

// keys()
console.log([...capitals.keys()]); // ["France", "Japan"]

// values()
console.log([...capitals.values()]); // ["Paris", "Tokyo"]

// entries()
console.log([...capitals.entries()]); // [["France", "Paris"], ["Japan", "Tokyo"]]`,
      run: () => {
        const capitals = new Map([
          ["France", "Paris"],
          ["Japan", "Tokyo"],
        ]);
        return {
          keys: [...capitals.keys()],
          values: [...capitals.values()],
          entries: [...capitals.entries()],
        };
      },
    },

    objectKeys: {
      title: "Using Objects as Keys",
      code: `const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

const map = new Map();
map.set(user1, "Admin");
map.set(user2, "Editor");

console.log(map.get(user1)); // "Admin"`,
      run: () => {
        const user1 = { name: "Alice" };
        const user2 = { name: "Bob" };
        const map = new Map();
        map.set(user1, "Admin");
        map.set(user2, "Editor");
        return { user1: map.get(user1), user2: map.get(user2) };
      },
    },

    convert: {
      title: "Convert Map ↔ Object / Array",
      code: `const map = new Map([
  ["x", 1],
  ["y", 2],
]);

// Map → Object
const obj = Object.fromEntries(map);

// Object → Map
const newMap = new Map(Object.entries(obj));

// Map → Array
const arr = Array.from(map.entries());`,
      run: () => {
        const map = new Map([
          ["x", 1],
          ["y", 2],
        ]);
        const obj = Object.fromEntries(map);
        const newMap = new Map(Object.entries(obj));
        return {
          object: obj,
          backToMap: Object.fromEntries(newMap),
          array: Array.from(map.entries()),
        };
      },
    },

    weakmap: {
      title: "WeakMap — Key Must Be an Object",
      code: `const wm = new WeakMap();
const user = { name: "Eve" };

wm.set(user, "Admin");
console.log(wm.get(user)); // "Admin"

// Can't use primitives as keys
// wm.set("x", 10); ❌ TypeError`,
      run: () => {
        const wm = new WeakMap();
        const user = { name: "Eve" };
        wm.set(user, "Admin");
        return wm.get(user);
      },
    },
  };

  const handleRun = (key) => {
    setSelectedExample(key);
    setOutput(examples[key].run());
  };

  const themeStyle = theme === "light" ? solarizedlight : vs;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        🗺️ Comprehensive JavaScript <code>Map</code> Examples
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
