import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Child component 1
function TemperatureInput({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="block font-semibold">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}

// Child component 2 (optional)
function BoilingVerdict({ celsius }) {
  return (
    <p className="text-gray-700">
      {celsius >= 100 ? "💧 Water would boil!" : "❌ Water would not boil."}
    </p>
  );
}

export default function LiftingStateUp() {
  const [temperature, setTemperature] = useState("");

  return (
    <div className="p-6 animate-fadeIn space-y-6 bg-gray-50 rounded">
      <h1 className="text-3xl font-bold">🔹 Lifting State Up</h1>

      <section className="bg-white p-4 rounded border space-y-4">
        <h2 className="text-2xl font-semibold">Temperature Converter</h2>

        {/* Celsius Input */}
        <TemperatureInput
          label="Celsius"
          value={temperature}
          onChange={setTemperature}
        />

        {/* Boiling Verdict */}
        <BoilingVerdict celsius={Number(temperature)} />

        {/* Explanation */}
        <div className="bg-gray-100 p-3 rounded space-y-2">
          <h3 className="font-semibold">Explanation</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              The <strong>temperature state</strong> is lifted up to the parent.
            </li>
            <li>
              Both children (input & verdict) use the same state via props.
            </li>
            <li>
              This ensures consistent and synchronized UI.
            </li>
          </ul>
        </div>

        {/* Syntax Highlighter */}
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="rounded"
        >
          {`// Parent component holds state
const [temperature, setTemperature] = useState('');

// Child input
<TemperatureInput value={temperature} onChange={setTemperature} />

// Child verdict
<BoilingVerdict celsius={Number(temperature)} />`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
