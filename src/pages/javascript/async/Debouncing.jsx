// Debouncing.jsx
import React, { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default function Debouncing() {

  const [value, setValue] = useState("");

  const handleChange = useCallback(
    debounce((val) => {
      console.log("Debounced Value:", val);
    }, 500),
    []
  );

  const customHookExample = `
  import React, { useState, useEffect } from "react";

//custom hook
const debounce = (value, delay)=> {
  const [debounceVal, setdebounceVal] = useState(value);
  useEffect(()=> {
    let timer = setTimeout(()=> {
      setdebounceVal(value);
    }, delay);
    return ()=> {
      clearTimeout(timer);
    }
  }, [value, delay]); 
  return debounceVal
}


export default function App() {
  const [query, setQuery] = useState();
  let debounceVal = debounce(query, 400);
  useEffect(()=> {
    if(debounceVal) {
      fetch('https://api.example.com/search?q=query').then(result=> result.json()).then(data=> {
        console.log(data);
      }).catch(err=> {
        console.log(err);
      })
    }
  },[debounceVal])
  return (
    <div>
      <input type="text" value={query} onChange={e=>setQuery(e.target.value)} name="queryFielter" />
    </div>
  );
}
  `;

  const jsExample = `// Debounce function: delays execution until after wait time
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Usage: Search input
const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
  handleSearch(e.target.value);
});`;

  const reactExample = `// React Debounce Example with Input
import { useState, useCallback } from 'react';

function DebounceInput() {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    debounce((val) => {
      console.log("Debounced Value:", val);
    }, 500),
    []
  );

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
      }}
      placeholder="Type to search..."
    />
  );
}

// Helper function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}`;

  const explanation = `// Explanation
// 1. Debouncing delays the execution of a function until the user stops triggering the event for a specified time.
// 2. Useful for input fields, search boxes, window resize, or API requests.
// 3. Prevents multiple rapid executions and reduces performance overhead.
// 4. In React, wrap the debounced function in useCallback to preserve the same reference across renders.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">⌛ Debouncing in JavaScript & React</h1>
      
      <p className="mb-4">
        Debouncing ensures that a function runs only after a certain period of inactivity.
        It's commonly used to optimize high-frequency events like typing or scrolling.
      </p>

    <p>
      Example  
      <input type="text" value={value} onChange={(e)=> {
        setValue(e.target.value);
        handleChange(e.target.value);
      }} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Custom Hook Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {customHookExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
