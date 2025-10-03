// StorageTypes.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StorageTypes() {
    const localCode = `// localStorage (persists even after closing browser)
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
localStorage.removeItem("theme");`;

    const sessionCode = `// sessionStorage (cleared when tab is closed)
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // "abc123"
sessionStorage.clear();`;

    const cookieCode = `// Cookies (small data, sent with HTTP requests)
// Set cookie
document.cookie = "username=John; path=/; max-age=3600"; 
// Read cookie
console.log(document.cookie); // "username=John"`;

    const indexedDBCode = `// IndexedDB (for large structured storage)
let request = indexedDB.open("MyDatabase", 1);

request.onsuccess = (event) => {
  let db = event.target.result;
  console.log("DB opened:", db);
};

request.onupgradeneeded = (event) => {
  let db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};`;

    return (
        <div className="p-6 animate-fadeIn">
            <h1 className="text-2xl font-bold mb-4">💾 Storage Types in JavaScript</h1>
            <p className="mb-4">
                JavaScript provides multiple storage options for persisting data in the
                browser. Each has its own scope, limitations, and use cases.
            </p>

            <h2 data-start="170" data-end="203">📌 Storage Types in JavaScript</h2>

            <table data-start="205" data-end="793" class="w-fit min-w-(--thread-content-width)"><thead data-start="205" data-end="313"><tr data-start="205" data-end="313"><th data-start="205" data-end="225" data-col-size="sm">Storage Type</th><th data-start="225" data-end="253" data-col-size="sm">Scope</th><th data-start="253" data-end="273" data-col-size="sm">Expiry</th><th data-start="273" data-end="286" data-col-size="sm">Size Limit</th><th data-start="286" data-end="313" data-col-size="sm">Accessible from Server?</th></tr></thead><tbody data-start="424" data-end="793"><tr data-start="424" data-end="516"><td data-start="424" data-end="444" data-col-size="sm"><strong data-start="426" data-end="442">localStorage</strong></td><td data-start="444" data-end="472" data-col-size="sm">Browser, per domain</td><td data-start="472" data-end="496" data-col-size="sm">Never (until cleared)</td><td data-start="496" data-end="508" data-col-size="sm">~5-10 MB</td><td data-start="508" data-end="516" data-col-size="sm">❌ No</td></tr><tr data-start="517" data-end="605"><td data-start="517" data-end="537" data-col-size="sm"><strong data-start="519" data-end="537">sessionStorage</strong></td><td data-start="537" data-end="565" data-col-size="sm">Browser tab, per session</td><td data-start="565" data-end="585" data-col-size="sm">On tab close</td><td data-start="585" data-end="597" data-col-size="sm">~5 MB</td><td data-start="597" data-end="605" data-col-size="sm">❌ No</td></tr><tr data-start="606" data-end="704"><td data-start="606" data-end="626" data-col-size="sm"><strong data-start="608" data-end="619">Cookies</strong></td><td data-start="626" data-end="654" data-col-size="sm">Browser + Server</td><td data-start="654" data-end="687" data-col-size="sm">Optional (set by server or JS)</td><td data-start="687" data-end="695" data-col-size="sm">~4 KB</td><td data-start="695" data-end="704" data-col-size="sm">✅ Yes</td></tr><tr data-start="705" data-end="793"><td data-start="705" data-end="725" data-col-size="sm"><strong data-start="707" data-end="720">IndexedDB</strong></td><td data-start="725" data-end="753" data-col-size="sm">Browser database storage</td><td data-start="753" data-end="773" data-col-size="sm">Persistent</td><td data-start="773" data-end="785" data-col-size="sm">100MB+</td><td data-start="785" data-end="793" data-col-size="sm">❌ No</td></tr></tbody></table>

            <h2 className="text-xl font-semibold mt-6">1️⃣ localStorage</h2>
            <p className="mb-2">Stores data permanently in the browser (until manually cleared).</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
                {localCode}
            </SyntaxHighlighter>

            <h2 className="text-xl font-semibold mt-6">2️⃣ sessionStorage</h2>
            <p className="mb-2">Stores data temporarily for a single tab session.</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
                {sessionCode}
            </SyntaxHighlighter>

            <h2 className="text-xl font-semibold mt-6">3️⃣ Cookies</h2>
            <p className="mb-2">Used for small data (auth, preferences). Can be sent to server.</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
                {cookieCode}
            </SyntaxHighlighter>

            <h2 className="text-xl font-semibold mt-6">4️⃣ IndexedDB</h2>
            <p className="mb-2">Database storage in the browser for large structured data.</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
                {indexedDBCode}
            </SyntaxHighlighter>

            <h2 className="text-xl font-semibold mt-6">✅ When to Use?</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
                <li><b>localStorage</b>: Save user settings (theme, language).</li>
                <li><b>sessionStorage</b>: Store temporary data (form drafts, tokens).</li>
                <li><b>Cookies</b>: Authentication, server communication.</li>
                <li><b>IndexedDB</b>: Offline apps, large data (notes, media, caching).</li>
            </ul>
        </div>
    );
}
