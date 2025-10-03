// ServiceWorkers.jsx
import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ServiceWorkers() {
  const registerCode = `// index.js or main.jsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => console.log("Service Worker registered:", reg))
      .catch(err => console.error("SW registration failed:", err));
  });
}
`;

  const serviceWorkerCode = `// service-worker.js
const CACHE_NAME = "v1";
const urlsToCache = ["/", "/index.html", "/styles.css", "/script.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (response) => response || fetch(event.request)
    )
  );
});`;

  const unregisterCode = `// To unregister service worker
navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (let reg of registrations) {
    reg.unregister();
  }
});`;

  useEffect(() => {
    console.log("Service Workers component mounted");
  }, []);

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">⚡ Service Workers in React</h1>
      <p className="mb-4">
        Service Workers allow background scripts to cache assets and enable
        offline-first experiences, push notifications, and background sync.
      </p>

      {/* Example 1: Registering */}
      <h2 className="text-xl font-semibold mt-6">1️⃣ Register a Service Worker</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {registerCode}
      </SyntaxHighlighter>

      {/* Example 2: Service Worker File */}
      <h2 className="text-xl font-semibold mt-6">2️⃣ Example service-worker.js</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {serviceWorkerCode}
      </SyntaxHighlighter>

      {/* Example 3: Unregister */}
      <h2 className="text-xl font-semibold mt-6">3️⃣ Unregistering Service Workers</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {unregisterCode}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">✅ Key Points</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>Runs in the background, separate from JS main thread</li>
        <li>Can intercept network requests and serve cached responses</li>
        <li>Only works on HTTPS (except for localhost)</li>
        <li>Used for Progressive Web Apps (PWAs)</li>
      </ul>
    </div>
  );
}
