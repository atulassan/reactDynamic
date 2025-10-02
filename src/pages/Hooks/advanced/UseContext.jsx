import React, { createContext, useContext, useReducer } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Create Context
const ThemeContext = createContext();

// ✅ Reducer for theme toggling
const initialState = { darkMode: false };
function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      throw new Error("Unknown action type");
  }
}

// ✅ Provider Component
function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Component consuming context
function ThemeToggler() {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div
      className={`p-4 rounded-lg ${
        state.darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <p>Current Theme: {state.darkMode ? "Dark" : "Light"}</p>
      <button
        onClick={() => dispatch({ type: "toggle" })}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

// ✅ Syntax examples
const codeBasic = `// Create context
const ThemeContext = createContext();

// Provide context
<ThemeContext.Provider value={{ theme, setTheme }}>
  <YourComponent />
</ThemeContext.Provider>

// Consume context
const { theme, setTheme } = useContext(ThemeContext);`;

const codeReducer = `// useContext + useReducer
const initialState = { darkMode: false };
function themeReducer(state, action) {
  switch(action.type) {
    case "toggle": return { darkMode: !state.darkMode };
    default: throw new Error("Unknown action");
  }
}
const { state, dispatch } = useContext(ThemeContext);
dispatch({ type: "toggle" });`;

export default function UseContext() {
  return (
    <div className="p-6 animate-fadeIn space-y-6">
      <h1 className="text-3xl font-bold mb-4">🌐 useContext Hook</h1>
      <p>
        The <code>useContext</code> hook lets you access React context values
        directly without prop drilling. You can combine it with <code>useReducer</code> for advanced state management.
      </p>

      {/* Live Demo */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Live Demo</h2>
        <ThemeProvider>
          <ThemeToggler />
        </ThemeProvider>
      </section>

      {/* Syntax Highlighter */}
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 Basic Example</h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeBasic}
        </SyntaxHighlighter>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          🔹 useContext + useReducer
        </h2>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeReducer}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
