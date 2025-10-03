// CORS.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CORS() {
  const fetchCode = `// In React (frontend)
fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("CORS Error:", err));`;

  const serverExpressCode = `// In Node.js/Express backend
const express = require("express");
const cors = require("cors");
const app = express();

// Allow all origins
app.use(cors());

// Or allow specific origins
// app.use(cors({ origin: "http://localhost:3000" }));

app.get("/data", (req, res) => {
  res.json({ message: "CORS works!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));`;

  const springBootCode = `// In Spring Boot (Java)
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {
    @GetMapping("/data")
    public String getData() {
        return "CORS works!";
    }
}`;

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">🌍 CORS (Cross-Origin Resource Sharing)</h1>
      <p className="mb-4">
        CORS is a security mechanism implemented by browsers to prevent unauthorized cross-origin requests.  
        To fix CORS errors, you need to configure the **server** to send proper headers.
      </p>

      <h2 className="text-xl font-semibold mt-6">1️⃣ Example: Fetch from React</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {fetchCode}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">2️⃣ Fix in Node.js / Express</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {serverExpressCode}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">3️⃣ Fix in Spring Boot</h2>
      <SyntaxHighlighter language="java" style={oneDark}>
        {springBootCode}
      </SyntaxHighlighter>

      <h2 className="text-xl font-semibold mt-6">✅ Key Notes</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>CORS errors happen on the browser (not server-to-server).</li>
        <li>Server must send headers like <code>Access-Control-Allow-Origin</code>.</li>
        <li>In dev, use a proxy (e.g., Vite/CRA proxy) to avoid CORS locally.</li>
        <li>Never use <code>"*"</code> for production unless it’s a public API.</li>
      </ul>
    </div>
  );
}
