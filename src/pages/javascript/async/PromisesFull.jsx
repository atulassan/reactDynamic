// PromisesFull.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PromisesFull() {
  const jsExample = `// Promises Methods in JavaScript

// 1. Basic Promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise1
  .then(result => console.log("Then:", result))
  .catch(error => console.error("Catch:", error))
  .finally(() => console.log("Finally: Promise completed"));

// 2. Promise.all - waits for all promises to resolve
const promise2 = Promise.resolve(10);
const promise3 = Promise.resolve(20);
Promise.all([promise1, promise2, promise3])
  .then(results => console.log("All:", results))
  .catch(err => console.error(err));

// 3. Promise.allSettled - waits for all promises, regardless of success/failure
const failingPromise = Promise.reject("Failed");
Promise.allSettled([promise1, failingPromise])
  .then(results => console.log("AllSettled:", results));

// 4. Promise.race - resolves/rejects as soon as one promise settles
Promise.race([promise1, failingPromise])
  .then(result => console.log("Race:", result))
  .catch(err => console.error("Race Error:", err));

// 5. Promise.any - resolves with the first successful promise
Promise.any([failingPromise, promise2, promise3])
  .then(result => console.log("Any:", result))
  .catch(err => console.error("Any Error:", err));`;

  const reactExample = `// React Example using Promises
import React, { useState, useEffect } from 'react';

function PromisesComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Data loaded!"), 1000));
    const promise2 = Promise.resolve("Immediate data");
    const promise3 = Promise.reject("Failed fetch");

    // Using then/catch/finally
    promise1
      .then(res => setMessages(prev => [...prev, "Then: " + res]))
      .catch(err => setMessages(prev => [...prev, "Catch: " + err]))
      .finally(() => setMessages(prev => [...prev, "Finally: Promise1 completed"]));

    // Using Promise.all
    Promise.all([promise1, promise2])
      .then(results => setMessages(prev => [...prev, "All: " + results.join(", ")]))
      .catch(err => setMessages(prev => [...prev, "All Catch: " + err]));

    // Using Promise.race
    Promise.race([promise1, promise3])
      .then(res => setMessages(prev => [...prev, "Race: " + res]))
      .catch(err => setMessages(prev => [...prev, "Race Error: " + err]));

    // Using Promise.any
    Promise.any([promise3, promise2])
      .then(res => setMessages(prev => [...prev, "Any: " + res]))
      .catch(err => setMessages(prev => [...prev, "Any Error: " + err]));

  }, []);

  return (
    <div>
      <h2>Promises Methods in React</h2>
      {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
    </div>
  );
}

export default PromisesComponent;`;

  const explanation = `// Explanation
// 1. then(): executes when the promise is fulfilled.
// 2. catch(): executes when the promise is rejected.
// 3. finally(): always executes after then/catch, regardless of outcome.
// 4. Promise.all(): waits for all promises to fulfill; rejects if any fail.
// 5. Promise.allSettled(): waits for all promises; returns status of each promise.
// 6. Promise.race(): resolves/rejects as soon as the first promise settles.
// 7. Promise.any(): resolves with the first fulfilled promise; rejects if all fail.
// 8. In React, Promises are often used inside useEffect for API calls, and state updates can be chained with then/catch/finally.`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-4">💎 JavaScript Promises & Methods</h1>

      <p className="mb-4">
        Promises provide a way to handle asynchronous operations in a clean and manageable way.
      </p>

      <h2 className="text-xl font-semibold mt-6">🔹 JavaScript Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {jsExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 React Example</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {reactExample}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">🔹 Explanation</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {explanation}
      </SyntaxHighlighter>
    </div>
  );
}
