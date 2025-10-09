import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventDelegation() {
  const handleClick = (e) => {
    console.log(e.target);
    const item = e.target.tagName;
    if (item === "LI") {
      alert(`You clicked on: ${e.target.getAttribute('data-item')} LI`);
    }
  };

  return (
    <div className="p-6 animate-fadeIn space-y-4 bg-gray-50 rounded">
      <h1 className="text-2xl font-bold">🔹 Event Delegation Example</h1>

      <p data-start="218" data-end="346"><strong data-start="218" data-end="238">Event Delegation</strong> is a pattern where <strong data-start="258" data-end="343">a single event listener on a parent element handles events for its child elements</strong>.</p>

    <ul data-start="347" data-end="508">
<li data-start="347" data-end="445">
<p data-start="349" data-end="445">Instead of attaching event listeners to each child, you attach <strong data-start="412" data-end="442">one listener to the parent</strong>.</p>
</li>
<li data-start="446" data-end="508">
<p data-start="448" data-end="508">Useful for <strong data-start="459" data-end="505">dynamic lists or large numbers of elements</strong>.</p>
</li>
</ul>

<p data-start="2005" data-end="2024">✅ <strong data-start="2007" data-end="2022">Key Points:</strong></p>

<ul data-start="2025" data-end="2242">
<li data-start="2025" data-end="2086">
<p data-start="2027" data-end="2086">The <strong data-start="2031" data-end="2046"><code data-start="2033" data-end="2037">ul</code> parent</strong> handles clicks for all <code data-start="2070" data-end="2074">li</code> children.</p>
</li>
<li data-start="2087" data-end="2157">
<p data-start="2089" data-end="2157">The <strong data-start="2093" data-end="2117">child data attribute</strong> identifies which element was clicked.</p>
</li>
<li data-start="2158" data-end="2242">
<p data-start="2160" data-end="2242">Efficient for <strong data-start="2174" data-end="2200">dynamic or large lists</strong> instead of adding individual listeners.</p>
</li>
</ul>

      <ul
        onClick={handleClick}
        className="border rounded p-4 space-y-2 bg-white"
      >
        <li data-item="Item 1" className="p-2 bg-gray-100 rounded cursor-pointer">
          Item 1
        </li>
        <li data-item="Item 2" className="p-2 bg-gray-100 rounded cursor-pointer">
          Item 2
        </li>
        <li data-item="Item 3" className="p-2 bg-gray-100 rounded cursor-pointer">
          Item 3
        </li>
      </ul>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Single parent handles clicks for child elements
const handleClick = (e) => {
  const item = e.target.tagName;
    if (item === "LI") {
    alert('You clicked on: ' + e.target.getAttribute('data-item') + 'LI');
  }
};

<ul onClick={handleClick}>
  <li data-item="Item 1">Item 1</li>
  <li data-item="Item 2">Item 2</li>
</ul>`}
      </SyntaxHighlighter>
    </div>
  );
}
