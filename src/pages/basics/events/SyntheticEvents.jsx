import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SyntheticEvents() {
  const handleClick = (e) => {
    e.preventDefault();
    alert(`Button clicked! Type: ${e.type}`);
  };

  return (
    <div className="p-4 bg-white rounded border space-y-4">
      <h2 className="text-2xl font-bold">1️⃣ Synthetic Events</h2>

    <h2 data-start="154" data-end="187"><strong data-start="157" data-end="187">What are Synthetic Events?</strong></h2>
<p data-start="189" data-end="278"><strong data-start="189" data-end="209">Synthetic Events</strong> in React are <strong data-start="223" data-end="271">wrapper objects around native browser events</strong>. They:</p>
<ol data-start="280" data-end="679">
<li data-start="280" data-end="390">
<p data-start="283" data-end="390">Normalize event behavior across <strong data-start="315" data-end="337">different browsers</strong>, so you don't need to worry about inconsistencies.</p>
</li>
<li data-start="391" data-end="489">
<p data-start="394" data-end="489">Provide a <strong data-start="404" data-end="422">consistent API</strong> for all React events, including mouse, keyboard, form, and more.</p>
</li>
<li data-start="490" data-end="679">
<p data-start="493" data-end="679">Are part of <strong data-start="505" data-end="540">React's event delegation system</strong>, meaning React attaches a <strong data-start="567" data-end="615">single event listener to the root of the DOM</strong> and dispatches events through its <strong data-start="650" data-end="676">synthetic event system</strong>.</p>
</li>
</ol>

<p data-start="1746" data-end="1764"><strong data-start="1746" data-end="1762">Explanation:</strong></p>
<ul data-start="1766" data-end="1959">
<li data-start="1766" data-end="1818">
<p data-start="1768" data-end="1818"><code data-start="1768" data-end="1771">e</code> is a <strong data-start="1777" data-end="1795">SyntheticEvent</strong>, not a native event.</p>
</li>
<li data-start="1819" data-end="1898">
<p data-start="1821" data-end="1898">Supports <code data-start="1830" data-end="1848">preventDefault()</code>, <code data-start="1850" data-end="1869">stopPropagation()</code>, etc., like native events.</p>
</li>
<li data-start="1899" data-end="1959">
<p data-start="1901" data-end="1959"><code data-start="1901" data-end="1909">e.type</code> gives the event type (<code data-start="1932" data-end="1939">click</code>, <code data-start="1941" data-end="1949">change</code>, etc.).</p>
</li>
</ul>

<h3 data-start="3226" data-end="3261">✅ <strong data-start="3232" data-end="3261">Why Use Synthetic Events?</strong></h3>

<ol data-start="3263" data-end="3561">
<li data-start="3263" data-end="3363">
<p data-start="3266" data-end="3363"><strong data-start="3266" data-end="3295">Cross-browser consistency</strong> → no need for multiple <code data-start="3319" data-end="3337">addEventListener</code> for different browsers.</p>
</li>
<li data-start="3364" data-end="3432">
<p data-start="3367" data-end="3432"><strong data-start="3367" data-end="3395">Performance optimization</strong> → uses event delegation &amp; pooling.</p>
</li>
<li data-start="3433" data-end="3479">
<p data-start="3436" data-end="3479"><strong data-start="3436" data-end="3451">Ease of use</strong> → simple and uniform API.</p>
</li>
<li data-start="3480" data-end="3561">
<p data-start="3483" data-end="3561"><strong data-start="3483" data-end="3512">Works seamlessly with JSX</strong> → no need to manually attach/detach listeners.</p>
</li>
</ol>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Click Me
      </button>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Synthetic event example
<button onClick={(e) => { e.preventDefault(); alert(e.type); }}>
  Click Me
</button>`}
      </SyntaxHighlighter>
    </div>
  );
}
