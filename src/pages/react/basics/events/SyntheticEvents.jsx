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


    <p>React ல Synthetic Events னா என்னன்னா, அது ஒரு wrapper. Browser ஓட native event system மேல React உருவாக்குன ஒரு cross-browser wrapper தான் இது. இது எதுக்குன்னா, எல்லா browser லயும் events (click, change etc.) ஒரே மாதிரி work பண்ணணும்னு React இதை use பண்ணுது. இது event object ஐ normalize பண்ணுது, so `e.stopPropagation()` and `e.preventDefault()` எல்லா browser லயும் ஒரே மாதிரி வேலை செய்யும்.
இது native events கிடையாது, React ஓட சொந்த event system. </p>

<p>Synthetic Events is a React’s universal event wrapper.<br />
They make events behave the same across all browsers and let methods like<br />
e.preventDefault() and e.stopPropagation() work consistently everywhere.</p>

<p>Synthetic events in React are a cross-browser wrapper around the browser's native event system. React creates these to ensure that events (like clicks or changes) behave consistently across all browsers. They normalize the event object, so methods like `e.stopPropagation()` and `e.preventDefault()` work the same everywhere.
<br />
<br />

<p>"Event pooled" னா, React performance ஐ improve பண்றதுக்காக event objects ஐ reuse பண்ணுதுன்னு அர்த்தம்.
<br /><br />
ஒவ்வொரு event க்கும் (like click, change) ஒரு brand new event object ஐ create பண்ணாம, React ஏற்கனேவே இருக்குற object ஐயே எடுத்து, அதுல புது event ஓட data வை fill பண்ணி reuse பண்ணும்.
<br /><br />
இதனால, event handler run ஆகி முடிஞ்சதும், அந்த event object ஓட properties null ஆகிடும். So, நீங்க event properties ஐ அப்புறமா access பண்ணனும்னா, ⁠ e.persist() ⁠ call பண்ணனும்.</p>


"Event pooling" means React reuses event objects for performance. Instead of creating a new object for each event, React takes an existing one, fills it with the new event's data, and reuses it. This means after an event handler runs, the event object's properties are nullified. If you need to access event properties asynchronously, you must call `e.persist()`.</p>

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
