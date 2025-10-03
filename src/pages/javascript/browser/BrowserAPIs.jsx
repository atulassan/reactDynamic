// BrowserAndAdvancedAPIs.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BrowserAndAdvancedAPIs() {
  const geoCode = `// Geolocation API
navigator.geolocation.getCurrentPosition(
  (pos) => console.log(pos.coords.latitude, pos.coords.longitude),
  (err) => console.error(err)
);`;

  const notifCode = `// Notifications API
if (Notification.permission === "granted") {
  new Notification("Hello from Browser API!");
} else {
  Notification.requestPermission();
}`;

  const clipboardCode = `// Clipboard API
navigator.clipboard.writeText("Copied text!");
navigator.clipboard.readText().then((text) => console.log(text));`;

  const fetchCode = `// Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));`;

  const wsCode = `// WebSocket API
let socket = new WebSocket("wss://echo.websocket.org");
socket.onopen = () => socket.send("Hello WebSocket!");
socket.onmessage = (event) => console.log("Received:", event.data);`;

  const workerCode = `// Web Worker (worker.js)
self.onmessage = (e) => {
  const result = e.data * 2;
  postMessage(result);
};`;


  const serviceWorkerCode = `// Service Worker (sw.js)
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});
self.addEventListener("fetch", (event) => {
  console.log("Intercepting fetch:", event.request.url);
});`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">🌐 Browser & Advanced APIs</h1>
      <p className="mb-4">
        Modern browsers expose powerful APIs for interacting with the system,
        network, and background processes. Let’s explore a few:
      </p>

      {/* Geolocation */}
      <h2 className="text-xl font-semibold mt-6">1️⃣ Geolocation API</h2>
      <p className="mb-2">Get user’s current location (requires permission).</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {geoCode}
      </SyntaxHighlighter>

      {/* Notifications */}
      <h2 className="text-xl font-semibold mt-6">2️⃣ Notifications API</h2>
      <p className="mb-2">Show native notifications to the user.</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {notifCode}
      </SyntaxHighlighter>

      {/* Clipboard */}
      <h2 className="text-xl font-semibold mt-6">3️⃣ Clipboard API</h2>
      <p className="mb-2">Read and write text to the clipboard.</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {clipboardCode}
      </SyntaxHighlighter>

      {/* Fetch */}
      <h2 className="text-xl font-semibold mt-6">4️⃣ Fetch API</h2>
      <p className="mb-2">Make HTTP requests (modern replacement for XMLHttpRequest).</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {fetchCode}
      </SyntaxHighlighter>

      {/* WebSockets */}
      <h2 className="text-xl font-semibold mt-6">5️⃣ WebSocket API</h2>
      <p className="mb-2">Real-time bidirectional communication with servers.</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {wsCode}
      </SyntaxHighlighter>

      {/* Web Workers */}
      <h2 className="text-xl font-semibold mt-6">6️⃣ Web Workers</h2>
      <p className="mb-2">Run JavaScript in background threads (off main UI thread).</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {workerCode}
      </SyntaxHighlighter>

      {/* Service Workers */}
      <h2 className="text-xl font-semibold mt-6">7️⃣ Service Workers</h2>
      <p className="mb-2">Enable offline apps, caching, and background sync.</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {serviceWorkerCode}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">✅ Summary</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li><b>Geolocation</b>: Access user’s location.</li>
        <li><b>Notifications</b>: Show native push messages.</li>
        <li><b>Clipboard</b>: Copy/paste programmatically.</li>
        <li><b>Fetch</b>: Modern API for HTTP requests.</li>
        <li><b>WebSockets</b>: Real-time communication.</li>
        <li><b>Web Workers</b>: Multithreading in JS.</li>
        <li><b>Service Workers</b>: Offline caching, PWA support.</li>
      </ul>
    </div>
  );
}
