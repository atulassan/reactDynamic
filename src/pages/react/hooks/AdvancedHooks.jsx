import React, { useState, useReducer, useRef, useContext, useTransition, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Context Setup ---
const ThemeContext = React.createContext();

// --- Reducer Setup ---
function counterReducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: return state;
  }
}

// --- Custom Hook ---
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default function AdvancedHooks() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 10000; i++) newList.push(value + i);
      setList(newList);
    });
  };

  return (
    <div className={`p-6 animate-fadeIn ${theme === "light" ? "bg-white" : "bg-gray-800"} text-black space-y-6`}>
      <h1 className="text-3xl font-bold">🔹 Advanced Hooks (All in One)</h1>

      {/* --- useContext Example --- */}
      <section className="space-y-2 p-4 border rounded">
        <h2 className="text-2xl font-semibold">useContext</h2>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <p>Current Theme: <strong>{theme}</strong></p>
          <button onClick={toggleTheme} className="px-3 py-1 bg-blue-600 text-white rounded">Toggle Theme</button>
        </ThemeContext.Provider>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`const ThemeContext = React.createContext();
const { theme, toggleTheme } = useContext(ThemeContext);`}
        </SyntaxHighlighter>
      </section>

      {/* --- useReducer Example --- */}
      <section className="space-y-2 p-4 border rounded">
        <h2 className="text-2xl font-semibold">useReducer</h2>
        <p>Count: {state.count}</p>
        <div className="space-x-2">
          <button onClick={() => dispatch({ type: "increment" })} className="px-3 py-1 bg-green-600 text-white rounded">Increment</button>
          <button onClick={() => dispatch({ type: "decrement" })} className="px-3 py-1 bg-red-600 text-white rounded">Decrement</button>
          <button onClick={() => dispatch({ type: "reset" })} className="px-3 py-1 bg-gray-600 text-white rounded">Reset</button>
        </div>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`const [state, dispatch] = useReducer(counterReducer, { count: 0 });
dispatch({ type: "increment" });`}
        </SyntaxHighlighter>
      </section>

      {/* --- useRef Example --- */}
      <section className="space-y-2 p-4 border rounded">
        <h2 className="text-2xl font-semibold">useRef</h2>
        <input ref={inputRef} type="text" placeholder="Type here..." className="border p-2 rounded w-full" />
        <button onClick={() => inputRef.current.focus()} className="px-3 py-1 bg-purple-600 text-white rounded">Focus Input</button>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();`}
        </SyntaxHighlighter>
      </section>

      {/* --- useTransition Example --- */}
      <section className="space-y-2 p-4 border rounded">
        <h2 className="text-2xl font-semibold">useTransition</h2>
        <input value={inputValue} onChange={handleChange} placeholder="Type something..." className="border p-2 rounded w-full" />
        {isPending && <p className="text-red-600">Updating list...</p>}
        <p>List length: {list.length}</p>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`const [isPending, startTransition] = useTransition();
startTransition(() => { setList(newList) });`}
        </SyntaxHighlighter>
      </section>

      {/* --- Custom Hook Example --- */}
      <section className="space-y-2 p-4 border rounded">
        <h2 className="text-2xl font-semibold">Custom Hook (useFetch)</h2>
        {loading ? <p>Loading...</p> : <pre className="bg-gray-200 p-2 rounded overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>}
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(json => { setData(json); setLoading(false); });
  }, [url]);
  return { data, loading };
}`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
