import React, { useReducer } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Initial state
const initialState = { count: 0 };

// ✅ Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const codeExample = `// Basic useReducer example
const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: throw new Error("Unknown action");
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

<button onClick={() => dispatch({ type: "increment" })}>Increment</button>;`;

  const codeAdvanced = `// useReducer for complex form state
const initialForm = { name: "", email: "" };

function formReducer(state, action) {
  switch(action.type) {
    case "setName": return { ...state, name: action.payload };
    case "setEmail": return { ...state, email: action.payload };
    case "reset": return initialForm;
    default: throw new Error("Unknown action");
  }
}

const [formState, formDispatch] = useReducer(formReducer, initialForm);`;

  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">🗂️ useReducer Hook</h1>
      <p>
        The <code>useReducer</code> hook is used for **complex state logic** where multiple state
        variables are related or when next state depends on previous state.
      </p>

      {/* Basic Counter */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Counter Example</h2>
        <p>Increment, decrement, and reset count using <code>useReducer</code>:</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Reset
          </button>
        </div>
        <p className="mt-2 text-lg font-medium">Count: {state.count}</p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeExample}
        </SyntaxHighlighter>
      </section>

      {/* Advanced Form Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Advanced Form State</h2>
        <p>
          You can also manage **complex forms** with multiple fields using <code>useReducer</code>.
        </p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeAdvanced}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
