import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function EventBubbling() {
  const handleParentClick = () => alert("Parent clicked!");
  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevent bubbling
    alert("Child clicked!");
  };

  return (
    <div className="p-4 bg-white rounded border space-y-4">
      <h2 className="text-2xl font-bold">2️⃣ Event Bubbling</h2>

    <p>Okay, Event Bubbling பத்தி சொல்றேன்.<br />

Event Bubbling னா, ஒரு element ல ஒரு event (like a click) trigger ஆகும் போது, அந்த event முதல்ல அந்த element ல handle ஆகும். அப்புறம், அது parent element க்கு, அப்புறம் அதோட parent க்குன்னு DOM tree ல மேல போய்கிட்டே இருக்கும். இது ஒரு bubble மாதிரி மேல போறதுனால "bubbling" னு சொல்றோம்.
<br />
இது clear ஆச்சா? இப்போ இதை அப்படியே English ல சொல்றேன்.<br />
<br />

One-Line Definition: <br/>

Event Bubbling: The event starts from the target element and bubbles up through its ancestors in the DOM tree.<br/><br/>

Event bubbling is when an event, like a click, is triggered on an element. The event is first handled on that specific element, and then it propagates upwards through the DOM tree to its parent element, then to its parent's parent, and so on. We call it "bubbling" because it's like a bubble rising upwards.
</p>

      <div
        onClick={handleParentClick}
        className="p-4 border border-gray-400 rounded bg-gray-100"
      >
        Parent Div
        <button
          onClick={handleChildClick}
          className="ml-4 px-2 py-1 bg-blue-400 text-white rounded"
        >
          Child Button
        </button>
      </div>

      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
        {`// Event Bubbling
<div onClick={handleParentClick}>
  Parent Div
  <button onClick={(e) => { e.stopPropagation(); alert("Child clicked"); }}>
    Child Button
  </button>
</div>`}
      </SyntaxHighlighter>
    </div>
  );
}
