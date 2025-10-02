import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const LifecycleMethodsClass = () => {



  return (
    <div className="p-6 animate-fadeIn">
      <h1>Lifecycle Methods in Class Components</h1>
      <h2 data-start="191" data-end="240"><strong data-start="194" data-end="240">React Lifecycle Methods (Class Components)</strong></h2>
      <p data-start="242" data-end="307">A <strong data-start="244" data-end="263">class component</strong> in React goes through <strong data-start="286" data-end="306">different phases</strong>:</p>
      <ol data-start="309" data-end="605">
        <li data-start="309" data-end="385">
          <p data-start="312" data-end="385"><strong data-start="312" data-end="324">Mounting</strong> – When the component is created and inserted into the DOM.</p>
        </li>
        <li data-start="386" data-end="473">
          <p data-start="389" data-end="473"><strong data-start="389" data-end="401">Updating</strong> – When the component is re-rendered due to changes in props or state.</p>
        </li>
        <li data-start="474" data-end="539">
          <p data-start="477" data-end="539"><strong data-start="477" data-end="491">Unmounting</strong> – When the component is removed from the DOM.</p>
        </li>
        <li data-start="540" data-end="605">
          <p data-start="543" data-end="605"><strong data-start="543" data-end="561">Error Handling</strong> – When a child component throws an error.</p>
        </li>
      </ol>
      <hr data-start="186" data-end="189"></hr>
      <h3 data-start="612" data-end="638"><strong data-start="616" data-end="638">1️⃣ Mounting Phase</strong></h3>
      <p data-start="640" data-end="692">Methods called in order when a component is mounted:</p>
  <table data-start="694" data-end="1020" class="w-fit min-w-(--thread-content-width)"><thead data-start="694" data-end="718"><tr data-start="694" data-end="718"><th data-start="694" data-end="703" data-col-size="sm">Method</th><th data-start="703" data-end="718" data-col-size="md">Description</th></tr></thead><tbody data-start="744" data-end="1020"><tr data-start="744" data-end="800"><td data-start="744" data-end="762" data-col-size="sm"><code data-start="746" data-end="761">constructor()</code></td><td data-start="762" data-end="800" data-col-size="md">Initialize state and bind methods.</td></tr><tr data-start="801" data-end="879"><td data-start="801" data-end="839" data-col-size="sm"><code data-start="803" data-end="838">static getDerivedStateFromProps()</code></td><td data-start="839" data-end="879" data-col-size="md">Sync state with props before render.</td></tr><tr data-start="880" data-end="920"><td data-start="880" data-end="893" data-col-size="sm"><code data-start="882" data-end="892">render()</code></td><td data-start="893" data-end="920" data-col-size="md">Returns JSX to display.</td></tr><tr data-start="921" data-end="1020"><td data-start="921" data-end="945" data-col-size="sm"><code data-start="923" data-end="944">componentDidMount()</code></td><td data-start="945" data-end="1020" data-col-size="md">Invoked after component mounts. Perfect for API calls or subscriptions.</td></tr></tbody></table>
    
    {/* Syntax Highlighting */}
          <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
            {`import React, { Component } from "react";

export default class MountingExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Initialize state");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Sync state with props");
    return null; // No state change
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }

  render() {
    console.log("Render method called");
    return (
      <div className="p-6 bg-gray-50 rounded space-y-4">
        <h2 className="text-2xl font-bold">Mounting Phase Example</h2>
        <p>Count: {this.state.count}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}
`}
          </SyntaxHighlighter>
    

<hr data-start="1982" data-end="1985"></hr>

<h3 data-start="1987" data-end="2013"><strong data-start="1991" data-end="2013">2️⃣ Updating Phase</strong></h3>

<p data-start="2015" data-end="2084">Methods called in order when component updates due to state or props:</p>

<table data-start="2086" data-end="2534" class="w-fit min-w-(--thread-content-width)"><thead data-start="2086" data-end="2110"><tr data-start="2086" data-end="2110"><th data-start="2086" data-end="2095" data-col-size="sm">Method</th><th data-start="2095" data-end="2110" data-col-size="md">Description</th></tr></thead><tbody data-start="2136" data-end="2534"><tr data-start="2136" data-end="2222"><td data-start="2136" data-end="2174" data-col-size="sm"><code data-start="2138" data-end="2173">static getDerivedStateFromProps()</code></td><td data-start="2174" data-end="2222" data-col-size="md">Sync state with props before render (again).</td></tr><tr data-start="2223" data-end="2301"><td data-start="2223" data-end="2251" data-col-size="sm"><code data-start="2225" data-end="2250">shouldComponentUpdate()</code></td><td data-start="2251" data-end="2301" data-col-size="md">Return <code data-start="2260" data-end="2266">true</code> or <code data-start="2270" data-end="2277">false</code> to control re-render.</td></tr><tr data-start="2302" data-end="2336"><td data-start="2302" data-end="2315" data-col-size="sm"><code data-start="2304" data-end="2314">render()</code></td><td data-start="2315" data-end="2336" data-col-size="md">Render JSX again.</td></tr><tr data-start="2337" data-end="2426"><td data-start="2337" data-end="2367" data-col-size="sm"><code data-start="2339" data-end="2366">getSnapshotBeforeUpdate()</code></td><td data-start="2367" data-end="2426" data-col-size="md">Capture info before DOM updates (like scroll position).</td></tr><tr data-start="2427" data-end="2534"><td data-start="2427" data-end="2452" data-col-size="sm"><code data-start="2429" data-end="2451">componentDidUpdate()</code></td><td data-start="2452" data-end="2534" data-col-size="md">Runs after update, perfect for network requests based on previous props/state.</td></tr></tbody></table>

{/* Syntax Highlighting */}
          <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
            {`import React, { Component } from "react";

export default class UpdatingExample extends Component {
  state = { count: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return nextState.count % 2 === 0; // Only update on even numbers
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated. Previous count: {prevState.count}');
  }

  render() {
    console.log("Render called for updating");
    return (
      <div className="p-6 bg-gray-50 rounded space-y-4">
        <h2 className="text-2xl font-bold">Updating Phase Example</h2>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
      </div>
    );
  }
}
`}
          </SyntaxHighlighter>

<hr data-start="186" data-end="189"></hr>

<h3 data-start="3456" data-end="3484"><strong data-start="3460" data-end="3484">3️⃣ Unmounting Phase</strong></h3>

<ul data-start="3486" data-end="3646">
<li data-start="3486" data-end="3535">
<p data-start="3488" data-end="3535">Only one method: <strong data-start="3505" data-end="3533"><code data-start="3507" data-end="3531">componentWillUnmount()</code></strong></p>
</li>
<li data-start="3536" data-end="3582">
<p data-start="3538" data-end="3582">Called just before a component is removed.</p>
</li>
<li data-start="3583" data-end="3646">
<p data-start="3585" data-end="3646">Ideal for cleanup: timers, subscriptions, or event listeners.</p>
</li>
</ul>

<SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
            {`componentWillUnmount() {
  console.log("Component will unmount, cleanup here");
}
`}
</SyntaxHighlighter>

<hr data-start="186" data-end="189"></hr>
<h3 data-start="3747" data-end="3779"><strong data-start="3751" data-end="3779">4️⃣ Error Handling Phase</strong></h3>
<ul data-start="3781" data-end="3984">
<li data-start="3781" data-end="3822">
<p data-start="3783" data-end="3822">Catch errors in <strong data-start="3799" data-end="3819">child components</strong>.</p>
</li>
<li data-start="3823" data-end="3984">
<p data-start="3825" data-end="3835">Methods:</p>
<ul data-start="3838" data-end="3984">
<li data-start="3838" data-end="3918">
<p data-start="3840" data-end="3918"><code data-start="3840" data-end="3880">static getDerivedStateFromError(error)</code> → update state to show fallback UI.</p>
</li>
<li data-start="3921" data-end="3984">
<p data-start="3923" data-end="3984"><code data-start="3923" data-end="3955">componentDidCatch(error, info)</code> → log errors or report them.</p>
</li>
</ul>
</li>
</ul>

<SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
            {`class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong!</h2>;
    return this.props.children;
  }
}`}
</SyntaxHighlighter>

<hr data-start="4355" data-end="4358"></hr>

<h3 data-start="4360" data-end="4381"><strong data-start="4364" data-end="4381">Key Takeaways</strong></h3>

<ol data-start="4383" data-end="4677">
<li data-start="4383" data-end="4434">
<p data-start="4386" data-end="4434"><strong data-start="4386" data-end="4398">Mounting</strong> → Initialize, render, fetch data.</p>
</li>
<li data-start="4435" data-end="4502">
<p data-start="4438" data-end="4502"><strong data-start="4438" data-end="4450">Updating</strong> → Control re-render, snapshot before DOM changes.</p>
</li>
<li data-start="4503" data-end="4534">
<p data-start="4506" data-end="4534"><strong data-start="4506" data-end="4520">Unmounting</strong> → Clean up.</p>
</li>
<li data-start="4535" data-end="4599">
<p data-start="4538" data-end="4599"><strong data-start="4538" data-end="4556">Error Handling</strong> → Graceful fallback UI for child errors.</p>
</li>
<li data-start="4600" data-end="4677">
<p data-start="4603" data-end="4677">Lifecycle methods give <strong data-start="4626" data-end="4650">fine-grained control</strong> over component behavior.</p>
</li>
</ol>

    </div>




  );
};

export default LifecycleMethodsClass;
